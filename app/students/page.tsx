"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers, type Subsection } from "../../data/teamMembers";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const SUBSECTIONS: { value: Subsection; label: string }[] = [
  { value: "PMs", label: "PMs" },
  // { value: "Data Scientists", label: "Data Scientists" },
  { value: "Operations", label: "Operations" },
];

export default function Students() {
  const [activeSubsection, setActiveSubsection] = useState<Subsection>("PMs");

  const filteredMembers = teamMembers.filter((m) => m.subsection === activeSubsection);
  const executiveMembers = teamMembers.filter((m) => m.subsection === "Executive");

  return (
    <div className="font-sans min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section
        className="hero-internal relative overflow-hidden"
        style={{ minHeight: '539px' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/team_photo.jpeg"
            alt="DAML team"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-content relative z-10 grid gap-2 text-left">
          <p className="kicker mb-3">People</p>
          <h1 className="h1 m-0">The team</h1>
          <p className="hero-sub m-0">The students behind Duke Applied Machine Learning</p>
        </div>
      </section>

      {/* Filterable subsection: PMs / Data Scientists / Operations */}
      <section className="section section-lg bg-surface-base">
        <div className="container-content mx-auto">
          <p className="kicker mb-3">Members</p>
          <h2 className="section-heading text-slate-900 section-title-spacing">Our members</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {SUBSECTIONS.map(({ value, label }) => (
              <Button
                key={value}
                variant="outline"
                className={cn(
                  "rounded-full font-medium transition-colors duration-200",
                  activeSubsection === value
                    ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)] hover:bg-[var(--color-navy)]"
                    : "border-slate-300 text-slate-600 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]"
                )}
                onClick={() => setActiveSubsection(value)}
              >
                {label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
            {filteredMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div className="w-full">
                  <div
                    className="relative w-full bg-[var(--color-hatteras)] rounded-xl overflow-hidden"
                    style={{ paddingBottom: "100%" }}
                  >
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-medium">
                        Photo
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-semibold text-slate-900 leading-tight">{member.name}</h3>
                  {member.projectStack && (
                    <p className="meta mt-1 text-[var(--color-copper)] font-medium">{member.projectStack}</p>
                  )}
                  <p className="meta mt-0.5 text-slate-500">{member.major} | {member.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team (static) */}
      <section className="section section-lg bg-white border-t border-slate-200/70">
        <div className="container-content mx-auto">
          <p className="kicker mb-3">Leadership</p>
          <h2 className="section-heading text-slate-900 section-title-spacing">Executive Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
            {executiveMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div className="w-full">
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                    {member.imageUrl && (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-semibold text-slate-900 leading-tight">{member.name}</h3>
                  {member.projectStack && (
                    <p className="meta mt-1 text-[var(--color-copper)] font-medium">{member.projectStack}</p>
                  )}
                  <p className="meta mt-0.5 text-slate-500">{member.major} | {member.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Partner or mentor with DAML"
        description="Whether you want to scope a project, give a workshop, or connect talent with opportunities, reach out us so that we can connect you to the right team member."
        primaryButton={{
          text: "Contact Us",
          href: "mailto:dukeappliedmachinelearning@gmail.com",
        }}
        secondaryButton={{
          text: "Explore consulting",
          href: "/partnerWithUs",
        }}
      />
      <Footer />
    </div>
  );
}
