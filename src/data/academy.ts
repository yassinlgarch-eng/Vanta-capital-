// ============================================================
// بيانات الأكاديمية - الأقسام والدروس
// ============================================================

export type Level = "مبتدئ" | "متوسط" | "متقدم";

export type AcademySection = {
  slug: string;
  title: string;
  description: string;
  lessonsCount: number;
  level: Level;
  icon: string;
};

export const academySections: AcademySection[] = [
  {
    slug: "market-basics",
    title: "أساسيات السوق",
    description:
      "تعرّف على مكونات الأسواق المالية، وآلية عملها، والمشاركين فيها قبل دخول أي صفقة.",
    lessonsCount: 8,
    level: "مبتدئ",
    icon: "circle",
  },
  {
    slug: "forex-basics",
    title: "الفوركس للمبتدئين",
    description:
      "كيف يعمل سوق العملات؟ وما الفرق بين الأزواج الرئيسية والثانوية؟ وما معنى Pip و Lot؟",
    lessonsCount: 12,
    level: "مبتدئ",
    icon: "exchange",
  },
  {
    slug: "stocks-investing",
    title: "الأسهم والاستثمار",
    description:
      "أساسيات شراء الأسهم، وفهم القوائم المالية، والفرق بين الاستثمار والمضاربة قصيرة الأمد.",
    lessonsCount: 10,
    level: "متوسط",
    icon: "chart",
  },
  {
    slug: "commodities-energy",
    title: "السلع والطاقة",
    description:
      "الذهب، الفضة، النفط، والغاز — لماذا تتحرك هذه الأسواق؟ وما علاقتها بالاقتصاد العالمي؟",
    lessonsCount: 7,
    level: "متوسط",
    icon: "bar",
  },
  {
    slug: "technical-analysis",
    title: "التحليل الفني",
    description:
      "النماذج، المؤشرات، خطوط الاتجاه، ومناطق الدعم والمقاومة — أدوات لقراءة سلوك الأسعار.",
    lessonsCount: 18,
    level: "متوسط",
    icon: "trend",
  },
  {
    slug: "fundamental-analysis",
    title: "التحليل الأساسي",
    description:
      "كيف تؤثر الأخبار الاقتصادية وقرارات البنوك المركزية على الأسواق؟ وكيف تقرأ التقويم الاقتصادي؟",
    lessonsCount: 9,
    level: "متوسط",
    icon: "doc",
  },
  {
    slug: "risk-management",
    title: "إدارة المخاطر",
    description:
      "أهم درس في رحلة كل متداول. كيف تحمي رأس مالك؟ وما حجم المخاطرة المنطقي لكل صفقة؟",
    lessonsCount: 6,
    level: "متقدم",
    icon: "shield",
  },
  {
    slug: "trading-psychology",
    title: "سيكولوجية التداول",
    description:
      "الانضباط، الصبر، والتعامل مع الخسائر — جوانب نفسية تفصل بين الناجحين وغيرهم في الأسواق.",
    lessonsCount: 8,
    level: "متقدم",
    icon: "brain",
  },
];

export const homeFeatures = [
  {
    title: "أخبار مؤثرة",
    description:
      "تابع آخر ما يحرّك الأسواق العالمية من قرارات البنوك المركزية إلى التطورات الجيوسياسية.",
    icon: "news",
  },
  {
    title: "تعليم مبسّط",
    description:
      "محتوى أكاديمي عربي مقسّم لمستويات تدريجية، من المبتدئ إلى المتقدم.",
    icon: "book",
  },
  {
    title: "تحليلات منظّمة",
    description:
      "قراءات يومية وأسبوعية للأسواق الرئيسية مع سيناريوهات صعود وهبوط واضحة.",
    icon: "chart",
  },
  {
    title: "مجتمع عربي",
    description:
      "تواصل مع متداولين ومستثمرين عرب يشاركونك الاهتمام بفهم الأسواق.",
    icon: "users",
  },
  {
    title: "مكتبة رقمية",
    description:
      "كتب PDF احترافية متخصصة في الفوركس، الأسهم، السلع، وإدارة المخاطر.",
    icon: "library",
  },
  {
    title: "ركن VIP",
    description:
      "محتوى مميّز بسعر رمزي يشمل توصيات تعليمية، تنبيهات، وتحليلات أسبوعية مفصّلة.",
    icon: "crown",
  },
];
