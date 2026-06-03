import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eva Liu",
  description: "Eva Liu — software engineer portfolio.",
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
      <body className="bg-[#080812] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}