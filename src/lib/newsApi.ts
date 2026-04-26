// ============================================================
// خدمة الأخبار المالية (Server-side only)
// Pluggable provider layer for financial news.
//
// Currently supported providers:
//   - newsapi      → https://newsapi.org
//   - gnews        → https://gnews.io
//   - marketaux    → https://www.marketaux.com
//   - mock         → returns fallback data (default when no key)
//
// Pipeline applied to every provider's response:
//   1) Drop items older than MAX_AGE_HOURS (default 72h).
//   2) Classify English title/summary against financial topic rules.
//      Items that don't match any financial rule are dropped.
//   3) Generate an Arabic title + Arabic summary from the matched rule.
//      Original English title/summary are preserved as `originalTitle`
//      and `originalSummary` for context.
//   4) Sort newest first; cap at MAX_ITEMS.
//
// IMPORTANT: This file must NEVER be imported in a client component.
// API keys live in process.env and must stay server-side only.
// ============================================================

import type {
  LiveNewsCategory,
  LiveNewsItem,
  NewsResponse,
} from "./types";
import { fallbackNews } from "./fallbackData";
import { classifyFinancial, detectBreaking } from "./translate";

// Time window we consider "recent" for users — older items are dropped.
const MAX_AGE_HOURS = 72;
const MAX_ITEMS = 30;

// Financial query reused across providers. Targets markets/forex/stocks/oil/
// gold/central banks/Fed/inflation/commodities, while excluding generic
// political news that's not market-impacting.
const FINANCIAL_QUERY =
  '("federal reserve" OR "central bank" OR "interest rate" OR inflation OR forex OR "stock market" OR "wall street" OR "S&P 500" OR nasdaq OR "Dow Jones" OR earnings OR "oil prices" OR opec OR brent OR "gold prices" OR commodities OR bitcoin OR ethereum OR cryptocurrency OR "treasury yield" OR "ECB" OR "Bank of England" OR "Bank of Japan" OR "PBOC" OR yuan OR yen)';

const NO_RECENT_MSG =
  "لا توجد أخبار حديثة متاحة من مزود الأخبار حاليًا.";

// ───────────────────────────────────────────────────────────
// Public entry point
// ───────────────────────────────────────────────────────────
export async function getNews(): Promise<NewsResponse> {
  const provider = (process.env.NEWS_API_PROVIDER || "mock").toLowerCase();
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey || provider === "mock") {
    return {
      data: fallbackNews,
      source: "fallback",
      provider: "mock",
      fetchedAt: new Date().toISOString(),
      message:
        "البيانات المعروضة تجريبية. سيتم تفعيل البث الحي بعد ربط مزود الأخبار.",
    };
  }

  try {
    const raw =
      provider === "newsapi"
        ? await fetchFromNewsApi(apiKey)
        : provider === "gnews"
        ? await fetchFromGNews(apiKey)
        : provider === "marketaux"
        ? await fetchFromMarketAux(apiKey)
        : null;

    if (!raw) {
      return fallbackResponse(provider);
    }

    const processed = processItems(raw);

    if (processed.length === 0) {
      // Provider replied successfully but nothing recent + financial passed.
      return {
        data: [],
        source: "live",
        provider,
        fetchedAt: new Date().toISOString(),
        message: NO_RECENT_MSG,
      };
    }

    return {
      data: processed,
      source: "live",
      provider,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error("[newsApi] provider failure:", err);
    return fallbackResponse(provider);
  }
}

function fallbackResponse(provider: string): NewsResponse {
  return {
    data: fallbackNews,
    source: "fallback",
    provider,
    fetchedAt: new Date().toISOString(),
    message:
      "تعذّر جلب الأخبار من المزود الحالي. يتم عرض بيانات تجريبية مؤقتاً.",
  };
}

// ───────────────────────────────────────────────────────────
// Pipeline: filter recent → classify → translate → sort → cap
// ───────────────────────────────────────────────────────────
type RawItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  url?: string;
  image?: string;
};

function processItems(raw: RawItem[]): LiveNewsItem[] {
  const cutoff = Date.now() - MAX_AGE_HOURS * 60 * 60 * 1000;
  const items: LiveNewsItem[] = [];

  for (const r of raw) {
    if (!r.title || !r.url) continue;

    const ts = new Date(r.publishedAt).getTime();
    if (!Number.isFinite(ts) || ts < cutoff) continue;

    const topic = classifyFinancial(r.title, r.summary);
    if (!topic) continue; // Not financial → drop

    items.push({
      id: r.id,
      title: topic.title,
      summary: topic.summary,
      category: topic.category,
      source: r.source,
      publishedAt: r.publishedAt,
      date: formatRelativeArabic(r.publishedAt),
      url: r.url,
      image: r.image,
      isBreaking: detectBreaking(r.title, r.publishedAt),
      originalTitle: r.title,
      originalSummary: r.summary || undefined,
    });
  }

  items.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // De-duplicate by Arabic title + source (keeps the freshest)
  const seen = new Set<string>();
  const deduped: LiveNewsItem[] = [];
  for (const it of items) {
    const key = `${it.title}|${it.source}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(it);
    if (deduped.length >= MAX_ITEMS) break;
  }

  return deduped;
}

// ───────────────────────────────────────────────────────────
// NewsAPI (newsapi.org) — uses /v2/everything with financial query
// ───────────────────────────────────────────────────────────
async function fetchFromNewsApi(apiKey: string): Promise<RawItem[]> {
  const fromIso = new Date(Date.now() - MAX_AGE_HOURS * 3600 * 1000)
    .toISOString()
    .slice(0, 19); // YYYY-MM-DDTHH:mm:ss
  const params = new URLSearchParams({
    q: FINANCIAL_QUERY,
    language: "en",
    sortBy: "publishedAt",
    pageSize: "80",
    from: fromIso,
  });
  const url = `https://newsapi.org/v2/everything?${params.toString()}`;
  const res = await fetch(url, {
    headers: { "X-Api-Key": apiKey },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`newsapi status ${res.status}`);
  const json = (await res.json()) as {
    articles?: Array<{
      title?: string;
      description?: string;
      source?: { name?: string };
      publishedAt?: string;
      url?: string;
      urlToImage?: string;
    }>;
  };
  return (json.articles ?? []).map((a, i) => ({
    id: `na-${i}-${hashId(a.url ?? a.title ?? "")}`,
    title: a.title ?? "",
    summary: a.description ?? "",
    source: a.source?.name ?? "NewsAPI",
    publishedAt: a.publishedAt ?? new Date().toISOString(),
    url: a.url,
    image: a.urlToImage ?? undefined,
  }));
}

// ───────────────────────────────────────────────────────────
// GNews (gnews.io)
// ───────────────────────────────────────────────────────────
async function fetchFromGNews(apiKey: string): Promise<RawItem[]> {
  const fromIso = new Date(Date.now() - MAX_AGE_HOURS * 3600 * 1000)
    .toISOString();
  const params = new URLSearchParams({
    q: FINANCIAL_QUERY,
    lang: "en",
    sortby: "publishdate",
    max: "50",
    from: fromIso,
    apikey: apiKey,
  });
  const url = `https://gnews.io/api/v4/search?${params.toString()}`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`gnews status ${res.status}`);
  const json = (await res.json()) as {
    articles?: Array<{
      title?: string;
      description?: string;
      source?: { name?: string };
      publishedAt?: string;
      url?: string;
      image?: string;
    }>;
  };
  return (json.articles ?? []).map((a, i) => ({
    id: `gn-${i}-${hashId(a.url ?? a.title ?? "")}`,
    title: a.title ?? "",
    summary: a.description ?? "",
    source: a.source?.name ?? "GNews",
    publishedAt: a.publishedAt ?? new Date().toISOString(),
    url: a.url,
    image: a.image ?? undefined,
  }));
}

// ───────────────────────────────────────────────────────────
// MarketAux (marketaux.com) — already finance-focused
// ───────────────────────────────────────────────────────────
async function fetchFromMarketAux(apiKey: string): Promise<RawItem[]> {
  const sinceIso = new Date(Date.now() - MAX_AGE_HOURS * 3600 * 1000)
    .toISOString()
    .slice(0, 19);
  const params = new URLSearchParams({
    language: "en",
    limit: "50",
    filter_entities: "true",
    published_after: sinceIso,
    api_token: apiKey,
  });
  const url = `https://api.marketaux.com/v1/news/all?${params.toString()}`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`marketaux status ${res.status}`);
  const json = (await res.json()) as {
    data?: Array<{
      uuid?: string;
      title?: string;
      description?: string;
      source?: string;
      published_at?: string;
      url?: string;
      image_url?: string;
    }>;
  };
  return (json.data ?? []).map((a, i) => ({
    id: a.uuid ?? `ma-${i}-${hashId(a.url ?? a.title ?? "")}`,
    title: a.title ?? "",
    summary: a.description ?? "",
    source: a.source ?? "MarketAux",
    publishedAt: a.published_at ?? new Date().toISOString(),
    url: a.url,
    image: a.image_url ?? undefined,
  }));
}

// ───────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────
function formatRelativeArabic(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return "حديثاً";

  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / 60000);

  if (minutes < 1) return "قبل لحظات";
  if (minutes < 60) return `قبل ${minutes} دقيقة`;
  const hours = Math.floor(minutes / 60);
  if (hours === 1) return "قبل ساعة";
  if (hours === 2) return "قبل ساعتين";
  if (hours < 24) return `قبل ${hours} ساعات`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "أمس";
  if (days < 7) return `قبل ${days} أيام`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `قبل ${weeks} أسابيع`;
  const months = Math.floor(days / 30);
  if (months < 12) return `قبل ${months} أشهر`;
  return date.toLocaleDateString("ar-EG");
}

// Tiny stable hash for de-duping item IDs across requests.
function hashId(input: string): string {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
}

// Re-exported for tests / other callers if needed
export const _internal = {
  MAX_AGE_HOURS,
  MAX_ITEMS,
  NO_RECENT_MSG,
  FINANCIAL_QUERY,
};

// Keep the type referenced so unused-import lint doesn't complain.
export type { LiveNewsCategory };
