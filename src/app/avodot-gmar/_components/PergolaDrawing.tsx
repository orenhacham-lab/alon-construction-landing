/** שרטוט חזית: פרגולה, דק וגדר עץ - בשפה של תוכנית אדריכלית */
export function PergolaDrawing({ className = "" }: { className?: string }) {
  const slats = Array.from({ length: 15 }, (_, i) => 128 + i * 26);
  const deck = Array.from({ length: 16 }, (_, i) => 96 + i * 30);
  const fence = Array.from({ length: 9 }, (_, i) => 262 + i * 16);

  return (
    <svg
      viewBox="0 0 640 440"
      className={className}
      role="img"
      aria-label="שרטוט חזית של פרגולה מעץ מעל דק, עם גדר עץ ברקע"
    >
      <defs>
        <pattern id="gm-grain" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#0F2A47" strokeWidth="0.6" opacity="0.35" />
        </pattern>
        <pattern id="gm-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#0F2A47" strokeWidth="0.7" opacity="0.4" />
        </pattern>
      </defs>

      {/* קיר הבית */}
      <rect x="40" y="70" width="70" height="300" fill="url(#gm-hatch)" stroke="#0F2A47" strokeWidth="1.4" />

      {/* גדר עץ אופקית ברקע */}
      <g stroke="#0F2A47" strokeWidth="1" fill="#F1ECE7">
        {fence.map((y) => (
          <rect key={y} x="560" y={y} width="56" height="11" />
        ))}
      </g>

      {/* קורות הפרגולה */}
      <g stroke="#0F2A47" strokeWidth="1.4">
        <rect x="110" y="104" width="420" height="16" fill="url(#gm-grain)" />
        {slats.map((x) => (
          <rect key={x} x={x} y="88" width="10" height="16" fill="#fff" strokeWidth="1" />
        ))}
        <rect x="498" y="120" width="18" height="250" fill="url(#gm-grain)" />
        <rect x="300" y="120" width="18" height="250" fill="url(#gm-grain)" />
      </g>

      {/* הצל של הרפפות על הדק - שטיפת טורקיז */}
      <g fill="#1CA3B8" opacity="0.14">
        {slats.map((x) => (
          <rect key={x} x={x + 40} y="370" width="10" height="20" />
        ))}
      </g>

      {/* הדק */}
      <g stroke="#0F2A47" strokeWidth="1" fill="#fff">
        <rect x="80" y="370" width="480" height="20" />
        {deck.map((x) => (
          <line key={x} x1={x} y1="370" x2={x} y2="390" />
        ))}
      </g>
      <line x1="20" y1="404" x2="620" y2="404" stroke="#0F2A47" strokeWidth="1.6" />
      <g stroke="#0F2A47" strokeWidth="0.8" opacity="0.5">
        {Array.from({ length: 40 }, (_, i) => (
          <line key={i} x1={24 + i * 15} y1="404" x2={16 + i * 15} y2="414" />
        ))}
      </g>

      {/* קווי מידה */}
      <g stroke="#1CA3B8" strokeWidth="1" fill="#1CA3B8">
        <line x1="110" y1="56" x2="530" y2="56" />
        <line x1="110" y1="50" x2="110" y2="62" />
        <line x1="530" y1="50" x2="530" y2="62" />      </g>
      <text x="320" y="46" textAnchor="middle" fontSize="13" fontWeight="700" fill="#188297">
        פרגולה בהתאמה אישית למידות הבית
      </text>

      {/* תוויות */}
      <g fontSize="13" fontWeight="700" fill="#0F2A47">
        <text x="400" y="365" textAnchor="middle">דק עץ</text>
        <text x="588" y="252" textAnchor="middle">גדר</text>
        <text x="75" y="62" textAnchor="middle">קיר הבית</text>
      </g>
    </svg>
  );
}
