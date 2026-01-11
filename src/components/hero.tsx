import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <>
      <section className="hero rounded-md shadow-md md:w-3/5 w-4/5 mt-5 mx-auto flex flex-col gap-2 relative p-5 overflow-hidden">
        <h4 className="text-md text-neutral-950/75 font-bold">
          ¡Bienvenido a mi portafolio!
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold  relative z-10">
          Hola, Mi nombre es Simón.
        </h2>
        <span className="text-md relative z-10 text-neutral-950/75">
          Soy desarrollador Full Stack, de Málaga.
        </span>

        <div className="flex gap-2 justify-center md:justify-normal">
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
