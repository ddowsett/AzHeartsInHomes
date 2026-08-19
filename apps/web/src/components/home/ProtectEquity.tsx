"use client";

import Link from "next/link";
import { ShieldCheck, PiggyBank, BadgeDollarSign, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Full-Service Representation",
    description:
      "Professional photography, marketing, pricing strategy, contract management, and skilled negotiation from listing through closing.",
  },
  {
    icon: PiggyBank,
    title: "Protect More of Your Equity",
    description:
      "Your home is one of your largest investments. My reduced listing commission is designed to help many homeowners keep more of the proceeds from their sale.",
  },
  {
    icon: BadgeDollarSign,
    title: "Value Without Sacrificing Service",
    description:
      "Lower commission should never mean lower quality. My commitment is to provide exceptional service while helping you maximize your financial outcome.",
  },
];

export function ProtectEquity() {
  return (
    <section className="bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Protect Your Investment
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Keep More Of The Equity
            <br />
            You've Worked So Hard To Build.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Every dollar of equity represents years of mortgage payments,
            maintenance, improvements, and hard work. Selling your home
            shouldn't mean giving away more of that equity than necessary.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[2rem] bg-card p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-foreground">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-[2rem] bg-primary px-10 py-14 text-center text-primary-foreground shadow-2xl">
          <h3 className="text-3xl font-bold">
            Full-Service Real Estate.
            <br />
            Designed To Help You Keep More.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-primary-foreground/90">
            Choosing a REALTOR® isn't just about the commission—it's about the
            value you receive. My goal is to provide exceptional service,
            strategic marketing, and expert negotiation while helping Arizona
            homeowners protect more of their hard-earned equity.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                Let's Talk About Your Home
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}