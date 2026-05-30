# פרומפטים ליצירת תמונות AI - אלון עבודות בניה בע"מ

קובץ זה מרכז פרומפטים מדויקים ליצירת תמונות עבור דף הנחיתה.
ניתן להשתמש בכלים כמו Midjourney, DALL·E, Adobe Firefly, Ideogram וכד'.

**הנחיות כלליות:**
- סגנון: ריאליסטי, יוקרתי, אמין, מקצועי. לא "סטוקי" וזול.
- פלטת צבעים תואמת מותג: כחול כהה (#0F2A47), טורקיז/תכלת (#1CA3B8), לבן, אפור.
- יחס לרוחב (16:9) לתמונת Hero, ריבועי (1:1) לכרטיסים.
- **חשוב:** לוודא רישיון שימוש מסחרי. אין להשתמש בתמונות אקראיות מהאינטרנט ללא רישיון.

לאחר יצירת התמונות, יש לשמור אותן בתיקיית `/public/images/` ולעדכן את הקומפוננטות הרלוונטיות
(למשל החלפת ה-SVG ב-`HeroVisual.tsx` ב-`next/image`).

---

## 1. תמונת Hero - בניין מגורים בשיקום

**English prompt:**
> Professional architectural photograph of a multi-story residential building undergoing
> facade restoration, fully wrapped in clean steel scaffolding with safety netting.
> Workers in safety gear and hard hats, a tower crane in the background. Soft late-afternoon
> light, deep blue sky. Cinematic, high-end, sharp focus, premium real-estate photography style.
> Color grading with deep navy and turquoise tones. 16:9, ultra-realistic, 8k.

**Negative:** low quality, cartoon, distorted, messy, cluttered, watermark, text.

---

## 2. שיקום בטונים / ברזל חשוף - לפני טיפול

**English prompt:**
> Close-up documentary photograph of a damaged reinforced concrete column/wall with exposed
> rusted rebar, spalling concrete and cracks, on a residential building. Realistic construction
> inspection look, neutral daylight, shallow depth of field. Conveys urgency and the need for
> professional restoration. Photorealistic, detailed texture, 4:3.

**Negative:** people, cartoon, oversaturated, watermark.

---

## 3. בניין אחרי חידוש חזית

**English prompt:**
> Professional photo of a freshly renovated residential building facade, smooth new plaster
> and clean acrylic finish, modern and well maintained, bright clean colors. Blue sky,
> golden-hour light, elegant and trustworthy. Real-estate marketing style, 16:9, ultra-realistic.

**Negative:** scaffolding, damage, cartoon, watermark, text.

---

## 4. גרפיקות שירותים / אייקונים

**English prompt (icon set):**
> A set of minimalist line icons for a construction restoration company: concrete repair,
> structural reinforcement, facade renovation, plastering, dangerous-structure treatment,
> heritage preservation. Two-tone navy (#0F2A47) and turquoise (#1CA3B8), consistent 1.8px
> stroke, rounded line caps, on transparent background. Clean, modern, professional.

*(הערה: כרגע מומשו אייקוני SVG מותאמים בקוד עצמו ב-`icons.tsx`.)*

---

## 5. רקע עדין עם קווים הנדסיים / תוכנית בניין

**English prompt:**
> Subtle architectural blueprint background, thin technical drawing lines of a building
> elevation and floor plan, very light navy lines on white, lots of negative space, elegant,
> minimal, used as a faint section background. Seamless, high resolution.

*(הערה: כרגע מומש רקע שרטוט/נקודות ב-CSS דרך המחלקות `blueprint-grid` ו-`dot-grid`.)*

---

## 6. תמונת רקע לאזור "למה לבחור בנו" (אופציונלי)

**English prompt:**
> Wide cinematic shot of an experienced construction crew reviewing plans on a restoration
> site, scaffolding in the background, professional and trustworthy atmosphere, navy and
> turquoise color grade, soft daylight. 21:9, photorealistic.
