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
      <article>
        <img src={logo} alt={name + " logo"} />
        <div>
          <p>{start + " - " + end}</p>
        </div>
        <div>
          <h5 className="text-xl font-semibold">Descripción:</h5>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
};
