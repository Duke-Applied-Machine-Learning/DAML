"use client";

import { Fragment, type CSSProperties } from "react";

const missionPhases = [
  {
    caption: "Initial Planning Phase",
    title: "Project Proposal + Business Strategy",
    description:
      "Product Managers/ML Consultants meet to discuss ML strategy, develop a plan, and ensemble a DAML team of engineers.",
    accent: "#38bdf8",
  },
  {
    caption: "R&D Sprints",
    title: "ETL + EDA",
    description:
      "Our team extracts, transforms, and loads data for exploratory data analysis, and training/evaluating models, documenting the methodology.",
    accent: "#f97316",
  },
  {
    caption: "Validation & Deployment",
    title: "Review + scaling for deployment",
    description:
      "Model is presented to clients, where we begin scaling it into deployment.",
    accent: "#a855f7",
  },
  {
    caption: "Launch & Impact",
    title: "Solutions shipped with documentation",
    description:
      "We hand over production-ready repositories, training artifacts, and documentation.",
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
    "",
  },
  {
    stage: "AI Training Program (AITP)",
    focus:
      "Members' first intro to ML. Open to all, this 8-week program covers EDA and model training/evaluation.",
  },
  {
    stage: "DevOps Bootcamp",
    focus:
      "Taken alongside client projects and data engineering, this introduces cloud computing, containerization, and good deployment practices to scale ML models.",
  },
  {
    stage: "Data Engineering",
    focus:
      "Introduces ETL pipelines, data warehousing, and good data workflow practices.",
  },
  {
    stage: "Project Management",
    focus:
      "Members lead their own client projects.",
  },
  {
    stage: "Division Lead",
    focus:
      "",
  }
];

export default function MissionPage() {
  // Calculate a dynamic width so all engagement flow nodes fit on one row
  const nodeCount = engagementFlow.length;
  const nodeGap = 28; // must match the gap used in the container
  const nodeWidth = `calc((100% - ${
    nodeGap * (nodeCount - 1)
  }px) / ${nodeCount})`;
  const minNodeWidth = 260; // px
  const maxNodeWidth = 420; // px
  const widthExpression = `clamp(${minNodeWidth}px, ${nodeWidth}, ${maxNodeWidth}px)`;

  const primaryCtaStyle: CSSProperties = {
    background: "var(--site-cta-background)",
    color: "var(--site-cta-color)",
    border: "none",
    borderRadius: "var(--site-cta-radius)",
    padding: "var(--site-cta-padding)",
    fontSize: "var(--site-cta-font-size)",
    fontWeight: "var(--site-cta-font-weight)",
    cursor: "pointer",
    boxShadow: "var(--site-cta-shadow)",
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const timelineConnectorStyle: CSSProperties = {
    alignSelf: "center",
    flex: "0 0 64px",
    width: 64,
    height: 2,
    borderRadius: 999,
    background: "linear-gradient(90deg, rgba(37, 99, 235, 0.35), rgba(59, 130, 246, 0.7))",
  };

  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        background:
          "linear-gradient(180deg,#f7f9ff 0%,#ffffff 40%,#eef2ff 100%)",
        minHeight: "100vh",
        color: "#0f172a",
      }}
    >
      <section
        style={{
          padding: "var(--site-hero-padding)",
          background: "var(--site-hero-background)",
          color: "#ffffff",
          fontFamily: "var(--site-hero-font-family)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--site-hero-gap)",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "var(--site-hero-heading-size)",
              fontWeight: "var(--site-hero-heading-weight)",
              lineHeight: "var(--site-hero-heading-line-height)",
              margin: 0,
            }}
          >
            Mission & About Us
          </h1>
          <p
            style={{
              fontSize: "var(--site-hero-subheading-size)",
              lineHeight: "var(--site-hero-subheading-line-height)",
              color: "var(--site-hero-subheading-color)",
              maxWidth: "var(--site-hero-text-max-width)",
            }}
          >
            We're an inclusive student-led organization dedicated to cultivate 
            and accelerate student talent through education initiatives 
            and collaborative real-world ML projects. 
              <br /><br />
            Instead of limiting ourselves through a selective process, we open 
            our doors to all with a desire to learn.
          </p>
        </div>
      </section>

      <section
  style={{
    width: "100%",
    padding: "90px 6vw",
    display: "grid",
    gap: 44,
    background:
      "linear-gradient(135deg, #f4f7ff 0%, #e8f1ff 55%, #fdfbff 100%)",
  }}
>
  <div
    style={{
      display: "grid",
      gap: 24,
      background: "white",
      borderRadius: 28,
      border: "1px solid rgba(148, 163, 184, 0.2)",
      boxShadow: "0 20px 38px rgba(15, 23, 42, 0.12)",
      padding: "48px 56px",
    }}
  >
    <span
      style={{
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#1d4ed8",
        fontWeight: 600,
      }}
    ></span>

    <h2
      style={{
        fontSize: 36,
        fontWeight: 700,
        color: "#0f172a",
        marginBottom: 0,
      }}
    >
      Our members' journey.
    </h2>

    <div
      style={{
        fontSize: 19,
        color: "#475569",
        lineHeight: 1.8,
        maxWidth: 720,
        marginTop: 8,
      }}
    >
      <p style={{ marginBottom: 16 }}>
        Our members get started with our education initiatives, learning the
        fundamentals of ML and applying them with a beginner project. As they
        progress, they advance to further roles and start getting involved with
        our client projects.
      </p>

      {/* Inline text and button */}
      <p style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, margin: 0 }}>
        <span>Are you a student interested in joining DAML?</span>
        <button
                aria-label="Join our mailing list"
                style={primaryCtaStyle}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "var(--site-cta-shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "var(--site-cta-shadow)";
                }}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform?usp=dialog");
                  }
                }}
              >
                Join our mailing list 
              </button>
      </p>
    </div>
  </div>
</section>

      <section
        style={{
          padding: "72px 6vw 88px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 36,
          }}
        >
          <div style={{ textAlign: "center", display: "grid", gap: 14 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0f172a" }}>
              Our members' learning progression:
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: 28,
              justifyContent: "flex-start",
              alignItems: "stretch",
              overflowX: "hidden",
              padding: "12px 8px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {engagementFlow.map((step, index) => (
              <Fragment key={step.stage}>
                <div
                  style={{
                    width: widthExpression,
                    minHeight: 260,
                    borderRadius: 20,
                    background:
                      "linear-gradient(150deg, rgba(241, 245, 255, 0.95), rgba(226, 232, 255, 0.85))",
                    border: "2px dotted rgba(37, 99, 235, 0.5)",
                    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                    padding: "26px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 12,
                    boxSizing: "border-box",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-6px)";
                    event.currentTarget.style.boxShadow =
                      "0 28px 65px rgba(15, 23, 42, 0.12)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";
                    event.currentTarget.style.boxShadow =
                      "0 18px 45px rgba(15, 23, 42, 0.08)";
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#1e3a8a",
                    }}
                  >
                    {step.stage}
                  </span>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#1e293b",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {step.focus}
                  </p>
                </div>
                {index < engagementFlow.length - 1 && (
                  <div style={timelineConnectorStyle} aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          padding: "84px 6vw 60px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 32,
            display: "grid",
            gap: 16,
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Our research & delivery process for client projects
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#475569",
              maxWidth: 820,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Each engagement flows through an 4 iterative, research-backed
            phases. Discovery immerses in context, parallel R&amp;D keeps
            firmware and software aligned, validation adds faculty and partner
            rigor, and launch channels outcomes back into the community.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          {missionPhases.map((step) => (
            <div
              key={step.title}
              style={{
                background: `linear-gradient(160deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.75)), linear-gradient(145deg, ${step.accent}33, transparent)`,
                borderRadius: 28,
                padding: "36px 32px",
                boxShadow: "0 24px 48px rgba(15, 23, 42, 0.12)",
                border: `1px solid ${step.accent}55`,
                display: "grid",
                gap: 18,
                color: "#f8fafc",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-8px)";
                event.currentTarget.style.boxShadow =
                  "0 32px 60px rgba(15, 23, 42, 0.18)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow =
                  "0 24px 48px rgba(15, 23, 42, 0.12)";
              }}
            >
              <span
                style={{
                  color: "#e0ecff",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                }}
              >
                {step.caption}
              </span>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  margin: 0,
                  color: "#f8fafc",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(226, 232, 240, 0.88)",
                  lineHeight: 1.75,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background:
            "linear-gradient(140deg, #020f2a 0%, #033c82 60%, #0b63bf 100%)",
          color: "#f8fafc",
          padding: "96px 6vw",
          marginTop: 150,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 36,
            alignItems: "stretch",
          }}
        >
          <div style={{ display: "grid", gap: 18 }}>
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(148, 197, 255, 0.85)",
              }}
            >
              Embedded partnership
            </span>
            <h2 style={{ fontSize: 36, margin: 0, fontWeight: 700 }}>
              How we embed with your team
            </h2>
            <p style={{ fontSize: 18, color: "#cbd5f5", lineHeight: 1.75 }}>
              From assigning DAML teams to delivering progress checks, our deliverables 
              are designed to be easily integrated into your existing workflows.
            </p>
          </div>
          {partnershipPillars.map((pillar) => (
            <div
              key={pillar.label}
              style={{
                background: "rgba(8, 25, 61, 0.65)",
                borderRadius: 22,
                padding: "32px 28px",
                border: "1px solid rgba(148, 197, 255, 0.35)",
                minHeight: 220,
                display: "grid",
                gap: 12,
                boxShadow: "0 24px 50px rgba(2, 12, 32, 0.4)",
              }}
            >
              <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
                {pillar.label}
              </h3>
              <p style={{ fontSize: 16, color: "#e2e8f0", lineHeight: 1.65 }}>
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #1d4ed8, #9333ea)",
          color: "white",
          padding: "72px 6vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 36, fontWeight: 700 }}>
            Ready to prototype with DAML?
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(241, 245, 249, 0.9)",
            }}
          >
            Contact our teams, share the challenge, the stakeholders we should meet, and the
            environments we need to plug into.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="mailto:renzo.larrea@duke.edu"
              style={{
                background: "white",
                color: "#1d4ed8",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 16px 32px rgba(15, 23, 42, 0.18)",
              }}
            >
              Start a project conversation {"->"}
            </a>
            <a
              href="/partnerWithUs"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
              }}
            >
              See partnership playbooks {"->"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
