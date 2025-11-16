"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { CARD_STYLES } from "@/lib/design-system";
import { useImageZoom } from "@/lib/animations";

/**
 * ImageWrapper Component
 * 
 * Unified image component with consistent styling:
 * - Cool-tone filter
 * - Optional monochrome-blue tint for team photos
 * - Gradient overlay options
 * - Consistent border radius
 * - Hover zoom effect
 */

interface ImageWrapperProps extends Omit<ImageProps, "className"> {
  className?: string;
  variant?: "default" | "cool-tone" | "monochrome-blue" | "team-photo";
  showGradientOverlay?: boolean;
  enableZoom?: boolean;
  radius?: string;
}

export function ImageWrapper({
  className,
  variant = "default",
  showGradientOverlay = false,
  enableZoom = true,
  radius,
  fill,
  ...imageProps
}: ImageWrapperProps) {
  const { zoomStyle, handleMouseEnter, handleMouseLeave } = useImageZoom();

  const variantClasses = {
    default: "",
    "cool-tone": "image-cool-tone",
    "monochrome-blue": "image-monochrome-blue",
    "team-photo": "image-monochrome-blue image-cool-tone",
  };

  const borderRadius = radius || CARD_STYLES.radius;

  // If fill is used, the wrapper needs to be the positioned container
  if (fill) {
    // For fill images, we need a relative container for the Image component
    // The outer div handles positioning (absolute/relative from className or default absolute inset-0)
    // The inner div is always relative for the Image's fill prop
    const hasAbsolute = className?.includes("absolute");
    const hasInset = className?.includes("inset");
    const needsAbsolute = !hasAbsolute && !hasInset;
    
    return (
      <div
        className={cn(
          "overflow-hidden",
          variantClasses[variant],
          showGradientOverlay && "image-gradient-overlay",
          needsAbsolute && "absolute inset-0",
          className
        )}
        style={{
          borderRadius,
          ...(enableZoom ? zoomStyle : {}),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full">
          <Image
            {...imageProps}
            fill
            className="object-cover"
            style={{
              borderRadius,
            }}
          />
        </div>
      </div>
    );
  }

  // For non-fill images, use regular layout
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variantClasses[variant],
        showGradientOverlay && "image-gradient-overlay",
        className
      )}
      style={{
        borderRadius,
        ...(enableZoom ? zoomStyle : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        {...imageProps}
        className="object-cover w-full h-full"
        style={{
          borderRadius,
        }}
      />
    </div>
  );
}

/**
 * TeamPhoto Component
 * Convenience component for team member photos with monochrome-blue tint
 */
interface TeamPhotoProps extends Omit<ImageWrapperProps, "variant"> {
  size?: "sm" | "md" | "lg";
}

export function TeamPhoto({ size = "md", className, ...props }: TeamPhotoProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  return (
    <ImageWrapper
      variant="team-photo"
      className={cn(sizeClasses[size], "rounded-full", className)}
      radius="50%"
      {...props}
    />
  );
}

