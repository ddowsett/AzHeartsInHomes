import type { MetadataRoute } from "next";

const BASE_URL = "https://azheartsinhomes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const communities = [
    "phoenix",
    "scottsdale",
    "glendale",
    "peoria",
    "surprise",
    "sun-city",
    "sun-city-west",
    "goodyear",
    "chandler",
    "gilbert",
    "mesa",
    "tempe",
    "queen-creek",
    "anthem",
    "cave-creek",
  ];

  const communityPages = communities.map((community) => ({
    url: `${BASE_URL}/communities/${community}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/buyers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sellers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/communities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/home-value`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...communityPages,
  ];
}