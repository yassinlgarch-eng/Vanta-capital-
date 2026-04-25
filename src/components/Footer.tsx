import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  أسواق: [
    { href: "/forex", label: "الفوركس" },
    { href: "/stocks", label: "الأسهم" },
    { href: "/commodities", label: "السلع" },
    { href: "/analysis", label: "التحليلات" },
  ],
  تعليم: [
    { href: "/academy", label: "الأكاديمية" },
    { href: "/library", label: "مكتبة الكتب" },
    { href: "/news", label: "الأخبار الاقتصادية" },
    { href: "/vip", label: "ركن VIP" },
  ],
  المنصة: [
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/community", label: "المجتمع" },
    { href: "/affiliate", label: "الشركاء" },
  ],
  قانوني: [
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "الشروط والأحكام" },
    { href: "/disclaimer", label: "إخلاء المسؤولية" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-950">
      {/* خط ذهبي زخرفي علوي */}
      <div className="gold-divider" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {/* القسم البراندينج */}
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
              منصة عربية احترافية للأسواق المالية. نقدّم محتوى تعليمياً
              وإخبارياً مبسطاً يساعدك على فهم ما يحرّك الأسواق.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {/* أيقونات اجتماعية */}
              <SocialIcon label="X / Twitter">
                <path d="M18.244 2H21l-6.6 7.55L22.5 22h-6.823l-4.96-6.61L4.93 22H2l7.052-8.07L1.5 2h6.96l4.49 5.94L18.244 2zm-2.39 18.5h1.74L7.5 3.42H5.65l10.205 17.08z" />
              </SocialIcon>
              <SocialIcon label="Telegram">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </SocialIcon>
              <SocialIcon label="YouTube">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </SocialIcon>
            </div>
          </div>

          {/* أعمدة الروابط */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-neutral-50">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* تحذير المخاطر */}
        <div className="mt-12 rounded-xl border border-bear/20 bg-bear/5 p-5">
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-bear"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L1 21h22L12 2zm0 6l7.5 13h-15L12 8zm-1 4v4h2v-4h-2zm0 5v2h2v-2h-2z" />
            </svg>
            <p className="text-xs leading-relaxed text-neutral-400">
              <span className="font-semibold text-neutral-50">
                تحذير المخاطر:
              </span>{" "}
              التداول في الأسواق المالية ينطوي على مخاطر مرتفعة وقد يؤدي إلى
              خسارة رأس المال كلياً أو جزئياً. جميع المحتويات على هذا الموقع
              لأغراض تعليمية وإخبارية فقط، ولا تُعدّ نصيحة استثمارية شخصية.
              الأداء السابق لا يضمن النتائج المستقبلية.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Vanta Capital — جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-neutral-500">
            صُمّم بعناية للقارئ العربي
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 transition-all hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        {children}
      </svg>
    </a>
  );
}
