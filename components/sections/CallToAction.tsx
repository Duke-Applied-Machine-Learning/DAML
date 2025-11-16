"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface CallToActionButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface CallToActionProps {
  title: string;
  description: string;
  primaryButton: CallToActionButton;
  secondaryButton: CallToActionButton;
  backgroundColor?: string;
  maxWidth?: string;
}

export default function CallToAction({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor = "bg-gradient-to-br from-[#040c24] to-[#0b2f5c]",
  maxWidth = "900px",
}: CallToActionProps) {
  return (
    <section className={`py-[68px] px-[6vw] ${backgroundColor} text-white`}>
      <div className="mx-auto grid gap-[18px] text-center" style={{ maxWidth }}>
        <h2 className="text-[30px] font-bold m-0">{title}</h2>
        <p className="text-[17px] leading-[1.7] text-slate-200/85">
          {description}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild={!!primaryButton.href}
            className="bg-white text-blue-700 rounded-full px-6 py-6 font-semibold hover:bg-white/90"
            onClick={primaryButton.onClick}
          >
            {primaryButton.href ? (
              <a href={primaryButton.href}>
                {primaryButton.text}
              </a>
            ) : (
              <span>
                {primaryButton.text}
              </span>
            )}
          </Button>
          <Button
            asChild={!!secondaryButton.href}
            variant="outline"
            className="bg-white/12 border-white/35 rounded-full px-6 py-6 font-semibold text-white hover:bg-white/20 hover:text-white"
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.href ? (
              <a href={secondaryButton.href}>
                {secondaryButton.text}
              </a>
            ) : (
              <span>
                {secondaryButton.text}
              </span>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}

