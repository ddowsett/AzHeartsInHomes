import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Flag, Home, MapPin, ShoppingBag, Sun, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Chandler AZ Realtor | Chandler Real Estate & Homes for Sale",
  description:
    "Looking for a Chandler AZ Realtor? Explore Chandler real estate, golf communities, luxury shopping, Chandler Fashion Center, neighborhoods, and lifestyle with REALTOR® Darek Dowsett.",
  alternates: { canonical: "/communities/chandler" },
  openGraph: {
    title: "Chandler AZ Realtor | Chandler Real Estate & Homes for Sale",
    description:
      "Explore Chandler neighborhoods, golf, luxury shopping, dining, recreation, and homes for sale with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/chandler`,
    type: "website",
  },
};

const areas = [
  {
    title: "Ocotillo",
    text: "A highly regarded Chandler area known for established neighborhoods, lakes, golf, mature landscaping, and convenient access to shopping and dining.",
  },
  {
    title: "Downtown Chandler",
    text: "A lively area featuring locally owned restaurants, shops, events, breweries, and a growing mix of residential options around the historic square.",
  },
  {
    title: "South Chandler",
    text: "A broad collection of newer and established neighborhoods with parks, schools, shopping, and convenient access to the Southeast Valley.",
  },
  {
    title: "West Chandler",
    text: "An established area with convenient access to employment centers, Chandler Fashion Center, dining, major roads, and neighboring communities.",
  },
];

const faqs = [
  {
    question: "Is Chandler a good place to live in the Phoenix area?",
    answer:
      "Chandler offers established and newer neighborhoods, strong employment opportunities, shopping, dining, recreation, golf, and convenient access to the Southeast Valley and the greater Phoenix area. The best fit depends on your budget, lifestyle, commute, and long-term plans.",
  },
  {
    question: "How many golf courses are in Chandler?",
    answer:
      "The City of Chandler has described the community as a golfer's destination, with multiple golf courses including Bear Creek Golf Complex, Ocotillo Golf Club, Lone Tree Golf Club, Ironwood Golf Club, San Marcos Golf Resort, Springfield Golf Resort, and Sunbird Golf Club.",
  },
  {
    question: "Where is the best shopping in Chandler?",
    answer:
      "Chandler Fashion Center is a major regional shopping destination with a large collection of retailers, restaurants, and entertainment. Chandler also offers boutique shopping in Downtown Chandler and additional shopping centers throughout the city.",
  },
  {
    question: "What is Chandler Fashion Center?",
    answer:
      "Chandler Fashion Center is a major shopping and entertainment destination on West Chandler Boulevard. Its retail mix includes national brands, dining, a movie theater, and entertainment options including Arizona's large SCHEELS store and Round1 Bowling & Arcade.",
  },
  {
    question: "What should I consider when buying a home in Chandler?",
    answer:
      "Location, neighborhood, property condition, golf and recreation access, shopping and dining, commute, HOA considerations, and long-term goals can all matter. Comparing different parts of Chandler before focusing on individual homes can make the search more productive.",
  },
  {
    question: "Can you help me sell a home in Chandler?",
    answer:
      "Yes. I provide full-service representation for Chandler sellers, including pricing strategy, marketing, negotiations, transaction management, inspections, and coordination through closing and beyond.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/chandler#webpage`,
      url: `${siteUrl}/communities/chandler`,
      name: "Chandler AZ Realtor | Chandler Real Estate & Homes for Sale",
      description:
        "Explore Chandler real estate, golf, luxury shopping, neighborhoods, dining, recreation, and homes for sale with REALTOR® Darek Dowsett.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: {
        "@type": "City",
        name: "Chandler",
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

export default function ChandlerPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Chandler" slug="chandler" />

      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/communities/DesertHomes.jpg"
            alt="Desert homes in Chandler Arizona"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/35 to-black/60" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">CHANDLER, ARIZONA</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Chandler AZ Real Estate &amp; Homes for Sale</h1>
            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Chandler combines established neighborhoods, newer communities, golf, upscale shopping, dining, recreation, and a strong Southeast Valley lifestyle.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers"><Button size="lg" className="px-8">Search Chandler Homes</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900">Talk With Me</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">CHANDLER LIFESTYLE</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Golf, Shopping &amp; A Connected Southeast Valley Lifestyle</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Chandler offers a combination that appeals to many buyers: golf and outdoor recreation, major shopping and dining destinations, established neighborhoods, newer developments, and convenient access to employment centers throughout the Valley.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Flag, title: "Golf", text: "Chandler has numerous golf options, from public courses to resort and private-club environments. Ocotillo, Lone Tree, Bear Creek, Ironwood, Springfield, San Marcos, and Sunbird are among the area's courses." },
              { icon: ShoppingBag, title: "Upscale Shopping", text: "Chandler Fashion Center anchors a major retail and entertainment area with national brands, dining, entertainment, and Arizona's large SCHEELS sporting-goods destination." },
              { icon: Trees, title: "Parks & Recreation", text: "Chandler has an extensive parks and recreation system, with trails, sports fields, aquatic facilities, fishing, playgrounds, and other outdoor amenities." },
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
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GOLF IN CHANDLER</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A Strong Choice For Golfers</h2>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Golf is one of Chandler's defining lifestyle advantages. Buyers can choose from neighborhoods near public courses, resort-style communities, established golf neighborhoods, and private-club environments.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Bear Creek, for example, is a championship-length public course with desert scenery and a links-style layout. Location matters, so I can help you compare golf access with the other features that matter to you.
            </p>
            <a
              href="https://www.chandleraz.gov/explore/chandler-parks/guide"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block font-semibold text-orange-600 underline underline-offset-4"
            >
              Explore Chandler's golf and recreation options
            </a>
          </div>

          <Card className="rounded-3xl border-orange-100 bg-orange-50">
            <CardContent className="p-8 md:p-10">
              <Flag className="h-12 w-12 text-orange-500" />
              <h3 className="mt-6 text-3xl font-bold">Golf Can Be Part Of The Home Search</h3>
              <div className="mt-8 space-y-5">
                {[
                  "Course proximity",
                  "Public, resort, and private-club options",
                  "Golf-community amenities",
                  "Views and lot considerations",
                  "HOA and club costs",
                  "Access to shopping, dining, and everyday services",
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

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src="/images/communities/Shopping.jpg" alt="Shopping and lifestyle in Chandler Arizona" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">SHOPPING &amp; DINING</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">High-End Shopping Without Leaving The East Valley</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                Chandler Fashion Center is one of the Valley's major shopping destinations, with more than 180 retailers and a growing mix of dining and entertainment. The center includes national brands, Apple, lululemon, Dillard's, Macy's and other major retailers, along with experiential destinations.
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Chandler also offers boutique shopping and restaurants in Downtown Chandler and additional retail centers throughout the community, giving residents choices for everyday shopping as well as special outings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">EXPLORE CHANDLER</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Which Part Of Chandler Fits You?</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">Chandler offers very different neighborhood experiences. Location can have a major impact on your commute, lifestyle, golf access, shopping, and long-term satisfaction with a home.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {areas.map((area) => (
            <Card key={area.title} className="rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50"><MapPin className="h-6 w-6 text-orange-500" /></div>
                  <div><h3 className="text-2xl font-bold">{area.title}</h3><p className="mt-4 leading-8 text-muted-foreground">{area.text}</p></div>
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
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">BUYING IN CHANDLER</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Look Beyond The House</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">The right Chandler home depends on more than bedrooms and square footage. Neighborhood, commute, amenities, property condition, golf access, shopping, and long-term goals all matter.</p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">I'll help you compare the complete picture before you make an offer.</p>
            </div>
            <div className="space-y-5">
              {["Neighborhood and location", "Home style and condition", "Golf and recreation access", "Shopping and dining", "Commute and transportation", "Long-term goals and resale considerations"].map((item) => <div key={item} className="flex items-center gap-4"><CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" /><span className="text-lg">{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">SELLING IN CHANDLER</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Selling A Chandler Home Takes More Than A Listing.</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">Pricing, presentation, marketing, negotiations, inspections, and transaction management all matter. I manage the process from our first conversation through closing and beyond.</p>
          <Link href="/sellers" className="mt-10 inline-block"><Button size="lg" className="px-8">Learn About Selling Your Home</Button></Link>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">CHANDLER REALTOR FAQ</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Questions About Chandler Real Estate</h2>
          </div>
          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-2xl">
                <CardContent className="p-7"><h3 className="text-xl font-bold">{faq.question}</h3><p className="mt-3 leading-8 text-muted-foreground">{faq.answer}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />
          <h2 className="mt-8 text-5xl font-bold">Ready To Explore Chandler?</h2>
          <p className="mt-8 text-xl leading-9 text-stone-300">Search available homes or contact me and let's talk about what you're looking for.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers"><Button size="lg" className="px-8">Search Chandler Homes</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900">Contact Me</Button></Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
