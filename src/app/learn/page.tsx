import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "مركز التعلم - Vanta Capital",
  description:
    "مركز تعلم مختصر ومنظم يجمع أهم المسارات، الدروس، الأدوات، التحليلات، وركن VIP داخل Vanta Capital.",
};

const tabs = ["ابدأ من هنا", "المسارات", "الأدوات", "التحليلات", "VIP"];

const startItems = [
  {
    title: "ابدأ من أساسيات السوق",
    href: "/academy/market-basics",
    type: "مسار",
    desc: "افهم السوق، السعر، المشاركين، السيولة، القيمة، والمخاطر قبل الانتقال للتطبيق.",
  },
  {
    title: "انتقل إلى الفوركس للمبتدئين",
    href: "/academy/forex-basics",
    type: "مسار مكتمل",
    desc: "تعلم أزواج العملات، السبريد، اللوت، الرافعة، الأخبار، وإدارة المخاطر في الفوركس.",
  },
  {
    title: "استخدم حاسبة حجم الصفقة",
    href: "/tools/risk-calculator",
    type: "أداة",
    desc: "حوّل فكرة المخاطرة إلى أرقام واضحة قبل أي تدريب عملي.",
  },
];

const contentItems = [
  {
    title: "ما هو السوق المالي؟",
    href: "/academy/market-basics/what-is-financial-market",
    tag: "درس",
    category: "أساسيات السوق",
  },
  {
    title: "لماذا تتحرك الأسعار؟",
    href: "/academy/market-basics/why-prices-move",
    tag: "درس",
    category: "أساسيات السوق",
  },
  {
    title: "السيولة والتذبذب",
    href: "/academy/market-basics/liquidity-volatility",
    tag: "درس",
    category: "أساسيات السوق",
  },
  {
    title: "المخاطر قبل الفرص",
    href: "/academy/market-basics/risk-before-opportunity",
    tag: "درس",
    category: "إدارة المخاطر",
  },
  {
    title: "Bid و Ask و Spread",
    href: "/academy/forex-basics/bid-ask-spread",
    tag: "درس",
    category: "الفوركس",
  },
  {
    title: "Pip و Lot",
    href: "/academy/forex-basics/pip-and-lot",
    tag: "درس",
    category: "الفوركس",
  },
  {
    title: "التحليلات اليومية والأسبوعية",
    href: "/analysis",
    tag: "تحليل",
    category: "التحليلات",
  },
  {
    title: "الأخبار الاقتصادية",
    href: "/news",
    tag: "أخبار",
    category: "متابعة السوق",
  },
  {
    title: "غرفة السوق VIP",
    href: "/vip/dashboard",
    tag: "VIP",
    category: "خاص",
  },
];

function TypeIcon({ tag }: { tag: string }) {
  const iconPath: Record<string, string> = {
    درس: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4zM8 4v14a2 2 0 0 0 2 2",
    تحليل: "M4 19V5M4 19h16M8 15v-5M12 15V7M16 15v-8",
    أخبار: "M6 4h12v16H6zM9 8h6M9 12h6M9 16h4",
    VIP: "M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z",
    أداة: "M14 7l3 3-7 7H7v-3l7-7zM5 19h14",
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

export default function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="مركز التعلم"
        title="تصفّح محتوى Vanta بوضوح"
        description="صفحة خفيفة تجمع أهم ما يحتاجه الزائر: من أين يبدأ، ما المسارات المتاحة، أين الأدوات، وأين التحليلات وركن VIP."
      />

      <section className="container-custom py-12">
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {tabs.map((tab, index) => (
              <a
                key={tab}
                href={index === 0 ? "#start" : index === 1 ? "#tracks" : index === 2 ? "#tools" : index === 3 ? "#analysis" : "#vip"}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  index === 0
                    ? "border-gold/30 bg-gold/10 text-gold"
                    : "border-white/5 bg-white/[0.03] text-neutral-400 hover:border-gold/20 hover:text-gold"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>

        <div id="start" className="mt-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-950 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="chip chip-gold">ابدأ من هنا</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-neutral-50">
                طريق مختصر للمبتدئ الجاد
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
                بدل أن تتنقل عشوائياً بين الصفحات، ابدأ بهذا الترتيب: أساسيات السوق، ثم الفوركس، ثم أداة حساب المخاطرة.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-left">
              <Link href="/academy" className="btn-outline">
                عرض الأكاديمية كاملة
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {startItems.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-white/5 bg-white/[0.035] p-5 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-3">
                  <TypeIcon tag={item.type} />
                  <span className="chip text-[10px]">{item.type}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-neutral-50 transition-colors group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div id="tracks" className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-eyebrow">مكتبة مختارة</p>
              <h2 className="section-title text-3xl">أهم المحتوى بدون ازدحام</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
                هذه ليست قائمة ضخمة عشوائية؛ فقط روابط مختارة تقود المستخدم إلى أهم المسارات والصفحات الحالية.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contentItems.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.055]">
                <div className="flex items-start gap-4">
                  <TypeIcon tag={item.tag} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip chip-gold text-[10px]">{item.tag}</span>
                      <span className="text-[11px] text-neutral-500">{item.category}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold leading-relaxed text-neutral-50 transition-colors group-hover:text-gold">
                      {item.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                      فتح المحتوى
                      <svg className="h-3.5 w-3.5 flip-rtl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <div id="tools" className="rounded-3xl border border-white/5 bg-ink-900/60 p-6">
            <span className="chip chip-gold">الأدوات</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50">أدوات عملية</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              لا تكتفِ بالقراءة. استخدم الأدوات لتحويل المفاهيم إلى أرقام واضحة.
            </p>
            <Link href="/tools" className="mt-5 inline-flex text-sm font-semibold text-gold">فتح الأدوات</Link>
          </div>

          <div id="analysis" className="rounded-3xl border border-white/5 bg-ink-900/60 p-6">
            <span className="chip chip-gold">التحليلات</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50">قراءات منظمة</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              تابع أمثلة تحليلية تساعدك على تطبيق المفاهيم على الأسواق الحية دون وعود ربح.
            </p>
            <Link href="/analysis" className="mt-5 inline-flex text-sm font-semibold text-gold">فتح التحليلات</Link>
          </div>

          <div id="vip" className="rounded-3xl border border-gold/20 bg-gold/5 p-6">
            <span className="chip chip-gold">VIP</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-50">غرفة السوق</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              لوحة خاصة تجمع السيناريوهات، الأخبار، الأدوات، والمكتبة في تجربة واحدة.
            </p>
            <Link href="/vip/dashboard" className="mt-5 inline-flex text-sm font-semibold text-gold">دخول غرفة السوق</Link>
          </div>
        </div>
      </section>
    </>
  );
}
