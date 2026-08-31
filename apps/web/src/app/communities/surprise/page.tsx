import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Dices,
  Home,
  MapPin,
  Music,
  ShoppingBag,
  Sun,
  Trees,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Surprise AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Surprise AZ neighborhoods, homes, Spring Training baseball, concerts, recreation, shopping, and nearby casino entertainment with local REALTOR® Darek Dowsett.",
  alternates: {
    canonical: "/communities/surprise",
  },
  openGraph: {
    title: "Surprise AZ Real Estate & Homes | AZ Hearts In Homes",
    description:
      "Explore Surprise neighborhoods, homes, Spring Training, concerts, recreation, shopping, and nearby entertainment with local REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/surprise`,
    type: "website",
  },
};

const areas = [
  {
    title: "Asante",
    text:
      "A growing master-planned area offering newer homes, community amenities, parks, recreation, and convenient access to the Northwest Valley.",
  },
  {
    title: "Prasada",
    text:
      "A rapidly developing area with newer residential communities, major shopping, dining, entertainment, and expanding amenities.",
  },
  {
    title: "Surprise Farms",
    text:
      "An established master-planned community featuring a variety of homes, parks, walking paths, and neighborhood amenities.",
  },
  {
    title: "Sun City Grand",
    text:
      "A prominent active-adult community in Surprise offering golf, recreation, clubs, social activities, and a variety of housing options.",
  },
];

const faqs = [
  {
    question: "Is Surprise a good place to live in the Phoenix area?",
    answer:
      "Surprise offers a wide range of neighborhoods, newer construction, active-adult communities, recreation, golf, shopping, dining, entertainment, and access to outdoor destinations. The best area depends on your lifestyle, budget, commute, and housing preferences.",
  },
  {
    question: "Does Surprise have Spring Training baseball?",
    answer:
      "Yes. Surprise Stadium is the Spring Training home of the Kansas City Royals and Texas Rangers. Spring Training brings Major League Baseball to Surprise each year and is an important part of the city's identity and local economy.",
  },
  {
    question: "Are there concerts and live entertainment in Surprise?",
    answer:
      "Yes. Surprise has a growing arts and entertainment scene. The Vista Center for the Arts hosts performances including music, comedy, dance, theater, and other touring entertainment. The city also hosts free and community-oriented live music events and seasonal festivals.",
  },
  {
    question: "Is there casino gambling near Surprise, Arizona?",
    answer:
      "Yes. Desert Diamond Casino White Tanks is just west of Surprise in Waddell near Loop 303 and Northern Parkway. The casino offers slots, table games, poker, and a sportsbook, along with restaurants and nightlife. It is nearby entertainment rather than being located inside the City of Surprise.",
  },
  {
    question: "What outdoor recreation is near Surprise?",
    answer:
      "Surprise provides access to parks, golf, trails, community recreation facilities, and nearby destinations including White Tank Mountain Regional Park and Lake Pleasant Regional Park.",
  },
  {
    question: "Can you help me buy or sell a home in Surprise?",
    answer:
      "Yes. I provide full-service representation from the initial consultation through property search or marketing, negotiations, inspections, closing, and the follow-up that comes after the transaction.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/surprise#webpage`,
      url: `${siteUrl}/communities/surprise`,
      name: "Surprise AZ Real Estate & Homes | AZ Hearts In Homes",
      description:
        "Explore Surprise Arizona neighborhoods, homes, Spring Training baseball, concerts, recreation, shopping, and nearby entertainment.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function SurprisePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Surprise" slug="surprise" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SURPRISE, ARIZONA
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Find Your Place In Surprise
            </h1>

            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Surprise has grown into one of the Northwest Valley&apos;s most
              popular communities, offering newer neighborhoods, recreation,
              golf, shopping, dining, Spring Training baseball, concerts, and
              a wide variety of homes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">
                  Search Surprise Homes
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Talk With Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Spring Training Baseball",
                text:
                  "Surprise Stadium is the Spring Training home of the Kansas City Royals and Texas Rangers, giving baseball fans Major League Baseball close to home each spring.",
              },
              {
                icon: Music,
                title: "Concerts & Entertainment",
                text:
                  "The Vista Center for the Arts and community venues bring music, comedy, dance, theater, and live performances to Surprise throughout the year.",
              },
              {
                icon: Trees,
                title: "Recreation & Outdoors",
                text:
                  "Parks, golf, trails, community recreation, White Tank Mountain Regional Park, and nearby Lake Pleasant create plenty of opportunities to get outside.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />
                  <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spring Training */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SURPRISE STADIUM
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Baseball Is Part Of The Surprise Lifestyle.
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Each spring, Surprise Stadium becomes a destination for baseball
              fans as the Kansas City Royals and Texas Rangers prepare for the
              Major League Baseball season.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              For residents, Spring Training adds another dimension to the
              community&apos;s lifestyle, bringing games, fans, restaurants, and
              events to the area while showcasing Surprise to visitors from
              around the country.
            </p>
          </div>

          <Card className="rounded-3xl border-orange-100 bg-orange-50">
            <CardContent className="p-8 md:p-10">
              <Home className="h-12 w-12 text-orange-500" />

              <h3 className="mt-6 text-3xl font-bold">
                Two Major League Teams. One Surprise Home.
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Kansas City Royals Spring Training",
                  "Texas Rangers Spring Training",
                  "Surprise Stadium and surrounding recreation facilities",
                  "Easy access to Loop 303 and the Northwest Valley",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                    <span className="text-lg leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arts and entertainment */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                ARTS & ENTERTAINMENT
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                There&apos;s More To Surprise Than Baseball.
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Surprise has been building a growing arts and entertainment
                scene. The Vista Center for the Arts presents a season of
                nationally recognized performers along with music, comedy,
                dance, and theater.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                The city also hosts community events and live outdoor music,
                including programs at venues such as Asante Library. Seasonal
                celebrations such as Fiesta Grande, Sparkling Surprise, and
                Surprise Party add even more community activity throughout the
                year.
              </p>
            </div>

            <Card className="rounded-3xl">
              <CardContent className="p-8 md:p-10">
                <Music className="h-12 w-12 text-orange-500" />

                <h3 className="mt-6 text-3xl font-bold">
                  Live Music, Comedy, Dance & Theater
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "The Vista Center for the Arts",
                    "Live music and community performances",
                    "Comedy and touring entertainment",
                    "Seasonal festivals and community celebrations",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
                      <span className="text-lg leading-7">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://surprisearts.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block font-semibold text-orange-600 underline underline-offset-4"
                >
                  Explore Surprise Arts
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby casino */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Card className="rounded-3xl border-stone-200 bg-stone-900 text-white">
            <CardContent className="p-8 md:p-10">
              <Dices className="h-12 w-12 text-orange-400" />

              <h3 className="mt-6 text-3xl font-bold">
                Casino Entertainment Is Just Outside Surprise.
              </h3>

              <p className="mt-6 text-lg leading-8 text-stone-300">
                Desert Diamond Casino White Tanks is located nearby in Waddell,
                just off Loop 303 and Northern Parkway. It offers more than
                900 slot machines, table games, poker, a sportsbook, dining,
                and nightlife.
              </p>

              <p className="mt-5 text-sm leading-7 text-stone-400">
                The casino is not inside the City of Surprise, but its location
                makes it a nearby entertainment option for Surprise residents.
                Gaming areas are restricted to guests 21 and older.
              </p>

              <a
                href="https://www.ddcaz.com/white-tanks"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block font-semibold text-orange-300 underline underline-offset-4"
              >
                Visit Desert Diamond White Tanks
              </a>
            </CardContent>
          </Card>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              NEARBY ENTERTAINMENT
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Gaming, Dining & Nightlife Nearby
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              One advantage of living in Surprise is having access to a growing
              collection of entertainment options throughout the Northwest
              Valley. The nearby White Tanks casino adds gaming, sports
              betting, poker, restaurants, and nightlife to the choices
              available to residents.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Whether that matters to you or not, it is part of the broader
              entertainment picture buyers should understand when comparing
              communities in the Northwest Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              EXPLORE SURPRISE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Different Communities. Different Lifestyles.
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Surprise encompasses a wide range of neighborhoods, from newer
              master-planned communities to established active-adult
              neighborhoods.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {areas.map((area) => (
              <Card key={area.title} className="rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{area.title}</h3>
                      <p className="mt-4 leading-8 text-muted-foreground">
                        {area.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle comparison */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                BUYING IN SURPRISE
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Find The Neighborhood That Fits
              </h2>

              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Surprise offers a broad range of housing options. Your ideal
                location may depend on whether you prioritize newer
                construction, recreation, shopping, golf, community amenities,
                entertainment, or proximity to other parts of the Valley.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I&apos;ll help you compare the areas and properties so you can
                make an informed decision before you make an offer.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Neighborhood and location",
                "Newer versus established homes",
                "Community amenities",
                "Golf and recreation",
                "Shopping, dining, and entertainment",
                "Commute and transportation",
                "Long-term goals and resale considerations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Guidance */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            LOCAL GUIDANCE
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Looking For A Surprise Home?
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Tell me what you&apos;re looking for and I&apos;ll help you narrow
            down the Surprise neighborhoods and properties that fit your goals.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From the initial search through negotiations, inspections,
            financing, and closing, I&apos;ll remain personally involved
            throughout the process.
          </p>

          <Link href="/contact" className="mt-10 inline-block">
            <Button size="lg" className="px-8">
              Let&apos;s Talk About Your Search
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              SURPRISE REAL ESTATE FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Questions About Living In Surprise?
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />

          <h2 className="mt-8 text-5xl font-bold">
            Ready To Explore Surprise?
          </h2>

          <p className="mt-8 text-xl leading-9 text-stone-300">
            Search available homes or contact me and let&apos;s talk about what
            you&apos;re looking for.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers">
              <Button size="lg" className="px-8">
                Search Surprise Homes
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}
