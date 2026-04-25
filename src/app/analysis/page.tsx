import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "التحليلات - يومية وأسبوعية",
  description:
    "تحليلات تعليمية للأسواق المالية: سيناريوهات الصعود والهبوط، مستويات الدعم والمقاومة، ونظرة عامة على المحرّكات الرئيسية.",
};

const dailyAnalyses = [
  {
    pair: "XAU/USD",
    name: "الذهب",
    bias: "صاعد",
    biasType: "bull",
    support: "2,335 / 2,318",
    resistance: "2,365 / 2,380",
    summary:
      "الذهب يبقى مدعوماً فوق مستوى 2,335 في ظل تراجع عوائد السندات وضعف الدولار. كسر 2,365 قد يفتح الباب لاختبار قمة 2,380.",
    date: "اليوم — 09:30",
  },
  {
    pair: "EUR/USD",
    name: "اليورو / الدولار",
    bias: "محايد",
    biasType: "neutral",
    support: "1.0810 / 1.0780",
    resistance: "1.0870 / 1.0905",
    summary:
      "الزوج يتداول في نطاق ضيق قبيل بيانات التضخم الأوروبية. كسر 1.0905 سيكون إشارة إيجابية، بينما الفشل قد يعيد الزوج لاختبار 1.0780.",
    date: "اليوم — 10:15",
  },
  {
    pair: "WTI Crude",
    name: "النفط الخام",
    bias: "هابط",
    biasType: "bear",
    support: "76.80 / 75.40",
    resistance: "79.20 / 80.50",
    summary:
      "النفط تحت ضغط بيع بعد بيانات مخزونات أمريكية أعلى من المتوقع. الفشل في تجاوز 79.20 يدعم استمرار الضغط نحو 76.80.",
    date: "اليوم — 11:00",
  },
  {
    pair: "BTC/USD",
    name: "بيتكوين",
    bias: "صاعد",
    biasType: "bull",
    support: "65,800 / 64,200",
    resistance: "68,500 / 70,000",
    summary:
      "البيتكوين يستعيد زخمه بعد تدفقات ETF إيجابية. الإغلاق فوق 68,500 سيمهّد الطريق نحو إعادة اختبار قمة 70,000.",
    date: "اليوم — 11:45",
  },
];

const biasStyles = {
  bull: "chip-bull",
  bear: "chip-bear",
  neutral: "chip",
} as const;

export default function AnalysisPage() {
  return (
    <>
      <PageHeader
        eyebrow="غرفة التحليل"
        title="التحليلات اليومية والأسبوعية"
        description="قراءات منظّمة للأسواق الرئيسية مع سيناريوهات صعود وهبوط ومستويات دعم ومقاومة. هذه التحليلات لأغراض تعليمية ولا تُعدّ نصيحة استثمارية."
      />

      <section className="container-custom py-12">
        {/* تنبيه */}
        <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
          <p className="text-sm leading-relaxed text-neutral-300">
            <span className="font-semibold text-gold">ملاحظة تعليمية:</span>{" "}
            جميع التحليلات المعروضة تجريبية ولأغراض التوضيح فقط. لا تُعدّ
            توصيات بالشراء أو البيع، ويتحمل المتداول كامل المسؤولية عن قراراته.
          </p>
        </div>

        {/* تحليلات يومية */}
        <div className="mt-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="section-title text-3xl">تحليلات اليوم</h2>
            <span className="text-xs text-neutral-500">
              تُحدّث على مدار اليوم
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {dailyAnalyses.map((a) => (
              <article key={a.pair} className="card card-hover p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-neutral-50">
                      {a.pair}
                    </h3>
                    <p className="mt-0.5 text-xs text-neutral-500">{a.name}</p>
                  </div>
                  <span className={`chip ${biasStyles[a.biasType as keyof typeof biasStyles]}`}>
                    التحيّز: {a.bias}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {a.summary}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/5 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      دعم
                    </p>
                    <p className="mt-1 font-mono text-sm tabular-nums text-bull" dir="ltr">
                      {a.support}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      مقاومة
                    </p>
                    <p className="mt-1 font-mono text-sm tabular-nums text-bear" dir="ltr">
                      {a.resistance}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-neutral-500">{a.date}</p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA لـ VIP */}
        <div className="mt-16 rounded-2xl border border-gold/20 bg-gradient-to-l from-ink-900 via-navy/30 to-ink-900 p-8 text-center sm:p-12">
          <p className="section-eyebrow justify-center">للأعضاء VIP</p>
          <h2 className="font-display text-2xl font-bold text-neutral-50 sm:text-3xl">
            تحليلات أعمق وسيناريوهات أسبوعية كاملة
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            احصل على تحليلات أسبوعية مفصّلة، تنبيهات قبل الأحداث الاقتصادية،
            وملخصات منظّمة للأسواق في ركن VIP.
          </p>
          <Link href="/vip" className="btn-gold mt-6">
            استكشف ركن VIP
          </Link>
        </div>
      </section>
    </>
  );
}
