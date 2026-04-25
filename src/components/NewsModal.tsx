"use client";

import { useEffect } from "react";
import type { LiveNewsItem, LiveNewsCategory } from "@/lib/types";

const CATEGORY_LABELS: Record<LiveNewsCategory, string> = {
  breaking: "عاجل",
  global: "اقتصاد عالمي",
  "central-banks": "بنوك مركزية",
  energy: "نفط وذهب",
  currencies: "عملات",
  stocks: "أسهم",
  crypto: "كريبتو",
  forex: "فوركس",
  commodities: "سلع",
  banks: "بنوك",
};

type Props = {
  news: LiveNewsItem | null;
  onClose: () => void;
};

export default function NewsModal({ news, onClose }: Props) {
  // Lock scroll & close on Escape while open
  useEffect(() => {
    if (!news) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [news, onClose]);

  if (!news) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        dir="rtl"
        className="gradient-border relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto p-6 sm:m-4 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {news.isBreaking && (
              <span className="chip chip-breaking">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bear" />
                عاجل
              </span>
            )}
            <span className="chip">
              {CATEGORY_LABELS[news.category] ?? news.category}
            </span>
            <span className="text-xs text-neutral-500">{news.date}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-colors hover:border-gold/30 hover:text-gold"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <h2
          id="news-modal-title"
          className="mt-5 font-display text-2xl font-bold leading-snug text-neutral-50 sm:text-3xl"
        >
          {news.title}
        </h2>

        {news.originalTitle && (
          <p
            dir="ltr"
            className="mt-2 text-sm leading-relaxed text-neutral-500"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600">
              Original:&nbsp;
            </span>
            {news.originalTitle}
          </p>
        )}

        {news.image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={news.image}
            alt=""
            className="mt-5 w-full rounded-xl border border-white/5 object-cover"
            loading="lazy"
          />
        )}

        <p className="mt-5 text-base leading-relaxed text-neutral-300">
          {news.summary || "لا يوجد ملخص متاح لهذا الخبر."}
        </p>

        {news.originalSummary &&
          news.originalSummary.trim() !== "" &&
          news.originalSummary !== news.originalTitle && (
            <details className="mt-4 rounded-xl border border-white/5 bg-ink-900/50 p-4">
              <summary className="cursor-pointer text-xs font-semibold tracking-wider text-neutral-400 hover:text-gold">
                عرض الملخّص الأصلي بالإنجليزية
              </summary>
              <p
                dir="ltr"
                className="mt-3 text-sm leading-relaxed text-neutral-400"
              >
                {news.originalSummary}
              </p>
            </details>
          )}

        <div className="mt-6 grid gap-3 rounded-xl border border-white/5 bg-ink-900/50 p-4 text-sm sm:grid-cols-2">
          <Field label="المصدر" value={news.source} />
          <Field
            label="التصنيف"
            value={CATEGORY_LABELS[news.category] ?? news.category}
          />
          <Field label="تاريخ النشر" value={news.date} />
          <Field
            label="الحالة"
            value={news.isBreaking ? "خبر عاجل" : "تحديث إخباري"}
          />
        </div>

        {news.url && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              قراءة المصدر الأصلي
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
            <button type="button" onClick={onClose} className="btn-outline">
              إغلاق
            </button>
          </div>
        )}

        <div className="mt-6 rounded-xl border border-gold/15 bg-gold/5 p-4">
          <p className="text-xs leading-relaxed text-neutral-300">
            <span className="font-semibold text-gold">تنبيه: </span>
            هذا المحتوى إخباري وتعليمي وليس توصية استثمارية. الأسعار والمعلومات
            قد تتأخر حسب مزود البيانات.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </div>
      <div className="mt-1 text-sm text-neutral-200">{value}</div>
    </div>
  );
}
