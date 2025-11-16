"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/sections/CallToAction";

interface TechIconProps {
  src: string;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt }) => (
  <div className="flex-[0_0_auto] min-w-[140px] min-h-24 bg-white rounded-[20px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 border border-slate-200/50 p-4 px-7 overflow-hidden hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)]">
    <Image 
      src={src} 
      alt={alt} 
      width={160} 
      height={60} 
      priority={true}
      loading="eager"
      className="h-[60px] w-auto object-contain"
    />
  </div>
);

const PartnerWithUs: React.FC = () => {
  const techStack = [
    { src: '/logos/pytorch_logo.png', alt: 'PyTorch' },
    { src: '/logos/sql_logo.png', alt: 'SQL' },
    { src: '/logos/numpy_logo.png', alt: 'NumPy' },
    { src: '/logos/pandas_logo.png', alt: 'Pandas' },
    { src: '/logos/google_cloud_logo.png', alt: 'Google Cloud' },
    { src: '/logos/aws_logo.png', alt: 'AWS' },
    { src: '/logos/colab_logo.png', alt: 'Colab' },
    { src: '/logos/docker_logo.png', alt: 'Docker' },
    { src: '/logos/tensor_flow_logo.png', alt: 'TensorFlow' },
  ];

  const mlServices = [
    {
      title: "Computer Vision",
      description: "Custom solutions for image classification, object detection, segmentation, and video analysis.",
    },
    {
      title: "Generative AI/LLMs",
      description: "Build chatbots, content generation systems, and intelligent assistants using cutting-edge LLM technologies.",
    },
    {
      title: "EDA",
      description: "Comprehensive exploratory data analysis with detailed reports, visualizations, and strategic recommendations.",
    },
    {
      title: "Predictive + Clustering Models",
      description: "Predictive models for forecasting and classification, plus clustering solutions for segmentation and anomaly detection.",
    },
  ];

  const partners = [
    {
      name: "Duke Career Center",
      description: "Collaborating to connect DAML members with industry opportunities and career development resources. Together we bridge the gap between academic learning and professional growth.",
      type: "Academic Partner",
    },
    {
      name: "LiveAI",
      description: "Partnering on real-world AI projects that provide our members hands-on experience while delivering innovative solutions. Our collaboration focuses on practical ML applications.",
      type: "Industry Partner",
    },
    {
      name: "AI for Business",
      description: "Working together to develop AI solutions for business challenges. This partnership enables our students to work on meaningful projects while helping businesses leverage ML capabilities.",
      type: "Academic Partner",
    },
  ];

  return (
    <div className="font-sans text-slate-200">

      {/* Hero */}
      <section className="hero-section text-white relative overflow-hidden">

        <div className="max-w-[1080px] mx-auto relative z-[1] grid gap-7">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,380px)] gap-12 items-center lg:grid-cols-1">
            <div className="grid gap-[18px]">
              <h1 className="hero-heading m-0 tracking-[0.2px]">Partner With Us</h1>
              <p className="hero-subheading m-0">
                We&apos;re happy to partner with any company who is interested in building AI solutions or products, expand education initiatives, and/or outreach to our members for opportunities. Partnering with us means to enhance the range of opportunities available for our undergraduate students. Interested in partnering with us?
              </p>
              <div className="flex gap-4 items-center flex-wrap">
                <Button
                  asChild
                  className="cta-button py-6 whitespace-nowrap"
                >
                  <a href="mailto:dukeappliedmachinelearning@gmail.com">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="border border-white/10 relative overflow-hidden rounded-3xl min-h-[440px] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)] before:animate-pulse">
              <Image
                src="/daml_team_photo.jpg"
                alt="AI/ML Partnership"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="text-slate-900 pt-[120px] pb-[80px] px-[6vw] relative z-[1]">
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <h2 className="text-[#0b1220] mb-12 text-4xl font-bold">Partnership Opportunities</h2>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <Card className="bg-white text-[#0b1220] border border-slate-900/6 rounded-2xl p-8 shadow-[0_6px_18px_rgba(11,18,32,0.06)] transition-all duration-200 relative overflow-hidden grid gap-3 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
              <CardHeader>
                <CardTitle className="mb-3 text-[#071025] text-2xl">Industry Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="m-0 text-[#0b1220] leading-[1.6]">Collaborate with our PM team to discuss a strategy to develop a ML product. DAML can help by bringing together a team of engineers in Data Science/ML to develop the project.</p>
                <ul className="list-none mt-4 p-0 grid gap-2.5">
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">Project Plan</li>
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">EDA Deliverables</li>
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">Business Analysis Reports</li>
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">Model Prototypes</li>
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">Deployed Models</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white text-[#0b1220] border border-slate-900/6 rounded-2xl p-8 shadow-[0_6px_18px_rgba(11,18,32,0.06)] transition-all duration-200 relative overflow-hidden grid gap-3 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
              <CardHeader>
                <CardTitle className="mb-3 text-[#071025] text-2xl">Academic Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="m-0 text-[#0b1220] leading-[1.6]">Collaborate with us to expand our education initiatives!</p>
                <ul className="list-none mt-4 p-0 grid gap-2.5">
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">Data Engineering, Data Science, SWE Concepts</li>
                  <li className="flex items-start gap-2 text-[#0b1220] leading-[1.6] before:content-['✓'] before:text-blue-600 before:font-bold before:mt-0.5">Software products</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white text-[#0b1220] border border-slate-900/6 rounded-2xl p-8 shadow-[0_6px_18px_rgba(11,18,32,0.06)] transition-all duration-200 relative overflow-hidden grid gap-3 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
              <CardHeader>
                <CardTitle className="mb-3 text-[#071025] text-2xl">Guest Speakers & Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="m-0 text-[#0b1220] leading-[1.6]">We can help host guest speakers or cool products to our members!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ML Consulting */}
      <section className="w-full pt-[120px] pb-[80px] px-[6vw] bg-gradient-to-br from-[#f4f7ff] via-[#e8f1ff] to-[#fdfbff] text-slate-900">
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <div className="mb-12">
            <h2 className="text-[#0b1220] mb-6 text-4xl font-bold">ML Consulting</h2>
            <p className="text-[#0b1220] text-lg leading-[1.7] max-w-3xl">For our client projects, we provide partners with our consultants in ML to discuss strategies to develop ML products into their business.</p>
          </div>

          <div className="w-full overflow-hidden relative my-12 py-6">
            <div className="flex gap-6 items-center animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]">
              {techStack.concat(techStack).map((tech, idx) => (
                <TechIcon key={`${tech.alt}-${idx}`} src={tech.src} alt={tech.alt} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-12">
            {mlServices.map((service) => (
              <Card key={service.title} className="bg-white text-[#0b1220] border border-slate-900/6 rounded-2xl p-4 pt-8 shadow-[0_6px_18px_rgba(11,18,32,0.06)] transition-all duration-200 relative overflow-hidden grid hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
                <CardHeader>
                  <CardTitle className="text-[#071025] text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#0b1220]/80 text-base leading-[1.6]">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="bg-gradient-to-br from-[rgb(2,15,42)] via-[rgb(3,60,130)] to-[rgb(11,99,191)] text-slate-50 pt-[120px] pb-[80px] px-[6vw]">
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <h2 className="mb-12 text-4xl font-bold">Current Partners</h2>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {partners.map((partner) => (
              <Card key={partner.name} className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 relative overflow-hidden grid gap-3 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-blue-300/80 text-xs font-semibold tracking-wider uppercase">
                      {partner.type}
                    </span>
                  </div>
                  <CardTitle className="mb-3 text-white text-2xl">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-200/90 text-base leading-[1.6]">
                    {partner.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to partner with DAML?"
        description="Join leading organizations working with Duke's top ML talent. Whether you need consulting, want to sponsor projects, or are looking to connect with our members, we're here to help."
        primaryButton={{
          text: "Contact Us",
          href: "mailto:dukeappliedmachinelearning@gmail.com",
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/education",
        }}
        backgroundColor="bg-gradient-to-br from-[rgb(2,15,42)] via-[rgb(3,60,130)] to-[rgb(11,99,191)]"
        maxWidth="900px"
      />

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
