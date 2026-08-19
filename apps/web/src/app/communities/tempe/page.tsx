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
  title: "Tempe AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Tempe AZ neighborhoods, homes, dining, shopping, recreation, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Tempe home.",
};

const areas = [
  {
    title: "Downtown Tempe",
    text:
      "A lively urban area centered around Mill Avenue, Arizona State University, restaurants, entertainment, events, and a variety of housing options.",
  },
  {
    title: "South Tempe",
    text:
      "Established neighborhoods offering a more suburban atmosphere with parks, shopping, schools, and convenient access to Chandler and other Southeast Valley communities.",
  },
  {
    title: "Tempe Town Lake",
    text:
      "A popular destination for recreation, dining, events, and outdoor activities, with residential options nearby.",
  },
  {
    title: "Southwest Tempe",
    text:
      "A mix of established neighborhoods with convenient access to major roads, shopping, employment centers, and surrounding communities.",
  },
];

export default function TempePage() {
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
              TEMPE, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Tempe
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Tempe offers a unique combination of urban energy, established
              neighborhoods, outdoor recreation, dining, entertainment, and
              convenient access to communities throughout the Valley.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Tempe Homes
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
                  "Tempe Town Lake, parks, trails, and outdoor spaces provide plenty of opportunities for recreation and activities.",
              },
              {
                icon: ShoppingBag,
                title: "Dining & Entertainment",
                text:
                  "Tempe offers restaurants, local businesses, entertainment, arts, events, and nightlife throughout the city.",
              },
              {
                icon: Sun,
                title: "Central Valley Location",
                text:
                  "Tempe's central location provides convenient access to Phoenix, Scottsdale, Mesa, Chandler, and major employment centers.",
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
            EXPLORE TEMPE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Find The Right Part Of Tempe.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tempe's neighborhoods can offer very different lifestyles. The
            right location depends on what you value most in your daily life.
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
                BUYING IN TEMPE
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Location Can Change Everything.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Tempe buyers often have very different priorities. Proximity
                to work, recreation, restaurants, ASU, major roads, or other
                Valley communities can all influence the right property.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you evaluate the neighborhood and the home together.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Home style and condition",
                "Commute and transportation",
                "Dining and entertainment",
                "Parks and recreation",
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
            Looking For A Tempe Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Tempe neighborhoods and properties that fit your goals.
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
            Ready To Explore Tempe?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Tempe Homes
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