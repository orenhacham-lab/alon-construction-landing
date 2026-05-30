import { ShieldIcon, CheckCircleIcon } from "@/components/icons";

/**
 * ויזואל ה-Hero: איור אדריכלי וקטורי של מבנה מגורים בשיקום עם פיגומים
 * ומנוף, בתוספת תגיות אמון צפות. נבנה ב-SVG/CSS - חד, מהיר וללא תלות בתמונות חיצוניות.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* הילה רכה מאחורי האיור */}
      <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-teal-500/20 blur-3xl" />

      <svg
        viewBox="0 0 560 600"
        className="w-full drop-shadow-2xl"
        role="img"
        aria-label="איור של בניין מגורים בתהליך שיקום עם פיגומים ומנוף"
      >
        <defs>
          <linearGradient id="bld" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1C3E63" />
            <stop offset="1" stopColor="#0F2A47" />
          </linearGradient>
          <linearGradient id="bld-new" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#33597F" />
            <stop offset="1" stopColor="#234A6E" />
          </linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#19697A" />
            <stop offset="1" stopColor="#0B2F3A" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#13314F" />
            <stop offset="1" stopColor="#0A1E34" />
          </linearGradient>
          <pattern id="netPattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 0 12 12 M12 0 0 12" stroke="#5BD4E0" strokeWidth="0.7" />
          </pattern>
        </defs>

        {/* קרקע */}
        <rect x="0" y="540" width="560" height="60" fill="url(#ground)" />
        <line x1="0" y1="540" x2="560" y2="540" stroke="#34C2D6" strokeOpacity="0.35" strokeWidth="2" />

        {/* אגף נמוך משמאל */}
        <rect x="70" y="320" width="96" height="220" rx="4" fill="url(#bld)" />
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 2 }).map((_, c) => (
            <rect
              key={`a${r}-${c}`}
              x={86 + c * 40}
              y={344 + r * 56}
              width="26"
              height="34"
              rx="3"
              fill="url(#glass)"
            />
          )),
        )}

        {/* מגדל ראשי */}
        <rect x="160" y="80" width="270" height="460" rx="5" fill="url(#bld)" />
        {/* פאנל "אחרי שיקום" - גוון בהיר יותר בצד ימין */}
        <rect x="340" y="80" width="90" height="460" rx="5" fill="url(#bld-new)" opacity="0.85" />
        <line x1="340" y1="80" x2="340" y2="540" stroke="#5BD4E0" strokeOpacity="0.25" strokeWidth="1.5" />

        {/* גג ופרפט */}
        <rect x="152" y="70" width="286" height="16" rx="3" fill="#234A6E" />

        {/* רשת חלונות */}
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => {
            const lit = (r * 4 + c) % 9 === 0;
            return (
              <rect
                key={`w${r}-${c}`}
                x={180 + c * 62}
                y={104 + r * 58}
                width="40"
                height="40"
                rx="4"
                fill={lit ? "#34C2D6" : "url(#glass)"}
                opacity={lit ? 0.9 : 1}
              />
            );
          }),
        )}

        {/* מנוף צריח */}
        <g stroke="#1CA3B8" strokeWidth="4" strokeLinecap="round" fill="none">
          <line x1="470" y1="60" x2="470" y2="540" />
          <line x1="470" y1="64" x2="500" y2="92" />
          <line x1="470" y1="64" x2="440" y2="92" />
        </g>
        <g stroke="#34C2D6" strokeWidth="5" strokeLinecap="round">
          <line x1="250" y1="46" x2="540" y2="46" />
        </g>
        <line x1="470" y1="46" x2="470" y2="60" stroke="#1CA3B8" strokeWidth="4" />
        {/* כבל ועומס */}
        <line x1="300" y1="48" x2="300" y2="150" stroke="#5BD4E0" strokeWidth="2" />
        <rect x="284" y="150" width="32" height="22" rx="3" fill="#34C2D6" />
        {/* משקל נגד */}
        <rect x="512" y="40" width="26" height="14" rx="2" fill="#1CA3B8" />

        {/* פיגומים מעל המגדל */}
        <g opacity="0.95">
          {/* עמודים אנכיים */}
          {[168, 230, 292, 354].map((x) => (
            <line key={`p${x}`} x1={x} y1="92" x2={x} y2="540" stroke="#5BD4E0" strokeWidth="3" />
          ))}
          {/* מסילות אופקיות */}
          {[150, 238, 326, 414, 502].map((y) => (
            <line key={`r${y}`} x1="160" y1={y} x2="362" y2={y} stroke="#34C2D6" strokeWidth="2.5" strokeOpacity="0.8" />
          ))}
          {/* אלכסונים (ייצוב) */}
          {[150, 326, 502].map((y) => (
            <g key={`d${y}`} stroke="#1CA3B8" strokeWidth="1.6" strokeOpacity="0.6">
              <line x1="168" y1={y} x2="230" y2={y + 88} />
              <line x1="292" y1={y} x2="354" y2={y + 88} />
            </g>
          ))}
          {/* פלטפורמות עבודה */}
          {[238, 414].map((y) => (
            <rect key={`pl${y}`} x="162" y={y - 6} width="200" height="7" rx="1.5" fill="#C9D6E2" />
          ))}
          {/* רשת בטיחות (חלק תחתון) */}
          <rect x="168" y="414" width="186" height="88" fill="url(#netPattern)" opacity="0.5" />
        </g>

        {/* פועל זעיר על הפלטפורמה - תחושת קנה מידה ו"מבנה מאוכלס/פעיל" */}
        <g transform="translate(250 214)">
          <rect x="-4" y="0" width="9" height="18" rx="3" fill="#0A1E34" />
          <circle cx="0.5" cy="-5" r="5" fill="#34C2D6" />
        </g>
      </svg>

      {/* תגיות אמון צפות */}
      <div className="absolute -right-2 top-6 animate-float sm:right-2">
        <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-leaf/15 text-leaf">
            <CheckCircleIcon className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-navy-900">עבודה מול רשויות</p>
            <p className="text-xs text-navy-500">וחברות עירוניות</p>
          </div>
        </div>
      </div>

      <div className="absolute -left-1 bottom-16 animate-float [animation-delay:1.5s] sm:left-2">
        <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600">
            <ShieldIcon className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-navy-900">בטיחות מלאה</p>
            <p className="text-xs text-navy-500">בבניינים מאוכלסים</p>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-2 hidden animate-float [animation-delay:0.8s] sm:block">
        <div className="rounded-xl border border-white/15 bg-navy-900/85 px-3.5 py-2 text-white shadow-card backdrop-blur">
          <p className="text-2xl font-extrabold leading-none text-teal-300">+10</p>
          <p className="mt-0.5 text-[0.7rem] text-navy-100/80">בניינים בקיסריה</p>
        </div>
      </div>
    </div>
  );
}
