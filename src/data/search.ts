import { academySections, homeFeatures } from "@/data/academy";
import { books } from "@/data/library";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
};

const forexLessons: SearchItem[] = [
  {
    title: "ما هو الفوركس؟",
    description: "مدخل لفهم سوق العملات وأزواج العملات ولماذا تتحرك الأسعار.",
    href: "/academy/forex-basics/what-is-forex",
    category: "الأكاديمية · الفوركس",
    keywords: ["forex", "فوركس", "عملات", "سوق العملات", "eurusd"],
  },
  {
    title: "أزواج العملات وكيف تُقرأ",
    description: "شرح Base Currency و Quote Currency وأنواع أزواج الفوركس.",
    href: "/academy/forex-basics/currency-pairs",
    category: "الأكاديمية · الفوركس",
    keywords: ["currency pairs", "أزواج", "base", "quote", "major", "minor", "exotic"],
  },
  {
    title: "Bid و Ask و Spread",
    description: "فهم السعرين على منصة التداول والسبريد كتكلفة تنفيذ.",
    href: "/academy/forex-basics/bid-ask-spread",
    category: "الأكاديمية · الفوركس",
    keywords: ["bid", "ask", "spread", "سبريد", "تكلفة", "سعر البيع", "سعر الشراء"],
  },
  {
    title: "ما هو Pip وما هو Lot؟",
    description: "شرح النقطة واللوت وكيف تتحول حركة السعر إلى ربح أو خسارة.",
    href: "/academy/forex-basics/pip-and-lot",
    category: "الأكاديمية · الفوركس",
    keywords: ["pip", "lot", "نقطة", "لوت", "pipette", "micro", "mini"],
  },
  {
    title: "الرافعة المالية والهامش",
    description: "شرح Leverage و Margin و Margin Call و Stop Out.",
    href: "/academy/forex-basics/leverage-margin",
    category: "الأكاديمية · الفوركس",
    keywords: ["leverage", "margin", "رافعة", "هامش", "margin call", "stop out"],
  },
  {
    title: "الجلسات العالمية وأفضل أوقات الحركة",
    description: "جلسات آسيا ولندن ونيويورك وتداخل الجلسات واختيار الزوج المناسب.",
    href: "/academy/forex-basics/sessions",
    category: "الأكاديمية · الفوركس",
    keywords: ["sessions", "جلسات", "لندن", "نيويورك", "آسيا", "توقيت"],
  },
  {
    title: "الأخبار الاقتصادية التي تحرك العملات",
    description: "الفائدة والتضخم والوظائف والبنوك المركزية والنتيجة مقابل التوقعات.",
    href: "/academy/forex-basics/economic-news",
    category: "الأكاديمية · الفوركس",
    keywords: ["news", "أخبار", "فائدة", "تضخم", "cpi", "nfp", "fed", "forecast"],
  },
  {
    title: "أوامر التداول في الفوركس",
    description: "Market و Limit و Stop و Stop Loss و Take Profit.",
    href: "/academy/forex-basics/order-types",
    category: "الأكاديمية · الفوركس",
    keywords: ["orders", "أوامر", "buy", "sell", "limit", "stop", "take profit", "stop loss"],
  },
  {
    title: "إدارة المخاطر في الفوركس",
    description: "نسبة المخاطرة، حجم الصفقة، وقف الخسارة، Risk/Reward وحد الخسارة اليومي.",
    href: "/academy/forex-basics/risk-management",
    category: "الأكاديمية · الفوركس",
    keywords: ["risk", "مخاطر", "إدارة المخاطر", "position size", "وقف الخسارة", "risk reward"],
  },
  {
    title: "أخطاء مبتدئي الفوركس",
    description: "الرافعة الزائدة، مطاردة الحركة، تداول الأخبار، تداول الانتقام، وكثرة الصفقات.",
    href: "/academy/forex-basics/beginner-mistakes",
    category: "الأكاديمية · الفوركس",
    keywords: ["mistakes", "أخطاء", "مبتدئ", "انتقام", "overtrading", "أخبار"],
  },
  {
    title: "خطة تداول فوركس بسيطة",
    description: "قالب عملي لاختيار الزوج والجلسة وشروط الدخول والخروج والمخاطرة.",
    href: "/academy/forex-basics/simple-trading-plan",
    category: "الأكاديمية · الفوركس",
    keywords: ["plan", "خطة", "trading plan", "قالب", "دفتر الصفقات"],
  },
  {
    title: "متى تنتقل إلى الحساب التجريبي؟",
    description: "المرحلة التالية بعد تعلم الأساسيات وبناء خطة تداول بسيطة.",
    href: "/academy/forex-basics/demo-account",
    category: "الأكاديمية · الفوركس",
    keywords: ["demo", "حساب تجريبي", "تطبيق", "محاكاة"],
  },
];

const corePages: SearchItem[] = [
  {
    title: "الأخبار الاقتصادية",
    description: "آخر التطورات المؤثرة في الأسواق العالمية مع ملخصات عربية واضحة.",
    href: "/news",
    category: "الأخبار",
    keywords: ["news", "أخبار", "اقتصاد", "بنوك مركزية", "أسواق"],
  },
  {
    title: "التحليلات اليومية والأسبوعية",
    description: "سيناريوهات صعود وهبوط ومستويات دعم ومقاومة للأسواق الرئيسية.",
    href: "/analysis",
    category: "التحليلات",
    keywords: ["analysis", "تحليل", "ذهب", "نفط", "دعم", "مقاومة"],
  },
  {
    title: "الفوركس",
    description: "أسعار أزواج العملات الرئيسية وشرح مبسط لسوق العملات.",
    href: "/forex",
    category: "الأسواق",
    keywords: ["forex", "فوركس", "عملات", "eur", "usd"],
  },
  {
    title: "الأسهم",
    description: "مؤشرات الأسواق العالمية وأسهم أمريكية بارزة وشرح مبسط للاستثمار.",
    href: "/stocks",
    category: "الأسواق",
    keywords: ["stocks", "أسهم", "مؤشرات", "استثمار", "nasdaq", "sp500"],
  },
  {
    title: "السلع",
    description: "الذهب والنفط والفضة والغاز والعوامل التي تحرك أسعار السلع.",
    href: "/commodities",
    category: "الأسواق",
    keywords: ["commodities", "سلع", "ذهب", "نفط", "فضة", "غاز"],
  },
  {
    title: "الأكاديمية",
    description: "مسارات تعليمية عربية منظمة من المبتدئ إلى المتقدم.",
    href: "/academy",
    category: "الأكاديمية",
    keywords: ["academy", "أكاديمية", "تعليم", "دروس", "تداول"],
  },
  {
    title: "أدوات التداول",
    description: "أدوات عملية تساعدك على حساب المخاطرة وحجم الصفقة قبل التنفيذ.",
    href: "/tools",
    category: "الأدوات",
    keywords: ["tools", "أدوات", "حاسبة", "مخاطر", "lot"],
  },
  {
    title: "حاسبة حجم الصفقة",
    description: "احسب حجم الصفقة بناءً على رصيد الحساب ونسبة المخاطرة ووقف الخسارة.",
    href: "/tools/risk-calculator",
    category: "الأدوات",
    keywords: ["calculator", "حاسبة", "position size", "risk", "lot", "حجم الصفقة"],
  },
  {
    title: "المكتبة الرقمية",
    description: "كتب عربية احترافية في الفوركس والأسهم والسلع وإدارة المخاطر.",
    href: "/library",
    category: "المكتبة",
    keywords: ["library", "مكتبة", "كتب", "pdf", "تعليم"],
  },
  {
    title: "المجتمع",
    description: "غرفة تعارف ونقاش عربية للمهتمين بالأسواق المالية.",
    href: "/community",
    category: "المجتمع",
    keywords: ["community", "مجتمع", "تليجرام", "نقاش", "متداولين"],
  },
  {
    title: "ركن VIP",
    description: "محتوى مميز وتحليلات أسبوعية وتنبيهات اقتصادية تعليمية.",
    href: "/vip",
    category: "VIP",
    keywords: ["vip", "توصيات", "تحليلات", "اشتراك", "تنبيهات"],
  },
  {
    title: "تواصل معنا",
    description: "أرسل سؤالك أو طلب الاشتراك أو اقتراحك لفريق Vanta Capital.",
    href: "/contact",
    category: "الدعم",
    keywords: ["contact", "تواصل", "دعم", "اشتراك", "رسالة"],
  },
];

const academyItems: SearchItem[] = academySections.map((section) => ({
  title: section.title,
  description: section.description,
  href: `/academy/${section.slug}`,
  category: `الأكاديمية · ${section.level}`,
  keywords: [section.title, section.level, section.icon, "أكاديمية", "دروس"],
}));

const featureItems: SearchItem[] = homeFeatures.map((feature) => ({
  title: feature.title,
  description: feature.description,
  href: feature.href ?? "/",
  category: "الصفحة الرئيسية",
  keywords: [feature.title, feature.icon, feature.cta ?? ""],
}));

const bookItems: SearchItem[] = books.map((book) => ({
  title: book.title,
  description: book.description,
  href: "/library",
  category: `المكتبة · ${book.level}`,
  keywords: [book.title, book.level, ...book.topics, "كتاب", "PDF"],
}));

export const searchIndex: SearchItem[] = [
  ...corePages,
  ...academyItems,
  ...forexLessons,
  ...featureItems,
  ...bookItems,
];
