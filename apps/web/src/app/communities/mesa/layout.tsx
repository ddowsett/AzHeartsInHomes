import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/communities/mesa" },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/communities/mesa",
    title: "Mesa AZ Real Estate & Homes | AZ Hearts In Homes",
    description: "Explore Mesa neighborhoods, homes, lifestyle, and local real estate guidance from REALTOR® Darek Dowsett.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function MesaLayout({ children }: { children: React.ReactNode }) { return children; }