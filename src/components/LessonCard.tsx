import Link from "next/link";
import type { AcademySection } from "@/data/academy";

const levelColors: Record<string, string> = {
  مبتدئ: "chip-bull",
  متوسط: "chip-gold",
  متقدم: "chip-bear",
};

export default function LessonCard({ section }: { section: AcademySection }) {
  return (
    <Link
      href={`/academy/${section.slug}`}
      className="card card-hover group block p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M3 3h18v2H3V3zm0 6h12v2H3V9zm0 6h18v2H3v-2zm0 6h12v2H3v-2z" />
          </svg>
        </div>
        <span className={`chip ${levelColors[section.level]}`}>
          {section.level}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-neutral-50 transition-colors group-hover:text-gold">
        {section.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
        {section.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
        <span className="text-xs text-neutral-500">
          {section.lessonsCount} دروس
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold transition-transform group-hover:-translate-x-1">
          ابدأ القسم
          <svg
            className="h-3.5 w-3.5 flip-rtl"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
