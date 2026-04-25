import type { Book } from "@/data/library";

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      {/* غلاف وهمي بتصميم كتاب فاخر */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-navy via-ink-800 to-ink-900">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />

        {/* خط ذهبي زخرفي رأسي */}
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-gold-light to-transparent opacity-70" />

        {/* الشعار في الزاوية */}
        <div className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded bg-gradient-gold">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-ink-950"
          >
            <path d="M3 4 L12 20 L21 4 L17 4 L12 13 L7 4 Z" />
          </svg>
        </div>

        {/* العنوان على الغلاف */}
        <div className="absolute inset-x-5 bottom-5">
          <p className="font-display text-lg font-bold leading-tight text-neutral-50">
            {book.title}
          </p>
          <p className="mt-2 text-[10px] tracking-[0.3em] text-gold/80">
            VANTA · CAPITAL
          </p>
        </div>
      </div>

      {/* محتوى البطاقة */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="chip chip-gold">{book.level}</span>
          <span className="text-xs text-neutral-500">{book.pages} صفحة</span>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-400">
          {book.description}
        </p>

        <div className="mt-5 flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-bold text-gold">
            ${book.price}
          </span>
          <span className="text-xs text-neutral-500">USD</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {/* TODO: ربط بمنصة دفع مثل Gumroad / Payhip / Stripe */}
          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 py-2 text-xs font-semibold text-neutral-300 transition-colors hover:border-gold/30 hover:text-gold"
          >
            معاينة
          </button>
          <button
            type="button"
            className="rounded-lg bg-gradient-gold py-2 text-xs font-semibold text-ink-950 transition-all hover:shadow-gold"
          >
            شراء الكتاب
          </button>
        </div>
      </div>
    </article>
  );
}
