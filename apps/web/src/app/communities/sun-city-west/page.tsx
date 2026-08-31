import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  CircleUserRound,
  Home,
  MapPin,
  ShoppingBag,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Sun City West AZ Realtor | Real Estate & Homes for Sale",
  description:
    "Explore Sun City West AZ real estate, homes, seven golf courses, recreation, clubs, activities, and active-adult living with REALTOR® Darek Dowsett.",
  alternates: {
    canonical: "/communities/sun-city-west",
  },
  openGraph: {
    title: "Sun City West AZ Realtor | Real Estate & Homes for Sale",
    description:
      "Explore Sun City West real estate, homes, golf, recreation, clubs, activities, and active-adult living with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/sun-city-west`,
    type: "website",
  },
};

const areas = [
  {
    title: "Seven Golf Courses",
    text:
      "Golf is a major part of the Sun City West lifestyle, with seven golf courses available to residents who enjoy playing close to home.",
  },
  {
    title: "Recreation & Fitness",
    text:
      "Four recreation centers provide access to fitness facilities, swimming pools, pickleball, tennis, racquetball, table tennis, walking tracks, mini-golf, lawn bowling, bocce, softball, shuffleboard, horseshoes, dog parks, and other activities.",
  },
  {
    title: "Clubs & Social Activities",
    text:
      "More than 90 chartered clubs give residents opportunities to pursue hobbies, learn new skills, participate in classes, meet neighbors, and stay socially connected.",
  },
  {
    title: "Arts, Entertainment & Events",
    text:
      "The community offers arts and crafts, theater, movies, music, organized events, live entertainment, trips, tours, and other activities throughout the year.",
  },
];

const faqs = [
  {
    question: "How many golf courses are in Sun City West?",
    answer:
      "Sun City West has seven golf courses, making golf a significant part of the community's active-adult lifestyle.",
  },
  {
    question: "What recreation facilities are available in Sun City West?",
    answer:
      "Sun City West has four recreation centers with fitness facilities, pools, pickleball, tennis, racquetball, table tennis, walking tracks, mini-golf, lawn bowling, bocce, softball, shuffleboard, horseshoes, dog parks, arts and crafts facilities, and other amenities.",
  },
  {
    question: "How many clubs are available in Sun City West?",
    answer:
      "Sun City West has more than 90 chartered clubs covering a wide range of hobbies, interests, activities, and social opportunities.",
  },
  {
    question: "Is Sun City West more than a golf community?",
    answer:
      "Yes. Golf is only one part of the lifestyle. Residents can choose from fitness, swimming, racquet sports, softball, bowling, arts and crafts, clubs, entertainment, organized activities, trips, tours, and many other ways to stay active and connected.",
  },
  {
    question: "Can you help me buy a home in Sun City West?",
    answer:
      "Yes. I can help you compare homes based on location, condition, amenities, recreation access, community activities, and your long-term goals, then personally manage the transaction through closing.",
  },
  {
    question: "Can you help me sell a Sun City West home?",
    answer:
      "Yes. I provide full-service representation for Sun City West sellers, including pricing strategy, marketing, negotiations, transaction management, and coordination through closing.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/sun-city-west#webpage`,
      url: `${siteUrl}/communities/sun-city-west`,
      name: "Sun City West AZ Realtor | Real Estate & Homes for Sale",
      description:
        "Explore Sun City West real estate, homes, seven golf courses, recreation, clubs, activities, and active-adult living with REALTOR® Darek Dowsett.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Place",
        name: "Sun City West",
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

export default function SunCityWestPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Sun City West" slug="sun-city-west" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SUN CITY WEST, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Sun City West AZ Real Estate &amp; Homes for Sale
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Sun City West is an established active-adult community built
              around recreation, seven golf courses, clubs, social activities,
              and an active lifestyle.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Sun City West Homes
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
              SUN CITY WEST RECREATION
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              More Than a Golf Community
            </h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Sun City West offers an active lifestyle that goes well beyond
              its seven golf courses. Four recreation centers, more than 90
              chartered clubs, fitness facilities, pools, sports, arts,
              entertainment, and organized activities give residents many ways
              to stay active and connected.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "Golf & Recreation",
                text:
                  "Seven golf courses plus fitness facilities, pools, pickleball, tennis, racquetball, softball, walking tracks, and many other recreational opportunities.",
              },
              {
                icon: Users,
                title: "Clubs & Activities",
                text:
                  "More than 90 chartered clubs offer hobbies, classes, social activities, and opportunities to meet people with shared interests.",
              },
              {
                icon: CircleUserRound,
                title: "Active-Adult Living",
                text:
                  "A broad range of recreation, entertainment, arts, events, trips, and social opportunities supports an active and connected lifestyle.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />

                  <h2 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            EXPLORE SUN CITY WEST
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A Community Built Around Lifestyle
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            When considering Sun City West, the home itself is only part of
            the decision. Access to recreation, golf, clubs, activities, and
            the amenities you enjoy can be equally important.
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
      </section>

      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                BUYING IN SUN CITY WEST
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find The Home That Fits Your Lifestyle
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Sun City West offers a broad selection of established homes.
                When comparing properties, it's important to consider not only
                the house but also its location, condition, amenities, and
                access to the activities you enjoy.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you evaluate the complete picture so you can make a
                confident decision.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Home condition and improvements",
                "Location within Sun City West",
                "Golf and recreation access",
                "Clubs and community activities",
                "Shopping and everyday amenities",
                "Long-term ownership goals",
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
            SELLING IN SUN CITY WEST
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selling Your Sun City West Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Buyers looking at Sun City West are often searching for a
            particular lifestyle as much as a particular home. Marketing should
            communicate both.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'll manage the transaction from our initial meeting through
            closing, including professional marketing, negotiations, contract
            management, and communication throughout the process.
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
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SUN CITY WEST ACTIVITIES
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Plenty of Ways To Stay Active and Connected
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Recreation in Sun City West extends far beyond golf. Residents
              can choose from sports, fitness, swimming, arts and crafts,
              bowling, theater, music, clubs, organized events, entertainment,
              trips, tours, and many other activities.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Fitness centers",
              "Swimming pools",
              "Pickleball and tennis",
              "Racquetball and table tennis",
              "Walking tracks and mini-golf",
              "Lawn bowling and bocce",
              "Softball and shuffleboard",
              "Horseshoes and dog parks",
              "Arts and crafts",
              "Bowling and billiards",
              "Theater, movies and music",
              "Trips, tours and community events",
            ].map((activity) => (
              <div
                key={activity}
                className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                <span>{activity}</span>
              </div>
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
            Considering Sun City West?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Whether you're relocating to Arizona, downsizing, moving closer
            to family, or looking for an active-adult lifestyle, I'll help
            you understand the homes and community you're considering.
          </p>

          <Link href="/contact" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Let's Talk About Your Search
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SUN CITY WEST REALTOR FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Questions About Sun City West Real Estate
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-2xl">
                <CardContent className="p-7">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-8 text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />

          <h2 className="mt-8 text-5xl font-bold">
            Ready To Explore Sun City West?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about the
            lifestyle you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Sun City West Homes
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