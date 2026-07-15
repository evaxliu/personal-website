import type { Metadata } from "next";
import Link from "next/link";

import LeetCodeStats from "../components/Leetcode-Stats";

export const metadata: Metadata = {
  title: "LeetCode Stats | Eva Liu",
  description:
    "Live LeetCode activity, solved problem counts, streaks, and recent submissions for Eva Liu.",
};

export default function LeetCodePage() {
  return (
    <main className="min-h-screen w-full px-6 py-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-7">
        <Link
          className="
            w-fit font-plex-mono text-sm font-semibold
            text-violet-300 transition-colors
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-violet-300
          "
          href="/"
        >
          ← Back to home
        </Link>

        <LeetCodeStats />
      </div>
    </main>
  );
}