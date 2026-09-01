import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Phoenix Home for 1% | AZ Hearts In Homes",
  description:
    "Sell your Phoenix-area home with full-service representation for a 1% listing commission. Professional marketing, pricing strategy, negotiation, and personal service from Darek Dowsett.",
  alternates: {
    canonical: "/sell-your-home-for-1-percent",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/sell-your-home-for-1-percent",
    title: "Sell Your Phoenix Home for 1% | AZ Hearts In Homes",
    description:
      "Full-service Phoenix-area real estate representation for a 1% listing commission, with any buyer-agent compensation handled separately as agreed with the seller.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [
      {
        url: "/images/hearthome-new.png",
        width: 512,
        height: 512,
        alt: "AZ Hearts In Homes",
      },
    ],
  },
};

export default function OnePercentSellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
