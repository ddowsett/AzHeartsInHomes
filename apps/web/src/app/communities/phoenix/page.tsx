import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  Home,
  MapPin,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

export const metadata: Metadata = {
  title: "Phoenix AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Phoenix neighborhoods, lifestyles, and housing options with local REALTOR® Darek Dowsett. Get personal guidance finding the right Phoenix home and community.",
};

const areas = [
  {
    title: "Central Phoenix",
    text:
      "A mix of established neighborhoods, historic homes, restaurants, cultural attractions, and convenient access to downtown and surrounding areas.",
  },
  {
    title: "North Phoenix",
    text:
      "A diverse area ranging from established neighborhoods to newer developments, with access to shopping, recreation, desert trails, and major transportation routes.",
  },
  {
    title: "Northeast Phoenix",
    text:
      "Desert surroundings, mountain views, established neighborhoods, and convenient access to Scottsdale, Paradise Valley, and the greater Valley.",
  },
  {
    title: "West Phoenix",
    text:
      "A broad collection of established neighborhoods with a variety of housing options and convenient access to West Valley communities.",
  },
];

export default function PhoenixPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Phoenix" slug="phoenix" />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              PHOENIX, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Find Your Place In Phoenix
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Phoenix offers an incredible variety of neighborhoods, housing
              options, lifestyles, and price points. The challenge isn't
              finding a home—it's finding the right home in the right part of
              the Valley.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Phoenix Homes
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

      {/* Overview */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Housing Variety",
                text:
                  "Phoenix has everything from established neighborhoods and mid-century homes to newer construction and luxury properties.",
              },
              {
                icon: Sun,
                title: "Arizona Lifestyle",
                text:
                  "Year-round sunshine provides opportunities for golf, hiking, outdoor recreation, sporting events, dining, and entertainment.",
              },
              {
                icon: Compass,
                title: "Location Options",
                text:
                  "Different parts of Phoenix offer very different lifestyles, making location an important part of your home search.",
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
            EXPLORE PHOENIX
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Different Areas. Different Lifestyles.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Phoenix is a large and diverse city. Understanding the differences
            between areas can be just as important as finding the right house.
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

      {/* What to Consider */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                BUYING IN PHOENIX
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                The Neighborhood Matters.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                When you're buying a home, the property itself is only part of
                the decision. I can help you evaluate the surrounding
                neighborhood and how it fits your priorities.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Location and commute",
                "Neighborhood character",
                "Home style and condition",
                "Nearby shopping and dining",
                "Recreation and outdoor access",
                "Long-term resale considerations",
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
            You Don't Have To Know Phoenix Before You Move Here.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            If you're relocating to Phoenix or simply moving from one part of
            the Valley to another, I'll help you understand the communities
            and neighborhoods that make sense for your goals.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We'll start with what matters to you and narrow the search from
            there.
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
          <h2 className="text-5xl font-bold">
            Ready To Explore Phoenix?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Phoenix Homes
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