import { ProyectCard } from "./proyectscard";

const proyects = [
  {
    title: "Hypothesis Tracker",
    img: "/Hypothesis_tracker.png",
    description:
      "Plataforma web para crear, seguir y validar hipótesis de producto. Ingieres eventos por webhook y ves el progreso contra el objetivo en gráficas en tiempo real, con auto-validación al llegar a la meta.",
    direction: "https://github.com/sliomota/hypotesys_traker",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tremor"],
  },
  {
    title: "SwissMate",
    img: "/SwissMate.png",
    description:
      "Gestor de torneos de ajedrez con sistema suizo. Organiza rondas, registra resultados, asigna cruces y lleva el ranking de jugadores en tiempo real.",
    direction: "https://github.com/sergiopen/SwissMate/",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
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
