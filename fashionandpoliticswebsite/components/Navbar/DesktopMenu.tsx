"use client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function DesktopMenu({ isOpen, setIsOpen }: Props) {
  return (
    <>
      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#d2d2d2] text-[#1c1c1c] shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-20 gap-13 text-lg">
          <Link href="/">
            <Image
              src="/images/monogram.png"
              alt="FP monogram"
              width={150}
              height={150}
            />
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF1FA9]"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF1FA9]"
          >
            ABOUT
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF1FA9]"
          >
            BLOG
          </Link>
        </div>
        <p className="mt-60 mx-30 flex items-center justify-center font-helvetica text-xs">
          UOFT FASHION &amp; POLITICS
        </p>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed z-30" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
