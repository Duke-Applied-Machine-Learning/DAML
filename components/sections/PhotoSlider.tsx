"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SLIDES = Array.from({ length: 12 }, (_, i) => ({
  src: `/showcase/${i + 1}.jpeg`,
  alt: "A DAML engineering team presenting at the 2026 showcase",
}));

const AUTOPLAY_MS = 5000;

export default function PhotoSlider({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [timerKey]);

  const go = (index: number) => {
    setCurrent(index);
    setTimerKey((k) => k + 1);
  };

  const prev = () => go((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => go((current + 1) % SLIDES.length);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-slate-100", className)}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority={i === 0}
          />
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous photo"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 text-white font-bold text-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
      >
        <span className="leading-none">←</span>
      </button>

      <button
        type="button"
        aria-label="Next photo"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 text-white font-bold text-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
      >
        <span className="leading-none">→</span>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current
                ? "bg-white w-4"
                : "bg-white/50 w-1.5 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
}
