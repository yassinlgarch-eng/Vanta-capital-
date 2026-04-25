import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Vanta Capital - الصفحة الرئيسية"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-gold transition-shadow group-hover:shadow-gold-strong">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-ink-950"
          aria-hidden="true"
        >
          <path
            d="M3 4 L12 20 L21 4 L17 4 L12 13 L7 4 Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-neutral-50">
          Vanta <span className="text-gold">Capital</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-[0.2em] text-neutral-400">
          الأسواق · بوضوح
        </span>
      </span>
    </Link>
  );
}
