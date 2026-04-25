import PageHeader from "@/components/PageHeader";
import LiveMarketTicker from "@/components/LiveMarketTicker";
import RiskNotice from "@/components/RiskNotice";

export const metadata = {
  title: "الفوركس - الأسواق العالمية",
  description:
    "أسعار أزواج العملات الرئيسية والثانوية، شرح مبسط لسوق الفوركس، وأهم الأخبار المؤثرة على العملات.",
};

export default function ForexPage() {
  return (
    <>
      <PageHeader
        eyebrow="سوق العملات"
        title="الفوركس"
        description="أكبر الأسواق المالية في العالم بحجم تداول يومي يتجاوز 7 تريليون دولار. يعمل 24 ساعة في اليوم وخمسة أيام في الأسبوع."
      />

      <section className="container-custom py-12">
        {/* شرح مختصر */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card p-6 lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-neutral-50">
              ما هو الفوركس؟
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              الفوركس (Foreign Exchange) هو سوق صرف العملات الأجنبية، حيث يتم
              شراء وبيع عملة دولة مقابل عملة أخرى. يعمل السوق على شكل أزواج
              مثل EUR/USD، أي اليورو مقابل الدولار. عندما تشتري الزوج فأنت
              تتوقع ارتفاع اليورو وضعف الدولار، والعكس صحيح.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              يتأثر السوق بقرارات البنوك المركزية، بيانات التضخم والوظائف،
              الأحداث الجيوسياسية، وأسعار الفائدة. هو سوق سريع وعالي السيولة،
              لكنه يحمل مخاطر مرتفعة بسبب الرافعة المالية المتاحة فيه.
            </p>
          </div>

          <div className="card border-bear/20 bg-bear/5 p-6">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-bear"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L1 21h22L12 2zm-1 6h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <div>
                <h3 className="font-display text-base font-bold text-neutral-50">
                  تنبيه مهم
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  التداول في الفوركس بالرافعة المالية ينطوي على مخاطر مرتفعة
                  وقد يؤدي إلى خسارة كامل رأس المال. لا تتداول إلا بمبالغ
                  مستعد لخسارتها بالكامل.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* أزواج رئيسية */}
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="section-title text-3xl">الأزواج الرئيسية</h2>
          </div>
          <LiveMarketTicker
            categories={["forex"]}
            variant="default"
            showHeader={false}
            refreshMs={45_000}
          />
        </div>

        {/* مقالات تعليمية */}
        <div className="mt-16">
          <h2 className="section-title text-3xl">مقالات تعليمية</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "ما هو الـ Pip ولماذا هو مهم؟",
                desc: "وحدة قياس حركة السعر في الفوركس وكيفية حسابها بدقة.",
              },
              {
                title: "الجلسات الثلاث في الفوركس",
                desc: "آسيا، لندن، نيويورك — كيف تختلف وأيها الأنشط للتداول؟",
              },
              {
                title: "الرافعة المالية: سيف ذو حدّين",
                desc: "كيف تضاعف الرافعة الأرباح والخسائر، ومتى تستخدمها بحذر.",
              },
              {
                title: "الفرق بين السبريد والعمولة",
                desc: "تكاليف التداول الخفية وكيف تختار وسيطاً مناسباً.",
              },
              {
                title: "أوامر السوق وأوامر الانتظار",
                desc: "Market Orders vs Limit/Stop — متى تستخدم كل نوع؟",
              },
              {
                title: "العملات المرتبطة والمتعاكسة",
                desc: "علاقات الارتباط بين الأزواج وكيف تستفيد منها.",
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
