import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  cta?: string;
  index?: number;
};

function NewspaperIcon() {
  return (
    <>
      <path d="M4 5.5A2.5 2.5 0 016.5 3H19a1 1 0 011 1v14.5A2.5 2.5 0 0117.5 21h-12A2.5 2.5 0 013 18.5V7h1v11.5A1.5 1.5 0 005.5 20" />
      <path d="M6 3v15.5A2.5 2.5 0 008.5 21" />
      <path d="M9 7h7M9 11h7M9 15h5" />
    </>
  );
}

function GraduationCapIcon() {
  return (
    <>
      <path d="M3 8l9-4 9 4-9 4-9-4z" />
      <path d="M7 10.2V15c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.8" />
      <path d="M21 8v6" />
    </>
  );
}

function BarChartIcon() {
  return (
    <>
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-6" />
      <path d="M6 9h2M11 5h2M16 10h2" />
    </>
  );
}

function UsersIcon() {
  return (
    <>
      <path d="M12 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
      <path d="M5 20c.7-3.4 3.2-5.4 7-5.4s6.3 2 7 5.4" />
      <path d="M5.5 11.5a2.7 2.7 0 112.1-4.4" />
      <path d="M2.8 18c.5-2.2 1.8-3.6 3.8-4.1" />
      <path d="M18.5 11.5a2.7 2.7 0 10-2.1-4.4" />
      <path d="M21.2 18c-.5-2.2-1.8-3.6-3.8-4.1" />
    </>
  );
}

function LibraryIcon() {
  return (
    <>
      <path d="M5 4h3v16H5z" />
      <path d="M10.5 4h3v16h-3z" />
      <path d="M16 5l3 1-4 13-3-1 4-13z" />
      <path d="M5 16h3M10.5 16h3" />
    </>
  );
}

function CrownIcon() {
  return (
    <>
      <path d="M4 16l-1-9 5 4 4-7 4 7 5-4-1 9H4z" />
      <path d="M5 20h14" />
    </>
  );
}

const icons: Record<string, JSX.Element> = {
  news: <NewspaperIcon />,
  book: <GraduationCapIcon />,
  chart: <BarChartIcon />,
  users: <UsersIcon />,
  library: <LibraryIcon />,
  crown: <CrownIcon />,
};

export default function FeatureCard({
  title,
  description,
  icon,
  href = "/academy",
  cta = "افتح القسم",
  index = 0,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={`${cta}: ${title}`}
      className="card card-hover group relative block h-full overflow-hidden p-6 outline-none transition-all focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:p-7"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/5 text-gold shadow-[0_0_30px_rgba(212,175,55,0.06)] transition-all group-hover:border-gold/45 group-hover:bg-gold/10 sm:h-18 sm:w-18">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
              aria-hidden="true"
            >
              {icons[icon] || icons.chart}
            </svg>
          </div>

          <span className="pt-1 font-mono text-sm font-medium tracking-wider text-neutral-600 transition-colors group-hover:text-gold/45">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="font-display text-2xl font-bold leading-tight text-neutral-50 transition-colors group-hover:text-gold sm:text-3xl lg:text-lg xl:text-xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-loose text-neutral-400 sm:text-lg lg:text-sm xl:text-base">
            {description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold opacity-90 transition-all group-hover:gap-3 group-hover:text-gold-light">
            {cta}
            <svg
              className="h-4 w-4 flip-rtl"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
