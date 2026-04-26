// ============================================================
// مصنّف موضوعي للأخبار المالية + توليد عنوان وملخّص عربي
//
// لا يستخدم خدمة ترجمة خارجية (لتفادي مفاتيح إضافية وزمن استجابة).
// بدلاً من ذلك:
//   1) يطابق العنوان والملخّص الإنجليزي مع قائمة قواعد مالية محددة.
//   2) يُولّد عنواناً وملخّصاً عربياً وَفْقاً للقالب الموافق.
//   3) أيّ خبر لا يطابق أي قاعدة يُعتبر "غير مالي" ويتم استبعاده.
//
// هذه الطبقة هي الفلتر المالي الأساسي + المُعرِّب.
// ============================================================

import type { LiveNewsCategory } from "./types";

export type ClassifiedTopic = {
  /** Arabic title to display as the primary headline */
  title: string;
  /** Arabic short summary */
  summary: string;
  /** Canonical news category */
  category: LiveNewsCategory;
};

type TopicRule = ClassifiedTopic & {
  /** RegExp tested against `${title} ${summary}` (case-insensitive) */
  pattern: RegExp;
  /** Optional negative pattern — if matches, rule is skipped */
  exclude?: RegExp;
};

// ───────────────────────────────────────────────────────────
// Financial topic rules — order matters: most specific first.
// Each rule emits a category-aware Arabic title + summary.
// ───────────────────────────────────────────────────────────
const RULES: TopicRule[] = [
  // ── Federal Reserve / FOMC ───────────────────────────────
  {
    pattern:
      /\b(federal reserve|the fed\b|fomc|jerome powell|powell)\b.*?\b(rate|hike|cut|hold|policy|inflation|dot plot|dovish|hawkish)\b|\b(rate|hike|cut|hold|policy|dovish|hawkish)\b.*?\b(fed|fomc|powell)\b/i,
    title: "تطورات حول قرارات الاحتياطي الفيدرالي الأمريكي",
    summary:
      "تحديث يخصّ سياسة الاحتياطي الفيدرالي الأمريكي وأسعار الفائدة وتأثيرها المتوقّع على الدولار والأسواق العالمية.",
    category: "central-banks",
  },
  // ── ECB ──────────────────────────────────────────────────
  {
    pattern:
      /\b(european central bank|ecb|christine lagarde|lagarde)\b.*?\b(rate|hike|cut|hold|policy|inflation|dovish|hawkish)\b|\b(rate|hike|cut|hold)\b.*?\b(ecb|lagarde)\b/i,
    title: "البنك المركزي الأوروبي والسياسة النقدية",
    summary:
      "تحديث يتعلق بقرارات أو تصريحات البنك المركزي الأوروبي بشأن أسعار الفائدة، التضخّم، أو مسار اليورو.",
    category: "central-banks",
  },
  // ── BoE ──────────────────────────────────────────────────
  {
    pattern:
      /\b(bank of england|boe|andrew bailey)\b.*?\b(rate|hike|cut|hold|policy|inflation)\b|\b(rate|hike|cut|hold)\b.*?\b(bank of england|boe)\b/i,
    title: "بنك إنجلترا وأسعار الفائدة في المملكة المتحدة",
    summary:
      "تحديث يتعلق بقرارات بنك إنجلترا حول السياسة النقدية وتأثيرها على الجنيه الإسترليني وأسواق المملكة المتحدة.",
    category: "central-banks",
  },
  // ── BoJ ──────────────────────────────────────────────────
  {
    pattern:
      /\b(bank of japan|boj|kazuo ueda)\b.*?\b(rate|hike|cut|hold|policy|yield curve|yen)\b|\byen\b.*?\b(intervention|boj)\b/i,
    title: "بنك اليابان والين الياباني",
    summary:
      "تحديث حول سياسة بنك اليابان النقدية أو تحرّكات الين، وتأثير ذلك على أزواج العملات الرئيسية.",
    category: "central-banks",
  },
  // ── Generic central banks / inflation ────────────────────
  {
    pattern:
      /\b(central bank|monetary policy|interest rate(s)?|rate decision|cpi|inflation|disinflation|deflation|consumer price)\b/i,
    title: "تحديثات حول التضخم والسياسة النقدية",
    summary:
      "بيانات أو قرارات تتعلّق بمعدلات التضخّم وأسعار الفائدة لدى البنوك المركزية الكبرى وانعكاساتها على الأسواق.",
    category: "central-banks",
  },

  // ── Oil / OPEC ───────────────────────────────────────────
  {
    pattern:
      /\b(opec\+?|crude oil|oil prices?|wti|brent|barrel|saudi aramco|oil output|oil supply|oil demand)\b/i,
    title: "تطورات في أسواق النفط",
    summary:
      "تحرّكات في أسعار النفط الخام مرتبطة بقرارات أوبك+ أو بيانات الإنتاج والمخزونات أو الطلب العالمي.",
    category: "energy",
  },
  // ── Natural Gas ─────────────────────────────────────────
  {
    pattern: /\b(natural gas|nat[- ]gas|lng|gas prices?)\b/i,
    title: "أسعار الغاز الطبيعي والطاقة",
    summary:
      "تحديث يتعلّق بأسعار الغاز الطبيعي أو الغاز المسال وارتباطها بالطلب الموسمي والتطورات الجيوسياسية.",
    category: "energy",
  },
  // ── Gold / Precious metals ──────────────────────────────
  {
    pattern:
      /\b(gold|xau|bullion|precious metal|silver|xag|platinum|palladium)\b/i,
    title: "تحرّكات أسعار الذهب والمعادن الثمينة",
    summary:
      "تحديث على أسعار الذهب ومعادن الملاذ الآمن وعلاقتها بالدولار، عوائد السندات، والمخاطر الجيوسياسية.",
    category: "energy",
  },
  // ── Industrial commodities (copper, etc) ────────────────
  {
    pattern: /\b(copper|aluminum|aluminium|nickel|zinc|iron ore|lithium)\b/i,
    title: "أسواق المعادن الصناعية",
    summary:
      "تحرّكات في أسعار المعادن الصناعية ترتبط عادةً بالنشاط الاقتصادي العالمي والطلب الصيني.",
    category: "commodities",
  },

  // ── Bitcoin / Crypto ─────────────────────────────────────
  {
    pattern:
      /\b(bitcoin|btc|ethereum|eth\b|crypto|cryptocurrenc(y|ies)|stablecoin|altcoin|spot etf|halving|on[- ]chain)\b/i,
    title: "تحرّكات في أسواق العملات المشفّرة",
    summary:
      "تحديث على أسعار العملات الرقمية الرئيسية مثل البيتكوين والإيثريوم وتدفقات صناديق ETF الفورية.",
    category: "crypto",
  },

  // ── FX majors ────────────────────────────────────────────
  {
    pattern:
      /\b(eur\/usd|gbp\/usd|usd\/jpy|usd\/chf|usd\/cad|aud\/usd|nzd\/usd|euro|sterling|yen|swiss franc|dollar index|dxy|forex|fx market)\b/i,
    exclude: /\b(crypto|bitcoin|ethereum)\b/i,
    title: "تحرّكات في سوق العملات (فوركس)",
    summary:
      "تحديث على أزواج العملات الرئيسية في سوق الفوركس وعوامل دفعها مثل بيانات التضخّم وفوارق أسعار الفائدة.",
    category: "currencies",
  },

  // ── Major US indices / Stocks ────────────────────────────
  {
    pattern:
      /\b(s&p ?500|sp500|spx|nasdaq|ndx|dow jones|djia|russell 2000|wall street|stock market|equities|earnings)\b/i,
    title: "تطورات في أسواق الأسهم الأمريكية",
    summary:
      "تحديث على أداء المؤشرات الأمريكية الكبرى أو نتائج أرباح شركات قيادية وتأثيرها على معنويات السوق.",
    category: "stocks",
  },
  // ── Mega-cap individual names ───────────────────────────
  {
    pattern:
      /\b(apple|aapl|microsoft|msft|nvidia|nvda|amazon|amzn|meta|google|alphabet|googl|tesla|tsla)\b.*?\b(stock|share|earnings|revenue|guidance|forecast|ipo|buyback|dividend|surge|plunge)\b|\b(earnings|revenue|guidance)\b.*?\b(apple|microsoft|nvidia|amazon|meta|tesla|google|alphabet)\b/i,
    title: "أسهم الشركات القيادية الأمريكية",
    summary:
      "تحديث حول إحدى الشركات الأمريكية الكبرى ونتائج أرباحها أو حركة سهمها في السوق.",
    category: "stocks",
  },

  // ── Global banks ─────────────────────────────────────────
  {
    pattern:
      /\b(jpmorgan|goldman sachs|morgan stanley|citigroup|wells fargo|bank of america|hsbc|barclays|deutsche bank|ubs|credit suisse)\b/i,
    title: "أخبار البنوك العالمية الكبرى",
    summary:
      "تحديث يخصّ نتائج أو تحرّكات البنوك العالمية الكبرى وتأثيرها على معنويات قطاع البنوك.",
    category: "banks",
  },

  // ── China / global macro that moves markets ─────────────
  {
    pattern:
      /\b(china)\b.*?\b(stimulus|gdp|growth|exports|property|real estate|deflation|yuan|pboc)\b|\b(pboc|yuan)\b/i,
    title: "الاقتصاد الصيني وتأثيره على الأسواق",
    summary:
      "تحديث يتعلّق بالاقتصاد الصيني، حزم التحفيز، أو تحرّكات اليوان وأثر ذلك على الأسواق الناشئة والسلع.",
    category: "global",
  },
  // ── Recession / GDP / jobs / macro ──────────────────────
  {
    pattern:
      /\b(recession|gdp|nonfarm payroll|jobs report|unemployment|jobless claims|retail sales|pmi|ism|consumer sentiment)\b/i,
    title: "بيانات اقتصادية كلية تحرّك الأسواق",
    summary:
      "تحديث على بيانات النمو، الوظائف، أو نشاط القطاع الصناعي والخدمي وتأثيرها على توقعات السياسة النقدية.",
    category: "global",
  },
  // ── Bond yields / treasuries ────────────────────────────
  {
    pattern:
      /\b(treasury yield|10[- ]year|two[- ]year|bond market|sovereign bond|yield curve|treasuries)\b/i,
    title: "تحرّكات أسواق السندات والعوائد",
    summary:
      "تحديث على عوائد سندات الخزانة الأمريكية أو السندات السيادية الكبرى وتأثيرها على الأصول الخطرة.",
    category: "global",
  },

  // ── Geopolitics with explicit market angle ──────────────
  {
    pattern:
      /\b(sanctions|tariff|trade war|export controls|embargo)\b/i,
    title: "تطورات تجارية وسياسات اقتصادية مؤثرة",
    summary:
      "تحديث حول إجراءات تجارية أو رسوم جمركية أو عقوبات وأثرها على سلاسل الإمداد والأسواق.",
    category: "global",
  },
];

/**
 * Try to classify an English headline+summary into a financial topic.
 * Returns null if the item is not deemed financial enough to display.
 */
export function classifyFinancial(
  title: string,
  summary: string
): ClassifiedTopic | null {
  const text = `${title}\n${summary}`;
  for (const rule of RULES) {
    if (rule.exclude && rule.exclude.test(text)) continue;
    if (rule.pattern.test(text)) {
      return {
        title: rule.title,
        summary: rule.summary,
        category: rule.category,
      };
    }
  }
  return null;
}

/**
 * Heuristic "is it breaking?" detector — applied AFTER classification.
 */
export function detectBreaking(
  title: string,
  publishedAt: string
): boolean {
  if (/\b(breaking|just in|urgent|alert)\b/i.test(title)) return true;
  // Fresh items (< 60 minutes) classified as Fed/ECB rate moves count as breaking.
  const ageMin = (Date.now() - new Date(publishedAt).getTime()) / 60_000;
  if (ageMin < 60 && /\b(fed|fomc|ecb|rate cut|rate hike|emergency)\b/i.test(title))
    return true;
  return false;
}
