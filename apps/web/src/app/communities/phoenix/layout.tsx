import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/phoenix" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/phoenix",
    title: "Phoenix AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Phoenix neighborhoods, homes, lifestyle, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/Phoenix.jpg", width: 1600, height: 900, alt: "Phoenix Arizona" }],
  },
};

export default function PhoenixLayout({ children }: { children: React.ReactNode }) { return children; }