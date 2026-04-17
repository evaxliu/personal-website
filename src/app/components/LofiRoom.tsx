"use client";

import Image from "next/image";

type Section = "about" | "experience" | "projects";

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
        onClick={() => onSelectSection("projects")}
        className={[
          "absolute left-[21%] top-[50%] z-10 -translate-x-1/2 px-4 py-2 rounded-full border transition hover:scale-105",
          activeSection === "projects"
            ? "bg-purple-400/35 border-purple-200/50"
            : "bg-purple-400/20 border-purple-300/30 hover:bg-purple-300/30",
        ].join(" ")}
      >
        💻 Projects
      </button>

      <button
        onClick={() => onSelectSection("experience")}
        className={[
          "absolute left-[80%] top-[43%] z-10 -translate-x-1/2 px-4 py-2 rounded-full border transition hover:scale-105",
          activeSection === "experience"
            ? "bg-blue-400/35 border-blue-200/50"
            : "bg-blue-400/20 border-blue-300/30 hover:bg-blue-300/30",
        ].join(" ")}
      >
        🧠 Experience
      </button>

      <button
        onClick={() => onSelectSection("about")}
        className={[
          "absolute left-[50%] top-[60%] z-10 -translate-x-1/2 px-4 py-2 rounded-full border transition hover:scale-105",
          activeSection === "about"
            ? "bg-white/20 border-white/40"
            : "bg-white/10 border-white/20 hover:bg-white/20",
        ].join(" ")}
      >
        👋 About
      </button>
    </div>
  );
}