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
      <body className="bg-[var(--grey)] text-[var(--black)] m-0 p-0">
        {/* Navbar removed from layout flow */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
