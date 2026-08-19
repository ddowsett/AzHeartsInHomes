import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Home Valuation Phoenix AZ | AZ Hearts In Homes",
  description:
    "Request a complimentary home valuation from Darek Dowsett. Receive a personalized Comparative Market Analysis based on current Phoenix-area market conditions, comparable sales, and your home's unique features.",
  alternates: {
    canonical: "/home-value",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/home-value",
    title: "Free Home Valuation Phoenix AZ | AZ Hearts In Homes",
    description:
      "Request a complimentary home valuation from Darek Dowsett. Receive a personalized Comparative Market Analysis based on current Phoenix-area market conditions, comparable sales, and your home's unique features.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function HomeValueLayout({ children }: { children: React.ReactNode }) {
  return children;
}