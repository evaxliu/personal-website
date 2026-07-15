"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import LeetCodeStats from "../components/Leetcode-Stats";
import SectionHeader from "../components/Section-Header";

export default function Surprise() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <Image
        alt=""
        className="animate-bounce md:hidden"
        height={50}
        src="/purple-star.png"
        width={50}
      />
      <button
        aria-label="Open LeetCode stats"
        className="hidden cursor-pointer md:inline-flex"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <Image
          alt=""
          className="animate-bounce"
          height={50}
          src="/purple-star.png"
          width={50}
        />
      </button>

      {isOpen && (
        <section
          aria-label="LeetCode statistics"
          aria-modal="true"
          className="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 p-4 md:flex"
          role="dialog"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-3xl flex-col gap-7 overflow-y-auto px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <SectionHeader
              color="violet"
              label="FUN / SHOWCASE"
            />

            <LeetCodeStats />
          </div>
        </section>
      )}
    </>
  );
}