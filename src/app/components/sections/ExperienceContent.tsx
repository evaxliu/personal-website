import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";

export default function ExperienceContent() {
  return (
    <SectionShell
      eyebrow="Work"
      title={
        <>
          Work <span className="text-purple-300">Experience</span>
        </>
      }
      description="Experience building research and developer-facing tools across the stack."
    >
      <div className="space-y-6">
        <ContentCard className="p-6">
          <p className="font-semibold text-white/95">
            Center for Reproducible Biomedical Modeling (CRBM)
          </p>

          <p className="mt-4 text-purple-200 font-medium">
            Software Engineer &#8594; Lead Software Engineer / Consultant
          </p>

          <p className="mt-1 text-sm text-white/60">July 2022 – December 2024</p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80 leading-relaxed">
            <li>
              Led development of a browser-based computational biology modeling editor,
              improving accessibility and usability of tools for designing and editing
              biological simulation models.
            </li>
            <li>
              Owned end-to-end execution (roadmap, sprint planning, delivery),
              translating research requirements into scalable features for a
              research-facing software platform.
            </li>
            <li>
              Presented research software tools at international conferences
              (COMBINE, HARMONY), contributing to global collaboration efforts on
              standards and interoperability in computational biology.
            </li>
            <li>
              Co-authored a peer-reviewed Bioinformatics publication on the design
              and implementation of a VSCode extension for Antimony.
            </li>
          </ul>
        </ContentCard>
      </div>
    </SectionShell>
  );
}