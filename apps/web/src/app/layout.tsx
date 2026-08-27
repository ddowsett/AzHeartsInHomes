import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const siteUrl = "https://azheartsinhomes.com";
const googleAnalyticsId = "G-W6FVNK4T4D";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#real-estate-agent`,
      name: "Darek Dowsett",
      url: siteUrl,
      image: `${siteUrl}/images/hearthome-new.png`,
      logo: `${siteUrl}/images/hearthome-new.png`,
      telephone: "+1-480-773-3213",
      email: "phxrealtordarek@gmail.com",
      description:
        "Full-service real estate representation for buyers and sellers throughout the Greater Phoenix area.",
      priceRange: "$$",
      areaServed: [
        {
          "@type": "City",
          name: "Phoenix",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Scottsdale",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Glendale",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Peoria",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Surprise",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Sun City",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Sun City West",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Goodyear",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Chandler",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Gilbert",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Mesa",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Tempe",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Queen Creek",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Anthem",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
        {
          "@type": "City",
          name: "Cave Creek",
          address: {
            "@type": "PostalAddress",
            addressRegion: "AZ",
            addressCountry: "US",
          },
        },
      ],
      sameAs: [
        "https://www.instagram.com/phxrealtordarek/",
      ],
      memberOf: {
        "@type": "Organization",
        name: "HomeSmart",
      },
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}/#darek-dowsett`,
      name: "Darek Dowsett",
      url: `${siteUrl}/about`,
      jobTitle: "REALTOR®",
      worksFor: {
        "@id": `${siteUrl}/#real-estate-agent`,
      },
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AZ Hearts In Homes",
      description:
        "Real estate services for buyers and sellers throughout the Greater Phoenix area.",
      publisher: {
        "@id": `${siteUrl}/#real-estate-agent`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "AZ Hearts In Homes | Phoenix AZ Real Estate",
    template: "%s | AZ Hearts In Homes",
  },

  description:
    "Darek Dowsett provides full-service real estate representation for buyers and sellers throughout the Greater Phoenix area, including Phoenix, Scottsdale, Glendale, Peoria, Surprise, Sun City, Sun City West, Anthem, and Cave Creek.",

  keywords: [
    "Phoenix AZ Realtor",
    "Phoenix Realtor",
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
    url: siteUrl,
    siteName: "AZ Hearts In Homes",
    title: "AZ Hearts In Homes | Phoenix AZ Real Estate",
    description:
      "Full-service real estate representation throughout the Greater Phoenix area. Real Estate With Heart.",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>

        <Header />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}