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
  title: "Queen Creek AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Queen Creek AZ neighborhoods, homes, new construction, recreation, shopping, and lifestyle with local REALTOR® Darek Dowsett. Get personal guidance buying a Queen Creek home.",
};

const areas = [
  {
    title: "East Queen Creek",
    text:
      "A growing area with newer communities, larger homes, desert surroundings, and convenient access to outdoor recreation.",
  },
  {
    title: "Downtown Queen Creek",
    text:
      "A developing community hub featuring restaurants, shopping, local events, and a growing collection of amenities.",
  },
  {
    title: "Johnson Ranch Area",
    text:
      "A popular master-planned area offering established homes, recreation, golf, parks, and convenient access to nearby communities.",
  },
  {
    title: "Newer Master-Planned Communities",
    text:
      "Queen Creek continues to offer new residential developments with modern floor plans, community amenities, parks, and recreation.",
  },
];

export default function QueenCreekPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Queen Creek" slug="queen-creek" />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              QUEEN CREEK, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Queen Creek
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Queen Creek offers newer communities, larger homes, outdoor
              recreation, shopping, dining, and a growing Southeast Valley
              lifestyle surrounded by beautiful desert scenery.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Queen Creek Homes
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
                icon: Home,
                title: "Newer Homes",
                text:
                  "Queen Creek offers a strong selection of newer construction and modern master-planned communities.",
              },
              {
                icon: Trees,
                title: "Outdoor Lifestyle",
                text:
                  "Desert surroundings, parks, trails, golf, and nearby mountain recreation provide plenty of opportunities to get outdoors.",
              },
              {
                icon: ShoppingBag,
                title: "Growing Amenities",
                text:
                  "Shopping, dining, entertainment, and community amenities continue to expand as Queen Creek grows.",
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
            EXPLORE QUEEN CREEK
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Find The Community That Fits.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Queen Creek includes established neighborhoods and rapidly growing
            master-planned communities, giving buyers many different options.
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
                BUYING IN QUEEN CREEK
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                New Construction Isn't The Only Choice.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Queen Creek buyers can choose between established homes and
                newer construction. Each comes with different advantages,
                considerations, and costs.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you compare the communities, homes, and options
                before you make a decision.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "New construction versus resale",
                "Home features and upgrades",
                "Community amenities",
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
            Looking For A Queen Creek Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Queen Creek communities and properties that fit your goals.
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
            Ready To Explore Queen Creek?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Queen Creek Homes
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