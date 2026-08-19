import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Compass,
  Heart,
  MapPin,
  Sun,
} from "lucide-react";

import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Phoenix AZ Communities & Neighborhoods | AZ Hearts In Homes",
  description:
    "Explore Phoenix-area communities including Sun City, Sun City West, Scottsdale, Peoria, Surprise, Glendale, Anthem, Cave Creek, and more with local REALTOR® Darek Dowsett.",
};

const communities = [
  {
    name: "Phoenix",
    slug: "phoenix",
    description:
      "Arizona's capital offers a wide range of neighborhoods, housing options, employment centers, dining, entertainment, and outdoor recreation.",
  },
  {
    name: "Scottsdale",
    slug: "scottsdale",
    description:
      "Known for resort living, golf, dining, shopping, and a wide variety of established and newer neighborhoods.",
  },
  {
    name: "Glendale",
    slug: "glendale",
    description:
      "A diverse West Valley community offering established neighborhoods, entertainment, shopping, and convenient access to the greater Phoenix area.",
  },
  {
    name: "Peoria",
    slug: "peoria",
    description:
      "A popular Northwest Valley community with parks, recreation, shopping, newer developments, and a variety of housing options.",
  },
  {
    name: "Surprise",
    slug: "surprise",
    description:
      "A growing West Valley community known for newer neighborhoods, recreation, golf, and a strong selection of single-family homes.",
  },
  {
    name: "Sun City",
    slug: "sun-city",
    description:
      "A nationally recognized active-adult community offering golf, recreation, social activities, and a wide variety of established homes.",
  },
  {
    name: "Sun City West",
    slug: "sun-city-west",
    description:
      "An active-adult community with golf, recreation, clubs, and amenities designed around an active and connected lifestyle.",
  },
  {
    name: "Goodyear",
    slug: "goodyear",
    description:
      "A growing Southwest Valley community featuring newer neighborhoods, golf, recreation, and convenient access to major employment areas.",
  },
  {
    name: "Chandler",
    slug: "chandler",
    description:
      "A major East Valley community with established neighborhoods, employment opportunities, shopping, dining, and excellent recreational amenities.",
  },
  {
    name: "Gilbert",
    slug: "gilbert",
    description:
      "A highly sought-after East Valley community known for its neighborhoods, parks, dining, shopping, and family-oriented amenities.",
  },
  {
    name: "Mesa",
    slug: "mesa",
    description:
      "A large and diverse East Valley community offering everything from established neighborhoods to newer developments.",
  },
  {
    name: "Tempe",
    slug: "tempe",
    description:
      "A vibrant community centered around Arizona State University, with urban living, restaurants, entertainment, and convenient transportation.",
  },
  {
    name: "Queen Creek",
    slug: "queen-creek",
    description:
      "A rapidly growing Southeast Valley community offering newer homes, larger properties, open space, and a more suburban lifestyle.",
  },
  {
    name: "Anthem",
    slug: "anthem",
    description:
      "A master-planned North Phoenix community offering recreation, parks, community amenities, and a variety of housing options.",
  },
  {
    name: "Cave Creek",
    slug: "cave-creek",
    description:
      "A distinctive North Valley community known for its desert setting, larger properties, outdoor recreation, and western character.",
  },
];

export default function CommunitiesPage() {
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
              FIND YOUR PLACE
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              Explore Arizona Communities.
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              The right home starts with the right location. Explore
              communities throughout the Greater Phoenix area and discover the
              places that fit your lifestyle, goals, and budget.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Whether you're looking for an active-adult community, a growing
              suburban neighborhood, an urban environment, or a desert
              retreat, I'll help you understand what each area has to offer.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Arizona Homes
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Location Matters */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              MORE THAN A ZIP CODE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Find A Community That Fits Your Life.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              A home is only part of the decision. Where you live affects your
              lifestyle, commute, recreation, neighborhood environment, and
              long-term goals.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Location",
                text:
                  "Understand neighborhoods, commute times, surrounding amenities, and what makes each area unique.",
              },
              {
                icon: Compass,
                title: "Lifestyle",
                text:
                  "From golf and recreation to dining, shopping, outdoor activities, and community events.",
              },
              {
                icon: Building2,
                title: "Housing",
                text:
                  "Explore different home styles, neighborhoods, lot sizes, communities, and price ranges.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            GREATER PHOENIX
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Explore Local Communities.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Every community has its own personality. Here are some of the
            areas I can help you explore throughout the Phoenix metropolitan
            area.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
        <Link
          key={community.name}
          href={
            community.slug
              ? `/communities/${community.slug}`
              : "/contact"
          }
          className="block"
        >
          <Card className="group h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  <MapPin className="h-5 w-5 text-orange-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold group-hover:text-orange-600">
                    {community.name}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {community.description}
                  </p>

                  {community.slug && (
                    <p className="mt-5 text-sm font-semibold text-orange-600">
                      Explore {community.name} →
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
))}
        </div>
      </section>

      {/* Active Adult */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-sm">
                <Sun className="h-12 w-12 text-orange-500" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                ACTIVE-ADULT COMMUNITIES
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Looking For An Active-Age Lifestyle?
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sun City and Sun City West are two of the most recognizable
                active-adult communities in the Valley. They offer unique
                lifestyles, amenities, clubs, golf, recreation, and housing
                options that deserve to be explored before making a decision.
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                If you're considering an active-adult community, I can help
                you compare your options and find the area that best fits
                what you're looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              LOCAL GUIDANCE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Not Sure Where
              <br />
              To Start?
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              You don't have to know which community is right for you before
              we talk. Tell me what you're looking for and I'll help narrow
              down the areas that make sense based on your priorities.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We can look at location, lifestyle, housing, commute, recreation,
              and other factors that matter to you before you start focusing
              on individual homes.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-block"
            >
              <Button size="lg" className="px-8">
                Let's Talk About Your Search
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {[
              "Understand the differences between communities",
              "Identify areas that fit your lifestyle",
              "Compare housing options and neighborhoods",
              "Search available homes through HomeSmart IDX",
              "Evaluate properties and locations together",
              "Navigate the purchase from offer through closing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" />

                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/hearthome-new.png"
              alt="AZ Hearts In Homes"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
          </div>

          <h2 className="mt-8 text-5xl font-bold">
            Your Next Home Starts With The Right Community.
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Let's talk about what you're looking for and find the Arizona
            communities that fit your lifestyle and goals.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Start Your Home Search
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