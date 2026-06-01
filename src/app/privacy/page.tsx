import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: `מדיניות הפרטיות של ${COMPANY.name} – כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="container-px max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-navy-900 mb-2">
            מדיניות פרטיות
          </h1>
          <p className="text-navy-500 text-sm mb-10">
            עודכן לאחרונה: ינואר 2025
          </p>

          <div className="prose prose-lg max-w-none text-navy-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">1. כללי</h2>
              <p>
                {COMPANY.name} (להלן: "החברה", "אנו" או "אנחנו") מחויבת לשמירה על פרטיות
                המשתמשים באתר האינטרנט שלנו (להלן: "האתר"). מדיניות פרטיות זו מסבירה כיצד
                אנו אוספים, משתמשים, שומרים ומגנים על המידע האישי שאתה מספק לנו.
              </p>
              <p>
                השימוש באתר מהווה הסכמה לתנאי מדיניות פרטיות זו. אם אינך מסכים לתנאים
                אלה, אנא הפסק את השימוש באתר.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">2. המידע שאנו אוספים</h2>
              <p>
                אנו עשויים לאסוף את סוגי המידע הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>
                  <strong>מידע שאתה מספק מרצונך</strong> – שם מלא, מספר טלפון וכתובת
                  דוא"ל, כאשר אתה ממלא את טופס יצירת הקשר או טופס הבקשה להצעת מחיר.
                </li>
                <li>
                  <strong>סוג השירות המבוקש</strong> – כגון שיקום בטונים, חיזוק מבנים
                  וכדומה, לצורך מענה מדויק לפנייתך.
                </li>
                <li>
                  <strong>מידע טכני</strong> – כתובת IP, סוג דפדפן, מערכת הפעלה ועמודים
                  שנצפו, הנאסף אוטומטית לצורכי ניתוח ושיפור האתר.
                </li>
                <li>
                  <strong>עוגיות (Cookies)</strong> – ראה סעיף 6 להלן.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">3. מטרות השימוש במידע</h2>
              <p>אנו משתמשים במידע שנאסף למטרות הבאות בלבד:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>מענה לפניות ובקשות ליצירת קשר ולהצעות מחיר.</li>
                <li>יצירת קשר חוזר לצורך תיאום פגישה או שיחת ייעוץ.</li>
                <li>שיפור תכני האתר וחווית המשתמש.</li>
                <li>עמידה בדרישות חוקיות ורגולטוריות.</li>
              </ul>
              <p className="mt-3">
                אנו לא נשתמש במידע שלך לצורכי שיווק ישיר ללא הסכמתך המפורשת.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">4. שיתוף מידע עם צדדים שלישיים</h2>
              <p>
                אנו לא מוכרים, משכירים או משתפים את פרטיך האישיים עם צדדים שלישיים
                לצרכים מסחריים. עם זאת, אנו עשויים לשתף מידע במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>
                  <strong>ספקי שירות</strong> – חברות שמסייעות לנו בהפעלת האתר (כגון
                  שירותי שליחת דוא"ל), המחויבות לשמירה על סודיות המידע.
                </li>
                <li>
                  <strong>דרישה חוקית</strong> – מסירת מידע בהתאם לצו שיפוטי או דרישה של
                  רשות מוסמכת.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">5. אבטחת מידע</h2>
              <p>
                אנו נוקטים אמצעי אבטחה טכניים וארגוניים סבירים להגנה על המידע האישי
                שלך מפני גישה בלתי מורשית, שינוי, גילוי או השמדה. האתר פועל תחת פרוטוקול
                הצפנה מאובטח (HTTPS).
              </p>
              <p className="mt-3">
                יחד עם זאת, אין ביכולתנו להבטיח אבטחה מוחלטת של מידע המועבר דרך
                האינטרנט, ואנו ממליצים לנקוט זהירות בעת שיתוף מידע רגיש.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">6. עוגיות (Cookies)</h2>
              <p>
                האתר עושה שימוש בעוגיות – קבצי טקסט קטנים המאוחסנים במכשירך – למטרות
                הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>
                  <strong>עוגיות הכרחיות</strong> – נדרשות לתפקוד תקין של האתר.
                </li>
                <li>
                  <strong>עוגיות ניתוח</strong> – Google Tag Manager ושירותי ניתוח סטטיסטי,
                  המסייעים לנו להבין כיצד המשתמשים גולשים באתר ולשפרו.
                </li>
              </ul>
              <p className="mt-3">
                ניתן לחסום או למחוק עוגיות בהגדרות הדפדפן שלך, אולם הדבר עשוי לפגוע
                בחוויית הגלישה.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">7. שמירת מידע</h2>
              <p>
                אנו שומרים את המידע האישי שלך כל עוד הדבר נדרש למטרות שלשמן נאסף, וכן
                לתקופה הנדרשת על פי חוק. מידע שאינו נדרש עוד ייחק או יימחק בהתאם
                לנהלינו הפנימיים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">8. זכויות המשתמש</h2>
              <p>
                בהתאם לחוק הגנת הפרטיות, התשמ"א–1981, ותיקוניו, עומדות לך הזכויות הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                <li>
                  <strong>זכות עיון</strong> – לקבל מאיתנו מידע על הנתונים האישיים שברשותנו
                  הנוגעים לך.
                </li>
                <li>
                  <strong>זכות תיקון</strong> – לבקש תיקון מידע שגוי או לא מדויק.
                </li>
                <li>
                  <strong>זכות מחיקה</strong> – לבקש מחיקת מידע שאינו נדרש עוד, בכפוף
                  לחובות שמירה חוקיות.
                </li>
                <li>
                  <strong>זכות התנגדות</strong> – להתנגד לעיבוד מסוים של מידעך האישי.
                </li>
              </ul>
              <p className="mt-3">
                למימוש זכויותיך, אנא צור קשר בדוא"ל:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-teal-600 underline"
                >
                  {COMPANY.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">9. קישורים לאתרים חיצוניים</h2>
              <p>
                האתר עשוי להכיל קישורים לאתרים חיצוניים. אנו אינם אחראים למדיניות
                הפרטיות של אתרים אלה, ומומלץ לעיין במדיניות הפרטיות שלהם בנפרד.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">10. שינויים במדיניות הפרטיות</h2>
              <p>
                אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים
                מהותיים יפורסמו באתר. המשך שימוש באתר לאחר פרסום השינויים מהווה הסכמה
                לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-3">11. יצירת קשר</h2>
              <p>
                בכל שאלה, פנייה או בקשה הנוגעת למדיניות פרטיות זו, ניתן לפנות אלינו:
              </p>
              <ul className="list-none space-y-2 mt-3">
                <li>
                  <strong>חברה:</strong> {COMPANY.name}
                </li>
                <li>
                  <strong>כתובת:</strong> {COMPANY.address}, מיקוד {COMPANY.zip}
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
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
