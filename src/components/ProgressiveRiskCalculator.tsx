"use client";

import { useMemo, useState } from "react";

type StepKey = "balance" | "risk" | "stop" | "pip";

const steps: Array<{
  key: StepKey;
  number: string;
  title: string;
  helper: string;
  label: string;
  suffix: string;
  placeholder: string;
}> = [
  {
    key: "balance",
    number: "01",
    title: "رصيد الحساب",
    helper: "ابدأ بإدخال رأس المال المتاح في حساب التداول بالدولار الأمريكي.",
    label: "Account Balance",
    suffix: "USD",
    placeholder: "مثال: 1000",
  },
  {
    key: "risk",
    number: "02",
    title: "نسبة المخاطرة",
    helper: "حدد النسبة التي تقبل خسارتها إذا ضرب وقف الخسارة. للمبتدئ، 0.5% إلى 1% أكثر منطقية.",
    label: "Risk Percentage",
    suffix: "%",
    placeholder: "مثال: 1",
  },
  {
    key: "stop",
    number: "03",
    title: "وقف الخسارة بالنقاط",
    helper: "اكتب المسافة بين نقطة الدخول ووقف الخسارة بعدد النقاط Pips.",
    label: "Stop Loss",
    suffix: "Pips",
    placeholder: "مثال: 25",
  },
  {
    key: "pip",
    number: "04",
    title: "قيمة النقطة للوت القياسي",
    helper: "القيمة الافتراضية 10 دولار لكل نقطة للوت قياسي واحد في أغلب أزواج الدولار مثل EUR/USD.",
    label: "Pip Value / Standard Lot",
    suffix: "USD",
    placeholder: "10",
  },
];

type Values = Record<StepKey, string>;

const initialValues: Values = {
  balance: "",
  risk: "",
  stop: "",
  pip: "10",
};

function toNumber(value: string) {
  const normalized = value.replace(",", ".").trim();
  if (!normalized) return NaN;
  return Number(normalized);
}

function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: value === 0 ? 0 : Math.min(digits, 2),
  }).format(value);
}

export default function ProgressiveRiskCalculator() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState<Values>(initialValues);
  const [touched, setTouched] = useState<Record<StepKey, boolean>>({
    balance: false,
    risk: false,
    stop: false,
    pip: false,
  });

  const numeric = useMemo(
    () => ({
      balance: toNumber(values.balance),
      risk: toNumber(values.risk),
      stop: toNumber(values.stop),
      pip: toNumber(values.pip),
    }),
    [values]
  );

  const isValid = {
    balance: Number.isFinite(numeric.balance) && numeric.balance > 0,
    risk: Number.isFinite(numeric.risk) && numeric.risk > 0 && numeric.risk <= 100,
    stop: Number.isFinite(numeric.stop) && numeric.stop > 0,
    pip: Number.isFinite(numeric.pip) && numeric.pip > 0,
  } satisfies Record<StepKey, boolean>;

  const currentStep = steps[activeStep];
  const currentValid = isValid[currentStep.key];
  const allValid = steps.every((step) => isValid[step.key]);

  const result = useMemo(() => {
    if (!allValid) return null;

    const riskAmount = numeric.balance * (numeric.risk / 100);
    const standardLots = riskAmount / (numeric.stop * numeric.pip);

    return {
      riskAmount,
      standardLots,
      miniLots: standardLots * 10,
      microLots: standardLots * 100,
    };
  }, [allValid, numeric.balance, numeric.pip, numeric.risk, numeric.stop]);

  const errorMessage = getErrorMessage(currentStep.key, values[currentStep.key], isValid[currentStep.key]);
  const riskWarning = isValid.risk && numeric.risk > 2;

  function updateValue(key: StepKey, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  function goNext() {
    setTouched((prev) => ({ ...prev, [currentStep.key]: true }));
    if (!currentValid) return;
    setActiveStep((step) => Math.min(step + 1, steps.length - 1));
  }

  function reset() {
    setValues(initialValues);
    setTouched({ balance: false, risk: false, stop: false, pip: false });
    setActiveStep(0);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-950 via-navy/55 to-ink-950 shadow-card">
      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-electric/10 blur-[100px]" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="chip chip-gold">أداة تعليمية</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-50 sm:text-4xl">
              حاسبة حجم الصفقة التدريجية
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
              أدخل المتغيرات خطوة بخطوة حتى تفهم العلاقة بين رصيد الحساب، نسبة المخاطرة، وقف الخسارة، وحجم الصفقة المناسب.
            </p>

            <div className="mt-8 space-y-3">
              {steps.map((step, index) => {
                const completed = isValid[step.key] && index < activeStep;
                const active = index === activeStep;
                return (
                  <button
                    key={step.key}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-right transition-all ${
                      active
                        ? "border-gold/40 bg-gold/10"
                        : completed
                        ? "border-bull/25 bg-bull/5 hover:border-bull/40"
                        : "border-white/5 bg-white/[0.03] hover:border-gold/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border font-mono text-xs font-bold ${
                        active
                          ? "border-gold/40 text-gold"
                          : completed
                          ? "border-bull/30 text-bull"
                          : "border-white/10 text-neutral-500"
                      }`}
                    >
                      {completed ? "✓" : step.number}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-base font-bold text-neutral-50">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-neutral-500">
                        {step.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/5 bg-ink-900/70 p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-sm font-bold text-gold">{currentStep.number}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-neutral-50">
                    {currentStep.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400">
                    {currentStep.helper}
                  </p>
                </div>
                <div className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-xs text-neutral-500">
                  خطوة {activeStep + 1} من {steps.length}
                </div>
              </div>

              <div className="mt-7">
                <label className="mb-2 block text-xs font-semibold text-neutral-300" htmlFor={currentStep.key}>
                  {currentStep.label}
                </label>
                <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 transition-colors focus-within:border-gold/50">
                  <input
                    id={currentStep.key}
                    inputMode="decimal"
                    value={values[currentStep.key]}
                    onChange={(e) => updateValue(currentStep.key, e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, [currentStep.key]: true }))}
                    placeholder={currentStep.placeholder}
                    className="min-w-0 flex-1 bg-transparent px-4 py-4 font-mono text-lg text-neutral-50 outline-none placeholder:text-neutral-700"
                    dir="ltr"
                  />
                  <span className="grid min-w-20 place-items-center border-r border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-gold">
                    {currentStep.suffix}
                  </span>
                </div>

                {touched[currentStep.key] && !currentValid && (
                  <p className="mt-3 rounded-xl border border-bear/20 bg-bear/5 p-3 text-sm leading-relaxed text-red-200">
                    {errorMessage}
                  </p>
                )}

                {currentStep.key === "risk" && riskWarning && (
                  <p className="mt-3 rounded-xl border border-bear/30 bg-bear/10 p-3 text-sm leading-relaxed text-red-100">
                    تنبيه: مخاطرة أعلى من 2% قد تكون عدوانية جداً للمبتدئين، خصوصاً مع الرافعة المالية أو سلسلة خسائر متتالية.
                  </p>
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((step) => Math.max(step - 1, 0))}
                  disabled={activeStep === 0}
                  className="btn-outline disabled:cursor-not-allowed disabled:opacity-40"
                >
                  السابق
                </button>
                {activeStep < steps.length - 1 ? (
                  <button type="button" onClick={goNext} className="btn-gold">
                    التالي
                  </button>
                ) : (
                  <button type="button" onClick={() => setTouched({ balance: true, risk: true, stop: true, pip: true })} className="btn-gold">
                    عرض النتيجة
                  </button>
                )}
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-neutral-500 transition-colors hover:text-gold"
                >
                  إعادة ضبط
                </button>
              </div>

              <div className="mt-8 border-t border-white/5 pt-7">
                {!allValid && (
                  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-sm leading-relaxed text-neutral-400">
                    النتيجة ستظهر بعد إدخال جميع القيم بشكل صحيح. هذه الطريقة تمنع إظهار أرقام ناقصة أو مضللة.
                  </div>
                )}

                {result && (
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <ResultCard
                        label="المبلغ المعرض للخطر"
                        value={`$${formatNumber(result.riskAmount, 2)}`}
                        helper="هذا هو المبلغ التقريبي الذي قد تخسره إذا ضرب وقف الخسارة."
                      />
                      <ResultCard
                        label="حجم الصفقة القياسي"
                        value={`${formatNumber(result.standardLots, 4)} Lots`}
                        helper="الحجم التقريبي باللوت القياسي Standard Lots."
                      />
                      <ResultCard
                        label="Mini Lots"
                        value={`${formatNumber(result.miniLots, 2)}`}
                        helper="القيمة المكافئة بوحدة الميني لوت."
                      />
                      <ResultCard
                        label="Micro Lots"
                        value={`${formatNumber(result.microLots, 2)}`}
                        helper="القيمة المكافئة بوحدة المايكرو لوت."
                      />
                    </div>

                    <div className="rounded-2xl border border-gold/20 bg-gold/5 p-5">
                      <h4 className="font-display text-lg font-bold text-neutral-50">
                        كيف تقرأ النتيجة؟
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                        إذا استخدمت هذه القيم، فإن خسارة وقف الخسارة المفترض تساوي تقريباً نسبة المخاطرة التي أدخلتها. النتيجة تقريبية وتحتاج دائماً لمراجعة شروط الوسيط وقيمة النقطة الفعلية للزوج.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-bear/20 bg-bear/5 p-5">
              <h4 className="font-display text-base font-bold text-red-100">تحذير مخاطر</h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                هذه الحاسبة تعليمية فقط ولا تمثل توصية تداول. قيمة النقطة تختلف حسب الزوج، عملة الحساب، نوع العقد، وشروط الوسيط. تأكد من الأرقام داخل منصة التداول قبل تنفيذ أي صفقة حقيقية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
      <p className="text-xs font-semibold text-neutral-500">{label}</p>
      <p className="mt-2 font-mono text-2xl font-bold text-gold" dir="ltr">
        {value}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-neutral-500">{helper}</p>
    </div>
  );
}

function getErrorMessage(key: StepKey, value: string, valid: boolean) {
  if (valid) return "";
  if (!value.trim()) return "هذا الحقل مطلوب لإكمال الحساب.";

  switch (key) {
    case "balance":
      return "أدخل رصيد حساب أكبر من صفر.";
    case "risk":
      return "أدخل نسبة مخاطرة أكبر من 0 وأقل أو تساوي 100. للمبتدئين يُفضّل 0.5% إلى 1%.";
    case "stop":
      return "أدخل وقف خسارة بالنقاط أكبر من صفر.";
    case "pip":
      return "أدخل قيمة نقطة للوت القياسي أكبر من صفر. القيمة الافتراضية الشائعة هي 10 دولار.";
    default:
      return "قيمة غير صالحة.";
  }
}
