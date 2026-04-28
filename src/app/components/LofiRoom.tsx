"use client";

import Image from "next/image";
import type { Section } from "@/app/types";
import RoomNavButton from "@/app/components/ui/RoomNavButton";

type NavButtonConfig = {
  section: Section;
  label: string;
  icon: string;
  position: string;
  active: string;
  idle: string;
};

export default function LofiRoom({
  activeSection,
  onSelectSection,
}: {
  activeSection: Section;
  onSelectSection: (section: Section) => void;
}) {
  const buttons: NavButtonConfig[] = [
    {
      section: "home",
      label: "Home",
      icon: "🌸",
      position: "left-[50%] top-[64%] sm:top-[60%]",
      active:
        "border-indigo-100/90 bg-indigo-200/50 ring-2 ring-indigo-100/55 shadow-[0_0_30px_rgba(165,180,252,0.18)]",
      idle:
        "border-indigo-100/45 bg-indigo-300/22 hover:border-indigo-100/75 hover:bg-indigo-200/34",
    },
    {
      section: "projects",
      label: "Projects",
      icon: "💻",
      position: "left-[23%] top-[52%] sm:left-[21%] sm:top-[50%]",
      active:
        "border-fuchsia-100/90 bg-fuchsia-200/46 ring-2 ring-fuchsia-100/55 shadow-[0_0_30px_rgba(232,121,249,0.16)]",
      idle:
        "border-fuchsia-100/45 bg-fuchsia-300/20 hover:border-fuchsia-100/75 hover:bg-fuchsia-200/32",
    },
    {
      section: "experience",
      label: "Experience",
      icon: "🧠",
      position: "left-[76%] top-[43%] sm:left-[80%]",
      active:
        "border-sky-100/90 bg-sky-200/50 ring-2 ring-sky-100/55 shadow-[0_0_30px_rgba(125,211,252,0.16)]",
      idle:
        "border-sky-100/45 bg-sky-300/22 hover:border-sky-100/75 hover:bg-sky-200/34",
    },
  ];

  return (
    <div className="relative w-full h-full min-h-full overflow-hidden rounded-b-3xl lg:rounded-none bg-[#5d8dcc]">
      <Image
        src="/assets/purpleisoroom.jpg"
        alt="room"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-[50%_38%] lg:object-center"
      />

      {buttons.map((button) => (
        <RoomNavButton
          key={button.section}
          label={button.label}
          icon={button.icon}
          position={button.position}
          active={activeSection === button.section}
          onClick={() => onSelectSection(button.section)}
          activeClassName={button.active}
          idleClassName={button.idle}
        />
      ))}
    </div>
  );
}