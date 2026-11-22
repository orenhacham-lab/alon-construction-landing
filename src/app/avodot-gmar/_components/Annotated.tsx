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

/** עוטף שממתין לכניסה למסך ואז "משרטט" את קווי ההפניה */
export function useDrawOnView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(false);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, armed };
}

export function CalloutLayer({ callouts }: { callouts: Callout[] }) {
  return (
    <>
      {callouts.map((c, i) => (
        <CalloutPin key={c.label} callout={c} index={i} />
      ))}
    </>
  );
}

function CalloutPin({ callout, index }: { callout: Callout; index: number }) {
  const len = callout.length ?? 72;
  const toLeft = callout.side === "left";
  const delay = `${180 + index * 160}ms`;

  return (
    <div
      className="pointer-events-none absolute"
      style={{ left: `${callout.x}%`, top: `${callout.y}%` }}
      aria-hidden="true"
    >
      <span className="absolute -left-[7px] -top-[7px] block h-[14px] w-[14px] rounded-full border-[3px] border-white bg-teal-500 shadow-[0_2px_8px_rgba(10,30,52,0.35)]" />
      <span
        className="gm-leader absolute top-0 block h-px bg-white shadow-[0_1px_2px_rgba(10,30,52,0.4)]"
        style={{
          width: len,
          [toLeft ? "right" : "left"]: 7,
          transformOrigin: toLeft ? "right center" : "left center",
          transitionDelay: delay,
        }}
      />
      <span
        className="gm-label absolute -top-[15px] whitespace-nowrap rounded-md bg-white/95 px-2.5 py-1.5 text-[13px] font-bold leading-none text-navy-900 shadow-[0_4px_14px_-4px_rgba(10,30,52,0.35)]"
        style={{
          [toLeft ? "right" : "left"]: len + 10,
          transitionDelay: `calc(${delay} + 420ms)`,
        }}
      >
        {callout.label}
      </span>
    </div>
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
}: {
  src: string;
  alt: string;
  callouts: Callout[];
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
  priority?: boolean;
}) {
  const { ref, armed } = useDrawOnView<HTMLDivElement>();
  return (
    <div ref={ref} data-armed={armed} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`block h-full w-full object-cover ${imgClassName}`}
      />
      <div className="absolute inset-0 hidden md:block">
        <CalloutLayer callouts={callouts} />
      </div>
      {children}
    </div>
  );
}
