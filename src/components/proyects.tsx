import { ProyectCard } from "./proyectscard";
const proyects = [
  {
    title: "Proyects Name Placeholder",
    img: "https://placehold.co/150x150",
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.It’s proud of its thick horn.",
    direction: "#",
    technologies: ["JavaScript", "React", "Java"],
  },
  {
    title: "Proyects Name Placeholder",
    img: "https://placehold.co/150x150",
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.It’s proud of its thick horn.",
    direction: "#",
    technologies: ["JavaScript", "React", "Java"],
  },
];
export const Proyects = () => {
  return (
    <>
      <section id="proyects" className="sections flex flex-col gap-3">
        <h3 className="subtitle">Proyectos</h3>
        {/* {proyects.map((current) => (
          <ProyectCard
            description={current.description}
            title={current.title}
            img={current.img}
            direction={current.direction}
            technologies={current.technologies}
          ></ProyectCard>
        ))} */}
        <div className="text-center shadow-xl rounded-xl p-15">
          <h5 className="text-xl font-semibold">En proceso...</h5>
        </div>
      </section>
    </>
  );
};
