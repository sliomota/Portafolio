interface experienceProp {
  name: string;
  start: string;
  end: string;
  description: string;
  logo?: string;
}
export const ExperienceCard = ({
  name,
  start,
  end,
  description,
  logo = "",
}: experienceProp) => {
  return (
    <>
      <article className="shadow-lg p-5 rounded-md flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <div className="w-1/10 rounded-full object-cover overflow-hidden border-2 border-solid">
            <img src={logo} alt={name + " logo"} />
          </div>
          <div>
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="text-sm text-neutral-900/50">{start + " - " + end}</p>
          </div>
        </div>
        <div>
          <h5 className="text-xl font-semibold">Descripción:</h5>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
};
