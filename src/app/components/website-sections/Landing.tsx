import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import Card from "../Card";

const links = [
  { name: "Resume", href: "" },
  { name: "GitHub", href: "https://github.com/evaxliu" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/el02/" }
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

      <div className="flex flex-col gap-7 max-w-2xl">
        <p className="text-xl text-white font-bold">
          Software engineer building accessible, <span className="text-violet-300">polished</span> web experiences.
        </p>

        <p className="text-md leading-8 text-violet-200 font-semibold">
          CS grad from the University of Washington&apos;s Allen School. I&apos;ve led research software used at international conferences and now build responsive marketing sites for small businesses as a freelance developer — comfortable owning a product from first wireframe to live deployment.
        </p>
      </div>

      <div className="flex gap-3 text-sm flex-wrap">
        <Link className="flex items-center justify-center border bg-violet-200 text-[#171129] py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out" href={""}>
          Get In Touch <ArrowRight />
        </Link>

        {links.map(link => 
          <Link 
            key={link.name}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center justify-center bg-[#221b39] text-white py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out"
          >
            {link.name}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card 
          title={"Hiring for your team?"}
          description={"Research-grade engineering experience, shipped products, and a peer-reviewed publication."}
          link={"See Experience"} 
          accentColor={"violet"}
        />

        <Card 
          title={"Build your online presence."}
          description={"Modern, responsive websites for businesses, portfolios, and personal brands."}
          link={"See Services"} 
          accentColor={"green"}
        />
      </div>
    </section>
  );
}