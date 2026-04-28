import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { academySections } from "@/data/academy";

const sectionLessons: Record<
  string,
  Array<{ title: string; description: string; tag: string }>
> = {
  "market-basics": [
    {
      title: "ما هو السوق المالي؟",
      description: "فهم السوق كآلية تبادل وتسعير، وليس مجرد شاشة أسعار.",
      tag: "تأسيسي",
    },
    {
      title: "لماذا تتحرك الأسعار؟",
      description: "العرض والطلب، السيولة، التوقعات، والمفاجآت الاقتصادية.",
      tag: "حركة السعر",
    },
    {
      title: "من يحرك السوق؟",
      description: "البنوك المركزية، المؤسسات، صناع السوق، الأفراد والخوارزميات.",
      tag: "لاعبو السوق",
    },
  ],
  "stocks-investing": [
    {
      title: "ما هو السهم؟",
      description: "فهم الملكية الجزئية في الشركات وكيف يتحول السهم إلى أصل قابل للتداول.",
      tag: "أساسيات",
    },
    {
      title: "قراءة القوائم المالية",
      description: "الإيرادات، الأرباح، التدفقات النقدية، والديون بلغة مبسطة.",
      tag: "تحليل مالي",
    },
    {
      title: "الاستثمار مقابل المضاربة",
      description: "الفرق بين بناء مركز طويل الأمد وتداول الحركة قصيرة المدى.",
      tag: "منهجية",
    },
  ],
  "commodities-energy": [
    {
      title: "لماذا يتحرك الذهب؟",
      description: "الفائدة الحقيقية، الدولار، التضخم، والطلب على الملاذ الآمن.",
      tag: "ذهب",
    },
    {
      title: "ما الذي يحرك النفط؟",
      description: "أوبك+، المخزونات، الطلب العالمي، والتوترات الجيوسياسية.",
      tag: "طاقة",
    },
    {
      title: "الفضة والغاز الطبيعي",
      description: "الطلب الصناعي، الموسمية، والتقلب العالي في السلع الحساسة.",
      tag: "سلع",
    },
  ],
  "technical-analysis": [
    {
      title: "الدعم والمقاومة",
      description: "كيف تتكون المناطق السعرية ولماذا لا تكون خطوطاً سحرية.",
      tag: "Price Action",
    },
    {
      title: "الاتجاه وخطوط الترند",
      description: "تمييز الاتجاه الصاعد والهابط والعرضي بطريقة عملية.",
      tag: "اتجاه",
    },
    {
      title: "المؤشرات الفنية",
      description: "متى تساعدك المؤشرات ومتى تصبح مصدر تشويش زائد.",
      tag: "مؤشرات",
    },
  ],
  "fundamental-analysis": [
    {
      title: "كيف تقرأ التقويم الاقتصادي؟",
      description: "فهم الأحداث عالية التأثير قبل صدورها وبعد صدورها.",
      tag: "أخبار",
    },
    {
      title: "الفائدة والتضخم",
      description: "لماذا تغيّر البنوك المركزية الفائدة وكيف يؤثر ذلك على العملات والأسهم.",
      tag: "اقتصاد كلي",
    },
    {
      title: "الفرق بين الخبر والتوقعات",
      description: "السوق لا يتحرك على الخبر وحده، بل على الفرق بين النتيجة والمتوقع.",
      tag: "توقعات",
    },
  ],
  "risk-management": [
    {
      title: "ما حجم المخاطرة المناسب؟",
      description: "كيف تختار نسبة مخاطرة لا تدمر الحساب بعد سلسلة خسائر.",
      tag: "حماية رأس المال",
    },
    {
      title: "وقف الخسارة وجني الربح",
      description: "الفرق بين وقف منطقي ووقف عشوائي قريب من السعر.",
      tag: "تنفيذ",
    },
    {
      title: "حساب حجم الصفقة",
      description: "ربط وقف الخسارة وقيمة النقطة بنسبة المخاطرة المقبولة.",
      tag: "Position Size",
    },
  ],
  "trading-psychology": [
    {
      title: "الخوف والطمع",
      description: "كيف تقود العاطفة قرارات خاطئة حتى مع استراتيجية جيدة.",
      tag: "عقلية",
    },
    {
      title: "تداول الانتقام",
      description: "لماذا محاولة تعويض الخسارة فوراً غالباً تزيد الخسارة.",
      tag: "انضباط",
    },
    {
      title: "دفتر الصفقات",
      description: "كيف تحوّل أخطاءك إلى بيانات قابلة للتحسين.",
      tag: "تطوير",
    },
  ],
};

const sectionFocus: Record<string, string> = {
  "market-basics":
    "هذا القسم يبني الأساس النظري: ما هو السوق، لماذا توجد الأسعار، ومن هم اللاعبون. لا يدخل في توصيات أو مؤشرات قبل فهم البنية.",
  "stocks-investing":
    "هذا القسم يركز على الاستثمار في الشركات: الملكية، الأرباح، القوائم المالية، التقييم، والفرق بين المستثمر والمضارب.",
  "commodities-energy":
    "هذا القسم يشرح السلع من زاوية الاقتصاد الحقيقي: الذهب، النفط، الفضة، الغاز، العرض والطلب، والمخاطر الجيوسياسية.",
  "technical-analysis":
    "هذا القسم مخصص لقراءة الرسم البياني: الاتجاه، الدعم والمقاومة، النماذج، والمؤشرات دون مبالغة أو وعود.",
  "fundamental-analysis":
    "هذا القسم يشرح الأخبار والاقتصاد الكلي: الفائدة، التضخم، الوظائف، البنوك المركزية، وكيف تتحول التوقعات إلى حركة سعر.",
  "risk-management":
    "هذا القسم يحمي رأس المال: حجم الصفقة، وقف الخسارة، نسبة المخاطرة، وتجنب الانهيار بعد سلسلة خسائر.",
  "trading-psychology":
    "هذا القسم يركز على عقلية المتداول: الخوف، الطمع، الانتقام، الانضباط، وبناء دفتر صفقات يساعد على التطور.",
};

const sectionOutputs: Record<string, string[]> = {
  "market-basics": [
    "خريطة ذهنية للسوق المالي",
    "قاموس مفاهيم أساسية",
    "أمثلة واقعية من الأسواق",
  ],
  "stocks-investing": [
    "قوالب قراءة سهم",
    "شرح مؤشرات تقييم أساسية",
    "أمثلة على شركات ومؤشرات",
  ],
  "commodities-energy": [
    "خرائط محركات الذهب والنفط",
    "شرح علاقة الدولار والفائدة بالسلع",
    "أمثلة جيوسياسية واقتصادية",
  ],
  "technical-analysis": [
    "رسومات دعم ومقاومة",
    "أمثلة شموع واتجاهات",
    "تمارين قراءة الرسم البياني",
  ],
  "fundamental-analysis": [
    "دليل قراءة التقويم الاقتصادي",
    "نماذج تفسير الخبر مقابل التوقع",
    "خرائط تأثير الفائدة والتضخم",
  ],
  "risk-management": [
    "حاسبة حجم الصفقة ذهنياً",
    "قواعد وقف الخسارة",
    "خطة حماية رأس المال",
  ],
  "trading-psychology": [
    "قواعد الانضباط",
    "دفتر صفقات مبسط",
    "تمارين مراجعة السلوك بعد الصفقة",
  ],
};

export function generateStaticParams() {
  return academySections.map((section) => ({ slug: section.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const section = academySections.find((item) => item.slug === params.slug);

  if (!section) {
    return {
      title: "قسم غير موجود - الأكاديمية",
    };
  }

  return {
    title: `${section.title} - أكاديمية Vanta Capital`,
    description: section.description,
  };
}

export default function AcademySectionPage({ params }: { params: { slug: string } }) {
  const section = academySections.find((item) => item.slug === params.slug);

  if (!section) notFound();

  const lessons = sectionLessons[section.slug] ?? [];
  const focus = sectionFocus[section.slug];
  const outputs = sectionOutputs[section.slug] ?? [];
  const isForex = section.slug === "forex-basics";

  if (isForex) {
    return (
      <>
        <PageHeader
          eyebrow="الأكاديمية · مبتدئ"
          title="الفوركس للمبتدئين"
          description="مسار الفوركس التفصيلي متاح الآن بصفحة مخصصة تحتوي على الدروس والرسومات والمصطلحات."
        />
        <section className="container-custom py-12">
          <div className="rounded-3xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-neutral-50">
              تم نقل هذا القسم إلى صفحة تعليمية كاملة
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400">
              لتجنب التكرار، صفحة الفوركس التفصيلية موجودة في مسار مستقل يحتوي على كل الدروس المضافة حتى الآن.
            </p>
            <Link href="/academy/forex-basics" className="btn-gold mt-6">
              فتح مسار الفوركس
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={`الأكاديمية · ${section.level}`}
        title={section.title}
        description={section.description}
      />

      <section className="container-custom py-12">
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/40 to-ink-900 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="chip chip-gold">خطة محتوى منظمة</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl">
                دور هذا القسم داخل الأكاديمية
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                {focus}
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-mono text-2xl font-bold text-gold">
                    {section.lessonsCount}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">دروس مخططة</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="font-display text-xl font-bold text-gold">
                    {section.level}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">المستوى</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {lessons.length > 0 && (
          <div className="mt-14">
            <h2 className="section-title text-3xl">خطة الدروس المقترحة</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
              هذه ليست عناوين عشوائية؛ هي خريطة تحريرية لكل قسم، وسيتم تحويلها لاحقاً إلى صفحات كاملة بنفس جودة مسار الفوركس.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson, i) => (
                <article key={lesson.title} className="card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="chip text-[10px]">{lesson.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-neutral-50">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {lesson.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {outputs.length > 0 && (
          <div className="mt-14 rounded-2xl border border-white/5 bg-ink-900/50 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-neutral-50">
              ما الذي سيحتويه هذا القسم؟
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {outputs.map((item) => (
                <div key={item} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <span className="text-sm font-semibold text-gold">✓</span>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/academy/forex-basics" className="btn-gold">
            ابدأ بمسار الفوركس المكتمل
          </Link>
          <Link href="/academy" className="btn-outline">
            العودة للأكاديمية
          </Link>
        </div>
      </section>
    </>
  );
}
