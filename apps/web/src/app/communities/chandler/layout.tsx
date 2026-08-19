import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/chandler",
  },
};

export default function ChandlerLayout({ children }: { children: React.ReactNode }) {
  return children;
}