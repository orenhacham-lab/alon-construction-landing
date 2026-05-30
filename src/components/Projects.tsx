import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { MapPinIcon } from "@/components/icons";
import { SceneCaesarea, SceneAzoreiChen, SceneBalfour } from "@/components/scenes";
import { PROJECTS } from "@/lib/constants";

const SCENES = {
  caesarea: SceneCaesarea,
  azorei: SceneAzoreiChen,
  balfour: SceneBalfour,
} as const;

type Project = (typeof PROJECTS)[number];

/** באנר ייחודי לכל פרויקט - תמונה אמיתית אם הועלתה, אחרת ויזואל ייעודי */
function ProjectBanner({ project }: { project: Project }) {
  const Scene = SCENES[project.scene];
  return (
    <div className="relative h-44 overflow-hidden">
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        imgClassName="absolute inset-0 h-full w-full object-cover"
        fallback={<Scene className="absolute inset-0 h-full w-full" />}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 to-transparent" />
      <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur">
        <MapPinIcon className="h-4 w-4 text-teal-300" />
        {project.location}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-navy-50/60 pb-14 pt-16 lg:pb-16 lg:pt-20">
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
                <ProjectBanner project={project} />
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
