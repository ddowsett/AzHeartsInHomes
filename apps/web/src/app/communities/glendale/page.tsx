import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Home,
  MapPin,
  ShoppingBag,
  Trophy,
  Trees,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Glendale AZ Realtor | Glendale Real Estate & Homes for Sale",
  description:
    "Looking for a Glendale AZ Realtor? Explore Glendale real estate, neighborhoods, homes for sale, shopping, sports, recreation, and lifestyle options with REALTOR® Darek Dowsett.",
  alternates: {
    canonical: "/communities/glendale",
  },
  openGraph: {
    title: "Glendale AZ Realtor | Glendale Real Estate & Homes for Sale",
    description:
      "Explore Glendale real estate, neighborhoods, homes, shopping, sports, recreation, and lifestyle options with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/glendale`,
    type: "website",
  },
};

const areas = [
  {
    title: "Arrowhead Ranch",
    text: "A popular Northwest Valley area with established neighborhoods, golf, shopping, dining, parks, and convenient access to major roads.",
  },
  {
    title: "Westgate & Sports District",
    text: "A vibrant entertainment area surrounded by restaurants, shopping, sports venues, and a variety of nearby housing options.",
  },
  {
    title: "North Glendale",
    text: "A mix of established and newer neighborhoods with access to shopping, recreation, parks, and the broader Northwest Valley.",
  },
  {
    title: "Historic Downtown Glendale",
    text: "Known for its historic character, locally owned businesses, antique shopping, restaurants, and a distinct small-town atmosphere within the Valley.",
  },
];

const faqs = [
  {
    question: "Is Glendale AZ a good place to buy a home?",
    answer:
      "Glendale offers a broad mix of established neighborhoods, newer communities, shopping, recreation, entertainment, and housing options. Whether it is the right fit depends on your budget, preferred lifestyle, commute, and long-term plans.",
  },
  {
    question: "What are the main areas of Glendale?",
    answer:
      "Glendale includes areas such as Arrowhead Ranch, the Westgate and sports district, North Glendale, and Historic Downtown Glendale. Each area offers a different combination of housing, amenities, location, and lifestyle.",
  },
  {
    question: "What should I consider when buying a Glendale home?",
    answer:
      "Location, neighborhood character, property condition, lot size, HOA considerations, shopping and dining, recreation, commute, proximity to entertainment, and long-term resale considerations can all matter when comparing Glendale homes.",
  },
  {
    question: "Can you help me find a home in Glendale if I am relocating?",
    answer:
      "Yes. I can help you narrow the search by neighborhood and lifestyle before touring individual properties, then remain personally involved through negotiations, inspections, financing, and closing.",
  },
  {
    question: "Can you help me sell a home in Glendale?",
    answer:
      "Yes. I provide full-service representation for Glendale sellers, including pricing strategy, marketing, negotiations, transaction management, and coordination through closing.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/glendale#webpage`,
      url: `${siteUrl}/communities/glendale`,
      name: "Glendale AZ Realtor | Glendale Real Estate & Homes for Sale",
      description:
        "Explore Glendale real estate, neighborhoods, homes, shopping, sports, recreation, and lifestyle options with REALTOR® Darek Dowsett.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "City",
        name: "Glendale",
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

export default function GlendalePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Glendale" slug="glendale" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              GLENDALE, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Glendale AZ Real Estate &amp; Homes for Sale
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Glendale offers a diverse mix of established neighborhoods, newer
              communities, shopping, recreation, entertainment, and convenient access
              to the greater Phoenix area. Finding the right part of Glendale is an
              important part of finding the right home.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Glendale Homes
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">
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
              GLENDALE REAL ESTATE
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A Northwest Valley Community With Many Different Lifestyles
            </h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Glendale can feel very different depending on where you live. Some buyers
              want established neighborhoods and parks, while others prioritize shopping,
              sports, entertainment, golf, or convenient access to other parts of the
              Valley. The right choice starts with understanding how you want to live.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "Sports & Entertainment",
                text: "Glendale offers convenient access to major sports and entertainment destinations, along with restaurants, events, and nightlife.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Dining",
                text: "From major shopping destinations to local restaurants and historic downtown businesses, Glendale offers a wide variety of options.",
              },
              {
                icon: Trees,
                title: "Parks & Recreation",
                text: "Parks, trails, golf, community recreation, and nearby outdoor destinations provide plenty of opportunities to enjoy the Arizona climate.",
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
            GLENDALE NEIGHBORHOODS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Which Part of Glendale Fits You?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Glendale encompasses a variety of neighborhoods and lifestyles. Understanding
            the differences can help you narrow down the right location before you focus
            on individual homes.
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
                BUYING A HOME IN GLENDALE
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Location Makes a Difference.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Whether you&apos;re looking for an established neighborhood, a newer home,
                proximity to entertainment, or convenient access to other parts of the
                Valley, Glendale offers a variety of possibilities.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I&apos;ll help you compare neighborhoods and properties so you can make a
                decision based on the complete picture—not just the house.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style, condition, and lot",
                "Shopping and dining",
                "Parks and recreation",
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
            SELLING A HOME IN GLENDALE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selling a Glendale Home Requires a Strategy.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Buyers compare Glendale properties based on location, condition, features,
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
            RELOCATING TO GLENDALE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Find the Glendale Lifestyle That Fits You.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            If you&apos;re relocating to Glendale, I&apos;ll help you compare neighborhoods and
            housing options before you spend your time touring individual homes. Your
            priorities can point us toward very different parts of the city.
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
              GLENDALE REALTOR FAQ
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Questions About Glendale Real Estate
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A few of the questions I hear from buyers, sellers, and people relocating
              to Glendale.
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
            Phoenix, Peoria, Surprise, and other nearby communities may offer a different
            fit depending on your lifestyle, commute, budget, and long-term plans.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              ["/communities/phoenix", "Phoenix"],
              ["/communities/peoria", "Peoria"],
              ["/communities/surprise", "Surprise"],
              ["/communities/scottsdale", "Scottsdale"],
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

          <h2 className="mt-8 text-5xl font-bold">Ready to Explore Glendale?</h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let&apos;s talk about what you&apos;re
            looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Glendale Homes
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
