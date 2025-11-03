"use client";
import Image from "next/image";
import { useState } from "react";

const leaders = [
  {
    name: "Renzo Larrea",
    img: "/renzo.jpeg",
    role: "Director",
    major: "Math & Stats",
    year: "2028",
    description:
      "Renzo leads DAML, coordinates all subteams, and specializes in deep learning for healthcare.",
  },
  {
    name: "Jonathan Ouwerx",
    img: "/jonathan.jpeg",
    role: "Director",
    major: "Math & CS",
    year: "2027",
    description:
      "Jonathan oversees strategic planning, team coordination, and operational efficiency at DAML.",
  },
  {
    name: "Brian Chen",
    img: "/brian.jpeg",
    role: "Head of Outreach",
    major: "CS",
    year: "2026",
    description:
      "Brian oversees budgeting, financial planning, and resource allocation for DAML's initiatives.",
  },
  {
    name: "Jai Kasera",
    img: "/Jai.jpeg",
    role: "Data Science Division Lead",
    major: "Math & CS",
    year: "2027",
    description:
      "Jai manages AITP logistics and client communication.",
  },
  {
    name: "Arjun Mahesh",
    img: "/arjun.jpeg",
    role: "Software Division Lead",
    major: "Math, CS, & Finance",
    year: "2026",
    description:
      "Arjun oversees software engineering, code quality, and ML infrastructure for all teams.",
  },
  {
    name: "Orlando Jacob Tardi",
    img: "/orlando.jpeg",
    role: "VP Hardware",
    major: "BME",
    year: "2026",
    description:
      "Orlando leads hardware and robotics, integrating ML with embedded systems and IoT devices.",
  },
  {
    name: "Mayur Sekhar",
    img: "/Mayur.png",
    role: "Head of ML Consulting",
    major: "Math & CS, AI Concentration",
    year: "2027",
    description:
      "Mayur manages DAML's finances, fundraising, and external partnerships.",
  },
  {
    name: "Arnav Jindal",
    img: "/arnav.png",
    role: "DevOps Course Instructor",
    major: "CS",
    year: "2026",
    description:
      "Lila handles communications, meeting notes, and DAML's online presence.",
  },
  {
    name: "Rithvik Neti",
    img: "/rithvik.jpeg",
    role: "AITP Course Instructor",
    major: "CS & Political Science",
    year: "2027",
    description:
      "Rithvik teaches our foundational AI course, covering machine learning concepts and applications.",
  },
  {
    name: "David Li",
    img: "/David.jpeg",
    role: "Head of Project Management",
    major: "CS & Econ",
    year: "2028",
    description:
      "David oversees project timelines, deliverables, and team coordination for all DAML initiatives.",
  },
  {
    name: "Saubdiel Avalos",
    img: "/saubdiel.png",
    role: "Graphics Designer",
    major: "Econ & Public Policy",
    year: "2027",
    description:
      "Saubdiel cultivates and manages relationships with external partners to drive DAML's mission forward.",
  },
  {
    name: "Valiantsin Kasabrukhau",
    img: "headshotsample.jpg",
    role: "Website Developer",
    major: "CS & AI Concentration",
    year: "2028",
    description:
      "Bro lock in",
  }
];

export default function Leadership() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Primary Image */}
      <div style={{ width: "100%", marginBottom: 32 }}>
        <Image
          src="/dukestudents.jpg"
          alt="DAML Leadership Team"
          width={1920}
          height={400}
          style={{
            width: "100%",
            height: 320,
            objectFit: "cover",
            borderRadius: 0,
            display: "block",
          }}
        />
      </div>
      {/* Title and Subtitle */}
      <div style={{ textAlign: "center", marginBottom: 32, marginTop: 100 }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#012169",
            marginBottom: 8,
          }}
        >
          DAML Leadership
        </h1>
        <h2 style={{ fontSize: 22, color: "#222", fontWeight: 400, margin: 0 }}>
          Meet the team driving innovation, collaboration, and impact at Duke
          Applied Machine Learning.
        </h2>
      </div>
      {/* Grid of Leaders */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 48,
          maxWidth: 1800,
          margin: "0 auto",
          marginTop: 100,
          padding: "0 32px 64px 32px",
        }}
      >
        {leaders.map((leader, idx) => (
          <div
            key={leader.name}
            style={{
              background: "#f7f7fa",
              borderRadius: 24,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              minHeight: 480,
              width: "100%",
              maxWidth: 600,
              margin: "0 auto",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top Half Image */}
            <div
              style={{
                width: "100%",
                height: 240,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={leader.img}
                alt={leader.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Tags */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 18,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  background: "#e6eaf3",
                  color: "#012169",
                  fontSize: 13,
                  fontWeight: 500,
                  borderRadius: 16,
                  padding: "4px 12px",
                  border: "1px solid #c3d0e8",
                  letterSpacing: 0.2,
                }}
              >
                {leader.role}
              </span>
              <span
                style={{
                  background: "#e6eaf3",
                  color: "#012169",
                  fontSize: 13,
                  fontWeight: 500,
                  borderRadius: 16,
                  padding: "4px 12px",
                  border: "1px solid #c3d0e8",
                  letterSpacing: 0.2,
                }}
              >
                {leader.major}
              </span>
              <span
                style={{
                  background: "#e6eaf3",
                  color: "#012169",
                  fontSize: 13,
                  fontWeight: 500,
                  borderRadius: 16,
                  padding: "4px 12px",
                  border: "1px solid #c3d0e8",
                  letterSpacing: 0.2,
                }}
              >
                {leader.year}
              </span>
            </div>
            {/* Name */}
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#222",
                marginBottom: 6,
                marginTop: 8,
              }}
            >
              {leader.name}
            </div>
            {/* Description on hover */}
            <div
              style={{
                opacity: hovered === idx ? 1 : 0,
                pointerEvents: hovered === idx ? "auto" : "none",
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255,255,255,0.97)",
                borderRadius: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 32,
                fontSize: 17,
                color: "#012169",
                fontWeight: 500,
                textAlign: "center",
                boxShadow:
                  hovered === idx ? "0 4px 24px rgba(0,0,0,0.10)" : undefined,
                transition: "opacity 0.2s",
                zIndex: 2,
              }}
            >
              {leader.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
