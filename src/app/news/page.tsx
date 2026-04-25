"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import {
  newsItems,
  newsCategories,
  type NewsCategory,
} from "@/data/news";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">(
    "all"
  );

  const filtered = useMemo(() => {
    if (activeCategory === "all") return newsItems;
    return newsItems.filter((n) => n.category === activeCategory);
  }, [activeCategory]);

  const featured = filtered.find((n) => n.isBreaking) || filtered[0];
  const rest = filtered.filter((n) => n.id !== featured?.id);

  return (
    <>
      <PageHeader
        eyebrow="مركز الأخبار"
        title="الأخبار الاقتصادية"
        description="آخر التطورات في الأسواق العالمية، قرارات البنوك المركزية، أسعار السلع، وتحركات العملات — مع ملخصات عربية واضحة."
      />

      <section className="container-custom py-12">
        {/* شريط التصفية */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {newsCategories.map((cat) => {
            const active = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key as NewsCategory | "all")}
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

        {/* ملاحظة API */}
        {/* TODO: ربط API الأخبار المباشرة هنا (NewsAPI / Finnhub / Trading Economics) */}
        <div className="mt-6 rounded-xl border border-white/5 bg-ink-900/40 p-4">
          <p className="text-xs text-neutral-500">
            <span className="font-semibold text-neutral-300">ملاحظة:</span>{" "}
            الأخبار المعروضة حالياً تجريبية. سيتم ربط مصادر إخبارية حية في
            المرحلة القادمة من تطوير المنصة.
          </p>
        </div>

        {/* الخبر المميز */}
        {featured && filtered.length > 0 && (
          <div className="mt-10">
            <NewsCard news={featured} variant="featured" />
          </div>
        )}

        {/* بقية الأخبار */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        )}

        {/* لا توجد نتائج */}
        {filtered.length === 0 && (
          <div className="mt-16 rounded-2xl border border-white/5 bg-ink-900/40 p-12 text-center">
            <p className="text-neutral-400">
              لا توجد أخبار حالياً ضمن هذا التصنيف.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
