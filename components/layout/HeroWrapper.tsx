"use client";

import { Navbar } from "@/components/layout/Navbar";

type HeroWrapperProps = {
  children: React.ReactNode;
};

/**
 * Wraps Navbar + main content on the homepage. Provides the hero gradient
 * background so the navbar and hero share one surface (no mouse animation).
 */
export function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <div className="hero-wrapper">
      <Navbar />
      {children}
    </div>
  );
}
