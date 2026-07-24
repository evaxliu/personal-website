import LetsWorkTogether from "../website-sections/Lets-Work-Together";
import ProjectCard from "./Project-Card";
import SectionHeader from "./Section-Header";
import ServicesCard from "./Services-Card";
import StartAProject from "./Start-A-Project";

const FreelanceProjects = [
  [
    "ZV Homeconstruction LLC",
    "zvhomes.org ↗",
    "https://www.zvhomes.org",
    "",
    "/projects/preview-zv.webp",
    "ZV Homeconstruction company website preview",
  ],
  [
    "Rice Thoughts Blog",
    "ricethoughts.com ↗",
    "https://www.ricethoughts.com/",
    "",
    "/projects/rice-thoughts.webp",
    "Rice Thoughts blog homepage and article layout",
  ],
];

const Process = [
  [
    "01 Free intro chat",
    "Just bring your idea."
  ],
  [
    "02 Scope & quote",
    "The agreed scope, timeline, and price — in writing."
  ],
  [
    "03 Build & launch",
    "You review, I launch — with a clear handoff."
  ]
]

export default function FreelanceServices() {
  return(
    <section className="flex flex-col gap-4 grow w-full">
      
      <div className="flex items-center gap-3 text-sm">
        <StartAProject />
        
        <p className="text-[#8F82B0]">
          Free intro chat — tell me what your business needs.
        </p>
      </div>

      <SectionHeader label={"SERVICES"} color={"green"} />

      <div className="flex flex-col gap-4">
        <p className="text-[#8f82b0] font-medium">
          Websites, web applications, and custom software built around your goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServicesCard title={"Websites & web applications"} description={"Responsive, maintainable sites and web apps that turn visitors into inquiries."} />

          <ServicesCard title={"Software features & integrations"} description={"New features, APIs, and third-party services — built into the software you already run."} />

          <ServicesCard title={"Debugging & troubleshooting"} description={"Bugs found, fixed, and explained in plain terms."} />

          <ServicesCard title={"Hosting, deployment & support"} description={"Deployment, performance, and SEO handled through launch, with a clear handoff. Maintenance available separately."} />
        </div>

        <SectionHeader label={"WORK"} color={"green"} />

        <p className="text-[#8f82b0] font-medium">
          Client projects, live today.
        </p>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 text-green-300">
          {FreelanceProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project[0]}
              projLinkTitle={project[1]}
              projectLink={project[2]}
              codeLink={project[3]}
              imageSrc={project[4]}
              imageAlt={project[5]}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#322851] rounded-2xl overflow-hidden">
          {Process.map((step) => (
            <section
              key={step[0]}
              className="flex flex-col gap-1 grow w-full px-5 py-4
                border-b border-[#322851] last:border-b-0
                md:border-b-0 md:border-r md:last:border-r-0"
            >
              <h3 className="text-[13px] font-semibold text-green-300">
                {step[0]}
              </h3>
              <p className="text-xs text-[#8f82b0] font-semibold">
                {step[1]}
              </p>
            </section>
          ))}
        </div>

        <LetsWorkTogether heading={"Start with a conversation"} subheading={"Free 30-minute call, no strings attached — walk away with a plan and an upfront quote based on the scope discussed."} />
      </div>
    </section>
  );
}