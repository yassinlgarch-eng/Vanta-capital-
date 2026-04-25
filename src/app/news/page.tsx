import PageHeader from "@/components/PageHeader";
import LiveNewsList from "@/components/LiveNewsList";
import RiskNotice from "@/components/RiskNotice";

export const metadata = {
  title: "الأخبار الاقتصادية",
  description:
    "آخر التطورات في الأسواق العالمية، قرارات البنوك المركزية، أسعار السلع، وتحركات العملات — مع ملخصات عربية واضحة.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="مركز الأخبار"
        title="الأخبار الاقتصادية"
        description="آخر التطورات في الأسواق العالمية، قرارات البنوك المركزية، أسعار السلع، وتحركات العملات — مع ملخصات عربية واضحة."
      />

      <section className="container-custom py-12">
        <LiveNewsList showFilters refreshMs={7 * 60_000} />
        <RiskNotice />
      </section>
    </>
  );
}
