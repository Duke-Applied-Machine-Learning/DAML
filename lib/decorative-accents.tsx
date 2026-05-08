"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Decorative Visual Accents System
 * 
 * Provides utility functions and React components for subtle ML-themed
 * decorative visuals used throughout the site.
 */

/**
 * Dot Grid Background Component
 * Creates a faint dot grid pattern, ML-themed
 */
interface DotGridProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "subtle" | "normal";
  size?: number;
  color?: string;
}

export function DotGrid({
  className,
  intensity = "subtle",
  size = 24,
  color = "rgba(0, 83, 155, 0.15)",
  ...props
}: DotGridProps) {
  const opacity = intensity === "subtle" ? 0.07 : 0.13;
  const dotColor = color.replace(/[\d.]+\)$/, `${opacity})`);

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: "0 0, 12px 12px",
      }}
      {...props}
    />
  );
}

/**
 * Geometric Lines Component
 * Creates geometric line patterns (ML/AI themed)
 */
interface GeometricLinesProps extends React.HTMLAttributes<HTMLDivElement> {
  angle?: number;
  spacing?: number;
  opacity?: number;
}

export function GeometricLines({
  className,
  angle = 45,
  spacing = 40,
  opacity = 0.1,
  ...props
}: GeometricLinesProps) {
  const royalColor = `rgba(0, 83, 155, ${opacity})`;
  const copperColor = `rgba(200, 78, 0, ${opacity * 0.6})`;

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `
          linear-gradient(${angle}deg, ${royalColor} 1px, transparent 1px),
          linear-gradient(${-angle}deg, ${copperColor} 1px, transparent 1px)
        `,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      {...props}
    />
  );
}

/**
 * Gradient Mesh Orb Component
 * Creates gradient mesh orbs for visual interest
 */
interface GradientMeshOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "left" | "right" | "center";
  size?: "sm" | "md" | "lg";
  opacity?: number;
}

export function GradientMeshOrb({
  className,
  position = "center",
  size = "md",
  opacity = 0.2,
  ...props
}: GradientMeshOrbProps) {
  const sizeMap = {
    sm: "200px",
    md: "400px",
    lg: "600px",
  };

  const positionMap = {
    left: "20% 50%",
    center: "50% 50%",
    right: "80% 50%",
  };

  const royalColor = `rgba(0, 83, 155, ${opacity})`;
  const copperColor = `rgba(200, 78, 0, ${opacity * 0.5})`;

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        background: `
          radial-gradient(circle at ${positionMap[position]}, ${royalColor} 0%, transparent 50%),
          radial-gradient(circle at ${position === "left" ? "80%" : position === "right" ? "20%" : "70%"} 50%, ${copperColor} 0%, transparent 50%)
        `,
      }}
      {...props}
    />
  );
}

/**
 * Slanted Divider Component
 * Creates a minimal slanted divider line
 */
interface SlantedDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  angle?: number;
  color?: string;
  thickness?: number;
}

export function SlantedDivider({
  className,
  angle = -15,
  color = "rgba(0, 83, 155, 0.2)",
  thickness = 1,
  ...props
}: SlantedDividerProps) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={{ height: `${thickness}px` }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          transform: `skewX(${angle}deg)`,
        }}
      />
    </div>
  );
}

/**
 * Utility function to get decorative accent class names
 */
export function getDecorativeAccentClass(type: "dot-grid" | "geometric-lines" | "gradient-orb" | "slanted-divider"): string {
  const classes = {
    "dot-grid": "dot-grid-subtle",
    "geometric-lines": "geometric-lines",
    "gradient-orb": "gradient-orb",
    "slanted-divider": "slanted-divider",
  };
  return classes[type];
}

/**
 * Decorative Accent Wrapper
 * Wraps content with optional decorative accents
 */
interface DecorativeAccentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "dot-grid" | "geometric-lines" | "gradient-orb" | "slanted-divider" | "none";
  accentIntensity?: "subtle" | "normal";
}

export function DecorativeAccentWrapper({
  children,
  className,
  accent = "none",
  accentIntensity = "subtle",
  ...props
}: DecorativeAccentWrapperProps) {
  return (
    <div className={cn("relative overflow-visible", className)} {...props}>
      {accent === "dot-grid" && <DotGrid intensity={accentIntensity} />}
      {accent === "geometric-lines" && <GeometricLines opacity={accentIntensity === "subtle" ? 0.08 : 0.1} />}
      {accent === "gradient-orb" && <GradientMeshOrb opacity={accentIntensity === "subtle" ? 0.15 : 0.2} />}
      {accent === "slanted-divider" && <SlantedDivider />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

