import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Coffee,
  Home,
  MapPin,
  ShoppingBag,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

export const metadata: Metadata = {
  title: "Scottsdale AZ Real Estate & Homes | AZ Hearts In Homes",
  description:
    "Explore Scottsdale neighborhoods, homes, lifestyle, golf, dining, and recreation with local REALTOR® Darek Dowsett. Get personal guidance buying a Scottsdale home.",
};

const areas = [
  { title: "Old Town Scottsdale", text: "A vibrant area known for restaurants, galleries, nightlife, shopping, events, and a more walkable urban atmosphere." },
  { title: "Central Scottsdale", text: "Established neighborhoods with convenient access to shopping, dining, golf, recreation, and major Valley destinations." },
  { title: "North Scottsdale", text: "Known for desert surroundings, golf communities, luxury homes, newer developments, and access to outdoor recreation." },
  { title: "McCormick Ranch", text: "An established Scottsdale community with mature landscaping, greenbelts, lakes, recreation, and a variety of housing options." },
];

export default function ScottsdalePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Scottsdale" slug="scottsdale" />

      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Dusk1.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/65" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">SCOTTSDALE, ARIZONA</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Discover Scottsdale</h1>
            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">
              Scottsdale offers an unusually diverse combination of desert scenery, golf, dining, shopping, recreation, and neighborhoods. Finding the right part of Scottsdale is an important part of finding the right home.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers"><Button size="lg" className="px-8">Search Scottsdale Homes</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900">Talk With Me</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">LIVING IN SCOTTSDALE</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A Lifestyle Market With Very Different Neighborhoods</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">Scottsdale can feel very different depending on where you live. Some buyers are drawn to restaurants, entertainment, and a more walkable environment. Others want golf, desert scenery, larger properties, or a quieter neighborhood. The right choice starts with understanding how you want to live.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Trophy, title: "Golf & Recreation", text: "Scottsdale is known for golf, outdoor recreation, trails, and desert landscapes, with options ranging from established neighborhoods to resort-oriented communities." },
              { icon: Coffee, title: "Dining & Entertainment", text: "Old Town and other Scottsdale areas offer an extensive selection of restaurants, coffee shops, nightlife, arts, events, and entertainment." },
              { icon: ShoppingBag, title: "Shopping & Lifestyle", text: "Scottsdale offers everything from local boutiques to major shopping destinations and luxury retail, with different areas offering very different experiences." },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl"><CardContent className="p-8 text-center"><item.icon className="mx-auto h-12 w-12 text-orange-500" /><h3 className="mt-6 text-2xl font-bold">{item.title}</h3><p className="mt-4 leading-8 text-muted-foreground">{item.text}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">EXPLORE SCOTTSDALE</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Which Part Of Scottsdale Fits You?</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">Scottsdale isn&apos;t one-size-fits-all. Different areas offer very different environments, housing options, and lifestyles.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {areas.map((area) => (
            <Card key={area.title} className="rounded-3xl"><CardContent className="p-8"><div className="flex items-start gap-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50"><MapPin className="h-6 w-6 text-orange-500" /></div><div><h3 className="text-2xl font-bold">{area.title}</h3><p className="mt-4 leading-8 text-muted-foreground">{area.text}</p></div></div></CardContent></Card>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">BUYING IN SCOTTSDALE</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">The Right Home Starts With The Right Area.</h2>
              <p className="mt-7 text-lg leading-8 text-muted-foreground">Whether you&apos;re looking for a lock-and-leave property near restaurants and entertainment, an established neighborhood, or a larger home surrounded by desert and golf, Scottsdale offers many different possibilities.</p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">I&apos;ll help you compare the areas and properties so you can make a decision based on more than just the house itself.</p>
            </div>
            <div className="space-y-5">
              {["Neighborhood and location", "Home style, lot, and property features", "Golf and recreation access", "Dining, shopping, and entertainment", "Commute and transportation", "Long-term goals and resale considerations"].map((item) => <div key={item} className="flex items-center gap-4"><CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" /><span className="text-lg">{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">RELOCATING TO SCOTTSDALE</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Find The Scottsdale Lifestyle That Fits You.</h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">If you&apos;re relocating to Scottsdale, I&apos;ll help you compare the different parts of the city before you spend your time touring individual homes. Your priorities can point us toward very different neighborhoods.</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">From the initial search through negotiations, inspections, financing, and closing, I&apos;ll remain personally involved throughout the process.</p>
          <Link href="/contact" className="mt-10 inline-block"><Button size="lg" className="px-8">Let&apos;s Talk About Your Search</Button></Link>
        </div>
      </section>

      <section className="border-t bg-stone-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">EXPLORE NEARBY</p>
          <h2 className="mt-4 text-4xl font-bold">Considering Other Valley Communities?</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Phoenix and other nearby communities may offer a different fit depending on your lifestyle, commute, budget, and long-term plans.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">{[["/communities/phoenix", "Phoenix"], ["/communities/tempe", "Tempe"], ["/communities/chandler", "Chandler"], ["/communities/gilbert", "Gilbert"]].map(([href, label]) => <Link key={href} href={href}><Button variant="outline">{label}</Button></Link>)}</div>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Home className="mx-auto h-12 w-12 text-orange-400" />
          <h2 className="mt-8 text-5xl font-bold">Ready To Explore Scottsdale?</h2>
          <p className="mt-8 text-xl leading-9 text-stone-300">Search available homes or contact me and let&apos;s talk about what you&apos;re looking for.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4"><Link href="/buyers"><Button size="lg" className="px-8">Search Scottsdale Homes</Button></Link><Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900">Contact Me</Button></Link></div>
        </div>
      </section>
    </main>
  );
}