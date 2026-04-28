import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProgressiveRiskCalculator from "@/components/ProgressiveRiskCalculator";

export const metadata = {
  title: "حاسبة حجم الصفقة - Vanta Capital",
  description:
    "حاسبة تداول تدريجية لحساب حجم الصفقة في الفوركس بناءً على رصيد الحساب، نسبة المخاطرة، وقف الخسارة، وقيمة النقطة.",
};

export default function RiskCalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="أدوات التداول · إدارة المخاطر"
        title="حاسبة حجم الصفقة"
        description="أداة تعليمية تساعدك على تحويل نسبة المخاطرة ووقف الخسارة إلى حجم صفقة تقريبي، حتى لا يكون قرار اللوت عشوائياً."
      />

      <section className="container-custom py-12">
        <ProgressiveRiskCalculator />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold text-neutral-50">
              لماذا هذه الأداة مهمة؟
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              لأن حجم الصفقة يجب أن يُحسب من المخاطرة ووقف الخسارة، وليس من الطمع أو الشعور بأن الفرصة قوية.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold text-neutral-50">
              متى تستخدمها؟
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              استخدمها قبل تنفيذ الصفقة، بعد تحديد وقف الخسارة فنياً وقبل اختيار اللوت داخل منصة التداول.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold text-neutral-50">
              ما حدودها؟
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              النتيجة تقريبية. قيمة النقطة قد تختلف حسب الزوج، عملة الحساب، نوع العقد، وسياسات الوسيط.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/academy/forex-basics/risk-management" className="btn-gold">
            اقرأ درس إدارة المخاطر
          </Link>
          <Link href="/tools" className="btn-outline">
            العودة للأدوات
          </Link>
        </div>
      </section>
    </>
  );
}
