export default function About() {
  return (
    <div className="min-h-full overflow-y-auto px-6 md:px-12 py-14">
      <div className="max-w-2xl mx-auto space-y-6">

        <h1 className="text-3xl font-semibold">
          <span className="text-purple-300">About</span> me
        </h1>

        <div className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
          <p>I’m Eva Liu!</p>

          <p>
            A software engineer who loves building tools that make complex things simpler.
          </p>

          <p>
            I’ve led projects like the Antimony Web Editor, a web app that helps researchers build biological models more easily, and contributed to the Vscode-Antimony extension, supporting over a thousand users.
          </p>

          <p>
            I co-authored a peer-reviewed paper in Bioinformatics about our work improving modeling tools in systems biology.
          </p>

          <p>
            Whether it’s writing full-stack code, speaking at conferences, or building fun side projects like Pet My Dog, I’m all about creating tech that’s useful and thoughtful.
          </p>
        </div>

      </div>
    </div>
  );
}