import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact a Phoenix AZ Realtor | AZ Hearts In Homes",
  description:
    "Contact REALTOR® Darek Dowsett about buying or selling a home in Phoenix and the Greater Phoenix area. Get personal, full-service real estate guidance from first conversation through closing.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://azheartsinhomes.com/contact",
    title: "Contact a Phoenix AZ Realtor | AZ Hearts In Homes",
    description:
      "Talk with Darek Dowsett about buying, selling, or your next real estate decision in the Greater Phoenix area.",
    siteName: "AZ Hearts In Homes",
    locale: "en_US",
    images: [
      {
        url: "/images/hearthome-new.png",
        width: 512,
        height: 512,
        alt: "AZ Hearts In Homes",
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
