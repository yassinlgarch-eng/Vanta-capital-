import PageHeader from "@/components/PageHeader";
import VantaAIAssistant from "@/components/VantaAIAssistant";

export const metadata = {
  title: "Vanta AI - مساعد تعليمي بسيط",
  description:
    "مساعد تعليمي بسيط داخل Vanta Capital يوجهك إلى دروس الفوركس، أدوات إدارة المخاطر، الأخبار، والتحليلات المناسبة.",
};

export default function AIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vanta AI"
        title="مساعد تعليمي بسيط"
        description="اسأل عن الفوركس، السبريد، اللوت، إدارة المخاطر، الأخبار، أو أي مفهوم أساسي، وسيقترح لك المساعد أفضل درس أو أداة داخل الموقع."
      />

      <section className="container-custom py-12">
        <VantaAIAssistant />
      </section>
    </>
  );
}
