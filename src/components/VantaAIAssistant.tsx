"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchIndex, type SearchItem } from "@/data/search";

type MessageRole = "assistant" | "user";
type Tone = "default" | "warning" | "success";

type Intent =
  | "start_learning"
  | "spread"
  | "risk"
  | "news"
  | "sessions"
  | "strategy"
  | "vip"
  | "analysis"
  | "tools"
  | "search"
  | "fallback";

type MessageLink = {
  title: string;
  href: string;
  label?: string;
};

type Message = {
  role: MessageRole;
  text: string;
  links?: MessageLink[];
  tips?: string[];
  followUps?: string[];
  tone?: Tone;
};

const starterQuestions = [
  "كيف أبدأ تعلم الفوركس؟",
  "ما معنى السبريد؟",
  "كيف أحسب حجم الصفقة؟",
  "ما أهم خبر يحرك العملات؟",
  "أين غرفة السوق VIP؟",
  "ما أفضل نقطة بداية داخل الموقع؟",
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .trim();
}

function detectIntent(query: string): Intent {
  const q = normalize(query);

  if (!q) return "fallback";
  if (q.includes("ابدا") || q.includes("بدايه") || q.includes("مبتد") || q.includes("تعلم")) return "start_learning";
  if (q.includes("سبريد") || q.includes("spread") || q.includes("bid") || q.includes("ask")) return "spread";
  if (q.includes("مخاطر") || q.includes("risk") || q.includes("لوت") || q.includes("lot") || q.includes("حجم الصفق") || q.includes("حاسبه")) return "risk";
  if (q.includes("خبر") || q.includes("اخبار") || q.includes("cpi") || q.includes("nfp") || q.includes("فائده") || q.includes("تضخم")) return "news";
  if (q.includes("جلس") || q.includes("لندن") || q.includes("نيويورك") || q.includes("اسيا") || q.includes("وقت")) return "sessions";
  if (q.includes("خطه") || q.includes("استراتيجي") || q.includes("نظام")) return "strategy";
  if (q.includes("vip") || q.includes("عضويه") || q.includes("غرفه السوق") || q.includes("السوق vip")) return "vip";
  if (q.includes("تحليل") || q.includes("ذهب") || q.includes("نفط") || q.includes("يورو") || q.includes("بيتكوين")) return "analysis";
  if (q.includes("ادوات") || q.includes("اداه") || q.includes("حاسبة") || q.includes("حساب")) return "tools";
  return "search";
}

function buildSearchMatches(query: string): SearchItem[] {
  const q = normalize(query);
  const words = q.split(/\s+/).filter(Boolean);

  return searchIndex
    .map((item) => {
      const haystack = normalize([item.title, item.description, item.category, ...item.keywords].join(" "));
      let score = 0;

      for (const word of words) {
        if (haystack.includes(word)) score += 2;
      }

      if (normalize(item.title).includes(q)) score += 5;
      if (normalize(item.description).includes(q)) score += 2;

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((entry) => entry.item);
}

function mapSearchItems(items: SearchItem[], label = "فتح الصفحة"): MessageLink[] {
  return items.map((item) => ({ title: item.title, href: item.href, label }));
}

function buildResponse(query: string): Message {
  const intent = detectIntent(query);

  switch (intent) {
    case "start_learning":
      return {
        role: "assistant",
        text:
          "أفضل بداية داخل Usus Markets هي أن تتدرج: أولاً أساسيات السوق، ثم الفوركس للمبتدئين، وبعدها أداة حاسبة حجم الصفقة حتى تربط الفكرة بالأرقام. لا تبدأ بالاستراتيجيات قبل فهم المخاطرة.",
        links: [
          { title: "أساسيات السوق", href: "/academy/market-basics", label: "ابدأ من هنا" },
          { title: "الفوركس للمبتدئين", href: "/academy/forex-basics", label: "افتح المسار" },
          { title: "مركز التعلم", href: "/learn", label: "تصفح بوضوح" },
        ],
        tips: [
          "ابدأ بمسار واحد فقط حتى لا تتشتت.",
          "اقرأ الدرس ثم انتقل لما بعده بدل القفز العشوائي.",
        ],
        followUps: ["ما هو أهم درس بعد الأساسيات؟", "كيف أستخدم الحساب التجريبي؟"],
      };

    case "spread":
      return {
        role: "assistant",
        text:
          "السبريد هو الفرق بين سعر الشراء Ask وسعر البيع Bid. هذه تكلفة تنفيذ تظهر منذ لحظة الدخول، وتصبح أكثر أهمية في الأوقات السريعة أو عند الأخبار أو في الأصول ذات السيولة الضعيفة.",
        links: [
          { title: "Bid و Ask و Spread", href: "/academy/forex-basics/bid-ask-spread", label: "اقرأ الدرس" },
          { title: "السيولة والتذبذب", href: "/academy/market-basics/liquidity-volatility", label: "افهم السبب" },
        ],
        tips: [
          "راقب السبريد قبل التنفيذ، خصوصًا وقت الأخبار.",
          "كلما كان السبريد غير طبيعي، زادت الحاجة للحذر.",
        ],
        followUps: ["ما الفرق بين السبريد والانزلاق السعري؟", "متى يتسع السبريد؟"],
      };

    case "risk":
      return {
        role: "assistant",
        text:
          "حجم الصفقة يجب أن يُحسب من رصيد الحساب، نسبة المخاطرة، ووقف الخسارة. لا تختَر اللوت بناءً على الرغبة في ربح أكبر. ابدأ دائمًا من سؤال: كم سأخسر إذا كنت مخطئًا؟",
        links: [
          { title: "حاسبة حجم الصفقة", href: "/tools/risk-calculator", label: "استخدم الأداة" },
          { title: "المخاطر قبل الفرص", href: "/academy/market-basics/risk-before-opportunity", label: "افهم المنطق" },
          { title: "إدارة المخاطر في الفوركس", href: "/academy/forex-basics/risk-management", label: "اقرأ الدرس" },
        ],
        tips: [
          "المخاطرة الصغيرة تحافظ على قدرتك على الاستمرار.",
          "وقف الخسارة جزء من منطق الفكرة، وليس مجرد حماية شكلية.",
        ],
        followUps: ["كيف أحسب 1% مخاطرة؟", "ما أفضل Risk/Reward للمبتدئ؟"],
        tone: "warning",
      };

    case "news":
      return {
        role: "assistant",
        text:
          "الأخبار لا تحرك السوق لمجرد صدورها، بل عندما تغيّر التوقعات. لذلك المهم ليس عنوان الخبر فقط، بل مقارنة النتيجة الفعلية بالتوقعات وفهم تأثيرها على الفائدة والسيولة وشهية المخاطرة.",
        links: [
          { title: "الأخبار الاقتصادية التي تحرك العملات", href: "/academy/forex-basics/economic-news", label: "اقرأ الدرس" },
          { title: "الأخبار", href: "/news", label: "تابع الأخبار" },
          { title: "غرفة السوق VIP", href: "/vip/dashboard", label: "تنبيهات ومتابعة" },
        ],
        tips: [
          "لا تتعامل مع الخبر القوي كأنه إشارة فورية دائمًا.",
          "بعض الحركات الأولى بعد الخبر تكون مضللة ثم يعيد السوق التسعير.",
        ],
        followUps: ["ما معنى Actual و Forecast؟", "أي الأخبار أهم للفوركس؟"],
      };

    case "sessions":
      return {
        role: "assistant",
        text:
          "اختيار الوقت مهم بقدر اختيار الأصل. جلسة لندن ونيويورك غالبًا أكثر نشاطًا، أما آسيا فعادة أهدأ. ليس الهدف أن تراقب السوق طوال اليوم، بل أن تختار نافذة زمنية واضحة تناسب استراتيجيتك وفهمك.",
        links: [
          { title: "الجلسات العالمية وأفضل أوقات الحركة", href: "/academy/forex-basics/sessions", label: "اقرأ الدرس" },
          { title: "الفوركس للمبتدئين", href: "/academy/forex-basics", label: "افتح المسار" },
        ],
        tips: [
          "النشاط لا يعني دائمًا فرصة أفضل؛ أحيانًا يعني مخاطرة أعلى.",
          "اختر أوقاتًا يمكنك التركيز فيها فعلًا.",
        ],
        followUps: ["ما أفضل جلسة للذهب؟", "متى تكون EUR/USD أكثر حركة؟"],
      };

    case "strategy":
      return {
        role: "assistant",
        text:
          "الخطة البسيطة أفضل من استراتيجية معقدة لا تلتزم بها. في البداية، تحتاج قالبًا واضحًا: ما الأصل؟ ما الجلسة؟ ما شروط الدخول؟ أين الوقف؟ أين الهدف؟ وما حجم المخاطرة؟",
        links: [
          { title: "خطة تداول فوركس بسيطة", href: "/academy/forex-basics/simple-trading-plan", label: "اقرأ القالب" },
          { title: "أخطاء مبتدئي الفوركس", href: "/academy/forex-basics/beginner-mistakes", label: "تجنب الأخطاء" },
          { title: "متى تنتقل إلى الحساب التجريبي؟", href: "/academy/forex-basics/demo-account", label: "الخطوة التالية" },
        ],
        tips: [
          "لا تغيّر الخطة بعد كل صفقة.",
          "الهدف ليس كثرة الدخول، بل جودة التنفيذ والانضباط.",
        ],
        followUps: ["كيف أبني خطة يومية؟", "متى أبدأ بالحساب التجريبي؟"],
      };

    case "vip":
      return {
        role: "assistant",
        text:
          "ركن VIP في Usus Markets ليس مجرد صفحة منشورات؛ بل غرفة سوق تعليمية فيها أسعار حية، سيناريوهات متابعة، مفكرة أخبار، وأدوات سريعة. الهدف هو تنظيم التجربة لا بيع أوهام.",
        links: [
          { title: "غرفة السوق VIP", href: "/vip/dashboard", label: "دخول الغرفة" },
          { title: "صفحة VIP", href: "/vip", label: "اعرف التفاصيل" },
        ],
        tips: [
          "المحتوى داخل VIP تعليمي وليس توصيات مضمونة.",
          "افتح غرفة السوق يوميًا لمتابعة السياق بدل مطاردة الحركة.",
        ],
        followUps: ["ماذا يوجد داخل VIP؟", "هل غرفة السوق فيها أدوات؟"],
        tone: "success",
      };

    case "analysis":
      return {
        role: "assistant",
        text:
          "إذا كنت تبحث عن قراءة للأسواق الحية، فابدأ من قسم التحليلات أو غرفة السوق VIP. هذه الصفحات تعطيك أمثلة منظمة تساعدك على ربط الدروس بالسوق الحقيقي دون وعود ربح أو أوامر مباشرة.",
        links: [
          { title: "التحليلات اليومية والأسبوعية", href: "/analysis", label: "افتح التحليلات" },
          { title: "غرفة السوق VIP", href: "/vip/dashboard", label: "متابعة أعمق" },
          { title: "كيف تقرأ السوق بوعي؟", href: "/academy/market-basics/market-reading-framework", label: "اقرأ الإطار" },
        ],
        tips: [
          "التحليل الجيد يشرح السياق لا الاتجاه فقط.",
          "اربط أي تحليل بمخاطرة واضحة قبل التفكير في التطبيق.",
        ],
        followUps: ["كيف أقرأ تحليل الذهب؟", "ما الفرق بين التحليل والقرار؟"],
      };

    case "tools":
      return {
        role: "assistant",
        text:
          "الأدوات داخل الموقع هدفها أن تحوّل المفاهيم إلى أرقام وقرارات أوضح. أفضل أداة حاليًا هي حاسبة حجم الصفقة، لأنها تجبرك على التفكير في المخاطرة قبل أي شيء آخر.",
        links: [
          { title: "أدوات التداول", href: "/tools", label: "افتح الأدوات" },
          { title: "حاسبة حجم الصفقة", href: "/tools/risk-calculator", label: "استخدم الحاسبة" },
          { title: "مركز التعلم", href: "/learn", label: "تصفح المنصة" },
        ],
        tips: [
          "استخدم الأداة قبل التنفيذ وليس بعده.",
          "الرقم الواضح أفضل من التقدير العاطفي.",
        ],
        followUps: ["كيف أستخدم الحاسبة؟", "هل يوجد أدوات أخرى لاحقًا؟"],
      };

    case "search": {
      const matches = buildSearchMatches(query);
      if (matches.length > 0) {
        return {
          role: "assistant",
          text:
            "وجدت لك صفحات تبدو الأقرب لسؤالك داخل Usus Markets. اختر منها ما يناسبك، وإذا أردت يمكنني توجيهك إلى أفضل نقطة بداية بينها.",
          links: mapSearchItems(matches),
          followUps: ["ما أفضل نقطة بداية؟", "هل هذا مناسب للمبتدئ؟"],
        };
      }
      break;
    }
  }

  return {
    role: "assistant",
    text:
      "حالياً أنا مساعد ذكي محلي داخل الموقع، وأستطيع توجيهك إلى المسارات، الدروس، الأخبار، الأدوات، وركن VIP. اكتب سؤالك بصيغة مباشرة مثل: ما معنى السبريد؟ أو كيف أبدأ تعلم الفوركس؟",
    links: [
      { title: "مركز التعلم", href: "/learn", label: "ابدأ من هنا" },
      { title: "الأكاديمية", href: "/academy", label: "كل المسارات" },
      { title: "البحث داخل الموقع", href: "/search", label: "بحث شامل" },
    ],
    tips: ["كلما كان سؤالك أوضح، كانت الإحالة أدق."],
  };
}

function SuggestionChips({ items, onPick }: { items: string[]; onPick: (value: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onPick(item)}
          className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="mr-auto max-w-[88%] rounded-2xl border border-gold/15 bg-gold/5 px-4 py-3 text-sm text-neutral-300">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gold">Usus AI يفكر</span>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold [animation-delay:120ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}

function MessageCard({ message }: { message: Message }) {
  const assistantTone =
    message.tone === "warning"
      ? "border-bear/20 bg-bear/5"
      : message.tone === "success"
        ? "border-electric/20 bg-electric/10"
        : "border-gold/15 bg-gold/5";

  return (
    <div
      className={`max-w-[88%] rounded-2xl p-4 text-sm leading-relaxed ${
        message.role === "assistant"
          ? `mr-auto border ${assistantTone} text-neutral-200`
          : "ml-auto border border-white/10 bg-white/[0.06] text-neutral-50"
      }`}
    >
      <p>{message.text}</p>

      {message.links && message.links.length > 0 && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {message.links.map((link) => (
            <Link
              key={`${link.href}-${link.title}`}
              href={link.href}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 transition-colors hover:border-gold/30 hover:bg-white/[0.06]"
            >
              <div className="text-xs font-semibold text-gold">{link.label ?? "فتح الصفحة"}</div>
              <div className="mt-1 text-sm font-bold text-neutral-50">{link.title}</div>
            </Link>
          ))}
        </div>
      )}

      {message.tips && message.tips.length > 0 && (
        <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <p className="text-xs font-semibold text-neutral-500">ملاحظات مفيدة</p>
          <ul className="mt-2 space-y-1.5 text-xs text-neutral-400">
            {message.tips.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function UsusAIAssistant() {
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "أهلاً، أنا Usus AI. أساعدك على الوصول بسرعة إلى أفضل درس أو أداة أو صفحة داخل الموقع حسب سؤالك.",
      links: [
        { title: "مركز التعلم", href: "/learn", label: "ابدأ من هنا" },
        { title: "الأكاديمية", href: "/academy", label: "كل المسارات" },
      ],
      followUps: ["كيف أبدأ تعلم الفوركس؟", "ما معنى السبريد؟", "كيف أحسب حجم الصفقة؟"],
      tone: "success",
    },
  ]);

  const liveSuggestions = useMemo(() => {
    if (input.trim().length < 2) return [];
    const response = buildResponse(input);
    return response.links?.slice(0, 3) ?? [];
  }, [input]);

  function submit(question?: string) {
    const text = (question ?? input).trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      const response = buildResponse(text);
      setMessages((prev) => [...prev, response]);
      setIsThinking(false);
    }, 520);
  }

  const latestAssistant = [...messages].reverse().find((m) => m.role === "assistant");

  return (
    <div className="overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-950 via-navy/45 to-ink-950 shadow-card">
      <div className="grid gap-0 lg:grid-cols-12">
        <aside className="border-b border-white/5 p-6 lg:col-span-4 lg:border-b-0 lg:border-l">
          <span className="chip chip-gold">Usus AI</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-neutral-50">
            مساعد ذكي للموقع
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            نسخة مطوّرة تعتمد على منطق محلي ذكي داخل الموقع لتوجيهك إلى المسارات والأدوات والصفحات الأنسب.
          </p>

          <div className="mt-8 space-y-2">
            <p className="text-xs font-semibold text-neutral-500">أسئلة جاهزة</p>
            {starterQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => submit(question)}
                className="block w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-right text-sm text-neutral-300 transition-all hover:border-gold/30 hover:text-gold"
              >
                {question}
              </button>
            ))}
          </div>

          {latestAssistant?.followUps && latestAssistant.followUps.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold text-neutral-500">أسئلة متابعة</p>
              <SuggestionChips items={latestAssistant.followUps} onPick={submit} />
            </div>
          )}
        </aside>

        <div className="p-6 lg:col-span-8">
          <div className="h-[460px] space-y-4 overflow-y-auto rounded-2xl border border-white/5 bg-ink-950/55 p-4">
            {messages.map((message, index) => (
              <MessageCard key={`${message.role}-${index}-${message.text.slice(0, 12)}`} message={message} />
            ))}
            {isThinking && <ThinkingBubble />}
          </div>

          <div className="mt-4 flex overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 focus-within:border-gold/50">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
              placeholder="اسأل مثلاً: كيف أبدأ تعلم الفوركس؟"
              className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-neutral-50 outline-none placeholder:text-neutral-600"
            />
            <button
              type="button"
              onClick={() => submit()}
              className="border-r border-white/10 bg-gold px-5 text-sm font-bold text-ink-950 transition-colors hover:bg-gold-light"
            >
              إرسال
            </button>
          </div>

          {liveSuggestions.length > 0 && (
            <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold text-neutral-500">اقتراحات فورية</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {liveSuggestions.map((link) => (
                  <Link
                    key={`${link.href}-${link.title}`}
                    href={link.href}
                    className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/10"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 rounded-2xl border border-bear/20 bg-bear/5 p-4 text-xs leading-relaxed text-neutral-400">
            هذا المساعد تعليمي فقط ولا يقدم توصيات شراء أو بيع. النسخة الحالية تعتمد على TypeScript ومنطق محلي داخل الموقع، ويمكن لاحقًا ربطها بـ API خارجي إذا رغبت.
          </div>
        </div>
      </div>
    </div>
  );
}
