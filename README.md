# Vanta Capital

> منصة عربية احترافية للأسواق المالية، التداول، والتعليم الاستثماري.

موقع جاهز للنشر مبني بـ **Next.js 14 + TypeScript + Tailwind CSS** مع دعم RTL كامل وثيم داكن فاخر.

---

## 📋 جدول المحتويات

1. [نظرة عامة](#نظرة-عامة)
2. [خريطة الموقع](#خريطة-الموقع)
3. [هيكل الملفات](#هيكل-الملفات)
4. [تشغيل المشروع محلياً](#تشغيل-المشروع-محلياً)
5. [البيانات الحية: الأسعار والأخبار](#البيانات-الحية-الأسعار-والأخبار)
6. [رفع المشروع على GitHub](#رفع-المشروع-على-github)
7. [النشر على Vercel](#النشر-على-vercel)
8. [النشر على Netlify](#النشر-على-netlify)
9. [النشر على GitHub Pages](#النشر-على-github-pages)
10. [ربط الدومين الخاص](#ربط-الدومين-الخاص)
11. [خطة التطوير المستقبلية - TODO](#خطة-التطوير-المستقبلية)

---

## نظرة عامة

**التقنيات المستخدمة:**

- **Next.js 14** (App Router) — لإطار عمل احترافي قابل للتطوير.
- **TypeScript** — لكود نظيف وآمن.
- **Tailwind CSS** — لتصميم سريع ومتسق.
- **خطوط عربية:** IBM Plex Sans Arabic + Cairo + IBM Plex Mono.
- **دعم RTL كامل** عبر `dir="rtl"` و `lang="ar"`.

**الألوان الأساسية:**

| الاستخدام | اللون | Hex |
|---|---|---|
| الخلفية الأساسية | Ink | `#050B14` |
| كحلي | Navy | `#0A2540` |
| الذهبي (مميز) | Gold | `#D4AF37` |
| أزرق مالي | Electric | `#2563EB` |
| نص فاتح | Neutral 50 | `#F8FAFC` |
| صعود | Bull | `#22C55E` |
| هبوط | Bear | `#EF4444` |

---

## خريطة الموقع

```
الصفحة الرئيسية              /
├── الأخبار الاقتصادية       /news
├── الفوركس                  /forex
├── الأسهم                   /stocks
├── السلع                    /commodities
├── التحليلات                /analysis
├── الأكاديمية               /academy
│   └── ما هو السوق المالي؟  /academy/what-is-market
├── ركن VIP                  /vip
├── المجتمع                  /community
├── المكتبة الرقمية          /library
├── الشركاء / الأفلييت        /affiliate
├── من نحن                   /about
├── تواصل معنا               /contact
├── سياسة الخصوصية           /privacy
├── الشروط والأحكام          /terms
└── إخلاء المسؤولية          /disclaimer
```

---

## هيكل الملفات

```
vanta-capital/
├── src/
│   ├── app/                      # الصفحات (App Router)
│   │   ├── layout.tsx            # Layout الجذر مع RTL
│   │   ├── globals.css           # تنسيقات عامة
│   │   ├── page.tsx              # الصفحة الرئيسية
│   │   ├── news/page.tsx
│   │   ├── forex/page.tsx
│   │   ├── stocks/page.tsx
│   │   ├── commodities/page.tsx
│   │   ├── analysis/page.tsx
│   │   ├── academy/
│   │   │   ├── page.tsx
│   │   │   └── what-is-market/page.tsx
│   │   ├── vip/page.tsx
│   │   ├── community/page.tsx
│   │   ├── library/page.tsx
│   │   ├── affiliate/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── disclaimer/page.tsx
│   │
│   ├── app/api/                  # Route Handlers (Server-only)
│   │   ├── markets/route.ts      # GET /api/markets
│   │   └── news/route.ts         # GET /api/news
│   │
│   ├── components/               # المكونات المشتركة
│   │   ├── Logo.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx
│   │   ├── MarketTickerCard.tsx
│   │   ├── LiveMarketTicker.tsx  # شريط الأسعار الحي + auto-refresh
│   │   ├── NewsCard.tsx
│   │   ├── LiveNewsList.tsx      # قائمة الأخبار الحية + فلترة
│   │   ├── NewsModal.tsx         # نافذة "اقرأ المزيد" RTL
│   │   ├── RiskNotice.tsx        # تنبيه إخلاء المسؤولية الموحّد
│   │   ├── FeatureCard.tsx
│   │   ├── LessonCard.tsx
│   │   ├── BookCard.tsx
│   │   └── PartnerCard.tsx
│   │
│   ├── lib/                      # طبقة الخدمات (Server-only)
│   │   ├── types.ts              # الأنواع المشتركة
│   │   ├── marketApi.ts          # مزودو الأسعار
│   │   ├── newsApi.ts            # مزودو الأخبار
│   │   └── fallbackData.ts       # البيانات الاحتياطية
│   │
│   └── data/                     # البيانات الثابتة (تعليمية + احتياطية)
│       ├── markets.ts            # تعريفات النوع الأساسي للأسعار
│       ├── news.ts               # الأخبار التعليمية القديمة
│       ├── academy.ts            # الأقسام التعليمية
│       └── library.ts            # الكتب والشركاء وخطط VIP
│
├── public/                       # الملفات الثابتة (شعار، صور...)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## تشغيل المشروع محلياً

### المتطلبات

- **Node.js** نسخة 18.17 أو أحدث ([تنزيل](https://nodejs.org/))
- **npm** (يأتي مع Node.js) أو **pnpm** أو **yarn**
- محرر أكواد مثل [VS Code](https://code.visualstudio.com/)

### خطوات التشغيل

افتح Terminal داخل مجلد المشروع ونفّذ:

```bash
# 1. تثبيت التبعيات (مرة واحدة فقط)
npm install

# 2. تشغيل خادم التطوير
npm run dev

# 3. افتح المتصفح على:
# http://localhost:3000
```

### أوامر مفيدة

```bash
npm run dev      # تشغيل التطوير مع Hot Reload
npm run build    # بناء نسخة الإنتاج
npm run start    # تشغيل نسخة الإنتاج محلياً
npm run lint     # فحص الكود
```

---

## البيانات الحية: الأسعار والأخبار

قسم الأسواق وقسم الأخبار يدعمان الآن البث المباشر عبر مزودين خارجيين، مع طبقة
تجريد قابلة للتبديل وبيانات احتياطية أنيقة عند غياب المفاتيح أو تعطّل المزود.

### كيف يعمل النظام؟

```
المتصفح ──→ /api/markets أو /api/news (Next.js Route Handlers)
              │
              ├─→ src/lib/marketApi.ts  (Finnhub | Twelve Data | mock)
              └─→ src/lib/newsApi.ts    (NewsAPI | GNews | MarketAux | mock)

⚠️ المفاتيح تبقى على الخادم فقط. المتصفح لا يراها أبداً.
```

- مسارات `/api/markets` و `/api/news` تجلب البيانات من المزود المختار وتعيدها
  للواجهة، مع تخزين مؤقت (30 ثانية للأسعار، 5 دقائق للأخبار).
- إذا لم يُضبط مفتاح API أو فشل المزود، يتم عرض بيانات تجريبية مع تنبيه ظاهر:
  *«البيانات المعروضة تجريبية. سيتم تفعيل البث الحي بعد ربط مزود البيانات.»*
- الواجهة تتحدّث تلقائياً: الأسعار كل ~45 ثانية، الأخبار كل 7–10 دقائق.

### المزودون المدعومون

| القسم | القيمة (ENV) | الموقع | ملاحظات |
|-------|--------------|--------|---------|
| الأسعار | `finnhub` | https://finnhub.io | خطة مجانية كافية، تدعم الفوركس والكريبتو والأسهم. |
| الأسعار | `twelvedata` | https://twelvedata.com | يدعم استعلام دفعة واحدة، رموز قياسية مثل `EUR/USD`. |
| الأسعار | `mock` | — | يعرض البيانات التجريبية فقط (الافتراضي). |
| الأخبار | `newsapi` | https://newsapi.org | تصنيف business، باللغة الإنجليزية. |
| الأخبار | `gnews` | https://gnews.io | بديل خفيف لـ NewsAPI. |
| الأخبار | `marketaux` | https://www.marketaux.com | مخصّص للأخبار المالية. |
| الأخبار | `mock` | — | يعرض الأخبار التجريبية فقط (الافتراضي). |

> 💡 يمكن إضافة مزودين جدد بسهولة عبر `src/lib/marketApi.ts` و `src/lib/newsApi.ts`.
> كل مزود مجرّد عبر دالة واحدة تُعيد نفس الشكل المعياري `LiveMarketTick` /
> `LiveNewsItem`.

### المتغيرات المطلوبة

انسخ الملف المثال:

```bash
cp .env.example .env.local
```

ثم عدّل القيم:

```bash
# أسعار الأسواق
MARKET_API_PROVIDER=finnhub          # أو twelvedata أو mock
MARKET_API_KEY=YOUR_FINNHUB_KEY

# الأخبار
NEWS_API_PROVIDER=newsapi            # أو gnews أو marketaux أو mock
NEWS_API_KEY=YOUR_NEWSAPI_KEY
```

### إضافة المفاتيح في Vercel

1. افتح مشروعك في [Vercel Dashboard](https://vercel.com/dashboard).
2. **Settings → Environment Variables**.
3. أضف كل مفتاح من المتغيرات الأربعة أعلاه (Production + Preview + Development).
4. بعد الحفظ، أعد النشر (**Deployments → Redeploy**).

> 🛡️ المفاتيح تبقى على الخادم. لا تستخدم البادئة `NEXT_PUBLIC_` مع مفاتيح APIs،
> لأنها ستُسرَّب إلى المتصفح. اتركها بدون بادئة كما هي.

### اختبار محلياً

```bash
# 1) شغّل المشروع بدون مفاتيح — ستظهر البيانات التجريبية مع تنبيه واضح
npm run dev

# 2) أضف مفاتيحك في .env.local وأعد التشغيل لرؤية البث الحي
npm run dev
```

نقاط نهاية الاختبار المباشر:

```
http://localhost:3000/api/markets
http://localhost:3000/api/news
```

كلاهما يُرجع JSON يحتوي `data`، `source: "live" | "fallback"`، `provider`،
و `fetchedAt`.

### ⚠️ تنبيه قانوني

المعلومات والأسعار المعروضة لأغراض تعليمية وإخبارية فقط، وليست توصية مالية أو
دعوة للبيع أو الشراء. الأسعار قد تتأخر حسب مزود البيانات.

---

## رفع المشروع على GitHub

### الخطوة 1: إنشاء مستودع جديد

1. افتح [github.com](https://github.com) وسجّل دخولك.
2. اضغط على زر **+** في الأعلى → **New repository**.
3. اختر اسماً مثل `vanta-capital`.
4. اجعله **Public** (أو Private حسب رغبتك).
5. **لا تضف** README أو .gitignore (لأنهما موجودان في المشروع).
6. اضغط **Create repository**.

### الخطوة 2: رفع الكود

افتح Terminal داخل مجلد المشروع ونفّذ:

```bash
# إعداد Git محلياً (مرة واحدة فقط لو لم تفعلها قبل)
git config --global user.name "اسمك"
git config --global user.email "بريدك@example.com"

# تهيئة Git داخل المجلد
git init
git add .
git commit -m "Initial commit: Vanta Capital site"

# ربط بالمستودع البعيد (استبدل YOUR_USERNAME باسم حسابك)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vanta-capital.git
git push -u origin main
```

عند الطلب، أدخل بيانات GitHub أو استخدم **Personal Access Token** بدلاً من كلمة المرور (موصى به).

### تحديثات لاحقة

بعد أي تعديل، نفّذ:

```bash
git add .
git commit -m "وصف التعديل"
git push
```

---

## النشر على Vercel

**Vercel** هي منصة الشركة المطوّرة لـ Next.js — أسهل وأسرع طريقة للنشر.

### خطوات النشر

1. اذهب إلى [vercel.com](https://vercel.com) وسجّل دخولك بحساب GitHub.
2. اضغط **Add New... → Project**.
3. اختر مستودع `vanta-capital`.
4. Vercel سيكتشف Next.js تلقائياً — لا تغيّر أي إعدادات.
5. اضغط **Deploy**.
6. خلال 1-2 دقيقة، سيكون موقعك متاحاً على رابط مثل:
   `https://vanta-capital.vercel.app`

### ميزات Vercel المجانية

- HTTPS تلقائي.
- نشر تلقائي عند كل push للمستودع.
- معاينات لكل Pull Request.
- CDN عالمي سريع.
- مجاناً للمشاريع الشخصية.

---

## النشر على Netlify

البديل الجيد لـ Vercel.

1. اذهب إلى [netlify.com](https://netlify.com) وسجّل دخول.
2. **Add new site → Import an existing project → GitHub**.
3. اختر مستودع `vanta-capital`.
4. الإعدادات:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. اضغط **Deploy site**.

> ملاحظة: لتطبيقات Next.js مع SSR، Vercel أبسط وأسرع. Netlify أفضل لمشاريع SSG ثابتة بحتة.

---

## النشر على GitHub Pages

GitHub Pages يدعم فقط المواقع الثابتة (Static)، لذا نحتاج لتفعيل Static Export.

### الخطوة 1: تعديل `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/vanta-capital', // اسم المستودع
  trailingSlash: true,
};

export default nextConfig;
```

### الخطوة 2: بناء الموقع

```bash
npm run build
```

سيتم إنشاء مجلد `out/` يحتوي على ملفات HTML/CSS/JS الثابتة.

### الخطوة 3: نشر على GitHub Pages

أسهل طريقة عبر GitHub Actions. أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - id: deployment
        uses: actions/deploy-pages@v4
```

ثم فعّل GitHub Pages من إعدادات المستودع:
**Settings → Pages → Source: GitHub Actions**.

> ⚠️ **توصية:** للمشاريع المالية الجادة، **Vercel أفضل بكثير** من GitHub Pages لأنه يدعم SSR وسيسمح لاحقاً بربط APIs ديناميكية للأسعار والأخبار.

---

## ربط الدومين الخاص

### مع Vercel (الأسهل)

1. اشترِ دومين من [Namecheap](https://namecheap.com) أو [Google Domains](https://domains.google) أو [Cloudflare](https://cloudflare.com).
2. في Vercel: **Project → Settings → Domains**.
3. أضف الدومين (مثلاً `vantacapital.com`).
4. Vercel سيعطيك سجلات DNS لإضافتها عند مزود الدومين:
   - **Type:** `A` ← **Value:** `76.76.21.21`
   - **Type:** `CNAME` (للنطاق الفرعي www) ← **Value:** `cname.vercel-dns.com`
5. انتظر 5 دقائق - 24 ساعة لانتشار DNS.
6. Vercel سيُصدر شهادة SSL مجانية تلقائياً.

### مع Cloudflare (موصى به للسرعة)

1. أضف دومينك إلى [Cloudflare](https://cloudflare.com) (مجاناً).
2. غيّر Nameservers عند مزود الدومين إلى Cloudflare.
3. أضف نفس السجلات (A + CNAME) في Cloudflare.
4. فعّل **Proxy** للسرعة الإضافية و DDoS protection.

---

## خطة التطوير المستقبلية

النسخة الحالية = موقع جاهز للنشر بمحتوى تجريبي. الخطوات القادمة:

### 🔌 المرحلة 1: ربط APIs

- [ ] **أسعار الأسواق المباشرة:** Alpha Vantage / Twelve Data / Finnhub
- [ ] **الأخبار الاقتصادية:** NewsAPI / Trading Economics / Financial Modeling Prep
- [ ] **التقويم الاقتصادي:** Investing.com API أو Trading Economics
- [ ] إضافة Server Components لجلب البيانات بشكل آمن
- [ ] Caching مع Next.js لتقليل تكاليف API

### 💳 المرحلة 2: نظام عضويات VIP

- [ ] قاعدة بيانات (Supabase / PostgreSQL)
- [ ] نظام تسجيل دخول (Supabase Auth / NextAuth.js)
- [ ] بوابة دفع: **Stripe** (دولي) أو **Paymob** (مصر) أو **Tap Payments** (الخليج)
- [ ] صفحات محمية للأعضاء فقط
- [ ] لوحة تحكم للعضو لإدارة اشتراكه

### 📚 المرحلة 3: المكتبة الرقمية

- [ ] ربط بوابة دفع للكتب: **Gumroad** أو **Payhip** أو **Lemon Squeezy** (الأسهل)
- [ ] أو نظام دفع داخلي مع Stripe + توصيل PDF آلي عبر البريد
- [ ] صفحات منفصلة لكل كتاب مع معاينة
- [ ] نظام تقييمات ومراجعات

### 👥 المرحلة 4: المجتمع

- [ ] ربط Telegram / Discord مباشرة
- [ ] أو منتدى مدمج بـ **Discourse** عبر Subdomain
- [ ] أو حلول مدمجة مع Supabase Realtime

### ⚙️ المرحلة 5: لوحة Admin

- [ ] لوحة تحكم لإدارة المحتوى (Strapi / Sanity / Contentful كـ CMS)
- [ ] إدارة المقالات، الأخبار، الكتب، والأعضاء
- [ ] إحصائيات الزوار والاشتراكات

### 📈 المرحلة 6: تحسينات إضافية

- [ ] **SEO متقدم:** Sitemap.xml، robots.txt، Schema.org
- [ ] **Analytics:** Google Analytics 4 + Vercel Analytics
- [ ] **PWA:** تحويل الموقع لتطبيق قابل للتثبيت
- [ ] **اللغة الإنجليزية:** كنسخة موازية (i18n)
- [ ] **نشرة بريدية:** Mailchimp / ConvertKit / Resend

### ⚠️ ملاحظات قانونية مهمة قبل التشغيل التجاري

- [ ] استشارة محامٍ متخصص لمراجعة الشروط وإخلاء المسؤولية.
- [ ] التأكد من الالتزام بأنظمة هيئات الأسواق المالية في بلد التشغيل (SAMA في السعودية، SCA في الإمارات، إلخ).
- [ ] عدم تقديم خدمات وساطة أو إدارة محافظ بدون تراخيص.
- [ ] إذا استخدمت بوابات دفع، التزم بمتطلبات PCI-DSS.

---

## 🎯 ملاحظات للمطوّر

### إضافة صفحة جديدة

أنشئ مجلداً داخل `src/app/` بالاسم المطلوب، ثم أضف ملف `page.tsx`:

```typescript
// src/app/new-page/page.tsx
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "صفحة جديدة",
};

export default function NewPage() {
  return (
    <>
      <PageHeader title="عنوان الصفحة" />
      <section className="container-custom py-12">
        {/* المحتوى */}
      </section>
    </>
  );
}
```

ثم أضف الرابط في `src/components/Header.tsx` و `Footer.tsx`.

### تخصيص الألوان

عدّل `tailwind.config.ts` في قسم `colors`.

### إضافة بيانات

أضف ملف جديد في `src/data/` مع TypeScript types.

---

## 📝 الترخيص

© 2026 Vanta Capital — جميع الحقوق محفوظة.

---

## 🤝 الدعم

أي سؤال أو ملاحظة؟ افتح Issue على GitHub أو تواصل معنا عبر صفحة "تواصل معنا" في الموقع.

**صُمّم بعناية للقارئ العربي 🌙**
