import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duke Applied Machine Learning",
  description:
    "Discover Duke Applied Machine Learning’s mission, training pathways, and student-led partnerships.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/education", label: "Training" },
  { href: "/students", label: "Team" },
  { href: "/partnerWithUs", label: "Partner With Us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <nav className="sticky top-0 z-40 w-full bg-white/92 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-4 text-slate-800">
            <Link
              href="/"
              className="pointer-events-auto flex items-center gap-3 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_20px_35px_rgba(37,99,235,0.25)]">
                <Image
                  src="/logos/daml_logo.png"
                  alt="Duke Applied Machine Learning logo"
                  width={64}
                  height={64}
                  priority
                />
              </div>
            </Link>
            <div className="ml-auto hidden items-center justify-end gap-7 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-6 py-3 text-base font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-900/8 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="ml-auto flex lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300/70 bg-white/40 text-slate-700 transition-colors duration-200 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/80"
                    aria-label="Toggle menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/partnerWithUs"
                      className="mt-2 inline-flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 shadow-[0_12px_22px_rgba(15,23,42,0.15)] transition-colors hover:bg-slate-100"
                    >
                      Partner with us
                      <span className="text-slate-500">↗</span>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
