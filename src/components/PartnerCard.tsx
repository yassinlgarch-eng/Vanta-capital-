import type { Partner } from "@/data/library";

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="card card-hover flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip chip-gold">{partner.category}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-neutral-50">
        {partner.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {partner.description}
      </p>

      <ul className="mt-5 space-y-2">
        {partner.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-neutral-300"
          >
            <svg
              className="h-4 w-4 flex-shrink-0 text-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-outline w-full"
        >
          زيارة الموقع
          <svg
            className="h-4 w-4 flip-rtl"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17l10-10M9 7h8v8" strokeLinecap="round" />
          </svg>
        </a>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-neutral-500">
          قد نحصل على عمولة عند التسجيل من خلال روابطنا دون أي تكلفة إضافية عليك.
        </p>
      </div>
    </article>
  );
}
