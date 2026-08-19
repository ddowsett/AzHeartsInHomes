"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const IDX_URL =
  "https://homesmart.com/real-estate-agent/HSAZ001/Darek-Dowsett/bc25aac8-ae7c-2f03-4438-5c175f718779";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 pt-16 pb-24 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Full-Service Representation • Reduced Listing Compensation
          </p>

          <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl xl:text-7xl">
            Protect More Of
            <br />
            Your Home's Equity.
          </h1>

          <p className="mt-8 max-w-2xl text-2xl leading-10 text-stone-700">
            Full-service real estate representation with honest guidance,
            experienced negotiation, and reduced listing compensation that
            helps many Arizona homeowners keep more of what they've worked
            so hard to build.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Buying or selling a home is one of life's biggest financial
            decisions. My commitment is to provide exceptional service,
            clear communication, and professional representation from our
            first meeting through closing—and long after you've received
            the keys.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link href="/buyers">
              <Button
                size="lg"
                className="bg-slate-800 px-10 hover:bg-slate-900"
              >
                I'm Buying a Home
              </Button>
            </Link>

            <Link href="/sellers">
              <Button
                size="lg"
                variant="outline"
                className="px-10"
              >
                I'm Selling My Home
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href={IDX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
            >
              Or search all Arizona homes →
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8 text-sm font-medium text-muted-foreground">
            <span>✔ Full-Service REALTOR®</span>
            <span>•</span>
            <span>✔ Protect Your Equity</span>
            <span>•</span>
            <span>✔ Phoenix Metro Specialist</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="rounded-[2rem] bg-card p-1 shadow-2xl">
            <Image
              src="/images/whiteDoorWelcome.jpg"
              alt="Welcome Home"
              width={900}
              height={1100}
              priority
              className="h-auto max-w-full rounded-[1.75rem]"
            />
          </div>

          <div className="absolute -bottom-14 left-20 max-w-sm rounded-3xl border border-border bg-card p-8 shadow-xl">
            <p className="text-xl font-semibold text-card-foreground">
              More than another transaction.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Every client has different goals. My job is to provide honest
              advice, protect your investment, and help you make confident
              decisions while keeping more of your hard-earned equity whenever
              possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}