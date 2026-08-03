import { Badge } from "@/components/ui/badge";

const items = [
  "Arizona Realtor",
  "HomeSmart",
  "Buyer Representation",
  "Seller Representation",
];

export function TrustBar() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6 py-6">
        {items.map((item) => (
          <Badge key={item} variant="secondary" className="px-4 py-2">
            {item}
          </Badge>
        ))}
      </div>
    </section>
  );
}