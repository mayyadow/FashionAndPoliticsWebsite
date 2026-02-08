"use client";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="flex items-center px-4 font-helvetica bg-[#d2d2d2]">
      {/* Monogram on the left */}
      <Link href="/">
        <Image
          src="/images/monogram.png"
          alt="FP monogram"
          width={70}
          height={70}
        />
      </Link>

      {/* Links spaced evenly */}
      <div className="flex-1 flex mx-9 justify-center">
        <Link href="/" className="hover:text-[#FF1FA9] active:text-[#FF1FA9]">
          HOME
        </Link>
        <Link
          href="/about"
          className="ml-20 hover:text-[#FF1FA9] active:text-[#FF1FA9]"
        >
          ABOUT
        </Link>
        <Link
          href="/blog"
          className="ml-20 hover:text-[#FF1FA9] active:text-[#FF1FA9]"
        >
          BLOG
        </Link>
      </div>
    </nav>
  );
}
