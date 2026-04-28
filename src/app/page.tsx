import Link from "next/link";
import LiveMarketTicker from "@/components/LiveMarketTicker";
import LiveNewsList from "@/components/LiveNewsList";
import FeatureCard from "@/components/FeatureCard";
import LessonCard from "@/components/LessonCard";
import BookCard from "@/components/BookCard";
import { MarketStructureDiagram, NewsExpectationDiagram } from "@/components/AcademyVisuals";
import { academySections, homeFeatures } from "@/data/academy";
import { books } from "@/data/library";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
        <div
          className="absolute -top-24 right-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-custom relative pt-16 pb-12 sm:pt-24 sm:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="text-xs font-medium tracking-wide text-gold">
                  منصة عربية للأسواق المالية
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl">
                منصتك العربية
                <br />
                لفهم الأسواق المالية{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  بوضوح واحتراف
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                تابع أخبار الأسواق العالمية، تعلّم أساسيات التداول، واكتشف
                تحليلات مبسّطة للفوركس والأسهم والسلع — كل ما تحتاجه في مكان
                واحد.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/academy" className="btn-gold">
                  ابدأ التعلّم
                  <svg
                    className="h-4 w-4 flip-rtl"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="/news" className="btn-outline">
                  تصفّح الأخبار
                </Link>
                <Link
                  href="/vip"
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  دخول ركن VIP
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
                  </svg>
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
                <div>
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl">
                    +60
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    درس أكاديمي
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl">
                    24/7
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    تغطية الأسواق
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl">
                    AR
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    محتوى عربي بالكامل
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-gold/20 bg-ink-900/60 p-2 shadow-card">
                <img
                  src="/images/visuals/home-market-dashboard.svg"
                  alt="لوحة أسواق مالية احترافية"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
              <div className="mt-5">
                <LiveMarketTicker
                  variant="compact"
                  limit={6}
                  refreshMs={45_000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">
              <span className="h-1 w-8 bg-gold" />
              أخبار اقتصادية
            </p>
            <h2 className="section-title">آخر ما يحرّك الأسواق</h2>
          </div>
          <Link
            href="/news"
            className="hidden shrink-0 text-sm font-semibold text-gold transition-colors hover:text-gold-light sm:inline-flex sm:items-center sm:gap-1"
          >
            كل الأخبار
            <svg
              className="h-4 w-4 flip-rtl"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-10">
          <LiveNewsList
            showFilters={false}
            limit={5}
            refreshMs={10 * 60_000}
          />
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="text-center">
            <p className="section-eyebrow justify-center">لماذا Vanta Capital</p>
            <h2 className="section-title mx-auto">
              منصة مبنية على الوضوح والاحتراف
            </h2>
            <p className="section-subtitle mx-auto">
              نحن لا نَعِد بالأرباح. نقدّم لك الأدوات والمعرفة التي تحتاجها لفهم
              ما يحدث في الأسواق، وأن تتخذ قراراتك بنفسك بوعي كامل.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 animate-stagger">
            {homeFeatures.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          <MarketStructureDiagram />
          <NewsExpectationDiagram />
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="section-eyebrow">الأكاديمية</p>
            <h2 className="section-title">
              من الصفر إلى فهم متقدّم للأسواق
            </h2>
            <p className="section-subtitle">
              مسار تعليمي عربي متكامل، مقسّم إلى أقسام واضحة. ابدأ من الأساسيات
              ثم تدرّج خطوة بخطوة نحو التحليل وإدارة المخاطر وسيكولوجية
              التداول.
            </p>
            <div className="mt-7">
              <Link href="/academy" className="btn-gold">
                استكشف الأكاديمية
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {academySections.slice(0, 4).map((section) => (
                <LessonCard key={section.slug} section={section} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="container-custom relative">
          <div className="gradient-border relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                  <svg
                    className="h-4 w-4 text-gold"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wide text-gold">
                    حصري للأعضاء
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl md:text-5xl">
                  ركن <span className="text-gold">VIP</span>
                  <br />
                  محتوى أعمق، تنبيهات أسرع
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400">
                  انضم إلى أعضاء VIP للحصول على توصيات تعليمية، سيناريوهات
                  تداول، تحليلات أسبوعية، وتنبيهات اقتصادية مهمة — بسعر رمزي.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/vip" className="btn-gold">
                    اعرف التفاصيل
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    تواصل معنا
                  </Link>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "توصيات تعليمية أسبوعية مفصّلة",
                  "سيناريوهات صعود وهبوط للأسواق الرئيسية",
                  "تنبيهات قبل الأحداث الاقتصادية المؤثرة",
                  "تحليلات معمّقة للفوركس والذهب والنفط",
                  "ملخصات أسبوعية لأهم تطورات السوق",
                  "أولوية الإجابة على أسئلتك الفنية",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4"
                  >
                    <div className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gold/20">
                      <svg
                        className="h-3 w-3 text-gold"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">المكتبة الرقمية</p>
            <h2 className="section-title">كتب عربية احترافية</h2>
          </div>
          <Link
            href="/library"
            className="hidden shrink-0 text-sm font-semibold text-gold transition-colors hover:text-gold-light sm:inline-flex sm:items-center sm:gap-1"
          >
            كل الكتب
            <svg
              className="h-4 w-4 flip-rtl"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 via-navy/50 to-ink-900 p-10 text-center sm:p-16">
          <div
            className="absolute inset-0 grid-bg opacity-30"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl md:text-5xl">
              ابدأ رحلتك في فهم الأسواق
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                اليوم
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
              اختر طريقك: محتوى تعليمي مجاني، أو ركن VIP بمحتوى أعمق وتحليلات
              أسبوعية.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/academy" className="btn-gold">
                ابدأ مجاناً
              </Link>
              <Link href="/vip" className="btn-outline">
                استكشف VIP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
