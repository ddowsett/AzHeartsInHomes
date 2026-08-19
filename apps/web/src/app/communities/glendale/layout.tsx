import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/glendale",
  },
};

export default function GlendaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}