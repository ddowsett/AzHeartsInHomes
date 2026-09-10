import type { Metadata } from "next";

import { Communities } from "@/components/home/Communities";
import { Hero } from "@/components/home/Hero";
import { SellerConversion } from "@/components/home/SellerConversion";
import { Services } from "@/components/home/Services";
import { Story } from "@/components/home/Story";

export const metadata: Metadata = {
  title: "Phoenix AZ Realtor | AZ Hearts In Homes",
  description:
    "Darek Dowsett provides full-service real estate representation for buyers and sellers throughout the Greater Phoenix area, with a focus on honest guidance and protecting your equity.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SellerConversion />
      <Services />
      <Story />
      <Communities />
      {/* <FeaturedListings /> */}
    </main>
  );
}
