// ============================================================
// بيانات احتياطية تظهر عند عدم توفر مفاتيح API أو فشل المزود
// Fallback data shown when no API key is configured or provider fails.
// Keep this file synced with the design — same look & feel as live data.
// ============================================================

import type { LiveMarketTick, LiveNewsItem } from "./types";

const NOW = () => new Date().toISOString();

export const fallbackMarkets: LiveMarketTick[] = [
  {
    symbol: "EUR/USD",
    name: "اليورو / الدولار",
    price: 1.0842,
    change: 0.0023,
    changePercent: 0.21,
    category: "forex",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "GBP/USD",
    name: "الجنيه / الدولار",
    price: 1.2674,
    change: -0.0041,
    changePercent: -0.32,
    category: "forex",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "USD/JPY",
    name: "الدولار / الين",
    price: 154.32,
    change: 0.45,
    changePercent: 0.29,
    category: "forex",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "XAU/USD",
    name: "الذهب",
    price: 2354.7,
    change: 12.4,
    changePercent: 0.53,
    category: "commodities",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "WTI",
    name: "النفط الخام",
    price: 78.42,
    change: -0.87,
    changePercent: -1.1,
    category: "commodities",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "SPX",
    name: "ستاندرد آند بورز 500",
    price: 5234.18,
    change: 18.62,
    changePercent: 0.36,
    category: "indices",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "IXIC",
    name: "ناسداك المركّب",
    price: 16412.4,
    change: 124.7,
    changePercent: 0.77,
    category: "indices",
    marketStatus: "unknown",
    updatedAt: NOW(),
  },
  {
    symbol: "BTC/USD",
    name: "بيتكوين",
    price: 67428,
    change: 1245,
    changePercent: 1.88,
    category: "crypto",
    marketStatus: "open",
    updatedAt: NOW(),
  },
  {
    symbol: "ETH/USD",
    name: "إيثريوم",
    price: 3245.8,
    change: 42.1,
    changePercent: 1.31,
    category: "crypto",
    marketStatus: "open",
    updatedAt: NOW(),
  },
];

export const fallbackNews: LiveNewsItem[] = [
  {
    id: "fb1",
    title:
      "الفيدرالي الأمريكي يثبّت أسعار الفائدة ويلمّح إلى خفض محتمل قبل نهاية العام",
    summary:
      "أبقى الاحتياطي الفيدرالي على معدل الفائدة دون تغيير في اجتماعه الأخير، مع إشارات من رئيسه إلى أن البيانات القادمة ستحدد توقيت أول خفض للفائدة في الدورة الحالية.",
    category: "central-banks",
    source: "Vanta Desk",
    date: "قبل ساعتين",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    isBreaking: true,
  },
  {
    id: "fb2",
    title: "الذهب يصعد إلى مستوى قياسي جديد وسط مخاوف جيوسياسية متصاعدة",
    summary:
      "تجاوزت أسعار الذهب الفورية حاجز 2350 دولاراً للأونصة لأول مرة، مدعومة بطلب الملاذ الآمن وتراجع عوائد السندات الأمريكية.",
    category: "energy",
    source: "Vanta Desk",
    date: "قبل 4 ساعات",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "fb3",
    title: "أوبك+ تدرس تمديد تخفيضات الإنتاج الطوعية حتى نهاية الربع الثالث",
    summary:
      "تشير تقارير من مصادر مطلعة إلى أن تحالف أوبك+ يميل نحو الإبقاء على سياسة خفض الإنتاج الحالية لدعم استقرار الأسعار في ظل ضعف الطلب الصيني.",
    category: "energy",
    source: "Vanta Desk",
    date: "قبل 6 ساعات",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "fb4",
    title: "اليورو يتراجع أمام الدولار بعد بيانات تضخم أوروبية أضعف من المتوقع",
    summary:
      "خسر اليورو نحو 0.4% من قيمته بعد صدور بيانات تضخم منطقة اليورو، ما يعزز توقعات خفض الفائدة من قبل البنك المركزي الأوروبي قبل نظيره الأمريكي.",
    category: "currencies",
    source: "Vanta Desk",
    date: "قبل 8 ساعات",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "fb5",
    title: "ناسداك يسجّل إغلاقاً قياسياً مدفوعاً بأسهم الذكاء الاصطناعي",
    summary:
      "أغلق مؤشر ناسداك المركب عند مستوى قياسي جديد بعد أداء استثنائي لأسهم الشركات المرتبطة بقطاع الذكاء الاصطناعي وأشباه الموصلات.",
    category: "stocks",
    source: "Vanta Desk",
    date: "قبل 10 ساعات",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "fb6",
    title: "البيتكوين يستقر فوق 67 ألف دولار بعد موجة تذبذب حادة",
    summary:
      "تمكنت العملة المشفرة الأكبر من استعادة بعض خسائرها الأخيرة بعد تدفقات إيجابية على صناديق ETF الفورية المعتمدة في الولايات المتحدة.",
    category: "crypto",
    source: "Vanta Desk",
    date: "قبل 12 ساعة",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "fb7",
    title: "الصين تطلق حزمة تحفيز جديدة لدعم القطاع العقاري",
    summary:
      "أعلنت السلطات الصينية عن إجراءات إضافية لدعم سوق العقارات المتعثر، مما انعكس إيجاباً على أسعار المعادن الصناعية.",
    category: "global",
    source: "Vanta Desk",
    date: "أمس",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "fb8",
    title: "بنك إنجلترا يحافظ على أسعار الفائدة ويترك الباب مفتوحاً للخفض",
    summary:
      "صوّتت لجنة السياسة النقدية في بنك إنجلترا لصالح الإبقاء على معدل الفائدة عند 5.25%، مع إشارات إلى أن أول خفض قد يأتي في الصيف.",
    category: "banks",
    source: "Vanta Desk",
    date: "أمس",
    publishedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
  },
];
