import type { Metadata } from "next";

import { CommunityPageShell } from "@/components/communities/CommunityPageShell";

export const metadata: Metadata = {
  alternates: {
    canonical: "/communities",
  },
};

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CommunityPageShell>{children}</CommunityPageShell>;
}
