"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-100">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-100/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:py-32">
        {/* Left Side */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/images/hearthome.png"
              alt="AZ Hearts In Homes"
              width={72}
              height={72}
              priority
              className="rounded-full shadow-lg"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
                AZ Hearts In Homes
              </p>

              <p className="text-sm text-stone-500">
                Real Estate With Heart.
              </p>
            </div>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl">
            Helping You Find More Than a House.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-stone-600">
            Buying or selling a home isn't simply another transaction.
            It's one of life's biggest decisions.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            My role isn't to pressure you into a purchase.
            It's to guide you with honesty, clear communication,
            and the confidence to make the right decision for your family.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Let's Talk
              </Button>
            </Link>

            <Link href="/buyers">
              <Button
                size="lg"
                variant="outline"
                className="px-8"
              >
                Start Your Home Search
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-stone-200 pt-10">
            <div>
              <h3 className="text-3xl font-bold text-stone-900">
                100%
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Personalized
                <br />
                Guidance
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-stone-900">
                Local
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Phoenix
                <br />
                Expertise
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-stone-900">
                One
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Trusted
                <br />
                Advisor
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 hidden h-full w-full rounded-[2rem] bg-orange-100 lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Arizona home at sunset"
              width={900}
              height={1100}
              priority
              className="h-[700px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 left-8 max-w-sm rounded-3xl border border-stone-200 bg-white/95 p-8 shadow-xl backdrop-blur">
            <p className="text-lg font-semibold text-stone-900">
              Real estate is personal.
            </p>

            <p className="mt-4 leading-7 text-stone-600">
              Every client has a different story, different priorities,
              and different goals. My commitment is to understand yours
              before we ever discuss contracts or listings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}