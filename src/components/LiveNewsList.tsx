"use client";

import { useEffect, useMemo, useState } from "react";
import NewsCard from "./NewsCard";
import NewsModal from "./NewsModal";
import type {
  LiveNewsCategory,
  LiveNewsItem,
  NewsResponse,
} from "@/lib/types";

const CATEGORY_TABS: { key: LiveNewsCategory | "all"; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "breaking", label: "عاجل" },
  { key: "global", label: "اقتصاد عالمي" },
  { key: "central-banks", label: "بنوك مركزية" },
  { key: "energy", label: "نفط وذهب" },
  { key: "currencies", label: "عملات" },
  { key: "forex", label: "فوركس" },
  { key: "stocks", label: "أسهم" },
  { key: "commodities", label: "سلع" },
  { key: "banks", label: "بنوك" },
  { key: "crypto", label: "كريبتو" },
];

type Props = {
  /** Auto-refresh interval in ms. Default 7 minutes. 0 disables refresh. */
  refreshMs?: number;
  /** When true, render category filter chips at the top */
  showFilters?: boolean;
  /** Render only first N items (no filter UI suggested) */
  limit?: number;
  /** Show the featured (first/breaking) item in a hero card */
  featuredFirst?: boolean;
};

export default function LiveNewsList({
  refreshMs = 7 * 60_000,
  showFilters = true,
  limit,
  featuredFirst = true,
}: Props) {
  const [state, setState] = useState<{
    status: "loading" | "ready" | "error";
    data: LiveNewsItem[];
    source: "live" | "fallback" | null;
    message?: string;
  }>({
    status: "loading",
    data: [],
    source: null,
  });

  const [activeCategory, setActiveCategory] =
    useState<LiveNewsCategory | "all">("all");
  const [openItem, setOpenItem] = useState<LiveNewsItem | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/news", { cache: "no-store" });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const json = (await res.json()) as NewsResponse;
        if (cancelled) return;
        setState({
          status: "ready",
          data: json.data,
          source: json.source,
          message: json.message,
        });
      } catch {
        if (cancelled) return;
        setState((prev) =>
          prev.status === "ready" ? prev : { ...prev, status: "error" }
        );
      }
    }
    load();
    if (!refreshMs) return () => {
      cancelled = true;
    };
    const id = setInterval(load, refreshMs);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [refreshMs]);

  const filtered = useMemo(() => {
    let arr = state.data;
    if (activeCategory !== "all") {
      arr = arr.filter((n) => n.category === activeCategory);
    }
    if (limit) arr = arr.slice(0, limit);
    return arr;
  }, [state.data, activeCategory, limit]);

  const featured = featuredFirst
    ? filtered.find((n) => n.isBreaking) ?? filtered[0]
    : undefined;
  const rest = featured
    ? filtered.filter((n) => n.id !== featured.id)
    : filtered;

  return (
    <>
      {showFilters && (
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {CATEGORY_TABS.map((cat) => {
            const active = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "border-gold/40 bg-gold/10 text-gold"
                    : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-neutral-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {state.source === "fallback" && (
        <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-4">
          <p className="text-xs leading-relaxed text-neutral-300">
            <span className="font-semibold text-gold">ملاحظة: </span>
            {state.message ??
              "البيانات المعروضة تجريبية. سيتم تفعيل البث الحي بعد ربط مزود الأخبار."}
          </p>
        </div>
      )}

      {/* Loading skeletons */}
      {state.status === "loading" && state.data.length === 0 && (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error state */}
      {state.status === "error" && state.data.length === 0 && (
        <div className="mt-10 rounded-2xl border border-bear/30 bg-bear/5 p-12 text-center">
          <p className="text-bear">
            تعذّر جلب الأخبار حالياً. سنحاول التحديث تلقائياً.
          </p>
        </div>
      )}

      {/* Featured */}
      {featured && (
        <div className="mt-10">
          <NewsCard news={featured} variant="featured" onRead={(n) => setOpenItem(n as LiveNewsItem)} />
        </div>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              onRead={(n) => setOpenItem(n as LiveNewsItem)}
            />
          ))}
        </div>
      )}

      {/* Empty — distinguishes "no recent live news" from "no items in tab" */}
      {state.status === "ready" && filtered.length === 0 && (
        <div className="mt-16 rounded-2xl border border-white/5 bg-ink-900/40 p-12 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-4 text-base font-semibold text-neutral-200">
            {state.source === "live" && state.data.length === 0
              ? state.message ??
                "لا توجد أخبار حديثة متاحة من مزود الأخبار حاليًا."
              : "لا توجد أخبار حالياً ضمن هذا التصنيف."}
          </p>
          {state.source === "live" && state.data.length === 0 && (
            <p className="mt-2 text-xs text-neutral-500">
              نراجع المصادر تلقائياً كل بضع دقائق — عُد لاحقاً.
            </p>
          )}
        </div>
      )}

      <NewsModal news={openItem} onClose={() => setOpenItem(null)} />
    </>
  );
}

function NewsSkeleton() {
  return (
    <div className="card animate-pulse p-5">
      <div className="flex gap-2">
        <div className="h-5 w-16 rounded-full bg-white/10" />
        <div className="h-5 w-12 rounded-full bg-white/5" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-3/4 rounded bg-white/10" />
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-2 w-full rounded bg-white/5" />
        <div className="h-2 w-5/6 rounded bg-white/5" />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="h-2 w-16 rounded bg-white/5" />
        <div className="h-2 w-16 rounded bg-white/5" />
      </div>
    </div>
  );
}
