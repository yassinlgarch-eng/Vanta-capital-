import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  MarketStructureDiagram,
  PriceFormationDiagram,
  ParticipantsMap,
  SupplyDemandVisual,
} from "@/components/AcademyVisuals";

export const metadata = {
  title: "أساسيات السوق - أكاديمية Usus Markets",
  description:
    "مسار عربي مبسط لفهم الأسواق المالية من الصفر: ما هو السوق، لماذا تتحرك الأسعار، من يشارك في السوق، وما الفرق بين الأصول المالية.",
};

const lessons = [
  {
    number: "01",
    title: "ما هو السوق المالي؟",
    href: "/academy/market-basics/what-is-financial-market",
    description:
      "افهم السوق كآلية تجمع المشترين والبائعين حول سعر، لا كأرقام عشوائية تتحرك على الشاشة.",
    tag: "تأسيسي",
  },
  {
    number: "02",
    title: "لماذا تتحرك الأسعار؟",
    href: "/academy/market-basics/why-prices-move",
    description:
      "العرض والطلب، السيولة، التوقعات، المفاجآت، ولماذا لا يكفي الخبر وحده لتفسير الحركة.",
    tag: "حركة السعر",
  },
  {
    number: "03",
    title: "من يشارك في السوق؟",
    href: "/academy/market-basics/market-participants",
    description:
      "البنوك المركزية، المؤسسات، صناع السوق، الأفراد والخوارزميات، وكيف تختلف أهدافهم.",
    tag: "لاعبو السوق",
  },
  {
    number: "04",
    title: "أنواع الأصول المالية",
    href: "/academy/market-basics/asset-classes",
    description:
      "الأسهم، الفوركس، السلع، السندات، المؤشرات والكريبتو، وما الذي يميز كل أصل.",
    tag: "أصول",
  },
  {
    number: "05",
    title: "السيولة والتذبذب",
    href: "/academy/market-basics/liquidity-volatility",
    description:
      "لماذا بعض الأسواق تتحرك بسلاسة وبعضها يقفز بعنف؟ فهم السيولة والسبريد والتذبذب.",
    tag: "سيولة",
  },
  {
    number: "06",
    title: "السعر ليس القيمة دائماً",
    href: "/academy/market-basics/price-vs-value",
    description:
      "الفرق بين سعر التداول والقيمة العادلة، ولماذا قد يبالغ السوق في الصعود أو الهبوط.",
    tag: "قيمة",
  },
  {
    number: "07",
    title: "المخاطر قبل الفرص",
    href: "/academy/market-basics/risk-before-opportunity",
    description:
      "لماذا يبدأ المحترف بالسؤال عن الخسارة الممكنة قبل السؤال عن الربح المتوقع.",
    tag: "مخاطر",
  },
  {
    number: "08",
    title: "كيف تقرأ السوق بوعي؟",
    href: "/academy/market-basics/market-reading-framework",
    description:
      "إطار بسيط يجمع السياق، السعر، الأخبار، السيولة، والمخاطرة قبل اتخاذ أي قرار.",
    tag: "إطار عمل",
  },
];

export default function MarketBasicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأكاديمية · أساسيات السوق"
        title="افهم السوق قبل أن تتداول السوق"
        description="هذا المسار يبني الأساس العقلي قبل الدخول في الفوركس أو الأسهم أو السلع: ما هو السوق؟ لماذا يتحرك؟ من يحركه؟ وما الذي يجعل السعر يتغير؟"
      />

      <section className="container-custom py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-5">
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <span className="chip chip-gold">مسار تأسيسي</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-neutral-50">
                  لماذا نبدأ هنا؟
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  لأن المتداول الذي لا يفهم كيف يتكوّن السعر سيبقى يطارد الشموع والأخبار دون رؤية الصورة الكاملة.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-300">
                  <li>• فهم السوق كآلية تسعير.</li>
                  <li>• فهم دور المشاركين والسيولة.</li>
                  <li>• التمييز بين السعر والقيمة.</li>
                  <li>• بناء لغة مشتركة قبل التحليل والتداول.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-bold text-neutral-50">
                  مناسب لمن؟
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  للمبتدئ تماماً، ولأي شخص دخل التداول مباشرة من المؤشرات دون أن يفهم ما يحدث خلف حركة السعر.
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
              <h2 className="font-display text-3xl font-bold text-neutral-50">
                الخريطة البصرية للسوق
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
                هذه الرسومات تلخص أهم أفكار المسار قبل الدخول في الدروس التفصيلية.
              </p>

              <MarketStructureDiagram />
              <PriceFormationDiagram />
              <ParticipantsMap />
              <SupplyDemandVisual />
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
