"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const communities = [
  {
    title: "East Valley",
    image: "/images/scottsdale.jpg",
    cities: "Tempe • Mesa • Chandler • Gilbert • Queen Creek",
    description:
      "From vibrant downtown Tempe to the family-friendly communities of Chandler and Gilbert, the East Valley offers outstanding schools, thriving business centers, and diverse neighborhoods for every lifestyle.",
  },
  {
    title: "Phoenix",
    image: "/images/phoenix.jpg",
    cities: "North Phoenix • Arcadia • Biltmore • Ahwatukee • Downtown",
    description:
      "Whether you're looking for historic charm, luxury living, or an urban lifestyle, Phoenix offers exceptional opportunities throughout Arizona's largest city.",
  },
  {
    title: "West Valley",
    image: "/images/AzGolfPhoto.jpg",
    cities: "Peoria • Glendale • Surprise • Sun City West • Goodyear",
    description:
      "Home to beautiful golf communities, active-adult living, and some of the Valley's fastest-growing neighborhoods, the West Valley has something for everyone.",
  },
];

export function Communities() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Serving Buyers & Sellers Throughout the Greater Phoenix Area
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Explore the Valley
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Every part of the Valley has its own personality. Whether you're
            looking for luxury, family-friendly neighborhoods, golf course
            living, or an active adult community, I'll help you find the place
            that feels like home.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {communities.map((community) => (
            <div
              key={community.title}
              className="overflow-hidden rounded-[2rem] bg-card shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={community.image}
                alt={community.title}
                width={800}
                height={600}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground">
                  {community.title}
                </h3>

                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent">
                  {community.cities}
                </p>

                <p className="mt-6 leading-8 text-muted-foreground">
                  {community.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/communities">
            <Button size="lg" className="px-10">
              Explore All Communities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}