import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/queen-creek" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/queen-creek",
    title: "Queen Creek AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Queen Creek neighborhoods, homes, lifestyle, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function QueenCreekLayout({ children }: { children: React.ReactNode }) { return children; }