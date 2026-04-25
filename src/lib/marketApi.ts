// ============================================================
// خدمة الأسواق المالية الحية (Server-side only)
// Pluggable provider layer for market quotes.
//
// Currently supported providers:
//   - finnhub      → https://finnhub.io
//   - twelvedata   → https://twelvedata.com
//   - mock         → returns fallback data (default when no key)
//
// IMPORTANT: This file must NEVER be imported in a client component.
// API keys live in process.env and must stay server-side only.
// ============================================================

import type {
  LiveMarketTick,
  MarketCategory,
  MarketsResponse,
} from "./types";
import { fallbackMarkets } from "./fallbackData";

type CanonicalSymbol = {
  symbol: string;
  name: string;
  category: MarketCategory;
  // Per-provider native symbols
  finnhub?: string;
  twelvedata?: string;
};

// Canonical universe of symbols we display.
// Adding a new symbol here is enough to make it appear everywhere.
const SYMBOLS: CanonicalSymbol[] = [
  // ── Forex ────────────────────────────────────────────────
  {
    symbol: "EUR/USD",
    name: "اليورو / الدولار",
    category: "forex",
    finnhub: "OANDA:EUR_USD",
    twelvedata: "EUR/USD",
  },
  {
    symbol: "GBP/USD",
    name: "الجنيه / الدولار",
    category: "forex",
    finnhub: "OANDA:GBP_USD",
    twelvedata: "GBP/USD",
  },
  {
    symbol: "USD/JPY",
    name: "الدولار / الين",
    category: "forex",
    finnhub: "OANDA:USD_JPY",
    twelvedata: "USD/JPY",
  },
  // ── Commodities ──────────────────────────────────────────
  {
    symbol: "XAU/USD",
    name: "الذهب",
    category: "commodities",
    finnhub: "OANDA:XAU_USD",
    twelvedata: "XAU/USD",
  },
  {
    symbol: "WTI",
    name: "النفط الخام",
    category: "commodities",
    finnhub: "OANDA:WTICO_USD",
    twelvedata: "WTI/USD",
  },
  // ── Indices ──────────────────────────────────────────────
  {
    symbol: "SPX",
    name: "ستاندرد آند بورز 500",
    category: "indices",
    finnhub: "^GSPC",
    twelvedata: "SPX",
  },
  {
    symbol: "IXIC",
    name: "ناسداك المركّب",
    category: "indices",
    finnhub: "^IXIC",
    twelvedata: "IXIC",
  },
  // ── Crypto ───────────────────────────────────────────────
  {
    symbol: "BTC/USD",
    name: "بيتكوين",
    category: "crypto",
    finnhub: "BINANCE:BTCUSDT",
    twelvedata: "BTC/USD",
  },
  {
    symbol: "ETH/USD",
    name: "إيثريوم",
    category: "crypto",
    finnhub: "BINANCE:ETHUSDT",
    twelvedata: "ETH/USD",
  },
];

// ───────────────────────────────────────────────────────────
// Public entry point
// ───────────────────────────────────────────────────────────
export async function getMarkets(): Promise<MarketsResponse> {
  const provider = (process.env.MARKET_API_PROVIDER || "mock").toLowerCase();
  const apiKey = process.env.MARKET_API_KEY;

  if (!apiKey || provider === "mock") {
    return {
      data: fallbackMarkets,
      source: "fallback",
      provider: "mock",
      fetchedAt: new Date().toISOString(),
      message:
        "البيانات المعروضة تجريبية. سيتم تفعيل البث الحي بعد ربط مزود البيانات.",
    };
  }

  try {
    const data =
      provider === "finnhub"
        ? await fetchFromFinnhub(apiKey)
        : provider === "twelvedata"
        ? await fetchFromTwelveData(apiKey)
        : null;

    if (!data || data.length === 0) {
      return {
        data: fallbackMarkets,
        source: "fallback",
        provider,
        fetchedAt: new Date().toISOString(),
        message:
          "تعذّر جلب الأسعار من المزود الحالي. يتم عرض بيانات تجريبية مؤقتاً.",
      };
    }

    return {
      data,
      source: "live",
      provider,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error("[marketApi] provider failure:", err);
    return {
      data: fallbackMarkets,
      source: "fallback",
      provider,
      fetchedAt: new Date().toISOString(),
      message:
        "حدث خطأ أثناء الاتصال بمزود الأسعار. يتم عرض بيانات تجريبية مؤقتاً.",
    };
  }
}

// ───────────────────────────────────────────────────────────
// Finnhub provider
// Docs: https://finnhub.io/docs/api/quote
// One quote endpoint per symbol → fan-out with limited concurrency.
// ───────────────────────────────────────────────────────────
async function fetchFromFinnhub(apiKey: string): Promise<LiveMarketTick[]> {
  const candidates = SYMBOLS.filter((s) => s.finnhub);

  const results = await Promise.all(
    candidates.map(async (s) => {
      const url = `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(
        s.finnhub!
      )}&token=${apiKey}`;
      try {
        const res = await fetch(url, {
          // 30s server cache — see route handler revalidate
          next: { revalidate: 30 },
        });
        if (!res.ok) return null;
        const j = (await res.json()) as {
          c?: number; // current
          d?: number; // change
          dp?: number; // % change
          h?: number;
          l?: number;
          o?: number;
          pc?: number; // previous close
          t?: number; // unix sec
        };
        if (typeof j.c !== "number" || j.c === 0) return null;
        const tick: LiveMarketTick = {
          symbol: s.symbol,
          name: s.name,
          category: s.category,
          price: j.c,
          change: typeof j.d === "number" ? j.d : 0,
          changePercent: typeof j.dp === "number" ? j.dp : 0,
          open: j.o,
          high: j.h,
          low: j.l,
          previousClose: j.pc,
          marketStatus: s.category === "crypto" ? "open" : "unknown",
          updatedAt: j.t
            ? new Date(j.t * 1000).toISOString()
            : new Date().toISOString(),
        };
        return tick;
      } catch (e) {
        console.error("[finnhub]", s.symbol, e);
        return null;
      }
    })
  );

  return results.filter((x): x is LiveMarketTick => x !== null);
}

// ───────────────────────────────────────────────────────────
// Twelve Data provider
// Docs: https://twelvedata.com/docs#quote
// Supports batch via comma-separated symbol list.
// ───────────────────────────────────────────────────────────
async function fetchFromTwelveData(
  apiKey: string
): Promise<LiveMarketTick[]> {
  const candidates = SYMBOLS.filter((s) => s.twelvedata);
  const symbolList = candidates.map((s) => s.twelvedata!).join(",");
  const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(
    symbolList
  )}&apikey=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 30 } });
  if (!res.ok) throw new Error(`twelvedata status ${res.status}`);
  const json = (await res.json()) as Record<string, unknown> | unknown;

  // Twelve Data returns an object keyed by symbol when batched,
  // or a single quote object when only one symbol is requested.
  const out: LiveMarketTick[] = [];
  for (const s of candidates) {
    const key = s.twelvedata!;
    const raw =
      typeof json === "object" && json !== null && key in (json as object)
        ? ((json as Record<string, unknown>)[key] as Record<string, unknown>)
        : (json as Record<string, unknown>);

    if (!raw || typeof raw !== "object") continue;
    const close = num(raw.close ?? raw.price);
    const change = num(raw.change);
    const percent = num(raw.percent_change);
    if (close === null) continue;

    out.push({
      symbol: s.symbol,
      name: s.name,
      category: s.category,
      price: close,
      change: change ?? 0,
      changePercent: percent ?? 0,
      open: num(raw.open) ?? undefined,
      high: num(raw.high) ?? undefined,
      low: num(raw.low) ?? undefined,
      previousClose: num(raw.previous_close) ?? undefined,
      marketStatus:
        raw.is_market_open === true
          ? "open"
          : raw.is_market_open === false
          ? "closed"
          : s.category === "crypto"
          ? "open"
          : "unknown",
      updatedAt: new Date().toISOString(),
    });
  }
  return out;
}

function num(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}
