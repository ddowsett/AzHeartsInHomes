import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold">
              {siteConfig.name}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Navigation
            </h4>

            <div className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground transition-colors hover:text-orange-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Contact
            </h4>

            <p className="leading-7 text-muted-foreground">
              Serving buyers and sellers throughout the Greater Phoenix area.
            </p>
          </div>

        </div>

        <div className="mt-16 border-t pt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}