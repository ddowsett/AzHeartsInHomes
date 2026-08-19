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
  title: "Goodyear AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Goodyear AZ neighborhoods, homes, golf, recreation, shopping, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Goodyear home.",
};

const areas = [
  {
    title: "Palm Valley",
    text:
      "A well-established master-planned area featuring golf, parks, shopping, dining, and a variety of residential neighborhoods.",
  },
  {
    title: "Estrella",
    text:
      "A large master-planned community surrounded by desert and mountain scenery, with extensive recreation, trails, lakes, and newer homes.",
  },
  {
    title: "Goodyear Village",
    text:
      "Established neighborhoods offering a variety of housing options with convenient access to shopping, dining, schools, and major roads.",
  },
  {
    title: "Canyon Trails",
    text:
      "A popular residential area offering newer and established homes, parks, trails, and convenient access to Goodyear amenities.",
  },
];

export default function GoodyearPage() {
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
              GOODYEAR, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Goodyear.
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Goodyear combines newer master-planned communities, established
              neighborhoods, golf, recreation, shopping, dining, and beautiful
              desert surroundings in the Southwest Valley.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Goodyear Homes
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
                  "Trails, parks, golf, lakes, and desert landscapes provide abundant opportunities to enjoy the Arizona outdoors.",
              },
              {
                icon: ShoppingBag,
                title: "Shopping & Dining",
                text:
                  "Goodyear offers a growing selection of shopping, restaurants, entertainment, and everyday conveniences.",
              },
              {
                icon: Sun,
                title: "Southwest Valley Lifestyle",
                text:
                  "The community offers a suburban lifestyle with newer neighborhoods, open space, recreation, and access to major Valley destinations.",
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
            EXPLORE GOODYEAR
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Find The Community That Fits.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Goodyear includes several distinct neighborhoods and master-planned
            communities, each offering a different combination of housing,
            amenities, recreation, and surroundings.
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
                BUYING IN GOODYEAR
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Compare More Than Just The House.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Goodyear buyers can choose from established neighborhoods,
                newer construction, master-planned communities, golf
                properties, and homes surrounded by desert and open space.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare the communities and properties so you can
                find the combination of location, lifestyle, and home that
                works for you.
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
            Looking For A Goodyear Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Goodyear communities and properties that fit your goals.
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
            Ready To Explore Goodyear?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Goodyear Homes
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