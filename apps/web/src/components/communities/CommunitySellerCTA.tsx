"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BadgeDollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";

const communityNames: Record<string, string> = {
  "/communities/anthem": "Anthem",
  "/communities/cave-creek": "Cave Creek",
  "/communities/chandler": "Chandler",
  "/communities/gilbert": "Gilbert",
  "/communities/glendale": "Glendale",
  "/communities/goodyear": "Goodyear",
  "/communities/mesa": "Mesa",
  "/communities/peoria": "Peoria",
  "/communities/phoenix": "Phoenix",
  "/communities/queen-creek": "Queen Creek",
  "/communities/scottsdale": "Scottsdale",
  "/communities/sun-city": "Sun City",
  "/communities/sun-city-west": "Sun City West",
  "/communities/surprise": "Surprise",
  "/communities/tempe": "Tempe",
};

export function CommunitySellerCTA() {
  const pathname = usePathname();
  const community = communityNames[pathname] ?? "Greater Phoenix";

  return (
    <section className="bg-stone-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15">
                  <BadgeDollarSign className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                  THINKING ABOUT SELLING?
                </p>
              </div>

              <h2 className="mt-7 text-4xl font-bold md:text-5xl">
                Selling Your {community} Home?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
                Find out what your home could be worth and see how a 1% listing
                commission could affect your bottom line. You&apos;ll work directly
                with Darek from the first conversation through closing.
              </p>

              <p className="mt-5 text-sm leading-6 text-stone-400">
                The 1% applies to the listing side of the transaction. Any
                buyer-agent compensation, if offered and agreed to by the
                seller, is separate.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/home-value">
                <Button
                  size="lg"
                  className="w-full gap-2 bg-orange-500 px-7 text-white hover:bg-orange-600"
                >
                  Get My Free Home Value
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/sell-your-home-for-1-percent">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/30 bg-transparent px-7 text-white hover:bg-white hover:text-stone-900"
                >
                  See The 1% Listing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
