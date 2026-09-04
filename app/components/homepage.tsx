"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import PhotoSlider from "@/components/sections/PhotoSlider";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "../../data/projects";
import { Lightbulb, Users, FileCheck } from "lucide-react";

function FadeInOnScroll({
  children,
  delay = 0,
  onVisibleOnce,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  onVisibleOnce?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (onVisibleOnce) onVisibleOnce();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={visible ? { transitionDelay: `${50 + delay}ms` } : undefined}
      className={cn(
        "transition-all duration-500 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className
      )}
    >
      {children}
    </div>
  );
}

function useStaggerOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-stagger]")
    );
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function AnimatedRotator({
  items,
  delay = 3000,
  animMs = 600,
  className,
}: {
  items: string[];
  delay?: number;
  animMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState<number>(0);
  const [prev, setPrev] = useState<number | null>(null);
  const indexRef = useRef<number>(0);
  const clearPrevTimeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!items || items.length <= 1) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    if (clearPrevTimeoutRef.current) window.clearTimeout(clearPrevTimeoutRef.current);

    const normalDelay = delay;
    const endPause = delay * 2;

    const runCycle = () => {
      setPrev(indexRef.current);
      const next = (indexRef.current + 1) % items.length;
      setIndex(next);
      indexRef.current = next;
      if (clearPrevTimeoutRef.current) window.clearTimeout(clearPrevTimeoutRef.current);
      clearPrevTimeoutRef.current = window.setTimeout(() => {
        setPrev(null);
        clearPrevTimeoutRef.current = null;
      }, animMs);
      const nextDelay = next === 0 ? endPause : normalDelay;
      intervalRef.current = window.setTimeout(runCycle, nextDelay);
    };

    intervalRef.current = window.setTimeout(runCycle, delay);
    return () => {
      if (intervalRef.current) window.clearTimeout(intervalRef.current);
      if (clearPrevTimeoutRef.current) window.clearTimeout(clearPrevTimeoutRef.current);
    };
  }, [items.length, delay, animMs]);

  useEffect(() => { indexRef.current = index; }, [index]);

  return (
    <span
      className={cn("daml-rotator inline-block align-middle z-[80]", className)}
      aria-live="polite"
      role="status"
    >
      {items.map((text, i) => {
        const cls =
          i === index ? "rot-item slide-in" : i === prev ? "rot-item slide-out" : "rot-item";
        return (
          <span key={text + i} className={cls} style={{ animationDuration: `${animMs}ms` }}>
            {text}
          </span>
        );
      })}
    </span>
  );
}
export { AnimatedRotator };

function HeroSection() {
  return (
    <div
      className="mouse-glow-wrapper w-full relative bg-[#0d4f7a]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/daml_background.png"
          alt="DAML hero background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </div>


      <div className="w-full hero-home relative">
        <div className="hero-home-inner absolute inset-0 flex flex-col items-start z-[2] pointer-events-none px-6 md:px-8">
          <div className="pointer-events-auto max-w-[calc(100%-80px)] relative overflow-visible z-[90] flex flex-col gap-3">
            <div className="hero-content">
              <h1 className="h1 m-0 pointer-events-none">
                Duke Applied Machine Learning
              </h1>
              <p className="hero-sub m-0 mt-4">
                An open-membership student org dedicated to enhancing ML education at Duke.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 pointer-events-auto sm:flex-row">
              <Button
                variant="cta"
                onClick={() => {
                  document.getElementById("join-daml")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Join us
              </Button>
              <Button
                variant="cta-outline-dark"
                onClick={() => { if (typeof window !== "undefined") window.location.href = "/mission"; }}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats in normal flow — centered, never clipped */}
      <div className="relative z-10 w-full px-6 md:px-8 pb-16 pt-8 pointer-events-auto">
        <div className="hero-stats grid grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "stats-block md:border-l md:border-white/20 first:border-l-0 px-6 md:px-10",
                i > 0 && "border-t border-white/20 md:border-t-0 pt-4 md:pt-0"
              )}
            >
              <span className="stats-value">{stat.value}</span>
              <span className="stats-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const clientValueProps = [
  {
    title: "ML Consulting",
    icon: Lightbulb,
    detail: "Our teams scope ML projects and define clear, measurable outcomes & action plans.",
  },
  {
    title: "Eng. Teams",
    icon: Users,
    detail: "We pair dedicated engineering teams with partner organizations, bringing Duke's CS talent to tackle real-world ML problems.",
  },
  {
    title: "Deliverables",
    icon: FileCheck,
    detail: "Partners receive project plans, EDA reports, and working model prototypes at defined milestones.",
  },
];

const heroStats = [
  { value: "70+", label: "Engineers" },
  { value: "40+", label: "Projects" },
  { value: "7", label: "Years" },
];

const whatWeDoItems = [
  {
    id: "internal-projects",
    label: "Internal",
    title: "Internal Projects",
    description: "Our students lead personal projects that explore new ideas and research-inspired experiments.",
  },
  {
    id: "social-preprofessional",
    label: "Social",
    title: "Community & Events",
    description: "Events, alumni connections, and recruiting touchpoints that extend the DAML network.",
  },
];

export default function Homepage() {
  useStaggerOnScroll();
  const featuredProjects = projects.filter((p) => p.tier === "featured");
  const [featuredStartIndex, setFeaturedStartIndex] = useState(0);
  const [isCarouselAnimating, setIsCarouselAnimating] = useState(false);
  const [carouselDirection, setCarouselDirection] = useState<"next" | "prev" | null>(null);
  const [shouldAnimateFeaturedOnce, setShouldAnimateFeaturedOnce] = useState(false);
  const featuredAnimationDoneRef = useRef(false);

  const visibleFeaturedProjects =
    featuredProjects.length <= 3
      ? featuredProjects
      : Array.from({ length: 3 }, (_, offset) => {
          return featuredProjects[(featuredStartIndex + offset) % featuredProjects.length];
        });

  const handleCarouselStep = (direction: "next" | "prev") => {
    if (!featuredProjects.length || isCarouselAnimating) return;
    setCarouselDirection(direction);
    setIsCarouselAnimating(true);
    const step = direction === "next" ? 1 : -1;
    window.setTimeout(() => {
      setFeaturedStartIndex((prev) => (prev + step + featuredProjects.length) % featuredProjects.length);
      setIsCarouselAnimating(false);
    }, 180);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex flex-col relative">
        <HeroSection />
      </section>

      {/* What We Do — header */}
      <section className="bg-surface-base section-lg pb-0 relative z-[2]">
        <div className="container-content mx-auto">
          <FadeInOnScroll>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center section-title-spacing">
              <div className="md:-translate-y-[20%]">
                <p className="kicker mb-3">What we do</p>
                <h2 className="section-heading">
                  An inclusive pre-professional ML community
                </h2>
                <p className="hero-sub mt-4">
                  We are a student-led organization that empowers education, research, and applied work in machine learning. From training and hands-on projects to community events, we help student engineers gain real ML experience, project leadership, and collaboration with partners across Duke and beyond.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <PhotoSlider className="aspect-[4/3]" />
                <p className="text-sm text-slate-500 text-center italic">A large thank you to the teams that have presented at our 2026 showcase!</p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Education Track */}
      <section className="py-12 md:py-16 px-[6vw] on-dark bg-brand-navy-gradient">
        <div className="container-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Text */}
            <FadeInOnScroll>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="kicker mb-3">Education</p>
                  <h2 className="section-heading">The AI Fundamentals Training Program</h2>
                </div>
                <p className="hero-sub">
                    DAML&apos;s AI Training Program (AITP) is the structured entry point for members to become engineers within the organization. The program takes members from ML fundamentals through modern deep learning systems, with a focus on real deliverables and project readiness.                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "8-week AI Training Program — from regression and clustering through transformers and LLMs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-[var(--color-royal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="hero-sub">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button variant="cta" asChild>
                    <a href="/recruitment">Explore our curriculum</a>
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Image */}
            <FadeInOnScroll delay={120} className="h-full">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[240px]">
                <Image
                  src="/IMG_9027.png"
                  alt="DAML training session"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="section-lg bg-white">
        <div className="container-wide mx-auto flex flex-col gap-10">
          <FadeInOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
              {/* Left: header */}
              <div>
                <p className="kicker mb-3">Client Projects</p>
                <h2 className="section-heading">Pairing Duke&apos;s talent with real experience</h2>
                <p className="hero-sub mt-4">
                  We match dedicated engineering teams with partner organizations to deliver ML prototypes throughout the semester, with dedicated PMs and leads.
                </p>
              </div>
              {/* Right: cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                {clientValueProps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="card-elevated bg-white rounded-2xl p-6 flex flex-col gap-3 border border-slate-200/70 h-full">
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                      <h3 className="h3 text-slate-900 min-h-[3.5rem]">{item.title}</h3>
                      <p className="body text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="flex justify-center">
              <Button variant="cta-outline" asChild>
                <a href="/partnerWithUs">Partner with us</a>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* What We Do — side by side grid */}
      <section className="bg-surface-base pt-20 pb-[100px] px-[6vw] relative z-[2]">
        <div className="container-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {whatWeDoItems.map((item, index) => (
              <FadeInOnScroll key={item.id} delay={index * 80}>
                <div className="flex flex-col gap-5">
                  <div className="space-y-3">
                    <span className="kicker">{item.label}</span>
                    <h2 className="section-heading">{item.title}</h2>
                    <p className="hero-sub">{item.description}</p>
                  </div>
                  <div className="relative h-52 md:h-64 overflow-hidden rounded-2xl border border-slate-200/70">
                    {item.id === "internal-projects" ? (
                      <Image
                        src="/daml_team_photo.jpg"
                        alt="DAML team"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : item.id === "social-preprofessional" ? (
                      <Image
                        src="/social_photo.jpeg"
                        alt="DAML social event"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : null}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white section-lg">
        <div className="container-wide mx-auto space-y-10">
          <FadeInOnScroll>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between section-title-spacing">
              <div className="space-y-2">
                <p className="kicker">Portfolio</p>
                <h2 className="section-heading">Featured projects</h2>
              </div>
              {/* <Button variant="cta-outline" className="self-start sm:self-auto" asChild>
                <a href="/projects">See all projects</a>
              </Button> */}
            </div>
          </FadeInOnScroll>

          <div className="projects-frame relative flex items-stretch gap-5 md:gap-8">
            <button
              type="button"
              aria-label="Previous projects"
              className="hidden md:inline-flex absolute -left-6 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-[var(--color-hatteras)] hover:text-[var(--color-navy)] transition-colors duration-200"
              onClick={() => handleCarouselStep("prev")}
            >
              <span className="text-lg leading-none">←</span>
            </button>

            <FadeInOnScroll
              onVisibleOnce={() => {
                if (featuredAnimationDoneRef.current) return;
                featuredAnimationDoneRef.current = true;
                setShouldAnimateFeaturedOnce(true);
                window.setTimeout(() => setShouldAnimateFeaturedOnce(false), 700);
              }}
            >
              <div
                className={cn(
                  "grid flex-1 gap-7 sm:grid-cols-2 md:grid-cols-3 md:px-16 items-stretch transition-transform duration-200 ease-out",
                  isCarouselAnimating && carouselDirection === "next" ? "-translate-x-4"
                  : isCarouselAnimating && carouselDirection === "prev" ? "translate-x-4"
                  : "translate-x-0"
                )}
              >
                {visibleFeaturedProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={cn(
                      shouldAnimateFeaturedOnce && "animate-fade-up",
                      project.hasScreenshot === false ? "aspect-square self-center" : "h-full"
                    )}
                    style={shouldAnimateFeaturedOnce ? { animationDelay: `${50 + index * 80}ms` } : undefined}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </FadeInOnScroll>

            <button
              type="button"
              aria-label="Next projects"
              className="hidden md:inline-flex absolute -right-6 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-[var(--color-hatteras)] hover:text-[var(--color-navy)] transition-colors duration-200"
              onClick={() => handleCarouselStep("next")}
            >
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <div id="join-daml">
        <CallToAction
          title="Build alongside Duke's ML talent"
          description="Work with DAML members on rigorous ML projects, ranging from explorations to real-world applications. Whether you're a student or a prospective partner, join a team focused on building and prototyping."
          primaryButton={{
            text: "Join us",
            onClick: () => {
              if (typeof window !== "undefined") {
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform?usp=dialog");
              }
            },
          }}
          secondaryButton={{ text: "Meet the team", href: "/students" }}
          maxWidth="1080px"
        />
      </div>

      <Footer />
    </div>
  );
}
