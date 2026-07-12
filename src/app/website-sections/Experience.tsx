import ExperienceCard from "../components/Experience-Card";
import FreelanceServices from "../components/Freelance-Services";
import SectionHeader from "../components/Section-Header";
import LetsWorkTogether from "./Lets-Work-Together";

export default function Experience() {
  const CRBMProjects = [
    ["VSCode-Antimony Extension", "Project page ↗", "https://reproduciblebiomodels.org/vscode-antimony/", "https://github.com/sys-bio/vscode-antimony"],
    ["Antimony Web Editor", "Live editor ↗", "https://sys-bio.github.io/AntimonyEditor/", "https://github.com/sys-bio/AntimonyEditor"]
  ]

  const FreelanceProjects = [
    ["ZV Homeconstruction LLC", "In Progress", "https://link-to-nowhere"],
    ["Rice Thoughts Blog", "In Progress", "https://ricethoughts.com/"]
  ]

  const sideProjects = [
    ["Pet My Dog", "", "", "https://github.com/evaxliu/pet-my-dog"],
    ["This Website!", "", "", "https://github.com/evaxliu/personal-website"]
  ]

  return(
    <section className="flex flex-col gap-7 w-full max-w-3xl px-10">
      <SectionHeader label={"FOR ENGINEERING TEAMS"} color={"violet"} id={"engineering"} />

      <ExperienceCard 
        company={"Center for Reproducible Biomedical Modeling"}
        role={"Software Engineer → Lead Software Engineer"}
        date={"Jul 2022 — Dec 2024"}
        descriptions={[
          "Led development of a browser-based computational-biology modeling editor, improving accessibility and usability of tools for designing biological simulation models.",
          "Owned end-to-end execution — roadmap, sprint planning, and delivery — translating research requirements into scalable features.",
          "Mentored contributors and coordinated across a distributed research team to keep tooling reliable and maintainable.",
          "Presented research software tools at international conferences (COMBINE, HARMONY) on standards and interoperability.",
          "Co-authored a peer-reviewed Bioinformatics publication on a VSCode extension for Antimony."
        ]}
        techStack={[
          "React",
          "TypeScript",
          "Python",
          "VSCode API"
        ]}
        accentColor={"violet"}
        projects={CRBMProjects}
      />

      <SectionHeader label={"EDUCATION"} color={"violet"} />

      <ExperienceCard 
        company={"University of Washington"}
        role={"B.S. in Computer Science — Paul G. Allen School of Computer Science & Engineering"}
        descriptions={[]}
        techStack={[]}
        accentColor={"violet"}
        projects={sideProjects}
      />

      <SectionHeader label={"FOR YOUR BUSINESS"} color={"green"} id={"freelance"} />

      <FreelanceServices />

      <ExperienceCard 
        company={"Independent Contractor"}
        role={"Freelance Web/Software Developer"}
        date={"2025 — Present"}
        descriptions={[
          "Building websites and web applications for clients based on their business goals and project needs.",
          "Taking projects from initial planning through development, launch, and ongoing improvements.",
          "Managing deployment, performance, SEO, and ongoing maintainability across each project."
        ]}
        techStack={[
          "Next.js / React",
          "TypeScript",
          "HTML / Tailwind CSS",
          "Vercel"
        ]}
        accentColor={"green"}
        projects={FreelanceProjects}
      />

      <LetsWorkTogether />

      <SectionHeader label={"FUN / SHOWCASE"} color={"violet"} />
      
    </section>
  );
}