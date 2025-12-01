"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

const pathways = [
  {
    tag: "Machine Learning",
    name: "AI Training Program (AITP)",
    description:
      "Semester-long immersion that walks members from statistical learning foundations through deep learning, culminating in a certified client-ready portfolio.",
    highlights: [
      "Eight core workshops covering regression, clustering, ensembles, NLP, vision, RNNs, and transformers.",
      "Final project built with a DAML pod, spanning scoping, experimentation, and executive-ready storytelling.",
      "AITP certification unlocks placement on advanced research and client engineering pods.",
    ],
  },
  {
    tag: "Deployment",
    name: "DevOps & Data Engineering",
    description:
      "Learn deployment, data pipelines, loading into data warehouses, and more.",
    highlights: [
      "Cloud platforms like AWS, CI/CD, containerization",
    ],
  },
];

const syllabus = [
  {
    label: "Week 1",
    topic: "How machines learn",
    bullets: [
      "Gradient descent, loss functions, bias-variance tradeoff, and structural risk minimization.",
      "Hyperparameter tuning, cross-validation, train-test splits, and model evaluation.",
      "Hands-on with linear and logistic regression, k-nearest neighbors, and SVMs.",
    ],
  },
  {
    label: "Week 2",
    topic: "Data science pipeline",
    bullets: [
      "Cleaning with emphasis on missing data and encodings that fight the curse of dimensionality.",
      "Text and image preprocessing plus exploratory data analysis methods like ROC analysis and Pearson correlations.",
    ],
  },
  {
    label: "After Week 2",
    topic: "Choose your final project track",
    bullets: [
      "Members select a real partner-aligned brief and form project teams with DAML mentors.",
      "Milestones, tech stack guardrails, and accountability cadences are set before Week 3.",
    ],
  },
  {
    label: "Week 3",
    topic: "Dimension reduction and clustering",
    bullets: [
      "Principal component analysis and manifold learning techniques like MDS, Isomap, spectral clustering, and t-SNE.",
      "Clustering with k-means and expectation-maximization.",
    ],
  },
  {
    label: "Week 4",
    topic: "Ensemble methods and boosting",
    bullets: [
      "Decision trees, information theory, random forests, AdaBoost, XGBoost, and generalized additive models.",
    ],
  },
  {
    label: "Week 5",
    topic: "Neural network fundamentals",
    bullets: [
      "Architecture design, activation functions, universal approximation, and backpropagation.",
    ],
  },
  {
    label: "Week 6",
    topic: "Convolutional neural networks",
    bullets: [
      "Convolutional layers, kernels, pooling strategies, and computer vision applications.",
    ],
  },
  {
    label: "Week 7",
    topic: "Recurrent neural networks and LSTMs",
    bullets: [
      "Motivation, vanishing gradients, and LSTM gate mechanics for NLP workflows.",
    ],
  },
  {
    label: "Week 8",
    topic: "Transformers and LLMs",
    bullets: [
      "Transformer architecture, semi-supervised fine-tuning, and practical BERT + LLM deployments.",
    ],
  },
];

const logistics = [
  {
    title: "Prerequisites",
    bullets: [
      "Comfort with Python from CS 101/201 or equivalent experience.",
      "Prior exposure to high school or college-level CS courses is helpful but not required.",
    ],
  },
  {
    title: "Weekly cadence",
    bullets: [
      "Workshops: Saturdays 2:00-3:00pm in SocSci 139 (hybrid option available).",
      "Project work sessions: Saturdays 3:00-4:00pm in SocSci 139 with mentor check-ins.",
    ],
  },
  {
    title: "Accountability",
    bullets: [
      "More than one unexcused workshop absence removes eligibility for certification.",
      "Notify division leads early if a permanent scheduling conflict exists; recordings provided when approved.",
    ],
  },
  {
    title: "Final deliverables",
    bullets: [
      "Project showcase with faculty and partner judges at semester end.",
      "Weighted score across presentation and exam informs placement on advanced engagements.",
    ],
  },
];

export default function Education() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#f8fbff] via-white to-[#e8f0ff] text-slate-900">
      <section className="hero-section text-white">
        <div className="grid gap-7 text-left">
          <h1 className="hero-heading m-0">
            Training Programs
          </h1>
        </div>
      </section>

      <section className="py-20 px-[6vw] grid gap-9">
        <div className="text-center grid gap-4">
          <h2 className="text-[36px] font-bold">
            Two pathways, one integrated build team
          </h2>
          <p className="text-lg text-slate-600 max-w-[820px] mx-auto leading-[1.7]">
            Members can specialize or rotate across the AI and infrastructure
            tracks. Shared milestones ensure that experimentation, deployment,
            and documentation stay in sync from the first workshop through the
            final showcase.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 items-stretch">
          {pathways.map((pathway) => (
            <Card
              key={pathway.name}
              className="bg-white rounded-[28px] border border-slate-300/20 shadow-[0_22px_46px_rgba(15,23,42,0.12)] p-9 px-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_32px_62px_rgba(15,23,42,0.16)]"
            >
              <CardHeader className="flex-shrink-0 h-[114px] flex flex-col justify-start gap-3 px-0 pt-0 pb-0">
                <div className="h-[32px] flex items-center flex-shrink-0">
                  <Badge className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600/12 text-blue-700 text-xs font-semibold tracking-[1.2px] uppercase w-fit h-[32px]">
                    {pathway.tag}
                  </Badge>
                </div>
                <div className="h-[70px] flex items-start flex-shrink-0">
                  <CardTitle className="text-[26px] font-[650] m-0 pt-5 leading-tight">
                    {pathway.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-0 px-0 flex-1 flex flex-col">
                <p className="text-[15.5px] leading-[1.75] text-slate-600 mb-8 flex-shrink-0">
                  {pathway.description}
                </p>
                <div className="flex-1">
                  {pathway.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 mb-4 last:mb-0">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-[14.5px] leading-[1.7] text-slate-700 flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      <section className="py-[90px] px-[6vw] grid gap-9">
        <div className="text-center grid gap-4">
          <h2 className="text-[34px] font-bold">
            AITP Fall 2025 syllabus at a glance
          </h2>
          <p className="text-[17px] text-slate-600 leading-[1.7]">
            Foundational weeks build statistical intuition, the mid-semester
            project track keeps momentum, and the final weeks dive deep into
            modern deep learning architectures.
          </p>
        </div>
        <div className="grid gap-[22px]">
          {syllabus.map((entry, idx) => (
            <div
              key={entry.label}
              className="grid grid-cols-[140px_minmax(0,1fr)] gap-5 items-start"
            >
              <div className="flex flex-col items-start gap-1.5">
                <span className="font-bold text-blue-700 text-base tracking-[0.6px]">
                  {entry.label}
                </span>
                <span className="text-sm text-slate-600 font-semibold">
                  {entry.topic}
                </span>
              </div>
              <div className="border-l-[3px] border-blue-600/18 pl-5 grid gap-2.5">
                {entry.bullets.map((item) => (
                  <div key={item} className="text-[15px] text-gray-800 leading-[1.6]">
                    {item}
                  </div>
                ))}
              </div>
              {idx !== syllabus.length - 1 && (
                <div className="col-span-full h-px bg-slate-300/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* <section className="py-20 px-[6vw] bg-gradient-to-br from-blue-500/8 via-teal-500/8 to-transparent grid gap-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
          {logistics.map((item) => (
            <Card
              key={item.title}
              className="bg-white rounded-[22px] border border-slate-300/25 shadow-[0_18px_42px_rgba(15,23,42,0.12)] p-7 px-[26px] grid gap-3 transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_32px_62px_rgba(15,23,42,0.16)]"
            >
              <CardHeader>
                <CardTitle className="text-xl font-[650] m-0">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2.5">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="text-[15px] text-gray-800 leading-[1.6]">
                    {bullet}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      <CallToAction
        title="Deliver, present, certify"
        description="Completing workshops and completion of the final project earns the AITP certification. Certified members flow directly into DAML senior engineering roles and our project teams."
        primaryButton={{
          text: "Join the mailing list",
          onClick: () => {
            if (typeof window !== "undefined") {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform"
              );
            }
          },
        }}
        secondaryButton={{
          text: "See the whole pipeline",
          href: "/mission",
        }}
        backgroundColor="bg-slate-900"
        maxWidth="960px"
      />
      <Footer />
    </div>
  );
}
