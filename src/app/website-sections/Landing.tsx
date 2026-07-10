import Image from "next/image";
import NavCard from "../components/Nav-Card";
import GetInTouch from "../components/Get-In-Touch";
import SocialButton from "../components/Social-Button";

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/el02/" },
  { name: "GitHub", href: "https://github.com/evaxliu" },
  { name: "Resume", href: "EvaLiuResume.pdf" }
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
        {/* Add Icon Here Later */}
        <Image 
          key="LandingIcon"
          src={"/purple-star.png"}
          width={50}
          height={50} alt={"icon of purple star"}   
          className="animate-bounce"     
        />

        <h1 className="text-5xl text-white font-bold">
          Eva Liu
        </h1>
      </div>

      <div className="flex flex-col gap-5 max-w-2xl">
        <p className="text-xl text-white font-bold">
          Software Engineer building reliable, user-friendly software for teams, businesses, and clients.
        </p>

        <p className="text-md leading-8 text-violet-200 font-semibold">
          I’m a CS grad from the University of Washington’s Allen School with experience building shipped software products from planning through launch. My work includes research tools used by scientists and presented at international conferences, and I also build responsive websites for businesses as a freelance developer.
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
          title={"Hiring for your team?"}
          description={"Early-career software engineer with experience building user-facing products from planning to launch."}
          link={"See Experience"}
          url={"engineering"}
          accentColor={"violet"}
        />

        <NavCard 
          title={"Build your online presence."}
          description={"Modern, responsive websites for businesses, portfolios, and personal brands."}
          link={"See Services"} 
          url={"freelance"}
          accentColor={"green"}
        />
      </div>
    </section>
  );
}