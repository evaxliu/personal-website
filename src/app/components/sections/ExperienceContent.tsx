export default function ExperienceContent() {
  return (
    <div className="h-full w-full flex items-start justify-center px-6 md:px-10 py-10">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-semibold">
          Work <span className="text-purple-300">Experience</span>
        </h1>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <p className="font-semibold">
              Center for Reproducible Biomedical Modeling (CRBM)
            </p>

            <p className="mt-4 text-purple-200 font-medium">
              Software Engineer &#8594; Lead Software Engineer / Consultant
            </p>

            <p className="text-sm text-white/60">
              July 2022 – December 2024
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-white/80">
              <li>
                Led development of a browser-based computational biology modeling editor, improving accessibility and usability of tools for designing and editing biological simulation models.
              </li>
              <li>Owned end-to-end execution (roadmap, sprint planning, delivery), translating research requirements into scalable features for a research-facing software platform.
              </li>
              <li>
                Presented research software tools at international conferences (COMBINE, HARMONY), contributing to global collaboration efforts on standards and interoperability in computational biology.
              </li>
              <li>
                Co-authored a peer-reviewed Bioinformatics publication (Oxford University Press) on the design and implementation of a VSCode extension for Antimony, enabling more efficient authoring and editing of computational models in systems biology. (DOI: 10.1093/bioinformatics/btad753)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}