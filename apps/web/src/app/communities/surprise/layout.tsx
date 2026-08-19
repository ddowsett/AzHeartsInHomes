import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/surprise",
  },
};

export default function SurpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}