"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Brain, Server, ClipboardList, Crown, Users, Code2, Rocket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

const engagementFlow = [
  {
    stage: "Member",
    focus:
      "Engagement with our training program, GBMs, and events. Actively in AITP.",
    icon: User,
    badge: "Entry",
  },
  {
    stage: "Junior Engineer",
    focus:
      "Completion of our AI training program, these members are now familiar with the fundamentals of data science / ML.",
    icon: Brain,
    badge: "Foundation",
  },
  {
    stage: "Data Scientist",
    focus:
      "Actively work on our high-stakes projects, completing deliverables throughout the semester.",
    icon: Server,
    badge: "Infrastructure",
  },
  {
    stage: "Project Manager",
    focus:
      "These engineers now pave their way to leading DAML's next project initiatives.",
    icon: ClipboardList,
    badge: "Leadership",
  },
  {
    stage: "DS Director",
    focus:
      "The main leads shaping the next DS/ML initiatives of DAML.",
    icon: Crown,
    badge: "Executive",
  },
];

const values = [
  {
    title: "Inclusivity",
    description: "We accelerate advanced member's learning and cultivate the skills of those who are new to the field.",
    icon: Users,
  },
  {
    title: "Structured Pipeline",
    description: "Members progress from training to project work and into leadership roles.",
    icon: Code2,
  },
  {
    title: "Real impact",
    description: "Our work ships: EDA reports, model prototypes, and deployed solutions.",
    icon: Rocket,
  },
  {
    title: "Strong Community",
    description: "A collaborative environment built on mentorship, team-based work, and lasting connections.",
    icon: Heart,
  },
];

export default function MissionPage() {
  const MotionCard = motion(Card);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const stepsCount = engagementFlow.length;

  return (
    <div className="font-sans min-h-screen bg-white text-slate-900">

      {/* Section 1: Mission Hero */}
      <section className="hero-internal relative overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_9027.png"
            alt="DAML community"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="container-content relative z-10 grid gap-2 text-left">
          <p className="kicker mb-3">About us</p>
          <h1 className="h1 m-0">Mission</h1>
          <p className="hero-sub m-0 mt-4 max-w-[800px]">
            DAML is an open-membership student organization at Duke dedicated to developing skilled machine learning practitioners through structured training and real-world projects.
            <br />
            <br />
            We prioritize accessible ML education and evaluate members based on commitment and growth, building a community focused on delivering meaningful, pre-professional work.
          </p>
          <div className="mt-6">
            <Button asChild variant="cta">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform" target="_blank" rel="noopener noreferrer">Join DAML</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Layer */}
      <section className="bg-surface-base py-20 md:py-24 border-b border-slate-200/70">
        <div className="container-content mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex flex-col gap-3">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-slate-900">{v.title}</p>
                    <p className="body text-slate-600">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Member Progression (unchanged) */}
      <section className="relative section-y-lg bg-surface-alt overflow-y-visible">
        <div className="container-wide mx-auto overflow-y-visible">
          <div className="text-center section-title-spacing">
            <h2 className="section-heading text-slate-900">
              Our members&apos; progression
            </h2>
          </div>
          {/* Timeline bar (desktop) */}
          <div className="relative hidden lg:flex justify-between items-start mt-8 mb-6 px-2">
            {/* Base line (dashed) */}
            <div
              className="absolute top-4 h-0.5 border-t-2 border-dashed border-slate-300"
              style={{
                left: `calc((100% / ${stepsCount}) / 2)`,
                right: `calc((100% / ${stepsCount}) / 2)`,
              }}
            />
            {engagementFlow.map((step, idx) => {
              const isCompleted = hoveredIndex !== null ? idx < hoveredIndex : idx < 2;
              const isCurrent = hoveredIndex !== null ? idx === hoveredIndex : idx === 2;

              let nodeClasses = "relative z-10 mx-auto h-4 w-4 rounded-full border-2 transition-all duration-500 -translate-y-1/2 top-[calc(1rem+0.125rem)]";
              if (isCompleted) {
                nodeClasses += " border-accent bg-accent";
              } else if (isCurrent) {
                nodeClasses += " border-accent bg-accent shadow-[0_0_0_4px_var(--color-primary-soft)]";
              } else {
                nodeClasses += " border-slate-300 bg-slate-50";
              }

              return (
                <div key={step.stage} className="relative flex-1 text-center">
                  {isCompleted && idx > 0 && (
                    <div className="absolute left-[-50%] right-[50%] top-4 h-0.5 bg-accent z-0 transition-all duration-500" />
                  )}
                  {isCurrent && idx > 0 && (
                    <div className="absolute left-[-50%] right-[50%] top-4 h-0.5 bg-accent z-0 transition-all duration-500" />
                  )}
                  {isCurrent && idx < stepsCount - 1 && (
                    <div className="absolute left-[50%] right-[-50%] top-4 h-0.5 bg-[var(--color-primary-soft)] z-0 transition-all duration-500" />
                  )}
                  <div className={nodeClasses} />
                  <div className="mt-6 kicker px-1 min-h-[2.5rem] flex items-start justify-center">
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
                  className={`card-elevated relative flex-1 min-w-[280px] sm:min-w-[300px] lg:min-w-0 lg:w-auto cursor-default rounded-2xl border border-slate-200/80 transition-all duration-[400ms] backdrop-blur-sm snap-center shrink-0 ${
                    isHovered
                      ? "border-accent shadow-lg shadow-slate-100/40 bg-gradient-to-b from-[color-mix(in_oklab,var(--color-primary)_16%,transparent)] to-slate-100/60 dark:from-slate-800/80 dark:to-slate-900/80"
                      : "bg-gradient-to-b from-slate-50/80 to-[color-mix(in_oklab,var(--color-primary)_16%,transparent)] dark:from-slate-900/60 dark:to-slate-950/70"
                  }`}
                >
                  <CardHeader className="space-y-2 pb-4 flex-shrink-0">
                    {Icon && (
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <CardTitle className="mt-3 h3 text-slate-900 dark:text-slate-50 leading-tight flex items-start">
                      {step.stage}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="body dark:text-slate-300 leading-relaxed">
                    {step.focus}
                  </CardContent>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Training / Capability */}
      <section className="w-full section section-lg bg-white border-t border-slate-200/70">
        <div className="container-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="grid gap-5">
              <p className="kicker mb-1">Training</p>
              <h2 className="section-heading text-slate-900 section-title-spacing">
                How we train our members
              </h2>
              <p className="body text-slate-600 leading-relaxed">
                Our 7-week AI Training Program takes members from coding basics to understanding the fundamentals of machine learning,covering exploratory data analysis, model training, 
                evaluation, and subfields within ML.
              </p>
              <p className="body text-slate-600 leading-relaxed">
                Members complete assessments and project presentations before advancing to
                project teams, ensuring every engineer can contribute meaningfully to real
                project work.
              </p>
              <Button asChild variant="cta" className="w-fit mt-2">
                <a href="/recruitment">Explore our curriculum</a>
              </Button>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/springtime.jpg"
                alt="AITP training session"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How We Work (partner-facing) */}
      <section className="w-full section section-lg bg-surface-base border-t border-slate-200/80">
        <div className="container-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="grid gap-5">
              <p className="kicker mb-1">How we work</p>
              <h2 className="section-heading text-slate-900 section-title-spacing">
                How we work on real-world ML projects
              </h2>
              <p className="hero-sub text-slate-700">
                Our engineering teams partner with organizations to scope and build prototype ML solutions. We set milestones and defined deliverables before assigning teams.
              </p>
              <ul className="flex flex-col gap-4 mt-2">
                {[
                  "Scoped problem definition with defined milestones and timelines",
                  "Team-based progress led by PMs & DS Directors",
                  "Clear deliverables: EDA reports, model prototypes, and evaluations",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                    <p className="body text-slate-600">{point}</p>
                  </li>
                ))}
              </ul>
              <Button asChild variant="cta-outline" className="w-fit mt-2">
                <a href="/partnerWithUs">Explore partnerships</a>
              </Button>
            </div>
            <div className="relative min-h-[300px] lg:min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/working_team.jpeg"
                alt="DAML project team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA (unchanged) */}
      <div className="section-tighter-before-cta">
        <CallToAction
          title="Want to collaborate with DAML?"
          description="Contact our teams, share the challenge, the stakeholders we should meet, and the environments we can plug into."
          primaryButton={{
            text: "Start a project conversation",
            href: "mailto:dukeappliedmachinelearning@gmail.com",
          }}
          secondaryButton={{
            text: "See partnership opportunities",
            href: "/partnerWithUs",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
