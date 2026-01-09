import { Badge } from "./ui/badge";
import { RxExternalLink } from "react-icons/rx";
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
      <a href={direction}>
        <article className="w-full mx-auto p-5 shadow-md rounded-md flex my-5 transition delay-100 duration-300 ease-in hover:scale-105 relative">
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
            <RxExternalLink className="absolute right-4 stroke-1"></RxExternalLink>
          </div>
        </article>
      </a>
    </>
  );
};
