import Link from "next/link";
import LiveMarketTicker from "@/components/LiveMarketTicker";
import { RiskRewardVisual, NewsExpectationDiagram } from "@/components/AcademyVisuals";

export const metadata = {
  title: "VIP Market Room - Vanta Capital",
  description:
    "غرفة سوق تعليمية لأعضاء VIP تجمع الأسعار، سيناريوهات السوق، مفكرة الأخبار، الأدوات، والمكتبة في لوحة واحدة.",
};

const scenarios = [
  {
    asset: "XAU/USD",
    name: "الذهب",
    bias: "انتظار تأكيد",
    zone: "2335 - 2348",
    upside: "ثبات أعلى المنطقة قد يدعم متابعة 2365 ثم 2380",
    downside: "كسر 2335 يعيد التركيز إلى 2318",
    invalidation: "إغلاق واضح أسفل 2335",
    status: "قيد المراقبة",
  },
  {
    asset: "EUR/USD",
    name: "اليورو / الدولار",
    bias: "محايد",
    zone: "1.0810 - 1.0870",
    upside: "اختراق 1.0870 قد يفتح المجال إلى 1.0905",
    downside: "فشل الاختراق قد يعيد السعر إلى 1.0780",
    invalidation: "كسر النطاق اليومي",
    status: "انتظار نطاق",
  },
  {
    asset: "BTC/USDT",
    name: "بيتكوين",
    bias: "تذبذب مرتفع",
    zone: "65,800 - 68,500",
    upside: "إغلاق أعلى 68,500 يحسن الزخم قصير المدى",
    downside: "فقدان 65,800 يضعف الصورة المؤقتة",
    invalidation: "كسر 64,200",
    status: "حذر",
  },
];

const calendar = [
  {
    time: "15:30",
    currency: "USD",
    event: "بيانات تضخم أو وظائف أمريكية",
    impact: "مرتفع",
    note: "تجنب القرارات العشوائية قبل الخبر وبعده مباشرة.",
  },
  {
    time: "17:00",
    currency: "USD",
    event: "تصريحات بنك مركزي",
    impact: "متوسط",
    note: "راقب اللهجة: متشددة أم مائلة للتيسير.",
  },
  {
    time: "18:30",
    currency: "OIL",
    event: "مخزونات النفط",
    impact: "متوسط",
    note: "قد يؤثر على النفط والدولار الكندي وأسهم الطاقة.",
  },
];

const libraryItems = [
  "دليل إدارة المخاطر للمبتدئين",
  "ملخص أسبوعي للأسواق",
  "قالب خطة تداول يومية",
  "دفتر مراجعة الصفقات",
];

export default function VipDashboardPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="absolute -top-32 right-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-20 left-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true" />

      <section className="container-custom relative py-10 sm:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="chip chip-gold">VIP Market Room</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-neutral-50 sm:text-5xl">
              غرفة السوق VIP
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
              لوحة تعليمية تجمع أهم ما يحتاجه العضو: الأسعار، السيناريوهات، الأخبار، الأدوات، والمكتبة في مكان واحد.
            </p>
          </div>
          <Link href="/vip" className="btn-outline">
            العودة إلى VIP
          </Link>
        </div>

        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-950 p-4 shadow-card sm:p-5">
          <LiveMarketTicker variant="compact" limit={8} refreshMs={45_000} />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <section className="lg:col-span-8">
            <div className="rounded-3xl border border-gold/20 bg-gold/5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-bold text-gold">TODAY WATCH</p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-neutral-50">
                    تنبيه اليوم
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-300">
                    توجد أخبار عالية التأثير على الدولار خلال اليوم. الأفضل تقليل القرارات السريعة قبل الخبر ومراقبة رد فعل السوق بعد اتضاح الاتجاه.
                  </p>
                </div>
                <span className="rounded-full border border-bear/30 bg-bear/10 px-4 py-2 text-xs font-bold text-red-100">
                  حذر مرتفع
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/5 bg-ink-900/60 p-5 sm:p-6">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-eyebrow">سيناريوهات تعليمية</p>
                  <h2 className="font-display text-2xl font-bold text-neutral-50">
                    Active Market Scenarios
                  </h2>
                </div>
                <span className="text-xs text-neutral-500">MVP تجريبي — غير مخصص كأوامر تداول</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/5">
                <div className="hidden grid-cols-7 gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-neutral-500 lg:grid">
                  <span>الأصل</span>
                  <span>الحالة</span>
                  <span>منطقة المتابعة</span>
                  <span className="col-span-2">سيناريو الصعود</span>
                  <span>الإلغاء</span>
                  <span>الوضع</span>
                </div>
                <div className="divide-y divide-white/5">
                  {scenarios.map((item) => (
                    <article key={item.asset} className="grid gap-4 px-4 py-5 text-sm lg:grid-cols-7 lg:items-start">
                      <div>
                        <p className="font-mono font-bold text-neutral-50" dir="ltr">{item.asset}</p>
                        <p className="mt-1 text-xs text-neutral-500">{item.name}</p>
                      </div>
                      <div>
                        <span className="chip chip-gold">{item.bias}</span>
                      </div>
                      <p className="font-mono text-neutral-200" dir="ltr">{item.zone}</p>
                      <p className="col-span-2 leading-relaxed text-neutral-300">{item.upside}<br /><span className="text-neutral-500">{item.downside}</span></p>
                      <p className="text-neutral-400">{item.invalidation}</p>
                      <p className="text-gold">{item.status}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-5 lg:col-span-4">
            <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-5">
              <h2 className="font-display text-xl font-bold text-neutral-50">
                Economic Watchlist
              </h2>
              <div className="mt-4 space-y-3">
                {calendar.map((item) => (
                  <div key={`${item.time}-${item.event}`} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-sm font-bold text-gold" dir="ltr">{item.time}</span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold text-neutral-300">{item.impact}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-neutral-100">{item.currency} · {item.event}</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-5">
              <h2 className="font-display text-xl font-bold text-neutral-50">
                أدوات سريعة
              </h2>
              <div className="mt-4 grid gap-3">
                <Link href="/tools/risk-calculator" className="rounded-2xl border border-gold/20 bg-gold/5 p-4 text-sm font-semibold text-gold transition-colors hover:bg-gold/10">
                  حاسبة حجم الصفقة
                </Link>
                <Link href="/academy/forex-basics/risk-management" className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm font-semibold text-neutral-300 transition-colors hover:border-gold/20 hover:text-gold">
                  درس إدارة المخاطر
                </Link>
                <Link href="/academy/forex-basics/simple-trading-plan" className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm font-semibold text-neutral-300 transition-colors hover:border-gold/20 hover:text-gold">
                  قالب خطة تداول
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-5">
              <h2 className="font-display text-xl font-bold text-neutral-50">
                مكتبة VIP
              </h2>
              <ul className="mt-4 space-y-3">
                {libraryItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-sm text-neutral-300">
                    <span className="grid h-8 w-8 place-items-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                        <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" />
                        <path d="M8 4v13a3 3 0 0 0 3 3" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <RiskRewardVisual />
          <NewsExpectationDiagram />
        </div>

        <div className="mt-6 rounded-3xl border border-bear/20 bg-bear/5 p-6">
          <h2 className="font-display text-xl font-bold text-red-100">
            تنبيه مسؤولية
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">
            هذه الصفحة تعليمية وتجريبية، ولا تقدم توصيات مالية أو أوامر شراء وبيع. أي قرار تطبيقي يجب أن يكون مبنياً على خطتك وإدارتك للمخاطر وتحملك الشخصي للمسؤولية.
          </p>
        </div>
      </section>
    </main>
  );
}
