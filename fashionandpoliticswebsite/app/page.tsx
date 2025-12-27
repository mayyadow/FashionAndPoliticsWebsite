"use client";

import Image from "next/image"; 
import FeaturedCarousel from "@/components/FeaturedCarousel"; 

export default function HomePage() {
  return (
    <div className="relative px-8 py-10 page-transition">
      <section className="grid gap-10 md:grid-cols-2 items-start">
        <div className="relative h-[70vh] ">
      

          <Image 
            src="/images/model2.png"
            alt="Model"
            width={600}
            height={600}
            className="left-0 object-cover object-bottom"
          />
        </div>
        <div className="flex flex-col justify-between h-[70vh]">
          <div>
          <Image
            src="/images/logo.png"
            alt="UofT Fashion and Politics Club Logo"
            width={600}
            height={600}
            className="object-contain"
            />
          </div>

              <div className="mt-12 px-8 justify-center">
                <FeaturedCarousel />
              </div>
            
            </div>
          </section>

  </div>
  )
}