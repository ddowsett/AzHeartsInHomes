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
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

export const metadata: Metadata = {
  title: "Mesa AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Mesa AZ neighborhoods, homes, golf, recreation, shopping, dining, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Mesa home.",
};

const areas = [
  {
    title: "East Mesa",
    text:
      "A broad area offering established neighborhoods, newer communities, desert surroundings, recreation, shopping, and convenient access to the Superstition Mountains.",
  },
  {
    title: "Downtown Mesa",
    text:
      "A revitalized area featuring local restaurants, arts, entertainment, community events, and a growing mix of residential opportunities.",
  },
  {
    title: "Las Sendas",
    text:
      "A popular master-planned community offering desert and mountain surroundings, golf, trails, parks, and a variety of homes.",
  },
  {
    title: "North Mesa",
    text:
      "A diverse collection of established neighborhoods with access to recreation, shopping, dining, and major Valley transportation routes.",
  },
];

export default function MesaPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Mesa" slug="mesa" />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              MESA, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Mesa
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Mesa offers an impressive range of neighborhoods, housing
              options, recreation, shopping, dining, and outdoor experiences
              throughout the East Valley.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Mesa Homes
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
                title: "Outdoor Recreation",
                text:
                  "Mesa provides access to parks, trails, golf, lakes, and desert recreation, including destinations near the Superstition Mountains.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Dining",
                text:
                  "Residents have access to extensive shopping, restaurants, entertainment, and everyday services throughout the city.",
              },
              {
                icon: Sun,
                title: "East Valley Lifestyle",
                text:
                  "Mesa offers everything from established neighborhoods to newer communities, making it possible to find a lifestyle that fits a wide range of buyers.",
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
            EXPLORE MESA
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Which Part Of Mesa Fits You?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Mesa is a large and diverse city. Location can significantly
            influence your lifestyle, commute, recreation options, and the type
            of home you'll find.
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
                BUYING IN MESA
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Start With The Right Location.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Mesa offers such a wide variety of neighborhoods that
                identifying the right area can make your home search much more
                efficient.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare neighborhoods and properties based on
                what matters most to you.
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
            Looking For A Mesa Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Mesa neighborhoods and properties that fit your goals.
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
            Ready To Explore Mesa?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Mesa Homes
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