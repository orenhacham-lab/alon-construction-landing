import { Reveal } from "@/components/Reveal";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { SceneConcreteBefore, SceneFacadeAfter } from "@/components/scenes";
import { COMPANY } from "@/lib/constants";

export function AboutIntro() {
  return (
    <section className="relative bg-white pb-16 pt-10 lg:pb-20 lg:pt-14">
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

        {/* ויזואל "לפני / אחרי" */}
        <div className="lg:col-span-5">
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card-hover">
              <div className="relative h-44 sm:h-52">
                <ImageWithFallback
                  src="/images/concrete-restoration.jpg"
                  alt="שיקום בטונים וברזל חשוף לפני טיפול"
                  imgClassName="absolute inset-0 h-full w-full object-cover"
                  fallback={<SceneConcreteBefore className="absolute inset-0 h-full w-full" />}
                />
                <span className="absolute right-4 top-4 rounded-full bg-amber-500/95 px-3 py-1 text-xs font-extrabold text-white shadow">
                  לפני · בטון מתפורר וברזל חשוף
                </span>
              </div>
              <div className="relative h-44 border-t-4 border-white sm:h-52">
                <ImageWithFallback
                  src="/images/facade-after.jpg"
                  alt="חזית הבניין לאחר חידוש ושיקום"
                  imgClassName="absolute inset-0 h-full w-full object-cover"
                  fallback={<SceneFacadeAfter className="absolute inset-0 h-full w-full" />}
                />
                <span className="absolute right-4 top-4 rounded-full bg-leaf/95 px-3 py-1 text-xs font-extrabold text-white shadow">
                  אחרי · חזית מחודשת
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
