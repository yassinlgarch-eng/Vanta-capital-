import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Usus Markets - الصفحة الرئيسية"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-gold transition-shadow group-hover:shadow-gold-strong">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-ink-950"
          aria-hidden="true"
        >
          <path
            d="M4 18V6h3v12H4zm6 0V6h3v12h-3zm6 0V6h3v12h-3z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-neutral-50">
          Usus <span className="text-gold">Markets</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-[0.2em] text-neutral-400">
          أُسُس التداول
        </span>
      </span>
    </Link>
  );
}
