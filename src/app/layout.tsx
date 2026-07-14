import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

const siteUrl = "https://www.lilacplanet.dev";

const siteDescription =
  "Eva Liu is a UW CS graduate, software engineer, and freelance web developer building responsive full-stack websites.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Eva Liu ✦ Software Engineer & Freelance Web Developer",

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/purple-star.png",
      },
      {
        url: "/purple-star.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Eva Liu ✦ Software Engineer & Freelance Web Developer",
    description: siteDescription,
    url: siteUrl,
    siteName: "Eva Liu",
    images: [
      {
        url: "/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "Eva Liu: Software Engineer and Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Eva Liu",
      description: siteDescription,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },

    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: `${siteUrl}/`,
      name: "Eva Liu — Software Engineer & Freelance Web Developer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Eva Liu",
      url: `${siteUrl}/`,
      description:
        "Software engineer and freelance web developer building reliable, user-friendly software for teams, businesses, and clients.",
      jobTitle: ["Software Engineer", "Freelance Web Developer"],
      sameAs: [
        "https://github.com/evaxliu",
        "https://www.linkedin.com/in/el02/",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Washington",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}