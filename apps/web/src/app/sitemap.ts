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
  }));

  return [
    {
      url: BASE_URL,
    },
    {
      url: `${BASE_URL}/buyers`,
    },
    {
      url: `${BASE_URL}/sellers`,
    },
    {
      url: `${BASE_URL}/sell-your-home-for-1-percent`,
    },
    {
      url: `${BASE_URL}/communities`,
    },
    {
      url: `${BASE_URL}/home-value`,
    },
    {
      url: `${BASE_URL}/about`,
    },
    {
      url: `${BASE_URL}/contact`,
    },
    ...communityPages,
  ];
}
