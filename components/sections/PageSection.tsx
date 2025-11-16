"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionBackground, SectionPadding, SECTION_PADDING } from "@/lib/design-system";
import { DecorativeAccentWrapper } from "@/lib/decorative-accents";

interface PageSectionProps {
  children: ReactNode;
  background?: SectionBackground;
  padding?: SectionPadding | "hero" | "standard";
  className?: string;
  showSeparator?: boolean;
  decorativeAccent?: "dot-grid" | "geometric-lines" | "gradient-orb" | "slanted-divider" | "none";
  accentIntensity?: "subtle" | "normal";
}

/**
 * PageSection - Standardized section wrapper component
 * 
 * Provides consistent section structure with:
 * - Standardized padding (Hero: 160px top / 120px bottom, Standard: 120px top / 80px bottom)
 * - Background options (light/dark/gradient)
 * - Visual separators between sections
 * - Decorative accent options
 * - Consistent spacing
 * 
 * @example
 * <PageSection background="light" padding="standard" decorativeAccent="dot-grid">
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </PageSection>
 */
export default function PageSection({
  children,
  background = "light",
  padding = "standard",
  className = "",
  showSeparator = true,
  decorativeAccent = "none",
  accentIntensity = "subtle",
}: PageSectionProps) {
  const backgroundStyles = {
    light: "bg-white",
    dark: "bg-gradient-to-br from-[#040b1f] via-[#0b1f3d] to-[#123263] text-slate-50",
    gradient: "bg-gradient-to-br from-[rgba(8,18,49,1)] via-[rgba(30,41,59,0.95)] to-[rgba(37,99,235,0.9)] text-slate-50",
  };

  // New spacing rules: Hero sections get 160px top / 120px bottom, Standard get 120px top / 80px bottom
  const paddingStyles: Record<string, string> = {
    sm: "py-20 px-[6vw]",
    md: "py-[120px] px-[6vw]",
    lg: "py-[160px] px-[6vw]",
    hero: "pt-[160px] pb-[120px] px-[6vw]",
    standard: "pt-[120px] pb-[80px] px-[6vw]",
  };

  const separatorGradient = background === "light" 
    ? "bg-gradient-to-r from-transparent via-slate-200 to-transparent"
    : "bg-gradient-to-r from-transparent via-blue-400/30 to-transparent";

  return (
    <section className={cn("relative overflow-visible", backgroundStyles[background], paddingStyles[padding] || paddingStyles.standard, className)}>
      {showSeparator && (
        <div className={cn("absolute top-0 left-0 right-0 h-px", separatorGradient)} />
      )}
      <DecorativeAccentWrapper
        accent={decorativeAccent}
        accentIntensity={accentIntensity}
      >
        {children}
      </DecorativeAccentWrapper>
    </section>
  );
}

