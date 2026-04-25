// ============================================================
// أنواع البيانات المشتركة بين الخادم والواجهة
// Shared API types - markets & news
// ============================================================

export type MarketCategory =
  | "forex"
  | "stocks"
  | "commodities"
  | "crypto"
  | "indices";

export type MarketStatus =
  | "open"
  | "closed"
  | "pre-market"
  | "after-hours"
  | "unknown";

export type LiveMarketTick = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  category: MarketCategory;
  open?: number;
  high?: number;
  low?: number;
  previousClose?: number;
  marketStatus?: MarketStatus;
  updatedAt: string; // ISO timestamp
};

export type MarketsResponse = {
  data: LiveMarketTick[];
  source: "live" | "fallback";
  provider: string;
  fetchedAt: string;
  message?: string;
};

export type LiveNewsCategory =
  | "breaking"
  | "global"
  | "central-banks"
  | "energy"
  | "currencies"
  | "stocks"
  | "crypto"
  | "forex"
  | "commodities"
  | "banks";

export type LiveNewsItem = {
  id: string;
  title: string;
  summary: string;
  category: LiveNewsCategory;
  source: string;
  date: string; // formatted relative time (AR)
  publishedAt: string; // ISO timestamp
  url?: string;
  image?: string;
  isBreaking?: boolean;
  /** Original (English) title — kept when we generated an Arabic gloss */
  originalTitle?: string;
  /** Original (English) summary — kept when we generated an Arabic gloss */
  originalSummary?: string;
};

export type NewsResponse = {
  data: LiveNewsItem[];
  source: "live" | "fallback";
  provider: string;
  fetchedAt: string;
  message?: string;
};
