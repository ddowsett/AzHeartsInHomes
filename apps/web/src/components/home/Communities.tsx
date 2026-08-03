import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

const communities = [
  {
    name: "Scottsdale",
    description: "Luxury homes, golf, shopping, and desert living.",
    image: "/images/scottsdale.jpg",
  },
  {
    name: "Peoria",
    description: "Family neighborhoods with excellent parks and schools.",
    image: "/images/peoria.jpg",
  },
  {
    name: "Glendale",
    description: "Affordable homes with easy access to Phoenix.",
    image: "/images/glendale.jpg",
  },
];

export function Communities() {
  return (
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Communities"
          title="Explore Arizona Communities"
          description="Every neighborhood has its own personality. Find the one that fits your lifestyle and real estate goals."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {communities.map((community) => (
            <Card
              key={community.name}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <CardHeader>
                <CardTitle>{community.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {community.description}
                </p>
              </CardContent>

              <CardFooter>
                <Link href="/communities">
                  <Button variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}