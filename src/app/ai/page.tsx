import PageHeader from "@/components/PageHeader";
import UsusAIAssistant from "@/components/UsusAIAssistant";

export const metadata = {
  title: "Usus AI",
  description:
    "مساعد ذكي داخل Usus Markets يوجّهك إلى الدروس، الأدوات، الأخبار، والتحليلات المناسبة داخل الموقع.",
};

export default function AIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Usus AI"
        title="مساعد ذكي داخل الموقع"
        description="اسأل عن الفوركس، السبريد، اللوت، إدارة المخاطر، الأخبار، أو أي مفهوم أساسي، وسيقترح لك أفضل درس أو أداة أو صفحة مناسبة داخل الموقع."
      />

      <section className="container-custom py-12">
        <UsusAIAssistant />
      </section>
    </>
  );
}
