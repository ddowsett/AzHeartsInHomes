import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/cave-creek",
  },
};

export default function CaveCreekLayout({ children }: { children: React.ReactNode }) {
  return children;
}