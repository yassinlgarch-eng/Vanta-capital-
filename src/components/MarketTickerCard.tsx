import type { MarketTick } from "@/data/markets";
import type { LiveMarketTick } from "@/lib/types";

// Accept both the legacy static MarketTick and the live API tick shape.
type AnyTick = MarketTick | LiveMarketTick;

type Props = {
  tick: AnyTick;
  variant?: "default" | "compact";
};

export default function MarketTickerCard({ tick, variant = "default" }: Props) {
  const isUp = tick.change >= 0;

  if (variant === "compact") {
    return (
      <div className="flex items-center justify-between gap-4 rounded-lg border border-white/5 bg-ink-900/60 px-4 py-3 transition-colors hover:border-white/10">
        <div className="flex flex-col">
          <span className="font-mono text-xs font-semibold text-neutral-50">
            {tick.symbol}
          </span>
          <span className="text-[11px] text-neutral-500">{tick.name}</span>
        </div>
        <div className="text-left">
          <div className="font-mono text-sm font-semibold tabular-nums text-neutral-50">
            {tick.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
          </div>
          <div
            className={`font-mono text-[11px] tabular-nums ${
              isUp ? "text-bull" : "text-bear"
            }`}
            dir="ltr"
          >
            {isUp ? "▲" : "▼"} {Math.abs(tick.changePercent).toFixed(2)}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-hover p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-sm font-bold text-neutral-50">
            {tick.symbol}
          </div>
          <div className="mt-1 text-xs text-neutral-500">{tick.name}</div>
        </div>
        <span
          className={`chip ${isUp ? "chip-bull" : "chip-bear"}`}
          dir="ltr"
        >
          {isUp ? "▲" : "▼"} {Math.abs(tick.changePercent).toFixed(2)}%
        </span>
      </div>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-mono text-2xl font-bold tabular-nums text-neutral-50">
          {tick.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          })}
        </span>
        <span
          className={`font-mono text-sm tabular-nums ${
            isUp ? "text-bull" : "text-bear"
          }`}
          dir="ltr"
        >
          {isUp ? "+" : ""}
          {tick.change.toFixed(2)}
        </span>
      </div>
      {/* Mini sparkline placeholder - TODO: integrate real data */}
      <div className="mt-4 h-8 w-full">
        <svg
          viewBox="0 0 100 30"
          className={`h-full w-full ${isUp ? "text-bull" : "text-bear"}`}
          preserveAspectRatio="none"
        >
          <polyline
            points={
              isUp
                ? "0,25 15,20 30,22 45,15 60,18 75,10 90,12 100,5"
                : "0,5 15,10 30,8 45,15 60,12 75,20 90,18 100,25"
            }
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={
              isUp
                ? "0,25 15,20 30,22 45,15 60,18 75,10 90,12 100,5 100,30 0,30"
                : "0,5 15,10 30,8 45,15 60,12 75,20 90,18 100,25 100,30 0,30"
            }
            fill="currentColor"
            opacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
}
