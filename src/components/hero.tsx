import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <>
      <section className="hero rounded-md shadow-md w-3/5 mt-10 mx-auto flex flex-col gap-5 relative p-5 overflow-hidden">
        <h4 className="text-md text-neutral-950/75 font-bold">
          ¡Bienvenido a mi portafolio!
        </h4>
        <h2 className="text-6xl font-bold  relative z-10">
          Hola, Mi nombre es Simón.
        </h2>
        <span className="text-md relative z-10 text-neutral-950/75">
          Soy desarrollador Full Stack, de Málaga.
        </span>

        <div className="flex gap-2">
          <Button asChild>
            <a href="/docs/sliomotCV.pdf" download="Simon_Lionello_CV.pdf">
              Descarga CV
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};
