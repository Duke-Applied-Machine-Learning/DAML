"use client";

import Footer from "@/components/layout/Footer";
import PortfolioItem from "@/components/sections/PortfolioItem";
import DevelopmentBanner from "@/components/ui/development-banner";

export default function PortfolioPage() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#f7f9ff] via-white to-[#eef2ff] min-h-screen text-slate-900">
      <DevelopmentBanner />
      <section className="hero-section text-white">
        <div className="grid gap-7 text-left">
          <h1 className="hero-heading m-0">
            Portfolio
          </h1>
          <p className="hero-subheading">
            Explore our creative work and projects.
          </p>
        </div>
      </section>

      <section className="w-full py-[90px] px-[6vw] grid gap-11">
        <PortfolioItem
          title="Skrift"
          description="An AI-powered writing assistant providing real-time content feedback as you write. Analyzes clarity, structure, tone, argument strength, and custom criteria to help improve writing quality."
          iframeSrc="https://www.skrift.it"
          iframeTitle="Skrift.it Portfolio"
          iframeHeight={600}
        />
      </section>

      <Footer />
    </div>
  );
}
