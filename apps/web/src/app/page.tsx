import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Story } from "@/components/home/Story";
import { Communities } from "@/components/home/Communities";



export const metadata: Metadata = {
  title: "Phoenix AZ Realtor | AZ Hearts In Homes",
  description:
    "Darek Dowsett provides full-service real estate representation for buyers and sellers throughout the Greater Phoenix area, with a focus on honest guidance and protecting your equity.",
};

export default function HomePage() {
  return (
    <>
  

      <main>
        <Hero />
        <Services />
        <Story />
        <Communities />
        {/* <FeaturedListings /> */}
      </main>

      <Footer />
    </>
  );
}