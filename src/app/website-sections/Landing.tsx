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
          Software Engineer & Freelance Web Developer
        </h1>

        <p className="text-md leading-8 text-violet-200 font-semibold">
          UW Allen School CS grad. I ship software — from research tools presented at international conferences to websites for businesses.
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
          title={"Software Engineer available for full-time roles."}
          description={"Building user-facing software from planning to launch."}
          link={"See Experience"}
          url={"engineering"}
          accentColor={"violet"}
        />

        <NavCard 
          title={"Build your online presence. Looking for a website?"}
          description={"Modern, responsive sites for businesses and personal brands."}
          link={"See Services"} 
          url={"freelance"}
          accentColor={"green"}
        />
      </div>
    </section>
  );
}