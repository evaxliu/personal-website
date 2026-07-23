import type { MetadataRoute } from "next";

const BASE_URL = "https://www.lilacplanet.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/freelance-software-development`,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}