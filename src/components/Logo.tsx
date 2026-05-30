import { COMPANY } from "@/lib/constants";

/**
 * סמל העץ של המותג - שחזור וקטורי (SVG) של הלוגו בגווני טורקיז-כחול.
 * נטען מיידית, חד בכל רזולוציה ומשתלב הן על רקע בהיר והן כהה.
 */
function TreeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 60"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="alon-leaf" x1="6" y1="44" x2="50" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1CA3B8" />
          <stop offset="0.55" stopColor="#3A8FBE" />
          <stop offset="1" stopColor="#4C86B8" />
        </linearGradient>
      </defs>
      {/* גזע וענפים */}
      <g stroke="#7C8A99" strokeWidth="3" strokeLinecap="round">
        <path d="M28 56V31" />
        <path d="M28 41 19.5 31.5" />
        <path d="M28 38 37 30" />
        <path d="M28 34 31 27" />
      </g>
      <path d="M24.5 56 28 50.5 31.5 56" stroke="#7C8A99" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* צמרת - אשכול עיגולים בגרדיאנט */}
      <g fill="url(#alon-leaf)">
        <circle cx="29" cy="19" r="13" />
        <circle cx="17.5" cy="25" r="8.5" />
        <circle cx="40.5" cy="25" r="8.5" />
        <circle cx="23" cy="13.5" r="7.5" />
        <circle cx="37" cy="14.5" r="7.5" />
        <circle cx="29" cy="29" r="9.5" />
      </g>
      {/* הדגשת אור עדינה */}
      <circle cx="24" cy="15" r="3.4" fill="#9FE4EE" opacity="0.55" />
    </svg>
  );
}

type LogoProps = {
  tone?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  markClassName?: string;
};

export function Logo({
  tone = "light",
  showTagline = false,
  className = "",
  markClassName = "h-10 w-10",
}: LogoProps) {
  const nameColor = tone === "dark" ? "text-white" : "text-navy-900";
  const subColor = tone === "dark" ? "text-teal-200" : "text-teal-600";
  const taglineColor = tone === "dark" ? "text-navy-100/70" : "text-navy-400";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <TreeMark className={`${markClassName} shrink-0`} />
      <span className="flex flex-col justify-center leading-none">
        <span className="flex items-baseline gap-1">
          <span className={`text-lg font-extrabold tracking-tight sm:text-xl ${nameColor}`}>
            אלון עבודות בניה
          </span>
          <span className={`text-[0.65rem] font-bold ${subColor}`}>בע״מ</span>
        </span>
        {showTagline && (
          <span className={`mt-1 text-xs font-medium ${taglineColor}`}>
            {COMPANY.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
