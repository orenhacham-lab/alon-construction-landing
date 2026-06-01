"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { WhatsappLink, PhoneLink, ScrollToFormButton, scrollToForm } from "@/components/CtaButtons";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsappIcon } from "@/components/icons";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#services", label: "שירותים" },
  { href: "#projects", label: "פרויקטים" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#why-us", label: "למה אנחנו" },
  { href: "#lead-form", label: "צור קשר" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navHref = (href: string) => (isHome ? href : `/${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* לוגו */}
        <a href="/" className="flex items-center" aria-label={COMPANY.name}>
          <BrandLogo variant="header" imgClassName="h-12 w-auto sm:h-14 lg:h-16" />
        </a>

        {/* ניווט - דסקטופ */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href)}
              className="text-sm font-semibold text-navy-700 transition-colors hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* פעולות - דסקטופ */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <PhoneLink
            location="header"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-navy-800 transition-colors hover:bg-navy-50"
          >
            <span dir="ltr">{COMPANY.phonePrimary}</span>
          </PhoneLink>
          <WhatsappLink
            location="header"
            withIcon={false}
            className="btn btn-md btn-whatsapp"
          >
            <WhatsappIcon className="h-5 w-5" />
            וואטסאפ
          </WhatsappLink>
          {isHome ? (
            <ScrollToFormButton className="btn btn-md btn-primary">
              לקבלת הצעת מחיר
            </ScrollToFormButton>
          ) : (
            <a href="/#lead-form" className="btn btn-md btn-primary">
              לקבלת הצעת מחיר
            </a>
          )}
        </div>

        {/* פעולות - מובייל */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <PhoneLink
            location="header_mobile"
            withIcon={false}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800"
          >
            <PhoneIcon className="h-5 w-5" />
          </PhoneLink>
          <WhatsappLink
            location="header_mobile"
            withIcon={false}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white"
          >
            <WhatsappIcon className="h-5 w-5" />
          </WhatsappLink>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={menuOpen}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
              scrolled
                ? "border-navy-100 text-navy-800"
                : "border-white/40 text-white"
            }`}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* תפריט מובייל */}
      {menuOpen && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <nav className="container-px flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="border-b border-navy-50 py-3 text-base font-semibold text-navy-800"
              >
                {link.label}
              </a>
            ))}
            {isHome ? (
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToForm();
                }}
                className="btn btn-lg btn-primary mt-4 w-full"
              >
                לקבלת הצעת מחיר
              </button>
            ) : (
              <a
                href="/#lead-form"
                onClick={() => setMenuOpen(false)}
                className="btn btn-lg btn-primary mt-4 w-full"
              >
                לקבלת הצעת מחיר
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
