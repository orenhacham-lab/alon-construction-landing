"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Span = [number, number];
type Row = { trade: string; contractor: string; before: Span; after: Span };

const ROWS: Row[] = [
  { trade: "שלד", contractor: "קבלן שלד", before: [0, 18], after: [0, 18] },
  { trade: "גבס", contractor: "גבסן", before: [28, 44], after: [18, 32] },
  { trade: "ריצוף", contractor: "רצף", before: [53, 69], after: [32, 48] },
  { trade: "עבודות עץ", contractor: "נגר", before: [77, 88], after: [48, 59] },
  { trade: "צבע וגימורים", contractor: "צבעי", before: [94, 100], after: [59, 70] },
];

const BLUE = "#4E769F";
const LEAF = "#2FAE7E";

/** מהירויות: מיזוג אוטומטי אחד ארוך, לחיצות קצרות, חזרה אחורה מהירה מכולן */
const TIMING = {
  auto: { dur: 1100, stagger: 90 },
  click: { dur: 520, stagger: 40 },
  back: { dur: 380, stagger: 30 },
};

export function ScheduleCompare() {
  const [unified, setUnified] = useState(false);
  const [timing, setTiming] = useState(TIMING.auto);
  const touched = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setUnified(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (touched.current) return;
        if (entry.intersectionRatio >= 0.6) {
          timer = setTimeout(() => {
            if (touched.current) return;
            setTiming(TIMING.auto);
            setUnified(true);
            touched.current = true;
            io.disconnect();
          }, 500);
        } else {
          clearTimeout(timer);
        }
      },
      { threshold: [0, 0.6] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  function choose(v: boolean) {
    touched.current = true;
    if (v === unified) return;
    setTiming(v ? TIMING.click : TIMING.back);
    setUnified(v);
  }

  const lastDelay = (ROWS.length - 1) * timing.stagger;
  const end = unified ? ROWS[ROWS.length - 1].after[1] : 100;
  const vars = { "--gm-dur": `${timing.dur}ms` } as CSSProperties;

  return (
    <div ref={ref} style={vars}>
      <div
        role="group"
        aria-label="השוואת לוחות זמנים"
        className="relative inline-grid grid-cols-2 rounded-full border border-white/15 bg-white/5 p-1"
      >
        <span
          aria-hidden="true"
          className="gm-ease absolute inset-y-1 right-1 w-[calc(50%-0.25rem)] rounded-full transition-[transform,background-color] duration-200"
          style={{
            transform: unified ? "translateX(-100%)" : "translateX(0)",
            backgroundColor: unified ? LEAF : "#fff",
          }}
        />
        {[
          { v: false, label: "חמישה קבלנים" },
          { v: true, label: "קבלן אחד" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={unified === o.v}
            onClick={() => choose(o.v)}
            className={`relative z-10 rounded-full px-5 py-2 text-sm font-bold transition-colors duration-150 ${
              unified === o.v ? (o.v ? "text-white" : "text-navy-900") : "text-navy-100 hover:text-white"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {unified
          ? "קבלן אחד: חמשת השלבים רצים ברצף אחד, בלי המתנה בין צוות לצוות, והמסירה מוקדמת יותר."
          : "חמישה קבלנים: בין כל שלב לשלב יש תקופת המתנה."}
      </p>

      <div className="mt-8 space-y-3" aria-hidden="true">
        {ROWS.map((row, i) => {
          const [s, e] = unified ? row.after : row.before;
          const prevEnd = i === 0 ? 0 : (unified ? ROWS[i - 1].after : ROWS[i - 1].before)[1];
          const delay = `${i * timing.stagger}ms`;
          return (
            <div key={row.trade} className="grid grid-cols-[6.5rem_1fr] items-center gap-4 sm:grid-cols-[8rem_1fr]">
              <span className="text-sm font-semibold leading-tight text-navy-100 sm:text-base">
                {row.trade}
                <span className="relative block h-4 text-xs font-medium text-navy-300 sm:hidden">
                  <Swap show={!unified} delay={delay}>{row.contractor}</Swap>
                  <Swap show={unified} delay={delay}>אלון</Swap>
                </span>
              </span>
              <div className="gm-track relative h-11 rounded-md bg-white/[0.04]">
                {i > 0 && (
                  <span
                    className="gm-gap absolute inset-y-1.5 rounded-sm"
                    style={{ insetInlineStart: `${prevEnd}%`, width: `${Math.max(s - prevEnd, 0)}%`, transitionDelay: delay }}
                  />
                )}
                <span
                  className="gm-bar absolute inset-y-0 overflow-hidden rounded-md"
                  style={{
                    insetInlineStart: `${s}%`,
                    width: `${e - s}%`,
                    backgroundColor: unified ? LEAF : BLUE,
                    transitionDelay: delay,
                  }}
                >
                  <span className="relative hidden h-full text-sm font-bold text-white sm:block">
                    <Swap show={!unified} delay={delay} className="px-3 leading-[2.75rem]">
                      {row.before[1] - row.before[0] >= 11 ? row.contractor : ""}
                    </Swap>
                    <Swap show={unified} delay={delay} className="px-3 leading-[2.75rem]">
                      {row.after[1] - row.after[0] >= 8 ? "אלון" : ""}
                    </Swap>
                  </span>
                </span>
              </div>
            </div>
          );
        })}

        <div className="grid grid-cols-[6.5rem_1fr] items-center gap-4 border-t border-white/15 pt-4 sm:grid-cols-[8rem_1fr]">
          <span className="text-sm font-extrabold text-white sm:text-base">כל הפרויקט</span>
          <div className="gm-track relative h-11 overflow-hidden rounded-md bg-white/[0.04]">
            <span
              className="absolute inset-y-0 rounded-md bg-leaf transition-opacity duration-200"
              style={{
                insetInlineStart: 0,
                width: `${ROWS[ROWS.length - 1].after[1]}%`,
                opacity: unified ? 1 : 0,
                transitionDelay: unified ? `calc(${lastDelay}ms + var(--gm-dur) * 0.8)` : "0ms",
              }}
            />
            {ROWS.map((row, i) => {
              const [s, e] = unified ? row.after : row.before;
              const prevEnd = i === 0 ? 0 : (unified ? ROWS[i - 1].after : ROWS[i - 1].before)[1];
              const delay = `${lastDelay / 2}ms`;
              return (
                <span key={row.trade}>
                  {i > 0 && (
                    <span
                      className="gm-gap absolute inset-y-1.5"
                      style={{ insetInlineStart: `${prevEnd}%`, width: `${Math.max(s - prevEnd, 0)}%`, transitionDelay: delay }}
                    />
                  )}
                  <span
                    className="gm-bar absolute inset-y-0"
                    style={{
                      insetInlineStart: `${s}%`,
                      width: `${e - s}%`,
                      backgroundColor: unified ? LEAF : BLUE,
                      transitionDelay: delay,
                      ...(i === 0 && { borderStartStartRadius: "0.375rem", borderEndStartRadius: "0.375rem" }),
                      ...(i === ROWS.length - 1 && { borderStartEndRadius: "0.375rem", borderEndEndRadius: "0.375rem" }),
                    }}
                  />
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-[6.5rem_1fr] gap-4 sm:grid-cols-[8rem_1fr]">
          <span />
          <div className="relative h-8">
            <span
              className="gm-bar absolute -top-[22rem] bottom-0 w-0"
              style={{ insetInlineStart: `${end}%`, transitionDelay: `${lastDelay}ms` }}
            >
              <span className="absolute left-0 top-0 h-[calc(100%-1.5rem)] w-px bg-teal-400/70" />
              <span className="absolute bottom-1 left-1.5 whitespace-nowrap text-xs font-bold text-teal-300">
                מסירה
              </span>
            </span>
            <span className="absolute bottom-1 text-xs text-navy-200" style={{ insetInlineStart: 0 }}>
              התחלה
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-navy-300">המחשה של עיקרון העבודה, לא נתונים של פרויקט מסוים.</p>
    </div>
  );
}

/** החלפת תווית אחרי שרוב התנועה הסתיימה */
function Swap({
  show,
  delay,
  className = "",
  children,
}: {
  show: boolean;
  delay: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`gm-swap absolute inset-0 block truncate ${className}`}
      style={{
        opacity: show ? 1 : 0,
        transitionDelay: show ? `calc(${delay} + var(--gm-dur) * 0.6)` : `calc(${delay} + var(--gm-dur) * 0.5)`,
      }}
    >
      {children}
    </span>
  );
}
