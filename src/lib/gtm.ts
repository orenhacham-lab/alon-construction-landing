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

/** נרמול מספר טלפון ישראלי לפורמט E.164 */
function normalizeIsraeliPhone(raw: string): string {
  let phone = raw.replace(/[\s\-\(\)]/g, "");
  if (phone.startsWith("00972")) phone = "+" + phone.slice(2);
  else if (phone.startsWith("0")) phone = "+972" + phone.slice(1);
  else if (!phone.startsWith("+")) phone = "+972" + phone;
  return phone;
}

/** פיצול שם מלא: מילה ראשונה = first_name, שאר = last_name */
function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/**
 * אירוע Enhanced Conversions ל-Google Ads.
 * נדחף רק לאחר אישור הצלחה מהשרת.
 */
export function trackFormSubmitSuccess(params: {
  fullName: string;
  phone: string;
  email: string;
  selectedService: string;
}): void {
  const { firstName, lastName } = splitFullName(params.fullName);
  const normalizedPhone = normalizeIsraeliPhone(params.phone);
  const normalizedEmail = params.email.trim().toLowerCase();

  pushDataLayer({
    event: "form_submit_success",
    form_name: "alon_construction_landing",
    lead_type: params.selectedService || "unspecified",
    user_data: {
      phone_number: normalizedPhone,
      address: {
        email: normalizedEmail,
        first_name: firstName,
        last_name: lastName,
        country: "IL",
        postal_code: "",
      },
    },
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
