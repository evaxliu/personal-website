"use client"
import { ArrowRight } from "lucide-react";

export default function GetInTouch(){
  const scrollToSection = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return(
    <button 
      className="flex items-center justify-center h-12 border bg-violet-200 text-[#171129] py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out" 
      onClick={scrollToSection}
    >
      Get In Touch <ArrowRight />
    </button>
  )
}