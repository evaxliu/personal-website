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
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-purple-300">
                Software Engineer &#8594; Lead Software Engineer / Consultant
              </p>

              <p className="mt-1 text-sm text-white/75">
                Center for Reproducible Biomedical Modeling (CRBM)
              </p>

              <p className="mt-1 text-sm text-white/60">
                July 2022 – December 2024
              </p>
            </div>

            <a
              href="https://reproduciblebiomodels.org/about/#team"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs font-medium text-purple-200 transition hover:border-purple-300/40 hover:bg-purple-300/20"
            >
              CRBM
            </a>
          </div>

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