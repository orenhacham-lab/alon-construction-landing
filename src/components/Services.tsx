import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/icons";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="התחומים שלנו"
          title="פתרון מלא לשיקום, חיזוק וחידוש מבנים"
          subtitle="מאבחון ראשוני ועד מסירה מסודרת - אנחנו מלווים את הפרויקט בכל שלב, עם התמחות בכל סוגי העבודות."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 70}>
              <article className="group card h-full p-6 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-card-hover">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 ring-1 ring-teal-100 transition-colors group-hover:from-teal-500 group-hover:to-teal-400 group-hover:text-white group-hover:ring-teal-400">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy-600">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
