export default function Experience() {
  return (
    <div className="min-h-full overflow-y-auto px-6 md:px-12 py-14">
      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-3xl font-semibold">
          Work <span className="text-purple-300">Experience</span>
        </h1>

        <div className="space-y-8">

          {/* CARD 1 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <p className="font-semibold">
              Center for Reproducible Biomedical Modeling – Seattle, WA
            </p>

            <p className="mt-4 text-purple-200 font-medium">
              Software Engineer Lead / Consultant
            </p>

            <p className="text-sm text-white/60">
              September 2023 – December 2024
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-white/80">
              <li>
                Led the design, development, and maintenance of Antimony Web Editor, managing project timelines and fostering a collaborative team environment through regular progress meetings to ensure timely, budget-conscious delivery and effective problem-solving.
              </li>
              <li>Presented on Antimony Web Editor at the HARMONY conference.</li>
              <li>
                Implemented robust testing procedures to ensure software reliability and functionality, while developing comprehensive documentation for development workflows, user guides, and troubleshooting resources.
              </li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <p className="text-purple-200 font-medium">Software Engineer</p>
            <p className="text-sm text-white/60">
              July 2022 – September 2023
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-white/80">
              <li>
                Developed full-stack features for the Antimony modeling language’s VSCode extension, Vscode-Antimony, serving 1,000+ users on the VS Code Marketplace using TypeScript, Python, Shell, and JSON.
              </li>
              <li>Presented on Vscode-Antimony at the COMBINE conference.</li>
              <li>
                Co-authored a peer-reviewed publication in Bioinformatics (Oxford University Press) detailing the extension’s design and impact. (doi.org/10.1093/bioinformatics/btad753)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}