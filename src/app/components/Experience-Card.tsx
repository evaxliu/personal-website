import ProjectCard from "./Project-Card";

type cardProps = {
  company: string,
  role: string,
  date?: string,
  descriptions: string[],
  techStack: string[],
  accentColor: string,
  projects?: string[][]
}

export default function ExperienceCard({company, role, date, descriptions, accentColor, projects}: cardProps) {
  const accentClass =
    accentColor === "violet"
      ? "border-l-violet-300 text-violet-300"
      : "border-l-green-300 text-green-300"

  return(
    <section className={`flex flex-col gap-3 px-7 py-5 grow w-full bg-[#1F1838] rounded-2xl border border-[#322851] border-l-4 hover:-translate-y-1 duration-300 ease-in-out ${accentClass}`}>
      <div className='flex justify-between flex-col gap-3 md:flex-row'>
        <h2 className="text-md text-white font-bold">
          {company}
        </h2>

        {date && 
          <p className="text-sm font-plex-mono">
            {date}
          </p>
        }
      </div>

      <p className="text-sm font-semibold">
        {role}
      </p>

      <ul className="flex flex-col gap-3">
        {descriptions.map((bullet, idx) =>
          <li key={idx} className='flex gap-3'>
            <p>
              ★
            </p>

            <p className="text-sm text-violet-200 font-semibold">
              {bullet}
            </p>
          </li>
        )}
      </ul>

      <div className="flex h-px bg-[#2b2148] w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects?.map((project, idx) => 
          <ProjectCard key={idx} title={project[0]} projLinkTitle={project[1]} projectLink={project[2]} codeLink={project[3]} />
        )}
      </div>
    </section>
  );
}