import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/queen-creek",
  },
};

export default function QueenCreekLayout({ children }: { children: React.ReactNode }) {
  return children;
}