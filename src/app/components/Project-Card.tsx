import Image from "next/image";
import Link from "next/link";

type projectProps = {
  title: string,
  projLinkTitle?: string,
  projectLink?: string,
  codeLink?: string,
  imageSrc: string,
  imageAlt: string
}

export default function ProjectCard({title, projLinkTitle, projectLink, codeLink, imageSrc, imageAlt}: projectProps) {

  return(
    <div className='grid px-5 py-5 gap-3 w-full bg-[#171129] rounded-2xl border border-[#322851]'>
      <div className="relative aspect-16/10 w-full overflow-hidden border-b border-[#322851]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 350px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <h3 className="text-sm text-white font-bold">
        {title}
      </h3>
      
      <div className="flex gap-3 text-sm">
        {projectLink ? (
          <Link
            className="text-xs font-semibold font-plex-sans select-none"
            href={projectLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {projLinkTitle}
          </Link>
        ) : (
          projLinkTitle && (
            <span className="text-xs font-semibold font-plex-sans cursor-default select-none">
              {projLinkTitle}
            </span>
          )
        )}

        {codeLink && (
          <Link
            className="text-xs font-semibold font-plex-sans text-pink-300 select-none"
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