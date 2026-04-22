import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eva Liu",
  description: "I’m Eva Liu. I really like coding and tend to spend a lot of time building things. At CRBM, I led development of a browser-based modeling editor for systems biology, building out a full-stack tool that researchers use to design and edit computational models. I also contributed to the VSCode Antimony extension (1,000+ users), working on language tooling like syntax highlighting, parsing, and editor features that make writing models a lot easier. That work led to a co-authored paper in Bioinformatics. I mostly work across the stack and enjoy building tools end-to-end. Lately, I’ve been spending time improving my problem-solving skills, getting into machine learning through a stock analysis project, and building a small blog platform. I like working on things where I’m able to develop my skills. I’m also in the process of applying to grad school.",
  icons: {
    icon: [
      { url: "/room.ico" },
      { url: "/room.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0b10] text-white h-screen overflow-hidden">
        <div className="h-full flex flex-col">
          <main className="flex-1 min-h-0">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}