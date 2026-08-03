import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";

const listings = [
  {
    address: "12345 N Desert Ridge Dr",
    city: "Scottsdale, AZ",
    price: "$875,000",
    beds: 4,
    baths: 3,
    sqft: "2,650",
    image: "/images/scottsdale.jpg",
  },
  {
    address: "9876 W Lake Pleasant Pkwy",
    city: "Peoria, AZ",
    price: "$640,000",
    beds: 3,
    baths: 2,
    sqft: "2,120",
    image: "/images/peoria.jpg",
  },
  {
    address: "5432 W Arrowhead Ranch Rd",
    city: "Glendale, AZ",
    price: "$525,000",
    beds: 4,
    baths: 2,
    sqft: "2,010",
    image: "/images/glendale.jpg",
  },
];

export function FeaturedListings() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Homes"
          title="Beautiful Arizona Properties"
          description="Sample listings for now. These will later come directly from your MLS integration."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {listings.map((listing) => (
            <Card
              key={listing.address}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={listing.image}
                  alt={listing.address}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="space-y-3 p-6">
                <Badge>{listing.price}</Badge>

                <h3 className="text-xl font-semibold">
                  {listing.address}
                </h3>

                <p className="text-muted-foreground">
                  {listing.city}
                </p>

                <div className="flex justify-between text-sm">
                  <span>{listing.beds} Beds</span>
                  <span>{listing.baths} Baths</span>
                  <span>{listing.sqft} Sq Ft</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}