import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Coffee,
  Home,
  MapPin,
  ShoppingBag,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Scottsdale AZ Realtor | Scottsdale Real Estate & Homes for Sale",
  description:
    "Looking for a Scottsdale AZ Realtor? Explore Scottsdale real estate, neighborhoods, homes for sale, golf, dining, and lifestyle options with REALTOR® Darek Dowsett.",
  alternates: {
    canonical: "/communities/scottsdale",
  },
  openGraph: {
    title: "Scottsdale AZ Realtor | Scottsdale Real Estate & Homes for Sale",
    description:
      "Explore Scottsdale real estate, neighborhoods, homes, golf, dining, and lifestyle options with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/scottsdale`,
    type: "website",
  },
};

const areas = [
  {
    title: "Old Town Scottsdale",
    text: "A lively part of Scottsdale known for restaurants, galleries, shopping, nightlife, events, and a more walkable urban atmosphere. It can appeal to buyers who want to be close to entertainment and dining.",
  },
  {
    title: "Central Scottsdale",
    text: "Established neighborhoods with convenient access to shopping, dining, golf, recreation, and major Valley destinations. Housing ranges across a variety of ages, styles, and price points.",
  },
  {
    title: "North Scottsdale",
    text: "Known for desert surroundings, golf communities, larger homes, newer developments, and access to outdoor recreation. Location within North Scottsdale can make a significant difference in the overall lifestyle.",
  },
  {
    title: "McCormick Ranch",
    text: "An established Scottsdale community with mature landscaping, greenbelts, lakes, recreation, and a variety of housing options. Its location provides convenient access to both Scottsdale and nearby Valley communities.",
  },
];

const faqs = [
  {
    question: "Is Scottsdale a good place to buy a home?",
    answer:
      "Scottsdale offers a wide range of neighborhoods, housing styles, recreation, dining, shopping, and outdoor activities. Whether it is the right place for you depends on your budget, preferred lifestyle, commute, and long-term plans.",
  },
  {
    question: "What are the main areas of Scottsdale?",
    answer:
      "Scottsdale includes distinct areas such as Old Town Scottsdale, Central Scottsdale, North Scottsdale, and McCormick Ranch. Each area has a different mix of homes, amenities, surroundings, and lifestyle options.",
  },
  {
    question: "What should I consider when buying a Scottsdale home?",
    answer:
      "Location, neighborhood character, property condition, lot size, HOA considerations, access to golf and recreation, nearby shopping and dining, commute, and long-term resale considerations can all be important when comparing Scottsdale properties.",
  },
  {
    question: "Can you help me find a home in Scottsdale if I am relocating?",
    answer:
      "Yes. I can help you narrow the search by neighborhood and lifestyle before touring individual properties, then manage the transaction from the initial search through negotiations, inspections, and closing.",
  },
  {
    question: "Can you help me sell a home in Scottsdale?",
    answer:
      "Yes. I provide full-service representation for Scottsdale sellers, including pricing strategy, marketing, negotiations, transaction management, and coordination through closing.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/scottsdale#webpage`,
      url: `${siteUrl}/communities/scottsdale`,
      name: "Scottsdale AZ Realtor | Scottsdale Real Estate & Homes for Sale",
      description:
        "Explore Scottsdale real estate, neighborhoods, homes, golf, dining, and lifestyle options with REALTOR® Darek Dowsett.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "City",
        name: "Scottsdale",
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

export default function ScottsdalePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Scottsdale" slug="scottsdale" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/communities/Luxrury.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/65"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              SCOTTSDALE, ARIZONA
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Scottsdale AZ Real Estate &amp; Homes for Sale
            </h1>
            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Scottsdale offers an unusually diverse combination of desert scenery,
              golf, dining, shopping, recreation, and neighborhoods. Finding the
              right part of Scottsdale is an important part of finding the right home.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Scottsdale Homes
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900"
                >
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
              SCOTTSDALE REAL ESTATE
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A Lifestyle Market With Very Different Neighborhoods
            </h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Scottsdale can feel very different depending on where you live. Some
              buyers are drawn to restaurants, entertainment, and a more walkable
              environment. Others want golf, desert scenery, larger properties, or a
              quieter neighborhood. The right choice starts with understanding how you
              want to live.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "Golf & Recreation",
                text: "Scottsdale is known for golf, outdoor recreation, trails, and desert landscapes, with options ranging from established neighborhoods to resort-oriented communities.",
              },
              {
                icon: Coffee,
                title: "Dining & Entertainment",
                text: "Old Town and other Scottsdale areas offer an extensive selection of restaurants, coffee shops, nightlife, arts, events, and entertainment.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Lifestyle",
                text: "Scottsdale offers everything from local boutiques to major shopping destinations and luxury retail, with different areas offering very different experiences.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
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
            SCOTTSDALE NEIGHBORHOODS
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Which Part of Scottsdale Fits You?
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Scottsdale isn&apos;t one-size-fits-all. Different areas offer very different
            environments, housing options, and lifestyles. I can help you compare the
            areas before you focus on individual homes.
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
                BUYING A HOME IN SCOTTSDALE
              </p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                The Right Home Starts With the Right Area.
              </h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Whether you&apos;re looking for a lock-and-leave property near restaurants
                and entertainment, an established neighborhood, or a larger home
                surrounded by desert and golf, Scottsdale offers many different
                possibilities.
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I&apos;ll help you compare the areas and properties so you can make a
                decision based on more than just the house itself.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style, lot, and property features",
                "Golf and recreation access",
                "Dining, shopping, and entertainment",
                "Commute and transportation",
                "Long-term goals and resale considerations",
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
            SELLING A HOME IN SCOTTSDALE
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selling a Scottsdale Home Requires More Than Putting It on the Market.
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Buyers compare Scottsdale properties based on location, condition, features,
            lifestyle, and value. I&apos;ll help you position your home, develop a pricing
            strategy, market the property, negotiate offers, and manage the transaction
            through closing.
          </p>
          <Link href="/sellers" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Learn About Selling
            </Button>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            RELOCATING TO SCOTTSDALE
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Find the Scottsdale Lifestyle That Fits You.
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            If you&apos;re relocating to Scottsdale, I&apos;ll help you compare the different
            parts of the city before you spend your time touring individual homes. Your
            priorities can point us toward very different neighborhoods.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From the initial search through negotiations, inspections, financing, and
            closing, I&apos;ll remain personally involved throughout the process.
          </p>
          <Link href="/contact" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Let&apos;s Talk About Your Search
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SCOTTSDALE REALTOR FAQ
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Questions About Scottsdale Real Estate
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A few of the questions I hear from buyers, sellers, and people relocating
              to Scottsdale.
            </p>
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

      <section className="border-t bg-stone-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            EXPLORE NEARBY
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Considering Other Valley Communities?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Phoenix and other nearby communities may offer a different fit depending on
            your lifestyle, commute, budget, and long-term plans.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              ["/communities/phoenix", "Phoenix"],
              ["/communities/tempe", "Tempe"],
              ["/communities/chandler", "Chandler"],
              ["/communities/gilbert", "Gilbert"],
            ].map(([href, label]) => (
              <Link key={href} href={href}>
                <Button variant="outline">{label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />
          <h2 className="mt-8 text-5xl font-bold">Ready to Explore Scottsdale?</h2>
          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let&apos;s talk about what you&apos;re
            looking for.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Scottsdale Homes
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
