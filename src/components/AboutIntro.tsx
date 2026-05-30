import { Reveal } from "@/components/Reveal";
import { ShieldIcon, CheckCircleIcon, ServiceIcon } from "@/components/icons";
import { COMPANY } from "@/lib/constants";

const HIGHLIGHTS = [
  { icon: "reinforce" as const, label: "ניסיון בפרויקטים מורכבים" },
  { icon: "authority" as const, label: "עבודה מול רשויות וחברות עירוניות" },
  { icon: "occupied" as const, label: "טיפול במבנים מאוכלסים" },
];

export function AboutIntro() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="container-px grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* טקסט */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">מי אנחנו</span>
            <h2 className="section-title">
              מאחורי כל פרויקט עומדים ניסיון, מקצועיות וירידה לפרטים הקטנים ביותר
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              {COMPANY.name} מתמחה בשיקום וחידוש מבנים ברמה הגבוהה ביותר, תוך שילוב
              פתרונות מתקדמים, עבודה מדויקת ועמידה בסטנדרטים בלתי מתפשרים.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              במהלך השנים ביצענו מגוון פרויקטים מורכבים של שיקום בטונים, חיזוק
              מבנים, עבודות טיח ושליכט, טיפול במבנים מסוכנים ושיקום מבנים לשימור -
              תוך עבודה מול רשויות, חברות עירוניות ודיירים בבניינים מאוכלסים.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              כל פרויקט מנוהל בליווי אישי, הקפדה על בטיחות, איכות ביצוע גבוהה
              ושמירה מלאה על סביבת עבודה מסודרת ונקייה.
            </p>
          </Reveal>
        </div>

        {/* כרטיס מודגש */}
        <div className="lg:col-span-5">
          <Reveal delay={150}>
            <div className="dot-grid relative overflow-hidden rounded-3xl bg-navy-gradient p-8 text-white shadow-card-hover">
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal-500/20 blur-2xl" />
              <p className="text-sm font-bold uppercase tracking-wide text-teal-300">
                {COMPANY.tagline}
              </p>
              <p className="mt-3 text-2xl font-extrabold leading-snug">
                סטנדרט עבודה שלא מתפשר על בטיחות, איכות וגימור.
              </p>
              <ul className="mt-7 space-y-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.label} className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                      <ServiceIcon name={h.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-semibold text-navy-50">{h.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5 text-sm text-navy-100/80">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldIcon className="h-4 w-4 text-leaf-light" /> בטיחות מלאה
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircleIcon className="h-4 w-4 text-leaf-light" /> גימור גבוה
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
