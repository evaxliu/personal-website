"use client";

import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";
import { motion } from "framer-motion";

export default function ExperienceContent() {
  return (
    <SectionShell title={<span className="text-purple-300">Experience</span>}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        whileHover={{ y: -3 }}
      >
        <ContentCard className="p-5" hover>
          <div>
            <p className="font-semibold text-white/95">
              Center for Reproducible Biomedical Modeling (CRBM)
            </p>

            <p className="mt-2 text-sm text-purple-200">
              Software Engineer &#8594; Lead Software Engineer / Consultant
            </p>

            <p className="mt-1 text-sm text-white/60">
              July 2022 – December 2024
            </p>
          </div>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/80">
            <li>
              Led development of a browser-based computational biology modeling editor,
              improving accessibility and usability of tools for designing and editing
              biological simulation models.
            </li>
            <li>
              Owned end-to-end execution (roadmap, sprint planning, delivery),
              translating research requirements into scalable features for a
              research-facing software platform.
            </li>
            <li>
              Presented research software tools at international conferences
              (COMBINE, HARMONY), contributing to global collaboration efforts on
              standards and interoperability in computational biology.
            </li>
            <li>
              Co-authored a peer-reviewed Bioinformatics publication on the design
              and implementation of a VSCode extension for Antimony.
            </li>
          </ul>
        </ContentCard>
      </motion.div>
    </SectionShell>
  );
}