import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Home,
  MapPin,
  ShoppingBag,
  Sun,
  Trees,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Goodyear AZ Realtor | Goodyear Real Estate & Homes for Sale",
  description:
    "Looking for a Goodyear AZ Realtor? Explore Goodyear real estate, neighborhoods, homes, recreation, golf, shopping, and Southwest Valley living with REALTOR® Darek Dowsett.",
  alternates: { canonical: "/communities/goodyear" },
  openGraph: {
    title: "Goodyear AZ Realtor | Goodyear Real Estate & Homes for Sale",
    description:
      "Explore Goodyear real estate, neighborhoods, homes, recreation, golf, shopping, and Southwest Valley living with REALTOR® Darek Dowsett.",
    url: `${siteUrl}/communities/goodyear`,
    type: "website",
  },
};

const areas = [
  {
    title: "Estrella",
    text: "A large master-planned community surrounded by desert and mountain scenery, with trails, lakes, recreation, and a range of newer homes.",
  },
  {
    title: "Palm Valley",
    text: "An established Goodyear area known for golf, parks, shopping, dining, and a variety of residential neighborhoods and home styles.",
  },
  {
    title: "Goodyear Village",
    text: "Established neighborhoods with a variety of housing options and convenient access to shopping, dining, schools, and major roads.",
  },
  {
    title: "Canyon Trails",
    text: "A residential area with newer and established homes, parks, trails, and convenient access to Goodyear amenities.",
  },
];

const faqs = [
  {
    question: "Is Goodyear a good place to buy a home?",
    answer:
      "Goodyear offers a broad mix of newer master-planned communities, established neighborhoods, recreation, shopping, dining, parks, and desert surroundings. The right fit depends on your budget, lifestyle, commute, and long-term plans.",
  },
  {
    question: "What are some of the main communities in Goodyear?",
    answer:
      "Goodyear includes communities and neighborhoods such as Estrella, Palm Valley, Goodyear Village, and Canyon Trails, each offering different housing options, amenities, and surroundings.",
  },
  {
    question: "What recreation is available in Goodyear?",
    answer:
      "Goodyear offers parks, trails, golf, sports facilities, aquatic recreation, fitness programs, and community activities. The Goodyear Recreation Campus includes an 86-acre campus with a recreation center, aquatic center, and community park.",
  },
  {
    question: "Can you help me find a home in Goodyear if I am relocating?",
    answer:
      "Yes. I can help you compare Goodyear communities before focusing on individual homes, then manage the transaction from the initial search through negotiations, inspections, and closing.",
  },
  {
    question: "Can you help me sell a home in Goodyear?",
    answer:
      "Yes. I provide full-service representation for Goodyear sellers, including pricing strategy, marketing, negotiations, transaction management, and coordination through closing.",
  },
];

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/goodyear#webpage`,
      url: `${siteUrl}/communities/goodyear`,
      name: "Goodyear AZ Realtor | Goodyear Real Estate & Homes for Sale",
      description:
        "Explore Goodyear real estate, neighborhoods, homes, recreation, golf, shopping, and Southwest Valley living with REALTOR® Darek Dowsett.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: {
        "@type": "City",
        name: "Goodyear",
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

export default function GoodyearPage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Goodyear" slug="goodyear" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />

      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/communities/MountainHomes.jpg"
            alt="Arizona desert and mountain homes near Goodyear"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/45 to-black/65" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">GOODYEAR, ARIZONA</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Goodyear AZ Real Estate &amp; Homes for Sale
            </h1>
            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Goodyear combines master-planned communities, established neighborhoods, golf, recreation, shopping, dining, and beautiful desert surroundings in the Southwest Valley.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers"><Button size="lg" className="px-8">Search Goodyear Homes</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900">Talk With Me</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GOODYEAR LIFESTYLE</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A Southwest Valley Community With Room To Live</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Goodyear offers more than a place to live. Its parks, recreation, golf, shopping, dining, outdoor spaces, and growing collection of neighborhoods give buyers different ways to shape their Arizona lifestyle.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Trees, title: "Outdoor Recreation", text: "Trails, parks, golf, lakes, sports facilities, and desert landscapes provide abundant opportunities to enjoy the Arizona outdoors." },
              { icon: Trophy, title: "Sports & Recreation", text: "Goodyear offers community recreation, aquatic facilities, fitness programs, sports courts, fields, and activities for different ages and interests." },
              { icon: ShoppingBag, title: "Shopping & Dining", text: "A growing selection of shopping, restaurants, entertainment, and everyday conveniences makes Goodyear an increasingly self-contained community." },
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
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GOODYEAR COMMUNITIES</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Find The Community That Fits</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Goodyear includes several distinct neighborhoods and master-planned communities, each offering a different combination of housing, amenities, recreation, and surroundings.
          </p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GOODYEAR RECREATION</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Recreation Is Part of the Lifestyle</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">
                The Goodyear Recreation Campus is an 86-acre facility with a recreation center, aquatic center, and community park. It provides fitness, classes, sports, swimming, walking, family activities, and community events.
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                The campus includes an indoor walking track, multipurpose gymnasium, fitness areas, pools, a lazy river, water slides, sports courts, fields, playgrounds, and a one-mile walking path.
              </p>
            </div>
            <div className="space-y-5">
              {[
                "86-acre recreation campus",
                "30-acre community park",
                "Fitness areas and group classes",
                "Indoor walking and running track",
                "25-yard lap pool and aquatic recreation",
                "Pickleball, tennis, basketball and volleyball",
                "Baseball and softball fields",
                "Playgrounds, walking paths and picnic areas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4"><CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" /><span className="text-lg">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">BUYING IN GOODYEAR</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Compare More Than Just The House</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Goodyear buyers can choose from established neighborhoods, newer construction, master-planned communities, golf properties, and homes surrounded by desert and open space. I'll help you compare the communities and properties so you can find the combination of location, lifestyle, and home that works for you.
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {["Neighborhood and location", "Newer versus established homes", "Community amenities", "Golf and recreation", "Shopping and dining", "Commute and transportation"].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5"><CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" /><span>{item}</span></div>
            ))}
          </div>
          <Link href="/buyers" className="mt-10 inline-block"><Button size="lg" className="px-8">Explore Buying</Button></Link>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">SELLING IN GOODYEAR</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Selling a Goodyear Home?</h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
            Goodyear buyers compare homes based on location, condition, amenities, community features, and lifestyle. I'll help position your home, develop a pricing strategy, market the property, negotiate offers, and manage the transaction through closing.
          </p>
          <Link href="/sellers" className="mt-10 inline-block"><Button size="lg" className="px-8">Learn About Selling</Button></Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">GOODYEAR REALTOR FAQ</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Questions About Goodyear Real Estate</h2>
        </div>
        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <Card key={faq.question} className="rounded-2xl"><CardContent className="p-7"><h3 className="text-xl font-bold">{faq.question}</h3><p className="mt-3 leading-8 text-muted-foreground">{faq.answer}</p></CardContent></Card>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />
          <h2 className="mt-8 text-5xl font-bold">Ready To Explore Goodyear?</h2>
          <p className="mt-8 text-xl leading-9 text-stone-300">Search available homes or contact me and let's talk about what you're looking for.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/buyers"><Button size="lg" className="px-8">Search Goodyear Homes</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900">Contact Me</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
