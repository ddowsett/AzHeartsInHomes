import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Baseball,
  CheckCircle2,
  Home,
  MapPin,
  ShoppingBag,
  Sun,
  Trees,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Peoria AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Peoria AZ neighborhoods, homes, Lake Pleasant, shopping, recreation, and spring training baseball with local REALTOR® Darek Dowsett. Get personal guidance buying or selling a Peoria home.",
  alternates: {
    canonical: "/communities/peoria",
  },
  openGraph: {
    title: "Peoria AZ Real Estate & Homes | AZ Hearts In Homes",
    description:
      "Explore Peoria neighborhoods, homes, recreation, shopping, and spring training baseball with local REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/peoria`,
    type: "website",
    images: [
      {
        url: "/images/communities/peoria.jpg",
        alt: "Peoria Arizona",
      },
    ],
  },
};

const areas = [
  {
    title: "Arrowhead Area",
    text:
      "A popular Northwest Valley area with established neighborhoods, shopping, dining, golf, parks, and convenient access to major roads and Loop 101.",
  },
  {
    title: "North Peoria",
    text:
      "A growing area featuring newer communities, larger homes, desert surroundings, recreation, and convenient access to the Lake Pleasant area.",
  },
  {
    title: "Central Peoria",
    text:
      "Established neighborhoods offering a variety of housing options with convenient access to shopping, schools, parks, recreation, and everyday amenities.",
  },
  {
    title: "West Peoria",
    text:
      "A mix of established neighborhoods and housing styles with convenient access to Glendale, Surprise, and other West Valley communities.",
  },
];

const faqs = [
  {
    question: "Is Peoria a good place to live in the Phoenix area?",
    answer:
      "Peoria offers a broad mix of established neighborhoods, newer communities, shopping, recreation, entertainment, and outdoor opportunities. The right part of Peoria depends on your preferred location, home style, budget, commute, and lifestyle.",
  },
  {
    question: "What is there to do in Peoria, Arizona?",
    answer:
      "Peoria offers parks, golf, shopping, dining, entertainment, outdoor recreation, and access to Lake Pleasant. The city is also home to the Peoria Sports Complex, where the San Diego Padres and Seattle Mariners hold Spring Training.",
  },
  {
    question: "Where is Spring Training in Peoria?",
    answer:
      "The Peoria Sports Complex is located at 16101 N. 83rd Ave. in Peoria. It is the Spring Training home shared by the San Diego Padres and Seattle Mariners and is part of the P83 entertainment district.",
  },
  {
    question: "What should I consider when buying a home in Peoria?",
    answer:
      "Location, neighborhood, home condition, property features, commute, shopping and recreation, HOA considerations, and long-term goals are all important. Comparing the different parts of Peoria can help you find the right fit before focusing on individual homes.",
  },
  {
    question: "Can you help me sell a home in Peoria?",
    answer:
      "Yes. I provide full-service representation from the initial consultation through marketing, negotiations, inspections, closing, and the follow-up that comes after the transaction.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/peoria#webpage`,
      url: `${siteUrl}/communities/peoria`,
      name: "Peoria AZ Real Estate & Homes | AZ Hearts In Homes",
      description:
        "Explore Peoria Arizona neighborhoods, homes, recreation, shopping, and spring training baseball with REALTOR® Darek Dowsett.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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

export default function PeoriaPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Peoria" slug="peoria" />

      {/* Hero */}
      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/communities/peoria.jpg"
            alt="Peoria Arizona landscape"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/35 to-black/60"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              PEORIA, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Find Your Place In Peoria
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Peoria combines established neighborhoods, newer communities,
              recreation, shopping, dining, and easy access to the Northwest
              Valley. It also offers one of the Valley&apos;s best places to
              experience Spring Training baseball.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Peoria Homes
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

      {/* Lifestyle */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Baseball,
                title: "Spring Training Baseball",
                text:
                  "Peoria Sports Complex is the Spring Training home shared by the San Diego Padres and Seattle Mariners, giving Peoria residents easy access to Cactus League baseball.",
              },
              {
                icon: Trees,
                title: "Outdoor Recreation",
                text:
                  "Peoria provides convenient access to parks, trails, golf, and outdoor destinations including the Lake Pleasant area.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Dining",
                text:
                  "The Arrowhead area and surrounding neighborhoods offer extensive shopping, restaurants, entertainment, and everyday conveniences.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />
                  <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spring Training */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              PEORIA SPORTS COMPLEX
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Baseball Is Part Of The Peoria Lifestyle.
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Spring Training is one of the things that makes Peoria unique.
              The Peoria Sports Complex is home to both the San Diego Padres
              and Seattle Mariners and sits in the heart of the P83
              entertainment district.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              For baseball fans, living in Peoria can mean having Cactus League
              games, player workouts, restaurants, shopping, and entertainment
              close to home.
            </p>

            <div className="mt-8">
              <a
                href="https://www.mlb.com/spring-training/ballparks/peoria-sports-complex"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-orange-600 underline underline-offset-4"
              >
                Learn more about Peoria Sports Complex
              </a>
            </div>
          </div>

          <Card className="rounded-3xl border-orange-100 bg-orange-50">
            <CardContent className="p-8 md:p-10">
              <Baseball className="h-12 w-12 text-orange-500" />

              <h3 className="mt-6 text-3xl font-bold">
                A True Cactus League Destination
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "San Diego Padres Spring Training",
                  "Seattle Mariners Spring Training",
                  "P83 shopping, dining, and entertainment",
                  "Convenient access to Loop 101 and the Northwest Valley",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                    <span className="text-lg leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              EXPLORE PEORIA
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Different Areas. Different Possibilities.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Peoria includes a variety of neighborhoods, from established
              communities near everyday amenities to newer developments farther
              north.
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
                      <p className="mt-4 leading-8 text-muted-foreground">
                        {area.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buying */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                BUYING IN PEORIA
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find The Part Of Peoria That Fits Your Lifestyle
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                A home near shopping, entertainment, and Spring Training may
                offer a very different lifestyle from a property farther north
                near open desert and recreation.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I&apos;ll help you compare locations and properties so you can
                understand the bigger picture before making an offer.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style and property features",
                "Shopping and dining",
                "Parks, golf, and recreation",
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

      {/* Sellers */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            SELLING IN PEORIA
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selling A Peoria Home Takes More Than A Listing.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Pricing, presentation, marketing, negotiations, inspections, and
            contract management all matter. I manage the transaction from our
            first conversation through closing and beyond.
          </p>

          <Link href="/sellers" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Learn About Selling Your Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Local Guidance */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              LOCAL GUIDANCE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Looking For A Peoria Home?
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Tell me what you&apos;re looking for and I&apos;ll help you narrow
              down the Peoria neighborhoods and properties that fit your goals.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From the initial search through negotiations, inspections,
              financing, and closing, I&apos;ll remain personally involved
              throughout the process.
            </p>

            <Link href="/contact" className="mt-10 inline-block">
              <Button size="lg" className="px-8">
                Let&apos;s Talk About Your Search
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            PEORIA REAL ESTATE FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Questions About Living In Peoria?
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <Card key={faq.question} className="rounded-3xl">
              <CardContent className="p-7 md:p-8">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />

          <h2 className="mt-8 text-5xl font-bold">Ready To Explore Peoria?</h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let&apos;s talk about what
            you&apos;re looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Peoria Homes
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}
