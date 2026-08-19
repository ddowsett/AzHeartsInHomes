import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities",
  },
};

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}