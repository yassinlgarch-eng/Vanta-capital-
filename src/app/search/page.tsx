import PageHeader from "@/components/PageHeader";
import SiteSearch from "@/components/SiteSearch";

export const metadata = {
  title: "البحث - Vanta Capital",
  description:
    "ابحث داخل Vanta Capital عن الدروس، الأدوات، الأخبار، التحليلات، الكتب، وصفحات الموقع.",
};

export default function SearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="بحث داخلي"
        title="ابحث داخل الموقع"
        description="اكتب كلمة أو مصطلح للوصول بسرعة إلى الدروس، الأدوات، التحليلات، الأخبار، والمكتبة الرقمية."
      />

      <section className="container-custom py-12">
        <SiteSearch />
      </section>
    </>
  );
}
