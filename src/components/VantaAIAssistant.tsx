"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchIndex } from "@/data/search";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const starterQuestions = [
  "كيف أبدأ تعلم الفوركس؟",
  "ما معنى السبريد؟",
  "كيف أحسب حجم الصفقة؟",
  "ما أهم درس للمبتدئ؟",
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

function getAnswer(query: string) {
  const q = normalize(query);

  if (!q) {
    return {
      text: "اكتب سؤالك وسأقترح لك أفضل درس أو أداة داخل Vanta Capital.",
      links: [],
    };
  }

  if (q.includes("ابدا") || q.includes("بدايه") || q.includes("مبتد") || q.includes("تعلم")) {
    return {
      text:
        "أفضل بداية هي مسار الفوركس للمبتدئين: ابدأ بفهم ما هو الفوركس، ثم أزواج العملات، ثم السبريد، ثم Pip و Lot، وبعدها إدارة المخاطر. لا تبدأ بالاستراتيجيات قبل فهم المخاطرة.",
      links: [
        { title: "الفوركس للمبتدئين", href: "/academy/forex-basics" },
        { title: "ما هو الفوركس؟", href: "/academy/forex-basics/what-is-forex" },
        { title: "إدارة المخاطر", href: "/academy/forex-basics/risk-management" },
      ],
    };
  }

  if (q.includes("سبريد") || q.includes("spread") || q.includes("bid") || q.includes("ask")) {
    return {
      text:
        "السبريد هو الفرق بين سعر الشراء Ask وسعر البيع Bid. هو تكلفة تنفيذ تظهر منذ لحظة دخول الصفقة، ويصبح مهماً جداً في السكالبينغ أو وقت الأخبار.",
      links: [
        { title: "Bid و Ask و Spread", href: "/academy/forex-basics/bid-ask-spread" },
      ],
    };
  }

  if (q.includes("حاسبه") || q.includes("حجم الصفق") || q.includes("lot") || q.includes("لوت") || q.includes("risk") || q.includes("مخاطر")) {
    return {
      text:
        "حجم الصفقة يجب أن يُحسب من رصيد الحساب، نسبة المخاطرة، ووقف الخسارة. لا تختار اللوت بناءً على الطمع. استخدم الحاسبة لمعرفة حجم تقريبي قبل التنفيذ.",
      links: [
        { title: "حاسبة حجم الصفقة", href: "/tools/risk-calculator" },
        { title: "إدارة المخاطر في الفوركس", href: "/academy/forex-basics/risk-management" },
        { title: "ما هو Pip وما هو Lot؟", href: "/academy/forex-basics/pip-and-lot" },
      ],
    };
  }

  if (q.includes("اخبار") || q.includes("خبر") || q.includes("تضخم") || q.includes("فائده") || q.includes("nfp") || q.includes("cpi")) {
    return {
      text:
        "الأخبار تحرك السوق عندما تأتي مختلفة عن التوقعات. لا يكفي أن تعرف أن الخبر إيجابي أو سلبي؛ المهم مقارنة Actual مع Forecast وفهم تأثيره على توقعات الفائدة.",
      links: [
        { title: "الأخبار الاقتصادية التي تحرك العملات", href: "/academy/forex-basics/economic-news" },
        { title: "الأخبار", href: "/news" },
      ],
    };
  }

  if (q.includes("جلس") || q.includes("لندن") || q.includes("نيويورك") || q.includes("اسيا") || q.includes("وقت")) {
    return {
      text:
        "اختيار وقت التداول مهم. جلسة لندن ونيويورك غالباً أكثر نشاطاً، أما آسيا فغالباً أهدأ. لا تتداول طوال اليوم؛ اختر نافذة زمنية واضحة.",
      links: [
        { title: "الجلسات العالمية وأفضل أوقات الحركة", href: "/academy/forex-basics/sessions" },
      ],
    };
  }

  if (q.includes("خطه") || q.includes("استراتيجي") || q.includes("نظام")) {
    return {
      text:
        "الخطة البسيطة أفضل من استراتيجية معقدة لا تلتزم بها. حدد الزوج، الجلسة، شروط الدخول، وقف الخسارة، الهدف، وحجم المخاطرة قبل أي صفقة.",
      links: [
        { title: "خطة تداول فوركس بسيطة", href: "/academy/forex-basics/simple-trading-plan" },
        { title: "أخطاء مبتدئي الفوركس", href: "/academy/forex-basics/beginner-mistakes" },
      ],
    };
  }

  const words = q.split(/\s+/).filter(Boolean);
  const matches = searchIndex
    .map((item) => {
      const haystack = normalize([item.title, item.description, item.category, ...item.keywords].join(" "));
      let score = 0;
      for (const word of words) {
        if (haystack.includes(word)) score += 1;
      }
      if (normalize(item.title).includes(q)) score += 4;
      return { item, score };
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((match) => ({ title: match.item.title, href: match.item.href }));

  if (matches.length > 0) {
    return {
      text:
        "لم أجد جواباً مباشراً جاهزاً لهذا السؤال، لكن هذه الصفحات تبدو الأقرب لما تبحث عنه داخل الموقع.",
      links: matches,
    };
  }

  return {
    text:
      "حالياً أنا مساعد بسيط داخل الموقع، أستطيع توجيهك لأقسام الفوركس، إدارة المخاطر، الأخبار، الأدوات، وخطة التداول. جرّب سؤالاً مثل: كيف أحسب حجم الصفقة؟ أو ما معنى السبريد؟",
    links: [
      { title: "الأكاديمية", href: "/academy" },
      { title: "البحث داخل الموقع", href: "/search" },
    ],
  };
}

export default function VantaAIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "أهلاً، أنا Vanta AI — مساعد تعليمي بسيط. اسألني عن الفوركس، السبريد، المخاطرة، الأخبار، أو أي درس داخل الموقع.",
    },
  ]);

  const answer = useMemo(() => getAnswer(input), [input]);

  function submit(question?: string) {
    const text = question ?? input;
    if (!text.trim()) return;

    const response = getAnswer(text);
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: response.text },
    ]);
    setInput("");
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-950 via-navy/45 to-ink-950 shadow-card">
      <div className="grid gap-0 lg:grid-cols-12">
        <aside className="border-b border-white/5 p-6 lg:col-span-4 lg:border-b-0 lg:border-l">
          <span className="chip chip-gold">Vanta AI</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-neutral-50">
            مساعد ذكي بسيط للموقع
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            هذه نسخة أولية بدون API خارجي. وظيفتها توجيه الزائر إلى الدروس والأدوات المناسبة بسرعة.
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
        </aside>

        <div className="p-6 lg:col-span-8">
          <div className="h-[420px] space-y-4 overflow-y-auto rounded-2xl border border-white/5 bg-ink-950/55 p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl p-4 text-sm leading-relaxed ${
                  message.role === "assistant"
                    ? "mr-auto border border-gold/15 bg-gold/5 text-neutral-200"
                    : "ml-auto border border-white/10 bg-white/[0.06] text-neutral-50"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-4 flex overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 focus-within:border-gold/50">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
              placeholder="اسأل مثلاً: كيف أحسب حجم الصفقة؟"
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

          {input.trim().length > 1 && answer.links.length > 0 && (
            <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold text-neutral-500">اقتراحات فورية</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {answer.links.map((link) => (
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
            هذا المساعد تعليمي فقط ولا يقدم توصيات شراء أو بيع. النسخة الحالية تعتمد على قواعد داخلية وبحث محلي، ويمكن لاحقاً ربطها بنموذج AI حقيقي عبر API.
          </div>
        </div>
      </div>
    </div>
  );
}
