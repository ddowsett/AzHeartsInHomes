import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/scottsdale" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/scottsdale",
    title: "Scottsdale AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Scottsdale neighborhoods, homes, lifestyle, golf, dining, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function ScottsdaleLayout({ children }: { children: React.ReactNode }) { return children; }