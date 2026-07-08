import { ArrowDown } from 'lucide-react';
import Link from "next/link";

type cardProps = {
  title: string,
  description: string,
  link: string,
  accentColor: string
}

export default function Card({title, description, link, accentColor}: cardProps) {
  const accentClass =
    accentColor === "violet"
      ? "border-l-violet-300 text-violet-300"
      : "border-l-green-300 text-green-300"

  return(
    <Link 
      className={`flex flex-col px-7 py-5 gap-3 grow w-full bg-[#1F1838] rounded-2xl border border-[#322851] ${accentClass} border-l-4 hover:-translate-y-1 duration-300 ease-in-out`}
      href={""}
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-md text-white font-bold">
          {title}
        </h2>

        <p className="text-sm text-violet-200 font-semibold">
          {description}
        </p>
      </section>
      <span className={`flex items-center mt-auto font-bold text-xs`}>
        {link}
        <ArrowDown />
      </span>
    </Link>
  );
}