import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/anthem",
  },
};

export default function AnthemLayout({ children }: { children: React.ReactNode }) {
  return children;
}