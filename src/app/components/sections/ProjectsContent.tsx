import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";

export default function ProjectsContent() {
  const projects = [
    {
      title: "Blog Platform",
      link: "https://github.com/evaxliu/rice-thoughts",
      date: "July 2025 – Present",
      items: [
        "Designed and developed a content-driven web platform using Next.js, React, and TypeScript with Wisp CMS for structured content management and dynamic rendering.",
        "Implemented modular page architecture to support reusable layouts and scalable content organization.",
        "Built initial system for content delivery and rendering with plans to extend functionality with tag-based filtering and discovery features.",
      ],
    },
    {
      title: "Personal Website",
      link: "https://github.com/evaxliu/personal-website",
      date: "July 2025 – Present",
      items: [
        "Developed a Next.js personal website with an interactive homepage that maps room elements to section navigation.",
        "Implemented reusable section components for About, Experience, and Projects to support a modular content structure.",
        "Used responsive Tailwind CSS layouts and client-side state management to create a polished, mobile-friendly experience.",
        "Optimized page rendering and image display for a smoother visual experience.",
      ],
    },
    {
      title: "Antimony Web Editor",
      link: "https://github.com/sys-bio/AntimonyEditor",
      date: "July 2023 – September 2024",
      items: [
        "Built a React/TypeScript web editor for the Antimony modeling language using Monaco Editor, enabling in-browser systems biology model development for research workflows.",
        "Implemented core language-processing capabilities for Antimony, including grammar recognition, syntax highlighting, and contextual hover documentation, powering an improved experience for computational modeling.",
      ],
    },
    {
      title: "VSCode-Antimony Extension",
      link: "https://github.com/sys-bio/vscode-antimony",
      date: "July 2022 – August 2023",
      items: [
        "Developed core features for a VS Code Antimony extension with 1,000+ users on the Marketplace, expanding accessibility of systems biology modeling workflows.",
        "Engineered automated installation pipeline (Python + TypeScript), streamlining onboarding and reducing user setup friction.",
        "Designed editor-level features including variable annotations and dynamic rate law insertion via VS Code APIs, improving model clarity and reducing manual authoring effort.",
      ],
    },
    {
      title: "Pet My Dog",
      link: "https://github.com/evaliu2002/PetMyDog",
      date: "March 2022 – June 2022",
      items: [
        "Designed and developed a multi-page React web application enabling dog owners to broadcast their real-time location and connect with nearby users for in-person dog petting opportunities.",
        "Collaborated with a team to implement real-time location tracking, intuitive user interfaces and interaction features, and managed design iterations based on feedback to enhance overall user experience.",
        "Developed robust features to retrieve user input, validate and process data, and store user information in a backend database.",
      ],
    },
  ];

  return (
    <SectionShell
      eyebrow="Featured work"
      title={<span className="text-purple-300">Projects</span>}
      description="A few projects that reflect the kinds of tools and interfaces I enjoy building."
    >
      <div className="space-y-6">
        {projects.map((p) => (
          <ContentCard key={p.title} className="p-6">
            <p className="font-semibold text-white/95">{p.title}</p>

            <a
              className="mt-3 inline-block break-all text-sm text-purple-300 transition hover:text-purple-200"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              {p.link.replace("https://", "")}
            </a>

            <p className="mt-1 text-sm text-white/60">{p.date}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80 leading-relaxed">
              {p.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </ContentCard>
        ))}
      </div>
    </SectionShell>
  );
}