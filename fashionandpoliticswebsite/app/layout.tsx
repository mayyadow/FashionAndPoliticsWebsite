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

        {/* Main content grows to take available space */}
        <main className="flex-1">{children}</main>

        <footer className="flex md:hidden justify-center items-center h-16">
          instagram @uoftfp
        </footer>
      </body>
    </html>
  );
}
