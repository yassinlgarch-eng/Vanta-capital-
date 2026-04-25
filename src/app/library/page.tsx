import PageHeader from "@/components/PageHeader";
import BookCard from "@/components/BookCard";
import { books } from "@/data/library";

export const metadata = {
  title: "المكتبة الرقمية - كتب التداول والاستثمار",
  description:
    "كتب رقمية احترافية بالعربية في الفوركس، الأسهم، السلع، إدارة المخاطر، وسيكولوجية التداول.",
};

export default function LibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="المكتبة الرقمية"
        title="كتب عربية احترافية"
        description="مكتبة منتقاة بعناية من الكتب الرقمية المتخصصة في الأسواق المالية والتداول. كل كتاب مكتوب بأسلوب عربي مبسّط وعملي."
      />

      <section className="container-custom py-12">
        {/* قائمة الكتب */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* قسم لماذا كتبنا */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "محتوى عربي أصيل",
              desc: "ليست ترجمات حرفية. كل كتاب مكتوب بأسلوب عربي يخاطب المتداول العربي.",
              icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            },
            {
              title: "أمثلة عملية",
              desc: "شرح مدعّم بأمثلة من السوق الحقيقي لتطبيق المفاهيم بشكل ملموس.",
              icon: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-10v2h14V7H7z",
            },
            {
              title: "تحديث دوري",
              desc: "نراجع الكتب دورياً ونحدّثها بما يتناسب مع تطورات الأسواق.",
              icon: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
            },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-neutral-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ملاحظة الدفع */}
        <div className="mt-12 rounded-xl border border-white/5 bg-ink-900/40 p-5">
          <p className="text-xs leading-relaxed text-neutral-500">
            <span className="font-semibold text-neutral-300">ملاحظة:</span>{" "}
            بوابة الدفع الإلكتروني قيد الإعداد. للحصول على أي كتاب حالياً،
            يرجى التواصل معنا مباشرة من خلال صفحة "تواصل معنا".
            {/* TODO: لاحقاً ستُربط الكتب بـ Gumroad / Payhip / Stripe */}
          </p>
        </div>
      </section>
    </>
  );
}
