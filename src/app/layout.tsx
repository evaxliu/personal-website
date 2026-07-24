import "./globals.css";

import type { Metadata } from "next";
import Footer from "./components/Footer";

const siteUrl = "https://evaxliu.com";

const siteDescription =
  "UW CS graduate and software engineer building web applications, research tools, custom websites, and production-ready features for engineering teams and businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Eva Liu ✦ Software Engineer & Freelance Developer",

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
    title: "Eva Liu ✦ Software Engineer & Freelance Developer",
    description: siteDescription,
    url: siteUrl,
    siteName: "Eva Liu",
    images: [
      {
        url: "/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Eva Liu — Software Engineer available for full-time roles and freelance projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eva Liu ✦ Software Engineer & Freelance Developer",
    description: siteDescription,
    images: ["/OG-image.png"],
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
      name: "Eva Liu — Software Engineer & Freelance Developer",
      description: siteDescription,
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
        "Software engineer available for full-time roles and freelance projects, building web applications, research tools, custom websites, and production-ready features.",
      jobTitle: ["Software Engineer", "Freelance Software Developer"],
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
        </main>

        <div className="flex items-center flex-col">
          <Footer />
        </div>
      </body>
    </html>
  );
}