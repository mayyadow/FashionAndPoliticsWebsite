// app/about/AboutResponsive.tsx
"use client";

import { useEffect, useState } from "react";
import DesktopAbout from "./about/DesktopAbout";
import MobileAbout from "./about/MobileAbout";

export default function AboutResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileAbout /> : <DesktopAbout />;
}
