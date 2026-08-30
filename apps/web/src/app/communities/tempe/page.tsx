import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, GraduationCap, Home, MapPin, ShoppingBag, Trees, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityBreadcrumb } from "@/components/seo/CommunityBreadcrumb";

const siteUrl = "https://azheartsinhomes.com";

export const metadata: Metadata = {
  title: "Tempe AZ Realtor | Tempe Real Estate & Homes for Sale",
  description:
    "Looking for a Tempe AZ Realtor? Explore Tempe real estate, neighborhoods, ASU, Tempe Town Lake, Mill Avenue, dining, entertainment, and homes for sale with REALTOR® Darek Dowsett.",
  alternates: { canonical: "/communities/tempe" },
  openGraph: {
    title: "Tempe AZ Realtor | Tempe Real Estate & Homes for Sale",
    description:
      "Explore Tempe neighborhoods, Arizona State University, Tempe Town Lake, Mill Avenue, dining, entertainment, and homes for sale.",
    url: `${siteUrl}/communities/tempe`,
    type: "website",
    images: [{ url: "/images/communities/TempeAsu.jpg", alt: "Arizona State University in Tempe, Arizona" }],
  },
};

const areas = [
  { title: "Downtown Tempe & Mill Avenue", text: "A lively urban district centered on Mill Avenue and Arizona State University, with restaurants, shopping, nightlife, events, arts, and a variety of housing options." },
  { title: "Tempe Town Lake", text: "A distinctive waterfront area with paths for walking, jogging and biking, boating, parks, events, and residential and business opportunities nearby." },
  { title: "North Tempe", text: "Conveniently located near ASU, Town Lake, Papago Park, Scottsdale and major transportation routes, with a mix of established neighborhoods and urban housing." },
  { title: "South Tempe", text: "Established neighborhoods with a more suburban atmosphere, parks, shopping, schools, and convenient access to Chandler and other Southeast Valley communities." },
];

const faqs = [
  { question: "Is Tempe a good place to live?", answer: "Tempe offers an unusual combination of urban activity, established neighborhoods, outdoor recreation, education, dining and a central Valley location. The best area depends on your lifestyle, budget, commute and housing preferences." },
  { question: "What is Tempe known for?", answer: "Tempe is especially known for Arizona State University's historic Tempe campus, Tempe Town Lake, Mill Avenue, arts and entertainment, restaurants, events and its central location within the Phoenix metropolitan area." },
  { question: "What is there to do at Tempe Town Lake?", answer: "Tempe Town Lake offers walking, jogging, biking, boating, fishing, parks, public art and special events. The city says more than 40 special events take place at the lake each year." },
  { question: "What is Mill Avenue known for?", answer: "Historic Mill Avenue is a downtown Tempe district known for dining, nightlife, shopping, culture, entertainment and community events, and it sits next to Arizona State University's Tempe campus." },
  { question: "Can you help me buy a home near ASU in Tempe?", answer: "Yes. I can help you compare neighborhoods and properties based on proximity to ASU, transportation, lifestyle, housing type, budget and long-term goals, then remain personally involved through the transaction." },
  { question: "Can you help me sell a home in Tempe?", answer: "Yes. I provide full-service representation for Tempe sellers, including pricing strategy, marketing, negotiations, transaction management and coordination through closing." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/communities/tempe#webpage`,
      url: `${siteUrl}/communities/tempe`,
      name: "Tempe AZ Realtor | Tempe Real Estate & Homes for Sale",
      description: "Explore Tempe real estate, Arizona State University, Tempe Town Lake, Mill Avenue and local neighborhoods with REALTOR® Darek Dowsett.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@type": "City", name: "Tempe", address: { "@type": "PostalAddress", addressRegion: "AZ", addressCountry: "US" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

export default function TempePage() {
  return (
    <main className="bg-background">
      <CommunityBreadcrumb name="Tempe" slug="tempe" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative isolate min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image src="/images/communities/TempeAsu.jpg" alt="Arizona State University sign in Tempe Arizona" fill priority className="object-cover object-[center_78%]" />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/45 to-black/65" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">TEMPE, ARIZONA</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Tempe AZ Real Estate &amp; Homes for Sale</h1>
            <p className="mt-8 text-xl leading-9 text-white/90 md:text-2xl">Tempe combines the energy of Arizona State University and Mill Avenue with the outdoor lifestyle of Tempe Town Lake, established neighborhoods, dining, entertainment and a central Valley location.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/buyers"><Button size="lg" className="px-8">Search Tempe Homes</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-white/10 px-8 text-white hover:bg-white hover:text-stone-900">Talk With Me</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">WHAT MAKES TEMPE DIFFERENT</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A City Built Around Education, Water, Culture &amp; Activity</h2>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">Tempe offers a combination that is difficult to duplicate elsewhere in the Valley. Arizona State University, Tempe Town Lake and the Mill Avenue District are all central to the city's identity.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: GraduationCap, title: "Arizona State University", text: "ASU's historic Tempe campus is the university's original home and offers hundreds of undergraduate and graduate programs across business, engineering, arts, sciences, education, health and other disciplines." },
              { icon: Waves, title: "Tempe Town Lake", text: "The more than 2-mile lake provides walking, jogging, biking, boating, fishing, parks, events and waterfront destinations in the heart of Tempe." },
              { icon: ShoppingBag, title: "Mill Avenue", text: "Historic Mill Avenue brings together restaurants, shopping, nightlife, culture, entertainment and community events next to the ASU campus." },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl"><CardContent className="p-8 text-center"><item.icon className="mx-auto h-12 w-12 text-orange-500" /><h2 className="mt-6 text-2xl font-bold">{item.title}</h2><p className="mt-4 leading-8 text-muted-foreground">{item.text}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">ARIZONA STATE UNIVERSITY</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">ASU Is Part of the Tempe Lifestyle</h2><p className="mt-8 text-lg leading-8 text-muted-foreground">ASU's Tempe campus is a major part of the city's character. The historic campus includes major academic programs, Big 12 athletics, performing arts, research facilities and access to public transportation.</p></div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Card className="rounded-3xl"><CardContent className="p-8"><GraduationCap className="h-12 w-12 text-orange-500" /><h3 className="mt-6 text-2xl font-bold">A Major University Campus</h3><p className="mt-4 leading-8 text-muted-foreground">ASU's official campus information describes Tempe as its historic campus and home to hundreds of undergraduate and graduate degree programs. The campus includes the W. P. Carey School of Business, Ira A. Fulton Schools of Engineering, Herberger Institute for Design and the Arts, College of Liberal Arts and Sciences and other schools and colleges.</p></CardContent></Card>
          <Card className="rounded-3xl"><CardContent className="p-8"><Trees className="h-12 w-12 text-orange-500" /><h3 className="mt-6 text-2xl font-bold">More Than a College Town</h3><p className="mt-4 leading-8 text-muted-foreground">The campus sits within a city with restaurants, entertainment, outdoor recreation, arts, employers and transportation connections. For buyers, proximity to ASU can be one consideration among many when evaluating a Tempe property.</p></CardContent></Card>
        </div>
      </section>

      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-6"><div className="grid gap-14 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">TEMPE TOWN LAKE</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Waterfront Recreation in the Heart of the City</h2><p className="mt-7 text-lg leading-8 text-muted-foreground">Tempe Town Lake stretches for more than two miles through the center of Tempe. Paths along the lake support walking, jogging and biking, while the lake itself supports boating and fishing.</p><p className="mt-6 text-lg leading-8 text-muted-foreground">The city reports more than 40 special events at Town Lake each year, including festivals, running events and the Fantasy of Lights Boat Parade.</p></div><div className="space-y-5">{["Walking, jogging and biking paths", "Boating and fishing", "Tempe Beach Park and waterfront amenities", "More than 40 special events annually", "Tempe Center for the Arts nearby", "Convenient access to Mill Avenue and ASU"].map((item) => <div key={item} className="flex items-center gap-4"><CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" /><span className="text-lg">{item}</span></div>)}</div></div></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">MILL AVENUE DISTRICT</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Dining, Shopping, Nightlife &amp; Culture</h2><p className="mt-8 text-lg leading-8 text-muted-foreground">Historic Mill Avenue is immediately associated with downtown Tempe and ASU. The district combines restaurants, nightlife, shopping, culture, entertainment and recurring community events.</p></div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">{[{ title: "Dining", text: "Restaurants, coffee shops and casual dining create an active day-to-night atmosphere." }, { title: "Entertainment", text: "Events, live entertainment, culture and nightlife add to the energy of downtown Tempe." }, { title: "Shopping & Events", text: "Local businesses, markets, art events and community celebrations give Mill Avenue a distinct identity." }].map((item) => <Card key={item.title} className="rounded-3xl"><CardContent className="p-8"><h3 className="text-2xl font-bold">{item.title}</h3><p className="mt-4 leading-8 text-muted-foreground">{item.text}</p></CardContent></Card>)}</div>
      </section>

      <section className="bg-stone-50 py-24"><div className="mx-auto max-w-7xl px-6"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">TEMPE NEIGHBORHOODS</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Find the Right Part of Tempe</h2><p className="mt-8 text-lg leading-8 text-muted-foreground">Tempe's neighborhoods can offer very different lifestyles. The right location depends on what you value most in your daily life.</p></div><div className="mt-16 grid gap-8 md:grid-cols-2">{areas.map((area) => <Card key={area.title} className="rounded-3xl"><CardContent className="p-8"><div className="flex items-start gap-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50"><MapPin className="h-6 w-6 text-orange-500" /></div><div><h3 className="text-2xl font-bold">{area.title}</h3><p className="mt-4 leading-8 text-muted-foreground">{area.text}</p></div></div></CardContent></Card>)}</div></div></section>

      <section className="bg-orange-50 py-24"><div className="mx-auto max-w-6xl px-6"><div className="grid gap-14 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">BUYING IN TEMPE</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Location Can Change Everything</h2><p className="mt-7 text-lg leading-8 text-muted-foreground">Tempe buyers often have very different priorities. Proximity to ASU, Town Lake, Mill Avenue, work, recreation, transportation or other Valley communities can all influence the right property.</p><p className="mt-6 text-lg leading-8 text-muted-foreground">I'll help you evaluate the neighborhood and the home together.</p></div><div className="space-y-5">{["Neighborhood and location", "Home style and condition", "Commute and transportation", "ASU and campus proximity", "Dining and entertainment", "Parks and recreation", "Long-term goals and resale considerations"].map((item) => <div key={item} className="flex items-center gap-4"><CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" /><span className="text-lg">{item}</span></div>)}</div></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24"><div className="mx-auto max-w-4xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">SELLING IN TEMPE</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Selling a Tempe Home Requires a Strategy</h2><p className="mt-8 text-lg leading-8 text-muted-foreground">Buyers can value Tempe properties differently depending on location, housing type, condition and proximity to the amenities that matter to them. I'll help you develop a pricing and marketing strategy, negotiate offers and manage the transaction through closing.</p><Link href="/sellers" className="mt-10 inline-block"><Button size="lg" className="px-8">Learn About Selling</Button></Link></div></section>

      <section className="bg-stone-50 py-24"><div className="mx-auto max-w-5xl px-6"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">TEMPE REALTOR FAQ</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Questions About Tempe Real Estate</h2></div><div className="mt-14 space-y-5">{faqs.map((faq) => <Card key={faq.question} className="rounded-2xl"><CardContent className="p-7"><h3 className="text-xl font-bold">{faq.question}</h3><p className="mt-3 leading-8 text-muted-foreground">{faq.answer}</p></CardContent></Card>)}</div></div></section>

      <section className="border-t bg-stone-50 py-20"><div className="mx-auto max-w-5xl px-6 text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">EXPLORE NEARBY</p><h2 className="mt-4 text-4xl font-bold">Considering Other Valley Communities?</h2><div className="mt-10 flex flex-wrap justify-center gap-3">{[["/communities/phoenix", "Phoenix"], ["/communities/scottsdale", "Scottsdale"], ["/communities/chandler", "Chandler"], ["/communities/mesa", "Mesa"]].map(([href, label]) => <Link key={href} href={href}><Button variant="outline">{label}</Button></Link>)}</div></div></section>

      <section className="bg-stone-900 py-24 text-white"><div className="mx-auto max-w-3xl px-6 text-center"><Home className="mx-auto h-12 w-12 text-orange-400" /><h2 className="mt-8 text-5xl font-bold">Ready to Explore Tempe?</h2><p className="mt-8 text-xl leading-9 text-stone-300">Search available homes or contact me and let's talk about what you're looking for.</p><div className="mt-12 flex flex-wrap justify-center gap-4"><Link href="/buyers"><Button size="lg" className="px-8">Search Tempe Homes</Button></Link><Link href="/contact"><Button size="lg" variant="outline" className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-stone-900">Contact Me</Button></Link></div></div></section>
    </main>
  );
}
