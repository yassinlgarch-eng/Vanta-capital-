import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "من نحن",
  description: "تعرّف على فريق Vanta Capital ورسالتنا في تقديم محتوى مالي عربي احترافي.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="منصة عربية بمعايير عالمية"
        description="Vanta Capital ليست شركة وساطة ولا منصة تداول. نحن مساحة محتوى متخصصة في الأسواق المالية، تهدف إلى تقديم المعرفة بأسلوب احترافي وموثوق للقارئ العربي."
      />

      <section className="container-custom py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="section-title text-3xl">قصتنا</h2>
            <div className="mt-6 space-y-5 text-base leading-loose text-neutral-300">
              <p>
                وُلدت فكرة Vanta Capital من ملاحظة بسيطة: المحتوى المالي
                العربي في معظمه إما سطحي للغاية، أو متخصص بشكل يصعب على المبتدئ
                استيعابه، أو في أسوأ الحالات يحمل وعوداً غير واقعية بالأرباح.
              </p>
              <p>
                أردنا بناء مساحة عربية تحترم عقل قارئها. مساحة لا تَعِد بالربح
                لأن الأسواق لا تعد أحداً بشيء، لكنها تُعطي الأدوات والفهم الذي
                يحتاجه أي شخص ليتخذ قراراته الاستثمارية بوعي.
              </p>
              <p>
                نهتم بالتفاصيل: من اختيار اللغة، إلى تصميم الواجهة، إلى التحقق
                من المعلومات قبل نشرها. الموقع نفسه ينعكس عليه هذا الاهتمام —
                داكن، نظيف، وسريع، تماماً كما يجب أن تكون أدوات المحترفين.
              </p>
            </div>

            <h2 className="section-title mt-14 text-3xl">رسالتنا</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "الوضوح قبل كل شيء",
                  d: "كل مفهوم نشرحه يجب أن يكون قابلاً للفهم من قِبَل شخص لم يدخل السوق من قبل.",
                },
                {
                  t: "الشفافية الكاملة",
                  d: "لا ندّعي ما لا نعرفه، ونوضح دائماً متى يكون رأياً ومتى يكون حقيقة.",
                },
                {
                  t: "الاحتراف بدون تنميق",
                  d: "محتوى جدّي، خطاب مسؤول، بدون مبالغة أو إثارة لا داعي لها.",
                },
                {
                  t: "خدمة المستخدم العربي",
                  d: "نكتب بلغة عربية حديثة وواضحة، تخاطب المتلقي العربي بأسلوبه.",
                },
              ].map((item) => (
                <div key={item.t} className="card p-6">
                  <h3 className="font-display text-base font-bold text-gold">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="card p-6">
                <h3 className="font-display text-base font-bold text-neutral-50">
                  ما نقدمه
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    أخبار اقتصادية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    أكاديمية تعليمية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    تحليلات تعليمية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    كتب رقمية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    عضوية VIP
                  </li>
                </ul>
              </div>

              <div className="card border-bear/20 bg-bear/5 p-6">
                <h3 className="font-display text-base font-bold text-bear">
                  ما لا نقدمه
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                  <li>• خدمات وساطة</li>
                  <li>• إدارة محافظ</li>
                  <li>• توصيات مضمونة</li>
                  <li>• وعود ربح</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
