"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";

export default function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    link: string;
    date: string;
    items: string[];
  }>(null);

  const projects = [
    {
      title: "Blog Platform",
      link: "https://github.com/evaxliu/rice-thoughts",
      date: "July 2025 – Present",
      items: [
        "Built a full-stack blogging platform using Next.js, React, TypeScript, Python, and Supabase with Wisp CMS for structured content management and dynamic rendering.",
        "Developed an AI-powered article recommendation system using Voyage AI embeddings, pgvector, and semantic search to surface related articles.",
        "Developed backend services with FastAPI to generate, store, and retrieve vector embeddings for content discovery workflows.",
        "Implemented modular frontend architecture to support reusable layouts and scalable content delivery."
      ],
    },
    {
      title: "Antimony Web Editor",
      link: "https://github.com/sys-bio/AntimonyEditor",
      date: "July 2023 – September 2024",
      items: [
        "Built a React/TypeScript web editor for the Antimony modeling language using Monaco Editor, enabling in-browser systems biology model development for research workflows.",
        "Implemented core language-processing capabilities for Antimony, including grammar recognition, syntax highlighting, and contextual hover documentation, powering an improved experience for computational modeling.",
      ],
    },
    {
      title: "VSCode-Antimony Extension",
      link: "https://github.com/sys-bio/vscode-antimony",
      date: "July 2022 – August 2023",
      items: [
        "Developed core features for a VS Code Antimony extension with 1,000+ users on the Marketplace, expanding accessibility of systems biology modeling workflows.",
        "Engineered automated installation pipeline (Python + TypeScript), streamlining onboarding and reducing user setup friction.",
        "Designed editor-level features including variable annotations and dynamic rate law insertion via VS Code APIs, improving model clarity and reducing manual authoring effort.",
      ],
    },
    {
      title: "Pet My Dog",
      link: "https://github.com/evaliu2002/PetMyDog",
      date: "March 2022 – June 2022",
      items: [
        "Designed and developed a multi-page React web application enabling dog owners to broadcast their real-time location and connect with nearby users for in-person dog petting opportunities.",
        "Collaborated with a team to implement real-time location tracking, intuitive user interfaces and interaction features, and managed design iterations based on feedback to enhance overall user experience.",
        "Developed robust features to retrieve user input, validate and process data, and store user information in a backend database.",
      ],
    },
  ];

  return (
    <SectionShell title={<span className="text-purple-300">Projects</span>}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            whileHover={{ y: -3 }}
          >
            <ContentCard className="cursor-pointer p-5" hover>
              <button
                type="button"
                onClick={() => setSelectedProject(p)}
                className="block w-full text-left"
              >
                <p className="font-semibold text-white/95">{p.title}</p>

                <a
                  className="mt-2 inline-block break-all text-sm text-purple-300 transition hover:text-purple-200"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.link.replace("https://", "")}
                </a>

                <p className="mt-1 text-sm text-white/60">{p.date}</p>
              </button>
            </ContentCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#10101a] p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-white/95">
                    {selectedProject.title}
                  </p>

                  <a
                    className="mt-3 inline-block break-all text-sm text-purple-300 hover:text-purple-200"
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.link.replace("https://", "")}
                  </a>

                  <p className="mt-1 text-sm text-white/60">
                    {selectedProject.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xl text-white/50 hover:text-purple-200"
                >
                  ×
                </button>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-white/80">
                {selectedProject.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}