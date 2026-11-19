import type { Metadata } from "next";

import { Communities } from "@/components/home/Communities";
import { Hero } from "@/components/home/Hero";
import { SellerConversion } from "@/components/home/SellerConversion";
import { Services } from "@/components/home/Services";
import { Story } from "@/components/home/Story";

export const metadata: Metadata = {
  title: { absolute: "Phoenix Listing Agent | 1% Listing Fee | AZ Hearts In Homes" },
  description:
    "Full-service seller representation in Phoenix with a 1% listing-side fee. Buyer-agent compensation is negotiated separately.",
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
