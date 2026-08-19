import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/peoria",
  },
};

export default function PeoriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}