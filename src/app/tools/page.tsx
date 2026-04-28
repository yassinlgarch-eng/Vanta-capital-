import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "أدوات التداول - Vanta Capital",
  description:
    "أدوات تعليمية عملية تساعدك على حساب المخاطر، حجم الصفقة، ومراجعة قرارات التداول قبل التنفيذ.",
};

const tools = [
  {
    title: "حاسبة حجم الصفقة",
    description:
      "احسب حجم الصفقة بناءً على رصيد الحساب، نسبة المخاطرة، وقف الخسارة، وقيمة النقطة.",
    href: "/tools/risk-calculator",
    tag: "إدارة مخاطر",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="أدوات التداول"
        title="أدوات عملية قبل تنفيذ الصفقة"
        description="مجموعة أدوات تعليمية مصممة لمساعدتك على التفكير بالأرقام قبل الدخول: المخاطرة، حجم الصفقة، والالتزام بالخطة."
      />

      <section className="container-custom py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="card card-hover group block p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M4 19V5" />
                    <path d="M4 19h16" />
                    <path d="M8 15l3-3 3 2 5-7" />
                    <path d="M17 7h2v2" />
                  </svg>
                </div>
                <span className="chip chip-gold">{tool.tag}</span>
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-neutral-50 transition-colors group-hover:text-gold">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {tool.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
                افتح الأداة
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
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
