import { ProyectCard } from "./proyectscard";
const proyects = [
  {
    title: "Proyects Name Placeholder",
    img: "https://placehold.co/150x150",
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.It’s proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it’s always fighting with.Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
    direction: "#",
    technologies: ["JavaScript", "React", "Java"],
  },
  {
    title: "Proyects Name Placeholder",
    img: "https://placehold.co/150x150",
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.It’s proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it’s always fighting with.Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
    direction: "#",
    technologies: ["JavaScript", "React", "Java"],
  },
];
export const Proyects = () => {
  return (
    <>
      <section id="proyects" className="w-3/5 my-5 mx-auto">
        <h3 className="text-4xl font-semibold">Proyectos</h3>
        {proyects.map((current) => (
          <ProyectCard
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
