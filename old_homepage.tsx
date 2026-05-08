import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import { FaBriefcase, FaUsers, FaGraduationCap, FaFolder } from "react-icons/fa";

/**
 * AnimatedRotator
 * - delay: ms between swaps (default 3000)
 * - animMs: ms for swipe animation (default 600)
 * Uses Tailwind classes for styling
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
      className={cn("daml-rotator inline-block align-middle z-[80]", className)}
      aria-live="polite"
      role="status"
    >
      {items.map((text, i) => {
        const cls =
          i === index ? "rot-item slide-in" : i === prev ? "rot-item slide-out" : "rot-item";
        return (
          <span 
            key={text + i} 
            className={cls}
            style={{ animationDuration: `${animMs}ms` }}
          >
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
    className="w-full h-[120vh] min-h-[900px] relative overflow-hidden"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    onMouseEnter={handleMouseEnter}
  >
    {/* Background gradient layers */}
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#2a4d7c] to-[#ff6f61] pointer-events-none z-0">
      {positions.map((pos, i) => {
        const offsetX = i * 10;
        const offsetY = i * 5;
        const color = gradientColors[i % gradientColors.length];
        return (
          <div
            key={i}
            className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-[800ms] ease-in-out"
            style={{
              opacity,
              background: `radial-gradient(circle at ${pos.x + offsetX}% ${
                pos.y + offsetY
              }%, ${color}80 0%, ${color}44 40%, transparent 70%)`,
            }}
          />
        );
      })}
    </div>

    {/* Foreground content */}
    <div className="absolute inset-0 flex flex-col items-start justify-center font-bold text-[72px] text-white z-10 pointer-events-none pl-10">
      {/* Hero title + rotating subtitle - wrapped to avoid clipping */}
      <div className="pointer-events-auto max-w-[calc(100%-80px)] relative overflow-visible z-[90] flex flex-col gap-1.5">
        <div className="font-roboto font-bold text-[80px] text-white leading-[1.1] m-0 pointer-events-none">
          Duke Applied
          <br />
          Machine Learning
        </div>

        {/* Rotator placed immediately below the title */}
        <div className="mt-2 font-roboto text-[28px] font-medium text-[#d9d5d5] max-w-[800px] leading-[1.4]">
          An open-membership student org dedicated to enhance ML education at Duke
        </div>

        {/* Action buttons - reduce top margin to tighten further */}
        <div className="mt-6 flex gap-3 pointer-events-auto">
          <Button
  variant="outline"
  className="bg-white text-gray-800 font-semibold px-6 py-6 rounded-full border border-slate-300/40 text-base transition-all duration-300 shadow-[0_12px_24px_rgba(15,23,42,0.12)] hover:bg-gray-800 hover:text-white hover:shadow-[0_20px_28px_rgba(15,23,42,0.22)]"
  onClick={() => {
    if (typeof window !== "undefined") {
      window.location.href = "/mission";
    }
  }}
>
  Tell me more
</Button>

<Button
  className="
    bg-blue-600 text-white font-semibold px-6 py-6 rounded-full text-base
    border border-transparent
    transition-all duration-300
    shadow-[0_12px_24px_rgba(15,23,42,0.12)]
    hover:bg-blue-700 hover:-translate-y-0.5
    hover:shadow-[0_20px_28px_rgba(15,23,42,0.22)]
  "
  onClick={() => {
    const section = document.getElementById('join-daml');
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }}
>
  Join us
</Button>


        </div>
      </div>
    </div>
  </div>
);
}
/* ----------------- rest of your original file unchanged ----------------- */

const statsCards = [
  {
    icon: FaBriefcase,
    alt: "Active Partners",
    title: "Collaboration with Duke Fuqua and Bass Connections Projects.",
    description:
      "We work with clients to develop AI solutions that impact their businesses, in collaboration with product managers.",
  },
  {
    icon: FaUsers,
    alt: "Student Engineers",
    title: "150+ Members in 2025-2026 Fall Cohort",
    description:
      "Our newest members are currently learning ML foundations from our experienced executives.",
  },
  {
    icon: FaGraduationCap,
    alt: "Areas of Expertise",
    title: "3 Areas of Expertise",
    description:
      "Divisions in Data science, Software Engineering, and Hardware.",
  },
  {
    icon: FaFolder,
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

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero/Carousel */}
      <section className="flex flex-col relative">
        <AnimatedGradient />
      </section>
      {/* Work with us Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d4f93] to-[#4b74c4] text-slate-50 py-10 px-[6vw] mt-0 w-full flex flex-row items-center gap-50 max-md:flex-col max-md:items-start justify-center">
        {/* Left side: Title */}
        <div className="flex-shrink-0">
          <h2 className="text-[2.5rem] font-extrabold text-slate-50 m-0 tracking-[-0.02em]">
            Work With Us!
          </h2>
        </div>

        {/* Right side: Text and button */}
        <div className="flex flex-col items-end gap-5 flex-1 max-w-[600px]">
          <p className="text-[1.15rem] text-slate-50/95 leading-[1.6] m-0 text-right">
            We're eager to partner with organizations, researchers, and individuals who want to enhance ML education.
            From client projects to educational ideas and outreach, your support helps our community grow!
          </p>

          <Button
            aria-label="Work with us - open contact"
            className="bg-white border-none rounded-full px-7 py-6 text-base font-bold text-[#04263f] shadow-[0_18px_40px_rgba(2,15,42,0.45)] transition-all duration-[220ms] ease-in-out w-fit hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,15,42,0.5)] hover:text-white"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "mailto:dukeappliedmachinelearning@gmail.com";
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </section>
      {/* About DAML Section */}
      <section className="bg-gradient-to-br from-[#040b1f] via-[#0b1f3d] to-[#123263] py-[100px] px-[6vw] text-slate-50">
        <div className="max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-12 items-center">
          <div className="grid gap-6">
            <span className="text-xs tracking-[4px] font-semibold uppercase text-blue-300/75">
              Who we are
            </span>
            <h2 className="text-[44px] font-bold leading-[1.1] m-0">
              Inclusive machine learning community powered by Duke talent.
            </h2>
            <p className="text-lg leading-[1.75] text-slate-200/88 max-w-[620px]">
              Duke Applied Machine Learning (DAML) is a student-led organization
              that pairs education, research, and client delivery. We help
              curious students become consultants who can design and deploy
              ML systems, lead projects, and collaborate with partners
              across Duke and beyond.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
              {heroStats.map((stat) => (
                <Card
                  key={stat.label}
                  className="rounded-3xl p-6 px-6 bg-gradient-to-br from-blue-300/16 to-blue-500/8 border border-blue-300/25 shadow-[0_24px_55px_rgba(3,14,35,0.35)] grid gap-1.5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(3,14,35,0.45)]"
                >
                  <CardContent className="p-0">
                    <span className="text-[32px] font-bold text-slate-50 block">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-200/85 tracking-[0.4px] block">
                      {stat.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_35px_90px_rgba(5,17,42,0.45)] min-h-[420px]">
            <Image
              src="/prattschoolofeng.jpg"
              fill
              className="object-cover object-center"
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
                  {(() => {
                    const IconComponent = card.icon;
                    return IconComponent ? (
                      <IconComponent
                        size={34}
                        style={{
                          filter:
                            "invert(92%) sepia(4%) saturate(329%) hue-rotate(178deg) brightness(108%) contrast(95%)",
                          color: "currentColor",
                        }}
                        aria-label={card.alt}
                      />
                    ) : null;
                  })()}
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
      <section className="py-[110px] px-[6vw] bg-white">
        <div className="max-w-[1400px] mx-auto grid gap-8">
          <div className="flex flex-col gap-3 max-w-[800px]">
            <span className="text-xs tracking-[4px] font-semibold uppercase text-blue-600">
              Education Pathways
            </span>
            <h2 className="text-[44px] font-bold leading-[1.1] m-0">
              Programs that cultivate machine learning talent at Duke.
            </h2>
          </div>
          <div className="flex justify-center py-2">
            <div className="relative w-full max-w-[1100px] min-h-[320px] rounded-[20px] overflow-hidden shadow-[0_20px_48px_rgba(15,23,42,0.14)]">
              <Image
                src="/IMG_9027.png"
                alt="Hands-on learning during the education pathways program"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 820px, 100vw"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 justify-center max-w-[1100px] mx-auto">
            {educationTracks.map((track, idx) => (
              <Card
                key={track.title}
                className="relative p-7 px-7 pb-[18px] rounded-2xl bg-gradient-to-br from-blue-600/4 to-rose-500/4 border border-blue-600/14 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all duration-[280ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_32px_70px_rgba(15,23,42,0.18)] hover:border-rose-500/55"
              >
                <CardHeader>
                  <CardTitle className="text-[17px] font-bold text-slate-900 mb-2 leading-[1.2]">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-[1.45] text-slate-600 m-0">
                    {track.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Partnerships */}
      <section className="py-[110px] px-[6vw] bg-gradient-to-br from-[#040b1f] via-[#0b1f3d] to-[#123263] text-slate-50">
        <div className="max-w-[1400px] mx-auto grid gap-12">
          {/* Heading */}
          <div className="flex flex-col gap-[18px] max-w-[680px]">
            <span className="text-xs tracking-[4px] font-semibold uppercase text-blue-300/75">
              Client Projects
            </span>
            <h2 className="text-[44px] font-bold leading-[1.1] m-0">
              Pairing Duke's CS Talent with real-world experience
            </h2>
          </div>

          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {clientValueProps.map((item) => (
              <Card
                key={item.title}
                className="relative p-7 px-[26px] rounded-[22px] bg-gradient-to-br from-blue-300/16 to-blue-500/8 border border-slate-400/35 shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition-all duration-[280ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_32px_70px_rgba(3,14,35,0.45)] hover:border-white/50"
              >
                <CardHeader>
                  <CardTitle className="text-base font-semibold tracking-[3px] text-white uppercase mb-2.5">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-[1.7] text-slate-100/82">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Projects Section */}
      <section className="py-[110px] px-[6vw] pb-[120px] bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-[1400px] mx-auto grid gap-12">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <span className="text-xs tracking-[4px] font-semibold uppercase text-rose-500">
              Program Projects
            </span>
            <h2 className="text-[38px] font-bold text-slate-900 leading-[1.2]">
              Members work on projects that test their data science and ML skills.
            </h2>
            <p className="text-lg leading-[1.7] text-slate-600">
              Explore a snapshot of our member's projects from recent semesters.
            </p>
          </div>

          <div className="grid grid-cols-12 grid-rows-[minmax(160px,auto)] gap-5">
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
                <Card
                  key={project.title}
                  className="relative p-7 px-[26px] rounded-3xl transition-all duration-300 ease-in-out hover:-translate-y-1.5"
                  style={{
                    background: cardBackground,
                    borderColor: accentBorder,
                    boxShadow: baseShadow,
                    gridColumn: layout.gridColumn,
                    gridRow: layout.gridRow,
                  }}
                  onMouseEnter={(event) => {
                    const el = event.currentTarget;
                    el.style.boxShadow = hoverShadow;
                    el.style.borderColor = accent;
                    el.style.background = hoverBackground;
                  }}
                  onMouseLeave={(event) => {
                    const el = event.currentTarget;
                    el.style.boxShadow = baseShadow;
                    el.style.borderColor = accentBorder;
                    el.style.background = cardBackground;
                  }}
                >
                  <CardHeader>
                    <Badge className="inline-flex items-center px-3 py-1.5 rounded-full mb-3.5 uppercase text-xs font-semibold tracking-[0.6px]" style={{ background: accentSoft, color: accent }}>
                      {statusLabel}
                    </Badge>
                    <CardTitle className="text-xl font-semibold text-slate-900 leading-[1.5] mb-2.5">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {statusDetail && (
                      <p className="text-[13px] text-slate-500 uppercase tracking-[1px] mb-3.5">
                        {statusDetail}
                      </p>
                    )}
                    <p className="text-base text-slate-600 leading-[1.6] mb-3.5">
                      {project.contributors}
                    </p>
                    {project.description && (
                      <p className="text-[15px] text-slate-600/90 leading-[1.65] mb-4.5">
                        {project.description}
                      </p>
                    )}
                    {project.link && (
                      <Button
                        asChild
                        variant="outline"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full font-semibold text-sm"
                        style={{ background: accentSoft, color: accent, borderColor: accentBorder }}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View repo {"->"}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex items-center gap-3 text-blue-900 text-[15px] font-medium max-w-[800px] ml-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_16px_rgba(37,99,235,0.5)]" />
            We ensure we train a variety of models to choose the best one.
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="join-daml">
  <CallToAction
    title="Build alongside Duke's most curious engineers"
    description="Join a community that ships ML projects, runs member-led labs, and mentors across research and production. We welcome members at all experience levels — start small, learn quickly, and lead real work."
    primaryButton={{
      text: "Join our mailing list",
      onClick: () => {
        if (typeof window !== "undefined") {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSfHy0G3zA2e1HIsOjGbkS08euM6FV3hWEwvxW7vGG_hPRf79g/viewform?usp=dialog"
          );
        }
      },
    }}
    secondaryButton={{
      text: "Meet our team",
      href: "/students",
    }}
    backgroundColor="bg-gradient-to-br from-[#1a2332] via-[#2a3f5f] to-[#1e3a5f]"
    maxWidth="1080px"
  />
</section>


      <Footer />
    </div>
  );
}
