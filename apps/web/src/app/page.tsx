import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { Communities } from "@/components/home/Communities";
import { FeaturedListings } from "@/components/home/FeaturedListings";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Story />
        <Communities />
        <FeaturedListings />
      </main>

      <Footer />
    </>
  );
}