import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "ما هو السوق المالي؟ - الدرس الأول",
  description:
    "شرح مبسّط للأسواق المالية، المشاركين فيها، وكيف تتحرك الأسعار — درس تأسيسي للمبتدئين.",
};

export default function LessonPage() {
  return (
    <>
      <PageHeader
        eyebrow="الدرس 01 · أساسيات السوق"
        title="ما هو السوق المالي؟"
        description="نقطة البداية لفهم كل ما سيأتي بعدها. سنشرح ما هي الأسواق المالية، من يشارك فيها، ولماذا توجد أصلاً."
      />

      <article className="container-custom py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* جانب جدول المحتويات */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 rounded-xl border border-white/5 bg-ink-900/40 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                محتويات الدرس
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { id: "intro", label: "مقدمة" },
                  { id: "definition", label: "تعريف السوق" },
                  { id: "types", label: "أنواع الأسواق" },
                  { id: "players", label: "المشاركون" },
                  { id: "example", label: "مثال عملي" },
                  { id: "summary", label: "خلاصة" },
                ].map((item) => (
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
          </aside>

          {/* المحتوى */}
          <div className="lg:col-span-9">
            <div className="prose-content space-y-7 text-base leading-loose text-neutral-300">
              <section id="intro">
                <p className="text-lg">
                  إذا كنت تسمع كثيراً عن "البورصة" و "الفوركس" و "الذهب" و
                  "أسهم آبل"، لكنك لم تفهم بعد كيف تترابط كل هذه الأشياء —
                  فأنت في المكان الصحيح. هذا الدرس سيضع الأساس الذي تُبنى
                  عليه كل المفاهيم القادمة.
                </p>
              </section>

              <Divider />

              <section id="definition">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  تعريف بسيط للسوق المالي
                </h2>
                <p>
                  السوق المالي هو ببساطة <strong className="text-neutral-50">مكان (افتراضي في الغالب)</strong>{" "}
                  يلتقي فيه المشترون والبائعون لتداول أصول مالية مثل الأسهم،
                  العملات، السلع، أو السندات. مثلما يلتقي الناس في سوق الخضار
                  لشراء وبيع الطماطم، يلتقي المستثمرون في السوق المالي لشراء
                  وبيع أسهم شركات أو عقود ذهب أو أزواج عملات.
                </p>
                <p>
                  الفرق أن التداول هنا يتم إلكترونياً عبر وسطاء وبنوك، وعلى
                  مدار الساعة في بعض الأسواق مثل الفوركس والكريبتو.
                </p>
              </section>

              <Divider />

              <section id="types">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  أنواع الأسواق الرئيسية
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      t: "سوق الأسهم",
                      d: "تداول حصص ملكية في شركات (مثل آبل، أرامكو، تسلا).",
                    },
                    {
                      t: "سوق العملات (الفوركس)",
                      d: "تبادل عملة دولة بأخرى. الأكبر حجماً والأكثر سيولة عالمياً.",
                    },
                    {
                      t: "سوق السلع",
                      d: "الذهب، الفضة، النفط، الغاز، القمح، البن، وغيرها.",
                    },
                    {
                      t: "سوق السندات",
                      d: "إقراض المال لحكومات أو شركات مقابل فائدة محددة.",
                    },
                    {
                      t: "سوق المشتقات",
                      d: "عقود مشتقّة من أصول أخرى مثل عقود الفروقات (CFDs) والخيارات.",
                    },
                  ].map((item) => (
                    <li
                      key={item.t}
                      className="rounded-lg border border-white/5 bg-white/5 p-4"
                    >
                      <strong className="text-gold">{item.t}:</strong>{" "}
                      <span className="text-neutral-300">{item.d}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <Divider />

              <section id="players">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  من يشارك في السوق؟
                </h2>
                <p>
                  السوق ليس "كياناً" واحداً. هو نتيجة قرارات ملايين الأطراف
                  المختلفة. أهمهم:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-neutral-50">البنوك المركزية:</strong>{" "}
                    أكبر اللاعبين تأثيراً عبر قراراتها على الفائدة وكمية النقد.
                  </li>
                  <li>
                    <strong className="text-neutral-50">صناديق التحوط والمؤسسات:</strong>{" "}
                    تتداول بأحجام ضخمة وتحرّك الأسعار بشكل كبير.
                  </li>
                  <li>
                    <strong className="text-neutral-50">شركات التداول الخوارزمي:</strong>{" "}
                    تنفذ ملايين الصفقات بالميلي ثانية بناءً على نماذج رياضية.
                  </li>
                  <li>
                    <strong className="text-neutral-50">المستثمرون الأفراد:</strong>{" "}
                    أنت وأنا. أصغر اللاعبين فردياً لكن نشكّل تأثيراً جماعياً.
                  </li>
                </ul>
              </section>

              <Divider />

              <section id="example">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  مثال عملي
                </h2>
                <div className="rounded-xl border border-gold/20 bg-gold/5 p-6">
                  <p className="text-neutral-200">
                    تخيّل أن شركة "س" أعلنت أرباحاً قياسية أعلى من توقعات
                    المحللين. ماذا يحدث؟
                  </p>
                  <ol className="mt-4 space-y-2 text-neutral-300">
                    <li>1. الطلب على سهم الشركة يرتفع لأن الناس يريدون امتلاكه.</li>
                    <li>2. لأن الطلب أكبر من العرض، يرتفع السعر.</li>
                    <li>3. صناديق ومحللون يرفعون توقعاتهم، فيستمر الصعود.</li>
                    <li>
                      4. مع الوقت، يستقر السعر عند مستوى يعكس "القيمة العادلة"
                      الجديدة للشركة.
                    </li>
                  </ol>
                  <p className="mt-4 text-sm text-neutral-400">
                    هذه باختصار آلية تحرّك الأسعار: ميزان مستمر بين العرض والطلب
                    يتأثر بالأخبار، التوقعات، ومشاعر السوق.
                  </p>
                </div>
              </section>

              <Divider />

              <section id="summary">
                <h2 className="font-display text-2xl font-bold text-neutral-50">
                  خلاصة الدرس
                </h2>
                <p>
                  السوق المالي مكان لتبادل الأصول. الأسعار تتحرك بناءً على
                  العرض والطلب. وراء كل حركة ملايين القرارات من لاعبين بأحجام
                  مختلفة. فهم هذا الأساس هو الخطوة الأولى — في الدروس
                  القادمة سنغوص في تفاصيل كل سوق على حدة.
                </p>
              </section>

              {/* تنقل بين الدروس */}
              <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/5 pt-8">
                <div></div>
                <Link
                  href="/academy"
                  className="btn-outline"
                >
                  العودة للأقسام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function Divider() {
  return <div className="gold-divider my-2" aria-hidden="true" />;
}
