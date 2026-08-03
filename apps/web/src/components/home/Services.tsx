import { Home, DollarSign, MapPinned, KeyRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    title: "Buy a Home",
    description:
      "Expert guidance from your first showing through closing.",
    icon: Home,
  },
  {
    title: "Sell Your Home",
    description:
      "Professional marketing designed to maximize your home's value.",
    icon: DollarSign,
  },
  {
    title: "Home Valuation",
    description:
      "Get an accurate estimate backed by local market expertise.",
    icon: KeyRound,
  },
  {
    title: "Arizona Communities",
    description:
      "Discover neighborhoods that fit your lifestyle and goals.",
    icon: MapPinned,
  },
];

export function Services() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          description="Whether you're buying, selling, or just exploring your options, I'm here to help you make informed real estate decisions."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-orange-100 p-4">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}