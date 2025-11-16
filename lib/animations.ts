"use client";

import { useState } from "react";

/**
 * Hook for image zoom effect on hover
 * Returns style object and event handlers for zoom animation
 */
export function useImageZoom() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zoomStyle = isHovered
    ? {
        transform: "scale(1.05)",
        transition: "transform 0.3s ease-in-out",
      }
    : {
        transform: "scale(1)",
        transition: "transform 0.3s ease-in-out",
      };

  return {
    zoomStyle,
    handleMouseEnter,
    handleMouseLeave,
  };
}

