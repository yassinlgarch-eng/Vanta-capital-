import PageHeader from "@/components/PageHeader";
import PartnerCard from "@/components/PartnerCard";
import { partners } from "@/data/library";

export const metadata = {
  title: "الشركاء - أدوات وخدمات موصى بها",
  description:
    "أدوات تحليل، منصات تداول، وبرامج تعليمية موصى بها للمتداولين والمستثمرين العرب.",
};

export default function AffiliatePage() {
  // مجموعات
  const grouped = partners.reduce<Record<string, typeof partners>>(
    (acc, partner) => {
      (acc[partner.category] ||= []).push(partner);
      return acc;
    },
    {}
  );

  return (
    <>
      <PageHeader
        eyebrow="الشركاء"
        title="أدوات وخدمات موصى بها"
        description="مجموعة منتقاة من الأدوات التي نستخدمها أو نعتبرها مفيدة لأي مهتم بالأسواق المالية. لا نروّج لمنصات مشبوهة أو وعود ربح."
      />

      <section className="container-custom py-12">
        {/* تنبيه شفافية */}
        <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
          <p className="text-sm leading-relaxed text-neutral-300">
            <span className="font-semibold text-gold">شفافية كاملة:</span>{" "}
            بعض الروابط في هذه الصفحة هي روابط تابعة (Affiliate). قد نحصل على
            عمولة عند تسجيلك من خلالها، دون أي تكلفة إضافية عليك. هذه العمولات
            تساعدنا على الاستمرار في تقديم محتوى مجاني عالي الجودة.
          </p>
        </div>

        {/* المجموعات */}
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mt-14">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold text-neutral-50 sm:text-3xl">
                {category}
              </h2>
              <span className="text-xs text-neutral-500">
                {items.length} {items.length === 1 ? "أداة" : "أدوات"}
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        ))}

        {/* مبادئ الترشيح */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-ink-900/40 p-8">
          <h3 className="font-display text-xl font-bold text-neutral-50">
            كيف نختار شركاءنا؟
          </h3>
          <ul className="mt-6 space-y-3">
            {[
              "موثوقية الشركة وسمعتها في السوق",
              "جودة المنتج أو الخدمة المقدّمة",
              "ملاءمة المحتوى للمستخدم العربي",
              "الشفافية في التسعير والشروط",
              "عدم وجود وعود ربح غير واقعية أو ممارسات مضللة",
            ].map((principle, i) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-3"
              >
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-gold/20 font-mono text-xs text-gold">
                  {i + 1}
                </span>
                <span className="text-sm text-neutral-300">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
