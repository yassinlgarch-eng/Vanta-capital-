import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "الشروط والأحكام",
  description: "الشروط والأحكام الخاصة باستخدام منصة Vanta Capital",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="قانوني"
        title="الشروط والأحكام"
        description="آخر تحديث: 2026"
      />
      <article className="container-custom py-12">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-loose text-neutral-300">
          <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
            <p className="text-sm text-neutral-200">
              باستخدامك لموقع Vanta Capital، فإنك توافق على هذه الشروط بشكل
              كامل. إذا كنت لا توافق على أي بند، يرجى عدم استخدام الموقع.
            </p>
          </div>

          <Section title="1. طبيعة الموقع">
            <p>
              Vanta Capital هي منصة محتوى تعليمي وإخباري في مجال الأسواق
              المالية. الموقع <strong className="text-neutral-50">لا يقدم</strong>{" "}
              خدمات وساطة، ولا يدير محافظ استثمارية، ولا يُعد مستشاراً مالياً
              مرخّصاً.
            </p>
          </Section>

          <Section title="2. حقوق الاستخدام">
            <p>
              يُسمح لك بقراءة المحتوى ومشاركته بما يحفظ المصدر. يُمنع إعادة نشر
              المحتوى تجارياً أو استخدامه في منتجات منافسة دون إذن خطي مسبق.
            </p>
          </Section>

          <Section title="3. الحسابات والاشتراكات">
            <ul className="space-y-2">
              <li>
                • يلتزم المستخدم بتقديم معلومات صحيحة عند التسجيل أو الاشتراك.
              </li>
              <li>
                • أنت مسؤول عن الحفاظ على سرية بيانات حسابك.
              </li>
              <li>
                • يحق لنا تعليق أو إنهاء أي حساب يخالف هذه الشروط دون إشعار
                مسبق.
              </li>
            </ul>
          </Section>

          <Section title="4. عضوية VIP">
            <p>
              المحتوى المقدم في ركن VIP لأغراض تعليمية فقط. الاشتراك في VIP لا
              يضمن أي ربح، ولا يُعد بديلاً عن الاستشارة المالية المتخصصة.
              التحاليل والسيناريوهات المعروضة هي اجتهادات تحليلية وليست توصيات
              ملزمة.
            </p>
          </Section>

          <Section title="5. الاسترداد">
            <p>
              نظراً لطبيعة المحتوى الرقمي (كتب، تحليلات، اشتراكات)، الاسترداد
              يخضع لسياستنا الخاصة. للاستفسار عن أي طلب استرداد، يرجى التواصل
              معنا خلال 7 أيام من تاريخ الشراء.
            </p>
          </Section>

          <Section title="6. الملكية الفكرية">
            <p>
              جميع المحتويات على هذا الموقع — نصوص، تصميمات، شعارات، وكتب
              رقمية — هي ملكية حصرية لـ Vanta Capital أو شركائها، ومحمية
              بموجب قوانين الملكية الفكرية الدولية.
            </p>
          </Section>

          <Section title="7. السلوك المحظور">
            <p>يُمنع على المستخدم:</p>
            <ul className="mt-3 space-y-2">
              <li>• محاولة اختراق الموقع أو الإضرار به تقنياً.</li>
              <li>• نشر محتوى مسيء أو مضلل في صفحات المجتمع.</li>
              <li>• استخدام الموقع لأي نشاط غير قانوني.</li>
              <li>• انتحال شخصية أي طرف آخر.</li>
            </ul>
          </Section>

          <Section title="8. تعديل الشروط">
            <p>
              نحتفظ بحق تعديل هذه الشروط في أي وقت. التعديلات تصبح سارية فور
              نشرها على الموقع، واستمرارك في استخدام الموقع يعني موافقتك على
              الشروط المُحدَّثة.
            </p>
          </Section>

          <Section title="9. حدود المسؤولية">
            <p>
              لا تتحمل Vanta Capital أي مسؤولية عن أي خسائر مالية أو غير
              مالية ناتجة عن استخدامك للموقع أو اعتمادك على محتواه. القرار
              النهائي بأي عملية تداول أو استثمار يقع بالكامل على عاتق
              المستخدم.
            </p>
          </Section>

          <Section title="10. القانون الواجب التطبيق">
            <p>
              تخضع هذه الشروط للقوانين المعمول بها في الدولة التي تُسجَّل فيها
              المنصة، وأي نزاع يُحَلّ بالطرق الودية أو عبر المحاكم المختصة.
            </p>
          </Section>
        </div>
      </article>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-gold">{title}</h2>
      <div className="mt-3 text-neutral-300">{children}</div>
    </section>
  );
}
