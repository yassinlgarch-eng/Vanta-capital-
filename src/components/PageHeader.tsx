type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-ink-900/40">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-custom relative py-16 sm:py-20">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-bold leading-tight text-neutral-50 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {description}
          </p>
        )}
        <div className="gold-divider mt-10 max-w-xs" />
      </div>
    </section>
  );
}
