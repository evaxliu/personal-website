import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  projLinkTitle?: string;
  projectLink?: string;
  codeLink?: string;
  imageSrc?: string;
  imageAlt: string;
};

export default function ProjectCard({
  title,
  projLinkTitle,
  projectLink,
  codeLink,
  imageSrc,
  imageAlt,
}: ProjectProps) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#322851] bg-[#171129] sm:rounded-2xl">
      {imageSrc && (
        <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden border-b border-[#322851]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="wrap-break-word text-sm font-bold text-white">
          {title}
        </h3>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
          {projectLink ? (
            <Link
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-plex-sans text-xs font-semibold underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
            >
              {projLinkTitle ?? "View project"}
            </Link>
          ) : (
            projLinkTitle && (
              <span className="cursor-default select-none font-plex-sans text-xs font-semibold">
                {projLinkTitle}
              </span>
            )
          )}

          {codeLink && (
            <Link
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="select-none font-plex-sans text-xs font-semibold text-pink-300 underline-offset-4 transition-colors hover:text-pink-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
            >
              Code ↗
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}