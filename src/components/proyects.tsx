import { ProyectCard } from "./proyectscard";

const proyects = [
  {
    title: "Hypothesis Tracker",
    img: "https://placehold.co/150x150",
    description:
      "Plataforma web para crear, seguir y validar hipótesis de producto. Ingieres eventos por webhook y ves el progreso contra el objetivo en gráficas en tiempo real, con auto-validación al llegar a la meta.",
    direction: "https://hypothesis-tracker.vercel.app",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tremor"],
  },
];
export const Proyects = () => {
  return (
    <>
      <section id="proyects" className="sections flex flex-col gap-3">
        <h3 className="subtitle">Proyectos</h3>
        {proyects.map((current) => (
          <ProyectCard
            key={current.title}
            description={current.description}
            title={current.title}
            img={current.img}
            direction={current.direction}
            technologies={current.technologies}
          ></ProyectCard>
        ))}
      </section>
    </>
  );
};
