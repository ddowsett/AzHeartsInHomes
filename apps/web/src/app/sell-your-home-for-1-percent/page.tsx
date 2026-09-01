import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeDollarSign,
  Camera,
  CheckCircle2,
  Handshake,
  Home,
  LineChart,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sell Your Phoenix Home for 1% | AZ Hearts In Homes",
  description:
    "Sell your Phoenix-area home with full-service representation for a 1% listing commission. Professional marketing, pricing strategy, negotiation, and personal service from Darek Dowsett.",
  alternates: {
    canonical: "/sell-your-home-for-1-percent",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/sell-your-home-for-1-percent",
    title: "Sell Your Phoenix Home for 1% | AZ Hearts In Homes",
    description:
      "Full-service Phoenix-area real estate representation for a 1% listing commission, with any buyer-agent compensation handled separately as agreed with the seller.",
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

const services = [
  {
    icon: LineChart,
    title: "Strategic Pricing",
    text: "We'll review your home's features, comparable sales, competition, and current market conditions to develop a pricing strategy designed around your goals.",
  },
  {
    icon: Camera,
    title: "Professional Marketing",
    text: "Your home receives professional presentation, photography, MLS exposure, and online marketing designed to attract qualified buyers.",
  },
  {
    icon: Handshake,
    title: "Expert Negotiation",
    text: "I'll negotiate offers and work through inspections, repairs, appraisal issues, and other details with your interests in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Full-Service Representation",
    text: "The 1% listing commission doesn't mean limited service. I remain personally involved throughout the transaction from listing to closing.",
  },
];

const process = [
  "Consultation and goals",
  "Home valuation and pricing strategy",
  "Professional preparation and marketing",
  "Showings and buyer communication",
  "Offer and contract negotiation",
  "Inspection and appraisal coordination",
  "Escrow and closing coordination",
];

export default function SellYourHomeForOnePercentPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
                PHOENIX-AREA HOME SELLERS
              </p>

              <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
                Sell Your Home
                <br />
                for Just <span className="text-orange-400">1%</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-stone-300 md:text-2xl">
                Full-service representation. Professional marketing. Personal
                attention. A 1% listing commission designed to help you keep
                more of the equity you&apos;ve built.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/home-value">
                  <Button
                    size="lg"
                    className="bg-orange-500 px-8 text-white hover:bg-orange-600"
                  >
                    Get My Free Home Value
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

              <p className="mt-7 text-sm leading-6 text-stone-400">
                The 1% applies to the listing side of the transaction. Any
                buyer-agent compensation, if offered and agreed to by the
                seller, is separate.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-sm md:p-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/20">
                <BadgeDollarSign className="h-11 w-11 text-orange-300" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                THE DIFFERENCE
              </p>

              <div className="mt-4 text-6xl font-bold md:text-7xl">1%</div>

              <p className="mt-5 text-lg leading-8 text-stone-300">
                A lower listing commission without giving up the professional
                service and personal involvement you expect from your REALTOR®.
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="font-semibold">You work directly with Darek.</p>
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  From the first conversation through closing and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
            WHY PAY MORE?
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Lower Listing Cost. Full-Service Representation.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Selling for less doesn&apos;t have to mean doing more of the work
            yourself. My goal is to provide the strategy, marketing,
            negotiation, and transaction management you need while charging a
            1% listing commission.
          </p>

          <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
            <Card className="rounded-3xl">
              <CardContent className="p-8">
                <BadgeDollarSign className="h-11 w-11 text-orange-500" />
                <h3 className="mt-6 text-2xl font-bold">Keep More Equity</h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Every fraction of a percentage point can matter when you are
                  selling a high-value asset. A 1% listing commission can reduce
                  your listing-side expense compared with a higher commission.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="p-8">
                <Home className="h-11 w-11 text-orange-500" />
                <h3 className="mt-6 text-2xl font-bold">Sell With A Strategy</h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Pricing, preparation, presentation, marketing, showings,
                  offers, negotiations, and closing all work together to create
                  a successful sale.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="p-8">
                <MessageCircle className="h-11 w-11 text-orange-500" />
                <h3 className="mt-6 text-2xl font-bold">Talk To A Person</h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  You won&apos;t be handed off to a call center or left wondering
                  who is managing your transaction. You work directly with me.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Is Included */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            WHAT YOU GET
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            1% Listing Commission. Full-Service Support.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            The goal is simple: give you professional representation throughout
            the sale while reducing the listing-side commission to 1%.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} className="rounded-3xl">
                <CardContent className="p-8 md:p-10">
                  <Icon className="h-12 w-12 text-orange-500" />
                  <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    {service.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Savings Examples */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SEE THE MATH
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What Does 1% Look Like?
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              These examples show the listing-side commission at 1%. They do
              not include any buyer-agent compensation or other seller closing
              costs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { price: "$400,000", commission: "$4,000" },
              { price: "$600,000", commission: "$6,000" },
              { price: "$800,000", commission: "$8,000" },
            ].map((example) => (
              <div
                key={example.price}
                className="rounded-3xl border border-border bg-background p-8 text-center shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Sale Price
                </p>
                <p className="mt-3 text-4xl font-bold">{example.price}</p>
                <div className="mx-auto my-6 h-px w-16 bg-border" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  1% Listing Commission
                </p>
                <p className="mt-3 text-3xl font-bold text-orange-600">
                  {example.commission}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
            Examples are for illustration only. The actual listing commission,
            buyer-agent compensation, and other transaction expenses are
            determined by the applicable listing agreement and transaction
            terms.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              FROM LISTING TO CLOSING
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              I Manage The Details.
              <br />
              You Make The Decisions.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Selling a home involves a lot of moving pieces. My job is to keep
              the process organized, communicate what is happening, and help you
              make informed decisions along the way.
            </p>

            <Link href="/home-value" className="mt-10 inline-block">
              <Button size="lg" className="px-8">
                Find Out What Your Home Is Worth
              </Button>
            </Link>
          </div>

          <div className="space-y-5">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                  {index + 1}
                </div>
                <div className="pt-1">
                  <p className="font-semibold">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Questions About The 1% Listing
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                question: "Is the 1% the total cost of selling my home?",
                answer:
                  "No. The 1% is the listing commission. Any buyer-agent compensation, if offered and agreed to by the seller, is separate. Other seller expenses can also apply, such as title, escrow, taxes, repairs, concessions, or other transaction costs.",
              },
              {
                question: "Do I still receive full-service representation?",
                answer:
                  "Yes. The goal of the 1% listing offer is to reduce the listing-side commission while maintaining professional pricing strategy, marketing, negotiation, communication, and transaction management.",
              },
              {
                question: "Who handles my transaction?",
                answer:
                  "You work directly with Darek Dowsett. I personally remain involved from the initial consultation through closing and beyond.",
              },
              {
                question: "Does the 1% apply to buyer-agent compensation?",
                answer:
                  "No. Buyer-agent compensation, if any, is separate from the 1% listing commission and is handled according to the terms agreed to by the seller and the applicable parties.",
              },
              {
                question: "Can I find out what my home is worth before deciding to sell?",
                answer:
                  "Absolutely. You can request a complimentary home valuation and receive a personalized assessment based on your home's characteristics and current market conditions.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-border bg-background p-7 md:p-8"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-orange-400" />

          <h2 className="mt-7 text-4xl font-bold md:text-6xl">
            Thinking About Selling?
          </h2>

          <p className="mt-7 text-xl leading-9 text-stone-300">
            Before you put a sign in the yard, let&apos;s talk about what your
            home could sell for, what it would take to prepare it, and how the
            1% listing commission could affect your bottom line.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/home-value">
              <Button
                size="lg"
                className="bg-orange-500 px-8 text-white hover:bg-orange-600"
              >
                Get My Free Home Value
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900"
              >
                Schedule A Consultation
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-stone-400">
            AZ Hearts In Homes • Greater Phoenix, Arizona
          </p>
        </div>
      </section>
    </main>
  );
}
