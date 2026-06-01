import { BrandLogo } from "@/components/BrandLogo";
import { WhatsappLink, PhoneLink } from "@/components/CtaButtons";
import { PhoneIcon, WhatsappIcon, MailIcon, MapPinIcon, FaxIcon } from "@/components/icons";
import { COMPANY, CONTACT } from "@/lib/constants";

const QUICK_LINKS = [
  { href: "#services", label: "השירותים שלנו" },
  { href: "#projects", label: "פרויקטים" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#why-us", label: "למה לבחור בנו" },
  { href: "#lead-form", label: "השארת פרטים" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* מותג */}
          <div className="lg:col-span-4">
            <BrandLogo variant="footer" imgClassName="h-12 w-auto" showTagline />
            <p className="mt-5 max-w-sm leading-relaxed text-navy-100/70">
              מתמחים בשיקום בטונים, חיזוק וחידוש מבנים, טיפול במבנים מסוכנים
              ושיקום מבנים לשימור - בליווי מקצועי ובבטיחות מלאה.
            </p>
            <div className="mt-6 flex gap-3">
              <WhatsappLink
                location="footer"
                withIcon={false}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white transition-transform hover:scale-105"
              >
                <WhatsappIcon className="h-5 w-5" />
              </WhatsappLink>
              <PhoneLink
                location="footer"
                withIcon={false}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-gradient text-white transition-transform hover:scale-105"
              >
                <PhoneIcon className="h-5 w-5" />
              </PhoneLink>
              <a
                href={CONTACT.mailto}
                aria-label="שליחת מייל"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-200 transition-transform hover:scale-105"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ניווט מהיר */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
              ניווט מהיר
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-100/75 transition-colors hover:text-teal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* פרטי יצירת קשר */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
              {COMPANY.name}
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                <span className="text-navy-100/80">
                  {COMPANY.address}, מיקוד {COMPANY.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-teal-300" />
                <span className="flex flex-wrap items-center gap-x-3 text-navy-100/80">
                  <PhoneLink
                    location="footer_details"
                    withIcon={false}
                    className="font-semibold text-white hover:text-teal-300"
                  >
                    <span dir="ltr">{COMPANY.phonePrimary}</span>
                  </PhoneLink>
                  <a href={CONTACT.telSecondary} className="hover:text-teal-300" dir="ltr">
                    {COMPANY.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaxIcon className="h-5 w-5 shrink-0 text-teal-300" />
                <span className="text-navy-100/80">
                  פקס: <span dir="ltr">{COMPANY.fax}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-teal-300" />
                <a
                  href={CONTACT.mailto}
                  className="text-navy-100/80 hover:text-teal-300"
                  dir="ltr"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* שורת זכויות יוצרים */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-sm text-navy-100/60 sm:flex-row">
          <p>
            © {year} {COMPANY.name}. כל הזכויות שמורות. נבנה ע"י{" "}
            <a
              href="https://www.gotop.co.il"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              Go Top
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="hover:text-teal-300 transition-colors"
            >
              מדיניות פרטיות
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/accessibility"
              className="hover:text-teal-300 transition-colors"
            >
              נגישות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
