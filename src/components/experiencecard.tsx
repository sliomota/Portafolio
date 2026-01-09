interface experienceProp {
  company: string;
  start: string;
  end: string;
  description: string;
  logo?: string;
}
export const ExperienceCard = ({
  company,
  start,
  end,
  description,
  logo = "",
}: experienceProp) => {
  return (
    <>
      <article></article>
    </>
  );
};
