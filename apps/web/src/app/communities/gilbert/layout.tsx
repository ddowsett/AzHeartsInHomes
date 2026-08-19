import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/gilbert" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/gilbert",
    title: "Gilbert AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Gilbert neighborhoods, homes, lifestyle, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function GilbertLayout({ children }: { children: React.ReactNode }) { return children; }