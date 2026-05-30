import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "right";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-right";
  const titleColor = tone === "dark" ? "text-white" : "text-navy-900";
  const subColor = tone === "dark" ? "text-navy-100/80" : "text-navy-600";

  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
