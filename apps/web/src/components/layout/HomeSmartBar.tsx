import Image from "next/image";

export function HomeSmartBar() {
  return (
    <div className="sticky top-0 z-[60] bg-black">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-center px-6">
        <Image
          src="/images/homesmart-white.png"
          alt="HomeSmart"
          width={180}
          height={36}
          priority
        />
      </div>
    </div>
  );
}