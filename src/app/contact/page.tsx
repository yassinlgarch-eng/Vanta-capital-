"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ربط النموذج بخدمة بريد مثل Formspree / Resend / EmailJS
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader
        eyebrow="تواصل معنا"
        title="نحن نسمعك"
        description="سواء كان لديك سؤال، اقتراح، طلب اشتراك في VIP، أو فرصة شراكة — نحن نقرأ كل رسالة ونردّ في أسرع وقت ممكن."
      />

      <section className="container-custom py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* النموذج */}
          <div className="lg:col-span-7">
            <div className="card p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold text-neutral-50">
                أرسل رسالتك
              </h2>
              <p className="mt-2 text-sm text-neutral-400">
                املأ النموذج وسنردّ خلال 24-48 ساعة عمل.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="الاسم الكامل"
                    name="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="البريد الإلكتروني"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold text-neutral-300"
                  >
                    الموضوع
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-gold/50"
                  >
                    <option value="general">سؤال عام</option>
                    <option value="vip">الاشتراك في VIP</option>
                    <option value="library">المكتبة الرقمية</option>
                    <option value="partnership">فرصة شراكة</option>
                    <option value="feedback">ملاحظات أو اقتراحات</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-neutral-300"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full resize-none rounded-lg border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-gold/50"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full sm:w-auto">
                  إرسال الرسالة
                  <svg
                    className="h-4 w-4 flip-rtl"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                  </svg>
                </button>

                {submitted && (
                  <div className="rounded-lg border border-bull/30 bg-bull/10 p-4 text-sm text-bull">
                    ✓ تم استلام رسالتك بنجاح. سنتواصل معك قريباً.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* معلومات التواصل */}
          <aside className="space-y-4 lg:col-span-5">
            <div className="card p-6">
              <h3 className="font-display text-base font-bold text-neutral-50">
                البريد الإلكتروني
              </h3>
              <a
                href="mailto:contact@vantacapital.example"
                className="mt-2 block font-mono text-sm text-gold transition-colors hover:text-gold-light"
                dir="ltr"
              >
                contact@vantacapital.example
              </a>
              <p className="mt-3 text-xs text-neutral-500">
                نرد على البريد خلال 24-48 ساعة عمل.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-base font-bold text-neutral-50">
                المجتمع
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                للنقاش العام مع الأعضاء، يمكنك الانضمام لمجتمعنا على
                Telegram أو Discord.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="#"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-gold/30 hover:text-gold"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-gold/30 hover:text-gold"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-gold/30 hover:text-gold"
                >
                  X / Twitter
                </a>
              </div>
            </div>

            <div className="card border-gold/20 bg-gold/5 p-6">
              <h3 className="font-display text-base font-bold text-gold">
                للشراكات والإعلام
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                إن كنت ممثلاً عن منصة، أداة، أو مؤسسة إعلامية، يرجى التواصل
                عبر البريد المخصص للشراكات.
              </p>
              <a
                href="mailto:partners@vantacapital.example"
                className="mt-3 block font-mono text-sm text-gold"
                dir="ltr"
              >
                partners@vantacapital.example
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold text-neutral-300"
      >
        {label} {required && <span className="text-bear">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-neutral-100 outline-none transition-colors focus:border-gold/50"
      />
    </div>
  );
}
