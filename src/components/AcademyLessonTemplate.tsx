import Link from "next/link";
import type { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";

type LessonSection = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

type LessonNav = {
  href: string;
  label: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  objectives: string[];
  sections: LessonSection[];
  keyTakeaways: string[];
  previousLesson?: LessonNav;
  nextLesson?: LessonNav;
};

export default function AcademyLessonTemplate({
  eyebrow,
  title,
  description,
  level,
  duration,
  objectives,
  sections,
  keyTakeaways,
  previousLesson,
  nextLesson,
}: Props) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />

      <article className="container-custom py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-5">
              <div className="rounded-xl border border-white/5 bg-ink-900/60 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  محتويات الدرس
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {sections.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded px-2 py-1.5 text-neutral-400 transition-colors hover:bg-white/5 hover:text-gold"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="chip chip-gold">{level}</span>
                  <span className="chip">{duration}</span>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-neutral-400">
                  محتوى تعليمي فقط، لا يُعد توصية شراء أو بيع. الهدف هو بناء فهم
                  منظم يساعدك على قراءة السوق بوعي.
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="space-y-8 text-base leading-loose text-neutral-300">
              <section className="rounded-2xl border border-white/5 bg-ink-900/50 p-6">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  ماذا ستتعلم في هذا الدرس؟
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {objectives.map((item) => (
                    <li key={item} className="flex gap-3 rounded-lg bg-white/5 p-4">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                      <span className="text-sm text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <Divider />
                  <h2 className="mt-7 font-display text-2xl font-bold text-neutral-50 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5">{section.children}</div>
                </section>
              ))}

              <section className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  خلاصة تنفيذية
                </h2>
                <ul className="mt-5 space-y-3">
                  {keyTakeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
                {previousLesson ? (
                  <Link href={previousLesson.href} className="btn-outline">
                    الدرس السابق: {previousLesson.label}
                  </Link>
                ) : (
                  <Link href="/academy" className="btn-outline">
                    العودة للأكاديمية
                  </Link>
                )}
                {nextLesson && (
                  <Link href={nextLesson.href} className="btn-gold">
                    الدرس التالي: {nextLesson.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export function LessonCallout({
  title,
  children,
  tone = "gold",
}: {
  title: string;
  children: ReactNode;
  tone?: "gold" | "blue" | "red";
}) {
  const styles =
    tone === "red"
      ? "border-bear/30 bg-bear/5"
      : tone === "blue"
      ? "border-electric/30 bg-electric/5"
      : "border-gold/20 bg-gold/5";

  return (
    <div className={`rounded-xl border p-5 ${styles}`}>
      <h3 className="font-display text-lg font-bold text-neutral-50">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function LessonTable({
  rows,
}: {
  rows: Array<{ label: string; value: ReactNode }>;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-2 border-b border-white/5 bg-white/[0.03] p-4 last:border-b-0 sm:grid-cols-3"
        >
          <div className="font-semibold text-gold">{row.label}</div>
          <div className="sm:col-span-2">{row.value}</div>
        </div>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="gold-divider" aria-hidden="true" />;
}
