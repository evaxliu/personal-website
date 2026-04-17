export default function ProjectsContent() {
  const projects = [
    {
      title: "Blog Platform",
      link: "https://github.com/evaxliu/rice-thoughts",
      date: "July 2025 – Present",
      items: [
        "Designed and developed a content-driven web platform using Next.js, React, and TypeScript with Wisp CMS for structured content management and dynamic rendering.",
        "Implemented modular page architecture to support reusable layouts and scalable content organization.",
        "Built initial system for content delivery and rendering with plans to extend functionality with tag-based filtering and discovery features."
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
        "Optimized page rendering and image display for a smoother visual experience."
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
        "Developed robust features to retrieve user input, validate and process data, and store user information in a backend database."
      ],
    },
  ];

  return (
    <div className="h-full w-full flex items-start justify-center px-6 md:px-10 py-10">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-semibold">
          <span className="text-purple-300">Projects</span>
        </h1>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-baseline gap-4">
                <p className="font-semibold">{p.title}</p>
                <span className="text-xs text-white/60">{p.date}</span>
              </div>

              <a
                className="text-sm text-purple-300 break-all"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                {p.link.replace("https://", "")}
              </a>

              <ul className="list-disc pl-5 mt-3 space-y-2 text-white/80">
                {p.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}