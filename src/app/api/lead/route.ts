import { NextResponse } from "next/server";
import { SERVICE_OPTIONS } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  message?: string;
  company_website?: string; // honeypot
};

const TO_EMAIL = process.env.LEADS_TO_EMAIL || "itzhakov.marina@gmail.com";
const FROM_EMAIL =
  process.env.LEADS_FROM_EMAIL || "אלון עבודות בניה <onboarding@resend.dev>";
const BCC_EMAIL = process.env.LEADS_BCC_EMAIL;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function serviceLabel(value?: string): string {
  if (!value) return "לא צוין";
  return SERVICE_OPTIONS.find((o) => o.value === value)?.label || value;
}

function buildHtml(lead: Required<Pick<LeadPayload, "fullName" | "phone">> & LeadPayload) {
  const submittedAt = new Intl.DateTimeFormat("he-IL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Jerusalem",
  }).format(new Date());

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 14px;background:#f1f5f9;font-weight:700;color:#0f2a47;white-space:nowrap;">${label}</td>
      <td style="padding:10px 14px;color:#1b2733;">${value}</td>
    </tr>`;

  const phoneDigits = lead.phone.replace(/[^\d+]/g, "");

  return `<!doctype html>
<html lang="he" dir="rtl"><head><meta charset="utf-8" /></head>
<body style="margin:0;background:#eef3f8;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:linear-gradient(135deg,#0f2a47,#13314f);border-radius:16px 16px 0 0;padding:24px;text-align:center;">
      <h1 style="margin:0;color:#fff;font-size:20px;">ליד חדש מהאתר 🛠️</h1>
      <p style="margin:6px 0 0;color:#67d9e8;font-size:14px;">אלון עבודות בניה בע"מ</p>
    </div>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:0 0 16px 16px;overflow:hidden;font-size:15px;">
      ${row("שם מלא", escapeHtml(lead.fullName))}
      ${row("טלפון", `<a href="tel:${phoneDigits}" style="color:#188297;text-decoration:none;font-weight:700;" dir="ltr">${escapeHtml(lead.phone)}</a>`)}
      ${lead.email ? row("אימייל", `<a href="mailto:${escapeHtml(lead.email)}" style="color:#188297;" dir="ltr">${escapeHtml(lead.email)}</a>`) : ""}
      ${lead.city ? row("עיר / אזור", escapeHtml(lead.city)) : ""}
      ${row("סוג הפנייה", escapeHtml(serviceLabel(lead.service)))}
      ${lead.message ? row("הודעה", escapeHtml(lead.message).replace(/\n/g, "<br/>")) : ""}
      ${row("התקבל בתאריך", submittedAt)}
    </table>
    <p style="text-align:center;color:#7e9fc2;font-size:12px;margin-top:16px;">
      ליד זה נשלח אוטומטית מטופס יצירת הקשר באתר.
    </p>
  </div>
</body></html>`;
}

function buildText(lead: LeadPayload) {
  return [
    "ליד חדש מהאתר - אלון עבודות בניה בע\"מ",
    "----------------------------------------",
    `שם מלא: ${lead.fullName}`,
    `טלפון: ${lead.phone}`,
    lead.email ? `אימייל: ${lead.email}` : null,
    lead.city ? `עיר / אזור: ${lead.city}` : null,
    `סוג הפנייה: ${serviceLabel(lead.service)}`,
    lead.message ? `הודעה: ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  let lead: LeadPayload;
  try {
    lead = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // מלכודת דבש - אם השדה מולא, ככל הנראה בוט. מחזירים הצלחה בלי לשלוח.
  if (lead.company_website && lead.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const fullName = (lead.fullName || "").trim();
  const phone = (lead.phone || "").trim();
  const digits = phone.replace(/\D/g, "");

  if (fullName.length < 2 || digits.length < 9) {
    return NextResponse.json(
      { ok: false, error: "validation_failed" },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // לא נחשף מפתח; מחזירים שגיאה ברורה ללוג בלבד.
    console.error(
      "[lead] RESEND_API_KEY is missing - cannot send email. Set it in the environment variables.",
    );
    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 500 },
    );
  }

  const cleanLead: LeadPayload & { fullName: string; phone: string } = {
    fullName,
    phone,
    email: (lead.email || "").trim(),
    city: (lead.city || "").trim(),
    service: (lead.service || "").trim(),
    message: (lead.message || "").trim(),
  };

  const emailValid =
    cleanLead.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanLead.email);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        ...(BCC_EMAIL ? { bcc: [BCC_EMAIL] } : {}),
        ...(emailValid ? { reply_to: cleanLead.email } : {}),
        subject: `ליד חדש מהאתר - ${fullName} (${serviceLabel(cleanLead.service)})`,
        html: buildHtml(cleanLead),
        text: buildText(cleanLead),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[lead] Resend API error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Unexpected error sending email:", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}
