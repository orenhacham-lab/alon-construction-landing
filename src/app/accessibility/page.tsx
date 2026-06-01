import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: `הצהרת הנגישות של ${COMPANY.name} – פרטים על רמת הנגישות של האתר ודרכי יצירת קשר עם רכז הנגישות.`,
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="container-px max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-navy-900 mb-2">
            הצהרת נגישות
          </h1>
          <p className="text-navy-500 text-sm mb-10">
            עודכן לאחרונה: יוני 2026
          </p>

          <div className="prose prose-lg max-w-none text-navy-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">כללי</h2>
              <p>
                {COMPANY.name} רואה חשיבות עליונה בהנגשת האתר לכלל הציבור, לרבות
                לאנשים עם מוגבלויות. אנו פועלים להבטיח שהאתר יהיה נגיש ושמיש
                לכל אדם, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
                נגישות לשירות), התשע"ג–2013, ולתקן הישראלי{" "}
                <abbr title="Israeli Standard">ת"י</abbr> 5568 המבוסס על הנחיות
                WCAG 2.1 ברמה AA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">רמת הנגישות</h2>
              <p>
                האתר עומד ברמת התאמה <strong>AA</strong> של תקן{" "}
                <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1
                ברוב עמודיו. בין היתר:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>ניתן לניווט מלא באמצעות מקלדת בלבד.</li>
                <li>כל התמונות מכילות טקסט חלופי (alt text) תיאורי.</li>
                <li>
                  ניגודיות הצבעים עומדת בדרישות התקן (יחס ניגוד מינימלי של 4.5:1
                  לטקסט רגיל ו-3:1 לטקסט גדול).
                </li>
                <li>
                  גודל הגופן ניתן להגדלה עד 200% ללא אובדן תוכן או פונקציונליות.
                </li>
                <li>האתר מוצג בכיוון מימין לשמאל (RTL) ובשפה העברית.</li>
                <li>
                  שימוש בתגיות HTML סמנטיות (headers, nav, main, footer) לסיוע
                  לקוראי מסך.
                </li>
                <li>טפסים כוללים תוויות (labels) ברורות לכל שדה.</li>
                <li>
                  קישורים כוללים תיאורים מובנים לסיוע בניווט באמצעות טכנולוגיות
                  מסייעות.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">מגבלות נגישות ידועות</h2>
              <p>
                אנו עושים כמיטב יכולתנו לאתר ולתקן מגבלות נגישות. להלן מגבלות
                שאנו מודעים להן ועובדים לשפרן:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>
                  מפת הגעה ותכנים המוטמעים מצדדים שלישיים (כגון Google Maps)
                  עשויים שלא לעמוד במלוא דרישות הנגישות.
                </li>
                <li>
                  קבצי PDF ישנים, אם יפורסמו, עשויים שלא להיות נגישים במלואם.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">אמצעים טכניים לנגישות</h2>
              <p>
                ניתן להשתמש באמצעים הבאים לשיפור חווית הגלישה:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>
                  <strong>הגדלת גופן</strong> – בדפדפן: Ctrl ו-+ (Windows/Linux)
                  או Cmd ו-+ (Mac).
                </li>
                <li>
                  <strong>ניגודיות גבוהה</strong> – ניתן להפעיל במערכת ההפעלה
                  שלך (Windows: הגדרות נגישות ← ניגודיות גבוהה; Mac: הגדרות מערכת
                  ← נגישות ← תצוגה).
                </li>
                <li>
                  <strong>קורא מסך</strong> – האתר נבדק עם NVDA ועם VoiceOver.
                </li>
                <li>
                  <strong>ניווט מקלדת</strong> – שימוש במקש Tab למעבר בין
                  אלמנטים ו-Enter/Space לפעולה.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                משוב ויצירת קשר עם רכז הנגישות
              </h2>
              <p>
                אם נתקלת בבעיית נגישות, זקוק לסיוע בגלישה, או ברצונך לדווח על
                תקלה – אנא פנה אל רכז הנגישות שלנו:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>שם:</strong> {COMPANY.name}
                </li>
                <li>
                  <strong>טלפון:</strong>{" "}
                  <a
                    href="tel:0546217217"
                    className="text-teal-600 underline"
                    dir="ltr"
                  >
                    {COMPANY.phonePrimary}
                  </a>
                </li>
                <li>
                  <strong>דוא"ל:</strong>{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-teal-600 underline"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <strong>שעות מענה:</strong> ימים א'–ה', 08:00–17:00
                </li>
              </ul>
              <p className="mt-4">
                אנו מתחייבים להגיב לפניות נגישות תוך 5 ימי עסקים ולטפל בבעיות
                בהקדם האפשרי.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">בסיס חוקי</h2>
              <p>
                הצהרת נגישות זו עומדת בדרישות{" "}
                <strong>
                  חוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח–1998
                </strong>{" "}
                ותקנותיו, ובפרט תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
                נגישות לשירות), התשע"ג–2013.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
