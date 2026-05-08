"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * On the homepage, set body background to the hero gradient so the top of the
 * page (behind the transparent nav) is blue, not white.
 */
export function BodyBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const body = document.body;
    if (isHome) {
      body.style.background = "var(--hero-gradient)";
    } else {
      body.style.background = "";
    }
    return () => {
      body.style.background = "";
    };
  }, [isHome]);

  return null;
}
