import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://azheartsinhomes.com"),

  title: {
    default: "AZ Hearts In Homes | Phoenix AZ Real Estate",
    template: "%s | AZ Hearts In Homes",
  },

  description:
    "Darek Dowsett provides full-service real estate representation for buyers and sellers throughout the Greater Phoenix area, including Phoenix, Scottsdale, Glendale, Peoria, Surprise, Sun City, Sun City West, Anthem, and Cave Creek.",

  keywords: [
    "Phoenix AZ Realtor",
    "Phoenix real estate",
    "Phoenix homes for sale",
    "Arizona Realtor",
    "Greater Phoenix real estate",
    "North Phoenix Realtor",
    "Sun City Realtor",
    "Sun City West Realtor",
    "Peoria AZ Realtor",
    "Surprise AZ Realtor",
    "Glendale AZ Realtor",
    "Scottsdale AZ Realtor",
    "Anthem AZ Realtor",
    "Cave Creek Realtor",
  ],

  authors: [
    {
      name: "Darek Dowsett",
    },
  ],

  creator: "Darek Dowsett",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azheartsinhomes.com",
    siteName: "AZ Hearts In Homes",
    title: "AZ Hearts In Homes | Phoenix AZ Real Estate",
    description:
      "Full-service real estate representation for buyers and sellers throughout the Greater Phoenix area. Real Estate With Heart.",
    images: [
      {
        url: "/images/hearthome-new.png",
        width: 512,
        height: 512,
        alt: "AZ Hearts In Homes",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}