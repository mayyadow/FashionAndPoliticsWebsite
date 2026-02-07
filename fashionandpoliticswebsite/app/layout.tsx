import type { Metadata } from "next";
import { DM_Sans, Anton } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "UofT Fashion + Politics Club",
  description: "Discussing the intersection of fashion and politics on campus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--grey)] text-[var(--black)] min-h-screen flex flex-col">
        <Navbar />

        {/* Main content fills the viewport */}
        <main className="mb-8">{children}</main>

        {/* Footer scrolls into view */}
        <footer className="flex flex-col justify-center items-center md:mt-60 mb-5 text-xs">
          <div className="md:hidden">instagram @uoftfp</div>
        </footer>
      </body>
    </html>
  );
}
