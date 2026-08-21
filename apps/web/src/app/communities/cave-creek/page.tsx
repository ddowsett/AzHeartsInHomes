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
  title: "Cave Creek AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Cave Creek AZ homes, neighborhoods, desert lifestyle, recreation, dining, and western character with local REALTOR® Darek Dowsett. Get personal guidance buying a Cave Creek home.",
};

const areas = [
  {
    title: "Cave Creek Village",
    text:
      "The heart of Cave Creek offers restaurants, local businesses, western character, events, and a distinctive small-town atmosphere.",
  },
  {
    title: "Tatum Ranch",
    text:
      "A popular master-planned community offering established homes, golf, parks, shopping, and convenient access to Cave Creek and North Phoenix.",
  },
  {
    title: "Desert Foothills",
    text:
      "A collection of homes surrounded by desert scenery, mountain views, and a more spacious rural atmosphere.",
  },
  {
    title: "Black Mountain Area",
    text:
      "Known for dramatic Sonoran Desert scenery, mountain views, trails, and properties that embrace the area's distinctive landscape.",
  },
];

export default function CaveCreekPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Cave Creek" slug="cave-creek" />
      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/communities/AzHomePic.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/35 to-black/60" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              CAVE CREEK, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Discover Cave Creek
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Cave Creek offers a distinctly Arizona lifestyle with Sonoran
              Desert scenery, mountain views, outdoor recreation, western
              character, restaurants, and unique homes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Cave Creek Homes
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900">
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
                title: "Desert Recreation",
                text:
                  "Trails, open desert, mountain scenery, and outdoor recreation are central to the Cave Creek lifestyle.",
              },
              {
                icon: Sun,
                title: "Arizona Character",
                text:
                  "Cave Creek retains a distinctive western and desert character that sets it apart from many other Valley communities.",
              },
              {
                icon: ShoppingBag,
                title: "Dining & Local Businesses",
                text:
                  "Cave Creek offers restaurants, shops, galleries, entertainment, and locally owned businesses throughout the community.",
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
            EXPLORE CAVE CREEK
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A Different Kind Of Arizona Lifestyle
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Cave Creek offers a wide range of properties and settings. Some
            buyers want convenience and community amenities, while others are
            looking for space, privacy, and desert surroundings.
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
                BUYING IN CAVE CREEK
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find A Home That Fits The Landscape
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Cave Creek properties can differ dramatically in size,
                setting, architecture, and surroundings. Understanding the
                property and its location is especially important here.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I'll help you evaluate the home, neighborhood, access, and
                long-term considerations before you make an offer.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Property location and setting",
                "Home style and condition",
                "Lot size and privacy",
                "Desert and mountain surroundings",
                "Shopping and dining access",
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
            Looking For A Cave Creek Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you're looking for and I'll help you narrow down the
            Cave Creek properties and locations that fit your goals.
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
            Ready To Explore Cave Creek?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let's talk about what
            you're looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Cave Creek Homes
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