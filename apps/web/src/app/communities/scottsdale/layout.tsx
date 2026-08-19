import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/scottsdale",
  },
};

export default function ScottsdaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}