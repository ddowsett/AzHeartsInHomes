"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Story() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-[2rem] bg-card p-2 shadow-2xl">
            <Image
              src="/images/headshot.jpg"
              alt="Darek - AZ Hearts In Homes"
              width={650}
              height={850}
              className="rounded-[1.75rem]"
            />
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Meet Darek
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            More Than A Transaction.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            Buying or selling a home is one of the biggest financial decisions
            you'll ever make.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My job isn't simply to help you buy or sell a house. It's to provide
            honest guidance, clear communication, and the knowledge you need to
            make confident decisions from beginning to end.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every client has different goals, priorities, and concerns. That's
            why I take the time to understand your situation before recommending
            a strategy that's right for you.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From our first conversation through closing—and long after you've
            received the keys—I'll be your trusted real estate advisor, not just
            another agent.
          </p>

          <div className="mt-10">
            <Link href="/about">
              <Button size="lg">
                Learn More About Darek
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}