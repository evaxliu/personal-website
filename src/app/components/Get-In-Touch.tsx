import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GetInTouch(){
  return(
    <Link className="flex items-center justify-center h-12 border bg-violet-200 text-[#171129] py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out" href={"mailto:evaxliu02@gmail.com"}>
      Get In Touch <ArrowRight />
    </Link>
  )
}