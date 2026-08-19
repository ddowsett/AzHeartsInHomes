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
  title: "Gilbert AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Gilbert AZ neighborhoods, homes, dining, shopping, parks, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Gilbert home.",
};

const areas = [
  {
    title: "Agritopia",
    text:
      "A distinctive community centered around walkability, local dining, green space, and a strong neighborhood atmosphere.",
  },
  {
    title: "Downtown Gilbert",
    text:
      "A popular destination featuring restaurants, local businesses, entertainment, events, and an active community atmosphere.",
  },
  {
    title: "Power Ranch",
    text:
      "A large master-planned community offering parks, pools, lakes, trails, community amenities, and a broad range of homes.",
  },
  {
    title: "South Gilbert",
    text:
      "A growing portion of Gilbert featuring newer neighborhoods, shopping, recreation, and convenient access to the Southeast Valley.",
  },
];

export default function GilbertPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              GILBERT, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Gilbert
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Gilbert combines a strong community atmosphere with newer
              neighborhoods, parks, dining, shopping, recreation, and
              convenient access throughout the Southeast Valley.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Gilbert Homes
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
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Trees,
                title: "Parks & Recreation",
                text:
                  "Gilbert offers extensive parks, trails, recreation programs, and outdoor spaces for residents to enjoy.",
              },
              {
                icon: ShoppingBag,
                title: "Dining & Shopping",
                text:
                  "From Downtown Gilbert to neighborhood shopping centers, residents have access to a wide variety of restaurants and businesses.",
              },
              {
                icon: Sun,
                title: "Community Lifestyle",
                text:
                  "Gilbert combines suburban living with an active community atmosphere and convenient access to the greater Phoenix area.",
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
            EXPLORE GILBERT
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Find The Right Gilbert Neighborhood.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Gilbert offers a variety of neighborhood experiences, from
            walkable destinations and established communities to newer
            developments.
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
                BUYING IN GILBERT
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                The Neighborhood Matters.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                When buying in Gilbert, it's important to consider how the
                neighborhood fits your lifestyle, commute, recreation
                preferences, and long-term goals.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare the areas and properties before you
                decide where to make an offer.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style and condition",
                "Parks and recreation",
                "Shopping and dining",
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
            LOCAL GUIDANCE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Looking For A Gilbert Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Gilbert neighborhoods and properties that fit your goals.
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

          <h2 className="mt-8 text-5xl font-bold">
            Ready To Explore Gilbert?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Gilbert Homes
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