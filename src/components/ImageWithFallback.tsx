"use client";

import { useState, type ReactNode } from "react";

/**
 * מציג ויזואל SVG מקצועי כברירת מחדל (תמיד נראה מיידית),
 * ואם קיימת תמונה אמיתית באותו נתיב ב-public - היא נטענת ומופיעה מעליו ב-fade.
 * כך אין "הבהוב" של תיבה ריקה, והעלאת תמונה אמיתית משדרגת אוטומטית את הוויזואל.
 *
 * הערה: ה-fallback וה-img אמורים שניהם להיות ממוקמים absolute inset-0
 * בתוך הורה relative בעל מימדים (כפי שמוגדר ברכיבים הקוראים).
 */
export function ImageWithFallback({
  src,
  alt,
  imgClassName = "",
  fallback,
  eager = false,
}: {
  src: string;
  alt: string;
  imgClassName?: string;
  fallback: ReactNode;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <>
      {fallback}
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`${imgClassName} transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </>
  );
}
