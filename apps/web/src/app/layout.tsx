import type { Metadata } from "next";

import "./globals.css";

import { HomeSmartBar } from "@/components/layout/HomeSmartBar";

export const metadata: Metadata = {
  title: "AZ Hearts In Homes",
  description: "Real Estate With Heart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HomeSmartBar />

        {children}
      </body>
    </html>
  );
}