"use client";
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
      "Growth mindset and a willingness to collaborate in fast-paced project teams.",
    ],
  },
  {
    title: "Weekly cadence",
    bullets: [
      "Workshops: Saturdays 2:00-3:00pm in SocSci 139 (hybrid option available).",
      "Project work sessions: Saturdays 3:00-4:00pm in SocSci 139 with mentor check-ins.",
      "Time cards document hours spent, progress, and GitHub commits for accountability.",
    ],
  },
  {
    title: "Accountability",
    bullets: [
      "More than one unexcused workshop absence removes eligibility for certification.",
      "Notify division leads early if a permanent scheduling conflict exists; recordings provided when approved.",
      "Peer evaluations and final deliverables determine advancement to Senior Engineer roles.",
    ],
  },
  {
    title: "Final deliverables",
    bullets: [
      "Project showcase with faculty and partner judges at semester end.",
      "Short final exam covering AITP content to validate mastery.",
      "Weighted score across presentation and exam informs placement on advanced engagements.",
    ],
  },
];

export default function Education() {
  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        background:
          "linear-gradient(180deg, #f8fbff 0%, #ffffff 40%, #e8f0ff 100%)",
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
            maxWidth: "var(--site-hero-max-width)",
            margin: "0 auto",
            display: "grid",
            gap: "var(--site-hero-gap)",
          }}
        >
          <span
            style={{
              fontSize: 14,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 600,
              color: "rgba(191, 219, 254, 0.8)",
            }}
          >
          </span>
          <h1
            style={{
              fontSize: "var(--site-hero-heading-size)",
              fontWeight: "var(--site-hero-heading-weight)",
              lineHeight: "var(--site-hero-heading-line-height)",
              margin: 0,
            }}
          >
            DAML Training Programs
          </h1>
          <p
            style={{
              fontSize: "var(--site-hero-subheading-size)",
              lineHeight: "var(--site-hero-subheading-line-height)",
              color: "var(--site-hero-subheading-color)",
              maxWidth: "var(--site-hero-text-max-width)",
            }}
          >
           
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "80px 6vw",
          display: "grid",
          gap: 36,
        }}
      >
        <div style={{ textAlign: "center", display: "grid", gap: 16 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700 }}>
            Two pathways, one integrated build team
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
            Members can specialize or rotate across the AI and infrastructure
            tracks. Shared milestones ensure that experimentation, deployment,
            and documentation stay in sync from the first workshop through the
            final showcase.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {pathways.map((pathway) => (
            <div
              key={pathway.name}
              style={{
                background: "white",
                borderRadius: 28,
                border: "1px solid rgba(148, 163, 184, 0.2)",
                boxShadow: "0 22px 46px rgba(15, 23, 42, 0.12)",
                padding: "36px 32px",
                display: "grid",
                gap: 18,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-10px)";
                event.currentTarget.style.boxShadow =
                  "0 32px 62px rgba(15, 23, 42, 0.16)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow =
                  "0 22px 46px rgba(15, 23, 42, 0.12)";
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "rgba(37, 99, 235, 0.12)",
                  color: "#1d4ed8",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                }}
              >
                {pathway.tag}
              </span>
              <h3 style={{ fontSize: 26, fontWeight: 650, margin: 0 }}>
                {pathway.name}
              </h3>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.65 }}>
                {pathway.description}
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {pathway.highlights.map((item) => (
                  <div
                    key={item}
                    style={{
                      position: "relative",
                      paddingLeft: "var(--card-bullet-indent)",
                      fontSize: 15,
                      color: "#1f2937",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.6em",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#1d4ed8",
                        transform: "translateY(-50%)",
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section
        style={{
          padding: "90px 6vw",
          display: "grid",
          gap: 36,
        }}
      >
        <div style={{ textAlign: "center", display: "grid", gap: 16 }}>
          <h2 style={{ fontSize: 34, fontWeight: 700 }}>
            AITP Fall 2025 syllabus at a glance
          </h2>
          <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.7 }}>
            Foundational weeks build statistical intuition, the mid-semester
            project track keeps momentum, and the final weeks dive deep into
            modern deep learning architectures.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: 22,
          }}
        >
          {syllabus.map((entry, idx) => (
            <div
              key={entry.label}
              style={{
                display: "grid",
                gridTemplateColumns: "140px minmax(0, 1fr)",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "#1d4ed8",
                    fontSize: 16,
                    letterSpacing: 0.6,
                  }}
                >
                  {entry.label}
                </span>
                <span
                  style={{ fontSize: 14, color: "#475569", fontWeight: 600 }}
                >
                  {entry.topic}
                </span>
              </div>
              <div
                style={{
                  borderLeft: "3px solid rgba(37, 99, 235, 0.18)",
                  paddingLeft: 20,
                  display: "grid",
                  gap: 10,
                }}
              >
                {entry.bullets.map((item) => (
                  <div
                    key={item}
                    style={{ fontSize: 15, color: "#1f2937", lineHeight: 1.6 }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {idx !== syllabus.length - 1 && (
                <div
                  style={{
                    gridColumn: "1 / -1",
                    height: 1,
                    background: "rgba(148, 163, 184, 0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "80px 6vw",
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(20, 184, 166, 0.08))",
          display: "grid",
          gap: 32,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {logistics.map((item) => (
            <div
              key={item.title}
              style={{
                background: "white",
                borderRadius: 22,
                border: "1px solid rgba(148, 163, 184, 0.25)",
                boxShadow: "0 18px 42px rgba(15, 23, 42, 0.12)",
                padding: "28px 26px",
                display: "grid",
                gap: 12,
              }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 650, margin: 0 }}>
                {item.title}
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    style={{ fontSize: 15, color: "#1f2937", lineHeight: 1.6 }}
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "72px 6vw",
          background: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gap: 20,
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 34, fontWeight: 700, margin: 0 }}>
            Deliver, present, certify
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(226, 232, 240, 0.85)",
            }}
          >
            Completing workshops, milestones, showcase presentations, and the
            final exam earns the AITP certification. Certified members flow
            directly into DAML senior engineering roles and partner-facing pods.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              style={{
                background: "white",
                color: "#1d4ed8",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 16px 32px rgba(15, 23, 42, 0.18)",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform"
                  );
                }
              }}
            >
              Join the mailing list {"->"}
            </button>
            <a
              href="/mission"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
              }}
            >
              See how training fuels R&D {"->"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
