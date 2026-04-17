export default function Projects() {
  return (
    <div className="min-h-full overflow-y-auto px-6 md:px-12 py-14">
      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-3xl font-semibold">
          <span className="text-purple-300">Projects</span>
        </h1>

        <div className="space-y-6">

          {/* CARD */}
          {[
            {
              title: "Personal Website",
              link: "github.com/evaxliu/personal-website",
              date: "July 2025 – Present",
              items: [
                "Developing a personal website leveraging React and Three.js to render a custom 3D Blender model."
              ],
            },
            {
              title: "Antimony Web Editor",
              link: "github.com/sys-bio/AntimonyEditor",
              date: "July 2023 – September 2024",
              items: [
                "Developed web-based language support for the Antimony modeling language using React + TypeScript and Monaco Editor.",
                "Launched beta with syntax highlighting and hover info features."
              ],
            },
            {
              title: "Vscode-Antimony Extension",
              link: "github.com/sys-bio/vscode-antimony",
              date: "July 2022 – August 2023",
              items: [
                "Developed VSCode extension supporting Antimony language.",
                "Built automated installation workflow using Python and TypeScript.",
                "Improved model readability with visual indicators and tooling."
              ],
            },
            {
              title: "Pet My Dog",
              link: "github.com/evaliu2002/PetMyDog",
              date: "March 2022 – June 2022",
              items: [
                "Built React app for real-time location sharing for dog owners.",
                "Implemented backend data storage and user interaction features."
              ],
            },
          ].map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-baseline">
                <p className="font-semibold">{p.title}</p>
                <span className="text-xs text-white/60">{p.date}</span>
              </div>

              <a className="text-sm text-purple-300" href={`https://${p.link}`}>
                {p.link}
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