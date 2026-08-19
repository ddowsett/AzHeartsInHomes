import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/sun-city" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/sun-city",
    title: "Sun City AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Sun City homes, active-adult lifestyle, golf, recreation, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function SunCityLayout({ children }: { children: React.ReactNode }) { return children; }