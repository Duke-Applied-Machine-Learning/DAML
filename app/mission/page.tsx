"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Brain, Server, Database, ClipboardList, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

const missionPhases = [
  {
    caption: "Planning Phase",
    title: "Project Proposal",
    description:
      "Product Managers/ML Consultants discuss project requirements, develop plans, and ensemble a DAML engineer team.",
    accent: "#38bdf8",
  },
  {
    caption: "R&D Sprints",
    title: "Exploratory Data Analysis",
    description:
      "Our team extracts data for EDA and training/evaluating models, documenting the methodology.",
    accent: "#f97316",
  },
  {
    caption: "Reports",
    title: "Model Prototype",
    description:
      "Best performing model is presented to clients, where we begin scaling and retraining it into deployment.",
    accent: "#a855f7",
  },
  {
    caption: "Launch & Impact",
    title: "Solutions deployed",
    description:
      "We hand over repositories, training artifacts, and user guides outlining next steps",
    accent: "#22d3ee",
  },
];

const partnershipPillars = [
  {
    label: "DAML Teams",
    detail:
      "Each partner client project has a DAML team working through all phases of a ML project.",
  },
  {
    label: "Campus Outreach",
    detail:
      "We are glad to help partners advertise opportunities through our newsletter of 700+ recipiets, general body meetings, and career center fairs.",
  },
  {
    label: "Curriculum Integration",
    detail:
      "Option to integrate partner resources with our education initiatives to stay up to date with real-world applications.",
  },
  {
    label: "Guest Speaker Events",
    detail:
      "We provide Partners with outreach initiatives via our newsletter + guest speaker GBMs within our club and partnering organizations.",
  },
];

const engagementFlow = [
  {
    stage: "New Member",
    focus: 
      "Join DAML and access our community, resources, and introductory workshops to build foundational ML skills.",
    icon: User,
    badge: "Entry",
  },
  {
    stage: "AI Training Program (AITP)",
    focus:
      "An 8-week program open to all covering exploratory data analysis, model training, and evaluation techniques.",
    icon: Brain,
    badge: "Foundation",
  },
  {
    stage: "DevOps & Client Projects",
    focus:
      "Cloud computing, containerization, and deployment to scale models, while working on our client/internal projects.",
    icon: Server,
    badge: "Infrastructure",
  },
  {
    stage: "Project Management",
    focus:
      "Lead client projects from conception to delivery, managing teams and ensuring successful outcomes.",
    icon: ClipboardList,
    badge: "Leadership",
  },
  {
    stage: "Division Lead",
    focus:
      "Oversee divisions, mentor members, and drive strategic innovation across multiple client engagements.",
    icon: Crown,
    badge: "Executive",
  }
];

export default function MissionPage() {
  const MotionCard = motion(Card);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const stepsCount = engagementFlow.length;

  return (
    <div className="font-sans bg-gradient-to-b from-[#f7f9ff] via-white to-[#eef2ff] min-h-screen text-slate-900">
      <section className="hero-section text-white">
        <div className="grid gap-7 text-left">
          <h1 className="hero-heading m-0">
            About Us
          </h1>
        </div>
      </section>

      <section className="relative py-15 sm:py-28 bg-gradient-to-br from-[#f4f7ff] via-[#e8f1ff] to-[#fdfbff] overflow-visible">
        <div className="mx-auto max-w-[1370px] px-6 sm:px-8 xl:px-12">

          {/* Header + Content Container */}
          <div className="flex flex-col gap-8 max-w-[800px]">

            {/* Title */}
            <h2 className="text-[42px] font-bold text-slate-900 leading-[1.15] m-0">
              Mission Statement
            </h2>

            {/* Main paragraph */}
            <p className="text-[20px] text-slate-700 leading-[1.75]">
              We're an inclusive student-led organization dedicated to cultivating 
              and accelerating student talent through education initiatives and 
              collaborative real-world ML projects.
            </p>

            {/* Subtext */}
            <p className="text-[18px] text-slate-700 leading-[1.7]">
              Are you a student interested in joining DAML?
            </p>

            {/* CTA Button */}
            <Button
              aria-label="Join our mailing list"
              className="cta-button whitespace-nowrap py-7 px-10 rounded-full bg-blue-600 text-white font-semibold text-base shadow-[0_18px_40px_rgba(2,15,42,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,15,42,0.35)] transition-all duration-300 w-fit"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform?usp=dialog"
                  );
                }
              }}
            >
              Join our mailing list
            </Button>

          </div>
        </div>
      </section>


      <section className="relative py-20 sm:py-28 bg-white overflow-y-visible">
        <div className="mx-auto max-w-[110rem] px-6 sm:px-8 xl:px-12 overflow-y-visible">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Our members' learning progression
            </h2>
          </div>
          {/* Timeline bar (desktop) */}
          <div className="relative hidden lg:flex justify-between items-start mt-8 mb-6 px-2">
            {/* Base line */}
            <div 
              className="absolute top-4 h-0.5 bg-slate-200" 
               style={{
                  left: `calc((100% / ${stepsCount}) / 2)`,
                  right: `calc((100% / ${stepsCount}) / 2)`,
                }}
            />
            {/* Line from left edge to first node - always blue */}
            {engagementFlow.map((step, idx) => {
              // Use hoveredIndex to determine progress state
              const isCompleted = hoveredIndex !== null ? idx < hoveredIndex : idx < 2;
              const isCurrent = hoveredIndex !== null ? idx === hoveredIndex : idx === 2;
              const isPending = !isCompleted && !isCurrent;
              
              // Build node classes - center node on line (line center is at top-4 + 0.125rem, node center should match)
              let nodeClasses = "relative z-10 mx-auto h-4 w-4 rounded-full border-2 transition-all duration-500 -translate-y-1/2 top-[calc(1rem+0.125rem)]";
              if (isCompleted) {
                nodeClasses += " border-sky-500 bg-sky-500";
              } else if (isCurrent) {
                nodeClasses += " border-sky-600 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.22)]";
              } else {
                nodeClasses += " border-slate-300 bg-slate-50";
              }

              return (
                <div key={step.stage} className="relative flex-1 text-center">
                  {/* Completed segment line - connects previous node to current */}
                  {isCompleted && idx > 0 && (
                    <div className="absolute left-[-50%] right-[50%] top-4 h-0.5 bg-sky-500 z-0 transition-all duration-500" />
                  )}
                  {/* Current segment line - connects previous completed to current */}
                  {isCurrent && idx > 0 && (
                    <div className="absolute left-[-50%] right-[50%] top-4 h-0.5 bg-sky-500 z-0 transition-all duration-500" />
                  )}
                  {/* Node */}
                  <div className={nodeClasses} />
                  {/* Label */}
                  <div className="mt-6 text-xs font-semibold tracking-tight text-slate-800 leading-tight px-1">
                    {step.stage}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cards container */}
           <div
              className="relative mt-12 flex gap-6 overflow-x-auto overflow-y-visible pt-6 pb-12 lg:mt-10 lg:grid lg:gap-8 xl:gap-10 lg:px-6 xl:px-8 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent]"
              style={{ gridTemplateColumns: `repeat(${stepsCount}, minmax(0, 1fr))` }}
            >
            {engagementFlow.map((step, i) => {
              const Icon = step.icon;
              const isHovered = hoveredIndex === i;
              return (
                <MotionCard
                  key={step.stage}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={`relative flex-1 min-w-[280px] sm:min-w-[300px] lg:min-w-0 lg:w-auto cursor-default rounded-2xl border transition-all duration-[400ms] backdrop-blur-sm snap-center shrink-0 ${
                    isHovered
                      ? "border-sky-400 shadow-lg shadow-sky-200/50 bg-gradient-to-b from-sky-100/90 to-indigo-100/60 dark:from-slate-800/80 dark:to-slate-900/80"
                      : "border-sky-100/70 bg-gradient-to-b from-sky-50/70 to-indigo-50/40 dark:from-slate-900/60 dark:to-slate-950/70 shadow-md shadow-sky-100/60"
                  }`}
                >
                  <CardHeader className="space-y-2 pb-4 flex-shrink-0">
                    {/* Optional icon slot */}
                    {Icon && (
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <CardTitle className="mt-3 text-lg sm:text-xl text-slate-900 dark:text-slate-50 leading-tight min-h-[3.5rem] sm:min-h-[4rem] flex items-start">
                      {step.stage}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-muted-foreground text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.focus}
                  </CardContent>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-[84px] px-[6vw] pb-[60px] bg-gradient-to-b from-slate-50/50 to-white">
        <div className="text-center mb-8 grid gap-4">
          <h2 className="text-[36px] font-bold text-slate-900">
            Our research & delivery process for client projects
          </h2>
          <p className="text-lg text-slate-600 max-w-[820px] mx-auto leading-[1.7]">
            Each engagement flows through an 4 iterative, research-backed
            phases. Discovery immerses in context, parallel R&amp;D keeps
            firmware and software aligned, validation adds faculty and partner
            rigor, and launch channels outcomes back into the community.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
          {missionPhases.map((step) => (
            <Card
              key={step.title}
              className="rounded-[28px] p-9 px-8 grid gap-[18px] text-slate-50 relative overflow-hidden transition-all duration-[350ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(15,23,42,0.18)]"
              style={{
                background: `linear-gradient(160deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.75)), linear-gradient(145deg, ${step.accent}33, transparent)`,
                borderColor: `${step.accent}55`,
                boxShadow: "0 24px 48px rgba(15, 23, 42, 0.12)",
              }}
            >
              <CardHeader>
                <span className="text-[#e0ecff] text-xs font-semibold tracking-[2.4px] uppercase">
                  {step.caption}
                </span>
                <CardTitle className="text-2xl font-semibold m-0 text-slate-50">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-200/88 leading-[1.75]">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#020f2a] via-[#033c82] to-[#0b63bf] text-slate-50 py-24 px-[6vw] mt-[150px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-9 items-stretch">
          <div className="grid gap-[18px]">
            <span className="text-xs tracking-[4px] font-semibold uppercase text-blue-300/85">
              Embedded partnership
            </span>
            <h2 className="text-[36px] m-0 font-bold">
              How we embed with your team
            </h2>
            <p className="text-lg text-blue-100 leading-[1.75]">
              From assigning DAML teams to delivering progress checks, our deliverables 
              are designed to be easily integrated into your existing workflows.
            </p>
          </div>
          {partnershipPillars.map((pillar, i) => {
            const MotionCard = motion(Card);
            return (
              <MotionCard
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-md shadow-sky-900/20"
              >
              <CardHeader className="space-y-2 pb-4">
                <CardTitle className="text-lg sm:text-xl font-semibold text-white leading-tight min-h-[3.5rem] sm:min-h-[4rem] flex items-start">
                  {pillar.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
                  {pillar.detail}
                </p>
              </CardContent>
            </MotionCard>
            );
          })}
        </div>
      </section>

      <CallToAction
        title="Want to collaborate with DAML?"
        description="Contact our teams, share the challenge, the stakeholders we should meet, and the environments we need to plug into."
        primaryButton={{
          text: "Start a project conversation",
          href: "mailto:dukeappliedmachinelearning@gmail.com",
        }}
        secondaryButton={{
          text: "See partnership opportunities",
          href: "/partnerWithUs",
        }}
        backgroundColor="bg-gradient-to-br from-[#1a2332] via-[#2a3f5f] to-[#1e3a5f]"
      />
      <Footer />
    </div>
  );
}
