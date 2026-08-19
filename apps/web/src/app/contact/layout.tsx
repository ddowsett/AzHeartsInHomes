import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Darek Dowsett | AZ Hearts In Homes",
  description:
    "Contact Darek Dowsett for help buying or selling a home in the Greater Phoenix area. Get honest guidance and full-service real estate representation from start to finish.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}