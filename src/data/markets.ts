// ============================================================
// بيانات الأسواق التجريبية (Placeholder)
// TODO: لاحقاً سيتم استبدال هذه البيانات بـ API حقيقي مثل:
// - Alpha Vantage     https://www.alphavantage.co/
// - Twelve Data       https://twelvedata.com/
// - Finnhub           https://finnhub.io/
// - Financial Modeling Prep https://financialmodelingprep.com/
// ============================================================

export type MarketTick = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  category: "forex" | "stocks" | "commodities" | "crypto" | "indices";
};

export const heroMarkets: MarketTick[] = [
  {
    symbol: "EUR/USD",
    name: "اليورو / الدولار",
    price: 1.0842,
    change: 0.0023,
    changePercent: 0.21,
    category: "forex",
  },
  {
    symbol: "GBP/USD",
    name: "الجنيه / الدولار",
    price: 1.2674,
    change: -0.0041,
    changePercent: -0.32,
    category: "forex",
  },
  {
    symbol: "XAU/USD",
    name: "الذهب",
    price: 2354.7,
    change: 12.4,
    changePercent: 0.53,
    category: "commodities",
  },
  {
    symbol: "WTI",
    name: "النفط الخام",
    price: 78.42,
    change: -0.87,
    changePercent: -1.1,
    category: "commodities",
  },
  {
    symbol: "S&P 500",
    name: "ستاندرد آند بورز 500",
    price: 5234.18,
    change: 18.62,
    changePercent: 0.36,
    category: "indices",
  },
  {
    symbol: "BTC/USD",
    name: "بيتكوين",
    price: 67428,
    change: 1245,
    changePercent: 1.88,
    category: "crypto",
  },
];

export const forexPairs: MarketTick[] = [
  ...heroMarkets.filter((m) => m.category === "forex"),
  {
    symbol: "USD/JPY",
    name: "الدولار / الين",
    price: 154.32,
    change: 0.45,
    changePercent: 0.29,
    category: "forex",
  },
  {
    symbol: "AUD/USD",
    name: "الدولار الأسترالي",
    price: 0.6584,
    change: -0.0012,
    changePercent: -0.18,
    category: "forex",
  },
  {
    symbol: "USD/CAD",
    name: "الدولار / الكندي",
    price: 1.3712,
    change: 0.0018,
    changePercent: 0.13,
    category: "forex",
  },
  {
    symbol: "USD/CHF",
    name: "الدولار / الفرنك",
    price: 0.9043,
    change: -0.0027,
    changePercent: -0.3,
    category: "forex",
  },
];

export const stockIndices: MarketTick[] = [
  ...heroMarkets.filter((m) => m.category === "indices"),
  {
    symbol: "NASDAQ",
    name: "ناسداك المركب",
    price: 16412.4,
    change: 124.7,
    changePercent: 0.77,
    category: "indices",
  },
  {
    symbol: "DOW",
    name: "داو جونز",
    price: 39142.8,
    change: -82.3,
    changePercent: -0.21,
    category: "indices",
  },
  {
    symbol: "AAPL",
    name: "آبل",
    price: 192.34,
    change: 1.42,
    changePercent: 0.74,
    category: "stocks",
  },
  {
    symbol: "MSFT",
    name: "مايكروسوفت",
    price: 421.7,
    change: 3.85,
    changePercent: 0.92,
    category: "stocks",
  },
  {
    symbol: "TSLA",
    name: "تسلا",
    price: 178.42,
    change: -2.18,
    changePercent: -1.21,
    category: "stocks",
  },
];

export const commodities: MarketTick[] = [
  ...heroMarkets.filter((m) => m.category === "commodities"),
  {
    symbol: "XAG/USD",
    name: "الفضة",
    price: 28.45,
    change: 0.34,
    changePercent: 1.21,
    category: "commodities",
  },
  {
    symbol: "BRENT",
    name: "نفط برنت",
    price: 82.14,
    change: -0.62,
    changePercent: -0.75,
    category: "commodities",
  },
  {
    symbol: "NATGAS",
    name: "الغاز الطبيعي",
    price: 2.184,
    change: 0.041,
    changePercent: 1.91,
    category: "commodities",
  },
  {
    symbol: "COPPER",
    name: "النحاس",
    price: 4.42,
    change: 0.03,
    changePercent: 0.68,
    category: "commodities",
  },
];
