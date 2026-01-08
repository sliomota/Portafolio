import { Badge } from "./ui/badge";
interface ProjectProp {
  title: string;
  img: string;
  description: string;
  direction: string;
  technologies: string[];
}
export const ProyectCard = ({
  title,
  img,
  description,
  direction,
  technologies,
}: ProjectProp) => {
  return (
    <>
      <article className="w-full mx-auto p-5 shadow-md rounded-md flex my-5">
        <div className="w-1/4">
          <img src={img} alt="placeholder de imagen de proyecto" />
        </div>
        <div className="w-3/4 flex flex-col gap-3">
          <h4 className="text-2xl font-bold">{title}</h4>
          <h5 className="text-xl font-semibold">Descripción:</h5>
          <p>{description}</p>
          <div className="flex gap-1">
            {technologies.map((current) => (
              <Badge>{current}</Badge>
            ))}
          </div>
          <a href={direction}>ver&gt;</a>
        </div>
      </article>
    </>
  );
};
