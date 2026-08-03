export const siteConfig = {
  name: "AZ Hearts In Homes",

  tagline: "Real Estate With Heart.",

  description:
    "Helping Arizona families buy and sell homes with confidence through honest guidance, clear communication, and personal service.",

  navigation: [
    {
      title: "Buying",
      href: "/buyers",
    },
    {
      title: "Selling",
      href: "/sellers",
    },
    {
      title: "Communities",
      href: "/communities",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  cta: {
    title: "Search Homes",
    href: "/search",
  },
};

export type SiteConfig = typeof siteConfig;