import { Fragment } from "react";
import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { LeadForm } from "@/components/LeadForm";
import { WhatsappLink, PhoneLink } from "@/components/CtaButtons";
import { PhoneIcon, WhatsappIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { COMPANY, CONTACT, GMAR_SERVICE_OPTIONS, GMAR_WHATSAPP_URL } from "@/lib/constants";
import { AnnotatedImage, CalloutLayer, type Callout } from "./_components/Annotated";
import { ScheduleCompare } from "./_components/ScheduleCompare";
import { PergolaDrawing } from "./_components/PergolaDrawing";

export const metadata: Metadata = {
  title: "עבודות גמר במרכז | קבלן אחד לכל שלבי הבנייה",
  description:
    "עבודות גמר, גבס, ריצוף, עבודות עץ ושלד בביצוע של קבלן אחד. קבלן רשום 27094, פיקוח צמוד של הנדסאי בניין ומנהל עבודה, אחריות מלאה. מודיעין, שוהם, פתח תקווה, ראשון לציון ובכל אזור המרכז.",
  alternates: { canonical: "/avodot-gmar" },
  openGraph: {
    title: "עבודות גמר במרכז | קבלן אחד לכל שלבי הבנייה",
    description:
      "מהשלד ועד הפרט האחרון של הגמר, בביצוע של חברה אחת. קבלן רשום 27094 עם אחריות מלאה לטיב העבודה.",
    images: [{ url: "/images/gmar/living-room.jpg", width: 1920, height: 1088 }],
  },
};

const OFFICE_PHONE = "08-9221011";
const OFFICE_TEL = "tel:089221011";

const HERO_CALLOUTS: Callout[] = [
  { x: 40, y: 23.5, label: "קרניז גבס לתאורה נסתרת", side: "left", length: 64 },
  { x: 46, y: 36, label: "נישה בגבס עם ספוטים", side: "left", length: 120 },
  { x: 52, y: 79, label: "ריצוף פורצלן בפורמט גדול", side: "left", length: 90 },
];

const GYPSUM_CALLOUTS: Callout[] = [
  { x: 70, y: 31, label: "קרניז לתאורה נסתרת", side: "left", length: 70 },
  { x: 30, y: 58, label: "נישה עם תאורה שקועה", side: "right", length: 60 },
  { x: 60, y: 9, label: "הנמכת תקרה", side: "left", length: 56 },
];

const FLOOR_CALLOUTS: Callout[] = [
  { x: 46, y: 62, label: "קו רובה ישר ואחיד", side: "right", length: 70 },
  { x: 74, y: 30, label: "פאנל תואם לריצוף", side: "left", length: 60 },
];

const CITIES = [
  "מודיעין",
  "שוהם",
  "לוד",
  "רמלה",
  "ראש העין",
  "אלעד",
  "יהוד",
  "אור יהודה",
  "קריית אונו",
  "פתח תקווה",
  "באר יעקב",
  "ראשון לציון",
  "נס ציונה",
  "רחובות",
];

const STEPS = [
  {
    title: "פגישה בשטח",
    text: "מגיעים לנכס, מקשיבים למה שאתם רוצים, מודדים ומציעים פתרונות שמותאמים לבית שלכם.",
  },
  {
    title: "הצעת מחיר מפורטת",
    text: "כל הסעיפים וכל החומרים כתובים, יחד עם לוח זמנים שאנחנו מתחייבים אליו.",
  },
  {
    title: "ביצוע בפיקוח צמוד",
    text: "הנדסאי בניין ומנהל עבודה נמצאים בשטח ומעדכנים אתכם באופן שוטף.",
  },
  {
    title: "מסירה, פרט אחרי פרט",
    text: "עוברים יחד על כל פרט לפני המסירה. עבודה נגמרת רק כשאתם מרוצים ממנה.",
  },
];

const FAQ = [
  {
    q: "מה כוללות עבודות גמר?",
    a: "כל מה שמתבצע אחרי השלד כדי להפוך מבנה למקום מוכן לשימוש. אצלנו זה כולל עבודות גבס, ריצוף, עבודות עץ וגימורים.",
  },
  {
    q: "אתם מבצעים גם שלד וגם גמר?",
    a: "כן. אנחנו מבצעים את שני השלבים, כך שכל הפרויקט נמצא באחריות של קבלן אחד.",
  },
  {
    q: "כמה עולות עבודות גמר?",
    a: "המחיר תלוי בהיקף העבודה, בסוג החומרים ובמורכבות. אחרי פגישה בשטח תקבלו הצעת מחיר מפורטת, כדי שתדעו מראש על מה אתם משלמים.",
  },
  {
    q: "האם אתם קבלן רשום?",
    a: "כן. אלון מור הוא קבלן רשום מספר 27094.",
  },
  {
    q: "מי מפקח על העבודה?",
    a: "הנדסאי בניין ומנהל עבודה מלווים כל פרויקט בשטח, עם בקרת איכות בכל שלב.",
  },
  {
    q: "יש אחריות על העבודה?",
    a: "כן. אנחנו נותנים אחריות מלאה לטיב העבודה.",
  },
];

const container = "mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12";

export default function FinishingWorksPage() {
  return (
    <div className="gm-page bg-white text-ink">
      <GmarHeader />
      <main>
        <Hero />
        <OneContractor />
        <Walkthrough />
        <Quality />
        <Process />
        <Areas />
        <Contact />
        <Faq />
      </main>
      <GmarFooter />
      <MobileBar />
    </div>
  );
}

function GmarHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-plaster-200 bg-white/95 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]`}>
        <a href="/" aria-label={`${COMPANY.name}, לדף הבית`} className="flex items-center">
          <BrandLogo variant="header" imgClassName="h-11 w-auto lg:h-14" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <PhoneLink
            location="gmar_header"
            withIcon={false}
            className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-bold text-navy-800 transition-colors hover:bg-plaster-100 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4 text-teal-600" />
            <span dir="ltr">{COMPANY.phonePrimary}</span>
          </PhoneLink>
          <WhatsappLink
            location="gmar_header"
            href={GMAR_WHATSAPP_URL}
            withIcon={false}
            className="gm-ease inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-[0_6px_16px_-6px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97] sm:text-[15px]"
          >
            <WhatsappIcon className="h-4 w-4" />
            וואטסאפ
          </WhatsappLink>
        </div>
      </div>
    </header>
  );
}

function HeroActions({ light = false }: { light?: boolean }) {
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row xl:flex-col 2xl:flex-row">
        <WhatsappLink
          location="gmar_hero"
          href={GMAR_WHATSAPP_URL}
          withIcon={false}
          className="gm-ease inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-[17px] font-bold text-white shadow-[0_12px_28px_-10px_rgba(37,211,102,0.75)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <WhatsappIcon className="h-5 w-5" />
          תיאום פגישה בשטח בוואטסאפ
        </WhatsappLink>
        <PhoneLink
          location="gmar_hero"
          withIcon={false}
          className={`gm-ease inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-[17px] font-bold transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
            light
              ? "bg-navy-800 text-white shadow-[0_12px_28px_-12px_rgba(10,30,52,0.6)]"
              : "bg-navy-800 text-white"
          }`}
        >
          <PhoneIcon className="h-5 w-5" />
          <span dir="ltr">{COMPANY.phonePrimary}</span>
        </PhoneLink>
      </div>
      <a
        href="#lead-form"
        className="mt-4 inline-block text-[15px] font-semibold text-navy-700 underline decoration-teal-500/60 decoration-2 underline-offset-[6px] transition-colors hover:text-navy-900 hover:decoration-teal-500"
      >
        מעדיפים שנחזור אליכם? השאירו פרטים
      </a>
    </>
  );
}

function TrustLine() {
  return (
    <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy-900/15 pt-5 text-[14px] font-semibold text-navy-700">
      <li>קבלן רשום מס׳ 27094</li>
      <li>הנדסאי בניין ומנהל עבודה בשטח</li>
      <li>אחריות מלאה לטיב העבודה</li>
    </ul>
  );
}

function Hero() {
  const headline = (
    <h1 className="text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy-900 sm:text-5xl xl:text-[clamp(2.6rem,3.4vw,4rem)]">
      קבלן אחד,
      <br />
      מהשלד ועד הפרט
      <br />
      האחרון של הגמר.
    </h1>
  );
  const sub = (
    <p className="mt-5 text-[17px] leading-[1.7] text-navy-700 sm:text-lg xl:text-[clamp(1rem,1.15vw,1.15rem)]">
      גבס, ריצוף, עבודות עץ ושלד, בביצוע של צוות אחד. כשמי שבנה את הקירות הוא גם מי שסוגר
      את התקרה ומרצף את הרצפה, העבודה מתקדמת מהר יותר, מדויקת יותר, ושום דבר לא נופל בין
      הכיסאות.
    </p>
  );

  return (
    <section aria-labelledby="hero-title" className="bg-plaster-100">
      {/* דסקטופ רחב: הטקסט יושב על הקיר שבתמונה */}
      <div className="relative hidden xl:block" style={{ aspectRatio: "1920 / 1088" }}>
        <AnnotatedImage
          src="/images/gmar/living-room.jpg"
          alt="סלון בבית פרטי אחרי עבודות גמר: תקרת גבס מונמכת עם תאורה נסתרת, נישה לטלוויזיה וריצוף פורצלן בפורמט גדול"
          callouts={[]}
          priority
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(241,236,231,0.94) 0%, rgba(241,236,231,0.86) 24%, rgba(241,236,231,0) 40%)",
            }}
          />
          <div className="absolute inset-0">
            <CalloutLayer callouts={HERO_CALLOUTS} />
          </div>
        </AnnotatedImage>
        <div className="absolute inset-y-0 right-0 flex w-[33%] flex-col justify-center pe-[3.5%] ps-6">
          <div id="hero-title">{headline}</div>
          {sub}
          <div className="mt-8">
            <HeroActions light />
          </div>
          <TrustLine />
        </div>
        <p className="absolute bottom-3 left-4 text-[11px] font-medium text-white/80">הדמיה להמחשה</p>
      </div>

      {/* מובייל וטאבלט */}
      <div className="xl:hidden">
        <div className="relative aspect-[4/3] max-h-[52svh] w-full overflow-hidden sm:aspect-[16/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gmar/living-room-sm.jpg"
            alt="סלון בבית פרטי אחרי עבודות גמר: תקרת גבס עם תאורה נסתרת, נישה לטלוויזיה וריצוף פורצלן"
            className="h-full w-full object-cover object-[42%_50%]"
            fetchPriority="high"
          />
          <p className="absolute bottom-2 left-3 text-[11px] font-medium text-white/85">הדמיה להמחשה</p>
        </div>
        <div className={`${container} pb-12 pt-8 sm:pb-16 sm:pt-10`}>
          <div className="max-w-2xl">
            {headline}
            {sub}
            <div className="mt-7">
              <HeroActions />
            </div>
            <TrustLine />
          </div>
        </div>
      </div>
    </section>
  );
}

function OneContractor() {
  return (
    <section aria-labelledby="one-title" className="bg-navy-900 text-white">
      <div className={`${container} grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28`}>
        <div className="lg:col-span-5">
          <h2
            id="one-title"
            className="text-[2rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-white sm:text-[2.6rem]"
          >
            חמישה בעלי מקצוע. חמישה לוחות זמנים. ומי שמתאם ביניהם, זה אתם.
          </h2>
          <p className="mt-6 max-w-[36rem] text-[17px] leading-[1.75] text-navy-100">
            קבלן שלד, גבסן, רצף, נגר וצבעי. כשכל אחד מהם עובד לעצמו, אתם מנהלים את התיאומים,
            רודפים אחרי לוחות הזמנים ומשלמים על הפערים ביניהם.
          </p>
          <p className="mt-4 max-w-[36rem] text-[17px] leading-[1.75] text-navy-100">
            אצלנו זה עובד אחרת. אלון עבודות בניה מבצעת בעצמה את כל שלבי הפרויקט, ואתם מדברים
            עם כתובת אחת שרואה את התמונה המלאה ולוקחת אחריות על התוצאה.
          </p>
          <dl className="mt-10 grid grid-cols-3 border-t border-white/15">
            {[
              ["לוח זמנים", "אחד"],
              ["הצעת מחיר", "אחת"],
              ["כתובת לאחריות", "אחת"],
            ].map(([k, v]) => (
              <div key={k} className="border-s border-white/15 px-4 pt-5 first:border-s-0 first:ps-0">
                <dt className="text-sm text-navy-200">{k}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-leaf-light">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <ScheduleCompare />
        </div>
      </div>
    </section>
  );
}

function Chapter({
  id,
  title,
  text,
  items,
}: {
  id: string;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <div>
      <h3
        id={id}
        className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy-900 sm:text-[2.15rem]"
      >
        {title}
      </h3>
      <p className="mt-4 max-w-[38rem] text-[17px] leading-[1.75] text-navy-700">{text}</p>
      <ul className="mt-6 max-w-[38rem] divide-y divide-plaster-200 border-y border-plaster-200">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 py-3 text-[15px] font-semibold text-navy-800">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Walkthrough() {
  return (
    <section id="services" aria-labelledby="walk-title" className="bg-white">
      <div className={`${container} pb-8 pt-20 lg:pt-28`}>
        <div className="grid gap-6 lg:grid-cols-12">
          <h2
            id="walk-title"
            className="text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl lg:col-span-6"
          >
            השלב שבו המבנה הופך לבית.
          </h2>
          <p className="text-[17px] leading-[1.75] text-navy-700 lg:col-span-5 lg:col-start-8 lg:pt-3">
            אחרי שהשלד עומד, מתחיל השלב שאתם באמת רואים ומרגישים: תקרות, רצפות, נישות, תאורה,
            עץ וכל הפרטים הקטנים שיוצרים תחושה של מקום שלם. בואו נעבור על הבית, חדר אחרי חדר.
          </p>
        </div>
      </div>

      {/* גבס */}
      <div className={`${container} grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20`}>
        <AnnotatedImage
          src="/images/gmar/gypsum-ceiling.jpg"
          alt="תקרת גבס מונמכת עם קרניז לתאורה נסתרת ונישה עם ספוטים שקועים"
          callouts={GYPSUM_CALLOUTS}
          className="aspect-[4/3] rounded-2xl lg:col-span-7"
        />
        <div className="lg:col-span-5">
          <Chapter
            id="ch-gypsum"
            title="גבס: התקרה שנותנת לחדר אופי."
            text="הגבס הוא הכלי שמעניק לחלל אופי. הנמכת תקרות, תאורה נסתרת, נישות לארונות ולטלוויזיה, מזנונים, תקרות אקוסטיות ועיצובים דקורטיביים, כל אלה נותנים לכל חדר מראה מחושב ומסודר."
            items={[
              "הנמכת תקרות וקרניזים לתאורה נסתרת",
              "נישות לטלוויזיה ולארונות, מזנונים",
              "תקרות אקוסטיות ועיצובים דקורטיביים",
            ]}
          />
        </div>
      </div>

      {/* ריצוף */}
      <div className="py-14 lg:py-20">
        <div className={container}>
          <AnnotatedImage
            src="/images/gmar/porcelain-floor.jpg"
            alt="ריצוף פורצלן בפורמט גדול עם קווי רובה ישרים ואחידים"
            callouts={FLOOR_CALLOUTS}
            className="aspect-[16/9] rounded-2xl sm:aspect-[8/3]"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Chapter
                id="ch-floor"
                title="ריצוף: מתחיל בתשתית, נגמר בקו רובה ישר."
                text="קרמיקה, פרקט, אבן, שיש או בטון מחוק ללא מרצפות. כל ריצוף מתחיל בשכבת תשתית נכונה ומסתיים בקו רובה ישר. אנחנו מרצפים בתים חדשים, מחליפים ריצוף קיים ומבצעים ריצוף וחיפוי בחדרי רחצה."
                items={[
                  "קרמיקה, פורצלן, פרקט, אבן ושיש",
                  "בטון מחוק ללא מרצפות",
                  "ריצוף וחיפוי בחדרי רחצה, החלפת ריצוף קיים",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* עץ */}
      <div className="bg-plaster-100 py-16 lg:py-24">
        <div className={`${container} grid items-center gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <Chapter
              id="ch-wood"
              title="עץ: המקום שבו הבית פוגש את החוץ."
              text="פרגולות, דקים, גדרות וגגונים שמתוכננים במיוחד לבית שלכם. החצר והמרפסת מקבלות את אותה תשומת לב כמו הסלון."
              items={["פרגולות וגגונים", "דקים מעץ", "גדרות עץ"]}
            />
          </div>
          <div className="rounded-2xl border border-plaster-300 bg-plaster-50 p-4 sm:p-8 lg:col-span-7">
            <PergolaDrawing className="h-auto w-full" />
          </div>
        </div>
      </div>

      {/* שלד */}
      <div className="bg-navy-950 py-16 text-white lg:py-24">
        <div className={`${container} grid items-center gap-10 lg:grid-cols-12 lg:gap-16`}>
          <figure className="lg:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/neot-golf-caesarea.jpg"
              alt="בניינים במתחם נאות גולף בקיסריה לאחר עבודות שיקום של אלון עבודות בניה"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-navy-200">
              מתוך עבודות החברה: שיקום 10 בניינים במתחם נאות גולף, קיסריה
            </figcaption>
          </figure>
          <div className="lg:col-span-6">
            <h3
              id="ch-structure"
              className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-white sm:text-[2.15rem]"
            >
              שלד ושיפוצים: אותו צוות בונה, ואותו צוות מגמר.
            </h3>
            <p className="mt-4 max-w-[38rem] text-[17px] leading-[1.75] text-navy-100">
              יסודות, קירות, עמודים ותקרות בבטון, ברזל ובלוקים, וגם שיפוצים כלליים ושיקום מבנים
              קיימים. כשאותו צוות בונה את השלד ומבצע את הגמר, כל שלב מתוכנן מראש יחד עם השלב
              שאחריו.
            </p>
            <ul className="mt-6 max-w-[38rem] divide-y divide-white/10 border-y border-white/10">
              {["יסודות, קירות, עמודים ותקרות", "שיפוצים כלליים", "שיקום מבנים קיימים"].map((it) => (
                <li key={it} className="flex items-center gap-3 py-3 text-[15px] font-semibold text-navy-50">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section aria-labelledby="quality-title" className="bg-white py-20 lg:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-6">
          <h2
            id="quality-title"
            className="text-[2rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy-900 sm:text-[2.6rem]"
          >
            שיפוע ריצוף לא מדויק. תקרת גבס עקומה. פרגולה שלא מחזיקה מעמד.
          </h2>
          <p className="mt-6 max-w-[38rem] text-[17px] leading-[1.75] text-navy-700">
            את הטעויות האלה רואים כל יום, כי עבודות הגמר הן השלב שבו הכי קל לטעות. לכן כל עבודת
            גמר אצלנו מלווה בבקרת איכות ובפיקוח צמוד, מהשלב הראשון ועד המסירה. מגמר בסיסי ועד גמר
            יוקרה, לפי מה שאתם צריכים, ותמיד בהתאם לתקן הישראלי.
          </p>
        </div>
        <dl className="self-end lg:col-span-5 lg:col-start-8">
          {[
            ["קבלן רשום", "אלון מור, קבלן רשום מספר 27094"],
            ["פיקוח בשטח", "הנדסאי בניין ומנהל עבודה בכל פרויקט"],
            ["אחריות", "אחריות מלאה לטיב העבודה"],
            ["תקן", "ביצוע בהתאם לתקן הישראלי"],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-plaster-200 py-5 last:border-b">
              <dt className="text-sm font-bold text-teal-700">{k}</dt>
              <dd className="text-[17px] font-semibold text-navy-900">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-plaster-100 py-20 lg:py-28">
      <div className={container}>
        <h2
          id="process-title"
          className="max-w-3xl text-[2rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy-900 sm:text-[2.6rem]"
        >
          הכול מתחיל בפגישה בשטח.
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-navy-800 pt-6">
              <span className="text-sm font-bold tabular-nums text-teal-700">שלב {i + 1}</span>
              <h3 className="mt-2 text-xl font-extrabold text-navy-900">{s.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-navy-700">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section aria-labelledby="areas-title" className="bg-white py-20 lg:py-24">
      <div className={`${container} grid gap-8 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-4">
          <h2
            id="areas-title"
            className="text-[2rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy-900 sm:text-[2.4rem]"
          >
            עבודות גמר בכל אזור המרכז
          </h2>
          <p className="mt-4 flex items-center gap-2 text-[16px] font-semibold text-navy-700">
            <MapPinIcon className="h-5 w-5 text-teal-600" />
            המשרד שלנו במושב חדיד
          </p>
        </div>
        <p className="text-[1.35rem] font-bold leading-[1.9] text-navy-800 sm:text-[1.6rem] lg:col-span-8">
          {CITIES.map((c, i) => (
            <Fragment key={c}>
              <span className="whitespace-nowrap">
                {c}
                {i < CITIES.length - 1 && <span className="ms-2.5 text-teal-500">·</span>}
              </span>{" "}
            </Fragment>
          ))}
          <span className="text-navy-500">ובכל הישובים שבסביבה.</span>
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="lead-form" aria-labelledby="contact-title" className="scroll-mt-20 bg-navy-900 py-20 lg:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <h2
            id="contact-title"
            className="text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl"
          >
            יש לכם פרויקט? נשמח לשמוע עליו.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-[1.75] text-navy-100">
            ספרו לנו מה אתם מתכננים, ונגיע אליכם לפגישת היכרות ומדידה.
          </p>
          <ul className="mt-10 space-y-1 border-t border-white/15">
            <ContactRow icon={<PhoneIcon className="h-5 w-5" />} label="נייד">
              <PhoneLink location="gmar_contact" withIcon={false} className="hover:text-teal-300">
                <span dir="ltr">{COMPANY.phonePrimary}</span>
              </PhoneLink>
            </ContactRow>
            <ContactRow icon={<PhoneIcon className="h-5 w-5" />} label="משרד">
              <a href={OFFICE_TEL} className="hover:text-teal-300" dir="ltr">
                {OFFICE_PHONE}
              </a>
            </ContactRow>
            <ContactRow icon={<WhatsappIcon className="h-5 w-5" />} label="וואטסאפ">
              <WhatsappLink
                location="gmar_contact"
                href={GMAR_WHATSAPP_URL}
                withIcon={false}
                className="hover:text-teal-300"
              >
                שליחת הודעה
              </WhatsappLink>
            </ContactRow>
            <ContactRow icon={<MailIcon className="h-5 w-5" />} label="אימייל">
              <a href={CONTACT.mailto} className="hover:text-teal-300" dir="ltr">
                {COMPANY.email}
              </a>
            </ContactRow>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <LeadForm
            serviceOptions={GMAR_SERVICE_OPTIONS}
            whatsappHref={GMAR_WHATSAPP_URL}
            messagePlaceholder="ספרו לנו בקצרה על הבית ועל העבודות שאתם מתכננים..."
            submitLabel="תיאום פגישה בשטח"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-4 border-b border-white/15 py-4">
      <span className="text-teal-400">{icon}</span>
      <span className="w-20 text-sm text-navy-200">{label}</span>
      <span className="text-[17px] font-bold text-white">{children}</span>
    </li>
  );
}

function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
        <h2
          id="faq-title"
          className="text-[2rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy-900 sm:text-[2.6rem] lg:col-span-4"
        >
          שאלות שאנחנו שומעים בפגישה הראשונה
        </h2>
        <div className="border-t border-plaster-200 lg:col-span-8">
          {FAQ.map((f) => (
            <details key={f.q} className="gm-faq group border-b border-plaster-200">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-bold text-navy-900 transition-colors hover:text-teal-700">
                {f.q}
                <span
                  className="gm-faq-icon gm-ease relative h-5 w-5 shrink-0 transition-transform duration-500"
                  aria-hidden="true"
                >
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-teal-600" />
                  <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded bg-teal-600" />
                </span>
              </summary>
              <p className="max-w-[44rem] pb-6 text-[17px] leading-[1.75] text-navy-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function GmarFooter() {
  return (
    <footer className="bg-navy-950 pb-24 pt-12 text-navy-200 lg:pb-12">
      <div className={`${container} flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <p className="font-bold text-white">{COMPANY.name}</p>
          <p className="mt-1">מושב חדיד 180 · קבלן רשום מס׳ 27094</p>
        </div>
        <nav aria-label="קישורים" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/" className="hover:text-white">שיקום וחיזוק מבנים</a>
          <a href="/privacy" className="hover:text-white">מדיניות פרטיות</a>
          <a href="/accessibility" className="hover:text-white">הצהרת נגישות</a>
        </nav>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-100 bg-white shadow-[0_-4px_20px_-6px_rgba(15,42,71,0.18)] lg:hidden">
      <WhatsappLink
        location="gmar_mobile_bar"
        href={GMAR_WHATSAPP_URL}
        withIcon={false}
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 font-bold text-white"
      >
        <WhatsappIcon className="h-5 w-5" />
        וואטסאפ
      </WhatsappLink>
      <PhoneLink
        location="gmar_mobile_bar"
        withIcon={false}
        className="flex items-center justify-center gap-2 bg-navy-800 py-3.5 font-bold text-white"
      >
        <PhoneIcon className="h-5 w-5" />
        התקשרו
      </PhoneLink>
    </div>
  );
}
