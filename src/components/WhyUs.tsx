import { Reveal } from "@/components/Reveal";
import { ScrollToFormButton, WhatsappLink } from "@/components/CtaButtons";
import { CheckIcon, ArrowLeftIcon } from "@/components/icons";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24 overflow-hidden bg-navy-gradient pb-16 pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />

      <div className="container-px relative grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* כותרת + CTA */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm font-bold text-teal-200">
              היתרון שלנו
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              למה לבחור באלון עבודות בניה בע״מ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-100/85">
              שילוב נדיר של ניסיון הנדסי, ניהול פרויקט מסודר ויחס אישי - כך אנחנו
              מבצעים את העבודות המורכבות ביותר, ברמת גימור גבוהה ובבטיחות מלאה.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ScrollToFormButton className="btn btn-lg btn-primary group">
                קבלו בדיקה מקצועית
                <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </ScrollToFormButton>
              <WhatsappLink location="why_us" className="btn btn-lg btn-outline-white">
                דברו איתנו בוואטסאפ
              </WhatsappLink>
            </div>
          </Reveal>
        </div>

        {/* רשימת יתרונות */}
        <div className="lg:col-span-7">
          <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {WHY_US.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-gradient text-white shadow-cta">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-navy-50">{point}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
