import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Darek Dowsett | AZ Hearts In Homes",
  description:
    "Contact Darek Dowsett for help buying or selling a home in the Greater Phoenix area. Get honest guidance and full-service real estate representation from start to finish.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/contact",
    title: "Contact Darek Dowsett | AZ Hearts In Homes",
    description:
      "Contact Darek Dowsett for help buying or selling a home in the Greater Phoenix area. Get honest guidance and full-service real estate representation from start to finish.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [{ url: "/images/hearthome-new.png", width: 512, height: 512, alt: "AZ Hearts In Homes" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}