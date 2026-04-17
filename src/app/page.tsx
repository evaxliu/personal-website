import LofiRoom from "@/app/components/LofiRoom";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-full">
        <LofiRoom />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      <div className="h-full flex items-center justify-center px-10">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Hi, I’m <span className="text-purple-300">Eva</span>
          </h1>

          <p className="text-white/70 leading-relaxed">
            I build thoughtful software at the intersection of systems, biology, and design.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              href="/projects"
              className="px-5 py-2 rounded-full bg-purple-400/20 border border-purple-300/30 hover:bg-purple-300/30 transition"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="px-5 py-2 rounded-full border border-white/10 hover:border-white/30 transition"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}