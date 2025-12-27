import type { Metadata } from "next";
import { DM_Sans, Anton } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
    <html lang="en"
      className={`${dm_sans.variable} ${anton.variable}`} 
    >
      <body
        className="bg-[var(--grey)] text-[var(--black)]">
          <div className="min-h-screen flex">
            <aside className="w-40 border-r border-black flex flex-col justify-between py-50 px-6 text-[1.5rem] tracking-[0.25em]">
              <nav className="space-y-15">
                <Link href="/" className="block hover:text-[var(--pink)]">
                  HOME
                </Link>
                <Link href="/about" className="block hover:text-[var(--pink)]">
                  ABOUT
                </Link>
                <Link href="/blog" className="block hover:text-[var(--pink)]">
                  BLOG
                </Link>
              </nav>

              <div className="text-[0.6rem] uppercase opacity-70">
                UofT<br />
                Fashion + Politics
              </div>
            </aside>

            <main className="flex-1 relative overflow-hidden">
              {children}
            </main>
          </div>
      </body>
    </html>
  );
}
