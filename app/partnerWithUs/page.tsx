"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/sections/CallToAction";
import DevelopmentBanner from "@/components/ui/development-banner";

interface TechIconProps {
  src: string;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt }) => (
  <div className="flex-[0_0_auto] min-w-[130px] min-h-20 bg-white rounded-2xl flex items-center justify-center border border-slate-200/70 p-4 px-6 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(1,33,105,0.1)]">
    <Image
      src={src}
      alt={alt}
      width={140}
      height={52}
      priority
      loading="eager"
      className="h-[52px] w-auto object-contain"
    />
  </div>
);

const PartnerWithUs: React.FC = () => {
  const techStack = [
    { src: "/logos/pytorch_logo.png", alt: "PyTorch" },
    { src: "/logos/sql_logo.png", alt: "SQL" },
    { src: "/logos/numpy_logo.png", alt: "NumPy" },
    { src: "/logos/pandas_logo.png", alt: "Pandas" },
    { src: "/logos/google_cloud_logo.png", alt: "Google Cloud" },
    { src: "/logos/aws_logo.png", alt: "AWS" },
    { src: "/logos/colab_logo.png", alt: "Colab" },
    { src: "/logos/docker_logo.png", alt: "Docker" },
    { src: "/logos/tensor_flow_logo.png", alt: "TensorFlow" },
  ];

  const mlServices = [
    {
      title: "Computer Vision",
      description:
        "Custom solutions for image classification, object detection, segmentation, and video analysis.",
    },
    {
      title: "Generative AI / LLMs",
      description:
        "Build chatbots, content generation systems, and intelligent assistants using cutting-edge LLM technologies.",
    },
    {
      title: "EDA",
      description:
        "Comprehensive exploratory data analysis with detailed reports, visualizations, and strategic recommendations.",
    },
    {
      title: "Prediction Models",
      description:
        "Predictive models for forecasting and classification, plus clustering solutions for segmentation and anomaly detection.",
    },
  ];

  const partners = [
    {
      name: "Duke Career Center",
      description:
        "Collaborating to connect DAML members with industry opportunities and career development resources.",
      type: "Academic",
    },
    {
      name: "LiveAI",
      description:
        "Partnering on real-world AI projects that give our members hands-on experience while delivering innovative solutions.",
      type: "Industry",
    },
    {
      name: "AI for Business",
      description:
        "Working together to develop AI solutions for business challenges and help businesses leverage ML capabilities.",
      type: "Academic",
    },
  ];

  const partnershipTypes = [
    {
      title: "DAML Project Partnerships",
      description: "Meet with our PM team for client projects in data and AI/ML.",
      items: [
        "Project Plan",
        "EDA Deliverables",
        "Business Analysis Reports",
        "Model Prototypes",
        "Deployed Models",
      ],
    },
    {
      title: "Academic Partnerships",
      description: "Collaborate with us to expand our education initiatives.",
      items: ["Data Engineering & Data Science concepts", "Software products"],
    },
    {
      title: "Guest Speakers & Outreach",
      description: "We're happy to host guest speakers and workshops for our members.",
      items: [],
    },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Hero */}
      <section className="hero-internal relative overflow-hidden" style={{ minHeight: '539px' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/chapel.jpg"
            alt="Partner with DAML"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-content relative z-10 grid gap-2 text-left">
          <p className="kicker mb-3">Collaborate</p>
          <h1 className="h1 m-0">Partner With Us</h1>
          <p className="hero-sub m-0 mt-4 max-w-[600px]">
            We partner with companies to build AI/ML solutions, gather data
            insights, and expand our education initiatives. Partnering with DAML
            helps expand opportunities for Duke undergraduates.
          </p>
          <div className="mt-6">
            <Button asChild variant="cta">
              <a href="mailto:dukeappliedmachinelearning@gmail.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section section-lg bg-surface-base">
        <div className="container-content mx-auto">
          <p className="kicker mb-3">Opportunities</p>
          <h2 className="section-heading text-slate-900 section-title-spacing">Partnership Opportunities</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((pt) => (
              <Card
                key={pt.title}
                className="card-elevated h-full flex flex-col bg-white rounded-2xl border border-slate-200/70 p-7"
              >
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle className="text-xl font-[650] text-slate-900">{pt.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 flex-1 flex flex-col gap-4">
                  <p className="body text-slate-600">{pt.description}</p>
                  {pt.items.length > 0 && (
                    <ul className="grid gap-2">
                      {pt.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 body text-sm text-slate-700">
                          <svg
                            className="flex-shrink-0 w-4 h-4 mt-0.5 text-[var(--color-royal)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ML Consulting */}
      <section className="section section-lg bg-white border-t border-slate-200/70">
        <div className="container-content mx-auto">
          <p className="kicker mb-3">Services</p>
          <h2 className="section-heading text-slate-900 section-title-spacing">ML Consulting</h2>
          <p className="hero-sub text-slate-600 max-w-2xl mb-12">
            Our engineers work with clients to develop ML products that best impact their business.
          </p>

          {/* Tech stack carousel */}
          <div className="w-full overflow-hidden relative mb-12">
            <div className="flex gap-5 items-center animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]">
              {techStack.concat(techStack).map((tech, idx) => (
                <TechIcon key={`${tech.alt}-${idx}`} src={tech.src} alt={tech.alt} />
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {mlServices.map((service) => (
              <Card
                key={service.title}
                className="card-elevated bg-white rounded-2xl border border-slate-200/70 p-6"
              >
                <CardHeader className="px-0 pt-0 pb-3">
                  <CardTitle className="text-lg font-[650] text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <CardDescription className="body text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners — intentionally dark anchor */}
      {/* <section className="section section-lg on-dark bg-brand-navy-gradient">
        <div className="container-content mx-auto">
          <p className="kicker mb-3">Community</p>
          <h2 className="section-heading mb-10">Current Partners</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 grid gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div>
                  <span className="kicker text-[rgba(255,255,255,0.55)] text-xs mb-2 block">
                    {partner.type} Partner
                  </span>
                  <h3 className="h3 text-white">{partner.name}</h3>
                </div>
                <p className="body text-white/70 text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CallToAction
        title="Ready to partner with DAML?"
        description="Join leading organizations working with Duke's top ML talent. Whether you need an engineering team, want to sponsor projects, or are looking to connect with our members, we welcome all forms of collaboration."
        primaryButton={{
          text: "Contact Us",
          href: "mailto:dukeappliedmachinelearning@gmail.com",
        }}
        // secondaryButton={{ text: "View our projects", href: "/projects", }}  --- USE WHEN PROJECTS PAGE IS AVAILABLE
        secondaryButton={{
          text: "Meet the Team",
          href: "/students",
        }}
        maxWidth="900px"
      />

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
