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
      icon: "🏠",
      position: "left-[50%] top-[60%]",
      active:
        "border-indigo-100/90 bg-indigo-200/50 ring-2 ring-indigo-100/55 shadow-[0_0_30px_rgba(165,180,252,0.18)]",
      idle:
        "border-indigo-100/45 bg-indigo-300/22 hover:border-indigo-100/75 hover:bg-indigo-200/34",
    },
    {
      section: "projects",
      label: "Projects",
      icon: "💻",
      position: "left-[21%] top-[50%]",
      active:
        "border-fuchsia-100/90 bg-fuchsia-200/46 ring-2 ring-fuchsia-100/55 shadow-[0_0_30px_rgba(232,121,249,0.16)]",
      idle:
        "border-fuchsia-100/45 bg-fuchsia-300/20 hover:border-fuchsia-100/75 hover:bg-fuchsia-200/32",
    },
    {
      section: "experience",
      label: "Experience",
      icon: "🧠",
      position: "left-[80%] top-[43%]",
      active:
        "border-sky-100/90 bg-sky-200/50 ring-2 ring-sky-100/55 shadow-[0_0_30px_rgba(125,211,252,0.16)]",
      idle:
        "border-sky-100/45 bg-sky-300/22 hover:border-sky-100/75 hover:bg-sky-200/34",
    },
    {
      section: "about",
      label: "About",
      icon: "🌸",
      position: "left-[40%] top-[40%]",
      active:
        "border-pink-100/90 bg-pink-200/42 ring-2 ring-pink-100/55 shadow-[0_0_30px_rgba(249,168,212,0.16)]",
      idle:
        "border-pink-100/45 bg-pink-300/18 hover:border-pink-100/75 hover:bg-pink-200/30",
    },
  ];

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

      <div className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0" />

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