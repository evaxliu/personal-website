import Link from "next/link";
import FreelanceServices from "../components/Freelance-Services";
import { ArrowLeft } from "lucide-react";
import Faq from "../components/FAQ";

export default function Freelance() {
  return(
    <section className="flex justify-center items-center flex-col">
      <div className="flex flex-col items-start justify-center gap-7 w-full max-w-3xl p-10">
        <Link
          href="/"
          className="flex items-center self-start font-plex-mono text-sm text-violet-300 select-none
            hover:text-violet-200 transition-colors duration-200"
        >
          <ArrowLeft /> evaxliu.com
        </Link>
        
        <p className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1.5 text-xs text-green-300 bg-green-950 ring-1 ring-inset ring-green-950 font-bold">
          <svg className="h-1.5 w-1.5 fill-green-300" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx={3} cy={3} r={3} />
          </svg>
          Taking new client projects
        </p>

        <div className="flex gap-3">
          <p className="text-4xl md:text-5xl text-white font-bold">
            Freelance Software Development
          </p>
        </div>

        <div className="flex flex-col gap-5 max-w-2xl">
          <p className="text-md leading-8 text-violet-200 font-semibold">
            Websites, web applications, and software features for businesses — scoped and priced upfront, then launched end to end.
          </p>
        </div>
        
        <FreelanceServices />

        <Faq />
      </div>
    </section>
  );
}