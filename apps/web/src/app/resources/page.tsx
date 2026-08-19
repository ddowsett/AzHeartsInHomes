import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Resources | AZ Hearts In Homes",
  description:
    "Real estate resources for Phoenix-area buyers and sellers from REALTOR® Darek Dowsett. Guides and helpful information are coming soon.",
  alternates: {
    canonical: "/resources",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ResourcesPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
          RESOURCES
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
          Real Estate Resources
        </h1>

        <p className="mt-8 text-xl leading-9 text-muted-foreground">
          I&apos;m building a collection of helpful resources for Arizona home
          buyers and sellers. Check back soon for guides, local information,
          and practical advice to help you make confident real estate
          decisions.
        </p>
      </section>
    </main>
  );
}