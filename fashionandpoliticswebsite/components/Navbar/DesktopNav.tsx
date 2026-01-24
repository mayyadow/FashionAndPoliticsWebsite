"use client";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";

export default function DesktopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon */}
      <div
        className="fixed top-10 left-10 flex flex-col justify-between w-13 h-10 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-1 bg-white rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-white rounded transition-transform duration-300 ${
            isOpen ? "translate-x-40 w-8" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-white rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
      </div>

      {/* Slide-out menu */}
      <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
