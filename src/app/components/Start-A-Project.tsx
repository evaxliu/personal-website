"use client";

import { ArrowRight } from "lucide-react";

export default function StartAProject() {
  const scrollToSection = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="flex h-12 items-center justify-center border border-[#8fd9b6] bg-[#8fd9b6] text-black py-2.5 px-5 rounded-xl font-bold hover:-translate-y-1 duration-300 ease-in-out"
      onClick={scrollToSection}
    >
      Start a project <ArrowRight />
    </button>
  );
}