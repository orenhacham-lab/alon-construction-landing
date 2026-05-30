# פרומפטים ליצירת תמונות AI - אלון עבודות בניה בע"מ

קובץ זה מרכז פרומפטים מדויקים ליצירת התמונות לדף הנחיתה.
ניתן להשתמש ב-Midjourney, DALL·E, Adobe Firefly, Ideogram וכד'.

## ⚙️ איך זה עובד (חשוב)

הקוד בנוי כך ש**ברגע שתעלו קובץ תמונה בשם המתאים לתיקיית `public/images/`,
התמונה האמיתית תחליף אוטומטית את ה-placeholder הגרפי (SVG)** - בלי שינוי קוד.
עד אז מוצג ויזואל SVG מקצועי במקום התמונה.

**הנחיות כלליות:**
- סגנון: ריאליסטי, יוקרתי, אמין, מקצועי. לא "סטוקי" וזול.
- פלטת צבעים תואמת מותג: כחול כהה (#0F2A47), טורקיז/תכלת (#1CA3B8), לבן, אפור.
- פורמט מומלץ: `.jpg` או `.webp`, איכות גבוהה, משקל מותאם לוובו (עד ~300KB לתמונה).
- ⚠️ יש לוודא רישיון שימוש מסחרי. **אין** להשתמש בתמונות אקראיות מהאינטרנט ללא רישיון.

---

## 🗂️ טבלת קבצים נדרשים

| מיקום בדף | שם הקובץ המדויק | יחס מומלץ |
|---|---|---|
| Hero | `public/images/hero-building.jpg` | אנכי ~14:15 (1120×1200) |
| אזור "מי אנחנו" - לפני | `public/images/concrete-restoration.jpg` | רוחבי ~4:3 (1000×750) |
| אזור "מי אנחנו" - אחרי | `public/images/facade-after.jpg` | רוחבי ~4:3 (1000×750) |
| פרויקט 1 - קיסריה | `public/images/projects/neot-golf-caesarea.jpg` | רוחבי ~16:9 (1200×675) |
| פרויקט 2 - אזורי חן | `public/images/projects/azorei-chen-tlv.jpg` | רוחבי ~16:9 (1200×675) |
| פרויקט 3 - בלפור | `public/images/projects/balfour-2-tlv.jpg` | רוחבי ~16:9 (1200×675) |

> **לוגו:** העלו את הלוגו הרשמי כ-`public/logo-original.svg` (מועדף) או `public/logo-original.png` -
> והוא יחליף אוטומטית את הלוגו בכל האתר (הדר ופוטר).

---

## 1. Hero — `hero-building.jpg`
> Professional architectural photograph of a multi-story residential building undergoing
> facade restoration, fully wrapped in clean steel scaffolding with safety netting.
> Workers in safety gear and hard hats, a tower crane in the background. Soft late-afternoon
> light, deep blue sky. Cinematic, high-end, premium real-estate photography, sharp focus.
> Color grade with deep navy and turquoise tones. Vertical 14:15, ultra-realistic, 8k.
>
> **Negative:** low quality, cartoon, distorted, cluttered, watermark, text.

## 2. שיקום בטונים / ברזל חשוף — `concrete-restoration.jpg`
> Close-up documentary photograph of a damaged reinforced concrete column on a residential
> building, with exposed rusted rebar, spalling concrete and cracks. Realistic construction
> inspection look, neutral daylight, shallow depth of field. Conveys urgency and the need for
> professional restoration. Photorealistic, detailed texture, 4:3.
>
> **Negative:** people, cartoon, oversaturated, watermark.

## 3. חידוש חזית (אחרי) — `facade-after.jpg`
> Professional photo of a freshly renovated residential building facade, smooth new plaster
> and clean acrylic finish, modern and well maintained, bright clean colors. Blue sky,
> golden-hour light, elegant and trustworthy. Real-estate marketing style, 4:3, ultra-realistic.
>
> **Negative:** scaffolding, damage, cartoon, watermark, text.

## 4. פרויקט קיסריה — `projects/neot-golf-caesarea.jpg`
> Wide shot of a residential compound of several mid-rise apartment buildings in Caesarea,
> one building wrapped in scaffolding during facade restoration, palm trees, bright
> Mediterranean daylight, upscale neighborhood. Photorealistic, 16:9.

## 5. פרויקט אזורי חן — `projects/azorei-chen-tlv.jpg`
> Two tall 11-story residential towers in Tel Aviv under structural restoration, scaffolding
> on the facade, urban setting, clear sky. Professional, trustworthy, photorealistic, 16:9.

## 6. פרויקט בלפור (שימור) — `projects/balfour-2-tlv.jpg`
> Elegant restored Bauhaus heritage building in central Tel Aviv (International Style),
> rounded balconies, smooth light plaster, preservation architecture, soft daylight.
> Photorealistic, refined, 16:9.

---

## רקעים / אייקונים (כבר ממומשים בקוד ב-SVG/CSS)

- אייקוני שירותים — ממומשים ב-`src/components/icons.tsx`.
- רקע שרטוט הנדסי / נקודות — ממומש ב-CSS דרך `blueprint-grid` ו-`dot-grid`.
