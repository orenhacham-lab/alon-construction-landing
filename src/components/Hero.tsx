import { HeroVisual } from "@/components/HeroVisual";
import { ScrollToFormButton, WhatsappLink } from "@/components/CtaButtons";
import { CheckIcon, ArrowLeftIcon } from "@/components/icons";
import { TRUST_POINTS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-gradient pt-24 lg:pt-32"
    >
      {/* שכבות רקע */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.4]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent" />

      <div className="container-px relative grid items-center gap-12 pb-14 lg:grid-cols-2 lg:gap-8 lg:pb-20">
        {/* תוכן */}
        <div className="animate-fade-up text-center lg:text-right">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm font-bold text-teal-200">
            שיקום · חיזוק · חידוש מבנים
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            הבניין שלכם
            <br className="hidden sm:block" /> מתחיל{" "}
            <span className="text-gradient">להתפורר?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-100/90 lg:mx-0">
            אנחנו מתמחים בחיזוק, שיקום וחידוש מבנים ברמה הגבוהה ביותר, עם ליווי
            מקצועי ותוצאות שנשארות לאורך שנים.
          </p>

          {/* כפתורי פעולה */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ScrollToFormButton className="btn btn-lg btn-primary group">
              השאירו פרטים לבדיקה מקצועית
              <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </ScrollToFormButton>
            <WhatsappLink location="hero" className="btn btn-lg btn-outline-white">
              שיחה מהירה בוואטסאפ
            </WhatsappLink>
          </div>

          {/* נקודות אמון */}
          <ul className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:mx-0">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm font-semibold text-navy-100/90"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400/20 text-teal-300">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* ויזואל */}
        <div className="animate-fade-in [animation-delay:200ms]">
          <HeroVisual />
        </div>
      </div>

      {/* גל הפרדה תחתון */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          className="block h-12 w-full sm:h-16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 80 L1440 80 L1440 28 C1080 76 720 0 360 24 C240 32 120 44 0 36 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
