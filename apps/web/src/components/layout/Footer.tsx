import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const IDX_URL =
  "https://homesmart.com/real-estate-agent/HSAZ001/Darek-Dowsett/bc25aac8-ae7c-2f03-4438-5c175f718779";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="AZ Hearts In Homes home"
            >
              <Image
                src="/images/hearthome-new.png"
                alt="AZ Hearts In Homes"
                width={90}
                height={90}
                className="h-20 w-20 object-contain"
              />
            </Link>

            <h3 className="mt-5 text-2xl font-bold text-stone-900">
              AZ Hearts In Homes
            </h3>

            <p className="mt-2 italic text-stone-700">
              Real Estate With Heart
            </p>

            <p className="mt-6 max-w-sm leading-8 text-stone-600">
              Honest guidance, full-service representation, and a commitment
              to helping Arizona buyers and sellers make confident real estate
              decisions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold text-stone-900">
              Explore
            </h4>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Home
              </Link>

              <Link
                href="/buyers"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Buyers
              </Link>

              <Link
                href="/sellers"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Sellers
              </Link>

              <Link
                href="/home-value"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Home Value
              </Link>

              <Link
                href="/communities"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Communities
              </Link>

              <Link
                href="/about"
                className="text-stone-600 transition hover:text-orange-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Contact
              </Link>

              <a
                href={IDX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition hover:text-orange-600"
              >
                Search Homes ↗
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-stone-900">
              Contact
            </h4>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+14807733213"
                className="flex items-center gap-3 text-stone-600 transition hover:text-orange-600"
              >
                <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                <span>(480) 773-3213</span>
              </a>

              <a
                href="mailto:phxrealtordarek@gmail.com"
                className="flex items-center gap-3 text-stone-600 transition hover:text-orange-600"
              >
                <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                <span>phxrealtordarek@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-stone-600">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                <span>
                  Serving the Greater Phoenix Area
                  <br />
                  Arizona
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <a
                href="https://www.instagram.com/phxrealtordarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-stone-700 transition hover:border-orange-500 hover:text-orange-600"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Brokerage / CTA */}
          <div>
            <h4 className="text-lg font-semibold text-stone-900">
              Work With Me
            </h4>

            <p className="mt-6 leading-8 text-stone-600">
              Whether you&apos;re buying or selling, I&apos;ll personally guide
              you through the process from our first conversation through
              closing and beyond.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/buyers"
                className="rounded-full bg-stone-800 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-900"
              >
                I&apos;m Buying a Home
              </Link>

              <Link
                href="/sellers"
                className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-700 transition hover:border-orange-500 hover:text-orange-600"
              >
                I&apos;m Selling My Home
              </Link>

              <Link
                href="/home-value"
                className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-700 transition hover:border-orange-500 hover:text-orange-600"
              >
                Get My Home Value
              </Link>
            </div>

            <div className="mt-8 border-t border-stone-300 pt-7">
              <p className="text-sm leading-6 text-stone-500">
                Proudly affiliated with HomeSmart, serving buyers and sellers
                throughout the Greater Phoenix metropolitan area.
              </p>

              <div className="mt-6">
                <Image
                  src="/images/logos/RealtorEqualOpportunity.png"
                  alt="REALTOR® and Equal Housing Opportunity"
                  width={180}
                  height={80}
                  className="h-auto w-40"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-stone-300 pt-8 text-center text-sm leading-6 text-stone-500">
          <p>
            © {year} AZ Hearts In Homes. All Rights Reserved.
          </p>

          <p className="mt-2">
            REALTOR® is a registered trademark of the National Association of
            REALTORS®.
          </p>
        </div>
      </div>
    </footer>
  );
}