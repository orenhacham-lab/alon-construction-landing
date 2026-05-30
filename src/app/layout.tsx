import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { GtmHeadScript, GtmNoScript } from "@/components/GoogleTagManager";
import { COMPANY, CONTACT } from "@/lib/constants";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://alon-construction-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'שיקום וחיזוק מבנים | אלון עבודות בניה בע"מ',
    template: '%s | אלון עבודות בניה בע"מ',
  },
  description:
    'אלון עבודות בניה בע"מ מתמחה בשיקום בטונים, חיזוק מבנים, טיפול במבנים מסוכנים וחידוש חזיתות ברמה מקצועית גבוהה.',
  keywords: [
    "שיקום מבנים",
    "חיזוק מבנים",
    "שיקום בטונים",
    "מבנים מסוכנים",
    "הסרת צו מבנה מסוכן",
    "חידוש חזיתות",
    "עבודות טיח ושליכט",
    "שיקום מבנים לשימור",
    "אלון עבודות בניה",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: COMPANY.name,
    title: 'שיקום וחיזוק מבנים | אלון עבודות בניה בע"מ',
    description:
      "מתמחים בשיקום בטונים, חיזוק וחידוש מבנים, טיפול במבנים מסוכנים ושיקום מבנים לשימור - בליווי מקצועי ותוצאות שנשארות לאורך שנים.",
  },
  twitter: {
    card: "summary_large_image",
    title: 'שיקום וחיזוק מבנים | אלון עבודות בניה בע"מ',
    description:
      "מתמחים בשיקום בטונים, חיזוק וחידוש מבנים, טיפול במבנים מסוכנים ושיקום מבנים לשימור.",
  },
  category: "construction",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2A47",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: COMPANY.name,
  description:
    'אלון עבודות בניה בע"מ מתמחה בשיקום בטונים, חיזוק מבנים, טיפול במבנים מסוכנים, חידוש חזיתות, עבודות טיח ושליכט ושיקום מבנים לשימור.',
  url: siteUrl,
  telephone: "+972546217217",
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    postalCode: COMPANY.zip,
    addressCountry: "IL",
  },
  areaServed: { "@type": "Country", name: "ישראל" },
  knowsAbout: [
    "שיקום בטונים",
    "חיזוק מבנים",
    "טיפול במבנים מסוכנים",
    "חידוש חזיתות",
    "עבודות טיח ושליכט",
    "שיקום מבנים לשימור",
  ],
  sameAs: [`https://wa.me/${CONTACT.whatsappNumber}`],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <head>
        {/* Google Tag Manager - סקריפט רשמי ב-head */}
        <GtmHeadScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <GtmNoScript />
        {children}
      </body>
    </html>
  );
}
