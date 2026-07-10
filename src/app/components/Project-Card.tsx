import Link from "next/link";

type projectProps = {
  title: string,
  projLinkTitle?: string,
  projectLink?: string,
  codeLink?: string,
}

export default function ProjectCard({title, projLinkTitle, projectLink, codeLink}: projectProps) {

  return(
    <div className='grid px-5 py-5 gap-3 w-full bg-[#171129] rounded-2xl border border-[#322851]'>
      {/* <Image /> */}

      <h3 className="text-sm text-white font-bold">
        {title}
      </h3>
      
      <div className="flex gap-3 text-sm">
        {projectLink && (
          <Link
            className="text-xs font-semibold font-plex-sans"
            href={projectLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {projLinkTitle}
          </Link>
        )}

        {codeLink && (
          <Link
            className="text-xs font-semibold font-plex-sans text-pink-300"
            href={codeLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Code ↗
          </Link>
        )}
      </div>
    </div>
  );
}