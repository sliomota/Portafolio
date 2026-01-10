import { ExperienceCard } from "./experiencecard";

const companies = [
  {
    name: "Logic Sistemas Informatica y Telecomunicaciones",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHXuG7aevjbCQ/company-logo_200_200/company-logo_200_200/0/1630575877663?e=1769644800&v=beta&t=yYaD2gMGsLcj3wbsv1zO0E2L6Wi-Qkcos8orCAZRfMY",
    start: "24-03-2025",
    end: "13-06-2025",
    description:
      "Colaboré en el desarrollo de proyectos grupales utilizando Laravel y Vue.js. Debido a mi autonomía y capacidad técnica, el desarrollador Senior me designó como único responsable de la identificación y resolución de errores en el sistema de gestión horaria.",
  },
];
export const ExperienceSection = () => {
  return (
    <>
      <section className="sections">
        <h3 className="subtitle">Experiencia</h3>
        {companies.map((current) => (
          <ExperienceCard
            name={current.name}
            start={current.start}
            end={current.end}
            description={current.description}
            logo={current.logo}
          ></ExperienceCard>
        ))}
      </section>
    </>
  );
};
