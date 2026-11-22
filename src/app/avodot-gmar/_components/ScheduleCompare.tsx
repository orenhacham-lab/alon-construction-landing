"use client";

import { useEffect, useRef, useState } from "react";

type Row = { trade: string; contractor: string; before: [number, number]; after: [number, number] };

const ROWS: Row[] = [
  { trade: "שלד", contractor: "קבלן שלד", before: [0, 20], after: [0, 20] },
  { trade: "גבס", contractor: "גבסן", before: [27, 43], after: [20, 34] },
  { trade: "ריצוף", contractor: "רצף", before: [51, 67], after: [34, 50] },
  { trade: "עבודות עץ", contractor: "נגר", before: [74, 86], after: [50, 62] },
  { trade: "צבע וגימורים", contractor: "צבעי", before: [91, 100], after: [62, 72] },
];

export function ScheduleCompare() {
  const [unified, setUnified] = useState(false);
  const touched = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !touched.current) {
          timer = setTimeout(() => {
            if (!touched.current) setUnified(true);
          }, 1300);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  function choose(v: boolean) {
    touched.current = true;
    setUnified(v);
  }

  const end = unified ? ROWS[ROWS.length - 1].after[1] : 100;

  return (
    <div ref={ref}>
      <div
        role="group"
        aria-label="השוואת לוחות זמנים"
        className="inline-flex rounded-full border border-white/15 bg-white/5 p-1"
      >
        {[
          { v: false, label: "חמישה קבלנים" },
          { v: true, label: "קבלן אחד" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={unified === o.v}
            onClick={() => choose(o.v)}
            className={`gm-ease rounded-full px-5 py-2 text-sm font-bold transition-[background-color,color,box-shadow] duration-500 ${
              unified === o.v
                ? o.v
                  ? "bg-leaf text-white shadow-[0_6px_18px_-6px_rgba(47,174,126,0.7)]"
                  : "bg-white text-navy-900"
                : "text-navy-100 hover:text-white"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-3" aria-live="polite">
        <p className="sr-only">
          {unified
            ? "קבלן אחד: חמשת השלבים רצים ברצף אחד, בלי המתנה בין צוות לצוות."
            : "חמישה קבלנים: בין כל שלב לשלב יש תקופת המתנה."}
        </p>
        {ROWS.map((row, i) => {
          const [s, e] = unified ? row.after : row.before;
          const prevEnd = i === 0 ? 0 : (unified ? ROWS[i - 1].after : ROWS[i - 1].before)[1];
          return (
            <div key={row.trade} className="grid grid-cols-[6.5rem_1fr] items-center gap-4 sm:grid-cols-[8rem_1fr]">
              <span className="text-sm font-semibold leading-tight text-navy-100 sm:text-base">
                {row.trade}
                <span className="block text-xs font-medium text-navy-300 sm:hidden">
                  {unified ? "אלון" : row.contractor}
                </span>
              </span>
              <div className="relative h-11 rounded-md bg-white/[0.04]">
                {i > 0 && (
                  <span
                    className="gm-gap absolute inset-y-1.5 rounded-sm"
                    style={{
                      insetInlineStart: `${prevEnd}%`,
                      width: `${Math.max(s - prevEnd, 0)}%`,
                      opacity: unified ? 0 : 1,
                    }}
                  />
                )}
                <span
                  className="gm-bar absolute inset-y-0 flex items-center overflow-hidden rounded-md px-3 text-xs font-bold text-white sm:text-sm"
                  style={{
                    insetInlineStart: `${s}%`,
                    width: `${e - s}%`,
                    backgroundColor: unified ? "#2FAE7E" : "#4E769F",
                    transitionDelay: `${i * 90}ms`,
                  }}
                >
                  <span className="hidden truncate sm:inline">{unified ? "אלון" : row.contractor}</span>
                </span>
              </div>
            </div>
          );
        })}

        <div className="grid grid-cols-[6.5rem_1fr] gap-4 pt-2 sm:grid-cols-[8rem_1fr]">
          <span />
          <div className="relative h-10 border-t border-white/15">
            <span className="gm-bar absolute top-0 h-full w-0" style={{ insetInlineStart: `${end}%` }}>
              <span className="absolute left-0 -top-[18rem] h-[18rem] w-px bg-teal-400/70" />
              <span
                className={`absolute top-1.5 whitespace-nowrap text-xs font-bold text-teal-300 ${
                  unified ? "right-0 translate-x-1/2" : "left-1"
                }`}
              >
                מסירה
              </span>
            </span>
            <span className="absolute top-1.5 text-xs text-navy-200" style={{ insetInlineStart: 0 }}>
              התחלה
            </span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-navy-300">המחשה של עיקרון העבודה, לא נתונים של פרויקט מסוים.</p>
    </div>
  );
}
