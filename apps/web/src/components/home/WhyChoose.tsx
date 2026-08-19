"use client";

import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  UserCheck,
  MapPinned,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Real Estate With Heart",
    description:
      "Every client has a unique story. I take the time to understand your goals before recommending a strategy, because buying or selling a home is personal.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Your Equity",
    description:
      "Your home is one of your largest investments. My goal is to help you maximize your proceeds while providing full-service representation from start to finish.",
  },
  {
    icon: UserCheck,
    title: "One Trusted Advisor",
    description:
      "You'll work directly with me from our first conversation through closing and beyond. No hand-offs. No call centers. Just personal service every step of the way.",
  },
  {
    icon: MapPinned,
    title: "Local Arizona Expertise",
    description:
      "From the East Valley and Phoenix to the West Valley, I know the communities, neighborhoods, schools, and market trends that help clients make confident decisions.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Why Clients Choose AZ Hearts In Homes
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Experience Real Estate
            <br />
            The Way It Should Be.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Real estate isn't just about contracts and closing dates.
            It's about trust, communication, and helping people make
            one of the biggest financial decisions of their lives with confidence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-[2rem] bg-card p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-foreground">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2rem] bg-primary px-10 py-14 text-center text-primary-foreground shadow-2xl">
          <h3 className="text-3xl font-bold">
            Ready To Make Your Next Move?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/90">
            Whether you're buying your first home, selling your current one,
            or simply exploring your options, I'd be honored to help guide
            you through the process.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
              >
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}