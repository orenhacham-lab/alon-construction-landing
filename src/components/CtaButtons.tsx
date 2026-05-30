"use client";

import type { ReactNode } from "react";
import { WHATSAPP_URL, CONTACT } from "@/lib/constants";
import { trackWhatsappClick, trackPhoneClick } from "@/lib/gtm";
import { WhatsappIcon, PhoneIcon } from "@/components/icons";

/** קישור וואטסאפ עם מעקב אירוע whatsapp_click */
export function WhatsappLink({
  children,
  className = "",
  location = "general",
  withIcon = true,
}: {
  children: ReactNode;
  className?: string;
  location?: string;
  withIcon?: boolean;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(location)}
      className={className}
      aria-label="פתיחת שיחת וואטסאפ"
    >
      {withIcon && <WhatsappIcon className="h-5 w-5" />}
      {children}
    </a>
  );
}

/** קישור חיוג עם מעקב אירוע phone_click */
export function PhoneLink({
  children,
  className = "",
  location = "general",
  withIcon = true,
}: {
  children: ReactNode;
  className?: string;
  location?: string;
  withIcon?: boolean;
}) {
  return (
    <a
      href={CONTACT.telPrimary}
      onClick={() => trackPhoneClick(location)}
      className={className}
      aria-label="חיוג לטלפון"
    >
      {withIcon && <PhoneIcon className="h-5 w-5" />}
      {children}
    </a>
  );
}

/** גלילה חלקה אל טופס הליד */
export function scrollToForm() {
  if (typeof document === "undefined") return;
  const el = document.getElementById("lead-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstInput = el.querySelector<HTMLInputElement>("input[name='fullName']");
    window.setTimeout(() => firstInput?.focus({ preventScroll: true }), 600);
  }
}

/** כפתור שמגלגל אל טופס הליד */
export function ScrollToFormButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={scrollToForm} className={className}>
      {children}
    </button>
  );
}
