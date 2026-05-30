import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPinIcon } from "@/components/icons";
import { PROJECTS } from "@/lib/constants";

/** באנר אדריכלי לכותרת כרטיס הפרויקט */
function ProjectBanner({ location }: { location: string }) {
  return (
    <div className="relative h-40 overflow-hidden bg-navy-gradient">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <svg
        viewBox="0 0 400 160"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-x-0 bottom-0 h-32 w-full"
        aria-hidden="true"
      >
        <g fill="#13314F" stroke="#34C2D6" strokeOpacity="0.5" strokeWidth="1">
          <rect x="40" y="60" width="70" height="100" rx="2" />
          <rect x="150" y="30" width="90" height="130" rx="2" />
          <rect x="280" y="74" width="80" height="86" rx="2" />
        </g>
        {/* חלונות */}
        <g fill="#34C2D6" opacity="0.75">
          {[0, 1, 2].map((c) =>
            [0, 1, 2, 3].map((r) => (
              <rect key={`b1-${c}-${r}`} x={52 + c * 20} y={74 + r * 20} width="11" height="11" rx="1.5" />
            )),
          )}
          {[0, 1, 2, 3].map((c) =>
            [0, 1, 2, 3, 4, 5].map((r) => (
              <rect key={`b2-${c}-${r}`} x={162 + c * 20} y={44 + r * 18} width="12" height="11" rx="1.5" />
            )),
          )}
          {[0, 1, 2].map((c) =>
            [0, 1, 2, 3].map((r) => (
              <rect key={`b3-${c}-${r}`} x={292 + c * 22} y={88 + r * 18} width="12" height="11" rx="1.5" />
            )),
          )}
        </g>
        <line x1="0" y1="160" x2="400" y2="160" stroke="#34C2D6" strokeOpacity="0.5" strokeWidth="2" />
      </svg>

      <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white backdrop-blur">
        <MapPinIcon className="h-4 w-4 text-teal-300" />
        {location}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-navy-50/60 py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="פרויקטים נבחרים"
          title="פרויקטים מורכבים, ביצוע ללא פשרות"
          subtitle="מבט על חלק מהפרויקטים שביצענו - שיקום מבנים מאוכלסים, הסרת צווי מבנה מסוכן ועבודות שימור עדינות."
        />

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="card flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover">
                <ProjectBanner location={project.location} />
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-md bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-navy-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-600">
                    {project.text}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy-100 pt-5">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-extrabold text-teal-600">
                          {stat.value}
                        </p>
                        <p className="text-xs font-medium text-navy-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
