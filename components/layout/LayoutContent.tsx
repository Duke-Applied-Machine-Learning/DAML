"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { HeroWrapper } from "@/components/layout/HeroWrapper";

type LayoutContentProps = {
  children: React.ReactNode;
};

/**
 * On homepage, wraps Navbar + main in HeroWrapper so the interactive
 * hero background extends behind both. On other pages, renders Navbar + main only.
 */
export function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <HeroWrapper>
        <main className="pt-20">{children}</main>
      </HeroWrapper>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
