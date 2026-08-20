"use client";

import { usePathname } from "next/navigation";

const heroImages: Record<string, string> = {
  "/communities/anthem": "/images/communities/DesertHomes.jpg",
  "/communities/cave-creek": "/images/communities/CaveCreek.jpg",
  "/communities/chandler": "/images/communities/AzHomePic.jpg",
  "/communities/gilbert": "/images/communities/Luxrury.jpg",
  "/communities/glendale": "/images/communities/GlendalePic.jpg",
  "/communities/goodyear": "/images/communities/WM.jpg",
  "/communities/mesa": "/images/communities/MesaSunset.jpg",
  "/communities/peoria": "/images/communities/PeoriaPic.jpg",
  "/communities/queen-creek": "/images/communities/MountainHomes.jpg",
  "/communities/sun-city": "/images/communities/RetirementCommunity.jpg",
  "/communities/sun-city-west": "/images/communities/RetirementCommunity.jpg",
  "/communities/surprise": "/images/communities/SurprisePic.jpg",
  "/communities/tempe": "/images/communities/TempeAsu.jpg",
};

export function CommunityPageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const heroImage = heroImages[pathname];

  return (
    <div className="relative isolate [&>main]:bg-transparent">
      {heroImage && (
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[620px] bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/65" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
