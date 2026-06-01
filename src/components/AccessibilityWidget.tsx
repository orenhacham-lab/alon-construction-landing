"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const STORAGE_KEY = "a11y-settings";

const OPTIONS = [
  { key: "large-text", label: "הגדל טקסט" },
  { key: "small-text", label: "הקטן טקסט" },
  { key: "grayscale", label: "גווני אפור" },
  { key: "high-contrast", label: "ניגודיות גבוהה" },
  { key: "inverted", label: "ניגודיות הפוכה" },
  { key: "light-bg", label: "רקע בהיר" },
  { key: "highlight-links", label: "הדגשת קישורים" },
  { key: "readable-font", label: "פונט קריא" },
] as const;

type OptionKey = (typeof OPTIONS)[number]["key"];
type Settings = Record<OptionKey, boolean>;

const DEFAULT_SETTINGS: Settings = {
  "large-text": false,
  "small-text": false,
  grayscale: false,
  "high-contrast": false,
  inverted: false,
  "light-bg": false,
  "highlight-links": false,
  "readable-font": false,
};

function applyToHtml(settings: Settings) {
  const html = document.documentElement;
  for (const key of Object.keys(settings) as OptionKey[]) {
    html.classList.toggle(`a11y-${key}`, settings[key]);
  }
}

function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* טבעת חיצונית */}
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.4" />
      {/* ראש */}
      <circle cx="24" cy="13.5" r="3.1" fill="currentColor" />
      {/* ידיים פרושות */}
      <path d="M12.5 20 H35.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      {/* גוף */}
      <path d="M24 17.5 V27" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      {/* רגליים פסוקות */}
      <path d="M24 27 L18.5 38 M24 27 L29.5 38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Settings = { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
        setSettings(parsed);
        applyToHtml(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    function onOutsideClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = useCallback((key: OptionKey) => {
    setSettings((prev) => {
      const next = { ...prev };
      if (key === "large-text" && !prev[key]) next["small-text"] = false;
      if (key === "small-text" && !prev[key]) next["large-text"] = false;
      next[key] = !prev[key];
      applyToHtml(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    applyToHtml(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return (
    <div
      ref={panelRef}
      className="fixed z-[45] left-3 top-1/2 -translate-y-1/2"
    >
      {open && (
        <div
          role="dialog"
          aria-label="כלי נגישות"
          className="absolute left-full top-1/2 ml-2 max-h-[85vh] w-64 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-navy-200/60"
        >
          <div className="flex items-center justify-between bg-navy-800 px-4 py-3">
            <span className="text-sm font-bold text-white">כלי נגישות</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגור כלי נגישות"
              className="text-navy-200 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l8 8M6 14l8-8" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 p-3">
            {OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => toggle(key)}
                aria-pressed={settings[key]}
                className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all ${
                  settings[key]
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-navy-100 bg-navy-50 text-navy-700 hover:border-teal-300 hover:bg-teal-50/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="border-t border-navy-100 px-3 pb-3">
            <button
              type="button"
              onClick={reset}
              className="mt-2 w-full rounded-xl border border-navy-200 py-2 text-xs font-bold text-navy-600 hover:bg-navy-50 transition-colors"
            >
              איפוס הגדרות
            </button>
            <Link
              href="/accessibility"
              className="mt-2 block text-center text-[11px] text-teal-600 hover:text-teal-500 underline underline-offset-2"
            >
              הצהרת נגישות
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="פתיחת כלי נגישות"
        aria-expanded={open}
        className={[
          "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400",
          "bg-navy-500/10 text-navy-500/70 ring-1 ring-navy-500/15 backdrop-blur-sm",
          "hover:bg-white/80 hover:text-teal-600 hover:ring-teal-400/50 hover:shadow-md",
          open ? "bg-white/80 text-teal-600 shadow-md" : "",
        ].join(" ")}
      >
        <AccessibilityIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
