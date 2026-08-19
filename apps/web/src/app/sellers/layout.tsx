import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sellers",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/sellers",
    title: "Phoenix AZ Listing Agent | AZ Hearts In Homes",
    description:
      "Sell your Phoenix-area home with Darek Dowsett. Get full-service representation, professional marketing, experienced negotiation, and reduced listing compensation designed to help protect more of your equity.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function SellersLayout({ children }: { children: React.ReactNode }) {
  return children;
}