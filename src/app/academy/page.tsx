import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import LessonCard from "@/components/LessonCard";
import { academySections } from "@/data/academy";
import { MarketStructureDiagram, ParticipantsMap } from "@/components/AcademyVisuals";

export const metadata = {
  title: "الأكاديمية - تعلّم الأسواق المالية",
  description:
    "بوابة تعليمية عربية منظمة لمسارات الأسواق المالية: أساسيات السوق، الفوركس، إدارة المخاطر، التحليل، والأسهم والسلع.",
};

const activeTracks = [
  {
    title: "أساسيات السوق",
    description:
      "مسار تأسيسي مكتمل يشرح آلية السوق، حركة الأسعار، المشاركين، الأصول، السيولة، والقيمة.",
    href: "/academy/market-basics",
    lessons: "8 دروس",
    status: "مكتمل",
  },
  {
    title: "الفوركس للمبتدئين",
    description:
      "مسار عربي منظم يشرح سوق العملات من الصفر: الأزواج، السبريد، اللوت، الرافعة، الأخبار، والخطة.",
    href: "/academy/forex-basics",
    lessons: "12 درس",
    status: "المسار الرئيسي",
  },
  {
    title: "إدارة المخاطر",
    description:
      "المحور الثالث في الأكاديمية: حماية رأس المال، حجم الصفقة، حدود الخسارة، والانضباط العددي قبل أي تطبيق.",
    href: "/academy/risk-management",
    lessons: "6 دروس",
    status: "بدأ التنفيذ",
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأكاديمية"
        title="بوابة تعليمية منظمة للأسواق"
        description="ادخل إلى المسارات الصحيحة مباشرة: كل قسم له صفحة مستقلة ودروس مرتبة، بصياغة واضحة ومسار تعلم تدريجي متناسق."
      />

      <section className="container-custom py-12">
        <div className="mb-10 grid gap-5 lg:grid-cols-2">
          <MarketStructureDiagram />
          <ParticipantsMap />
        </div>

        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-900 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="chip chip-gold">ابدأ من المسار الصحيح</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl">
                المسارات النشطة الآن
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                الأكاديمية مبنية على مسارات واضحة بدل الروابط المتفرقة. ابدأ من الأساسيات، ثم الفوركس، ثم انتقل إلى إدارة المخاطر وبقية المحاور تدريجيًا.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-mono text-2xl font-bold text-gold">3</div>
                  <div className="mt-1 text-xs text-neutral-500">مسارات نشطة</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-mono text-2xl font-bold text-gold">26</div>
                  <div className="mt-1 text-xs text-neutral-500">درساً منظماً</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {activeTracks.map((track) => (
              <Link
                key={track.href}
                href={track.href}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="chip chip-gold">{track.status}</span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50 transition-colors group-hover:text-gold">
                      {track.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                    {track.lessons}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {track.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
                  افتح المسار
                  <svg
                    className="h-4 w-4 flip-rtl"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="section-title text-3xl">كل أقسام الأكاديمية</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
            هذه هي الخريطة الكاملة للأقسام. المسارات المنشطة تُغذّى تدريجيًا بمحتوى متناسق، أما المحاور القادمة فسيتم تطويرها وفق نفس المستوى التحريري والبصري.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academySections.map((section) => (
              <LessonCard key={section.slug} section={section} />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-bear/20 bg-bear/5 p-8">
          <h3 className="font-display text-xl font-bold text-neutral-50">
            تذكير مهم قبل التطبيق
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
            محتوى الأكاديمية تعليمي فقط ولا يمثل توصية شراء أو بيع. التداول يحمل مخاطر عالية، خصوصاً مع الرافعة المالية. ابدأ بالتعلّم والتجربة المنضبطة، ولا تخاطر بمال لا يمكنك تحمل خسارته.
          </p>
        </div>
      </section>
    </>
  );
}
