// ============================================================
// بيانات الأخبار التجريبية (Placeholder)
// TODO: لاحقاً سيتم استبدال هذه البيانات بـ API حقيقي مثل:
// - NewsAPI                 https://newsapi.org/
// - Trading Economics       https://tradingeconomics.com/api/
// - Financial Modeling Prep https://financialmodelingprep.com/
// - Finnhub News            https://finnhub.io/docs/api/news
// ============================================================

export type NewsCategory =
  | "breaking"
  | "global"
  | "central-banks"
  | "energy"
  | "currencies"
  | "stocks"
  | "crypto";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  source: string;
  date: string;
  isBreaking?: boolean;
};

export const newsCategories: { key: NewsCategory | "all"; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "breaking", label: "عاجل" },
  { key: "global", label: "اقتصاد عالمي" },
  { key: "central-banks", label: "بنوك مركزية" },
  { key: "energy", label: "نفط وذهب" },
  { key: "currencies", label: "عملات" },
  { key: "stocks", label: "أسهم" },
  { key: "crypto", label: "كريبتو" },
];

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    title: "الفيدرالي الأمريكي يثبّت أسعار الفائدة ويلمّح إلى خفض محتمل قبل نهاية العام",
    summary:
      "أبقى الاحتياطي الفيدرالي على معدل الفائدة دون تغيير في اجتماعه الأخير، مع إشارات من رئيسه إلى أن البيانات القادمة ستحدد توقيت أول خفض للفائدة في الدورة الحالية.",
    category: "central-banks",
    source: "Vanta Desk",
    date: "قبل ساعتين",
    isBreaking: true,
  },
  {
    id: "n2",
    title: "الذهب يصعد إلى مستوى قياسي جديد وسط مخاوف جيوسياسية متصاعدة",
    summary:
      "تجاوزت أسعار الذهب الفورية حاجز 2350 دولاراً للأونصة لأول مرة، مدعومة بطلب الملاذ الآمن وتراجع عوائد السندات الأمريكية.",
    category: "energy",
    source: "Vanta Desk",
    date: "قبل 4 ساعات",
  },
  {
    id: "n3",
    title: "أوبك+ تدرس تمديد تخفيضات الإنتاج الطوعية حتى نهاية الربع الثالث",
    summary:
      "تشير تقارير من مصادر مطلعة إلى أن تحالف أوبك+ يميل نحو الإبقاء على سياسة خفض الإنتاج الحالية لدعم استقرار الأسعار في ظل ضعف الطلب الصيني.",
    category: "energy",
    source: "Vanta Desk",
    date: "قبل 6 ساعات",
  },
  {
    id: "n4",
    title: "اليورو يتراجع أمام الدولار بعد بيانات تضخم أوروبية أضعف من المتوقع",
    summary:
      "خسر اليورو نحو 0.4% من قيمته بعد صدور بيانات تضخم منطقة اليورو، ما يعزز توقعات خفض الفائدة من قبل البنك المركزي الأوروبي قبل نظيره الأمريكي.",
    category: "currencies",
    source: "Vanta Desk",
    date: "قبل 8 ساعات",
  },
  {
    id: "n5",
    title: "ناسداك يسجّل إغلاقاً قياسياً مدفوعاً بأسهم الذكاء الاصطناعي",
    summary:
      "أغلق مؤشر ناسداك المركب عند مستوى قياسي جديد بعد أداء استثنائي لأسهم الشركات المرتبطة بقطاع الذكاء الاصطناعي وأشباه الموصلات.",
    category: "stocks",
    source: "Vanta Desk",
    date: "قبل 10 ساعات",
  },
  {
    id: "n6",
    title: "البيتكوين يستقر فوق 67 ألف دولار بعد موجة تذبذب حادة",
    summary:
      "تمكنت العملة المشفرة الأكبر من استعادة بعض خسائرها الأخيرة بعد تدفقات إيجابية على صناديق ETF الفورية المعتمدة في الولايات المتحدة.",
    category: "crypto",
    source: "Vanta Desk",
    date: "قبل 12 ساعة",
  },
  {
    id: "n7",
    title: "الصين تطلق حزمة تحفيز جديدة لدعم القطاع العقاري",
    summary:
      "أعلنت السلطات الصينية عن إجراءات إضافية لدعم سوق العقارات المتعثر، مما انعكس إيجاباً على أسعار المعادن الصناعية.",
    category: "global",
    source: "Vanta Desk",
    date: "أمس",
  },
  {
    id: "n8",
    title: "بنك إنجلترا يحافظ على أسعار الفائدة ويترك الباب مفتوحاً للخفض",
    summary:
      "صوّتت لجنة السياسة النقدية في بنك إنجلترا لصالح الإبقاء على معدل الفائدة عند 5.25%، مع إشارات إلى أن أول خفض قد يأتي في الصيف.",
    category: "central-banks",
    source: "Vanta Desk",
    date: "أمس",
  },
];
