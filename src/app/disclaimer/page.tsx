import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "إخلاء المسؤولية",
  description:
    "إخلاء مسؤولية مهم بشأن المحتوى والتحليلات المقدمة على منصة Vanta Capital",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="مهم — اقرأ بعناية"
        title="إخلاء المسؤولية"
        description="هذه الصفحة من أهم الصفحات على الموقع. نطلب منك قراءتها بعناية قبل التعامل مع أي محتوى تقدّمه Vanta Capital."
      />
      <article className="container-custom py-12">
        <div className="mx-auto max-w-3xl space-y-7">
          {/* تنبيه رئيسي */}
          <div className="rounded-2xl border border-bear/30 bg-bear/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <svg
                className="mt-0.5 h-7 w-7 flex-shrink-0 text-bear"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2L1 21h22L12 2zm-1 6h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <div>
                <h2 className="font-display text-xl font-bold text-bear">
                  تحذير المخاطر
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-200">
                  التداول في الأسواق المالية —{" "}
                  <strong>الفوركس، الأسهم، السلع، والكريبتو</strong> — ينطوي
                  على درجة مرتفعة من المخاطر، وقد يؤدي إلى{" "}
                  <strong className="text-bear">
                    خسارة كامل رأس المال أو جزء منه
                  </strong>
                  . لا تتداول إلا بأموال يمكنك تحمل خسارتها بالكامل دون أن
                  يؤثر ذلك على وضعك المعيشي.
                </p>
              </div>
            </div>
          </div>

          {/* النقاط المهمة */}
          <div className="space-y-5 text-base leading-loose text-neutral-300">
            <Block num="1" title="الموقع تعليمي وإخباري بالكامل">
              جميع المحتويات المنشورة على Vanta Capital — مقالات، أخبار،
              تحليلات، كتب، ومحتوى ركن VIP — هي لأغراض{" "}
              <strong className="text-neutral-50">تعليمية وإعلامية فقط</strong>
              ، ولا تُعد بأي شكل من الأشكال نصيحة استثمارية أو دعوة مباشرة
              للبيع أو الشراء.
            </Block>

            <Block num="2" title="لا نقدم نصائح مالية شخصية">
              لسنا مستشارين ماليين مرخّصين. أي قرار تتخذه بناءً على ما تقرأه
              هنا هو قرارك أنت وحدك. ننصح دائماً بالرجوع إلى مستشار مالي
              مرخّص في بلدك قبل اتخاذ قرارات استثمارية كبيرة.
            </Block>

            <Block num="3" title="الأداء السابق لا يضمن النتائج المستقبلية">
              أي أمثلة، نتائج، أو سيناريوهات مذكورة على الموقع — سواء كانت
              تاريخية أو افتراضية — لا تشكّل ضماناً لأي نتائج مستقبلية.
              الأسواق متقلبة بطبيعتها وقد تتصرف بشكل مختلف تماماً عن أي
              نموذج تاريخي.
            </Block>

            <Block num="4" title="التحليلات تعليمية وليست توصيات">
              التحليلات، السيناريوهات، ومستويات الدعم/المقاومة المعروضة في
              الموقع وفي ركن VIP هي تحليلات تعليمية تعكس وجهة نظر فريقنا في
              لحظة كتابتها. لا يجب التعامل معها كتوصيات مضمونة أو إشارات
              تداول جاهزة للتنفيذ.
            </Block>

            <Block num="5" title="لا نَعِد بأي ربح">
              نحن لا نَعِد، ولن نَعِد أبداً، بأي مبلغ ربح. أي شخص يَعِد
              "ربحاً مضموناً" أو "أرباحاً يومية ثابتة" في الأسواق المالية هو
              إما يكذب عليك أو لا يفهم طبيعة الأسواق.
            </Block>

            <Block num="6" title="المسؤولية الكاملة عليك أنت">
              أنت — وأنت وحدك — المسؤول عن:
              <ul className="mt-3 space-y-1.5">
                <li>• قراراتك الاستثمارية والتداولية.</li>
                <li>• اختيار وسيطك أو منصتك.</li>
                <li>• إدارة مخاطرك ووضع خطة تداول.</li>
                <li>• الالتزام بأنظمة بلدك المالية والضريبية.</li>
              </ul>
            </Block>

            <Block num="7" title="استشر مستشاراً مالياً مرخّصاً">
              قبل أي قرار استثماري كبير، ننصحك بالتشاور مع مستشار مالي مرخّص
              ومُلِمّ بوضعك الشخصي وأهدافك المالية وقدرتك على تحمل المخاطر.
              ما يصلح لشخص ما قد لا يصلح لك.
            </Block>

            <Block num="8" title="الأسواق ذات المخاطر العالية">
              تتطلّب بعض الأسواق — خاصة الفوركس بالرافعة المالية والكريبتو —
              فهماً عميقاً للمخاطر. إحصائياً، نسبة كبيرة من المتداولين
              الأفراد يخسرون أموالهم. كن واعياً لهذه الحقيقة قبل دخول
              السوق.
            </Block>

            <Block num="9" title="مصادر المعلومات">
              نسعى لتقديم معلومات دقيقة من مصادر موثوقة، لكن لا نضمن خلوّ
              المحتوى من أخطاء أو تأخيرات. الأسعار والأخبار قد تتأخر عن
              الواقع، ولا يجب الاعتماد عليها لاتخاذ قرارات في الوقت الحقيقي.
            </Block>

            <Block num="10" title="الروابط الخارجية والشراكات">
              يحتوي الموقع على روابط لخدمات خارجية، بعضها روابط أفلييت قد
              نحصل من خلالها على عمولة. هذا لا يعني تأييدنا لكل ما تقدمه تلك
              المنصات، ويتحمل المستخدم مسؤولية فحصها قبل التعامل معها.
            </Block>
          </div>

          {/* خلاصة */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-gold">
              الخلاصة
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-200">
              نحن نقدم لك المعرفة والأدوات. أنت من تتخذ القرار. الأسواق
              المالية ليست لعبة، والمعرفة وحدها لا تكفي بدون انضباط وإدارة
              مخاطر. نتمنى لك رحلة تعليمية مثمرة، وقرارات واعية.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

function Block({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card p-6">
      <div className="flex items-start gap-4">
        <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 font-mono text-sm font-bold text-gold">
          {num}
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-neutral-50">
            {title}
          </h3>
          <div className="mt-2 text-sm leading-relaxed text-neutral-300">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
