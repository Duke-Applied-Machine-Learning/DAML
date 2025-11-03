"use client";

import Image from "next/image";
import leaders from "../../data/leaders";

function buildEmail(name: string) {
  const parts = name.trim().toLowerCase().split(/\s+/);
  if (parts.length === 1) {
    return `${parts[0]}@duke.edu`;
  }
  const email = `${parts[0]}.${parts[parts.length - 1]}`;
  return `${email}@duke.edu`;
}

export default function Students() {
  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        background: "linear-gradient(180deg, #f4f7ff 0%, #ffffff 50%, #eef2ff 100%)",
        color: "#0f172a",
      }}
    >
      <section
        style={{
          position: "relative",
          padding: "120px 6vw 90px",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.18), transparent 55%), radial-gradient(circle at 85% 25%, rgba(14, 116, 144, 0.2), transparent 50%), linear-gradient(120deg, #031633 0%, #0f3a63 45%, #1f6aa5 85%)",
          color: "white",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: 1080,
            margin: "0 auto",
            display: "grid",
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 14,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 600,
              color: "rgba(191, 219, 254, 0.85)",
            }}
          >
            Leadership
          </span>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            The people steering DAML&apos;s research, training, and partner work.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.75,
              color: "rgba(226, 232, 240, 0.9)",
              maxWidth: 800,
            }}
          >
            Directors, division leads, and instructors collaborate across hardware, software, and analytics pods. Get in
            touch to partner on a build, mentor the next cohort, or explore how DAML can embed with your team.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "90px 6vw 110px",
          display: "grid",
          gap: 40,
        }}
      >
        <div style={{ textAlign: "center", display: "grid", gap: 12 }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, margin: 0 }}>Lead team</h2>
          <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.7, maxWidth: 760, margin: "0 auto" }}>
            Hover to see more about each leader&apos;s focus area. Every email is first.last@duke.edu, keeping outreach effortless.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
          }}
        >
          {leaders.map((leader) => {
            const email = buildEmail(leader.name);
            return (
              <article
                key={leader.name}
                style={{
                  background: "white",
                  borderRadius: 28,
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                  boxShadow: "0 24px 46px rgba(15, 23, 42, 0.12)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateRows: "260px auto",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-10px)";
                  event.currentTarget.style.boxShadow =
                    "0 32px 62px rgba(15, 23, 42, 0.18)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 24px 46px rgba(15, 23, 42, 0.12)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 20% 15%, rgba(59, 130, 246, 0.35), transparent 65%), radial-gradient(circle at 85% 20%, rgba(14, 165, 233, 0.28), transparent 60%)",
                      zIndex: 1,
                    }}
                  />
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      transform: "scale(1.05)",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "28px 26px 32px",
                    display: "grid",
                    gap: 14,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontSize: 22, fontWeight: 650 }}>{leader.name}</span>
                    <span style={{ fontSize: 15, color: "#1d4ed8", fontWeight: 600 }}>{leader.role}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: "rgba(59, 130, 246, 0.12)",
                        color: "#1d4ed8",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: 0.4,
                      }}
                    >
                      {leader.major}
                    </span>
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: "rgba(15, 118, 110, 0.12)",
                        color: "#0f766e",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: 0.4,
                      }}
                    >
                      {leader.year}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.65 }}>{leader.description}</p>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 18px",
                      borderRadius: 999,
                      border: "1px solid rgba(37, 99, 235, 0.3)",
                      color: "#1d4ed8",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: 14,
                    }}
                  >
                    {email}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        style={{
          padding: "68px 6vw",
          background: "linear-gradient(120deg, #040c24, #0b2f5c)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gap: 18,
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 30, fontWeight: 700, margin: 0 }}>Partner or mentor with DAML</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(226, 232, 240, 0.85)" }}>
            Whether you want to scope a project, give a workshop, or connect talent with opportunities, reach out to any
            director or division lead. We will route your note to the right pod within 24 hours.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href="mailto:renzo.larrea@duke.edu"
              style={{
                background: "white",
                color: "#1d4ed8",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Talk with the directors {"->"}
            </a>
            <a
              href="mailto:mayur.sekhar@duke.edu"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
              }}
            >
              Explore consulting pods {"->"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
