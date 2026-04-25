import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import LessonCard from "@/components/LessonCard";
import { academySections } from "@/data/academy";

export const metadata = {
  title: "الأكاديمية - تعلّم الأسواق المالية",
  description:
    "مسار تعليمي عربي متكامل من الصفر إلى الاحتراف في الأسواق المالية والتداول.",
};

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأكاديمية"
        title="تعلّم الأسواق من الصفر"
        description="مسار تعليمي مقسّم إلى ثمانية أقسام رئيسية، يأخذك من الأساسيات إلى المفاهيم المتقدمة في التحليل وإدارة المخاطر — بأسلوب عربي مبسّط."
      />

      <section className="container-custom py-12">
        {/* درس مميز */}
        <Link
          href="/academy/what-is-market"
          className="card card-hover group block overflow-hidden p-0"
        >
          <div className="grid gap-6 p-7 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <span className="chip chip-gold">درس مميّز</span>
                <span className="chip chip-bull">مبتدئ</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-neutral-50 transition-colors group-hover:text-gold sm:text-3xl">
                ما هو السوق المالي؟
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                الدرس الأول الذي يجب على كل مبتدئ قراءته. يشرح ببساطة ما هي
                الأسواق المالية، كيف تعمل، ومن هم اللاعبون الرئيسيون فيها.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                ابدأ الدرس الآن
                <svg
                  className="h-4 w-4 flip-rtl transition-transform group-hover:-translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <div className="grid h-32 place-items-center rounded-xl border border-gold/20 bg-gradient-to-br from-gold/10 via-transparent to-electric/10 lg:h-full">
              <span className="font-mono text-5xl font-bold text-gold/30">
                01
              </span>
            </div>
          </div>
        </Link>

        {/* أقسام الأكاديمية */}
        <div className="mt-14">
          <h2 className="section-title text-3xl">أقسام الأكاديمية</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
            ابدأ بالقسم الذي يناسب مستواك الحالي. كل قسم يحتوي على مجموعة من
            الدروس المتسلسلة.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academySections.map((section) => (
              <LessonCard key={section.slug} section={section} />
            ))}
          </div>
        </div>

        {/* المسار الموصى به */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-ink-900/40 p-8">
          <h3 className="font-display text-xl font-bold text-neutral-50">
            المسار الموصى به للمبتدئين
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            إذا كنت في بداية الطريق، اتبع هذا الترتيب لتحقيق أفضل استفادة:
          </p>
          <ol className="mt-6 space-y-3">
            {[
              "أساسيات السوق — افهم المكونات والمفاهيم الأساسية",
              "الفوركس للمبتدئين أو الأسهم والاستثمار — اختر مجالك",
              "إدارة المخاطر — الدرس الأهم قبل أي شيء آخر",
              "التحليل الفني — أدوات قراءة الأسعار",
              "سيكولوجية التداول — اكتشف عقلية المتداول الناجح",
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-lg border border-white/5 bg-white/5 p-4"
              >
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-gold/20 font-mono text-xs font-bold text-gold">
                  {i + 1}
                </span>
                <span className="text-sm text-neutral-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
