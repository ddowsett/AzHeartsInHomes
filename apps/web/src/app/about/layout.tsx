import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/about",
    title: "About Darek Dowsett | Phoenix AZ Realtor",
    description:
      "Meet Darek Dowsett of AZ Hearts In Homes. Learn about his approach to real estate, professional experience, commitment to personal service, and perspective on helping Arizona buyers and sellers.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}