"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchIndex } from "@/data/search";

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .trim();
}

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];

    return searchIndex
      .map((item) => {
        const haystack = normalize(
          [item.title, item.description, item.category, ...item.keywords].join(" ")
        );
        const title = normalize(item.title);
        const category = normalize(item.category);

        let score = 0;
        if (title.includes(normalizedQuery)) score += 6;
        if (category.includes(normalizedQuery)) score += 3;
        if (haystack.includes(normalizedQuery)) score += 2;

        const words = normalizedQuery.split(/\s+/).filter(Boolean);
        for (const word of words) {
          if (title.includes(word)) score += 2;
          if (haystack.includes(word)) score += 1;
        }

        return { item, score };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((result) => result.item);
  }, [normalizedQuery]);

  const showEmpty = normalizedQuery.length >= 2 && results.length === 0;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/35 to-ink-900 p-5 shadow-card sm:p-7">
        <label htmlFor="site-search" className="block font-display text-xl font-bold text-neutral-50">
          ابحث داخل Vanta Capital
        </label>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          اكتب كلمة مثل: فوركس، سبريد، إدارة المخاطر، الذهب، الأخبار، حاسبة، VIP.
        </p>

        <div className="mt-5 flex overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 transition-colors focus-within:border-gold/50">
          <div className="grid w-14 place-items-center border-l border-white/10 text-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              <circle cx="11" cy="11" r="7" />
            </svg>
          </div>
          <input
            id="site-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="اكتب كلمة البحث..."
            className="min-w-0 flex-1 bg-transparent px-4 py-4 text-base text-neutral-50 outline-none placeholder:text-neutral-600"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="border-r border-white/10 px-4 text-sm font-semibold text-neutral-500 transition-colors hover:text-gold"
            >
              مسح
            </button>
          )}
        </div>

        <div className="mt-6">
          {normalizedQuery.length < 2 && (
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-sm leading-relaxed text-neutral-400">
              ابدأ بكتابة حرفين أو أكثر لعرض النتائج.
            </div>
          )}

          {showEmpty && (
            <div className="rounded-2xl border border-bear/20 bg-bear/5 p-5 text-sm leading-relaxed text-neutral-300">
              لم أجد نتائج مطابقة. جرّب كلمة أبسط مثل: فوركس، أخبار، مخاطر، ذهب، أدوات.
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 text-xs text-neutral-500">
                <span>النتائج المطابقة</span>
                <span>{results.length} نتيجة</span>
              </div>
              {results.map((result) => (
                <Link
                  key={`${result.href}-${result.title}`}
                  href={result.href}
                  className="group block rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:border-gold/30 hover:bg-white/[0.06]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="chip text-[10px]">{result.category}</span>
                      <h2 className="mt-3 font-display text-lg font-bold text-neutral-50 transition-colors group-hover:text-gold">
                        {result.title}
                      </h2>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold transition-all group-hover:gap-2">
                      فتح
                      <svg
                        className="h-3.5 w-3.5 flip-rtl"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {result.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
