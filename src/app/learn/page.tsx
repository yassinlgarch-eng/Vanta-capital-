import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "مركز التعلم - Usus Markets",
  description:
    "مركز تعلم منظم يجمع أهم المسارات، الدروس، الأدوات، التحليلات، وركن VIP داخل Usus Markets.",
};

const tabs = [
  { label: "ابدأ من هنا", href: "#start" },
  { label: "المسارات", href: "#tracks" },
  { label: "الأدوات", href: "#tools" },
  { label: "التحليلات", href: "#analysis" },
  { label: "VIP", href: "#vip" },
];

const startItems = [
  {
    title: "أساسيات السوق",
    href: "/academy/market-basics",
    type: "مسار",
    desc: "افهم السوق، السعر، المشاركين، السيولة، القيمة، والمخاطر قبل التطبيق.",
  },
  {
    title: "الفوركس للمبتدئين",
    href: "/academy/forex-basics",
    type: "مسار مكتمل",
    desc: "أزواج العملات، السبريد، اللوت، الرافعة، الأخبار، وإدارة المخاطر.",
  },
  {
    title: "حاسبة حجم الصفقة",
    href: "/tools/risk-calculator",
    type: "أداة",
    desc: "حوّل فكرة المخاطرة إلى أرقام واضحة قبل أي تدريب عملي.",
  },
];

const masterClass = [
  {
    title: "إطار قراءة السوق",
    href: "/academy/market-basics/market-reading-framework",
    desc: "طريقة منظمة لقراءة الأصل، السياق، الأخبار، السيولة، القيمة، والمخاطرة.",
  },
  {
    title: "المخاطر قبل الفرص",
    href: "/academy/market-basics/risk-before-opportunity",
    desc: "كيف تفكر في الخسارة وحجم الصفقة قبل أي فرصة.",
  },
];

const quickGuide = [
  { title: "ما هو السوق المالي؟", href: "/academy/market-basics/what-is-financial-market" },
  { title: "لماذا تتحرك الأسعار؟", href: "/academy/market-basics/why-prices-move" },
  { title: "Bid و Ask و Spread", href: "/academy/forex-basics/bid-ask-spread" },
  { title: "Pip و Lot", href: "/academy/forex-basics/pip-and-lot" },
];

const research = [
  { title: "التحليلات اليومية والأسبوعية", href: "/analysis", meta: "متابعة السوق" },
  { title: "الأخبار الاقتصادية المؤثرة", href: "/news", meta: "أخبار وبيانات" },
  { title: "السعر ليس القيمة دائماً", href: "/academy/market-basics/price-vs-value", meta: "درس تحليلي" },
  { title: "السيولة والتذبذب", href: "/academy/market-basics/liquidity-volatility", meta: "تنفيذ ومخاطر" },
];

function TypeIcon({ tag }: { tag: string }) {
  const iconPath: Record<string, string> = {
    درس: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4zM8 4v14a2 2 0 0 0 2 2",
    أداة: "M14 7l3 3-7 7H7v-3l7-7zM5 19h14",
    VIP: "M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z",
    مسار: "M4 7h16M4 12h16M4 17h16",
    "مسار مكتمل": "M4 7h16M4 12h16M4 17h16",
  };

  return (
    <div className="grid h-11 w-11 place-items-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d={iconPath[tag] ?? iconPath["درس"]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function MiniVisual({ title, shield = false }: { title: string; shield?: boolean }) {
  return (
    <div className="relative min-h-[155px] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-ink-950 via-navy/70 to-ink-900 p-4">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -right-12 top-4 h-32 w-32 rounded-full bg-gold/15 blur-[55px]" />
      <div className="relative flex min-h-[122px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold">USUS</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d={shield ? "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" : "M4 18h16M7 15v-5M12 15V6M17 15v-8"} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div>
          <div className="mb-3 flex items-end gap-2">
            {[44, 70, 54, 92].map((h, i) => (
              <span key={i} className="block w-5 rounded-t-md bg-gold/70" style={{ height: `${h}px` }} />
            ))}
          </div>
          <h3 className="font-display text-xl font-bold text-neutral-50">{title}</h3>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-bold text-neutral-50">{title}</h2>
    </div>
  );
}

export default function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="مركز التعلم"
        title="تجربة تعليمية منظمة"
        description="مسارات واضحة، دليل سريع، أدوات عملية، وتحليلات مختارة في واجهة واحدة منظمة."
      />

      <section className="container-custom py-12">
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {tabs.map((tab, index) => (
              <a
                key={tab.label}
                href={tab.href}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  index === 0
                    ? "border-gold/30 bg-gold/10 text-gold"
                    : "border-white/5 bg-white/[0.03] text-neutral-400 hover:border-gold/20 hover:text-gold"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/60 to-ink-950 p-5 shadow-card sm:p-7">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="chip chip-gold">Featured</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl">
                ابدأ بفهم السوق قبل البحث عن الفرصة
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                بوابة منظمة توصلك إلى أهم المسارات والأدوات بالترتيب الصحيح.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/academy/market-basics" className="btn-gold">ابدأ المسار</Link>
                <Link href="/tools/risk-calculator" className="btn-outline">حاسبة المخاطرة</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <MiniVisual title="Market Framework" />
            </div>
          </div>
        </div>

        <div id="start" className="mt-14">
          <SectionTitle title="ابدأ من هنا" eyebrow="طريق مختصر" />
          <div className="grid gap-4 lg:grid-cols-3">
            {startItems.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-white/5 bg-white/[0.035] p-5 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-3">
                  <TypeIcon tag={item.type} />
                  <span className="chip text-[10px]">{item.type}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-neutral-50 transition-colors group-hover:text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div id="tracks" className="mt-16">
          <SectionTitle title="المسارات الأساسية" eyebrow="Master Class" />
          <div className="grid gap-5 lg:grid-cols-2">
            {masterClass.map((item, index) => (
              <Link key={item.href} href={item.href} className="group block">
                <MiniVisual title={item.title} shield={index === 1} />
                <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50 transition-colors group-hover:text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/5 bg-ink-900/60 p-6">
          <SectionTitle title="الدليل السريع" />
          <div className="grid gap-3 sm:grid-cols-2">
            {quickGuide.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.035] p-4 text-sm font-bold text-neutral-100 transition-colors hover:border-gold/25 hover:text-gold">
                <span>{item.title}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-gold">▶</span>
              </Link>
            ))}
          </div>
        </div>

        <div id="analysis" className="mt-16 rounded-3xl border border-white/5 bg-white/[0.025] p-6">
          <SectionTitle title="مركز الأبحاث" eyebrow="تحليلات وروابط مختارة" />
          <div className="divide-y divide-white/5">
            {research.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-gold">
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-50">{item.title}</h3>
                  <p className="mt-1 text-xs text-neutral-500">{item.meta}</p>
                </div>
                <span className="text-neutral-500">‹</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <div id="tools" className="rounded-3xl border border-white/5 bg-ink-900/60 p-6">
            <span className="chip chip-gold">الأدوات</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50">أدوات عملية</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">استخدم الأدوات لتحويل المفاهيم إلى أرقام واضحة.</p>
            <Link href="/tools" className="mt-5 inline-flex text-sm font-semibold text-gold">فتح الأدوات</Link>
          </div>
          <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-6">
            <span className="chip chip-gold">الأكاديمية</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50">كل المسارات</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">ادخل إلى بوابة الأكاديمية لرؤية الأقسام والمسارات كاملة.</p>
            <Link href="/academy" className="mt-5 inline-flex text-sm font-semibold text-gold">فتح الأكاديمية</Link>
          </div>
          <div id="vip" className="rounded-3xl border border-gold/20 bg-gold/5 p-6">
            <span className="chip chip-gold">VIP</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50">غرفة السوق</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">لوحة تجمع السيناريوهات، الأخبار، الأدوات، والمكتبة الخاصة.</p>
            <Link href="/vip/dashboard" className="mt-5 inline-flex text-sm font-semibold text-gold">دخول غرفة السوق</Link>
          </div>
        </div>
      </section>
    </>
  );
}
