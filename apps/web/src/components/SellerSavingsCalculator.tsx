"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ONE_PERCENT = 0.01;
const DEFAULT_COMPARISON_RATE = 0.03;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function SellerSavingsCalculator() {
  const [homePrice, setHomePrice] = useState("600000");
  const [comparisonRate, setComparisonRate] = useState("3");

  const results = useMemo(() => {
    const price = Math.max(0, Number(homePrice.replace(/[^0-9.]/g, "")) || 0);
    const rate = Math.min(
      10,
      Math.max(1, Number(comparisonRate.replace(/[^0-9.]/g, "")) || DEFAULT_COMPARISON_RATE * 100),
    ) / 100;

    const onePercentCost = price * ONE_PERCENT;
    const comparisonCost = price * rate;
    const savings = Math.max(0, comparisonCost - onePercentCost);

    return { price, rate, onePercentCost, comparisonCost, savings };
  }, [homePrice, comparisonRate]);

  return (
    <section className="bg-orange-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
            <Calculator className="h-8 w-8 text-orange-600" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
            SELLER SAVINGS CALCULATOR
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            See What A 1% Listing Could Save You
          </h2>

          <p className="mt-7 text-lg leading-8 text-muted-foreground">
            Enter an estimated sale price and a listing commission you want to
            compare. We&apos;ll show the difference between that commission and a
            1% listing commission.
          </p>
        </div>

        <Card className="mx-auto mt-14 max-w-5xl rounded-[2rem] border-orange-100 shadow-sm">
          <CardContent className="p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h3 className="text-2xl font-bold">Enter your numbers</h3>

                <div className="mt-8 space-y-7">
                  <div>
                    <label
                      htmlFor="seller-home-price"
                      className="text-sm font-semibold"
                    >
                      Estimated home sale price
                    </label>
                    <div className="relative mt-2">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <input
                        id="seller-home-price"
                        type="text"
                        inputMode="decimal"
                        value={homePrice}
                        onChange={(event) => setHomePrice(event.target.value)}
                        className="h-14 w-full rounded-xl border border-input bg-background pl-9 pr-4 text-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                        aria-describedby="seller-home-price-help"
                      />
                    </div>
                    <p
                      id="seller-home-price-help"
                      className="mt-2 text-sm text-muted-foreground"
                    >
                      For example: 600000
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="seller-comparison-rate"
                      className="text-sm font-semibold"
                    >
                      Listing commission to compare
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="seller-comparison-rate"
                        type="text"
                        inputMode="decimal"
                        value={comparisonRate}
                        onChange={(event) => setComparisonRate(event.target.value)}
                        className="h-14 w-full rounded-xl border border-input bg-background px-4 pr-10 text-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                        aria-describedby="seller-comparison-rate-help"
                      />
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        %
                      </span>
                    </div>
                    <p
                      id="seller-comparison-rate-help"
                      className="mt-2 text-sm text-muted-foreground"
                    >
                      Enter the listing-side commission you want to compare.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-stone-950 p-7 text-white md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                  ESTIMATED LISTING-SIDE SAVINGS
                </p>

                <p className="mt-4 break-words text-5xl font-bold text-orange-400 md:text-6xl">
                  {formatCurrency(results.savings)}
                </p>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-7 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-stone-400">At 1%</span>
                    <span className="font-semibold">
                      {formatCurrency(results.onePercentCost)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-stone-400">
                      At {results.rate * 100}%
                    </span>
                    <span className="font-semibold">
                      {formatCurrency(results.comparisonCost)}
                    </span>
                  </div>
                </div>

                <p className="mt-7 text-sm leading-6 text-stone-400">
                  This is an illustration of listing-side commission only. It
                  does not include buyer-agent compensation or other seller
                  closing costs.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8">
              <div>
                <p className="font-semibold">Want to know what your home could sell for?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get a personalized home valuation before making a decision.
                </p>
              </div>

              <Link href="/home-value">
                <Button size="lg" className="gap-2 px-7">
                  Get My Free Home Value
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-5 text-muted-foreground">
          Calculator results are estimates for comparison purposes only and are
          not a quote or guarantee of commission, sale price, net proceeds, or
          savings. Actual compensation and transaction expenses are determined
          by the applicable agreements and transaction terms.
        </p>
      </div>
    </section>
  );
}
