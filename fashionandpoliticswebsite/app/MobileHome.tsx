// app/home/MobileHome.tsx
"use client";

import Image from "next/image";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function MobileHome() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO IMAGE */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="/images/homepage-girl.png"
          alt="Model"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Logo overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-[220px] h-[220px]">
          <Image
            src="/images/logo.jpg"
            alt="UofT Fashion and Politics Club Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="px-6 py-10 text-center">
        <p className="text-lg">
          University of Toronto Fashion & Politics Club
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="px-6 pb-10">
        <FeaturedCarousel />
      </div>
    </div>
  );
}
