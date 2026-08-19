import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/goodyear",
  },
};

export default function GoodyearLayout({ children }: { children: React.ReactNode }) {
  return children;
}