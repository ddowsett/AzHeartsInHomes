import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Home,
  MapPin,
  ShoppingBag,
  Sun,
  Trees,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Surprise AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Surprise AZ neighborhoods, homes, golf, recreation, shopping, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Surprise home.",
};

const areas = [
  {
    title: "Asante",
    text:
      "A growing master-planned area offering newer homes, community amenities, parks, and convenient access to the Northwest Valley.",
  },
  {
    title: "Prasada",
    text:
      "A rapidly developing area in Surprise with newer residential communities, shopping, dining, entertainment, and expanding amenities.",
  },
  {
    title: "Surprise Farms",
    text:
      "An established master-planned community featuring a variety of homes, parks, walking paths, and neighborhood amenities.",
  },
  {
    title: "Sun City Grand",
    text:
      "A prominent active-adult community in Surprise offering golf, recreation, clubs, social activities, and a variety of housing options.",
  },
];

export default function SurprisePage() {
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
              SURPRISE, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Find Your Place In Surprise
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Surprise has grown into one of the Northwest Valley's most
              popular communities, offering newer neighborhoods, recreation,
              golf, shopping, dining, and a wide variety of homes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Surprise Homes
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
                icon: Trees,
                title: "Recreation",
                text:
                  "Parks, trails, golf, community facilities, and access to nearby outdoor destinations provide plenty of opportunities for recreation.",
              },
              {
                icon: ShoppingBag,
                title: "Growing Amenities",
                text:
                  "Shopping, dining, entertainment, and services continue to expand throughout the community, particularly around the Prasada area.",
              },
              {
                icon: Sun,
                title: "Northwest Valley Lifestyle",
                text:
                  "Surprise offers a suburban lifestyle with newer communities, open desert surroundings, and convenient access to neighboring West Valley communities.",
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
            EXPLORE SURPRISE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Different Communities. Different Lifestyles.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Surprise encompasses a wide range of neighborhoods, from newer
            master-planned communities to established active-adult
            neighborhoods.
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
                BUYING IN SURPRISE
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find The Neighborhood That Fits.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Surprise offers a broad range of housing options. Your ideal
                location may depend on whether you prioritize newer
                construction, recreation, shopping, golf, community amenities,
                or proximity to other parts of the Valley.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare the areas and properties so you can make
                an informed decision before you make an offer.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Newer versus established homes",
                "Community amenities",
                "Golf and recreation",
                "Shopping and dining",
                "Commute and transportation",
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
            Looking For A Surprise Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Surprise neighborhoods and properties that fit your goals.
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
            Ready To Explore Surprise?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Surprise Homes
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