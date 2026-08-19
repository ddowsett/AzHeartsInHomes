import type { Metadata } from "next";

import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Home,
  KeyRound,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Phoenix AZ Home Buyer Realtor | AZ Hearts In Homes",
  description:
    "Work with Darek Dowsett when buying a home in Phoenix and the Greater Phoenix area. Get personal guidance, professional negotiation, and full-service representation from search through closing.",
  alternates: {
    canonical: "/buyers",
  },
};

const HOME_SEARCH_URL =
  "https://homesmart.com/real-estate-agent/HSAZ001/Darek-Dowsett/bc25aac8-ae7c-2f03-4438-5c175f718779";

export default function BuyersPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            BUY A HOME
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Find The Right Home.
            <br />
            Buy With Confidence.
          </h1>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Buying a home is more than finding a property you like. It's one
            of the largest financial decisions you'll make, and you deserve
            experienced guidance from the first conversation through closing
            and beyond.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I'll help you understand the market, evaluate your options,
            negotiate strategically, and navigate the transaction so you can
            make confident decisions every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={HOME_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="px-8">
                Search Arizona Homes
              </Button>
            </a>

            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer Value Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Search,
              title: "Find The Right Home",
              text:
                "Search Arizona homes through my HomeSmart IDX while I help you evaluate properties based on your goals and priorities.",
            },
            {
              icon: ShieldCheck,
              title: "Protect Your Interests",
              text:
                "I'll help you understand the contract, contingencies, inspections, disclosures, and other important decisions throughout the transaction.",
            },
            {
              icon: Handshake,
              title: "Expert Negotiation",
              text:
                "From the initial offer through inspections and repairs, I'll negotiate with your goals and interests in mind.",
            },
            {
              icon: ClipboardCheck,
              title: "Full-Service Representation",
              text:
                "You'll work directly with me from our first meeting through closing and beyond—not simply a handoff to someone else.",
            },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl">
              <CardContent className="p-8">
                <item.icon className="mb-6 h-12 w-12 text-orange-500" />

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Buying Process */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              WHAT TO EXPECT
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              The Buying Process
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              I'll guide you through every step of the process so you always
              know what comes next.
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-6">
            {[
              {
                icon: Home,
                title: "Initial Consultation",
                text:
                  "We'll discuss your goals, timeline, budget, and what you're looking for in a home.",
              },
              {
                icon: BadgeCheck,
                title: "Financing & Preparation",
                text:
                  "We'll establish a realistic search strategy and make sure you're prepared to act when the right home appears.",
              },
              {
                icon: Search,
                title: "Home Search",
                text:
                  "Search Arizona homes through the HomeSmart IDX while I help you evaluate potential properties.",
              },
              {
                icon: Handshake,
                title: "Offer & Negotiation",
                text:
                  "We'll develop an offer strategy and negotiate price and terms designed to protect your interests.",
              },
              {
                icon: ClipboardCheck,
                title: "Inspections & Due Diligence",
                text:
                  "I'll help coordinate inspections, disclosures, repairs, appraisal, and other important contingencies.",
              },
              {
                icon: KeyRound,
                title: "Closing & Keys",
                text:
                  "I'll manage the transaction through closing and help make sure everything is completed properly.",
              },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <step.icon className="mx-auto h-12 w-12 text-orange-500" />

                <div className="mt-4 text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-3 font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              WHY WORK WITH ME
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              More Than A
              <br />
              Home Search.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              My job doesn't end when you find a house. I'll help you
              understand the transaction, negotiate on your behalf, manage
              the details, and stay involved until you have the keys in your
              hand—and beyond.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Personalized home-buying strategy",
              "Arizona market guidance",
              "Home search through HomeSmart IDX",
              "Property evaluation and guidance",
              "Offer strategy and negotiation",
              "Inspection and repair negotiations",
              "Contract and transaction management",
              "Closing coordination",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" />

                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Homes CTA */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            START YOUR SEARCH
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Ready To Start Looking?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
            Browse homes throughout the Arizona market using my HomeSmart
            property search. When you find something that interests you,
            I'll help you determine whether it's the right opportunity.
          </p>

          <a
            href={HOME_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block"
          >
            <Button size="lg" className="px-10">
              Browse Arizona Homes
            </Button>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Let's Find Your Home.
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Whether you're just beginning to explore your options or you're
            ready to make an offer, I'm here to help you navigate the process
            with confidence.
          </p>

          <Link href="/contact" className="mt-12 inline-block">
            <Button
              size="lg"
              className="bg-orange-500 px-10 hover:bg-orange-600"
            >
              Schedule A Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}