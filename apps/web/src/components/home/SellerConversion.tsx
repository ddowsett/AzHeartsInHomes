import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Calculator, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SellerConversion() {
  return (
    <section className="bg-stone-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-stone-900 via-stone-900 to-orange-950 shadow-2xl">
          <div className="grid gap-12 px-8 py-12 md:px-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-16">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15">
                  <BadgeDollarSign className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                  PHOENIX-AREA HOME SELLERS
                </p>
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                Sell Your Home for Just <span className="text-orange-400">1%</span>
              </h2>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-300">
                Full-service representation, professional marketing, expert
                negotiation, and personal attention from the first meeting
                through closing—without a traditional higher listing
                commission.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/sell-your-home-for-1-percent">
                  <Button
                    size="lg"
                    className="gap-2 bg-orange-500 px-7 text-white hover:bg-orange-600"
                  >
                    See the 1% Listing Package
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/home-value">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent px-7 text-white hover:bg-white hover:text-stone-900"
                  >
                    Get My Free Home Value
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-sm leading-6 text-stone-400">
                The 1% applies to the listing side of the transaction. Any
                buyer-agent compensation, if offered and agreed to by the
                seller, is separate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Home className="h-8 w-8 text-orange-400" />
                <h3 className="mt-4 text-xl font-bold">Full-Service</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  Pricing, marketing, negotiation, and transaction management.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Calculator className="h-8 w-8 text-orange-400" />
                <h3 className="mt-4 text-xl font-bold">See Your Savings</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  See what a 1% listing commission could mean for your sale.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <BadgeDollarSign className="h-8 w-8 text-orange-400" />
                <h3 className="mt-4 text-xl font-bold">Keep More Equity</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  Reduce the listing-side expense while maintaining personal service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
