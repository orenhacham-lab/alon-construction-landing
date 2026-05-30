/**
 * עזרי Google Tag Manager.
 * מזהה ה-GTM מגיע ממשתנה סביבה (NEXT_PUBLIC_GTM_ID) עם ברירת מחדל קשיחה.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-K6JV8SB6";

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** דחיפה בטוחה של אירוע ל-dataLayer (רק בצד הלקוח) */
export function pushDataLayer(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** אירוע המרה - שליחת טופס ליד מוצלחת */
export function trackLeadSubmit(leadType: string): void {
  pushDataLayer({
    event: "lead_form_submit",
    form_name: "alon_construction_landing",
    lead_type: leadType,
  });
}

/** אירוע לחיצה על וואטסאפ */
export function trackWhatsappClick(location = "general"): void {
  pushDataLayer({ event: "whatsapp_click", click_location: location });
}

/** אירוע לחיצה על טלפון */
export function trackPhoneClick(location = "general"): void {
  pushDataLayer({ event: "phone_click", click_location: location });
}
