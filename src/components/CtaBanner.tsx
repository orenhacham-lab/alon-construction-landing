import { Reveal } from "@/components/Reveal";
import { ScrollToFormButton, WhatsappLink } from "@/components/CtaButtons";
import { ArrowLeftIcon } from "@/components/icons";

export function CtaBanner() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient px-6 py-12 text-center shadow-card-hover sm:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-teal-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-sky-brand/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                אל תחכו שהנזק יחמיר
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-100/90">
                שיקום נכון בזמן יכול למנוע נזקים גדולים יותר, לשפר את בטיחות המבנה
                ולחדש את המראה שלו לשנים קדימה.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ScrollToFormButton className="btn btn-lg btn-primary group">
                  השאירו פרטים
                  <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </ScrollToFormButton>
                <WhatsappLink location="cta_banner" className="btn btn-lg btn-outline-white">
                  דברו איתנו בוואטסאפ
                </WhatsappLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
