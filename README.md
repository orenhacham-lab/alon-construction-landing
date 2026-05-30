# אלון עבודות בניה בע"מ — דף נחיתה לאיסוף לידים

דף נחיתה מודרני, מהיר ורספונסיבי (עברית מלאה + RTL) עבור **אלון עבודות בניה בע"מ**,
המתמחה בשיקום בטונים, חיזוק וחידוש מבנים, טיפול במבנים מסוכנים, עבודות טיח ושליכט
ושיקום מבנים לשימור. מטרת הדף: **המרת מבקרים ללידים**.

בנוי ב־**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

---

## ✨ מה כולל הדף

- עיצוב יוקרתי ומקצועי בגווני המותג (כחול כהה, טורקיז/תכלת, לבן, אפור) — תואם ללוגו.
- תמיכת RTL מלאה וטיפוגרפיה עברית (פונט **Assistant**).
- רספונסיביות מלאה למובייל, כולל בר פעולה תחתון קבוע (וואטסאפ + חיוג).
- טופס ליד אמיתי עם שליחה למייל דרך **API Route** (ללא טופס דמה).
- אירועי המרה ל־`dataLayer`: `lead_form_submit`, `whatsapp_click`, `phone_click`.
- חיבור **Google Tag Manager** תקין (סקריפט + `noscript`).
- מצב הצלחה ברור לאחר שליחת הטופס.
- כפתורי וואטסאפ וטלפון לאורך כל הדף.
- SEO בסיסי: `title`, `description`, Open Graph, תמונת OG ממותגת, `robots.txt`,
  `sitemap.xml` ונתוני **JSON-LD** (Schema.org) לעסק.
- ויזואלים מקצועיים ב־SVG/CSS (ללא תלות בתמונות חיצוניות) + קובץ פרומפטים ליצירת
  תמונות AI ב־[`public/image-prompts.md`](public/image-prompts.md).

---

## 🧱 מבנה הדף

`Header → Hero → אודות → אזור כאב → שירותים → פרויקטים → למה אנחנו → תהליך העבודה → טופס ליד → CTA → Footer`

---

## 🚀 התקנה והרצה מקומית

דרישות: **Node.js 18.17+**.

```bash
# 1. התקנת תלויות
npm install

# 2. הגדרת משתני סביבה
cp .env.example .env.local
# ערכו את .env.local והזינו RESEND_API_KEY (ראו בהמשך)

# 3. הרצה בסביבת פיתוח
npm run dev
# פתחו http://localhost:3000

# 4. build לפרודקשן + הרצה
npm run build
npm start
```

---

## 🔑 משתני סביבה (Environment Variables)

| משתנה | חובה? | תיאור |
|---|---|---|
| `RESEND_API_KEY` | **כן** (לשליחת מיילים) | מפתח API מ־[Resend](https://resend.com/api-keys). בלעדיו הטופס יחזיר שגיאה ברורה. |
| `LEADS_TO_EMAIL` | מומלץ | כתובת לקבלת הלידים. ברירת מחדל: `itzhakov.marina@gmail.com`. |
| `LEADS_FROM_EMAIL` | אופציונלי | כתובת השולח. ברירת מחדל לבדיקות: `onboarding@resend.dev`. בפרודקשן — כתובת מדומיין מאומת. |
| `LEADS_BCC_EMAIL` | אופציונלי | כתובת לקבלת עותק נסתר (BCC) של כל ליד. |
| `NEXT_PUBLIC_GTM_ID` | אופציונלי | מזהה GTM. ברירת מחדל: `GTM-K6JV8SB6`. |
| `NEXT_PUBLIC_SITE_URL` | אופציונלי | כתובת האתר (ל־SEO / sitemap / OG). |

> ⚠️ אין מפתחות בקוד — הכול דרך משתני סביבה. הקובץ `.env.local` אינו נכלל ב־git.

### הגדרת Resend (שליחת מיילים)

1. נרשמים בחינם ב־[resend.com](https://resend.com) ויוצרים **API Key**.
2. מזינים אותו כ־`RESEND_API_KEY`.
3. **לבדיקות מהירות** אפשר להשתמש בכתובת השולח `onboarding@resend.dev` (ברירת מחדל).
4. **לפרודקשן** מומלץ לאמת דומיין ב־Resend (Domains → Add Domain → הוספת רשומות DNS),
   ואז להגדיר `LEADS_FROM_EMAIL` לכתובת מהדומיין שלכם — כך המיילים לא ייכנסו לספאם.

---

## ▲ פריסה ל־Vercel

1. היכנסו ל־[vercel.com](https://vercel.com) → **Add New… → Project**.
2. ייבאו את הריפו `alon-construction-landing` מ־GitHub. (Vercel יזהה אוטומטית Next.js.)
3. לפני Deploy, פתחו **Environment Variables** והזינו לפחות:
   - `RESEND_API_KEY` = (המפתח שלכם)
   - `LEADS_TO_EMAIL` = `itzhakov.marina@gmail.com`
   - (אופציונלי) `LEADS_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`, `LEADS_BCC_EMAIL`.
4. לחצו **Deploy**. בסיום תקבלו כתובת חיה.
5. מומלץ לעדכן את `NEXT_PUBLIC_SITE_URL` לכתובת הסופית ולפרוס מחדש (לשיפור SEO/OG).

> שינוי משתני סביבה ב־Vercel דורש **Redeploy** כדי להיכנס לתוקף.

---

## 📊 מעקב המרות (GTM / dataLayer)

הדף דוחף אירועים ל־`window.dataLayer`:

| אירוע | מתי | פרטים |
|---|---|---|
| `lead_form_submit` | שליחת טופס מוצלחת | `form_name: "alon_construction_landing"`, `lead_type: <סוג הפנייה>` |
| `whatsapp_click` | לחיצה על וואטסאפ | `click_location` |
| `phone_click` | לחיצה על טלפון | `click_location` |

ב־GTM ניתן להגדיר Triggers מסוג *Custom Event* על שמות אלו ולחבר ל־Conversion
(לדוגמה Google Ads / GA4) על `lead_form_submit`.

---

## 🖼️ החלפת הלוגו ותמונות

**לוגו:** העלו את הלוגו הרשמי לתיקיית `public/` בשם `logo-original.svg` (מועדף) או
`logo-original.png`. הוא יחליף **אוטומטית** את הלוגו בהדר ובפוטר (ללא שינוי קוד), תוך
שמירה על יחס גובה־רוחב (לא נמתח ולא נחתך). עד להעלאה מוצג לוגו SVG מובנה כגיבוי.

**תמונות:** הקוד מציג ויזואלי SVG מקצועיים כ־placeholders. ברגע שתעלו תמונה אמיתית
בשם המתאים לתיקיית `public/images/` — היא תחליף אוטומטית את ה־placeholder. רשימת שמות
הקבצים והפרומפטים ליצירת התמונות נמצאת ב־[`public/image-prompts.md`](public/image-prompts.md).

---

## 🗂️ קבצים עיקריים

```
src/
├── app/
│   ├── layout.tsx              # RTL, פונט, GTM, מטא־דאטה, JSON-LD
│   ├── page.tsx                # הרכבת כל מקטעי הדף
│   ├── globals.css             # סגנונות בסיס + מערכת כפתורים
│   ├── icon.svg                # favicon (סמל העץ)
│   ├── opengraph-image.tsx     # תמונת OG ממותגת
│   ├── robots.ts / sitemap.ts  # SEO
│   └── api/lead/route.ts       # שליחת הליד למייל (Resend)
├── components/                 # Header, Hero, Services, Projects, LeadForm, Footer ...
└── lib/
    ├── constants.ts            # תוכן ופרטי קשר
    └── gtm.ts                  # עזרי dataLayer
public/
├── logo.svg                    # נכס לוגו
└── image-prompts.md            # פרומפטים ליצירת תמונות AI
```

---

## 🧪 בדיקת build

```bash
npm run build
```

הפרויקט נבדק ועובר build נקי ללא שגיאות.
