import type { NewsItem } from "@/data/news";
import type { LiveNewsItem } from "@/lib/types";

// NewsCard accepts both the legacy static NewsItem and the LiveNewsItem
// returned from /api/news. Live items just add optional fields.
type AnyNews = NewsItem | LiveNewsItem;

const categoryLabels: Record<string, string> = {
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
  news: AnyNews;
  variant?: "default" | "featured";
  /** When provided, the entire card + the read-more action open the modal. */
  onRead?: (news: AnyNews) => void;
};

export default function NewsCard({ news, variant = "default", onRead }: Props) {
  const label = categoryLabels[news.category] ?? news.category;
  const originalTitle =
    "originalTitle" in news ? (news as LiveNewsItem).originalTitle : undefined;

  const handleClick = () => onRead?.(news);
  const interactive = !!onRead;

  if (variant === "featured") {
    return (
      <article
        className={`card card-hover group relative overflow-hidden p-7 ${
          interactive ? "cursor-pointer" : ""
        }`}
        onClick={interactive ? handleClick : undefined}
        role={interactive ? "button" : undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={
          interactive
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick();
                }
              }
            : undefined
        }
      >
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-gold/5 blur-3xl transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {news.isBreaking && (
              <span className="chip chip-breaking">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bear" />
                عاجل
              </span>
            )}
            <span className="chip">{label}</span>
            <span className="text-xs text-neutral-500">{news.date}</span>
          </div>
          <h3 className="font-display text-xl font-bold leading-snug text-neutral-50 transition-colors group-hover:text-gold sm:text-2xl">
            {news.title}
          </h3>
          {originalTitle && (
            <p
              dir="ltr"
              className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500"
            >
              {originalTitle}
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {news.summary}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500">
              {news.source}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-transform group-hover:-translate-x-1"
              aria-hidden={!interactive}
            >
              اقرأ المزيد
              <svg
                className="h-4 w-4 flip-rtl"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`card card-hover group flex h-full flex-col p-5 ${
        interactive ? "cursor-pointer" : ""
      }`}
      onClick={interactive ? handleClick : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {news.isBreaking && (
          <span className="chip chip-breaking">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bear" />
            عاجل
          </span>
        )}
        <span className="chip">{label}</span>
      </div>
      <h3 className="font-display text-base font-bold leading-snug text-neutral-50 transition-colors group-hover:text-gold">
        {news.title}
      </h3>
      {originalTitle && (
        <p
          dir="ltr"
          className="mt-1.5 line-clamp-1 text-[11px] leading-relaxed text-neutral-500"
        >
          {originalTitle}
        </p>
      )}
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
        {news.summary}
      </p>
      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-500">{news.source}</span>
          <span className="text-neutral-500">{news.date}</span>
        </div>
        {interactive && (
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition-transform group-hover:-translate-x-1">
            اقرأ المزيد
            <svg
              className="h-3.5 w-3.5 flip-rtl"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </div>
    </article>
  );
}
