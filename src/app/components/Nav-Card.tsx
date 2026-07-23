"use client"
import { ArrowDown } from 'lucide-react';

type cardProps = {
  title: string,
  description: string,
  link: string,
  url: string,
  accentColor: string
}

export default function NavCard({title, description, link, url, accentColor} : cardProps) {
    const scrollToSection = () => {
      document
        .getElementById(url)
        ?.scrollIntoView({ behavior: "smooth" });
    };

  const accentClass =
    accentColor === "violet"
      ? "border-l-violet-300 text-violet-300"
      : "border-l-green-300 text-green-300"

  return(
    <div 
      className={`flex flex-col px-7 py-5 gap-3 grow w-full bg-[#1F1838] rounded-2xl border border-[#322851] ${accentClass} border-l-4 hover:-translate-y-1 duration-300 ease-in-out`}
      onClick={scrollToSection}
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-md text-white font-bold">
          {title}
        </h2>

        <p className="text-sm text-violet-200 font-semibold">
          {description}
        </p>
      </section>
      
      <p className={`flex items-center mt-auto font-bold text-xs gap-1`}>
        {link}
        <ArrowDown size={20}/>
      </p>
    </div>
  );
}