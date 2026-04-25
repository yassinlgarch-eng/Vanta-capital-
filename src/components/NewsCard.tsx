import type { NewsItem } from "@/data/news";

const categoryLabels: Record<string, string> = {
  breaking: "عاجل",
  global: "اقتصاد عالمي",
  "central-banks": "بنوك مركزية",
  energy: "نفط وذهب",
  currencies: "عملات",
  stocks: "أسهم",
  crypto: "كريبتو",
};

export default function NewsCard({
  news,
  variant = "default",
}: {
  news: NewsItem;
  variant?: "default" | "featured";
}) {
  if (variant === "featured") {
    return (
      <article className="card card-hover group relative overflow-hidden p-7">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-gold/5 blur-3xl transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {news.isBreaking && (
              <span className="chip chip-breaking">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bear" />
                عاجل
              </span>
            )}
            <span className="chip">{categoryLabels[news.category]}</span>
            <span className="text-xs text-neutral-500">{news.date}</span>
          </div>
          <h3 className="font-display text-xl font-bold leading-snug text-neutral-50 transition-colors group-hover:text-gold sm:text-2xl">
            {news.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {news.summary}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500">
              {news.source}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-transform group-hover:-translate-x-1">
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
    <article className="card card-hover group p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {news.isBreaking && (
          <span className="chip chip-breaking">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bear" />
            عاجل
          </span>
        )}
        <span className="chip">{categoryLabels[news.category]}</span>
      </div>
      <h3 className="font-display text-base font-bold leading-snug text-neutral-50 transition-colors group-hover:text-gold">
        {news.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
        {news.summary}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-neutral-500">{news.source}</span>
        <span className="text-neutral-500">{news.date}</span>
      </div>
    </article>
  );
}
