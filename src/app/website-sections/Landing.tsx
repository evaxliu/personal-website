import NavCard from "../components/Nav-Card";
import GetInTouch from "../components/Get-In-Touch";
import SocialButton from "../components/Social-Button";
import Surprise from "./Surprise";

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/el02/" },
  { name: "GitHub", href: "https://github.com/evaxliu" },
  { name: "Resume", href: "/EvaLiuResume.pdf" }
]

export default function Landing() {
  return(
    <section className="flex flex-col items-start justify-center gap-7 w-full max-w-3xl p-10">
      <p className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1.5 text-xs text-green-300 bg-green-950 ring-1 ring-inset ring-green-950 font-bold">
        <svg className="h-1.5 w-1.5 fill-green-300" viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
        Open to SWE roles & freelance projects
      </p>

      <div className="flex gap-3">
        <Surprise />

        <p className="text-5xl text-white font-bold">
          Eva Liu
        </p>
      </div>

      <div className="flex flex-col gap-5 max-w-2xl">
        <h1 className="text-xl text-white font-bold">
          Software Engineer — available for full-time roles and freelance projects
        </h1>

        <p className="text-md leading-8 text-violet-200 font-semibold">
          UW Allen School CS grad. I ship software for engineering teams and businesses alike — web applications, research tools, custom websites, and features that go from idea to production.
        </p>
      </div>

      <div className="flex gap-3 text-sm flex-wrap">
        <GetInTouch />

        {links.map(link => 
          <SocialButton key={link.name} name={link.name} url={link.href} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NavCard 
          title={"Hiring for a software engineering role?"}
          description={"Led and shipped full-stack products — React/TypeScript, HTML, CSS and Python, owned from roadmap through architecture, code review, and production."}
          link={"See Experience"}
          url={"engineering"}
          accentColor={"violet"}
        />

        <NavCard 
          title={"Need software built for your business?"}
          description={"I build websites, and custom software for your business — and handle the technical side, from setup to launch. You get one clear price before any work starts."}
          link={"See Services & Client Work"} 
          url={"freelance"}
          accentColor={"green"}
        />
      </div>
    </section>
  );
}