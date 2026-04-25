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
// IMPORTANT: This file must NEVER be imported in a client component.
// API keys live in process.env and must stay server-side only.
// ============================================================

import type {
  LiveNewsCategory,
  LiveNewsItem,
  NewsResponse,
} from "./types";
import { fallbackNews } from "./fallbackData";

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
    const data =
      provider === "newsapi"
        ? await fetchFromNewsApi(apiKey)
        : provider === "gnews"
        ? await fetchFromGNews(apiKey)
        : provider === "marketaux"
        ? await fetchFromMarketAux(apiKey)
        : null;

    if (!data || data.length === 0) {
      return {
        data: fallbackNews,
        source: "fallback",
        provider,
        fetchedAt: new Date().toISOString(),
        message:
          "تعذّر جلب الأخبار من المزود الحالي. يتم عرض بيانات تجريبية مؤقتاً.",
      };
    }

    return {
      data,
      source: "live",
      provider,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error("[newsApi] provider failure:", err);
    return {
      data: fallbackNews,
      source: "fallback",
      provider,
      fetchedAt: new Date().toISOString(),
      message:
        "حدث خطأ أثناء الاتصال بمزود الأخبار. يتم عرض بيانات تجريبية مؤقتاً.",
    };
  }
}

// ───────────────────────────────────────────────────────────
// NewsAPI (newsapi.org)
// ───────────────────────────────────────────────────────────
async function fetchFromNewsApi(apiKey: string): Promise<LiveNewsItem[]> {
  const url =
    "https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=24";
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
  return (json.articles ?? [])
    .filter((a) => a.title && a.url)
    .map((a, i) => buildNewsItem({
      id: `na-${i}-${hashId(a.url ?? a.title!)}`,
      title: a.title!,
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
async function fetchFromGNews(apiKey: string): Promise<LiveNewsItem[]> {
  const url = `https://gnews.io/api/v4/top-headlines?category=business&lang=en&max=20&apikey=${apiKey}`;
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
  return (json.articles ?? [])
    .filter((a) => a.title && a.url)
    .map((a, i) => buildNewsItem({
      id: `gn-${i}-${hashId(a.url ?? a.title!)}`,
      title: a.title!,
      summary: a.description ?? "",
      source: a.source?.name ?? "GNews",
      publishedAt: a.publishedAt ?? new Date().toISOString(),
      url: a.url,
      image: a.image ?? undefined,
    }));
}

// ───────────────────────────────────────────────────────────
// MarketAux (marketaux.com)
// ───────────────────────────────────────────────────────────
async function fetchFromMarketAux(apiKey: string): Promise<LiveNewsItem[]> {
  const url = `https://api.marketaux.com/v1/news/all?language=en&limit=20&filter_entities=true&api_token=${apiKey}`;
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
  return (json.data ?? [])
    .filter((a) => a.title && a.url)
    .map((a, i) => buildNewsItem({
      id: a.uuid ?? `ma-${i}-${hashId(a.url ?? a.title!)}`,
      title: a.title!,
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
function buildNewsItem(input: {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  url?: string;
  image?: string;
}): LiveNewsItem {
  const category = inferCategory(`${input.title} ${input.summary}`);
  const isBreaking = isBreakingHeadline(input.title);
  return {
    id: input.id,
    title: input.title,
    summary: input.summary || input.title,
    category,
    source: input.source,
    publishedAt: input.publishedAt,
    date: formatRelativeArabic(input.publishedAt),
    url: input.url,
    image: input.image,
    isBreaking,
  };
}

// Heuristic English keyword → category mapping.
// Coarse but good enough until we add a translation/classification layer.
function inferCategory(text: string): LiveNewsCategory {
  const t = text.toLowerCase();
  if (/\b(bitcoin|btc|ether|eth|crypto|stablecoin|blockchain)\b/.test(t))
    return "crypto";
  if (/\b(oil|crude|brent|wti|opec|gas|energy|gold|silver|copper)\b/.test(t))
    return "energy";
  if (/\b(fed|fomc|powell|ecb|boe|boj|central bank|interest rate|rate hike|rate cut)\b/.test(t))
    return "central-banks";
  if (/\b(bank|jpmorgan|goldman|citigroup|hsbc|deutsche)\b/.test(t))
    return "banks";
  if (/\b(eur|usd|gbp|jpy|chf|cad|forex|currency|dollar|euro|yen)\b/.test(t))
    return "currencies";
  if (/\b(stock|equit|nasdaq|s&p|dow|share|earnings|ipo)\b/.test(t))
    return "stocks";
  if (/\b(commodit)\b/.test(t)) return "commodities";
  if (/\b(forex|fx)\b/.test(t)) return "forex";
  return "global";
}

function isBreakingHeadline(title: string): boolean {
  return /\b(breaking|urgent|just in)\b/i.test(title);
}

// Format ISO date as Arabic relative time
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
