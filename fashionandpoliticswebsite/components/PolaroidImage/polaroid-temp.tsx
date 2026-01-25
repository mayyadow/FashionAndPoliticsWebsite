"use client";

import Image from "next/image";

export default function PolaroidTemp({
  src,
  name,
  role,
}: {
  src: string;
  name: string;
  role: string;
}) {
  return (
    <div className="bg-white p-3 shadow-lg rounded-sm border border-gray-200 max-w-[260px]">
      <div className="w-full aspect-[3/4] relative">
        <Image src={src} alt={name} fill className="object-cover" />
      </div>

      <p className="text-center mt-3 font-semibold tracking-wide text-gray-700 uppercase">
        {name}
      </p>
      <p className="text-center text-sm tracking-tight text-gray-600 uppercase">
        {role}
      </p>
    </div>
  );
}
