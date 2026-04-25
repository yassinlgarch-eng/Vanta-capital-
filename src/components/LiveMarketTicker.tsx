"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import MarketTickerCard from "./MarketTickerCard";
import type {
  LiveMarketTick,
  MarketCategory,
  MarketsResponse,
} from "@/lib/types";

type Variant = "compact" | "default";

type Props = {
  /** Show only certain categories (e.g. ["forex"]). Empty/undefined = all */
  categories?: MarketCategory[];
  /** Limit the number of tiles rendered */
  limit?: number;
  /** Card layout */
  variant?: Variant;
  /** Auto-refresh interval in ms. Default 45s. Pass 0 to disable. */
  refreshMs?: number;
  /** Show the live header with status pill */
  showHeader?: boolean;
  /** Custom heading shown beside the live pulse */
  headerLabel?: string;
};

export default function LiveMarketTicker({
  categories,
  limit,
  variant = "compact",
  refreshMs = 45_000,
  showHeader = true,
  headerLabel = "الأسواق الآن",
}: Props) {
  const [state, setState] = useState<{
    status: "loading" | "ready" | "error";
    data: LiveMarketTick[];
    source: "live" | "fallback" | null;
    fetchedAt: string | null;
    message?: string;
  }>({
    status: "loading",
    data: [],
    source: null,
    fetchedAt: null,
  });

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load(initial = false) {
      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      try {
        const res = await fetch("/api/markets", {
          signal: ctrl.signal,
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const json = (await res.json()) as MarketsResponse;
        if (cancelled) return;
        setState({
          status: "ready",
          data: json.data,
          source: json.source,
          fetchedAt: json.fetchedAt,
          message: json.message,
        });
      } catch (err) {
        if ((err as { name?: string }).name === "AbortError") return;
        if (cancelled) return;
        setState((prev) =>
          prev.status === "ready"
            ? prev // keep showing last good data on transient errors
            : { ...prev, status: "error" }
        );
      }
    }

    load(true);
    if (!refreshMs) return () => {
      cancelled = true;
      abortRef.current?.abort();
    };
    const id = setInterval(load, refreshMs);
    return () => {
      cancelled = true;
      clearInterval(id);
      abortRef.current?.abort();
    };
  }, [refreshMs]);

  const items = useMemo(() => {
    let arr = state.data;
    if (categories && categories.length) {
      arr = arr.filter((t) => categories.includes(t.category));
    }
    if (limit) arr = arr.slice(0, limit);
    return arr;
  }, [state.data, categories, limit]);

  const skeletonCount = limit ?? (categories?.length ? 3 : 6);

  return (
    <div className={variant === "compact" ? "gradient-border p-6" : ""}>
      {showHeader && (
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 animate-pulse rounded-full ${
                state.source === "live" ? "bg-bull" : "bg-gold"
              }`}
            />
            <span className="text-xs font-semibold tracking-wider text-neutral-300">
              {headerLabel}
            </span>
          </div>
          <span className="font-mono text-[10px] text-neutral-500">
            {state.status === "loading" && "تحميل…"}
            {state.status === "ready" &&
              (state.source === "live"
                ? `LIVE · ${formatClock(state.fetchedAt)}`
                : "بيانات تجريبية")}
            {state.status === "error" && "خطأ في الاتصال"}
          </span>
        </div>
      )}

      <div
        className={
          variant === "compact"
            ? "mt-4 space-y-2"
            : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {state.status === "loading" && state.data.length === 0
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <SkeletonRow key={i} variant={variant} />
            ))
          : items.map((tick) => (
              <MarketTickerCard
                key={tick.symbol}
                tick={tick}
                variant={variant}
              />
            ))}

        {state.status === "ready" && items.length === 0 && (
          <div className="rounded-lg border border-white/5 bg-ink-900/40 p-4 text-center text-xs text-neutral-500">
            لا توجد أصول معروضة ضمن هذا التصنيف.
          </div>
        )}

        {state.status === "error" && state.data.length === 0 && (
          <div className="rounded-lg border border-bear/30 bg-bear/5 p-4 text-center text-xs text-bear">
            تعذّر جلب الأسعار. سنحاول التحديث تلقائياً.
          </div>
        )}
      </div>

      {showHeader && state.source === "fallback" && (
        <p className="mt-4 text-center text-[10px] leading-relaxed text-neutral-600">
          {state.message ??
            "البيانات المعروضة تجريبية. سيتم تفعيل البث الحي بعد ربط مزود البيانات."}
        </p>
      )}
    </div>
  );
}

function SkeletonRow({ variant }: { variant: Variant }) {
  if (variant === "compact") {
    return (
      <div className="flex animate-pulse items-center justify-between gap-4 rounded-lg border border-white/5 bg-ink-900/60 px-4 py-3">
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-white/10" />
          <div className="h-2 w-24 rounded bg-white/5" />
        </div>
        <div className="space-y-2 text-left">
          <div className="ml-auto h-3 w-16 rounded bg-white/10" />
          <div className="ml-auto h-2 w-12 rounded bg-white/5" />
        </div>
      </div>
    );
  }
  return (
    <div className="card animate-pulse p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="h-3 w-14 rounded bg-white/10" />
          <div className="h-2 w-20 rounded bg-white/5" />
        </div>
        <div className="h-5 w-14 rounded-full bg-white/10" />
      </div>
      <div className="mt-5 h-7 w-32 rounded bg-white/10" />
      <div className="mt-4 h-8 w-full rounded bg-white/5" />
    </div>
  );
}

function formatClock(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
