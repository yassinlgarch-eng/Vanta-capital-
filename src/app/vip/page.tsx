import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { vipPlans } from "@/data/library";

export const metadata = {
  title: "ركن VIP - محتوى تعليمي حصري",
  description:
    "اشترك في ركن VIP للحصول على توصيات تعليمية، تحليلات أسبوعية، وتنبيهات اقتصادية مهمة بسعر رمزي.",
};

export default function VIPPage() {
  return (
    <>
      <PageHeader
        eyebrow="حصري للأعضاء"
        title="ركن VIP"
        description="انضم إلى مجتمع متميّز من المهتمين بالأسواق المالية. محتوى أعمق، تحليلات منظّمة، وتنبيهات أسرع — بسعر رمزي."
      />

      <section className="container-custom py-12">
        <div className="mb-10 rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/10 via-ink-900 to-navy/40 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="chip chip-gold">VIP Market Room</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl">
                جرّب غرفة السوق الخاصة بالأعضاء
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
                لوحة تعليمية تجمع الأسعار، السيناريوهات، مفكرة الأخبار، الأدوات، ومكتبة VIP في مكان واحد.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-left">
              <Link href="/vip/dashboard" className="btn-gold w-full justify-center sm:w-auto">
                دخول غرفة السوق VIP
              </Link>
            </div>
          </div>
        </div>

        {/* المزايا */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "توصيات تعليمية",
              desc: "سيناريوهات صفقات للأسواق الرئيسية مع شرح المنطق وراء كل تحليل.",
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
            },
            {
              title: "تحليلات أسبوعية",
              desc: "ملخص شامل لكل أسبوع مع تركيز على الأحداث الاقتصادية الكبيرة.",
              icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m4 0h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2",
            },
            {
              title: "تنبيهات الأخبار",
              desc: "تنبيهات قبل الأحداث الاقتصادية المؤثرة لتكون مستعداً لتحركات السوق.",
              icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
            },
            {
              title: "محتوى أكاديمي خاص",
              desc: "دروس وفيديوهات حصرية للأعضاء فقط في موضوعات متقدمة.",
              icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
            },
            {
              title: "أولوية الإجابة",
              desc: "أرسل أسئلتك واحصل على إجابات سريعة من فريق Vanta Capital.",
              icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
            },
            {
              title: "أرشيف كامل",
              desc: "وصول لكل المحتوى السابق من تحليلات وملخصات وتوصيات تعليمية.",
              icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z",
            },
          ].map((feature) => (
            <div key={feature.title} className="card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    d={feature.icon}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-neutral-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* خطط الاشتراك */}
        <div className="mt-20">
          <div className="text-center">
            <p className="section-eyebrow justify-center">خطط الاشتراك</p>
            <h2 className="section-title mx-auto">اختر الخطة المناسبة لك</h2>
            <p className="section-subtitle mx-auto">
              كلما كانت المدة أطول، كان السعر الفعلي شهرياً أقل.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {vipPlans.map((plan) => {
              const featured = plan.id === "quarterly";
              return (
                <div
                  key={plan.id}
                  className={`relative overflow-hidden rounded-2xl border p-7 transition-all ${
                    featured
                      ? "border-gold/40 bg-gradient-to-b from-gold/10 to-ink-900 shadow-gold-strong"
                      : "border-white/5 bg-ink-900/60"
                  }`}
                >
                  {plan.badge && (
                    <span
                      className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        featured
                          ? "bg-gold text-ink-950"
                          : "bg-white/10 text-neutral-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-neutral-50">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-neutral-50">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-neutral-500">
                      / {plan.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-neutral-300"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`mt-7 w-full rounded-lg py-3 text-sm font-semibold transition-all ${
                      featured
                        ? "bg-gradient-gold text-ink-950 shadow-gold hover:shadow-gold-strong"
                        : "border border-white/10 bg-white/5 text-neutral-50 hover:border-gold/30"
                    }`}
                  >
                    اشترك الآن
                  </button>
                  <Link
                    href="/contact"
                    className="mt-2 block text-center text-xs text-neutral-500 transition-colors hover:text-gold"
                  >
                    أو تواصل معنا للاشتراك
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* قائمة الانتظار */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-ink-900/40 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-neutral-50">
            غير مستعد للاشتراك بعد؟
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-400">
            انضم لقائمة الانتظار وسنخبرك عند توفّر عضويات جديدة أو عروض خاصة
            للأعضاء الأوائل.
          </p>
          <Link href="/contact" className="btn-outline mt-6">
            انضم لقائمة الانتظار
          </Link>
        </div>

        {/* إخلاء مسؤولية */}
        <div className="mt-12 rounded-xl border border-bear/20 bg-bear/5 p-5">
          <p className="text-sm leading-relaxed text-neutral-300">
            <span className="font-semibold text-bear">إخلاء مسؤولية:</span>{" "}
            جميع التحليلات والتوصيات المقدمة في ركن VIP لأغراض تعليمية فقط، ولا
            تُعدّ نصيحة مالية أو دعوة مباشرة للبيع أو الشراء. التداول ينطوي على
            مخاطر عالية وقد يؤدي إلى خسارة رأس المال.
          </p>
        </div>
      </section>
    </>
  );
}
