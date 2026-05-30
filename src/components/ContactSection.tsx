import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { WhatsappLink, PhoneLink } from "@/components/CtaButtons";
import { PhoneIcon, WhatsappIcon, MailIcon, MapPinIcon, CheckIcon } from "@/components/icons";
import { COMPANY, CONTACT } from "@/lib/constants";

const FORM_TRUST = [
  "חזרה מהירה עם תשובה מקצועית",
  "בדיקה ראשונית ללא התחייבות",
  "ליווי אישי לאורך כל הדרך",
];

export function ContactSection() {
  return (
    <section
      id="lead-form"
      className="relative scroll-mt-20 overflow-hidden bg-navy-gradient pb-16 pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />

      <div className="container-px relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* מידע */}
        <div className="lg:pt-4">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm font-bold text-teal-200">
              דברו איתנו
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              רוצים לבדוק מה נכון לעשות עם המבנה שלכם?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-100/85">
              השאירו פרטים ונחזור אליכם לשיחה מקצועית ראשונית.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-7 space-y-3">
              {FORM_TRUST.map((t) => (
                <li key={t} className="flex items-center gap-3 text-navy-50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-gradient text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* יצירת קשר ישירה */}
          <Reveal delay={150}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <PhoneLink
                location="contact_section"
                withIcon={false}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-gradient text-white">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-navy-100/70">חייגו אלינו</span>
                  <span className="block font-extrabold text-white" dir="ltr">
                    {COMPANY.phonePrimary}
                  </span>
                </span>
              </PhoneLink>

              <WhatsappLink
                location="contact_section"
                withIcon={false}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-navy-100/70">כתבו לנו</span>
                  <span className="block font-extrabold text-white">וואטסאפ</span>
                </span>
              </WhatsappLink>

              <a
                href={CONTACT.mailto}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-navy-100/70">מייל</span>
                  <span className="block font-extrabold text-white" dir="ltr">
                    {COMPANY.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-navy-100/70">כתובת</span>
                  <span className="block font-bold text-white">{COMPANY.address}</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* טופס */}
        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
