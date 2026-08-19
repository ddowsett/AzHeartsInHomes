import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Home Valuation Phoenix AZ | AZ Hearts In Homes",
  description:
    "Request a complimentary home valuation from Darek Dowsett. Receive a personalized Comparative Market Analysis based on current Phoenix-area market conditions, comparable sales, and your home's unique features.",
};

export default function HomeValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}