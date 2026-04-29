import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  ForexPairVisual,
  BidAskSpreadVisual,
  PipLotVisual,
  LeverageMarginVisual,
  ForexGlossaryVisual,
} from "@/components/AcademyVisuals";

export const metadata = {
  title: "الفوركس للمبتدئين - أكاديمية Usus Markets",
  description:
    "مسار عربي مبسط واحترافي لتعلم الفوركس من الصفر: أزواج العملات، النقطة، اللوت، السبريد، الرافعة، الهامش، وإدارة المخاطر.",
};

const forexLessons = [
  {
    number: "01",
    title: "ما هو الفوركس؟",
    href: "/academy/forex-basics/what-is-forex",
    description:
      "افهم سوق العملات كشبكة عالمية لتبادل قيمة العملات، وليس كطريقة سريعة للربح.",
    tag: "تأسيسي",
  },
  {
    number: "02",
    title: "أزواج العملات وكيف تُقرأ",
    href: "/academy/forex-basics/currency-pairs",
    description:
      "معنى EUR/USD، العملة الأساسية، عملة التسعير، ومتى نقول إن العملة قوية أو ضعيفة.",
    tag: "أزواج العملات",
  },
  {
    number: "03",
    title: "Bid و Ask و Spread",
    href: "/academy/forex-basics/bid-ask-spread",
    description:
      "أول تكلفة حقيقية في التداول، ولماذا تدخل الصفقة أحياناً بخسارة صغيرة منذ اللحظة الأولى.",
    tag: "تكلفة التنفيذ",
  },
  {
    number: "04",
    title: "ما هو Pip وما هو Lot؟",
    href: "/academy/forex-basics/pip-and-lot",
    description:
      "كيف تقيس حركة السعر، وكيف يتحول تغير بسيط في السعر إلى ربح أو خسارة مالية.",
    tag: "قياس الحركة",
  },
  {
    number: "05",
    title: "الرافعة المالية والهامش",
    href: "/academy/forex-basics/leverage-margin",
    description:
      "أخطر جزء في الفوركس: كيف تضخم الرافعة حجم الصفقة والمخاطرة في نفس الوقت.",
    tag: "مخاطر",
  },
  {
    number: "06",
    title: "الجلسات العالمية وأفضل أوقات الحركة",
    href: "/academy/forex-basics/sessions",
    description:
      "آسيا، لندن، نيويورك، ولماذا لا تكون كل ساعات اليوم مناسبة لنفس الاستراتيجية.",
    tag: "توقيت السوق",
  },
  {
    number: "07",
    title: "الأخبار الاقتصادية التي تحرك العملات",
    href: "/academy/forex-basics/economic-news",
    description:
      "الفائدة، التضخم، الوظائف، قرارات البنوك المركزية، وكيف تقرأ الخبر دون تهور.",
    tag: "أخبار",
  },
  {
    number: "08",
    title: "أوامر التداول في الفوركس",
    href: "/academy/forex-basics/order-types",
    description:
      "Buy, Sell, Stop Loss, Take Profit، والأوامر المعلقة بطريقة عملية بسيطة.",
    tag: "تنفيذ",
  },
  {
    number: "09",
    title: "إدارة المخاطر في الفوركس",
    href: "/academy/forex-basics/risk-management",
    description:
      "كيف تحدد نسبة المخاطرة وحجم الصفقة قبل أن تفكر في الربح.",
    tag: "حماية رأس المال",
  },
  {
    number: "10",
    title: "أخطاء مبتدئي الفوركس",
    href: "/academy/forex-basics/beginner-mistakes",
    description:
      "الرافعة الزائدة، مطاردة الأخبار، الدخول بلا وقف، وتغيير الخطة بعد كل خسارة.",
    tag: "وقاية",
  },
  {
    number: "11",
    title: "خطة تداول فوركس بسيطة",
    href: "/academy/forex-basics/simple-trading-plan",
    description:
      "قالب عملي لتحديد الزوج، الجلسة، الشرط، الوقف، الهدف، وحد الخسارة اليومي.",
    tag: "خطة",
  },
  {
    number: "12",
    title: "متى تنتقل من التعلم إلى الحساب التجريبي؟",
    href: "/academy/forex-basics/demo-account",
    description:
      "علامات الجاهزية، دفتر الصفقات، وكيف تختبر نفسك دون خداع النتائج.",
    tag: "تطبيق",
  },
];

export default function ForexBasicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأكاديمية · الفوركس للمبتدئين"
        title="تعلّم الفوركس من الصفر بطريقة منظمة"
        description="هذا المسار صُمم ليبني الفهم قبل المؤشرات: ما هو زوج العملات، كيف تُحسب النقطة، ما معنى السبريد واللوت، ولماذا الرافعة المالية قد تكون خطراً قبل أن تكون فرصة."
      />

      <section className="container-custom py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-5">
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <span className="chip chip-gold">مسار مبتدئ</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-neutral-50">
                  ماذا ستفهم هنا؟
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-300">
                  <li>• كيف تتكون أزواج العملات ولماذا تتحرك.</li>
                  <li>• الفرق بين السعر الذي تشتري منه والسعر الذي تبيع عليه.</li>
                  <li>• معنى Pip و Lot بطريقة عملية لا نظرية فقط.</li>
                  <li>• لماذا الرافعة المالية تضخم الخطر قبل الربح.</li>
                  <li>• أهم مصطلحات الفوركس بلغة عربية واضحة.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-bear/20 bg-bear/5 p-6">
                <h3 className="font-display text-lg font-bold text-neutral-50">
                  تنبيه ضروري
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  الفوركس سوق عالي المخاطر، خصوصاً مع الرافعة المالية. هذا المسار تعليمي فقط ولا يمثل توصية تداول. الهدف أن تفهم قبل أن تضغط Buy أو Sell.
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
              <h2 className="font-display text-3xl font-bold text-neutral-50">
                خريطة الفوركس البصرية
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
                قبل قراءة الدروس، هذه الرسومات تعطيك الصورة العامة للمفاهيم التي تربك أغلب المبتدئين. كل مخطط هنا سيظهر أيضاً داخل الدروس التفصيلية في مكانه المناسب.
              </p>

              <ForexPairVisual />
              <BidAskSpreadVisual />
              <PipLotVisual />
              <LeverageMarginVisual />
              <ForexGlossaryVisual />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-eyebrow">دروس المسار</p>
              <h2 className="section-title text-3xl">ابدأ بالترتيب التالي</h2>
            </div>
            <Link href="/academy" className="btn-outline">
              العودة للأكاديمية
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {forexLessons.map((lesson) => (
              <Link
                key={lesson.href}
                href={lesson.href}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/10 font-mono text-sm font-bold text-gold">
                    {lesson.number}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-neutral-50 transition-colors group-hover:text-gold">
                        {lesson.title}
                      </h3>
                      <span className="chip text-[10px]">{lesson.tag}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {lesson.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                      افتح الدرس
                      <svg
                        className="h-3.5 w-3.5 flip-rtl transition-transform group-hover:-translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
