import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية الخاصة بمنصة Vanta Capital",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="قانوني"
        title="سياسة الخصوصية"
        description="آخر تحديث: 2026"
      />
      <article className="container-custom py-12">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-loose text-neutral-300">
          <Section title="1. مقدمة">
            <p>
              نحن في Vanta Capital نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
              توضّح هذه السياسة كيف نجمع المعلومات ونستخدمها ونحميها عند
              استخدامك للموقع.
            </p>
          </Section>

          <Section title="2. المعلومات التي نجمعها">
            <p>قد نجمع الأنواع التالية من المعلومات:</p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong className="text-neutral-50">معلومات تقدمها أنت:</strong>{" "}
                مثل الاسم والبريد الإلكتروني عند التسجيل أو التواصل معنا.
              </li>
              <li>
                <strong className="text-neutral-50">معلومات تقنية:</strong>{" "}
                نوع المتصفح، عنوان IP، وقت الزيارة، الصفحات المعروضة، وذلك
                لأغراض إحصائية وأمنية.
              </li>
              <li>
                <strong className="text-neutral-50">ملفات تعريف الارتباط (Cookies):</strong>{" "}
                نستخدم الكوكيز لتحسين تجربة الاستخدام وتذكّر تفضيلاتك.
              </li>
            </ul>
          </Section>

          <Section title="3. كيف نستخدم معلوماتك">
            <ul className="space-y-2">
              <li>• تحسين خدماتنا وتطوير محتوى يتناسب مع اهتمامات المستخدمين.</li>
              <li>• الرد على استفساراتك ودعم عضوية VIP إن انطبق.</li>
              <li>• إرسال نشرات بريدية أو إشعارات (يمكنك إلغاء الاشتراك في أي وقت).</li>
              <li>• حماية الموقع من الاستخدام غير المشروع.</li>
            </ul>
          </Section>

          <Section title="4. مشاركة المعلومات مع أطراف ثالثة">
            <p>
              نحن لا نبيع بياناتك لأي طرف ثالث. قد نشاركها فقط مع مزوّدي خدمات
              موثوقين (مثل خدمات استضافة المواقع، تحليلات الاستخدام، أو بوابات
              الدفع) ضمن حدود ما تتطلبه الخدمة وبالالتزام بهذه السياسة.
            </p>
          </Section>

          <Section title="5. ملفات تعريف الارتباط">
            <p>
              يمكنك التحكم في الكوكيز عبر إعدادات متصفحك. تعطيلها قد يؤثر على
              بعض ميزات الموقع لكن لا يمنعك من تصفّحه.
            </p>
          </Section>

          <Section title="6. أمان البيانات">
            <p>
              نتخذ إجراءات أمنية معقولة لحماية بياناتك، لكن لا يمكن ضمان
              الأمان المطلق لأي معلومات تُرسل عبر الإنترنت.
            </p>
          </Section>

          <Section title="7. حقوقك">
            <p>لديك الحق في:</p>
            <ul className="mt-3 space-y-2">
              <li>• طلب الاطلاع على بياناتك المحفوظة لدينا.</li>
              <li>• طلب تصحيحها أو حذفها.</li>
              <li>• الانسحاب من القوائم البريدية.</li>
            </ul>
            <p className="mt-3">
              للتواصل بشأن بياناتك، يرجى استخدام صفحة "تواصل معنا".
            </p>
          </Section>

          <Section title="8. تعديلات على هذه السياسة">
            <p>
              قد نقوم بتحديث هذه السياسة من وقت لآخر. التعديلات الجوهرية
              سيُعلَن عنها على الموقع.
            </p>
          </Section>

          <Section title="9. روابط لمواقع خارجية">
            <p>
              قد يحتوي الموقع على روابط لمواقع تابعة لأطراف ثالثة. لا نتحمل
              مسؤولية ممارسات الخصوصية لتلك المواقع، ونوصي بمراجعة سياسات
              الخصوصية الخاصة بها.
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
