"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/projects", label: "Projects" },
  { href: "/students", label: "Team" },
  { href: "/partnerWithUs", label: "Partner With Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled((window.scrollY || window.pageYOffset) > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const transparent = isHome && !isScrolled;

  return (
    <nav
      className={[
        "fixed top-0 left-0 z-40 w-full transition-all duration-300",
        transparent
          ? "bg-transparent border-0 shadow-none"
          : "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(15,23,42,0.08),0_4px_16px_rgba(15,23,42,0.05)]",
      ].join(" ")}
    >
      <div className="container-content flex w-full items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center gap-2.5 shrink-0 -ml-16 hover:opacity-85 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-royal)] rounded-lg"
        >
          {/* Dark/transparent state: white full name logo */}
          <Image
            src="/logos/daml_logo_with_name_white.png"
            alt="Duke Applied Machine Learning"
            width={200}
            height={40}
            className={["h-12 w-auto object-contain transition-opacity duration-300", transparent ? "opacity-100" : "opacity-0 absolute pointer-events-none"].join(" ")}
            priority
          />

          {/* White bg state: dark full name logo */}
          <Image
            src="/logos/daml_logo_with_name.png"
            alt="Duke Applied Machine Learning"
            width={200}
            height={40}
            className={["h-12 w-auto object-contain transition-opacity duration-300", transparent ? "opacity-0 absolute pointer-events-none" : "opacity-100"].join(" ")}
          />
        </Link>

        {/* Desktop nav links */}
        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "nav-link px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2",
                  transparent
                    ? "text-white/90 hover:text-white hover:bg-white/10 focus-visible:ring-white/50"
                    : isActive
                    ? "text-[var(--color-navy)] bg-[var(--color-hatteras)] font-semibold"
                    : "text-slate-600 hover:text-[var(--color-navy)] hover:bg-[var(--color-whisper-gray)] focus-visible:ring-slate-200",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <div className="ml-auto flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2",
                  transparent
                    ? "border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/50"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-300",
                ].join(" ")}
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-8">
              <div className="mb-6 flex items-center gap-2 px-3">
                <Image
                  src="/logos/daml_logo.png"
                  alt="Duke Applied Machine Learning"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-sm font-semibold text-[var(--color-navy)]">Duke AML</span>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={[
                        "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "bg-[var(--color-hatteras)] text-[var(--color-navy)] font-semibold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
