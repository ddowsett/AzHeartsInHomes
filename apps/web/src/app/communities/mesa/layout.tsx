import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/mesa",
  },
};

export default function MesaLayout({ children }: { children: React.ReactNode }) {
  return children;
}