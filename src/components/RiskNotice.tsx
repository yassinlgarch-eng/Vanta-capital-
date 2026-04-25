// تنبيه قانوني / إخلاء مسؤولية موحّد لقسم الأخبار والأسعار
export default function RiskNotice() {
  return (
    <div className="mt-12 rounded-2xl border border-white/5 bg-ink-900/50 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L1 21h22L12 2zm-1 6h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
          <span className="font-semibold text-neutral-200">
            تنبيه إخلاء مسؤولية:{" "}
          </span>
          المعلومات المعروضة لأغراض تعليمية وإخبارية فقط، وليست توصية مالية أو
          دعوة للبيع أو الشراء. الأسعار قد تتأخر حسب مزود البيانات، والاستثمار
          في الأسواق المالية ينطوي على مخاطر خسارة رأس المال.
        </p>
      </div>
    </div>
  );
}
