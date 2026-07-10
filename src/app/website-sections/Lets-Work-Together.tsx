import Link from "next/link";
import GetInTouch from "../components/Get-In-Touch";


export default function LetsWorkTogether() {
  return(
    <section className="border border-[#322851] bg-[#1F1838] rounded-2xl py-5 px-7 md:py-10 md:px-20">
      <div className="flex flex-col items-start md:items-center gap-5">
        <h2 className="text-3xl text-white font-bold md:text-center text-left">
          Let&apos;s work together
        </h2>
        
        <p className="text-violet-200 font-semibold md:text-center text-left">
          Open to software engineering roles and freelance web projects. Whether you&apos;re hiring or need a site built, I&apos;d love to hear from you.
        </p>

        <div className="flex gap-3 text-sm flex-wrap">
          <GetInTouch />

          <Link 
            key={"LinkedIn"}
            href={"https://www.linkedin.com/in/el02/"}
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-12 items-center justify-center border border-[#171129] bg-[#171129] text-white py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}