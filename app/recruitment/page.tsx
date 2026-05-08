"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

const syllabus = [
  {
    label: "Week 1",
    topic: "How machines learn",
    bullets: [
      "Gradient descent, loss functions, bias-variance tradeoff, and structural risk minimization.",
      "Hyperparameter tuning, cross-validation, train-test splits, and model evaluation.",
      "Hands-on with linear and logistic regression, k-nearest neighbors, and SVMs.",
    ],
    highlight: false,
  },
  {
    label: "Week 2",
    topic: "Data science pipeline",
    bullets: [
      "Cleaning with emphasis on missing data and encodings that fight the curse of dimensionality.",
      "Text and image preprocessing plus exploratory data analysis methods like ROC analysis and Pearson correlations.",
    ],
    highlight: false,
  },
  {
    label: "After Week 2",
    topic: "Choose your final project track",
    bullets: [
      "Members select a real partner-aligned brief and form project teams with DAML mentors.",
      "Milestones, tech stack guardrails, and accountability cadences are set before Week 3.",
    ],
    highlight: true,
  },
  {
    label: "Week 3",
    topic: "Dimension reduction and clustering",
    bullets: [
      "Principal component analysis and manifold learning techniques like MDS, Isomap, spectral clustering, and t-SNE.",
      "Clustering with k-means and expectation-maximization.",
    ],
    highlight: false,
  },
  {
    label: "Week 4",
    topic: "Ensemble methods and boosting",
    bullets: [
      "Decision trees, information theory, random forests, AdaBoost, XGBoost, and generalized additive models.",
    ],
    highlight: false,
  },
  {
    label: "Week 5",
    topic: "Neural network fundamentals",
    bullets: [
      "Architecture design, activation functions, universal approximation, and backpropagation.",
    ],
    highlight: false,
  },
  {
    label: "Week 6",
    topic: "Convolutional neural networks",
    bullets: [
      "Convolutional layers, kernels, pooling strategies, and computer vision applications.",
    ],
    highlight: false,
  },
  {
    label: "Week 7",
    topic: "Recurrent neural networks and LSTMs",
    bullets: [
      "Motivation, vanishing gradients, and LSTM gate mechanics for NLP workflows.",
    ],
    highlight: false,
  },
  {
    label: "Week 8",
    topic: "Transformers and LLMs",
    bullets: [
      "Transformer architecture, semi-supervised fine-tuning, and practical BERT + LLM deployments.",
    ],
    highlight: false,
  },
];

const structureItems = [
  {
    label: "Weekly cadence",
    detail: "Workshops run Saturdays 2:00–3:00 pm in Social Sciences 139.",
  },
  {
    label: "Project sessions",
    detail: "Dedicated project work sessions follow immediately after from 3:00–4:00 pm with mentor check-ins.",
  },
  {
    label: "Mentorship",
    detail: "Each project team is paired with experienced DAML engineers who guide scoping, execution, and delivery.",
  },
];

const requirementItems = [
  {
    label: "Prerequisites",
    detail: "Comfort with Python from CS 101/201 or equivalent. Prior ML exposure is helpful but not required.",
  },
  {
    label: "Attendance",
    detail: "More than two unexcused absences removes eligibility for certification. Recordings are provided for approved conflicts.",
  },
  {
    label: "Deliverables",
    detail: "A final project showcase judged by our DS Directors. Weighted scores across presentation and exam inform whether members pass our program.",
  },
];

const mailingListUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform";
const aitpUrl = "https://duke-applied-machine-learning.github.io/aitp-website/";

export default function Education() {
  return (
    <div className="font-sans bg-white text-slate-900">

      {/* Section 1: Hero */}
      <section className="hero-internal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prattschoolofeng.jpg"
            alt="DAML training environment"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-content relative z-10 grid gap-2 text-left">
          <p className="kicker mb-3">Recruitment</p>
          <h1 className="h1 m-0">AI Training Program</h1>
          <p className="hero-sub m-0 mt-4 max-w-[600px]">
            The structured entry point into DAML engineering. Members who complete AITP
            transition directly into internal and client-facing project teams.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="cta" asChild>
              <a href={aitpUrl} target="_blank" rel="noopener noreferrer">AITP Site</a>
            </Button>
            <Button
              variant="cta-outline-dark"
              onClick={() => {
                if (typeof window !== "undefined") window.open(mailingListUrl);
              }}
            >
              Join us
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Program Overview */}
      <section className="section section-lg bg-surface-base border-b border-slate-200/70">
        <div className="container-content mx-auto grid gap-10">
          <div className="grid gap-4 max-w-2xl">
            <p className="kicker">Program Overview</p>
            <h2 className="section-heading">
              AITP: The pathway into DAML engineering
            </h2>
            <p className="hero-sub text-slate-700">
              DAML&apos;s AI Training Program (AITP) is the structured entry point for members
              to become engineers within the organization.
            </p>
          </div>

          <div className="grid gap-5 max-w-2xl">
            <p className="body text-slate-600 leading-relaxed">
              All members complete AITP before joining internal and client project teams.
              The program establishes the technical foundation and development workflow
              required to contribute to real machine learning systems.
            </p>
            <p className="body text-slate-600 leading-relaxed">
              Members progress through training, evaluation, and a final project before
              transitioning into active engineering roles within DAML.
            </p>
            <Button variant="cta" asChild className="w-fit mt-2">
              <a href={aitpUrl} target="_blank" rel="noopener noreferrer">Explore our curriculum</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Curriculum */}
      <section className="section section-lg bg-white border-t border-slate-200/70">
        <div className="container-content mx-auto grid gap-9">
          <div className="grid gap-4 max-w-2xl">
            <p className="kicker">Curriculum</p>
            <h2 className="section-heading">Syllabus</h2>
          </div>

          <div className="grid gap-0">
            {syllabus.map((entry, idx) => (
              <div key={entry.label}>
                {entry.highlight ? (
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)] gap-4 sm:gap-6 items-start rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 px-4 py-5 my-2">
                    <div className="flex flex-col gap-1.5 pt-0.5">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary)]">
                          {entry.label}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-slate-800 leading-snug">
                        {entry.topic}
                      </span>
                      <span className="mt-1 inline-block text-[11px] font-semibold tracking-wider uppercase text-white bg-[var(--color-primary)] rounded-full px-2 py-0.5 w-fit">
                        Project Phase Begins
                      </span>
                    </div>
                    <div className="border-l-2 border-[var(--color-primary)] pl-5 grid gap-2">
                      {entry.bullets.map((item) => (
                        <p key={item} className="body text-slate-600">{item}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-[120px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)] gap-4 sm:gap-6 items-start py-5">
                    <div className="flex flex-col gap-1 pt-0.5">
                      <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-copper)]">
                        {entry.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 leading-snug">
                        {entry.topic}
                      </span>
                    </div>
                    <div className="border-l-2 border-[var(--color-copper)] pl-5 grid gap-2">
                      {entry.bullets.map((item) => (
                        <p key={item} className="body text-slate-600">{item}</p>
                      ))}
                    </div>
                  </div>
                )}
                {idx !== syllabus.length - 1 && !entry.highlight && !syllabus[idx + 1]?.highlight && (
                  <div className="h-px bg-slate-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works (Logistics) */}
      <section className="section section-lg bg-surface-base border-t border-slate-200/70">
        <div className="container-content mx-auto grid gap-9">
          <div className="grid gap-3 max-w-xl">
            <p className="kicker">Logistics</p>
            <h2 className="section-heading">Expectations & Information</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Block 1: Structure */}
            <Card className="card-elevated bg-white rounded-2xl border border-slate-200/70 p-7">
              <CardHeader className="px-0 pt-0 pb-5">
                <CardTitle className="text-lg font-[650] text-slate-900">Structure</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 grid gap-5">
                {structureItems.map((item) => (
                  <div key={item.label} className="grid gap-1">
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="body text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Block 2: Requirements */}
            <Card className="card-elevated bg-white rounded-2xl border border-slate-200/70 p-7">
              <CardHeader className="px-0 pt-0 pb-5">
                <CardTitle className="text-lg font-[650] text-slate-900">Requirements</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 grid gap-5">
                {requirementItems.map((item) => (
                  <div key={item.label} className="grid gap-1">
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="body text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <CallToAction
        title="Ready to Join?"
        description="Join us on our mailing list to stay updated on the next AITP session."
        primaryButton={{
          text: "AITP Site",
          href: aitpUrl,
        }}
        secondaryButton={{
          text: "Join the mailing list",
          onClick: () => {
            if (typeof window !== "undefined") window.open(mailingListUrl);
          },
        }}
        maxWidth="960px"
      />
      <Footer />
    </div>
  );
}
