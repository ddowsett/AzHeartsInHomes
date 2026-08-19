import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sellers",
  },
};

export default function SellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}