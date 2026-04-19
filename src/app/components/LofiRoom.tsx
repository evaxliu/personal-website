"use client";

import Image from "next/image";
import type { Section } from "@/app/page";

export default function LofiRoom({
  activeSection,
  onSelectSection,
}: {
  activeSection: Section;
  onSelectSection: (section: Section) => void;
}) {
  return (
    <div className="relative w-full h-full min-h-full overflow-hidden">
      <Image
        src="/assets/purpleisoroom.jpg"
        alt="room"
        fill
        priority
        sizes="50vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10" />

      <button
        onClick={() => onSelectSection("home")}
        className={[
          "absolute left-[50%] top-[60%] z-10 -translate-x-1/2 rounded-full border px-4 py-2 font-normal text-white backdrop-blur-sm transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40",
          activeSection === "home"
            ? "border-indigo-100/90 bg-indigo-200/50 ring-2 ring-indigo-100/55"
            : "border-indigo-100/45 bg-indigo-300/22 hover:border-indigo-100/75 hover:bg-indigo-200/34",
        ].join(" ")}
      >
        🏠 Home
      </button>

      <button
        onClick={() => onSelectSection("projects")}
        className={[
          "absolute left-[21%] top-[50%] z-10 -translate-x-1/2 rounded-full border px-4 py-2 font-normal text-white backdrop-blur-sm transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40",
          activeSection === "projects"
            ? "border-fuchsia-100/90 bg-fuchsia-200/46 ring-2 ring-fuchsia-100/55"
            : "border-fuchsia-100/45 bg-fuchsia-300/20 hover:border-fuchsia-100/75 hover:bg-fuchsia-200/32",
        ].join(" ")}
      >
        💻 Projects
      </button>

      <button
        onClick={() => onSelectSection("experience")}
        className={[
          "absolute left-[80%] top-[43%] z-10 -translate-x-1/2 rounded-full border px-4 py-2 font-normal text-white backdrop-blur-sm transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40",
          activeSection === "experience"
            ? "border-sky-100/90 bg-sky-200/50 ring-2 ring-sky-100/55"
            : "border-sky-100/45 bg-sky-300/22 hover:border-sky-100/75 hover:bg-sky-200/34",
        ].join(" ")}
      >
        🧠 Experience
      </button>

      <button
        onClick={() => onSelectSection("about")}
        className={[
          "absolute left-[68%] top-[72%] z-10 -translate-x-1/2 rounded-full border px-4 py-2 font-normal text-white backdrop-blur-sm transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40",
          activeSection === "about"
            ? "border-pink-100/90 bg-pink-200/42 ring-2 ring-pink-100/55"
            : "border-pink-100/45 bg-pink-300/18 hover:border-pink-100/75 hover:bg-pink-200/30",
        ].join(" ")}
      >
        🌸 About
      </button>
    </div>
  );
}