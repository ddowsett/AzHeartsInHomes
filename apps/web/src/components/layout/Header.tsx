import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-12 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/hearthome.png"
            alt="AZ Hearts In Homes Logo"
            width={56}
            height={56}
            priority
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-semibold tracking-tight text-stone-900">
              {siteConfig.name}
            </h1>

            <p className="text-xs tracking-wide text-stone-500">
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-orange-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href={siteConfig.cta.href}>
          <Button>
            {siteConfig.cta.title}
          </Button>
        </Link>
      </div>
    </header>
  );
}