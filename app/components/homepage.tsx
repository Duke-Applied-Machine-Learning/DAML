import Image from "next/image";
import { useState, useRef, useEffect } from "react";

/**
 * AnimatedRotator
 * - delay: ms between swaps (default 3000)
 * - animMs: ms for swipe animation (default 600)
 * This component injects styles under id="daml-rotator-styles" only and uses .daml-rotator.
 */
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

  // Inject CSS once (idempotent)
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("daml-rotator-styles")) return;
    const style = document.createElement("style");
    style.id = "daml-rotator-styles";
    style.textContent = `
      .daml-rotator { position: relative; display: inline-block; overflow: visible; height: 48px; vertical-align: middle; }
      .daml-rotator .rot-item {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        transform: translateX(100%);
        opacity: 0;
        white-space: nowrap;
        font-weight: 700;
        font-size: clamp(20px, 3.2vw, 36px); /* responsive size */
        font-family: "Roboto", sans-serif;
        pointer-events: none;
        z-index: 10;
        text-shadow: 0 2px 12px rgba(2,6,23,0.55);
        letter-spacing: 0.15px;
      }
      @keyframes damlSlideIn {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0%); opacity: 1; }
      }
      @keyframes damlSlideOut {
        0% { transform: translateX(0%); opacity: 1; }
        100% { transform: translateX(-100%); opacity: 0; }
      }
      .daml-rotator .slide-in {
        animation-name: damlSlideIn;
        animation-timing-function: cubic-bezier(.2,.9,.2,1);
        animation-fill-mode: forwards;
      }
      .daml-rotator .slide-out {
        animation-name: damlSlideOut;
        animation-timing-function: cubic-bezier(.2,.9,.2,1);
        animation-fill-mode: forwards;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Interval/timer for swapping
  useEffect(() => {
    if (!items || items.length <= 1) return;

    // clear existing timers
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (clearPrevTimeoutRef.current) {
      window.clearTimeout(clearPrevTimeoutRef.current);
      clearPrevTimeoutRef.current = null;
    }

    const normalDelay = delay;
const endPause = delay * 2; // 👈 2× longer pause after last item (adjust as you like)

const runCycle = () => {
  setPrev(indexRef.current);
  const next = (indexRef.current + 1) % items.length;
  setIndex(next);
  indexRef.current = next;

  // clear prev after animation completes
  if (clearPrevTimeoutRef.current) {
    window.clearTimeout(clearPrevTimeoutRef.current);
  }
  clearPrevTimeoutRef.current = window.setTimeout(() => {
    setPrev(null);
    clearPrevTimeoutRef.current = null;
  }, animMs);

  // schedule the next run with variable delay
  const nextDelay = next === 0 ? endPause : normalDelay;
  intervalRef.current = window.setTimeout(runCycle, nextDelay);
};

// start the first cycle
intervalRef.current = window.setTimeout(runCycle, delay);

return () => {
  if (intervalRef.current) window.clearTimeout(intervalRef.current);
  if (clearPrevTimeoutRef.current) window.clearTimeout(clearPrevTimeoutRef.current);
};

    
  }, [items.length, delay, animMs]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  return (
    <span
      className={className ? `${className} daml-rotator` : "daml-rotator"}
      aria-live="polite"
      role="status"
      style={{ display: "inline-block", verticalAlign: "middle", zIndex: 80 }}
    >
      {items.map((text, i) => {
        const cls =
          i === index ? "rot-item slide-in" : i === prev ? "rot-item slide-out" : "rot-item";
        const style: React.CSSProperties = { animationDuration: `${animMs}ms` };
        return (
          <span key={text + i} className={cls} style={style}>
            {text}
          </span>
        );
      })}
    </span>
  );
}
export { AnimatedRotator };

// Add Roboto font and animations
if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

/* ---- Existing AnimatedGradient (small edit only to include rotator) ---- */
function AnimatedGradient() {
  const numCircles = 3;
  const [positions, setPositions] = useState(
    Array(numCircles).fill({ x: 50, y: 50 })
  );
  const [opacity, setOpacity] = useState(1);
  const mouseRef = useRef({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setPositions((prev) =>
        prev.map((pos, i) => {
          const easing = 0.1 / (i + 1);
          const nx = pos.x + (mouseRef.current.x - pos.x) * easing;
          const ny = pos.y + (mouseRef.current.y - pos.y) * easing;
          return { x: nx, y: ny };
        })
      );
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
    setOpacity(1);
  }
  function handleMouseLeave() {}
  function handleMouseEnter() {
    setOpacity(1);
  }

  const gradientColors = ["#ff7f6e", "#ff6f61", "#ff9478", "#3d5a80"];

  return (
  <div
    ref={containerRef}
    className="w-full h-[120-vh] min-h-[900px] relative overflow-hidden"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    onMouseEnter={handleMouseEnter}
  >
    {/* Background gradient layers */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1e3a5f, #2a4d7c, #ff6f61)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {positions.map((pos, i) => {
        const offsetX = i * 10;
        const offsetY = i * 5;
        const color = gradientColors[i % gradientColors.length];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity,
              transition: "opacity 0.8s ease",
              background: `radial-gradient(circle at ${pos.x + offsetX}% ${
                pos.y + offsetY
              }%, ${color}80 0%, ${color}44 40%, transparent 70%)`,
            }}
          />
        );
      })}
    </div>

    {/* Foreground content */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "72px",
        color: "#ffffff",
        zIndex: 10,
        pointerEvents: "none",
        paddingLeft: "40px",
      }}
    >
      {/* Hero title + rotating subtitle - wrapped to avoid clipping */}
      <div
  style={{
    pointerEvents: "auto",
    maxWidth: "calc(100% - 80px)",
    position: "relative",
    overflow: "visible",
    zIndex: 90,
    display: "flex",
    flexDirection: "column",
    gap: "6px", // tight stack
  }}
>
  <div
    style={{
       fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "80px",   // unchanged
    color: "#ffffff",
    lineHeight: 1.1,
    margin: 0,
    pointerEvents: "none",
    }}
  >
    Duke Applied
    <br />
    Machine Learning
  </div>

  {/* Rotator placed immediately below the title */}
  <div
  style={{
    marginTop: 8,
    fontFamily: "Roboto, sans-serif",
    fontSize: "28px",
    fontWeight: 500,
    color: "#d9d5d5ff", // light gray for subtle contrast
    maxWidth: "800px", // keeps line length nice
    lineHeight: 1.4,
  }}
>
  An open-membership student org dedicated to enhance ML education at Duke
</div>

  {/* Action buttons - reduce top margin to tighten further */}
  <div
    style={{
      marginTop: "25px",
      display: "flex",
      gap: "12px",
      pointerEvents: "auto",
    }}
  >
          <button
            style={{
              backgroundColor: "#ffffff",
              color: "#1f2937",
              fontWeight: 600,
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(148, 163, 184, 0.4)",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.35s ease",
              boxShadow: "0 12px 24px rgba(15, 23, 42, 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1f2937";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow =
                "0 20px 28px rgba(15, 23, 42, 0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#1f2937";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(15, 23, 42, 0.12)";
            }}
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/mission";
              }
            }}
          >
            Tell me more →
          </button>

          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: 600,
              padding: "12px 22px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.35s ease",
              boxShadow: "0 18px 32px rgba(37, 99, 235, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1d4ed8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 22px 40px rgba(29, 78, 216, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 18px 32px rgba(37, 99, 235, 0.35)";
            }}
            onClick={() => {
              const section = document.getElementById("join-daml");
              if (!section) return;

              // wait 0.6 s before starting the scroll
              setTimeout(() => {
              // --- 1. Create a temporary dim overlay ---
              const overlay = document.createElement("div");
              overlay.style.position = "fixed";
              overlay.style.top = "0";
              overlay.style.left = "0";
              overlay.style.width = "100vw";
              overlay.style.height = "100vh";
              overlay.style.background = "rgba(0,0,0,0)";
              overlay.style.zIndex = "9999";
              overlay.style.transition = "background 0.3s ease";
              document.body.appendChild(overlay);

              // fade in to ~20% black
              requestAnimationFrame(() => {
                overlay.style.background = "rgba(0,0,0,0.2)";
              });

              // --- 2. Smooth scroll logic ---
              const startY = window.scrollY;
              const targetY =
                section.getBoundingClientRect().top + window.scrollY;
              const distance = targetY - startY;
              const duration = 1600; // 1.6 second scroll
              const startTime = performance.now();

              function easeInOutQuad(t: number) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
              }

              function animateScroll(currentTime: number) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeInOutQuad(progress);
                window.scrollTo(0, startY + distance * eased);

                if (elapsed < duration) {
                  requestAnimationFrame(animateScroll);
                } else {
                  // --- 3. Fade overlay back out ---
                  overlay.style.background = "rgba(0,0,0,0)";
                  setTimeout(() => overlay.remove(), 300); // remove after fade-out
                }
              }

              requestAnimationFrame(animateScroll);
            }, 500); // keep your 0.6s delay
            }}
          >
            Join us →
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
/* ----------------- rest of your original file unchanged ----------------- */

const statsCards = [
  {
    icon: "/businessIcon.svg",
    alt: "Active Partners",
    title: "Collaboration with Duke Fuqua and Bass Connections Projects.",
    description:
      "We work with clients to develop AI solutions that impact their businesses, in collaboration with product managers.",
  },
  {
    icon: "/groupIcon.svg",
    alt: "Student Engineers",
    title: "150+ Members in 2025-2026 Fall Cohort",
    description:
      "Our newest members are currently learning ML foundations from our experienced executives.",
  },
  {
    icon: "/schoolIcon.svg",
    alt: "Areas of Expertise",
    title: "3 Areas of Expertise",
    description:
      "Divisions in Data science, Software Engineering, and Hardware.",
  },
  {
    icon: "/projectIcon.svg",
    alt: "Innovative Projects",
    title: "Innovative Projects",
    description:
      "External partners deliver live use cases each semester, so every team graduates with a shipped solution.",
  },
];

const heroStats = [
  { value: "10+", label: "Active collaborations" },
  { value: "700+", label: "Student innovators" },
  { value: "3", label: "Specialized tracks" },
];

const educationTracks = [
  {
    title: "Foundations Bootcamp",
    description:
      "An eight-week ML fundamentals course where new members learn Data Science and program their first ML projects.",
    stat: "120+ certificates earned in 2024",
  },
  {
    title: "DevOps Workshops",
    description:
      "Hands-on deep dives into deploying ML solutions through containerization, CI/CD pipelines, and more into an UI platform.",
    stat: "24 peer-led sessions each semester",
  },
  {
    title: "Mentorship",
    description:
      "Office hours pair first-years wtih our experienced members.",
    stat: "90% of mentees ship client work by spring",
  },
];

const clientValueProps = [
  {
    title: "ML Consulting",
    detail:
      "Our team of Product Managers and top Division Leads are happy to meet with partners to discuss ML projects: incorporating KPIs and ML expertise to your business.",
  },
  {
    title: "DAML Teams Lead Development",
    detail:
      "We match a team of our Engineers to each partner for client projects. Partners get top Duke CS Talent, and our members get real-world experience.",
  },
  {
    title: "Deliverables & Documentation",
    detail:
      "Our consultants provide an in-depth project plan, DAML teams provide data analysis reports, model prototypes & reports on performance, and deploys models along with user guides.",
  }
];

const programProjects = [
  {
    title: "Legislator Chatbot",
    contributors: "Jai Kasera",
    term: "Spring 2024",
    status: "Completed",
    link: "https://github.com/jaikasera/Legislator-Chatbot",
    description:
      "Retrieval-augmented chatbot that surfaces the latest Senate bills, hearings, and votes by scraping and indexing US Congress data for precise policy answers.",
  },
  {
    title: "AI Chess Engine",
    contributors: "Haiyan Wang, Benjamin Yan, Jai Kasera",
    term: "Spring 2025",
    status: "In Progress",
    link: "https://github.com/benjaminyan1/chess-engine",
    description:
      "PyTorch engine inspired by AlphaZero that learns entirely via self-play using deep reinforcement learning and Monte Carlo Tree Search.",
  },
  {
    title: "Modeling Diseases in Corn Leaves Using Computer Vision",
    contributors:
      "Sam Borremans, Samuel Orellana Mateo, Yash Singam, Samir Travers, Benjamin Yan",
    term: "Spring 2024",
    status: "Completed",
    link: "https://github.com/benjaminyan1/CV-Corn-Disease-Detection",
    description:
      "Compared CNN architectures like ResNet, EfficientNet, and ShuffleNet while mitigating background bias in the Maize Leaf Disease dataset.",
  },
  {
    title: "Hate Speech Detection",
    contributors: "Brian Chen, Arthur Zhao, Darian Salehi, Jai Kasera",
    term: "Fall 2023",
    status: "Completed",
    description:
      "LSTM and BERT-driven classifier that flags toxic Twitter content, supporting safer communities through high-accuracy moderation tooling.",
  },
  {
    title: "F1 Driver Positions Gained",
    contributors: "Kevin Mao",
    term: "Summer 2025",
    status: "In Progress",
    link: "https://github.com/kevinmao660/f1-prediction",
    description:
      "FastF1, XGBoost, and SHAP-powered model predicting whether a driver will finish ahead of their grid start using weather, pit strategies, and historical performance.",
  },
];

function JoinTeamAnimatedGradient({
  onMouseMove,
  onMouseLeave,
  onMouseEnter,
}: {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}) {
  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f1c3f, #1d4ed8, #fb7185)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
        zIndex: 0,
      }}
    />
  );
}

/* ... rest of the component code remains identical to your original file ... */
/* For brevity I've left the remainder unchanged below; in your actual file keep the original JoinTeamSection, Homepage etc. */
function JoinTeamSection() {
  const numCircles = 3;
  const [positions, setPositions] = useState(
    Array(numCircles).fill({ x: 50, y: 50 })
  );
  const [opacity, setOpacity] = useState(1);
  const mouseRef = useRef({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setPositions((prev) =>
        prev.map((pos, i) => {
          const easing = 0.3 / (i + 1);
          const nx = pos.x + (mouseRef.current.x - pos.x) * easing;
          const ny = pos.y + (mouseRef.current.y - pos.y) * easing;
          return { x: nx, y: ny };
        })
      );
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
    setOpacity(1);
  }
  function handleMouseLeave() {
    setOpacity(0.7);
  }
  function handleMouseEnter() {
    setOpacity(1);
  }

  const gradientColors = ["#d56b5f", "#c85c51", "#e07c6a", "#3d5a80"];

  return (
    <section
      id="join-daml"
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        pointerEvents: "auto",
        padding: "110px 24px",
        background: "#ffffff",
      }}
    >
      {/* animated gradient background */}
      <JoinTeamAnimatedGradient
        onMouseMove={() => {}}
        onMouseLeave={() => {}}
        onMouseEnter={() => {}}
      />

      {/* animated radial layers */}
      {positions.map((pos, i) => {
        const offsetX = i * 15;
        const offsetY = i * 10;
        const color = gradientColors[i % gradientColors.length];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `radial-gradient(circle at ${pos.x + offsetX}% ${
                pos.y + offsetY
              }%, ${color}CC 0%, ${color}33 30%, transparent 60%)`,
              opacity: opacity * (0.85 - i * 0.12),
              transition: "opacity 0.25s ease-out",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        );
      })}

      {/* centered text block with translucent black box */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px", // outer margin buffer
        }}
      >
        <div
          style={{
            width: "calc(100% - 10px)", // ~0.5in margin per side (≈40px)
            margin: "0 auto",
            padding: "60px 64px",
            borderRadius: 24,
            background: "rgba(0, 0, 0, 0.55)", // translucent black box
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 90px rgba(0,0,0,0.45)",
            backdropFilter: "blur(8px)",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              letterSpacing: 4,
              fontWeight: 700,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Join DAML
          </span>

          <h2
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#ffffff",
            }}
          >
            Build alongside Duke's most curious engineers
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 820,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Join a community that ships ML projects, runs member-led labs, and
            mentors across research and production. We welcome members at all
            experience levels — start small, learn quickly, and lead real work.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            {/* Row 1 — mailing list + instagram */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <button
                aria-label="Join our mailing list"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "14px 28px",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 22px 48px rgba(37,99,235,0.25)",
                  transition: "transform 0.22s ease, box-shadow 0.22s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 30px 60px rgba(37,99,235,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 22px 48px rgba(37,99,235,0.25)";
                }}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform?usp=dialog");
                  }
                }}
              >
                Join our mailing list 
              </button>

              <a
                href="https://www.instagram.com/dukeappliedml/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DAML on Instagram"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#ff7a59,#c13584)",
                  textDecoration: "none",
                  boxShadow: "0 14px 30px rgba(3,15,40,0.08)",
                  transition: "transform 0.22s ease, box-shadow 0.22s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 30px 60px rgba(3,15,40,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 14px 30px rgba(3,15,40,0.08)";
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="white" />
                  <path
                    d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zM17.4 6.6h.6"
                    stroke="#c13584"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
            </div>

            {/* Row 2 — Back to top below */}
            <button
              aria-label="Back to top"
              style={{
                background: "#ffffff", // white button
                color: "#000000ff",
                border: "none",
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 16px 36px rgba(37,99,235,0.18)",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 22px 46px rgba(37,99,235,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 16px 36px rgba(37,99,235,0.18)";
              }}
              onClick={() => {
              // 0.6 s delay, smooth 1.5 s scroll + temporary dim overlay
              setTimeout(() => {
                // create a full-screen black overlay
                const overlay = document.createElement("div");
                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100vw";
                overlay.style.height = "100vh";
                overlay.style.background = "rgba(0,0,0,0)";
                overlay.style.zIndex = "9999";
                overlay.style.transition = "background 0.3s ease";
                document.body.appendChild(overlay);

                // fade in to 20 % opacity
                requestAnimationFrame(() => {
                  overlay.style.background = "rgba(0,0,0,0.2)";
                });

                const startY = window.scrollY;
                const targetY = 0; // change to section.offsetTop for “Join us” button
                const distance = targetY - startY;
                const duration = 1600; // 1.6 s scroll
                const startTime = performance.now();

                function easeInOutQuad(t: number) {
                  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                }

                function animateScroll(currentTime: number) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const eased = easeInOutQuad(progress);
                  window.scrollTo(0, Math.round(startY + distance * eased));

                  if (elapsed < duration) {
                    requestAnimationFrame(animateScroll);
                  } else {
                    // fade overlay out & remove it
                    overlay.style.background = "rgba(0,0,0,0)";
                    setTimeout(() => overlay.remove(), 300);
                  }
                }

                requestAnimationFrame(animateScroll);
              }, 500);
            }}
            >
              Back to top 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero/Carousel */}
      <section className="flex flex-col relative">
        <AnimatedGradient />
      </section>
      {/* Work with us Section */}
      <section
        className="light-section"
        style={{
          background:
            "linear-gradient(140deg, #1e3a5f 0%, #2d4f93 50%, #4b74c4 100%)",
          color: "rgb(248, 250, 252)",
          padding: "96px 6vw",
          marginTop: "0px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          alignItems: "center",
          gap: "44px",
        }}
      >
        {/* Left side: Title + supporting text */}
        <div>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "rgb(248, 250, 252)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Work With Us!
          </h2>
        </div>

        {/* Right side: Right-aligned text and button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // right-aligns everything
            textAlign: "right",
            gap: "20px",
          }}
        >
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(248,250,252,0.95)",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: 0,
            }}
          >
            We're eager to partner with organizations, researchers, and individuals who want to enhance ML education.
            From client projects to educational ideas and outreach, your support helps our community grow!
          </p>

          <div>
            <button
              aria-label="Work with us - open contact"
              style={{
                background: "#ffffff",
                border: "none",
                borderRadius: "999px",
                padding: "12px 28px",
                fontSize: 16,
                fontWeight: 700,
                color: "#04263f",
                cursor: "pointer",
                boxShadow: "0 18px 40px rgba(2, 15, 42, 0.45)",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                width: "fit-content",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-3px)";
                event.currentTarget.style.boxShadow =
                  "0 24px 50px rgba(2, 15, 42, 0.5)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(2, 15, 42, 0.45)";
              }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "mailto:dukeappliedmachinelearning@gmail.com";
                }
              }}
            >
              Contact Us →
            </button>
          </div>
        </div>
      </section>
      {/* About DAML Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #040b1f 0%, #0b1f3d 55%, #123263 100%)",
          padding: "100px 6vw",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 24,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(148, 197, 255, 0.75)",
              }}
            >
              Who we are
            </span>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 700,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Inclusive machine learning community powered by Duke talent.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(226, 232, 240, 0.88)",
                maxWidth: 620,
              }}
            >
              Duke Applied Machine Learning (DAML) is a student-led organization
              that pairs education, research, and client delivery. We help
              curious students become consultants who can design and deploy
              ML systems, lead projects, and collaborate with partners
              across Duke and beyond.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 20,
              }}
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderRadius: 24,
                    padding: "22px 24px",
                    background:
                      "linear-gradient(145deg, rgba(148, 197, 255, 0.16), rgba(59, 130, 246, 0.08))",
                    border: "1px solid rgba(148, 197, 255, 0.25)",
                    boxShadow: "0 24px 55px rgba(3, 14, 35, 0.35)",
                    display: "grid",
                    gap: 6,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-4px)";
                    event.currentTarget.style.boxShadow =
                      "0 32px 70px rgba(3, 14, 35, 0.45)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";
                    event.currentTarget.style.boxShadow =
                      "0 24px 55px rgba(3, 14, 35, 0.35)";
                  }}
                >
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: "#f8fafc",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgba(226, 232, 240, 0.85)",
                      letterSpacing: 0.4,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 32,
              overflow: "hidden",
              boxShadow: "0 35px 90px rgba(5, 17, 42, 0.45)",
              minHeight: 420,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.45), transparent 55%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.35), transparent 60%)",
                zIndex: 1,
                mixBlendMode: "screen",
              }}
            />
            <Image
              src="/prattschoolofeng.jpg"
              width={1600}
              height={900}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transform: "scale(1.02)",
              }}
              alt="Pratt School of Engineering"
              priority
            />
          </div>
        </div>
      </section>
      {/* Impact Metrics
      <section
        style={{
          background: "#081231",
          padding: "96px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gap: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 680,
              color: "#e2e8f0",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(148, 197, 255, 0.75)",
              }}
            >
              Impact
            </span>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#f8fafc",
                lineHeight: 1.15,
              }}
            >
              Our campus footprint keeps expanding every semester.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(241, 245, 249, 0.78)",
              }}
            >
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 28,
            }}
          >
            {statsCards.map((card, idx) => (
              <div
                key={card.title}
                style={{
                  position: "relative",
                  borderRadius: 24,
                  padding: "32px 28px",
                  background: "rgba(12, 20, 43, 0.65)",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  boxShadow: "0 28px 60px rgba(8, 20, 53, 0.4)",
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease",
                  animation: "riseFade 0.8s ease-out both",
                  animationDelay: `${0.08 * idx}s`,
                  color: "#f8fafc",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-6px)";
                  event.currentTarget.style.boxShadow =
                    "0 40px 80px rgba(8, 20, 53, 0.55)";
                  event.currentTarget.style.border =
                    "1px solid rgba(251, 113, 133, 0.6)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 28px 60px rgba(8, 20, 53, 0.4)";
                  event.currentTarget.style.border =
                    "1px solid rgba(148, 163, 184, 0.25)";
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(251, 113, 133, 0.25))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    boxShadow: "0 12px 30px rgba(37, 99, 235, 0.25)",
                  }}
                >
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={34}
                    height={34}
                    style={{
                      filter:
                        "invert(92%) sepia(4%) saturate(329%) hue-rotate(178deg) brightness(108%) contrast(95%)",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 12,
                    lineHeight: 1.4,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "rgba(226, 232, 240, 0.8)",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Education Pathways */}
      <section
        style={{
          padding: "110px 24px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 680,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#2563eb",
              }}
            >
              Education Pathways
            </span>
            <h2
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Programs that cultivate machine learning talent at Duke.
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#475569",
                margin: 0,
              }}
            >
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px 0",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                // expand to match the section's main content width
                maxWidth: 1100,
                minHeight: 320,
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 48px rgba(15, 23, 42, 0.14)",
              }}
            >
              <Image
                src="/IMG_9027.png"
                alt="Hands-on learning during the education pathways program"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(min-width: 1280px) 820px, 100vw"
                priority
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              // keep cards at 260px when the viewport allows, but center them within the section width
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              justifyContent: "center",
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            {educationTracks.map((track, idx) => (
              <div
                key={track.title}
                style={{
                  position: "relative",
                  // more compact: reduce vertical padding and tighten rhythm
                  padding: "28px 28px 18px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(150deg, rgba(37, 99, 235, 0.04), rgba(251, 113, 133, 0.04))",
                  border: "1px solid rgba(37, 99, 235, 0.14)",
                  boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
                  transition:
                    "transform 0.28s ease, box-shadow 0.28s ease, border 0.28s ease",
                  animation: "riseFade 0.8s ease-out both",
                  animationDelay: `${0.08 * idx}s`,
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-8px)";
                  event.currentTarget.style.boxShadow =
                    "0 32px 70px rgba(15, 23, 42, 0.18)";
                  event.currentTarget.style.border =
                    "1px solid rgba(251, 113, 133, 0.55)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 24px 60px rgba(15, 23, 42, 0.14)";
                  event.currentTarget.style.border =
                    "1px solid rgba(37, 99, 235, 0.22)";
                }}
              >
                {/* stat badge removed per request: cleaned layout for Education Pathways */}
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {track.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.45,
                    color: "#475569",
                    margin: 0,
                  }}
                >
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Partnerships */}
      <section
        style={{
          padding: "110px 24px",
          background:
            "linear-gradient(135deg, rgba(8, 18, 49, 1) 0%, rgba(30, 41, 59, 0.95) 45%, rgba(37, 99, 235, 0.9) 100%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gap: 48,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(148, 197, 255, 0.78)",
              }}
            >
            </span>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#f8fafc",
              }}
            >
              Client projects —<br/>
              You get Duke's CS Talent,<br/>
              We get real-world experience.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(226, 232, 240, 0.82)",
              }}
            >
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginTop: 12,
              }}
            >
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
                  border: "none",
                  borderRadius: 999,
                  padding: "14px 28px",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#0f172a",
                  cursor: "pointer",
                  boxShadow: "0 24px 55px rgba(251, 113, 133, 0.35)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-4px)";
                  event.currentTarget.style.boxShadow =
                    "0 32px 70px rgba(251, 113, 133, 0.45)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 24px 55px rgba(251, 113, 133, 0.35)";
                }}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = "/partnerWithUs";
                  }
                }}
              >
                Partner with DAML →
              </button>
              <button
                style={{
                  background: "transparent",
                  borderRadius: 999,
                  padding: "14px 28px",
                  fontWeight: 600,
                  fontSize: 18,
                  border: "1px solid rgba(148, 163, 184, 0.5)",
                  color: "#f8fafc",
                  cursor: "pointer",
                  transition:
                    "transform 0.3s ease, border 0.3s ease, background 0.3s ease",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  event.currentTarget.style.border =
                    "1px solid rgba(148, 197, 255, 0.9)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "transparent";
                  event.currentTarget.style.border =
                    "1px solid rgba(148, 163, 184, 0.5)";
                }}
              >
                Explore process
              </button>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gap: 20,
            }}
          >
            {clientValueProps.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  position: "relative",
                  padding: "28px 26px",
                  borderRadius: 22,
                  background: "rgba(15, 23, 42, 0.72)",
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  boxShadow: "0 18px 50px rgba(15, 23, 42, 0.35)",
                  animation: "riseFade 0.85s ease-out both",
                  animationDelay: `${0.12 * idx}s`,
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: 3,
                    color: "rgba(148, 197, 255, 0.7)",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "rgba(241, 245, 249, 0.82)",
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Projects Section */}
      <section
        style={{
          padding: "110px 24px 120px",
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gap: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 760,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#fb7185",
              }}
            >
              Program Projects
            </span>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.2,
              }}
            >
              Members ship research, software, and strategy that matter.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "#475569",
              }}
            >
              Explore a snapshot of our member's projects from recent semesters.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              gridAutoRows: "minmax(160px, auto)",
              gap: 20,
            }}
          >
            {programProjects.map((project, idx) => {
              const isInProgress = project.status
                .toLowerCase()
                .includes("in progress");
              const accent = isInProgress ? "#2563eb" : "#fb7185";
              const accentSoft = isInProgress
                ? "rgba(37, 99, 235, 0.12)"
                : "rgba(251, 113, 133, 0.12)";
              const accentBorder = isInProgress
                ? "rgba(37, 99, 235, 0.28)"
                : "rgba(251, 113, 133, 0.28)";
              const accentShadow = isInProgress
                ? "rgba(37, 99, 235, 0.18)"
                : "rgba(251, 113, 133, 0.2)";
              const cardBackground = `linear-gradient(150deg, rgba(255,255,255,0.98), ${accentSoft})`;
              const hoverBackground = `linear-gradient(150deg, rgba(255,255,255,1), ${accentSoft})`;
              const baseShadow = "0 22px 60px rgba(15, 23, 42, 0.12)";
              const hoverShadow = `0 32px 70px ${accentShadow}`;
              const layoutClasses = [
                { gridColumn: "span 6", gridRow: "span 2" },
                { gridColumn: "span 3", gridRow: "span 2" },
                { gridColumn: "span 3", gridRow: "span 2" },
                { gridColumn: "span 5", gridRow: "span 2" },
                { gridColumn: "span 4", gridRow: "span 2" },
                { gridColumn: "span 3", gridRow: "span 2" },
              ];
              const layout = layoutClasses[idx % layoutClasses.length];
              const statusLabel = project.status;
              const statusDetail = project.term;
              return (
                <div
                  key={project.title}
                  style={{
                    position: "relative",
                    padding: "28px 26px",
                    borderRadius: 24,
                    background: cardBackground,
                    border: `1px solid ${accentBorder}`,
                    boxShadow: baseShadow,
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease, background 0.3s ease",
                    animation: "riseFade 0.85s ease-out both",
                    animationDelay: `${0.08 * idx}s`,
                    gridColumn: layout.gridColumn,
                    gridRow: layout.gridRow,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-6px)";
                    event.currentTarget.style.boxShadow = hoverShadow;
                    event.currentTarget.style.border = `1px solid ${accent}`;
                    event.currentTarget.style.background = hoverBackground;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";
                    event.currentTarget.style.boxShadow = baseShadow;
                    event.currentTarget.style.border = `1px solid ${accentBorder}`;
                    event.currentTarget.style.background = cardBackground;
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: accentSoft,
                      color: accent,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: 0.6,
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    {statusLabel}
                  </span>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#0f172a",
                      lineHeight: 1.5,
                      marginBottom: statusDetail ? 10 : 16,
                    }}
                  >
                    {project.title}
                  </h3>
                  {statusDetail ? (
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(100, 116, 139, 0.85)",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 14,
                      }}
                    >
                      {statusDetail}
                    </p>
                  ) : null}
                  <p
                    style={{
                      fontSize: 16,
                      color: "#475569",
                      lineHeight: 1.6,
                      marginBottom: project.description ? 14 : 0,
                    }}
                  >
                    {project.contributors}
                  </p>
                  {project.description ? (
                    <p
                      style={{
                        fontSize: 15,
                        color: "rgba(71, 85, 105, 0.9)",
                        lineHeight: 1.65,
                        marginBottom: project.link ? 18 : 0,
                      }}
                    >
                      {project.description}
                    </p>
                  ) : null}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 16px",
                        borderRadius: 999,
                        background: accentSoft,
                        color: accent,
                        fontWeight: 600,
                        fontSize: 14,
                        textDecoration: "none",
                        border: `1px solid ${accentBorder}`,
                      }}
                    >
                      View repo {"->"}
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#1e3a8a",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#2563eb",
                boxShadow: "0 0 16px rgba(37, 99, 235, 0.5)",
              }}
            />
            We ensure we train a variety of models to choose the best one.
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <JoinTeamSection />

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          padding: "32px 24px",
          textAlign: "center",
          background: "#081231",
          color: "rgba(226, 232, 240, 0.72)",
          fontSize: 14,
          letterSpacing: 0.5,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        &copy; {new Date().getFullYear()} Duke Applied Machine Learning
      </footer>
    </div>
  );
}
