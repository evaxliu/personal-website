"use client";

import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";

export default function AboutContent() {
  return (
    <SectionShell
      eyebrow="Get to know me"
      title={
        <>
          <span className="text-purple-300">About</span> me
        </>
      }
      description="A little more about what I enjoy building and the kind of work I’m drawn to."
    >
      <div className="space-y-6">
        <ContentCard className="p-6">
          <div className="space-y-5 text-white/80 leading-relaxed">
            <p className="font-semibold text-purple-300">I’m Eva Liu.</p>

            <p>
              I really like coding and tend to spend a lot of time building things.
            </p>

            <p>
              At CRBM, I led development of a browser-based modeling editor for systems
              biology, building out a full-stack tool that researchers use to design and
              edit computational models. I also contributed to the VSCode Antimony
              extension (1,000+ users), working on language tooling like syntax
              highlighting, parsing, and editor features that make writing models a lot
              easier. That work led to a co-authored paper in Bioinformatics.
            </p>

            <p>
              I mostly work across the stack and enjoy building tools end-to-end.
            </p>
          </div>
        </ContentCard>
      </div>
    </SectionShell>
  );
}