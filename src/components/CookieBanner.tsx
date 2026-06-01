"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="הודעת עוגיות"
      className={[
        "fixed z-50 bg-navy-900/95 text-white shadow-2xl backdrop-blur-sm",
        // מובייל: ריבוע קטן בצד שמאל מעל הבר התחתון
        "bottom-16 left-3 w-64 rounded-2xl p-4",
        // דסקטופ: כרטיס קומפקטי בפינה שמאל תחתון
        "lg:bottom-6 lg:left-24 lg:w-80 lg:rounded-2xl lg:p-5",
      ].join(" ")}
    >
      <p className="text-xs leading-relaxed text-navy-100/90 lg:text-sm">
        אנו משתמשים בעוגיות. המשך השימוש באתר מהווה הסכמה לשימוש בהן בהתאם
        ל
        <Link
          href="/privacy"
          className="font-semibold text-teal-300 underline underline-offset-2 hover:text-teal-200 transition-colors"
        >
          מדיניות הפרטיות
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-3 w-full rounded-xl bg-teal-500 py-1.5 text-xs font-bold text-white transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400 lg:py-2 lg:text-sm"
      >
        אישור
      </button>
    </div>
  );
}
