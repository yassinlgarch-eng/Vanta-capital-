import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  RiskRewardVisual,
  PositionSizingVisual,
  TradingPlanBoardVisual,
} from "@/components/AcademyVisuals";

export const metadata = {
  title: "إدارة المخاطر - أكاديمية Usus Markets",
  description:
    "مسار عربي منظم لفهم إدارة المخاطر في التداول: حماية رأس المال، حجم الصفقة، الخسارة المقبولة، وحدود الانضباط قبل أي تطبيق عملي.",
};

const lessons = [
  {
    number: "01",
    title: "ما معنى إدارة المخاطر فعلاً؟",
    href: "/academy/risk-management/what-is-risk-management",
    description:
      "فهم إدارة المخاطر كمنظومة لحماية الحساب، لا كمجرد وقف خسارة يوضع بعد الدخول.",
    tag: "تأسيسي",
  },
  {
    number: "02",
    title: "كم تخاطر في الصفقة الواحدة؟",
    href: "/academy/risk-management/risk-per-trade",
    description:
      "كيف تحدد نسبة مخاطرة منطقية لكل صفقة بعيداً عن الطمع والتسرع.",
    tag: "نسبة المخاطرة",
  },
  {
    number: "03",
    title: "حجم الصفقة والانضباط العددي",
    href: "/academy/risk-management/position-sizing",
    description:
      "كيف يتحول وقف الخسارة ونسبة المخاطرة إلى حجم صفقة محسوب فعلياً.",
    tag: "Position Size",
  },
  {
    number: "04",
    title: "العائد إلى المخاطرة Risk / Reward",
    href: "/academy/risk-management/risk-reward",
    description:
      "كيف تقيّم جودة الصفقة من خلال العلاقة بين الخسارة المحتملة والعائد المتوقع.",
    tag: "R/R",
  },
  {
    number: "05",
    title: "الحد الأقصى للخسارة اليومية والأسبوعية",
    href: "/academy/risk-management/daily-weekly-loss-limits",
    description:
      "كيف تمنع يومًا سيئًا أو أسبوعًا عاطفيًا من تدمير الحساب أو الثقة.",
    tag: "حدود الحماية",
  },
  {
    number: "06",
    title: "خطة الحماية قبل خطة الربح",
    href: "/academy/risk-management/protection-first-plan",
    description:
      "بناء إطار واضح يحدد متى تدخل، متى تتوقف، ومتى تحمي نفسك من الإفراط في التداول.",
    tag: "إطار عملي",
  },
];

export default function RiskManagementPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأكاديمية · إدارة المخاطر"
        title="احمِ رأس المال قبل أن تبحث عن الربح"
        description="هذا المسار مخصص لبناء العمود الفقري للمتداول المنضبط: حجم الصفقة، حدود الخسارة، العلاقة بين العائد والمخاطرة، وخطة الحماية قبل أي تطبيق عملي."
      />

      <section className="container-custom py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-5">
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <span className="chip chip-gold">المحور الثالث</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-neutral-50">
                  لماذا هذا المحور مهم؟
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-300">
                  <li>• لأنه يحوّل التعلم إلى أرقام منضبطة.</li>
                  <li>• لأنه يحمي الحساب من أخطاء الحجم والاندفاع.</li>
                  <li>• لأنه الرابط الطبيعي بين السوق والفوركس والتطبيق.</li>
                  <li>• لأنه أهم فرق بين المتعلم والمتسرع.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-bear/20 bg-bear/5 p-6">
                <h3 className="font-display text-lg font-bold text-neutral-50">
                  تنبيه ضروري
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  حتى أفضل فكرة في السوق قد تصبح سيئة إذا كان حجم الصفقة خاطئاً أو إذا لم تكن هناك حدود خسارة واضحة. هذا المسار هو أساس الحماية قبل أي نمو.
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
              <h2 className="font-display text-3xl font-bold text-neutral-50">
                الخريطة البصرية لإدارة المخاطر
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
                هذه الرسومات تلخص المفاهيم التي يبنى عليها هذا المحور: العلاقة بين الخسارة والعائد، حجم الصفقة، والانضباط اليومي.
              </p>

              <RiskRewardVisual />
              <PositionSizingVisual />
              <TradingPlanBoardVisual />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-eyebrow">دروس المسار</p>
              <h2 className="section-title text-3xl">ابدأ بهذا الترتيب</h2>
            </div>
            <Link href="/academy" className="btn-outline">
              العودة للأكاديمية
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {lessons.map((lesson) => (
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
