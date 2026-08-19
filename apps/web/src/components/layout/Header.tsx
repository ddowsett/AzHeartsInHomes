import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#fcfaf5]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-4"
          aria-label="AZ Hearts In Homes home"
        >
          <Image
            src="/images/hearthome-new.png"
            alt=""
            width={52}
            height={52}
            priority
            className="h-12 w-12 object-contain"
          />

          <div className="leading-tight">
            <div className="font-serif text-[17px] font-bold tracking-wide text-slate-800">
              AZ Hearts In Homes
            </div>

            <div className="mt-1 font-serif text-[12px] italic text-slate-500">
              Real Estate With Heart
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
            Home
          </Link>

          <Link
            href="/buyers"
            className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
            Buyers
          </Link>

          <Link
            href="/sellers"
            className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
            Sellers
          </Link>

          <Link
          href="/home-value"
          className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
          Home Value
          </Link>

          <Link
            href="/communities"
            className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
            Communities
          </Link>

          <Link
            href="/about"
            className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-serif text-[13px] text-slate-700 transition hover:text-orange-600"
          >
            Contact
          </Link>

          <Link href="/buyers">
            <Button
              size="sm"
              className="bg-slate-700 px-4 font-serif text-xs hover:bg-slate-800"
            >
              Search Homes
            </Button>
          </Link>
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-slate-700 font-serif text-xs hover:bg-slate-800"
            >
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}