import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/phoenix",
  },
};

export default function PhoenixLayout({ children }: { children: React.ReactNode }) {
  return children;
}