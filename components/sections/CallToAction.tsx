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
  backgroundColor = "bg-brand-navy",
  maxWidth = "900px",
}: CallToActionProps) {
  return (
    <section className={`section on-dark cta-mesh ${backgroundColor}`}>
      <div
        className="container-content mx-auto grid gap-5 text-center animate-fade-up"
        style={{ maxWidth }}
      >
        <h2 className="h2 m-0">{title}</h2>
        <p className="hero-sub m-0 opacity-90">{description}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild={!!primaryButton.href}
            variant="cta"
            onClick={primaryButton.onClick}
          >
            {primaryButton.href ? (
              <a href={primaryButton.href}>{primaryButton.text}</a>
            ) : (
              <span>{primaryButton.text}</span>
            )}
          </Button>
          <Button
            asChild={!!secondaryButton.href}
            variant="cta-outline-dark"
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.href ? (
              <a href={secondaryButton.href}>{secondaryButton.text}</a>
            ) : (
              <span>{secondaryButton.text}</span>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}

