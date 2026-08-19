import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Handshake,
  Heart,
  ShieldCheck,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Darek Dowsett | Phoenix AZ Realtor",
  description:
    "Meet Darek Dowsett of AZ Hearts In Homes. Learn about his approach to real estate, professional experience, commitment to personal service, and perspective on helping Arizona buyers and sellers.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              MEET DAREK
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              More Than A
              <br />
              Real Estate Transaction.
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              I believe real estate is about much more than buying or selling
              a house. It&apos;s about people, relationships, important
              decisions, and helping clients move confidently into the next
              chapter of their lives.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My commitment is simple: provide honest guidance, communicate
              clearly, protect my clients&apos; interests, and remain personally
              involved from our first conversation through closing and beyond.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  I&apos;m Buying a Home
                </Button>
              </Link>

              <Link href="/sellers">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                >
                  I&apos;m Selling My Home
                </Button>
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[2rem] bg-card shadow-2xl">
              <Image
                src="/images/headshot.jpg"
                alt="Darek Dowsett"
                width={800}
                height={900}
                priority
                className="h-auto max-w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-4 rounded-3xl border border-border bg-card p-6 shadow-xl md:left-4">
              <div className="flex items-center gap-3">
                <Image
                    src="/images/hearthome-new.png"
                    alt=""
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain"
                />

                <div>
                    <p className="font-semibold">
                    Real Estate With Heart
                    </p>

                    <p className="text-sm text-muted-foreground">
                    Personal service. Genuine care.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Than A Transaction */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            MY APPROACH
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            More Than A Transaction.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Real estate transactions can become complicated quickly. There
            are contracts, deadlines, negotiations, inspections, financing,
            appraisals, and countless details that need attention.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My philosophy is to stay personally involved throughout the
            process. You shouldn&apos;t have to wonder who is handling your
            transaction or whether someone is keeping an eye on the details.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From our first meeting to the closing table—and long after you
            receive the keys—you have someone who knows your goals and is
            invested in helping you succeed.
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              EXPERIENCE &amp; PERSPECTIVE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Experience That
              <br />
              Goes Beyond Real Estate.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Along with real estate, I have spent many years working in information
              technology. That experience taught me the importance of
              organization, communication, problem solving, attention to
              detail, and managing complicated processes.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Those skills translate directly into how I manage a real estate
              transaction. There are a lot of moving pieces, and my job is to
              keep them moving while keeping you informed.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: ClipboardCheck,
                title: "Attention To Detail",
                text:
                  "Important deadlines, documents, and transaction details deserve careful attention.",
              },
              {
                icon: MessageCircle,
                title: "Clear Communication",
                text:
                  "You should always understand what is happening and what comes next.",
              },
              {
                icon: Handshake,
                title: "Negotiation",
                text:
                  "Strong negotiation means understanding your priorities and advocating for your interests.",
              },
              {
                icon: ShieldCheck,
                title: "Protecting Your Interests",
                text:
                  "Every decision should be made with your goals and financial interests in mind.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-7">
                  <item.icon className="h-10 w-10 text-orange-500" />

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heart Transplant Story */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Heart className="h-40 w-40 fill-red-500 text-red-500" />

          <p className="mt-8 text-4x1 font-semibold uppercase tracking-[0.35em] text-orange-400">
            THE GIFT OF LIFE
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Life Has A Way Of Changing Your Perspective.
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-300">
            In 2013, I received the gift of life in the form of a 
            heart transplant. That experience changed
            the way I look at life, relationships, and the importance of
            making the most of every opportunity.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            It taught me not to take time, family, or the people who place
            their trust in me for granted.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            Today, that perspective carries into the way I approach real
            estate. Buying or selling a home isn&apos;t simply a transaction.
            It&apos;s a major decision that affects your finances, your family,
            and your future.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            When someone chooses to work with me, I take that responsibility
            seriously. I believe in being present, communicating clearly,
            protecting my client&apos;s interests, and doing everything I can
            to make the process as successful and stress-free as possible.
          </p>
        </div>
      </section>

      {/* How I Work */}
        <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                HOW I WORK
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                You Should Know Who
                <br />
                You&apos;re Working With.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
                I believe great representation comes down to three simple
                commitments: being personally involved, giving you straightforward
                advice, and remaining available long after the transaction is over.
            </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Personally Involved */}
            <div className="rounded-[2rem] border border-border bg-background p-8 shadow-sm">
           
                <h3 className="mt-6 text-2xl font-bold">
                Personally Involved
                </h3>

                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                You work directly with me from our first conversation through
                closing. I personally manage the transaction and stay involved in
                the details that matter.
                </p>
            </div>

            {/* Straightforward Advice */}
            <div className="rounded-[2rem] border border-border bg-background p-8 shadow-sm">
             
                <h3 className="mt-6 text-2xl font-bold">
                Straightforward Advice
                </h3>

                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Real estate decisions involve significant money. My job isn&apos;t
                simply to tell you what you want to hear—it&apos;s to give you honest
                information so you can make confident decisions.
                </p>
            </div>

            {/* Beyond Closing */}
            <div className="rounded-[2rem] border border-border bg-background p-8 shadow-sm">
               
                <h3 className="mt-6 text-2xl font-bold">
                Available Beyond Closing
                </h3>

                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The relationship doesn&apos;t end at the closing table. I remain
                available when you need real estate advice, resources, or help with
                your next move.
                </p>
            </div>
            </div>

            {/* Closing Statement */}
            <div className="mx-auto mt-16 max-w-3xl text-center">
            <div className="h-px w-full bg-border" />

            <p className="mt-10 text-2xl font-semibold leading-9 text-foreground md:text-3xl">
                You deserve to know that someone is personally looking out for your
                interests every step of the way.
            </p>

            <p className="mt-4 text-lg italic text-muted-foreground">
                That commitment is at the heart of how I work with every client.
            </p>
            </div>
        </div>
        </section>

      {/* Real Estate With Heart */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Image
            src="/images/hearthome-new.png"
            alt="AZ Hearts In Homes"
            width={64}
            height={64}
            className="mx-auto h-16 w-16 object-contain"
            />

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Real Estate With Heart.
          </h2>

          <p className="mt-8 text-xl leading-9 text-muted-foreground">
            The name AZ Hearts In Homes isn't just a brand. It represents how
            I want every client experience to feel.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Professional when it matters. Personal when it matters. And
            always focused on doing what is right for the people who trust me
            with one of the biggest decisions of their lives.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Let&apos;s Start A Conversation.
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Whether you&apos;re buying, selling, or simply considering your
            options, I&apos;d be happy to talk with you.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                I&apos;m Buying a Home
              </Button>
            </Link>

            <Link href="/sellers">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900"
              >
                I&apos;m Selling My Home
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 bg-orange-500 px-8 text-white hover:bg-orange-600"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}