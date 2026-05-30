import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "אלון עבודות בניה בע\"מ - שיקום וחיזוק מבנים";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// תמונת Open Graph ממותגת (נוצרת אוטומטית) - לתצוגה מקדימה בשיתוף קישורים.
export default function OpengraphImage() {
  const circle = (
    left: number,
    top: number,
    s: number,
    bg: string,
  ): React.CSSProperties => ({
    position: "absolute",
    left,
    top,
    width: s,
    height: s,
    borderRadius: 9999,
    background: bg,
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A1E34 0%, #13314F 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(28,163,184,0.22)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* סמל העץ */}
          <div style={{ position: "relative", width: 130, height: 130, display: "flex" }}>
            <div style={circle(50, 64, 10, "#7C8A99")} />
            <div style={circle(40, 10, 50, "#2E9CB5")} />
            <div style={circle(16, 32, 34, "#1CA3B8")} />
            <div style={circle(78, 32, 34, "#4C86B8")} />
            <div style={circle(30, 4, 30, "#3A8FBE")} />
            <div style={circle(70, 6, 30, "#2E9CB5")} />
            <div style={circle(46, 34, 38, "#1CA3B8")} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 90, fontWeight: 800, lineHeight: 1 }}>ALON</div>
            <div style={{ fontSize: 40, fontWeight: 700, color: "#5BD4E0", letterSpacing: 6 }}>
              CONSTRUCTION
            </div>
          </div>
        </div>

        <div style={{ width: 130, height: 6, background: "#1CA3B8", borderRadius: 3, marginTop: 44 }} />

        <div style={{ display: "flex", fontSize: 36, color: "#C7D6E6", marginTop: 34, maxWidth: 960 }}>
          Building Restoration · Reinforcement · Renovation
        </div>
        <div style={{ display: "flex", fontSize: 27, color: "#8FB0CE", marginTop: 14 }}>
          Concrete Repair · Dangerous Structures · Heritage Preservation
        </div>
      </div>
    ),
    { ...size },
  );
}
