"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "After our intro call you'll get upfront pricing for a clearly agreed-upon scope — no hourly surprises within that scope. If you later want work beyond what we agreed on, I'll price that separately so you always know what you're paying for before it starts.",
  },
  {
    q: "How long does it take?",
    a: "A focused marketing site is usually 2–4 weeks from kickoff to launch. Web apps depend on scope, but I'll give you a realistic timeline alongside the pricing and keep you updated as we go.",
  },
  {
    q: "Who owns the code?",
    a: "You get a license to use the code for your project, plus a clear handoff of everything you need to run it. I retain the right to reuse the code in future work and to reference the project when talking about what I've built.",
  },
  {
    q: "What if I don't know exactly what I need yet?",
    a: "That's what the free 15-minute call is for. Bring the idea and the problem you're solving — I'll help shape it into a concrete scope, then send a plan and pricing so you can decide with no pressure.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every project ends with a clear handoff, and I can handle hosting, updates, and small changes on a simple monthly arrangement or ad-hoc when something comes up — whatever fits how hands-on you want to be.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-white">Frequently asked</h2>
        <p className="text-sm font-semibold text-[#8f82b0]">
          The questions clients ask before we start.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-xl border border-[#322851] bg-[#1F1838]"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#221b39]"
              >
                <span className="text-[15px] font-bold text-white">{item.q}</span>
                <span className="font-mono text-lg font-bold leading-none text-[#86efac]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-4.5">
                  <div className="mb-3.5 h-px w-full bg-[#2b2148]" />
                  <p className="text-sm font-medium leading-relaxed text-[#ddd6fe]">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}