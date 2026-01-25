"use client";

import Image from "next/image";

export default function TeamSection({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  return (
    <div className="px-6 py-10 space-y-6">
      <h2 className="text-pink-500 uppercase tracking-wider font-bold text-xl">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {images.map((src, i) => (
          <div key={i} className="max-w-[260px]">
            <Image
              src={src}
              alt=""
              width={400}
              height={500}
              className="object-cover rounded-sm shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
