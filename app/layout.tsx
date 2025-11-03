import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav
          className="z-40 w-full bg-white/92 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-4 text-slate-800">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
              style={{ pointerEvents: "auto" }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_20px_35px_rgba(37,99,235,0.25)]">
                <Image
                  src="/daml_logo-2.png"
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
            <div className="flex lg:hidden">
              <details className="relative">
                <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300/70 bg-white/40 text-slate-700 transition-colors duration-200 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/80">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M5 7h14M5 12h14M5 17h14" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200/80 bg-white/95 p-4 text-sm text-slate-700 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex w-full items-center rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/partnerWithUs"
                    className="mt-3 inline-flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-800 shadow-[0_12px_22px_rgba(15,23,42,0.15)] hover:bg-slate-100"
                  >
                    Partner with us
                    <span className="text-slate-500">↗</span>
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
