import type { ReactNode } from "react";

function VisualShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-900 p-5 shadow-card">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-white/5 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            مخطط تعليمي
          </p>
          <h3 className="mt-2 font-display text-xl font-bold text-neutral-50">
            {title}
          </h3>
        </div>
        {subtitle && (
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function Node({
  title,
  text,
  tone = "default",
}: {
  title: string;
  text?: string;
  tone?: "default" | "gold" | "blue" | "red" | "green";
}) {
  const toneClass =
    tone === "gold"
      ? "border-gold/35 bg-gold/10 text-gold"
      : tone === "blue"
      ? "border-electric/35 bg-electric/10 text-blue-200"
      : tone === "red"
      ? "border-bear/35 bg-bear/10 text-red-200"
      : tone === "green"
      ? "border-bull/35 bg-bull/10 text-green-200"
      : "border-white/10 bg-white/5 text-neutral-200";

  return (
    <div className={`rounded-xl border p-4 ${toneClass}`}>
      <div className="font-display text-base font-bold">{title}</div>
      {text && <div className="mt-2 text-xs leading-relaxed text-neutral-400">{text}</div>}
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center text-gold/60 md:flex" aria-hidden="true">
      <svg className="h-6 w-10" viewBox="0 0 60 24" fill="none">
        <path
          d="M4 12h48m0 0-8-8m8 8-8 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function MarketStructureDiagram() {
  return (
    <VisualShell
      title="كيف يتحول السوق إلى سعر؟"
      subtitle="كل سعر تراه هو نتيجة سلسلة قرارات: أصل قابل للتداول، مشاركون، أوامر، ثم اتفاق مؤقت على السعر."
    >
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
        <Node title="أصل مالي" text="سهم، عملة، ذهب، نفط، مؤشر" tone="gold" />
        <Arrow />
        <Node title="مشاركون" text="أفراد، مؤسسات، بنوك، خوارزميات" />
        <Arrow />
        <Node title="أوامر" text="شراء، بيع، وقف، أوامر محددة" tone="blue" />
        <Arrow />
        <Node title="سعر" text="آخر اتفاق بين مشترٍ وبائع" tone="green" />
      </div>
    </VisualShell>
  );
}

export function PriceFormationDiagram() {
  return (
    <VisualShell
      title="مزاد مستمر بين المشترين والبائعين"
      subtitle="إذا زاد إلحاح المشترين يصعد السعر، وإذا زاد ضغط البائعين يهبط السعر."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-bull/25 bg-bull/5 p-5">
          <h4 className="font-display text-lg font-bold text-bull">منطقة الطلب</h4>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
            مشترون يرون السعر جذاباً، فيرفعون عروضهم أو يدخلون بأوامر سوقية.
          </p>
          <div className="mt-5 space-y-2">
            {["Buy Limit", "Market Buy", "Stop Buy"].map((item) => (
              <div key={item} className="rounded-lg bg-white/5 px-3 py-2 font-mono text-xs text-green-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid place-items-center rounded-xl border border-gold/25 bg-gold/5 p-5 text-center">
          <div>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/35 bg-gold/10 font-mono text-2xl font-bold text-gold">
              PRICE
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              السعر يتحرك نحو الطرف الأكثر إلحاحاً والأقوى سيولة.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-bear/25 bg-bear/5 p-5">
          <h4 className="font-display text-lg font-bold text-bear">منطقة العرض</h4>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
            بائعون يرون السعر مرتفعاً، فيخفضون عروضهم أو يبيعون مباشرة.
          </p>
          <div className="mt-5 space-y-2">
            {["Sell Limit", "Market Sell", "Stop Sell"].map((item) => (
              <div key={item} className="rounded-lg bg-white/5 px-3 py-2 font-mono text-xs text-red-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export function SupplyDemandVisual() {
  return (
    <VisualShell
      title="العرض والطلب بطريقة بصرية"
      subtitle="كلما ارتفع الطلب مقابل العرض، مال السعر للصعود. وكلما زاد العرض مقابل الطلب، مال السعر للهبوط."
    >
      <div className="relative h-72 rounded-xl border border-white/5 bg-ink-950/60 p-5">
        <svg className="h-full w-full" viewBox="0 0 640 260" role="img" aria-label="مخطط العرض والطلب">
          <line x1="70" y1="220" x2="590" y2="220" stroke="rgba(148,163,184,.35)" strokeWidth="2" />
          <line x1="70" y1="220" x2="70" y2="30" stroke="rgba(148,163,184,.35)" strokeWidth="2" />
          <path d="M105 200 C220 165 330 115 540 55" stroke="#22C55E" strokeWidth="4" fill="none" />
          <path d="M105 55 C230 95 350 155 540 205" stroke="#EF4444" strokeWidth="4" fill="none" />
          <circle cx="325" cy="130" r="8" fill="#D4AF37" />
          <line x1="325" y1="130" x2="325" y2="220" stroke="rgba(212,175,55,.45)" strokeDasharray="6 6" />
          <line x1="70" y1="130" x2="325" y2="130" stroke="rgba(212,175,55,.45)" strokeDasharray="6 6" />
          <text x="500" y="48" fill="#22C55E" fontSize="16" fontWeight="700">طلب</text>
          <text x="500" y="214" fill="#EF4444" fontSize="16" fontWeight="700">عرض</text>
          <text x="338" y="125" fill="#D4AF37" fontSize="14" fontWeight="700">سعر التوازن</text>
          <text x="36" y="38" fill="#94A3B8" fontSize="13">السعر</text>
          <text x="530" y="246" fill="#94A3B8" fontSize="13">الكمية</text>
        </svg>
      </div>
    </VisualShell>
  );
}

export function NewsExpectationDiagram() {
  return (
    <VisualShell
      title="الخبر لا يكفي… المهم مقارنة الخبر بالتوقعات"
      subtitle="السوق يتحرك بقوة عندما تأتي النتيجة مختلفة عما كان المستثمرون مستعدين له."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Node
          title="أسوأ من المتوقع"
          text="إعادة تسعير سلبية، ضغط بيع، أو هروب من المخاطر"
          tone="red"
        />
        <Node
          title="مطابق للتوقعات"
          text="حركة محدودة أو جني أرباح لأن السوق كان مستعداً"
          tone="gold"
        />
        <Node
          title="أفضل من المتوقع"
          text="إعادة تسعير إيجابية إذا لم تكن الحركة محسوبة مسبقاً"
          tone="green"
        />
      </div>
    </VisualShell>
  );
}

export function ParticipantsMap() {
  const items = [
    { title: "البنوك المركزية", text: "الفائدة، السيولة، التوجيه المستقبلي", tone: "gold" as const },
    { title: "المؤسسات", text: "أحجام ضخمة، تمركز، إدارة محافظ", tone: "blue" as const },
    { title: "صناع السوق", text: "تنفيذ، سبريد، توفير سيولة", tone: "green" as const },
    { title: "الأفراد", text: "سلوك جماعي، أوامر واضحة، عاطفة", tone: "default" as const },
    { title: "الخوارزميات", text: "سرعة، تنفيذ آلي، تفاعل لحظي", tone: "red" as const },
  ];
  return (
    <VisualShell
      title="خريطة المشاركين في السوق"
      subtitle="كل لاعب يرى السوق من زاوية مختلفة: زمن مختلف، حجم مختلف، وهدف مختلف."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <Node key={item.title} {...item} />
        ))}
      </div>
    </VisualShell>
  );
}

export function AssetClassMatrix() {
  const rows = [
    ["الأسهم", "أرباح وتقييمات", "متوسط", "أخبار الشركات والفائدة"],
    ["الفوركس", "سياسات نقدية", "متوسط/مرتفع", "الفائدة والتضخم والدولار"],
    ["السلع", "عرض وطلب حقيقي", "مرتفع", "الجيوسياسة والمخزونات"],
    ["السندات", "دين وفائدة", "متوسط", "العوائد والتضخم"],
    ["الكريبتو", "سيولة وثقة", "مرتفع جداً", "المضاربة والتنظيم"],
  ];
  return (
    <VisualShell title="مقارنة سريعة بين الأصول" subtitle="هذه الخريطة تساعدك على عدم استخدام نفس العقلية مع كل سوق.">
      <div className="overflow-hidden rounded-xl border border-white/5">
        <div className="grid grid-cols-4 bg-gold/10 p-3 text-xs font-bold text-gold">
          <span>الأصل</span>
          <span>طبيعته</span>
          <span>التذبذب</span>
          <span>أهم المحركات</span>
        </div>
        {rows.map((row) => (
          <div key={row[0]} className="grid grid-cols-4 border-t border-white/5 p-3 text-xs text-neutral-300">
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

export function OrderTypesVisual() {
  return (
    <VisualShell
      title="أين توضع أوامر التداول؟"
      subtitle="نوع الأمر يحدد هل تدخل فوراً، تنتظر سعراً أفضل، أم تدخل بعد تأكيد الكسر."
    >
      <div className="rounded-xl border border-white/5 bg-ink-950/60 p-5">
        <div className="mx-auto max-w-2xl space-y-3">
          <div className="rounded-lg border border-bull/30 bg-bull/10 p-3 text-sm text-green-200">
            Buy Stop — فوق السعر الحالي مع سيناريو اختراق صاعد
          </div>
          <div className="rounded-lg border border-bear/30 bg-bear/10 p-3 text-sm text-red-200">
            Sell Limit — بيع من منطقة أعلى إذا وصل السعر إليها
          </div>
          <div className="rounded-lg border border-gold/40 bg-gold/15 p-4 text-center font-mono text-lg font-bold text-gold">
            السعر الحالي
          </div>
          <div className="rounded-lg border border-bull/30 bg-bull/10 p-3 text-sm text-green-200">
            Buy Limit — شراء من منطقة أدنى إذا عاد السعر إليها
          </div>
          <div className="rounded-lg border border-bear/30 bg-bear/10 p-3 text-sm text-red-200">
            Sell Stop — أسفل السعر الحالي مع سيناريو كسر هابط
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export function RiskRewardVisual() {
  return (
    <VisualShell
      title="المخاطرة والعائد بصرياً"
      subtitle="الفكرة ليست أن تربح كل الصفقات، بل أن يكون العائد المحتمل أكبر من الخسارة المخططة."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Node title="وقف الخسارة" text="المبلغ الذي تقبل خسارته إذا فشل السيناريو" tone="red" />
        <Node title="نقطة الدخول" text="السعر الذي تبدأ منه الخطة بعد تحقق الشروط" tone="gold" />
        <Node title="جني الربح" text="المستوى الذي تصبح عنده المكافأة منطقية" tone="green" />
      </div>
    </VisualShell>
  );
}

export function ForexPairVisual() {
  return (
    <VisualShell
      title="زوج العملات: شراء عملة وبيع أخرى"
      subtitle="في الفوركس لا تتداول عملة منفردة؛ أنت تقارن قوة عملة أمام عملة أخرى."
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Node title="EUR" text="العملة الأساسية: ما تشتريه أو تبيعه أولاً" tone="gold" />
        <div className="grid place-items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <div className="font-mono text-3xl font-bold text-neutral-50">EUR/USD</div>
          <div className="mt-2 text-xs text-neutral-400">إذا ارتفع الزوج، اليورو يقوى أمام الدولار</div>
        </div>
        <Node title="USD" text="عملة التسعير: العملة التي تقيس بها قيمة اليورو" tone="blue" />
      </div>
    </VisualShell>
  );
}

export function BidAskSpreadVisual() {
  return (
    <VisualShell
      title="Bid / Ask / Spread"
      subtitle="السبريد هو الفرق بين سعر البيع المتاح وسعر الشراء المتاح؛ وهو أول تكلفة تراها في الصفقة."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-bear/30 bg-bear/10 p-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-red-200">Bid</div>
          <div className="mt-2 font-mono text-3xl font-bold text-neutral-50">1.0848</div>
          <p className="mt-2 text-xs leading-relaxed text-neutral-400">السعر الذي يمكنك البيع عليه غالباً.</p>
        </div>
        <div className="rounded-xl border border-gold/35 bg-gold/10 p-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Spread</div>
          <div className="mt-2 font-mono text-3xl font-bold text-gold">0.0002</div>
          <p className="mt-2 text-xs leading-relaxed text-neutral-400">فرق السعر بين Bid و Ask.</p>
        </div>
        <div className="rounded-xl border border-bull/30 bg-bull/10 p-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-200">Ask</div>
          <div className="mt-2 font-mono text-3xl font-bold text-neutral-50">1.0850</div>
          <p className="mt-2 text-xs leading-relaxed text-neutral-400">السعر الذي يمكنك الشراء عليه غالباً.</p>
        </div>
      </div>
    </VisualShell>
  );
}

export function PipLotVisual() {
  return (
    <VisualShell
      title="Pip و Lot: قياس الحركة وحجم الصفقة"
      subtitle="النقطة تقيس مقدار الحركة، واللوت يحدد قيمة كل حركة على حسابك."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-gold/25 bg-gold/5 p-5">
          <h4 className="font-display text-lg font-bold text-gold">Pip</h4>
          <div className="mt-4 rounded-lg bg-ink-950/60 p-4 font-mono text-xl text-neutral-50">
            EUR/USD: 1.0850 → 1.0860
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">
            الحركة هنا تساوي 10 نقاط تقريباً في أغلب أزواج العملات ذات أربع خانات عشرية.
          </p>
        </div>
        <div className="rounded-xl border border-electric/25 bg-electric/5 p-5">
          <h4 className="font-display text-lg font-bold text-blue-200">Lot</h4>
          <div className="mt-4 grid gap-2 text-sm">
            <div className="rounded-lg bg-white/5 p-3">Micro Lot = 0.01</div>
            <div className="rounded-lg bg-white/5 p-3">Mini Lot = 0.10</div>
            <div className="rounded-lg bg-white/5 p-3">Standard Lot = 1.00</div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">
            كلما كبر حجم اللوت، زادت قيمة الربح والخسارة لكل نقطة.
          </p>
        </div>
      </div>
    </VisualShell>
  );
}

export function LeverageMarginVisual() {
  return (
    <VisualShell
      title="الرافعة والهامش: قوة مضاعفة وخطر مضاعف"
      subtitle="الرافعة تسمح لك بفتح صفقة أكبر من رصيدك، لكن الخسارة تتحرك على حجم الصفقة الكامل."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Node title="رصيد الحساب" text="رأس المال الحقيقي المتاح لديك" tone="gold" />
        <Node title="الهامش" text="جزء محجوز من الرصيد لفتح الصفقة" tone="blue" />
        <Node title="حجم الصفقة" text="القيمة الكاملة التي تتحرك عليها الأرباح والخسائر" tone="red" />
      </div>
      <div className="mt-5 rounded-xl border border-bear/20 bg-bear/5 p-4 text-sm leading-relaxed text-neutral-300">
        مثال تعليمي: رافعة 1:100 لا تعني ربحاً مضموناً؛ تعني أن حركة صغيرة عكسك يمكن أن تؤثر بقوة على الحساب إذا كان حجم الصفقة كبيراً.
      </div>
    </VisualShell>
  );
}

export function ForexGlossaryVisual() {
  const terms = [
    ["Base Currency", "العملة الأولى في الزوج، مثل EUR في EUR/USD."],
    ["Quote Currency", "العملة الثانية التي نقيس بها قيمة العملة الأولى."],
    ["Pip", "وحدة قياس صغيرة لحركة السعر في أغلب أزواج الفوركس."],
    ["Lot", "حجم الصفقة؛ وهو الذي يحدد قيمة النقطة مالياً."],
    ["Spread", "الفرق بين سعر الشراء وسعر البيع."],
    ["Leverage", "رافعة تسمح بصفقة أكبر من رأس المال، لكنها تضخم الخطر."],
    ["Margin", "المبلغ المحجوز مؤقتاً لفتح الصفقة."],
    ["Stop Loss", "أمر يخرجك من الصفقة عند فشل السيناريو لتحديد الخسارة."],
  ];

  return (
    <VisualShell
      title="قاموس الفوركس السريع"
      subtitle="المصطلحات المعقدة تصبح سهلة عندما تربطها بدورها العملي داخل الصفقة."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {terms.map(([term, meaning]) => (
          <div key={term} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <div className="font-mono text-sm font-bold text-gold">{term}</div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{meaning}</p>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}
