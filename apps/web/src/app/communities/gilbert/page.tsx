import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  GraduationCap,
  Home,
  MapPin,
  ShoppingBag,
  Sun,
  Trees,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Gilbert AZ Realtor | Gilbert Real Estate & Homes for Sale",
  description:
    "Looking for a Gilbert AZ Realtor? Explore Gilbert real estate, neighborhoods, highly rated schools, shopping, dining, parks, and family-friendly lifestyle options with REALTOR® Darek Dowsett.",
  alternates: { canonical: "/communities/gilbert" },
  openGraph: {
    title: "Gilbert AZ Realtor | Gilbert Real Estate & Homes for Sale",
    description:
      "Explore Gilbert neighborhoods, schools, homes, shopping, dining, parks, and lifestyle with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/gilbert`,
    type: "website",
  },
};

const areas = [
  {
    title: "Agritopia",
    text: "A distinctive Gilbert community known for walkability, local dining, green space, and a strong neighborhood atmosphere.",
  },
  {
    title: "Heritage District",
    text: "Gilbert's historic downtown area offers locally owned restaurants, entertainment, events, and a lively community setting.",
  },
  {
    title: "Power Ranch",
    text: "A large master-planned community with parks, pools, lakes, trails, recreation amenities, and a broad range of homes.",
  },
  {
    title: "South Gilbert",
    text: "A growing area with newer neighborhoods, shopping, recreation, and convenient access to the Southeast Valley.",
  },
];

const faqs = [
  {
    question: "Are Gilbert schools good?",
    answer:
      "Gilbert is known for strong educational options. Gilbert Public Schools received an A district rating for the 2024-25 school year, with 32 schools earning an A and 6 earning a B from the Arizona Department of Education. Gilbert is also served by Higley Unified and portions of Chandler Unified and other districts, so school boundaries should be verified for each property.",
  },
  {
    question: "What are some popular areas of Gilbert?",
    answer:
      "Agritopia, the Heritage District, Power Ranch, and South Gilbert are among the areas buyers may consider. Each offers a different combination of housing, amenities, commute, recreation, and lifestyle.",
  },
  {
    question: "Is Gilbert a good place for families?",
    answer:
      "Gilbert offers numerous parks, recreation programs, schools, community events, restaurants, shopping, and a variety of neighborhoods. The best fit depends on the family's priorities, budget, commute, and preferred school boundaries.",
  },
  {
    question: "What should I consider when buying a home in Gilbert?",
    answer:
      "Location, school boundaries, neighborhood amenities, home condition, HOA considerations, commute, recreation, shopping, and long-term goals can all affect the right choice. School boundaries should always be confirmed directly with the applicable district before making a purchase decision.",
  },
  {
    question: "Can you help me sell a home in Gilbert?",
    answer:
      "Yes. I provide full-service representation including pricing strategy, marketing, negotiations, transaction management, inspections, closing, and follow-through after the transaction.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/gilbert#webpage`,
      url: `${siteUrl}/communities/gilbert`,
      name: "Gilbert AZ Realtor | Gilbert Real Estate & Homes for Sale",
      description:
        "Explore Gilbert Arizona real estate, neighborhoods, schools, shopping, dining, parks, and lifestyle options.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: {
        "@type": "City",
        name: "Gilbert",
        address: {
          "@type": "PostalAddress",
          addressRegion: "AZ",
          addressCountry: "US",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function GilbertPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Gilbert" slug="gilbert" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              GILBERT, ARIZONA
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Gilbert AZ Real Estate &amp; Homes for Sale
            </h1>
            <p className="mt-8 text-xl leading-9 text-muted-foreground">
              Gilbert combines a strong community atmosphere with highly rated
              schools, distinctive neighborhoods, parks, dining, shopping,
              recreation, and convenient access throughout the Southeast Valley.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers">
                <Button size="lg" className="px-8">Search Gilbert Homes</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">Talk With Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Strong School Options",
                text: "Gilbert is served by multiple school districts, including Gilbert Public Schools and Higley Unified. Gilbert Public Schools received an A district rating for 2024-25, with many individual schools also receiving A ratings.",
              },
              {
                icon: Trees,
                title: "Parks & Recreation",
                text: "Gilbert offers parks, trails, recreation programs, community facilities, and outdoor spaces that contribute to its active suburban lifestyle.",
              },
              {
                icon: ShoppingBag,
                title: "Dining & Shopping",
                text: "From the Heritage District and Agritopia to neighborhood shopping centers, Gilbert offers restaurants, local businesses, entertainment, and everyday conveniences.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl">
                <CardContent className="p-8 text-center">
                  <item.icon className="mx-auto h-12 w-12 text-orange-500" />
                  <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
                  <p className="mt-4 leading-8 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">EXPLORE GILBERT</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Find The Right Gilbert Neighborhood</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Gilbert offers a variety of neighborhood experiences, from walkable
            destinations and established communities to newer developments and
            large master-planned neighborhoods.
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
                    <p className="mt-4 leading-8 text-muted-foreground">{area.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">BUYING IN GILBERT</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">The Neighborhood Matters</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                When buying in Gilbert, the school boundary, neighborhood,
                commute, amenities, recreation, and home itself can all matter.
                I&apos;ll help you compare the complete picture before you make an offer.
              </p>
            </div>
            <div className="space-y-5">
              {[
                "School boundaries and educational options",
                "Neighborhood and location",
                "Home style and condition",
                "Parks and recreation",
                "Shopping and dining",
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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GILBERT EDUCATION</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Education Is A Major Part Of The Gilbert Lifestyle</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Gilbert is served by multiple public school districts, so buyers with
            children should look at the exact school boundaries for each property.
            Gilbert Public Schools currently reports an A district rating for the
            2024-25 school year, with 32 schools rated A and 6 rated B by the
            Arizona Department of Education.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Gilbert also offers higher-education and career-training options,
            including Arizona State University Polytechnic and East Valley
            Institute of Technology.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">SELLING IN GILBERT</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Selling A Gilbert Home Takes More Than A Listing.</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            I manage the process from our first conversation through pricing,
            marketing, negotiations, inspections, closing, and beyond.
          </p>
          <Link href="/sellers" className="mt-10 inline-block">
            <Button size="lg" className="px-8">Learn About Selling Your Home</Button>
          </Link>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GILBERT REALTOR FAQ</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Questions About Gilbert Real Estate</h2>
          </div>
          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-4 leading-8 text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />
          <h2 className="mt-8 text-5xl font-bold">Ready To Explore Gilbert?</h2>
          <p className="mt-8 text-xl leading-9 text-stone-300">Search available homes or contact me and let&apos;s talk about what you&apos;re looking for.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers"><Button size="lg" className="px-8">Search Gilbert Homes</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900">Contact Me</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
