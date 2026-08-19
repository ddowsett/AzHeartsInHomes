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

export const metadata: Metadata = {
  title: "Scottsdale AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Scottsdale neighborhoods, homes, lifestyle, golf, dining, and recreation with local REALTOR® Darek Dowsett. Get personal guidance buying a Scottsdale home.",
};

const areas = [
  {
    title: "Old Town Scottsdale",
    text:
      "A vibrant area known for restaurants, galleries, nightlife, shopping, events, and a walkable urban atmosphere.",
  },
  {
    title: "Central Scottsdale",
    text:
      "Established neighborhoods with convenient access to shopping, dining, golf, recreation, and major Valley destinations.",
  },
  {
    title: "North Scottsdale",
    text:
      "Known for desert surroundings, golf communities, luxury homes, newer developments, and access to outdoor recreation.",
  },
  {
    title: "McCormick Ranch",
    text:
      "An established Scottsdale community with mature landscaping, greenbelts, lakes, recreation, and a variety of housing options.",
  },
];

export default function ScottsdalePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Scottsdale" slug="scottsdale" />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SCOTTSDALE, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Scottsdale
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Scottsdale offers an unusually diverse combination of desert
              scenery, golf, dining, shopping, recreation, and neighborhoods.
              Finding the right part of Scottsdale is an important part of
              finding the right home.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Scottsdale Homes
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
                title: "Golf & Recreation",
                text:
                  "Scottsdale is home to numerous golf courses, outdoor recreation opportunities, trails, and desert landscapes.",
              },
              {
                icon: Coffee,
                title: "Dining & Entertainment",
                text:
                  "From Old Town to North Scottsdale, you'll find an extensive selection of restaurants, coffee shops, nightlife, arts, and entertainment.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Lifestyle",
                text:
                  "Scottsdale offers everything from local boutiques to major shopping destinations and luxury retail.",
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
            EXPLORE SCOTTSDALE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Which Part Of Scottsdale Fits You?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Scottsdale isn't one-size-fits-all. Different areas offer very
            different environments, housing options, and lifestyles.
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
                BUYING IN SCOTTSDALE
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                The Right Home Starts With The Right Area.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Whether you're looking for a lock-and-leave property near
                restaurants and entertainment, an established neighborhood, or
                a larger home surrounded by desert and golf, Scottsdale offers
                many different possibilities.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare the areas and properties so you can make
                a decision based on more than just the house itself.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style and property features",
                "Golf and recreation access",
                "Dining and shopping",
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
            Looking For A Scottsdale Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Scottsdale neighborhoods and properties that make sense for your
            goals.
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
            Ready To Explore Scottsdale?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
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