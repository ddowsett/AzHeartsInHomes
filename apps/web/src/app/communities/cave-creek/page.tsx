import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Home,
  MapPin,
  ShoppingBag,
  Sun,
  Trees,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Cave Creek AZ Realtor | Real Estate & Homes for Sale",
  description:
    "Explore Cave Creek AZ real estate, homes, hiking trails, Sonoran Desert scenery, Old West character, local dining, and outdoor living with REALTOR® Darek Dowsett.",
  alternates: {
    canonical: "/communities/cave-creek",
  },
  openGraph: {
    title: "Cave Creek AZ Realtor | Real Estate & Homes for Sale",
    description:
      "Explore Cave Creek real estate, homes, hiking, desert scenery, Old West character, dining, and outdoor living with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/cave-creek`,
    type: "website",
  },
};

const areas = [
  {
    title: "Cave Creek Village",
    text:
      "The heart of Cave Creek offers restaurants, local businesses, galleries, events, and a distinctive Old West atmosphere that gives the community much of its personality.",
  },
  {
    title: "Tatum Ranch",
    text:
      "An established master-planned community with a variety of homes, parks, shopping, golf, and convenient access to Cave Creek and North Phoenix.",
  },
  {
    title: "Desert Foothills",
    text:
      "Homes in this area can offer more space, desert surroundings, mountain views, and a quieter setting while remaining close to Cave Creek amenities.",
  },
  {
    title: "Black Mountain Area",
    text:
      "Known for dramatic Sonoran Desert scenery, mountain views, hiking opportunities, and properties that embrace Cave Creek's distinctive landscape.",
  },
];

const faqs = [
  {
    question: "What makes Cave Creek different from other Phoenix-area communities?",
    answer:
      "Cave Creek has a distinctive Old West character, Sonoran Desert setting, hiking and outdoor recreation, local restaurants and shops, and a variety of properties that can provide a more spacious or rural feel.",
  },
  {
    question: "Are there hiking trails in Cave Creek?",
    answer:
      "Yes. Cave Creek and the surrounding Sonoran Desert offer many hiking and outdoor recreation opportunities. Trail access and the type of terrain vary by location, so buyers who value hiking should consider proximity to the areas they enjoy most.",
  },
  {
    question: "What types of homes can I find in Cave Creek?",
    answer:
      "Cave Creek has a diverse housing market that includes established neighborhoods, newer homes, larger lots, desert properties, and homes with more privacy or a rural character. The right property depends on your preferred setting and lifestyle.",
  },
  {
    question: "Is Cave Creek a good place to live for outdoor enthusiasts?",
    answer:
      "Cave Creek can be an excellent fit for people who value desert scenery, hiking, open space, mountain views, and an outdoor-oriented lifestyle while still wanting access to restaurants, shopping, and other amenities.",
  },
  {
    question: "Can you help me buy a home in Cave Creek?",
    answer:
      "Yes. I can help you compare Cave Creek properties based on location, setting, home features, lot size, access to recreation, and your long-term goals, then personally manage the transaction through closing.",
  },
  {
    question: "Can you help me sell a Cave Creek home?",
    answer:
      "Yes. I provide full-service representation for Cave Creek sellers, including pricing strategy, marketing, negotiations, transaction management, and coordination through closing.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/cave-creek#webpage`,
      url: `${siteUrl}/communities/cave-creek`,
      name: "Cave Creek AZ Realtor | Real Estate & Homes for Sale",
      description:
        "Explore Cave Creek real estate, homes, hiking trails, Sonoran Desert scenery, Old West character, local dining, and outdoor living with REALTOR® Darek Dowsett.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Place",
        name: "Cave Creek",
        address: {
          "@type": "PostalAddress",
          addressRegion: "AZ",
          addressCountry: "US",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function CaveCreekPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Cave Creek" slug="cave-creek" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/communities/AzHomePic.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/35 to-black/60" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              CAVE CREEK, ARIZONA
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Cave Creek AZ Real Estate &amp; Homes for Sale
            </h1>
            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Where Old West character meets the Sonoran Desert. Cave Creek offers hiking trails, mountain scenery, outdoor recreation, local dining, and a distinctive Arizona lifestyle.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Cave Creek Homes
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900">
                  Talk With Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              THE CAVE CREEK LIFESTYLE
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Desert Trails, Old West Character &amp; Outdoor Living
            </h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Cave Creek feels different from many communities in the Valley. The Sonoran Desert landscape, hiking trails, mountain views, western heritage, local businesses, and outdoor lifestyle are part of what makes the area distinctive.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Trees,
                title: "Hiking & Outdoor Recreation",
                text: "Cave Creek offers many hiking trails and opportunities to enjoy the surrounding Sonoran Desert, mountain scenery, and open spaces.",
              },
              {
                icon: Sun,
                title: "Old West Character",
                text: "Western heritage is part of Cave Creek's identity, creating a distinctive atmosphere that sets it apart from many other Phoenix-area communities.",
              },
              {
                icon: ShoppingBag,
                title: "Local Dining & Businesses",
                text: "Restaurants, shops, galleries, entertainment, and locally owned businesses contribute to Cave Creek's unique small-town and western feel.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />
                  <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
                  <p className="mt-4 leading-8 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            EXPLORE CAVE CREEK
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A Different Kind of Arizona Lifestyle
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Cave Creek offers a range of settings and housing options. Some buyers want to be close to the restaurants and western atmosphere, while others are looking for space, privacy, desert surroundings, or mountain views.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {areas.map((area) => (
            <Card key={area.title} className="rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{area.title}</h3>
                    <p className="mt-4 leading-8 text-muted-foreground">{area.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                BUYING IN CAVE CREEK
              </p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find a Home That Fits the Landscape
              </h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Cave Creek properties can differ dramatically in size, setting, architecture, and surroundings. Understanding the property and its location is especially important when choosing a home here.
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you evaluate the home, neighborhood, access to recreation, and long-term considerations before you make an offer.
              </p>
            </div>
            <div className="space-y-5">
              {[
                "Property location and setting",
                "Home style and condition",
                "Lot size and privacy",
                "Desert and mountain surroundings",
                "Hiking and outdoor recreation access",
                "Shopping and dining access",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            SELLING IN CAVE CREEK
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selling Your Cave Creek Home?
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Cave Creek buyers can be drawn to the area's setting and lifestyle as much as the home itself. Marketing should communicate what makes the property and its location special.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'll manage the transaction from our initial meeting through closing, including marketing, negotiations, contract management, and communication throughout the process.
          </p>
          <Link href="/sellers" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Learn About Selling
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Users className="mx-auto h-10 w-10 text-orange-500" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              CAVE CREEK REALTOR FAQ
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Questions About Cave Creek Real Estate
            </h2>
          </div>
          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-2xl">
                <CardContent className="p-7">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-8 text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            LOCAL GUIDANCE
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Considering Cave Creek?
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Whether you're relocating to Arizona, looking for more space and privacy, or want to live closer to the desert and outdoor recreation, I'll help you understand the homes and locations you're considering.
          </p>
          <Link href="/contact" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Let's Talk About Your Search
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />
          <h2 className="mt-8 text-5xl font-bold">Ready to Explore Cave Creek?</h2>
          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about the lifestyle you're looking for.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Cave Creek Homes
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}