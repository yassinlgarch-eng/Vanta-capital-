type Props = {
  title: string;
  description: string;
  icon: string;
  index?: number;
};

const icons: Record<string, JSX.Element> = {
  news: (
    <path d="M4 4h16v16H4V4zm2 4v10h12V8H6zm2 2h8v1H8v-1zm0 3h8v1H8v-1zm0 3h5v1H8v-1z" />
  ),
  book: (
    <path d="M4 5a3 3 0 013-3h11v17H7a3 3 0 100 0h11V2H7a3 3 0 00-3 3v15h0V5z" />
  ),
  chart: (
    <path d="M3 3v18h18v-2H5V3H3zm4 14h2v-7H7v7zm4 0h2V8h-2v9zm4 0h2v-4h-2v4zm4 0h2V6h-2v11z" />
  ),
  users: (
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  ),
  library: (
    <path d="M5 3h2v18H5V3zm4 0h2v18H9V3zm4 2l5.5 1.5-3.5 13L7.5 18 13 5z" />
  ),
  crown: (
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2v2h14v-2H5z" />
  ),
};

export default function FeatureCard({ title, description, icon, index = 0 }: Props) {
  return (
    <div className="card card-hover group relative h-full overflow-hidden p-6">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        {/* رقم الترتيب */}
        <span className="font-mono text-xs text-neutral-600">
          0{index + 1}
        </span>
        <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-all group-hover:border-gold/40 group-hover:bg-gold/10">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {icons[icon] || icons.chart}
          </svg>
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-neutral-50">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
}
