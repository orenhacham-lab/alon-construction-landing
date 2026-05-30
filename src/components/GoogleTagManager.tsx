import { GTM_ID } from "@/lib/gtm";

/**
 * Google Tag Manager - הטמעה רשמית.
 *
 * GtmHeadScript: סקריפט ה-GTM הרשמי (inline) שמוזרק ישירות ל-<head>.
 * נטען מיד עם טעינת הדף, מופיע ב-view-source ויוצר את window.dataLayer.
 *
 * GtmNoScript: תגית ה-noscript הרשמית - חייבת להופיע מיד אחרי פתיחת <body>.
 *
 * שני הרכיבים הם Server Components (ללא "use client"), כך שה-HTML מרונדר בשרת
 * ואין בעיית hydration או חסימה.
 */

export function GtmHeadScript() {
  if (!GTM_ID) return null;
  return (
    <script
      id="gtm-base"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
