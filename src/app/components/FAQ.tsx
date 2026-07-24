"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "After our intro call, you'll receive upfront pricing for a clearly agreed-upon scope, with no hourly surprises within that scope. If you later want work beyond what we agreed on, I'll price it separately before any additional work begins.",
  },
  {
    q: "How long does it take?",
    a: "Timelines depend on the scope, but I'll provide a realistic estimate alongside the pricing and keep you updated throughout the project.",
  },
  {
    q: "Who owns the code?",
    a: "You'll receive the complete source code and a permanent license to use, modify, maintain, and continue developing it, including through another developer. I retain ownership of the code so I can reuse general-purpose portions in future projects and reference the work in my portfolio or during interviews, excluding any confidential information.",
  },
  {
    q: "What if I don't know exactly what I need yet?",
    a: "That's what the free 30-minute call is for. Bring your idea and the problem you're trying to solve, and I'll help shape it into a clear scope. Afterwards, I'll send you a plan and pricing so you can decide with no pressure.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Ongoing support is available as a separate service. I can help with hosting, updates, troubleshooting, and small changes through a monthly support plan or on an as-needed basis.",
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