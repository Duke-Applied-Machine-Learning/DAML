"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { projects } from "../../data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  redirect("/");
  const [archiveExpanded, setArchiveExpanded] = useState(false);

  const currentProjects = projects.filter((p) => p.status === "current");
  const archiveProjects = projects.filter((p) => p.status === "archive");

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-slate-900">
      {/* Hero */}
      <section
        className="hero-internal relative overflow-hidden"
        style={{ minHeight: '539px' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects_photo.jpeg"
            alt="DAML projects"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-content relative z-10 grid gap-2 text-left">
          <p className="kicker mb-3">Portfolio</p>
          <h1 className="h1 m-0">Projects</h1>
          <p className="hero-sub m-0">Current work and past deliverables from our members</p>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section section-lg bg-surface-base">
        <div className="container-wide mx-auto">
          <p className="kicker mb-3">Active</p>
          <h2 className="section-heading text-slate-900 section-title-spacing">Current Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        </div>
      </section>

      {/* Archive */}
      <section className="section section-lg bg-white border-t border-slate-200/70">
        <div className="container-wide mx-auto">
          <div className="flex flex-wrap items-center gap-4 section-title-spacing">
            <div>
              <p className="kicker mb-2">Past work</p>
              <h2 className="section-heading text-slate-900 mb-0">Archive</h2>
            </div>
            <Button
              variant="cta-outline"
              className="rounded-full"
              onClick={() => setArchiveExpanded(true)}
            >
              Expand all
            </Button>
          </div>
        {archiveExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {archiveProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
