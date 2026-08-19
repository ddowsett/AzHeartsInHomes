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
  title: "Peoria AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Peoria AZ neighborhoods, homes, recreation, shopping, dining, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Peoria home.",
};

const areas = [
  {
    title: "Arrowhead Area",
    text:
      "A popular Northwest Valley area with established neighborhoods, shopping, dining, golf, parks, and convenient access to major roads.",
  },
  {
    title: "North Peoria",
    text:
      "A growing area featuring newer communities, larger homes, desert surroundings, recreation, and access to Lake Pleasant.",
  },
  {
    title: "Central Peoria",
    text:
      "Established neighborhoods offering a variety of housing options with convenient access to shopping, schools, parks, and everyday amenities.",
  },
  {
    title: "West Peoria",
    text:
      "A mix of established neighborhoods and housing styles with convenient access to Glendale, Surprise, and other West Valley communities.",
  },
];

export default function PeoriaPage() {
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
              PEORIA, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Find Your Place In Peoria
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Peoria combines established neighborhoods, newer communities,
              recreation, shopping, dining, and easy access to the Northwest
              Valley. It offers a wide range of housing options for different
              lifestyles and budgets.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Peoria Homes
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
              {
                icon: Sun,
                title: "Northwest Valley Lifestyle",
                text:
                  "Peoria offers a balance of suburban living, recreation, established neighborhoods, and access to the larger Phoenix metropolitan area.",
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
                Find The Part Of Peoria That Fits Your Lifestyle.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                A home near shopping and entertainment may offer a very
                different lifestyle from a property farther north near open
                desert and recreation.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare locations and properties so you can
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

      {/* Local Guidance */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            LOCAL GUIDANCE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Looking For A Peoria Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Peoria neighborhoods and properties that fit your goals.
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
            Ready To Explore Peoria?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
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
    </main>
  );
}