import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "من نحن",
  description:
    "تعرّف على Usus Markets ورسالتنا في تقديم محتوى مالي عربي واضح، منظم، ومسؤول.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="Usus Markets — أُسُس التداول"
        description="منصة عربية تعليمية للأسواق المالية، هدفها أن تساعد القارئ على فهم السوق بوضوح ومسؤولية، بعيداً عن الوعود المبالغ فيها أو الخطاب العشوائي."
      />

      <section className="container-custom py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-950 p-6 sm:p-8">
              <span className="chip chip-gold">Foundations of Trading</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-neutral-50">
                لماذا اخترنا اسم Usus Markets؟
              </h2>
              <div className="mt-5 space-y-5 text-base leading-loose text-neutral-300">
                <p>
                  كلمة <strong className="text-gold">Usus</strong> مستوحاة من معنى
                  “الأُسُس”؛ لأننا نؤمن أن الطريق الصحيح لفهم الأسواق لا يبدأ
                  من البحث عن صفقة سريعة، بل من بناء أساس قوي: ما هو السوق؟ لماذا
                  تتحرك الأسعار؟ ما معنى المخاطرة؟ ومتى يكون عدم الدخول قراراً
                  أفضل من الدخول؟
                </p>
                <p>
                  Usus Markets ليست شركة وساطة، ولا منصة لإدارة الأموال، ولا جهة
                  تقدم وعود ربح. نحن مساحة تعليمية وإخبارية وتحليلية تهدف إلى
                  تقديم المعرفة المالية بطريقة عربية واضحة، منظمة، ومحترمة لعقل
                  القارئ.
                </p>
              </div>
            </div>

            <h2 className="section-title mt-14 text-3xl">قصتنا</h2>
            <div className="mt-6 space-y-5 text-base leading-loose text-neutral-300">
              <p>
                وُلدت الفكرة من ملاحظة بسيطة: كثير من المحتوى المالي العربي إما
                مبسّط أكثر من اللازم حتى يفقد العمق، أو معقد بطريقة تجعل المبتدئ
                يشعر أن الأسواق عالم مغلق، أو مليء بلغة تسويقية تعد الناس بما لا
                يمكن ضمانه.
              </p>
              <p>
                أردنا بناء منصة مختلفة: تعليم يبدأ من الأساس، أخبار تُعرض بسياق،
                تحليلات تُقدّم كسيناريوهات تعليمية لا كأوامر، وأدوات تساعد
                المستخدم على التفكير بالأرقام قبل العاطفة.
              </p>
              <p>
                لذلك صُمّمت Usus Markets لتكون تجربة هادئة ومنظمة: أكاديمية، مركز
                تعلم، أدوات، أخبار، تحليلات، وغرفة سوق VIP — كلها تخدم هدفاً
                واحداً: أن يفهم المستخدم السوق قبل أن يتخذ أي قرار.
              </p>
            </div>

            <h2 className="section-title mt-14 text-3xl">رسالتنا</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "الأساس قبل الاستراتيجية",
                  d: "نبدأ بالمفاهيم التي تحمي المتعلم من العشوائية: السوق، السعر، السيولة، المخاطر، والسياق.",
                },
                {
                  t: "الوضوح قبل الإثارة",
                  d: "لا نستخدم لغة التخويف أو الوعود السريعة. نشرح الفكرة بهدوء ونترك للمستخدم قرار التعلم.",
                },
                {
                  t: "المخاطرة قبل الفرصة",
                  d: "كل محتوى تطبيقي يجب أن يذكّر بأن حماية رأس المال أهم من مطاردة الحركة.",
                },
                {
                  t: "محتوى عربي بمعايير عالمية",
                  d: "نحاول تقديم تجربة عربية راقية بصرياً وتحريرياً، تشبه المواقع العالمية دون فقدان بساطة اللغة.",
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

            <h2 className="section-title mt-14 text-3xl">كيف نرى الأسواق؟</h2>
            <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <p className="text-base leading-loose text-neutral-300">
                الأسواق ليست مكاناً للحدس وحده، وليست مجرد شموع على الشاشة. هي
                نتيجة تفاعل بين الأخبار، التوقعات، السيولة، المشاركين، العاطفة،
                وتكلفة المخاطرة. لذلك نعلّم المستخدم أن يفصل بين الملاحظة
                والتحليل والقرار، وأن يرى السوق كمنظومة لا كإشارة منفردة.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/academy/market-basics" className="btn-gold">
                  ابدأ من أساسيات السوق
                </Link>
                <Link href="/learn" className="btn-outline">
                  افتح مركز التعلم
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="card p-6">
                <h3 className="font-display text-base font-bold text-neutral-50">
                  ما نقدمه
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                  {[
                    "أخبار اقتصادية بسياق واضح",
                    "أكاديمية تعليمية منظمة",
                    "مركز تعلم مختصر للمبتدئين",
                    "أدوات إدارة مخاطر",
                    "تحليلات تعليمية وسيناريوهات متابعة",
                    "غرفة سوق VIP تعليمية",
                    "مكتبة رقمية متخصصة",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card border-bear/20 bg-bear/5 p-6">
                <h3 className="font-display text-base font-bold text-bear">
                  ما لا نقدمه
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                  <li>• خدمات وساطة أو تنفيذ أوامر</li>
                  <li>• إدارة محافظ أو أموال</li>
                  <li>• توصيات مضمونة أو وعود ربح</li>
                  <li>• نصائح مالية شخصية</li>
                  <li>• دعوات مباشرة للبيع أو الشراء</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <h3 className="font-display text-base font-bold text-neutral-50">
                  شعارنا
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  <span className="text-gold">Foundations of Trading</span>
                  <br />
                  أُسُس التداول قبل أي قرار.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
