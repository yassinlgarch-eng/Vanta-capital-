import PageHeader from "@/components/PageHeader";
import MarketTickerCard from "@/components/MarketTickerCard";
import { commodities } from "@/data/markets";

export const metadata = {
  title: "السلع - الذهب، النفط، الفضة",
  description:
    "أسعار السلع العالمية الكبرى وعلاقتها بالأخبار الاقتصادية والقرارات الجيوسياسية.",
};

export default function CommoditiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأسواق"
        title="السلع"
        description="من الذهب الذي يحفظ القيمة منذ آلاف السنين، إلى النفط الذي يحرّك الاقتصاد العالمي. تعرّف على ما يحرّك أسعار السلع وكيف تقرأ إشاراتها."
      />

      <section className="container-custom py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="section-title text-3xl">أسعار السلع</h2>
          <span className="font-mono text-xs text-neutral-500">
            بيانات تجريبية
          </span>
        </div>
        {/* TODO: ربط API لأسعار السلع المباشرة */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commodities.map((c) => (
            <MarketTickerCard key={c.symbol} tick={c} />
          ))}
        </div>

        {/* شروحات عن كل سلعة */}
        <div className="mt-16 space-y-6">
          {[
            {
              title: "الذهب — الملاذ الآمن",
              desc: "يرتفع الذهب عادة عند ضعف الدولار، أو ارتفاع التضخم، أو الأزمات الجيوسياسية. كما يتأثر سلباً بارتفاع أسعار الفائدة الحقيقية لأنه أصل لا يدر عائداً.",
              icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
              color: "text-gold border-gold/30 bg-gold/5",
            },
            {
              title: "النفط — وقود الاقتصاد",
              desc: "تتأثر أسعار النفط بقرارات أوبك+، الطلب العالمي، التوترات في الشرق الأوسط، ومستويات المخزونات الأمريكية. وهو حساس جداً للمخاوف من ركود اقتصادي.",
              icon: "M12 2C8 6 4 11 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3-4-8-8-12z",
              color: "text-bear border-bear/30 bg-bear/5",
            },
            {
              title: "الفضة — المعدن المزدوج",
              desc: "تجمع الفضة بين خصائص المعدن الثمين والمعدن الصناعي. ترتفع مع الذهب في أوقات الأزمات، لكنها أيضاً متأثرة بالطلب الصناعي خاصة من قطاعي السيارات الكهربائية والطاقة الشمسية.",
              icon: "M12 6.5l5 5-5 5-5-5 5-5zM5 12l-3-3 3-3M19 6l3 3-3 3",
              color: "text-neutral-300 border-white/20 bg-white/5",
            },
            {
              title: "الغاز الطبيعي — موسمي وتقلبي",
              desc: "يُعتبر من أكثر السلع تقلباً. ترتفع أسعاره في الشتاء بسبب الطلب على التدفئة، ويتأثر شديداً بالأحداث الجيوسياسية مثل التوترات الأوروبية الروسية.",
              icon: "M11 21h2v-7l4 4 1.41-1.41L13 12.17V3h-2v9.17L5.59 16.59 7 18l4-4z",
              color: "text-electric border-electric/30 bg-electric/5",
            },
          ].map((item) => (
            <div key={item.title} className="card p-7">
              <div className="flex items-start gap-5">
                <div
                  className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border ${item.color}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
