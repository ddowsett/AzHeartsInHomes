import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/buyers",
  },
};

export default function BuyersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}