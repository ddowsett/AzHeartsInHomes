import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Home,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Phoenix AZ Real Estate Market | September 2026",
  description:
    "Phoenix real estate market update for September 2026. Review current Greater Phoenix home prices, inventory, days on market, and what the market means for buyers and sellers.",
  alternates: {
    canonical: "/phoenix-real-estate-market",
  },
  openGraph: {
    title: "Phoenix AZ Real Estate Market | September 2026",
    description:
      "Current Phoenix and Greater Phoenix housing market trends, including prices, inventory, and days on market.",
    url: `${siteUrl}/phoenix-real-estate-market`,
    type: "website",
  },
};

const metroStats = [
  {
    label: "Median Listing Price",
    value: "$475,000",
    detail: "August 2026",
    icon: Home,
  },
  {
    label: "Active Listings",
    value: "17,707",
    detail: "+5.2% year over year",
    icon: BarChart3,
  },
  {
    label: "Median Days On Market",
    value: "67",
    detail: "August 2026",
    icon: CalendarDays,
  },
  {
    label: "New Listings",
    value: "6,104",
    detail: "August 2026",
    icon: TrendingUp,
  },
];

const cityStats = [
  ["Median listing price", "$454,500", "-6.06% YoY"],
  ["Median sold price", "$461,734", "+0.38% YoY"],
  ["Active listings", "6,783", "Phoenix city"],
  ["Median days on market", "64", "August 2026"],
];

export default function PhoenixRealEstateMarketPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              GREATER PHOENIX REAL ESTATE MARKET
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
              Phoenix Real Estate Market
            </h1>

            <p className="mt-7 text-2xl font-semibold text-orange-400">
              September 2026 Market Update
            </p>

            <p className="mt-8 text-lg leading-8 text-stone-300 md:text-xl">
              The Phoenix-area market has become more balanced. Buyers have more
              choices than they did a year ago, while sellers need to pay close
              attention to pricing, presentation, and competition.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/home-value">
                <Button
                  size="lg"
                  className="gap-2 bg-orange-500 px-8 text-white hover:bg-orange-600"
                >
                  Find Out What Your Home Is Worth
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/buyers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900"
                >
                  Search Phoenix Homes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metro snapshot */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
              GREATER PHOENIX SNAPSHOT
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What The Numbers Say
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              These figures represent the Phoenix-Mesa-Scottsdale metropolitan
              area and use August 2026 market data.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Card key={stat.label} className="rounded-3xl">
                  <CardContent className="p-7">
                    <Icon className="h-10 w-10 text-orange-500" />
                    <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-4xl font-bold">{stat.value}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {stat.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What it means */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            WHAT IT MEANS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Buyers Have More Choice. Sellers Need A Better Strategy.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                FOR BUYERS
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                More Inventory Means More Opportunity
              </h3>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                With 17,707 active listings across the Phoenix-Mesa-Scottsdale
                metro in August, buyers have more options to compare. That can
                create more negotiating room, but the right home can still be
                competitive.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Compare more homes before making a decision",
                  "Pay close attention to condition and location",
                  "Evaluate price against recent comparable sales",
                  "Negotiate price and terms rather than focusing only on asking price",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/buyers" className="mt-9 inline-block">
                <Button size="lg" className="gap-2">
                  Start Your Home Search
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-orange-100 bg-orange-50">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                FOR SELLERS
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Pricing And Presentation Matter More
              </h3>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A market with more available homes gives buyers more choices.
                That makes accurate pricing, professional presentation, strong
                marketing, and skilled negotiation increasingly important.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Price from current comparable sales—not last year's market",
                  "Prepare the home to compete with nearby listings",
                  "Use professional photography and marketing",
                  "Have a clear strategy for offers, inspections, and negotiations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/sell-your-home-for-1-percent" className="mt-9 inline-block">
                <Button size="lg" className="gap-2">
                  Explore The 1% Listing
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Phoenix city data */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              PHOENIX CITY
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Phoenix City Market Snapshot
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              City-level numbers can look different from the broader metro, so
              it is important to know which geography you are evaluating.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-background">
            <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
              {cityStats.map(([label, value, detail]) => (
                <div key={label} className="p-7 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-3 text-3xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seller CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            WHAT DOES THE MARKET MEAN FOR YOUR HOME?
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Your Home Is Worth More Than A Market Statistic.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-stone-300">
            Median prices are useful for understanding the market, but your
            home's value depends on its location, condition, size, features,
            competition, and recent comparable sales.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/home-value">
              <Button
                size="lg"
                className="gap-2 bg-orange-500 px-8 text-white hover:bg-orange-600"
              >
                Get My Free Home Value
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900"
              >
                Talk With Darek
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm leading-6 text-muted-foreground">
            Market data on this page is for informational purposes and is not a
            guarantee of future market performance. Greater Phoenix metro data
            is based on August 2026 Realtor.com data reported through the FRED
            housing-market release. Phoenix city data is from Realtor.com&apos;s
            August 2026 market summary. Data can vary by source, property type,
            geography, and reporting period.
          </p>

          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Last updated September 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
