"use client";

import { useRef } from "react";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToNextPanel = () => {
    if (!containerRef.current) return;

    const currentScroll = containerRef.current.scrollTop;
    const nextPanel = panelsRef.current.find(
      (panel) => panel && panel.offsetTop > currentScroll + 10,
    );

    if (nextPanel) {
      nextPanel.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* TWO COLUMN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SCROLL SIDE */}
        <div
          ref={containerRef}
          className="relative overflow-y-scroll no-scrollbar scroll-smooth bg-black"
        >
          {/* PANEL 0 — PEOPLE SITTING */}
          <div
            ref={(el) => {
              if (el) panelsRef.current[0] = el;
            }}
            className="relative h-[120vh] w-full"
          >
            <Image
              src="/images/about-page/people-sitting.png"
              alt="people sitting outdoors"
              fill
              className="object-cover"
            />
          </div>

          {/* PANEL 1 — EXEC TEAM */}
          <div
            ref={(el) => {
              if (el) panelsRef.current[1] = el;
            }}
            className="py-16 px-10 bg-[#d7d7d7]"
          >
            <h2 className="text-pink-500 uppercase tracking-wider font-bold text-xl mb-6">
              Executive Team
            </h2>

            <div className="columns-2 gap-6">
              <Image
                src="/images/about-page/olga.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[-2deg] shadow-lg"
              />

              <Image
                src="/images/about-page/fareena.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[2deg] translate-y-3 shadow-lg"
              />

              <Image
                src="/images/about-page/matilda.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[-1deg] translate-y-1 shadow-lg"
              />

              <Image
                src="/images/about-page/katelyn.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[3deg] shadow-lg"
              />
            </div>
          </div>

          {/* PANEL 2 — FINANCE & FUNDRAISING */}
          <div
            ref={(el) => {
              if (el) panelsRef.current[2] = el;
            }}
            className="py-16 px-10 bg-[#d7d7d7]"
          >
            <div className="columns-2 gap-6">
              <Image
                src="/images/about-page/daisy.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[1deg] translate-y-2 shadow-lg"
              />

              <Image
                src="/images/about-page/danny.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[-3deg] translate-y-4 shadow-lg"
              />

              <Image
                src="/images/about-page/kate.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[-3deg] translate-y-4 shadow-lg"
              />
            </div>
          </div>

          {/* PANEL 3 — CREATIVE TEAM */}
          <div
            ref={(el) => {
              if (el) panelsRef.current[3] = el;
            }}
            className="py-16 px-10 bg-[#d7d7d7]"
          >
            <div className="columns-2 gap-6">
              <Image
                src="/images/about-page/yvonne.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[-1deg] translate-y-1 shadow-lg"
              />

              <Image
                src="/images/about-page/andrea.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[2deg] translate-y-3 shadow-lg"
              />

              <Image
                src="/images/about-page/maya-grace.png"
                alt=""
                width={700}
                height={900}
                className="mb-6 rotate-[3deg] translate-y-1 shadow-lg"
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

          {/* ARROW + PROMPT */}
         <button
  onClick={scrollToNextPanel}
  className="absolute top-[65vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center drop-shadow-lg text-white animate-bounce"
>

  <span className="text-5xl">↓</span>
  <span className="text-xs lowercase tracking-wide opacity-70 mt-2">
    scroll to see our executive team
  </span>
</button>

        </div>

        {/* RIGHT STICKY ABOUT-US SIDE */}
<div className="relative p-12 sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
  {/* BACKGROUND IMAGE WRAPPER */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src="/images/about-page/chains.png"
      alt=""
      fill
      className="object-cover"
      sizes="50vw"
    />
  </div>

  {/* FOREGROUND CONTENT */}
  <div className="relative z-10">
    <h1
      className="
        font-[Anton]
        text-[#1c1c1c]
        uppercase
        mb-8
        tracking-tight
        text-[48px]
        sm:text-[64px]
        md:text-[96px]
        lg:text-[120px]
        leading-[0.9]
      "
    >
      ABOUT US
    </h1>

    <div
      className="
        bg-[#f5d9e8]
        p-8
        rounded-lg
        max-w-[80%]
        leading-relaxed
        text-[17px]
        tracking-normal
        text-[#1c1c1c]
        max-h-[55vh]
        overflow-y-auto
      "
      style={{ fontFamily: "HelveticaWorld, Helvetica, Arial, sans-serif" }}
    >
      <p className="mb-5">
        The University of Toronto’s Fashion and Politics Club strives to
        provide a space for peers to explore and engage with the
        intersection of fashion & culture, media, society, and politics.
      </p>

      <p className="mb-5">
        Through our biweekly meetings, we unpack questions such as how
        fashion reflects social change, why trends carry political meaning,
        and what role our clothing plays in shaping identity and power.
      </p>

      <p className="mb-5">
        The ultimate goal is to produce a culminating
        magazine/anthology issue of everyone’s contributions.
      </p>

      <p>
        Interested? Reach out via Instagram @uoftfp 🙂
      </p>
    </div>
  </div>
</div>

      </div>


{/* FULL-WIDTH BOTTOM SECTION — SHORTER + PEOPLE VISIBLE */}
<div className="relative w-screen h-[75vh] bg-black overflow-hidden">
  <Image
    src="/images/about-page/about-bottom.png"
    alt=""
    fill
    className="object-cover object-top"
    sizes="100vw"
  />
</div>


    </div>
  );
}
