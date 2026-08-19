import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/sun-city",
  },
};

export default function SunCityLayout({ children }: { children: React.ReactNode }) {
  return children;
}