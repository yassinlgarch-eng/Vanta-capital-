import PageHeader from "@/components/PageHeader";
import UsusAIAssistant from "@/components/VantaAIAssistant";

export const metadata = {
  title: "Usus AI - مساعد تعليمي بسيط",
  description:
    "مساعد تعليمي بسيط داخل Usus Markets يوجهك إلى دروس الفوركس، أدوات إدارة المخاطر، الأخبار، والتحليلات المناسبة.",
};

export default function AIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Usus AI"
        title="مساعد تعليمي بسيط"
        description="اسأل عن الفوركس، السبريد، اللوت، إدارة المخاطر، الأخبار، أو أي مفهوم أساسي، وسيقترح لك المساعد أفضل درس أو أداة داخل الموقع."
      />

      <section className="container-custom py-12">
        <UsusAIAssistant />
      </section>
    </>
  );
}
