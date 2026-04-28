import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";

export default function ProjectsContent() {
  const projects = [
    {
      title: "Antimony Web Editor",
      link: "https://github.com/sys-bio/AntimonyEditor",
      date: "July 2023 – September 2024",
      tech: "React, TypeScript, Monaco Editor, ANTLR",
      highlighted: true,
      summary:
        "Built a browser-based Antimony editor for systems biology modeling, supporting in-browser computational model development.",
      items: [
        "Implemented grammar recognition, syntax highlighting, and contextual hover documentation.",
        "Improved authoring workflows for researchers designing and editing biological simulation models.",
      ],
    },
    {
      title: "VSCode-Antimony Extension",
      link: "https://github.com/sys-bio/vscode-antimony",
      date: "July 2022 – August 2023",
      tech: "TypeScript, Python, VSCode API, Bash, Batch",
      highlighted: true,
      summary:
        "Developed core features for a VS Code Antimony extension with 1,000+ Marketplace users.",
      items: [
        "Engineered an automated installation pipeline to reduce user setup friction.",
        "Built editor features including variable annotations and dynamic rate law insertion.",
      ],
    },
    {
      title: "Personal Website",
      link: "https://github.com/evaxliu/personal-website",
      date: "July 2025 – Present",
      tech: "Next.js, React, Tailwind CSS, TypeScript",
      summary:
        "Built an interactive portfolio site with room-based navigation, modular sections, and responsive layouts.",
      items: [
        "Implemented reusable About, Experience, and Projects sections with client-side state management.",
        "Optimized rendering and image display for a polished, mobile-friendly experience.",
      ],
    },
    {
      title: "Blog Platform",
      link: "https://github.com/evaxliu/rice-thoughts",
      date: "July 2025 – Present",
      tech: "Next.js, React, TypeScript, Wisp CMS",
      summary:
        "Designed a content-driven blog platform with structured CMS content and dynamic rendering.",
      items: [
        "Built modular page architecture for reusable layouts and scalable content organization.",
        "Created the foundation for content delivery with planned tag-based filtering and discovery.",
      ],
    },
    {
      title: "Pet My Dog",
      link: "https://github.com/evaliu2002/PetMyDog",
      date: "March 2022 – June 2022",
      tech: "React, Java, Elasticsearch, Jest, CircleCI, JavaScript",
      summary:
        "Developed a multi-page React app for dog owners to share real-time location and connect with nearby users.",
      items: [
        "Built real-time location tracking, user interaction flows, validation, and backend data storage.",
        "Collaborated on interface design and iterated based on feedback to improve the user experience.",
      ],
    },
  ];

  return (
    <SectionShell
      eyebrow="Featured work"
      title={<span className="text-purple-300">Projects</span>}
      description="Fun projects I’ve built."
    >
      <div className="space-y-6">
        {projects.map((project) => (
          <ContentCard key={project.title} className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "font-semibold transition",
                    project.highlighted ? "text-purple-300" : "text-white/95",
                  ].join(" ")}
                >
                  {project.title}
                </a>

                <p className="mt-1 text-sm text-white/60">{project.date}</p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs font-medium text-purple-200 transition hover:border-purple-300/40 hover:bg-purple-300/20"
              >
                GitHub
              </a>
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">
              {project.summary}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80 leading-relaxed">
              {project.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-white/55">
              <span className="text-purple-200 font-medium">Tech:</span>{" "}
              {project.tech}
            </p>
          </ContentCard>
        ))}
      </div>
    </SectionShell>
  );
}