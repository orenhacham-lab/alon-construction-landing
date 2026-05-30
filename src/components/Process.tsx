import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="איך זה עובד"
          title="תהליך עבודה ברור ומסודר, מהשיחה הראשונה ועד המסירה"
          subtitle="ליווי אישי בכל שלב, בלי הפתעות - אתם תמיד יודעים מה קורה עם המבנה שלכם."
        />

        <div className="relative mt-14">
          {/* קו מחבר - דסקטופ */}
          <div className="absolute inset-x-8 top-7 hidden h-0.5 bg-gradient-to-l from-teal-100 via-teal-300 to-teal-100 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-gradient text-xl font-extrabold text-white shadow-cta ring-4 ring-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-navy-600">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
