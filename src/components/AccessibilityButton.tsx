import Link from "next/link";

function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* ראש */}
      <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
      {/* גוף */}
      <line x1="12" y1="6" x2="12" y2="13" />
      {/* ידיים */}
      <line x1="8" y1="9" x2="16" y2="9" />
      {/* רגל שמאל */}
      <line x1="12" y1="13" x2="9" y2="20" />
      {/* רגל ימין */}
      <line x1="12" y1="13" x2="15" y2="20" />
    </svg>
  );
}

/**
 * כפתור נגישות מינימליסטי — צף, מקשר לדף הצהרת הנגישות.
 * מובייל: מתחת לכפתורי ה-CTA (z-41 כדי לא לחסום), נסתר בדסקטופ.
 * דסקטופ: מוצג בפינה ימין תחתון.
 */
export function AccessibilityButton() {
  return (
    <Link
      href="/accessibility"
      aria-label="הצהרת נגישות"
      title="הצהרת נגישות"
      className={[
        "fixed z-[45] flex items-center justify-center rounded-full transition-all",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400",
        // מובייל: עיגול קטן מעל הבר התחתון, ימין
        "bottom-16 right-3 h-9 w-9",
        "bg-white/80 text-navy-700 shadow-md ring-1 ring-navy-200/60 backdrop-blur-sm",
        "hover:bg-white hover:text-teal-600 hover:ring-teal-400/60",
        // דסקטופ: קצת יותר גדול, פינה ימין
        "lg:bottom-6 lg:right-6 lg:h-10 lg:w-10",
        "lg:bg-white/90 lg:shadow-lg",
      ].join(" ")}
    >
      <AccessibilityIcon className="h-5 w-5 lg:h-5 lg:w-5" />
    </Link>
  );
}
