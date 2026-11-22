"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type Callout = {
  x: number;
  y: number;
  label: string;
  /** הצד הפיזי שאליו נמתח קו ההפניה */
  side: "left" | "right";
  length?: number;
};

type Phase = "static" | "armed" | "drawn";

/**
 * "משרטט" את ההערות כשהתמונה נכנסת למסך.
 * תמונה שכבר נראית בטעינה נשארת סטטית; המעברים מופעלים רק אחרי ההסתרה,
 * כך שאין "מחיקה" נראית של הקווים בזמן ההידרציה.
 */
function useDrawOnView<T extends HTMLElement>(threshold = 0.45) {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
    setPhase("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("drawn");
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, phase };
}

const byY = (cs: Callout[]) => [...cs].sort((a, b) => a.y - b.y);

export function CalloutLayer({ callouts }: { callouts: Callout[] }) {
  return (
    <>
      {byY(callouts).map((c, i) => (
        <CalloutPin key={c.label} callout={c} index={i} />
      ))}
    </>
  );
}

function CalloutPin({ callout, index }: { callout: Callout; index: number }) {
  const len = callout.length ?? 72;
  const toLeft = callout.side === "left";
  const beat = index * 90;

  return (
    <div
      className="pointer-events-none absolute"
      style={{ left: `${callout.x}%`, top: `${callout.y}%` }}
      aria-hidden="true"
    >
      <span
        className="gm-pin absolute -left-[7px] -top-[7px] block h-[14px] w-[14px] rounded-full border-[3px] border-white bg-teal-500 shadow-[0_2px_8px_rgba(10,30,52,0.35)]"
        style={{ transitionDelay: `${beat}ms` }}
      />
      <span
        className="gm-leader absolute top-0 block h-px bg-white shadow-[0_1px_2px_rgba(10,30,52,0.4)]"
        style={{
          width: len,
          [toLeft ? "right" : "left"]: 7,
          transformOrigin: toLeft ? "right center" : "left center",
          transitionDelay: `${beat + 120}ms`,
        }}
      />
      <span
        className="gm-label absolute -top-[15px] whitespace-nowrap rounded-md bg-white/95 px-2.5 py-1.5 text-[13px] font-bold leading-none text-navy-900 shadow-[0_4px_14px_-4px_rgba(10,30,52,0.35)]"
        style={{
          [toLeft ? "right" : "left"]: len + 10,
          transitionDelay: `${beat + 370}ms`,
        }}
      >
        {callout.label}
      </span>
    </div>
  );
}

/** מובייל: נקודות ממוספרות על התמונה ומקרא מתחתיה */
function NumberedPins({ callouts }: { callouts: Callout[] }) {
  return (
    <>
      {byY(callouts).map((c, i) => (
        <span
          key={c.label}
          aria-hidden="true"
          className="gm-pin absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-teal-500 text-[12px] font-extrabold tabular-nums text-white shadow-[0_2px_8px_rgba(10,30,52,0.4)]"
          style={{ left: `${c.x}%`, top: `${c.y}%`, transitionDelay: `${i * 90}ms` }}
        >
          {i + 1}
        </span>
      ))}
    </>
  );
}

export function CalloutLegend({ callouts, className = "" }: { callouts: Callout[]; className?: string }) {
  return (
    <ol className={`flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-semibold text-navy-800 ${className}`}>
      {byY(callouts).map((c, i) => (
        <li key={c.label} className="flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-[11px] font-extrabold tabular-nums text-white">
            {i + 1}
          </span>
          {c.label}
        </li>
      ))}
    </ol>
  );
}

export function SimulationTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute bottom-2.5 left-3 rounded bg-navy-950/60 px-2 py-1 text-[11px] font-semibold leading-none text-white backdrop-blur-sm ${className}`}
    >
      הדמיה להמחשה
    </span>
  );
}

export function AnnotatedImage({
  src,
  alt,
  callouts,
  className = "",
  imgClassName = "",
  children,
  priority = false,
  mobilePins = true,
  legendClassName = "",
  mobileSrc,
  mobileCallouts,
}: {
  src: string;
  alt: string;
  callouts: Callout[];
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
  priority?: boolean;
  mobilePins?: boolean;
  legendClassName?: string;
  /** תמונה וקואורדינטות נפרדות למסכים צרים (מתחת ל-md) */
  mobileSrc?: string;
  mobileCallouts?: Callout[];
}) {
  const { ref, phase } = useDrawOnView<HTMLDivElement>();
  const phoneCallouts = mobileCallouts ?? callouts;
  return (
    <div ref={ref} data-armed={phase === "armed"} data-ready={phase !== "static"}>
      <div className={`relative overflow-hidden ${className}`}>
        <picture>
          {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`block h-full w-full object-cover ${imgClassName}`}
          />
        </picture>
        {callouts.length > 0 && (
          <>
            <div className="absolute inset-0 hidden md:block">
              <CalloutLayer callouts={callouts} />
            </div>
            {mobilePins && (
              <div className="absolute inset-0 md:hidden">
                <NumberedPins callouts={phoneCallouts} />
              </div>
            )}
          </>
        )}
        {children}
      </div>
      {mobilePins && callouts.length > 0 && (
        <CalloutLegend callouts={phoneCallouts} className={`mt-3 md:hidden ${legendClassName}`} />
      )}
    </div>
  );
}
