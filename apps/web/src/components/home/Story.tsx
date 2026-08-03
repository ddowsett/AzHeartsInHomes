import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Story() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] bg-stone-100" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/headshot.jpg"
              alt="AZ Hearts In Homes"
              width={900}
              height={900}
              className="w-full bg-white p-16 object-contain"
            />
          </div>
        </div>

        {/* Right */}
        <div>
          <SectionHeading
            centered={false}
            eyebrow="A Different Approach"
            title="You're not hiring someone to sell a house."
            description="You're choosing someone to guide you through one of the biggest financial and emotional decisions you'll ever make."
          />

          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              Every buyer has different priorities.
              Every seller has a different reason for moving.
              Every family has its own story.
            </p>

            <p>
              That's why I believe real estate should never feel rushed or
              transactional. My first responsibility is to understand what
              matters most to you—not simply show homes or list a property.
            </p>

            <p>
              Together we'll create a strategy that fits your goals, communicate
              openly throughout the process, and make decisions based on facts
              instead of pressure.
            </p>

            <p>
              Whether you're purchasing your first home, moving across town,
              downsizing, or preparing to sell a home you've loved for years,
              you'll always know someone is looking out for your best interests.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/about">
              <Button size="lg">
                Learn More About Me
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
              >
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}