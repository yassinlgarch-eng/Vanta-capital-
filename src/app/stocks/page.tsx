import PageHeader from "@/components/PageHeader";
import LiveMarketTicker from "@/components/LiveMarketTicker";
import RiskNotice from "@/components/RiskNotice";

export const metadata = {
  title: "الأسهم - المؤشرات والشركات",
  description:
    "مؤشرات الأسواق العالمية الكبرى، أسهم أمريكية بارزة، وشرح مبسط للاستثمار في الأسهم.",
};

export default function StocksPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأسواق المالية"
        title="الأسهم"
        description="نافذتك على أكبر الشركات في العالم. تابع أداء المؤشرات الرئيسية وحركة الأسهم البارزة، وافهم أساسيات الاستثمار طويل الأمد."
      />

      <section className="container-custom py-12">
        {/* مؤشرات وأسهم */}
        <div className="mb-6 flex items-end justify-between">
          <h2 className="section-title text-3xl">المؤشرات والأسهم</h2>
        </div>
        <LiveMarketTicker
          categories={["indices", "stocks"]}
          variant="default"
          showHeader={false}
          refreshMs={45_000}
        />

        {/* شرح للمستثمرين */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="card p-7">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-10v2h14V7H7z" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-neutral-50">
              الفرق بين الاستثمار والمضاربة
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              المستثمر يشتري أسهم شركات يؤمن بمستقبلها لسنوات أو عقود، ويعتمد
              على نمو الأعمال والتوزيعات. أما المضارب فيستفيد من تحركات
              الأسعار قصيرة الأمد، وعادة ما يتعرض لمخاطر أعلى وضرائب مختلفة على
              الأرباح.
            </p>
          </div>

          <div className="card p-7">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-neutral-50">
              ما هي القيمة السوقية؟
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              القيمة السوقية = عدد الأسهم القائمة × سعر السهم. وهي مقياس لحجم
              الشركة. شركات Mega-Cap مثل Apple و Microsoft تتجاوز قيمتها 3
              تريليونات دولار، وتُعتبر أقل تقلباً عادةً مقارنة بالشركات
              الصغيرة.
            </p>
          </div>
        </div>

        {/* عناصر تعليمية */}
        <div className="mt-16">
          <h2 className="section-title text-3xl">للمستثمرين الجدد</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "كيف تقرأ تقرير أرباح ربع سنوي؟",
                desc: "EPS، الإيرادات، التوقعات — وما الذي يحرك السهم بعد الإعلان.",
              },
              {
                title: "P/E Ratio: مكرر الربحية",
                desc: "أحد أهم مقاييس تقييم الأسهم وكيف تستخدمه بشكل صحيح.",
              },
              {
                title: "الأسهم النامية مقابل القيمة",
                desc: "Growth vs Value — استراتيجيتان متختلفتان لأنواع مختلفة من المستثمرين.",
              },
              {
                title: "توزيعات الأرباح (Dividends)",
                desc: "كيف تختار شركات توزع أرباحاً مستدامة لبناء دخل سلبي.",
              },
              {
                title: "صناديق المؤشرات (ETFs)",
                desc: "الطريقة الأبسط للاستثمار في السوق ككل دون اختيار أسهم منفردة.",
              },
              {
                title: "متوسط التكلفة (DCA)",
                desc: "استراتيجية الاستثمار الدوري التي تقلل من أثر تقلبات السوق.",
              },
            ].map((article) => (
              <article
                key={article.title}
                className="card card-hover group cursor-pointer p-6"
              >
                <h3 className="font-display text-base font-bold text-neutral-50 transition-colors group-hover:text-gold">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {article.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        <RiskNotice />
      </section>
    </>
  );
}
