"use client";

import Image from "next/image"; 
import FeaturedCarousel from "@/components/FeaturedCarousel"; 

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative h-[70vh] bg-[#E9E9E9E9]">
        <div className="absolute inset-8 border border-black"/>

          <Image 
            src="/images/model1.jpg"
            alt="Model"
            width={380}
            height={520}
            className="absolute top-24 right-12 object-cover"
          />
      </section>

    <div className="mt-12 px-8">
      <FeaturedCarousel />
    </div>
  </div>
  )
}