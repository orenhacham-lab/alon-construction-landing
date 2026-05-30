"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";

/**
 * לוגו המותג.
 * משתמש בקובץ הלוגו המקורי מתיקיית public אם הועלה
 * (logo-original.svg או logo-original.png), ונופל חזרה ל-SVG המובנה אם אין קובץ.
 * שומר על יחס גובה-רוחב (object-contain) - אינו מותח ואינו חותך את הלוגו.
 */
const SOURCES = ["/logo-original.svg", "/logo-original.png"];

export function BrandLogo({
  variant = "header",
  imgClassName = "h-10 w-auto",
  showTagline = false,
}: {
  variant?: "header" | "footer";
  imgClassName?: string;
  showTagline?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <Logo
        tone={variant === "footer" ? "dark" : "light"}
        showTagline={showTagline}
        markClassName={
          variant === "footer" ? "h-12 w-12" : "h-9 w-9 lg:h-11 lg:w-11"
        }
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  const img = (
    <img
      src={SOURCES[idx]}
      alt='אלון עבודות בניה בע"מ'
      className={`${imgClassName} object-contain`}
      onError={() => {
        if (idx < SOURCES.length - 1) setIdx(idx + 1);
        else setFailed(true);
      }}
    />
  );

  // בפוטר (רקע כהה) - הלוגו המקורי מוצג על שבב לבן לקריאות מיטבית
  if (variant === "footer") {
    return (
      <span className="inline-flex rounded-xl bg-white p-2.5 shadow-soft">
        {img}
      </span>
    );
  }
  return img;
}
