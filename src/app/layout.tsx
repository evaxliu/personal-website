import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lilacplanet.dev"),

  title: "Eva Liu ✦ Software Engineer & Freelance Web Developer",
  description: "Eva Liu is a UW CS graduate, software engineer, and freelance web developer building responsive full-stack websites.",
  icons: {
    icon: [
      { url: "/purple-star.png" },
      { url: "/purple-star.png", sizes: "48x48", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Eva Liu ✦ Software Engineer & Freelance Web Developer",
    description: "Eva Liu is a UW CS graduate, software engineer, and freelance web developer building responsive full-stack websites.",
    url: "https://lilacplanet.dev",
    siteName: "Eva Liu ✦ Software Engineer & Freelance Web Developer",
    images: [
      {
        url: "/purple-star.png",
        width: 1200,
        height: 630,
        alt: "Eva Liu: Software Engineer & Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}