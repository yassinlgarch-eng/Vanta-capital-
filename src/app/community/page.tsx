import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "المجتمع - تواصل مع المهتمين بالأسواق",
  description:
    "غرفة تعارف ومناقشة عربية للمهتمين بالأسواق المالية، التداول، والاستثمار.",
};

const channels = [
  {
    title: "أسئلة المبتدئين",
    desc: "مكان لطرح الأسئلة الأساسية بدون خوف أو خجل.",
    members: 1240,
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
  },
  {
    title: "تحليلات السوق",
    desc: "نقاش تحليلات الفوركس، الأسهم، الذهب، والنفط بين الأعضاء.",
    members: 856,
    icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
  },
  {
    title: "أخبار مؤثرة",
    desc: "ناقش الأخبار الاقتصادية لحظة بلحظة وتأثيرها على الأسواق.",
    members: 1542,
    icon: "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h6v6H5V5zm0 14v-6h14v6H5zm14-8h-6V9h6v2zm0-4h-6V5h6v2z",
  },
  {
    title: "تجارب المتداولين",
    desc: "شارك تجاربك مع المتداولين الآخرين — النجاحات والإخفاقات.",
    members: 723,
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  {
    title: "ترشيحات كتب وأدوات",
    desc: "أفضل الكتب، الكورسات، والمواقع التي ساعدت أعضاء المجتمع.",
    members: 412,
    icon: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="المجتمع"
        title="غرفة التعارف"
        description="مكان عربي يلتقي فيه المهتمون بالأسواق المالية. تشارك التجارب، تبادل الأفكار، وتعلّم ممن سبقوك في الطريق."
      />

      <section className="container-custom py-12">
        {/* بطاقة دعوة للانضمام */}
        <div className="rounded-2xl border border-gold/20 bg-gradient-to-l from-ink-900 via-navy/20 to-ink-900 p-8 sm:p-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-neutral-50 sm:text-3xl">
                انضم لمجتمعنا اليوم
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                أكثر من <strong className="text-gold">4,800</strong> عضو نشط
                يتبادلون التحليلات، الأخبار، والتجارب يومياً. الانضمام مجاني
                بالكامل.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {/* TODO: روابط Telegram / Discord الفعلية */}
                <a href="#" className="btn-gold">
                  انضم للمجتمع
                  <svg
                    className="h-4 w-4 flip-rtl"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                  </svg>
                </a>
                <a href="#" className="btn-outline">
                  Telegram
                </a>
                <a href="#" className="btn-outline">
                  Discord
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Stat label="عضو نشط" value="4,873" />
              <Stat label="رسالة يومياً" value="+1.2K" />
              <Stat label="قنوات نقاش" value="12" />
            </div>
          </div>
        </div>

        {/* قنوات النقاش */}
        <div className="mt-14">
          <h2 className="section-title text-3xl">قنوات النقاش</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.title} className="card card-hover p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d={channel.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-neutral-50">
                  {channel.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {channel.desc}
                </p>
                <p className="mt-4 text-xs text-neutral-500">
                  {channel.members.toLocaleString("en-US")} عضو
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* قواعد المجتمع */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-ink-900/40 p-8">
          <h3 className="font-display text-xl font-bold text-neutral-50">
            قواعد المجتمع
          </h3>
          <p className="mt-2 text-sm text-neutral-400">
            للحفاظ على بيئة صحية ومفيدة لجميع الأعضاء:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "احترام جميع الأعضاء بغض النظر عن مستواهم في التداول.",
              "لا للتسويق المباشر لمنصات أو خدمات بدون إذن مسبق.",
              "لا للتوصيات المضمونة أو وعود الربح — السوق غير مضمون.",
              "النقاش العلمي والتعليمي مرحّب به دائماً.",
              "أي محتوى مخالف سيتم حذفه فوراً.",
            ].map((rule, i) => (
              <li
                key={rule}
                className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-3"
              >
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-gold/20 font-mono text-xs text-gold">
                  {i + 1}
                </span>
                <span className="text-sm text-neutral-300">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-ink-900/60 p-4 text-center">
      <div className="font-display text-xl font-bold text-gold">{value}</div>
      <div className="mt-1 text-[11px] text-neutral-500">{label}</div>
    </div>
  );
}
