import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollToFormButton } from "@/components/CtaButtons";
import { ArrowLeftIcon } from "@/components/icons";
import { PAIN_POINTS } from "@/lib/constants";

/** סימן אזהרה קטן (משולש) בגוון ענבר ליצירת תחושת דחיפות */
function AlertGlyph() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5 21.5 20H2.5L12 3.5Z" />
        <path d="M12 10v4.5M12 17.5h.01" />
      </svg>
    </span>
  );
}

export function PainPoints() {
  return (
    <section className="bg-navy-50/60 py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="אל תדחו טיפול"
          title="סדקים, בטון מתפורר או ברזל חשוף הם לא משהו שכדאי לדחות"
          subtitle="ככל שממתינים יותר, הנזק מתרחב והעלות גדלה. זיהוי מוקדם וטיפול מקצועי חוסכים זמן, כסף ובעיקר שומרים על בטיחות המבנה."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point} delay={i * 60}>
              <div className="card flex h-full items-center gap-4 p-5 hover:-translate-y-1 hover:shadow-card-hover">
                <AlertGlyph />
                <span className="text-lg font-bold text-navy-800">{point}</span>
              </div>
            </Reveal>
          ))}

          {/* כרטיס CTA משולב ברשת */}
          <Reveal delay={PAIN_POINTS.length * 60}>
            <div className="dot-grid flex h-full flex-col justify-center gap-4 rounded-2xl bg-navy-gradient p-6 text-white shadow-card">
              <p className="text-lg font-extrabold leading-snug">
                רוצים להבין מה מצב המבנה? השאירו פרטים ונחזור אליכם.
              </p>
              <ScrollToFormButton className="btn btn-md btn-primary group w-full sm:w-auto">
                השאירו פרטים
                <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </ScrollToFormButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
