/**
 * ויזואלים מקצועיים (SVG) המשמשים כ-placeholders איכותיים עד להעלאת תמונות אמיתיות.
 * כל סצנה ייחודית. מזהי gradient ממופתחים בקידומת ייחודית למניעת התנגשות בין SVG-ים.
 */

type SceneProps = { className?: string };

function grid(
  prefix: string,
  x0: number,
  y0: number,
  cols: number,
  rows: number,
  w: number,
  h: number,
  gx: number,
  gy: number,
  fill: string,
  opacity = 0.85,
) {
  const out = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      out.push(
        <rect
          key={`${prefix}-${r}-${c}`}
          x={x0 + c * (w + gx)}
          y={y0 + r * (h + gy)}
          width={w}
          height={h}
          rx={2}
          fill={fill}
          opacity={opacity}
        />,
      );
    }
  }
  return out;
}

const SKY = (id: string) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#13314F" />
    <stop offset="1" stopColor="#0A1E34" />
  </linearGradient>
);

/* ---------- פרויקט 1: נאות גולף קיסריה - מתחם של מספר בניינים ---------- */
export function SceneCaesarea({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>{SKY("cae-sky")}</defs>
      <rect width="400" height="260" fill="url(#cae-sky)" />
      {/* מקבץ בניינים בגבהים משתנים */}
      <g fill="#1C3E63" stroke="#34C2D6" strokeOpacity="0.4">
        <rect x="20" y="150" width="62" height="110" rx="2" />
        <rect x="92" y="110" width="66" height="150" rx="2" />
        <rect x="168" y="84" width="70" height="176" rx="2" />
        <rect x="248" y="124" width="62" height="136" rx="2" />
        <rect x="320" y="160" width="58" height="100" rx="2" />
      </g>
      <g fill="#34C2D6">
        {grid("cae1", 30, 162, 3, 4, 12, 12, 6, 9, "#34C2D6", 0.7)}
        {grid("cae2", 102, 122, 3, 5, 13, 12, 7, 9, "#34C2D6", 0.8)}
        {grid("cae3", 178, 96, 3, 6, 13, 12, 8, 9, "#5BD4E0", 0.85)}
        {grid("cae4", 258, 136, 3, 4, 12, 12, 6, 10, "#34C2D6", 0.7)}
        {grid("cae5", 330, 172, 2, 3, 13, 12, 9, 10, "#34C2D6", 0.6)}
      </g>
      {/* פיגומים על הבניין הגבוה */}
      <g stroke="#5BD4E0" strokeWidth="1.6" strokeOpacity="0.7">
        <line x1="168" y1="84" x2="168" y2="260" />
        <line x1="238" y1="84" x2="238" y2="260" />
        <line x1="168" y1="130" x2="238" y2="130" />
        <line x1="168" y1="190" x2="238" y2="190" />
      </g>
      <line x1="0" y1="259" x2="400" y2="259" stroke="#34C2D6" strokeOpacity="0.5" strokeWidth="2" />
    </svg>
  );
}

/* ---------- פרויקט 2: אזורי חן ת"א - שני מגדלי 11 קומות + הסרת צו מסוכן ---------- */
export function SceneAzoreiChen({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>{SKY("az-sky")}</defs>
      <rect width="400" height="260" fill="url(#az-sky)" />
      <g fill="#1C3E63" stroke="#34C2D6" strokeOpacity="0.4">
        <rect x="70" y="40" width="96" height="220" rx="3" />
        <rect x="210" y="58" width="96" height="202" rx="3" />
      </g>
      <g>
        {grid("az1", 84, 54, 4, 9, 13, 13, 6, 8, "#34C2D6", 0.8)}
        {grid("az2", 224, 72, 4, 8, 13, 13, 6, 8, "#5BD4E0", 0.8)}
      </g>
      {/* פיגום על המגדל השמאלי */}
      <g stroke="#5BD4E0" strokeWidth="1.6" strokeOpacity="0.7">
        <line x1="70" y1="40" x2="70" y2="260" />
        <line x1="166" y1="40" x2="166" y2="260" />
        <line x1="70" y1="100" x2="166" y2="100" />
        <line x1="70" y1="170" x2="166" y2="170" />
      </g>
      {/* תג "צו הוסר" - משולש אזהרה עם וי ירוק */}
      <g transform="translate(330 30)">
        <circle cx="0" cy="0" r="22" fill="#0F2A47" stroke="#2FAE7E" strokeWidth="2" />
        <path d="M-9 -2 L-2 6 L10 -8" stroke="#46C795" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <line x1="0" y1="259" x2="400" y2="259" stroke="#34C2D6" strokeOpacity="0.5" strokeWidth="2" />
    </svg>
  );
}

/* ---------- פרויקט 3: בלפור 2 ת"א - מבנה לשימור בסגנון באוהאוס ---------- */
export function SceneBalfour({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        {SKY("bal-sky")}
        <linearGradient id="bal-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#33597F" />
          <stop offset="1" stopColor="#234A6E" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#bal-sky)" />
      {/* מבנה עם פינה מעוגלת (אופייני לשימור ת"א) */}
      <path d="M130 60 h150 v200 h-190 v-150 a60 60 0 0 1 40 -50 z" fill="url(#bal-wall)" stroke="#5BD4E0" strokeOpacity="0.45" />
      {/* מרפסות אופקיות מעוגלות */}
      <g stroke="#9FE4EE" strokeWidth="3" strokeOpacity="0.55" fill="none">
        <path d="M95 120 h180" />
        <path d="M95 160 h180" />
        <path d="M95 200 h180" />
      </g>
      <g>
        {grid("bal1", 150, 78, 4, 1, 22, 26, 12, 0, "#34C2D6", 0.75)}
        {grid("bal2", 110, 128, 5, 3, 22, 22, 12, 16, "#5BD4E0", 0.7)}
      </g>
      {/* סרט "שימור" */}
      <g transform="translate(300 36)">
        <rect x="-34" y="-14" width="78" height="28" rx="14" fill="#0F2A47" stroke="#34C2D6" strokeWidth="1.5" />
        <text x="5" y="5" textAnchor="middle" fontSize="14" fontWeight="700" fill="#9FE4EE" direction="rtl">שימור</text>
      </g>
      <line x1="0" y1="259" x2="400" y2="259" stroke="#34C2D6" strokeOpacity="0.5" strokeWidth="2" />
    </svg>
  );
}

/* ---------- "לפני": שיקום בטונים / ברזל חשוף ---------- */
export function SceneConcreteBefore({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="conc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C9CFD6" />
          <stop offset="1" stopColor="#9AA6B2" />
        </linearGradient>
        <clipPath id="spall">
          <path d="M150 90 q40 -20 90 10 q30 40 5 90 q-50 30 -100 5 q-25 -55 5 -110 z" />
        </clipPath>
      </defs>
      <rect width="400" height="300" fill="url(#conc)" />
      {/* כתמים / רטיבות */}
      <g fill="#7E8A97" opacity="0.25">
        <ellipse cx="80" cy="60" rx="60" ry="30" />
        <ellipse cx="330" cy="240" rx="70" ry="35" />
      </g>
      {/* אזור התפוררות עם ברזל חשוף */}
      <g clipPath="url(#spall)">
        <rect x="120" y="70" width="170" height="160" fill="#6B7480" />
        <g stroke="#A65A33" strokeWidth="6">
          <line x1="120" y1="110" x2="300" y2="110" />
          <line x1="120" y1="150" x2="300" y2="150" />
          <line x1="120" y1="190" x2="300" y2="190" />
          <line x1="160" y1="70" x2="160" y2="240" />
          <line x1="210" y1="70" x2="210" y2="240" />
          <line x1="255" y1="70" x2="255" y2="240" />
        </g>
        <g stroke="#7C3F22" strokeWidth="2" opacity="0.6">
          <line x1="120" y1="130" x2="300" y2="130" />
          <line x1="120" y1="170" x2="300" y2="170" />
        </g>
      </g>
      <path d="M150 90 q40 -20 90 10 q30 40 5 90 q-50 30 -100 5 q-25 -55 5 -110 z" fill="none" stroke="#5B6470" strokeWidth="2" />
      {/* סדקים */}
      <g stroke="#5B6470" strokeWidth="2.2" fill="none" strokeLinejoin="round">
        <path d="M40 30 l25 40 l-12 28 l30 45" />
        <path d="M360 40 l-30 50 l16 30" />
        <path d="M300 270 l-22 -40" />
      </g>
    </svg>
  );
}

/* ---------- "אחרי": חידוש חזית ---------- */
export function SceneFacadeAfter({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="after-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8F4FA" />
          <stop offset="1" stopColor="#CFE6F0" />
        </linearGradient>
        <linearGradient id="after-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBFDFE" />
          <stop offset="1" stopColor="#E7EEF3" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#after-sky)" />
      {/* בניין מחודש ונקי */}
      <rect x="60" y="40" width="280" height="260" rx="4" fill="url(#after-wall)" stroke="#BcD3E0" />
      <rect x="60" y="40" width="280" height="18" fill="#1CA3B8" opacity="0.9" />
      {/* חלונות מסודרים עם מסגרת תכלת */}
      <g>
        {grid("af-w", 86, 78, 5, 4, 34, 34, 16, 22, "#BFE3EA", 1)}
      </g>
      {/* מסגרות תכלת לחלונות */}
      <g fill="none" stroke="#1CA3B8" strokeWidth="2" opacity="0.85">
        {grid("af-f", 86, 78, 5, 4, 34, 34, 16, 22, "none")}
      </g>
      {/* מרפסות עדינות */}
      <g stroke="#9CC6D6" strokeWidth="3" opacity="0.7">
        <line x1="70" y1="150" x2="330" y2="150" />
        <line x1="70" y1="236" x2="330" y2="236" />
      </g>
      {/* כניסה */}
      <rect x="180" y="250" width="40" height="50" rx="3" fill="#1CA3B8" opacity="0.85" />
    </svg>
  );
}
