// app/about/MobileAbout.tsx
"use client";

import Image from "next/image";

export default function MobileAbout() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO IMAGE */}
      <div className="relative h-[70vh] w-full flex items-end">
        {/* Background image */}
        <Image
          src="/images/about-page/people-sitting.png"
          alt="people sitting outdoors"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay (behind text) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0" />

        {/* Text overlay */}
        <div className="relative z-10 px-6 pb-10">
          <h1
            className="
              font-[Anton]
              text-white
              uppercase
              tracking-tight
              text-[56px]
              leading-[0.95]
            "
          >
            ABOUT US
          </h1>
        </div>
      </div>

      {/* ABOUT TEXT SECTION */}
      <div className="relative px-6 py-10 bg-[#d7d7d7]">
        {/* CHAINS BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about-page/chains2.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10">
          <div
            className="bg-[#f5d9e8] p-6 rounded-lg text-[15px] leading-relaxed text-[#1c1c1c]"
            style={{
              fontFamily: "HelveticaWorld, Helvetica, Arial, sans-serif",
            }}
          >
            <p className="mb-4">
              The University of Toronto’s Fashion and Politics Club strives to
              provide a space for peers to explore and engage with the
              intersection of fashion & culture, media, society, and politics.
            </p>

            <p className="mb-4">
              Through our biweekly meetings, we unpack questions such as how
              fashion reflects social change, why trends carry political
              meaning, and what role our clothing plays in shaping identity and
              power.
            </p>

            <p className="mb-4">
              The ultimate goal is to produce a culminating
              magazine/anthology issue of everyone’s contributions.
            </p>

            <p>Interested? Reach out via Instagram @uoftfp 🙂</p>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="bg-[#d7d7d7] px-4 py-12">
        <h2 className="text-pink-500 uppercase tracking-wider font-bold text-lg mb-6">
          Executive Team
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <Image
            src="/images/about-page/olga.png"
            alt="Olga"
            width={700}
            height={900}
          />
          <Image
            src="/images/about-page/fareena.png"
            alt="Fareena"
            width={700}
            height={900}
          />
          <Image
            src="/images/about-page/matilda.png"
            alt="Matilda"
            width={700}
            height={900}
          />
          <Image
            src="/images/about-page/katelyn.png"
            alt="Katelyn"
            width={700}
            height={900}
          />
          <Image
            src="/images/about-page/matilda.png"
            alt="Matilda"
            width={700}
            height={900}
          />
          <Image
            src="/images/about-page/maya-grace.png"
            alt="Maya-Grace"
            width={700}
            height={900}
          />

          <Image
            src="/images/about-page/maya-grace-text.png"
            alt=""
            width={700}
            height={900}
            className="mb-6"
          />
        </div>
      </div>
    </div>
  );
}
