"use client";

import { useState, type FormEvent } from "react";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { trackLeadSubmit, trackFormSubmitSuccess } from "@/lib/gtm";
import { CheckCircleIcon, ArrowLeftIcon } from "@/components/icons";
import { WhatsappLink, PhoneLink } from "@/components/CtaButtons";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
  company_website: string; // honeypot
};

const EMPTY: FormState = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  message: "",
  company_website: "",
};

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-300 transition-colors focus:border-teal-500 focus:bg-white";

export function LeadForm() {
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (data.fullName.trim().length < 2) next.fullName = "נא להזין שם מלא";
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length < 9) next.phone = "נא להזין מספר טלפון תקין";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "כתובת אימייל לא תקינה";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "send failed");
      }
      // אירוע המרה קיים (backward compatibility)
      trackLeadSubmit(data.service || "unspecified");
      // אירוע Enhanced Conversions עם user_data עבור Google Ads
      trackFormSubmitSuccess({
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        selectedService: data.service || "unspecified",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-card sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-leaf/10 text-leaf">
          <CheckCircleIcon className="h-9 w-9" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-navy-900">
          תודה! הפנייה התקבלה
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-600">
          קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם לשיחה מקצועית ראשונית. רוצים
          לקצר תהליכים? אפשר לפנות אלינו ישירות:
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <WhatsappLink location="form_success" className="btn btn-md btn-whatsapp">
            דברו איתנו בוואטסאפ
          </WhatsappLink>
          <PhoneLink location="form_success" className="btn btn-md btn-navy">
            התקשרו עכשיו
          </PhoneLink>
        </div>
        <button
          type="button"
          onClick={() => {
            setData(EMPTY);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card-hover sm:p-8"
    >
      {/* honeypot - מוסתר מהמשתמש, חוסם בוטים */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          אל תמלאו שדה זה
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.company_website}
            onChange={(e) => update("company_website", e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="שם מלא" required error={errors.fullName}>
          <input
            type="text"
            name="fullName"
            autoComplete="name"
            placeholder="ישראל ישראלי"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.fullName}
          />
        </Field>

        <Field label="טלפון" required error={errors.phone}>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder="050-0000000"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={`${inputClass} text-right`}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="אימייל" error={errors.email}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            dir="ltr"
            placeholder="name@example.com"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={`${inputClass} text-right`}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field label="עיר / אזור">
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder="לדוגמה: תל אביב"
            value={data.city}
            onChange={(e) => update("city", e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="סוג הפנייה">
          <select
            name="service"
            value={data.service}
            onChange={(e) => update("service", e.target.value)}
            className={`${inputClass} appearance-none bg-[length:1.25rem] bg-[left_1rem_center] bg-no-repeat`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%231C3E63' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">בחרו את סוג הפנייה</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="הודעה חופשית">
          <textarea
            name="message"
            rows={4}
            placeholder="ספרו לנו בקצרה על המבנה ועל מה שמטריד אתכם..."
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          אירעה שגיאה בשליחת הטופס. אפשר לנסות שוב או לפנות אלינו ישירות בטלפון
          או בוואטסאפ.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-lg btn-primary group mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Spinner /> שולח...
          </>
        ) : (
          <>
            שליחת הפרטים
            <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-navy-400">
        הפרטים נשמרים בדיסקרטיות ומשמשים ליצירת קשר בלבד.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-navy-800">
        {label}
        {required && <span className="text-teal-600"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-red-600">{error}</span>}
    </label>
  );
}

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
    </svg>
  );
}
