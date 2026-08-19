import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities/sun-city-west",
  },
};

export default function SunCityWestLayout({ children }: { children: React.ReactNode }) {
  return children;
}