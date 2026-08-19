import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/cave-creek" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/cave-creek",
    title: "Cave Creek AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Cave Creek neighborhoods, homes, desert lifestyle, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function CaveCreekLayout({ children }: { children: React.ReactNode }) { return children; }