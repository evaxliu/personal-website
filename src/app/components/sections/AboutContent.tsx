"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function AboutContent() {
  return (
    <SectionShell title="About me">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <motion.h1 variants={item} className="text-3xl font-semibold">
          <span className="text-purple-300">About</span> me
        </motion.h1>

        <motion.div
          variants={container}
          className="space-y-5 text-white/80 leading-relaxed text-base md:text-lg"
        >
          <motion.p variants={item}>I’m Eva Liu.</motion.p>

          <motion.p variants={item}>
            I really like coding and tend to spend a lot of time building things.
          </motion.p>

          <motion.p variants={item}>
            At CRBM, I led development of a browser-based modeling editor for systems biology,
            building out a full-stack tool that researchers use to design and edit computational
            models. I also contributed to the VSCode Antimony extension (1,000+ users), working
            on language tooling like syntax highlighting, parsing, and editor features that make
            writing models a lot easier. That work led to a co-authored paper in Bioinformatics.
          </motion.p>

          <motion.p variants={item}>
            I mostly work across the stack and enjoy building tools end-to-end.
          </motion.p>

          <motion.p variants={item}>
            Lately, I’ve been spending time improving my problem-solving skills, getting into
            machine learning through a stock analysis project, and building a small blog platform.
            I like working on things where I’m able to develop my skills. I’m also in the process
            of applying to grad school.
          </motion.p>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}