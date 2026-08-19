"use client";

import { Home, KeyRound, BadgeDollarSign, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Sell Your Home",
    description:
      "Professional marketing, strategic pricing, expert negotiation, and full-service representation designed to maximize your home's value while helping protect your equity.",
  },
  {
    icon: KeyRound,
    title: "Buy Your Next Home",
    description:
      "Whether you're a first-time buyer or upgrading to your forever home, you'll receive honest advice and skilled representation from start to finish.",
  },
  {
    icon: BadgeDollarSign,
    title: "Protect Your Equity",
    description:
      "You have worked hard to build equity in your home. My reduced listing commission helps many sellers keep more of the proceeds from their sale without sacrificing service.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "Every recommendation is based on what's best for you—not what's best for closing a transaction. My goal is to earn your trust for life.",
  },
];

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
            How I Help
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            Full-Service Real Estate.
            <br />
            Built Around You.
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-600">
            Buying or selling a home is one of life's biggest financial
            decisions. My commitment is to provide exceptional service,
            honest guidance, and help you protect the investment you've
            worked so hard to build.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                  <Icon className="h-8 w-8 text-orange-600" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-stone-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-stone-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}