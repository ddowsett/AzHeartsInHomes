import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/tempe",
  },
};

export default function TempeLayout({ children }: { children: React.ReactNode }) {
  return children;
}