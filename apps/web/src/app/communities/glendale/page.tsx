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

export const metadata: Metadata = {
  title: "Glendale AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Glendale AZ neighborhoods, homes, shopping, recreation, sports, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Glendale home.",
};

const areas = [
  {
    title: "Arrowhead Ranch",
    text:
      "A popular Northwest Valley area with established neighborhoods, golf, shopping, dining, parks, and convenient access to major roads.",
  },
  {
    title: "Westgate & Sports District",
    text:
      "A vibrant entertainment area surrounded by restaurants, shopping, sports venues, and a variety of nearby housing options.",
  },
  {
    title: "North Glendale",
    text:
      "A mix of established and newer neighborhoods with access to shopping, recreation, parks, and the broader Northwest Valley.",
  },
  {
    title: "Historic Downtown Glendale",
    text:
      "Known for its historic character, locally owned businesses, antique shopping, restaurants, and a distinct small-town atmosphere within the Valley.",
  },
];

export default function GlendalePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Glendale" slug="glendale" />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              GLENDALE, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Glendale
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Glendale offers a diverse mix of established neighborhoods,
              newer communities, shopping, recreation, entertainment, and
              convenient access to the greater Phoenix area.
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

      {/* Lifestyle */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "Sports & Entertainment",
                text:
                  "Glendale is home to major sports and entertainment destinations, giving residents convenient access to games, events, restaurants, and nightlife.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Dining",
                text:
                  "From major shopping destinations to local restaurants and historic downtown businesses, Glendale offers a wide variety of options.",
              },
              {
                icon: Trees,
                title: "Parks & Recreation",
                text:
                  "Parks, trails, golf, community recreation, and nearby outdoor destinations provide plenty of opportunities to enjoy the Arizona climate.",
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

      {/* Areas */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            EXPLORE GLENDALE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Which Part Of Glendale Fits You?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Glendale encompasses a variety of neighborhoods and lifestyles.
            Understanding the differences can help you narrow down the right
            location before you focus on individual homes.
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

      {/* Buying */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                BUYING IN GLENDALE
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Location Makes A Difference.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Whether you're looking for an established neighborhood, a
                newer home, proximity to entertainment, or convenient access
                to other parts of the Valley, Glendale offers a variety of
                possibilities.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare neighborhoods and properties so you can
                make a decision based on the complete picture—not just the
                house.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style and condition",
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

      {/* Local Guidance */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            LOCAL GUIDANCE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Looking For A Glendale Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Glendale neighborhoods and properties that fit your goals.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From the initial search through negotiations, inspections,
            financing, and closing, I'll remain personally involved throughout
            the process.
          </p>

          <Link href="/contact" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Let's Talk About Your Search
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />

          <h2 className="mt-8 text-5xl font-bold">
            Ready To Explore Glendale?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
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