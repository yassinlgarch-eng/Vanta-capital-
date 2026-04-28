import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import LessonCard from "@/components/LessonCard";
import { academySections } from "@/data/academy";
import { MarketStructureDiagram, ParticipantsMap } from "@/components/AcademyVisuals";

export const metadata = {
  title: "الأكاديمية - تعلّم الأسواق المالية",
  description:
    "مسار تعليمي عربي متكامل يبدأ من أساسيات السوق، حركة الأسعار، إدارة المخاطر، خطة التداول، وتجنب أخطاء المبتدئين.",
};

const foundationLessons = [
  {
    number: "01",
    title: "ما هو السوق المالي؟",
    href: "/academy/what-is-market",
    description:
      "افهم السوق كآلية تبادل وتسعير، وليس مجرد شاشة أسعار أو أزرار شراء وبيع.",
    tag: "تأسيسي",
  },
  {
    number: "02",
    title: "لماذا تتحرك الأسعار؟",
    href: "/academy/why-prices-move",
    description:
      "العرض والطلب، السيولة، المفاجآت، والتوقعات التي تجعل السعر يتحرك.",
    tag: "حركة السعر",
  },
  {
    number: "03",
    title: "من يحرك السوق؟",
    href: "/academy/market-participants",
    description:
      "البنوك المركزية، المؤسسات، صناع السوق، الأفراد والخوارزميات.",
    tag: "لاعبو السوق",
  },
  {
    number: "04",
    title: "أنواع الأصول المالية",
    href: "/academy/asset-classes",
    description:
      "الأسهم، الفوركس، السلع، السندات، المؤشرات والكريبتو — وما الذي يحرك كل فئة.",
    tag: "خريطة الأصول",
  },
  {
    number: "05",
    title: "أنواع أوامر التداول",
    href: "/academy/order-types",
    description:
      "Market, Limit, Stop، وقف الخسارة وجني الربح من زاوية تنفيذية عملية.",
    tag: "تنفيذ",
  },
  {
    number: "06",
    title: "المخاطرة والعائد",
    href: "/academy/risk-reward",
    description:
      "كيف تفكر في الخسارة قبل الربح، وتحسب حجم الصفقة ونسبة العائد للمخاطرة.",
    tag: "إدارة مخاطر",
  },
  {
    number: "07",
    title: "السيولة والسبريد والانزلاق السعري",
    href: "/academy/liquidity-spread",
    description:
      "التكلفة الخفية للتنفيذ، ولماذا يختلف التداول بين وقت وآخر وأصل وآخر.",
    tag: "تكلفة التنفيذ",
  },
  {
    number: "08",
    title: "الجلسات والأخبار الاقتصادية",
    href: "/academy/sessions-and-news",
    description:
      "جلسات آسيا ولندن ونيويورك، وكيف تقرأ التقويم الاقتصادي دون تهور.",
    tag: "أخبار وجلسات",
  },
  {
    number: "09",
    title: "خطة التداول الأولى",
    href: "/academy/trading-plan",
    description:
      "قالب عملي لاختيار السوق، شروط الدخول، الوقف، الهدف، والتوثيق.",
    tag: "خطة عمل",
  },
  {
    number: "10",
    title: "أخطاء المبتدئين وكيف تتجنبها",
    href: "/academy/beginner-mistakes",
    description:
      "مطاردة الحركة، تداول الانتقام، الرافعة، تجاهل الأخبار، وتغيير الاستراتيجية بسرعة.",
    tag: "وقاية",
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأكاديمية"
        title="تعلّم الأسواق من الصفر"
        description="مسار تعليمي عربي منظّم يبدأ من فهم السوق وحركة الأسعار، ثم ينتقل إلى التنفيذ، إدارة المخاطر، الأخبار، وبناء خطة تداول واقعية."
      />

      <section className="container-custom py-12">
        <div className="mb-10 grid gap-5 lg:grid-cols-2">
          <MarketStructureDiagram />
          <ParticipantsMap />
        </div>

        {/* المسار التأسيسي */}
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-900 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="chip chip-gold">ابدأ من هنا</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl">
                المسار التأسيسي الكامل للمبتدئين
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                عشرة دروس مرتبة بعناية حتى لا تبدأ من المؤشرات قبل فهم السوق نفسه.
                اقرأها بالترتيب، ودوّن ملاحظاتك، ولا تنتقل إلى التداول الحقيقي قبل
                استيعاب المخاطرة والتنفيذ.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-mono text-2xl font-bold text-gold">10</div>
                  <div className="mt-1 text-xs text-neutral-500">دروس</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-mono text-2xl font-bold text-gold">4+</div>
                  <div className="mt-1 text-xs text-neutral-500">رسوم تعليمية</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-mono text-2xl font-bold text-gold">0</div>
                  <div className="mt-1 text-xs text-neutral-500">وعود ربح</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {foundationLessons.map((lesson) => (
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

        {/* أقسام الأكاديمية */}
        <div className="mt-16">
          <h2 className="section-title text-3xl">أقسام الأكاديمية القادمة</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
            بعد إكمال المسار التأسيسي، يمكنك التوسع تدريجياً في أقسام أكثر تخصصاً
            مثل الفوركس، الأسهم، السلع، التحليل الفني، التحليل الأساسي، وإدارة
            المخاطر المتقدمة.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academySections.map((section) => (
              <LessonCard key={section.slug} section={section} />
            ))}
          </div>
        </div>

        {/* تنبيه تعليمي */}
        <div className="mt-16 rounded-2xl border border-bear/20 bg-bear/5 p-8">
          <h3 className="font-display text-xl font-bold text-neutral-50">
            تذكير مهم قبل التطبيق
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
            محتوى الأكاديمية تعليمي فقط ولا يمثل توصية شراء أو بيع. التداول يحمل
            مخاطر عالية، خصوصاً مع الرافعة المالية. ابدأ بالتعلّم والتجربة
            المنضبطة، ولا تخاطر بمال لا يمكنك تحمل خسارته.
          </p>
        </div>
      </section>
    </>
  );
}
