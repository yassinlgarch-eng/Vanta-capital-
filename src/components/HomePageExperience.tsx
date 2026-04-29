import Link from "next/link";
import LiveMarketTicker from "@/components/LiveMarketTicker";
import LiveNewsList from "@/components/LiveNewsList";
import LessonCard from "@/components/LessonCard";
import BookCard from "@/components/BookCard";
import { academySections } from "@/data/academy";
import { books } from "@/data/library";

const quickEntryItems = [
  { title: "أريد أن أبدأ التعلّم", description: "ادخل إلى المسارات التعليمية المنظمة وابدأ من الأساسيات.", href: "/academy", label: "ابدأ من الأكاديمية" },
  { title: "أريد متابعة الأسواق", description: "تصفّح الأخبار المؤثرة وما يستحق الانتباه في السوق الآن.", href: "/news", label: "انتقل إلى الأخبار" },
  { title: "أريد تحليلات منظمة", description: "اقرأ السيناريوهات والقراءات اليومية والأسبوعية بوضوح.", href: "/analysis", label: "استعرض التحليلات" },
  { title: "أريد تجربة أعمق", description: "اكتشف بيئة VIP المخصصة للمتابعة الأعمق والانضباط الأعلى.", href: "/vip", label: "اكتشف VIP" },
];

const platformPillars = [
  { title: "أخبار مؤثرة", description: "موجزات عربية منظمة تركز على ما يحرّك السوق فعلًا، لا على الضجيج.", href: "/news" },
  { title: "تحليلات منظمة", description: "قراءات يومية وأسبوعية تساعدك على فهم السياق قبل التفكير في التنفيذ.", href: "/analysis" },
  { title: "أكاديمية عربية", description: "مسارات تعليمية تبدأ من الأساسيات وتبني الفهم خطوة بخطوة.", href: "/academy" },
  { title: "بيئة VIP", description: "مساحة متابعة أعمق للمستخدم الجاد تجمع الأدوات والقراءات في مكان واحد.", href: "/vip" },
];

const rhythmItems = [
  { eyebrow: "تحت المتابعة", title: "الأصل الأهم الآن", body: "تحرك الأصل المهم لا يعني فرصة جاهزة دائمًا. الأهم هو فهم السياق والسيولة وما إذا كانت الحركة مدفوعة بخبر أو إعادة تسعير." },
  { eyebrow: "حدث اقتصادي", title: "ما الذي يستحق الانتباه اليوم؟", body: "تابع الحدث الذي قد يغيّر التوقعات، لا مجرد الخبر الذي يملأ العناوين. جودة المتابعة تبدأ من معرفة ما يهم فعلًا." },
  { eyebrow: "قراءة مميزة", title: "منهجية لا ضجيج", body: "التحليل الجيد لا يكتفي باتجاه متوقع، بل يشرح السياق، وشروط الفكرة، وحدود المخاطرة قبل أي قرار." },
];

export default function HomePageExperience() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
        <div className="absolute -top-24 right-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" aria-hidden="true" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true" />
        <div className="container-custom relative pt-16 pb-14 sm:pt-24 sm:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="text-xs font-medium tracking-wide text-gold">Usus Markets · Arabic Financial Intelligence</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl">
                منصة عربية لفهم الأسواق المالية
                <span className="bg-gradient-gold bg-clip-text text-transparent"> بوضوح واحتراف</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                أخبار مؤثرة، تحليلات منظمة، مسارات تعليمية، وأدوات عملية تساعدك على قراءة السوق بهدوء واتخاذ قرار أكثر وعيًا.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/academy" className="btn-gold">ابدأ التعلّم</Link>
                <Link href="/analysis" className="btn-outline">استعرض التحليلات</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-neutral-500 sm:text-sm">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">محتوى عربي منظم</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">تحليلات وأدوات عملية</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">الوضوح قبل الضجيج</span>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-gold/20 bg-ink-900/60 p-2 shadow-card">
                <img src="/images/visuals/home-market-dashboard.svg" alt="واجهة سوق احترافية" className="h-auto w-full rounded-2xl" />
              </div>
            </div>
          </div>
          <div className="mt-10"><LiveMarketTicker variant="compact" limit={6} refreshMs={45000} /></div>
        </div>
      </section>

      <section className="container-custom py-16">
        <p className="section-eyebrow">مدخل سريع</p>
        <h2 className="section-title">ابدأ من المسار المناسب لك</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickEntryItems.map((item) => (
            <Link key={item.href} href={item.href} className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]">
              <h3 className="font-display text-xl font-bold text-neutral-50 transition-colors group-hover:text-gold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="container-custom relative">
          <div className="text-center">
            <p className="section-eyebrow justify-center">منصة واحدة، وظائف واضحة</p>
            <h2 className="section-title mx-auto">ليست بوابة مزدحمة، بل نظام واضح</h2>
            <p className="section-subtitle mx-auto">كل ركيزة هنا لها دور واضح: متابعة، تحليل، تعلّم، أو تجربة أعمق. هذه هي الطريقة الصحيحة لبناء الثقة في منصة مالية عربية.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformPillars.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition-all hover:border-gold/25 hover:bg-white/[0.05]">
                <h3 className="font-display text-xl font-bold text-neutral-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="section-eyebrow">تحليل مميز</p>
            <h2 className="section-title">السوق يحتاج تفسيرًا لا عناوين فقط</h2>
            <p className="section-subtitle">الأخبار تقول ما حدث. التحليل الجيد يشرح لماذا حدث، وما الذي يمكن أن يحدث بعده، وما الشروط التي تجعل الفكرة صالحة أو باطلة.</p>
            <div className="mt-6"><Link href="/analysis" className="btn-gold">افتح قسم التحليلات</Link></div>
          </div>
          <div className="lg:col-span-7 grid gap-4 md:grid-cols-2">
            <Link href="/analysis" className="rounded-2xl border border-gold/20 bg-gold/5 p-6 md:col-span-2 transition-all hover:border-gold/30 hover:bg-gold/10">
              <p className="text-xs font-semibold tracking-wide text-gold">FEATURED ANALYSIS</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-neutral-50">القراءة الأوضح تبدأ من السياق</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">التحليل المميز في Usus Markets لا يقدّم اتجاهًا فقط، بل يربط بين الخبر، والسياق، والسلوك السعري، والمخاطرة قبل أي فكرة تنفيذ.</p>
            </Link>
            {rhythmItems.slice(0,2).map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold tracking-wide text-neutral-500">{item.eyebrow}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-neutral-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="rounded-3xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-eyebrow">إيقاع السوق</p>
              <h2 className="section-title">ما الذي يستحق الانتباه اليوم؟</h2>
            </div>
            <Link href="/news" className="text-sm font-semibold text-gold transition-colors hover:text-gold-light">تصفّح التغطية الكاملة</Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {rhythmItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold tracking-wide text-gold">{item.eyebrow}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-neutral-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">الأخبار الاقتصادية</p>
            <h2 className="section-title">آخر ما يحرّك الأسواق</h2>
          </div>
          <Link href="/news" className="hidden text-sm font-semibold text-gold transition-colors hover:text-gold-light sm:inline-flex">كل الأخبار</Link>
        </div>
        <div className="mt-8"><LiveNewsList showFilters={false} limit={4} refreshMs={600000} /></div>
      </section>

      <section className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="section-eyebrow">الأكاديمية</p>
            <h2 className="section-title">مسارات تبني الفهم قبل التطبيق</h2>
            <p className="section-subtitle">الأكاديمية ليست أرشيفًا طويلًا من المقالات، بل مسارات تعليمية منظمة تبدأ من الأساسيات وتنتقل تدريجيًا إلى المخاطر والتحليل واتخاذ القرار.</p>
            <div className="mt-7"><Link href="/academy" className="btn-gold">استكشف الأكاديمية</Link></div>
          </div>
          <div className="lg:col-span-7"><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{academySections.slice(0, 3).map((section) => <LessonCard key={section.slug} section={section} />)}</div></div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="container-custom relative">
          <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/45 to-ink-950 p-8 sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5"><span className="text-xs font-semibold tracking-wide text-gold">VIP ENVIRONMENT</span></div>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl md:text-5xl">تجربة متابعة أعمق للمستخدم الجاد</h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400">VIP في Usus Markets ليس مجرد منشورات إضافية. هو بيئة متابعة تجمع القراءات، والأدوات، وإيقاع السوق، والمكتبة في مساحة واحدة أكثر تنظيمًا.</p>
                <div className="mt-8 flex flex-wrap items-center gap-3"><Link href="/vip" className="btn-gold">اكتشف VIP</Link><Link href="/vip/dashboard" className="btn-outline">عرض غرفة السوق</Link></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["بيئة متابعة منظمة بدل التشتت بين مصادر متعددة","لوحة واحدة تجمع السيناريوهات، الأخبار، والأدوات","قراءات أعمق للمستخدم الذي يريد وضوحًا أعلى","تجربة تعليمية ومهنية لا وعود ربح أو صخب تسويقي"].map((item) => <div key={item} className="rounded-2xl border border-white/5 bg-white/[0.05] p-5 text-sm leading-relaxed text-neutral-300">{item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="flex items-end justify-between gap-6">
          <div><p className="section-eyebrow">المكتبة الرقمية</p><h2 className="section-title">رفّ معرفي منتقى بعناية</h2></div>
          <Link href="/library" className="hidden text-sm font-semibold text-gold transition-colors hover:text-gold-light sm:inline-flex">كل الإصدارات</Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">المنتجات هنا ليست متجرًا مزدحمًا، بل مجموعة معرفية مختارة تخدم مستخدمًا يريد تعلمًا أعمق أو مادة مرجعية منظمة.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{books.slice(0, 3).map((book) => <BookCard key={book.id} book={book} />)}</div>
      </section>

      <section className="container-custom py-16">
        <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="section-eyebrow">فلسفة المنصة</p>
            <h2 className="section-title">الوضوح قبل الضجيج، والمخاطر قبل الفرص</h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">Usus Markets لا تتعامل مع السوق كعناوين متلاحقة أو فرص سريعة. المنصة مبنية على فكرة واحدة واضحة: فهم السياق أولًا، وقراءة المخاطر قبل مطاردة الحركة، وتقديم تجربة عربية تشبه المعايير التحريرية العالمية من حيث النظام والهدوء والوضوح.</p>
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/50 to-ink-900 p-10 text-center sm:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl md:text-5xl">اختر مسارك داخل Usus Markets</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400">ابدأ بالتعلّم، أو تابع التحليلات، أو اكتشف تجربة VIP إذا كنت تريد بيئة متابعة أعمق وأكثر تنظيمًا.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3"><Link href="/academy" className="btn-gold">ابدأ من الأكاديمية</Link><Link href="/vip" className="btn-outline">استكشف VIP</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
