import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  CircleUserRound,
  Home,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sun City AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Sun City AZ homes, golf, recreation, clubs, amenities, and active-adult living with local REALTOR® Darek Dowsett. Get personal guidance buying or selling in Sun City.",
};

const areas = [
  {
    title: "Established Neighborhoods",
    text:
      "Sun City is known for its mature neighborhoods, established landscaping, and wide variety of existing homes with different layouts and price points.",
  },
  {
    title: "Golf Communities",
    text:
      "Golf is an important part of the Sun City lifestyle, with multiple courses and recreation opportunities throughout the community.",
  },
  {
    title: "Lakeview & Recreation Areas",
    text:
      "Residents have access to recreation centers, clubs, activities, parks, lakes, and other amenities that make Sun City distinctly community-oriented.",
  },
  {
    title: "Central Sun City",
    text:
      "Many homes offer convenient access to shopping, medical services, recreation centers, restaurants, golf, and other everyday amenities.",
  },
];

export default function SunCityPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SUN CITY, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Sun City
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Sun City is one of Arizona's best-known active-adult
              communities, offering an established lifestyle centered around
              recreation, golf, clubs, social activities, and community.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Sun City Homes
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
                  "Golf, recreation centers, pools, fitness facilities, clubs, and activities are central to the Sun City lifestyle.",
              },
              {
                icon: Users,
                title: "Clubs & Community",
                text:
                  "Hundreds of clubs and activities provide opportunities to meet people, pursue hobbies, and become involved in the community.",
              },
              {
                icon: CircleUserRound,
                title: "Active-Adult Lifestyle",
                text:
                  "Sun City was designed around an active-adult lifestyle, with amenities and social opportunities that encourage residents to stay active and connected.",
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
            EXPLORE SUN CITY
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            More Than Just A Home.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Choosing a Sun City home means choosing a lifestyle. Location,
            proximity to recreation, golf, shopping, and community amenities
            can all influence the experience of living here.
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
                BUYING IN SUN CITY
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find The Right Home For Your Lifestyle.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Sun City offers a wide range of established homes. Two
                properties that look similar online can provide very different
                lifestyles depending on their location, condition, amenities,
                and proximity to the activities you enjoy.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you evaluate both the home and the surrounding
                community so you can make a confident decision.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Home condition and improvements",
                "Location within Sun City",
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

      {/* Selling */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            SELLING IN SUN CITY
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selling Your Sun City Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Sun City buyers often have very specific lifestyle priorities.
            Effective marketing needs to communicate not only the features of
            the home, but also what makes the location and community valuable.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'll manage the transaction from our initial meeting through
            closing, with professional marketing, negotiation, contract
            management, and communication throughout the process.
          </p>

          <Link href="/sellers" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Learn About Selling
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
              Considering Sun City?
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Whether you're relocating to Arizona, downsizing, moving closer
              to family, or looking for an active-adult lifestyle, I'll help
              you understand the homes and communities you're considering.
            </p>

            <Link href="/contact" className="mt-10 inline-block">
              <Button size="lg" className="px-8">
                Let's Talk About Your Search
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />

          <h2 className="mt-8 text-5xl font-bold">
            Ready To Explore Sun City?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about the
            lifestyle you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Sun City Homes
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