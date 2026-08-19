import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/gilbert",
  },
};

export default function GilbertLayout({ children }: { children: React.ReactNode }) {
  return children;
}