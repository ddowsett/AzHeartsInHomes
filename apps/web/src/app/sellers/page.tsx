import type { Metadata } from "next";

import Link from "next/link";
import {
  BadgeDollarSign,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  House,
  LineChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Phoenix AZ Listing Agent | AZ Hearts In Homes",
  description:
    "Sell your Phoenix-area home with Darek Dowsett. Get full-service representation, professional marketing, experienced negotiation, and reduced listing compensation designed to help protect more of your equity.",
  alternates: {
    canonical: "/sellers",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/sellers",
    title: "Phoenix AZ Listing Agent | AZ Hearts In Homes",
    description:
      "Sell your Phoenix-area home with Darek Dowsett. Get full-service representation, professional marketing, experienced negotiation, and reduced listing compensation designed to help protect more of your equity.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [
      {
        url: "/images/hearthome-new.png",
        width: 512,
        height: 512,
        alt: "AZ Hearts In Homes",
      },
    ],
  },
};

export default function SellersPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            SELL YOUR HOME
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Sell With Confidence.
            <br />
            Protect More Of Your Equity.
          </h1>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Your home is one of your largest investments. My goal is to help
            you maximize your proceeds through professional marketing,
            experienced negotiation, and reduced listing compensation that
            helps many Arizona homeowners keep more of what they've earned.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/home-value">
              <Button size="lg">
                Request Your Home Value
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: BadgeDollarSign,
              title: "Protect Your Equity",
              text:
                "Reduced listing compensation helps many homeowners keep more of their hard-earned proceeds.",
            },
            {
              icon: Camera,
              title: "Professional Marketing",
              text:
                "Professional photography, MLS exposure, online marketing, and presentation designed to attract qualified buyers.",
            },
            {
              icon: Handshake,
              title: "Expert Negotiation",
              text:
                "From the initial offer through inspections and closing, I negotiate to protect your interests.",
            },
            {
              icon: ClipboardCheck,
              title: "Full-Service Representation",
              text:
                "You'll work directly with me from consultation through closing—not a team you've never met.",
            },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl">
              <CardContent className="p-8">
                <item.icon className="mb-6 h-12 w-12 text-orange-500" />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Selling Process */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              WHAT TO EXPECT
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              The Selling Process
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              I'll guide you through every step so you always know what comes
              next.
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3 xl:grid-cols-6">
            {[
              {
                icon: House,
                title: "Consultation",
              },
              {
                icon: LineChart,
                title: "Pricing Strategy",
              },
              {
                icon: Camera,
                title: "Marketing",
              },
              {
                icon: Handshake,
                title: "Offers",
              },
              {
                icon: ClipboardCheck,
                title: "Escrow",
              },
              {
                icon: CheckCircle2,
                title: "Closing",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="text-center"
              >
                <step.icon className="mx-auto h-12 w-12 text-orange-500" />

                <div className="mt-4 text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-3 font-semibold">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              WHY WORK WITH ME
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Full-Service.
              <br />
              Personal Service.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              My philosophy is simple: provide exceptional service while
              helping many sellers retain more of the equity they've worked so
              hard to build.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Professional pricing strategy",
              "Professional photography",
              "MLS and online marketing",
              "Buyer communication",
              "Offer negotiation",
              "Inspection negotiation",
              "Contract management",
              "Closing coordination",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-orange-500" />

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Ready To Sell?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Let's discuss your goals and create a strategy that helps maximize
            your home's value while protecting more of your equity.
          </p>

          <Link
            href="/contact"
            className="mt-12 inline-block"
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
            >
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}