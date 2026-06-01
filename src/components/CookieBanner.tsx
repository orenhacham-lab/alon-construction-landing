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
      className="fixed bottom-0 inset-x-0 z-50 bg-navy-900 text-white shadow-2xl"
    >
      <div className="container-px flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-navy-100/90">
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
          className="shrink-0 rounded-xl bg-teal-500 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
        >
          הבנתי, אישור
        </button>
      </div>
    </div>
  );
}
