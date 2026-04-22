"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LofiRoom from "@/app/components/LofiRoom";
import HomeContent from "@/app/components/sections/HomeContent";
import AboutContent from "@/app/components/sections/AboutContent";
import ExperienceContent from "@/app/components/sections/ExperienceContent";
import ProjectsContent from "@/app/components/sections/ProjectsContent";

export const metadata = {
  title: "Eva Liu",
  icons: {
    icon: [
      { url: "/room.ico" },
      { url: "/room.png", sizes: "48x48", type: "image/png" },
    ]
  }
};


export type Section = "home" | "about" | "experience" | "projects";

export default function Home() {
  const [section, setSection] = useState<Section>("home");

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-[45vh] lg:h-full lg:sticky lg:top-0">
        <LofiRoom activeSection={section} onSelectSection={setSection} />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="hide-scrollbar h-full overflow-y-auto flex items-start justify-center px-8 py-12">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {section === "home" && <HomeContent />}
              {section === "about" && <AboutContent />}
              {section === "experience" && <ExperienceContent />}
              {section === "projects" && <ProjectsContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}