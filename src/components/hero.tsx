import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <>
      <section className="hero rounded-md shadow-md md:w-3/5 w-4/5 mt-5 mx-auto flex flex-col gap-2 relative p-5 overflow-hidden">
        <p className="text-md text-neutral-950/75 font-bold">
          ¡Bienvenido a mi portafolio!
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold relative z-10 text-pretty leading-tight">
          Hola, mi nombre es Simón.
        </h1>
        <span className="text-md relative z-10 text-neutral-950/75">
          Soy desarrollador Full Stack, de Málaga.
        </span>

        <div className="flex gap-2 justify-center md:justify-normal">
          <Button asChild>
            <a href="/docs/SliomotaCv.pdf" download="Simon_Lionello_CV.pdf">
              Descarga CV
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};
