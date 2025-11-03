"use client";

// partner-with-us.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface TechIconProps {
  src: string;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt }) => (
  <div className="tech-icon">
    <Image 
      src={src} 
      alt={alt} 
      width={160} 
      height={60} 
      priority={true}
      loading="eager"
      style={{ height: "60px", width: "auto", objectFit: "contain" }}
    />
  </div>
);

const PartnerWithUs: React.FC = () => {
  const techStack = [
    { src: '/pytorchlogo.png', alt: 'PyTorch' },
    { src: '/sql_logo.png', alt: 'SQL' },
    { src: '/numpy_logo.png', alt: 'NumPy' },
    { src: '/pandas_logo.png', alt: 'Pandas' },
    { src: '/google_cloud_logo.png', alt: 'Google Cloud' },
    { src: '/logos/aws.svg', alt: 'AWS' },
    { src: '/logos/docker.svg', alt: 'Docker' },
    { src: '/tensorflowlogo.png', alt: 'TensorFlow' },
  ];

  // (site nav restored) — no client-side hiding on this page
  return (
    <>
      <Head>
        <title>Partner With Us | Duke Applied Machine Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Scoped styles: avoid touching global/body so layout's hotbar stays consistent */}
      <style jsx>{`
        .partnerPage :global(*) { box-sizing: border-box; }
        .partnerPage a { text-decoration: none; color: inherit; }
        /* scope color variables to .partnerPage only so globals (nav, body) stay unchanged */
        .partnerPage { --bg-dark: rgb(8, 18, 49); --bg-darker: #040b1f; --text-light: #E2E8F0; --accent-blue: #3B82F6; --border: rgba(255,255,255,0.1); --shadow: 0 2px 4px rgba(0,0,0,0.1); font-family: var(--site-hero-font-family); color: #e2e8f0; }

        .partnerPage .animated-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          overflow: hidden;
          z-index: 0;
        }
        .partnerPage .network-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          height: 1px;
          width: 100%;
          animation: moveLine 10s linear infinite;
        }
        @keyframes moveLine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

        .partnerPage section { padding: 4rem 2rem; position: relative; z-index: 1; }
        .partnerPage .container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

        .partnerPage .hero-section {
          padding: var(--site-hero-padding);
          background: var(--site-hero-background);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          font-family: var(--site-hero-font-family);
        }
        .partnerPage .hero-section .container {
          max-width: var(--site-hero-max-width);
          margin: 0 auto;
          display: grid;
          gap: var(--site-hero-gap);
        }
        .partnerPage .hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 380px);
          gap: 48px;
          align-items: center;
        }
        .partnerPage .hero-content {
          display: grid;
          gap: 18px;
        }
        .partnerPage .hero-heading {
          font-size: var(--site-hero-heading-size);
          font-weight: var(--site-hero-heading-weight);
          line-height: var(--site-hero-heading-line-height);
          margin: 0;
          letter-spacing: 0.2px;
        }
        .partnerPage .hero-subheading {
          font-size: var(--site-hero-subheading-size);
          line-height: var(--site-hero-subheading-line-height);
          color: var(--site-hero-subheading-color);
          max-width: var(--site-hero-text-max-width);
          margin: 0;
        }
        .partnerPage .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .partnerPage .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--site-cta-background);
          color: var(--site-cta-color);
          padding: var(--site-cta-padding);
          border-radius: var(--site-cta-radius);
          font-size: var(--site-cta-font-size);
          font-weight: var(--site-cta-font-weight);
          box-shadow: var(--site-cta-shadow);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .partnerPage .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: var(--site-cta-shadow-hover);
        }

        .partnerPage .hero-image {
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          min-height: 340px;
        }
        .partnerPage .hero-image::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, transparent 70%); animation: pulse 4s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity:0.5; } 50% { opacity:1; } }

        .partnerPage .cards { display:grid; gap:2rem; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); }
        .partnerPage .card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid var(--border); border-radius:16px; padding:2rem; box-shadow: var(--shadow); transition: transform 0.2s, box-shadow 0.2s; position:relative; overflow:hidden; display: grid; gap: 12px; }
        .partnerPage .card::before { content:''; position:absolute; inset:0; border-radius:16px; padding:1px; background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent); pointer-events:none; }
        .partnerPage .card:hover { transform: translateY(-4px); box-shadow: 0 0 20px rgba(59,130,246,0.3); }
        .partnerPage .card h3 { margin-bottom: 0.75rem; color:#fff; font-size:1.5rem; }
        .partnerPage .card p { margin: 0; color: var(--text-light); line-height: 1.6; }
        .partnerPage .card p + ul { margin-top: 1rem; }
        .partnerPage .card ul { list-style:none; margin-top:1rem; padding:0; display:grid; gap:10px; }
        .partnerPage .card li { display:flex; align-items:flex-start; gap:0.5rem; color: var(--text-light); line-height: 1.6; }
        .partnerPage .card li::before { content: "✓"; color: var(--accent-blue); font-weight:bold; margin-top:2px; }

        .partnerPage .tech-scroll {
          width: 100%;
          overflow: hidden;
          position: relative;
          margin: 2rem 0;
          padding: 1rem 0;
        }

        .partnerPage .tech-scroll-inner {
          display: flex;
          gap: 40px;
          animation: scroll-left 30s linear infinite;
          align-items: center;
        }

        .partnerPage .tech-scroll:hover .tech-scroll-inner {
          animation-play-state: paused;
        }

        .partnerPage .tech-icon { 
          flex: 0 0 auto;
          min-width: 140px; 
          min-height: 96px; 
          background: rgba(255,255,255,0.08); 
          backdrop-filter: blur(10px); 
          border-radius: 20px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          box-shadow: var(--shadow); 
          transition: transform 0.2s, box-shadow 0.2s; 
          border: 1px solid var(--border); 
          padding: 16px 28px;
          overflow: hidden;
        }
        .partnerPage .tech-icon:hover { transform: translateY(-4px); box-shadow: 0 0 22px rgba(59,130,246,0.35); }
        .partnerPage .tech-icon :global(img) {
          height: 60px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .partnerPage footer { background: var(--bg-darker); color:#fff; padding:2rem; text-align:center; font-size:0.875rem; }

        @media (max-width: 1024px) {
          .partnerPage .hero-layout {
            grid-template-columns: 1fr;
          }
          .partnerPage .hero-image {
            min-height: 280px;
          }
        }
        @media (max-width:768px) {
          .partnerPage .hero-heading { font-size: 46px; }
          .partnerPage .hero-subheading { font-size: 18px; }
        }

        /* Improve contrast for light sections */
        .partnerPage .light-section { color: #0f172a; }
        .partnerPage .light-section h2 { color: #0b1220; }
        .partnerPage .light-section .card { background: #ffffff; color: #0b1220; border: 1px solid rgba(11,18,32,0.06); box-shadow: 0 6px 18px rgba(11,18,32,0.06); }
        .partnerPage .light-section .card h3 { color: #071025; }
        .partnerPage .light-section p, .partnerPage .light-section li { color: #0b1220; }
      `}</style>

      <div className="partnerPage">

      {/* Hero */}
      <section className="hero-section">
        <div className="animated-bg">
          <div className="network-line" style={{ top: '20%' }} />
          <div className="network-line" style={{ top: '50%', animationDelay: '3s' }} />
          <div className="network-line" style={{ top: '80%', animationDelay: '6s' }} />
        </div>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <h1 className="hero-heading">Partner With Us</h1>
              <p className="hero-subheading">
                We&apos;re happy to partner with any company who is interested in building AI solutions or products, expand education initiatives, and/or outreach to our members for opportunities. Partnering with us means to enhance the range of opportunities available for our undergraduate students. Interested in partnering with us?
              </p>
              <div className="hero-actions">
                <a href="mailto:dukeappliedmachinelearning@gmail.com" className="hero-cta">Contact Us</a>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/Screenshot(97).png"
                alt="AI/ML Partnership"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
  <section className="light-section" >
        <div className="container">
          <h2>Partnership Opportunities</h2>
          <div className="cards">
            <div className="card">
              <h3>Industry Partnerships</h3>
              <p>Collaborate with our PM team to discuss a strategy to develop a ML product. DAML can help by bringing together a team of engineers in Data Science/ML to develop the project.</p>
              <ul>
                <li>Project Plan</li>
                <li>EDA Deliverables</li>
                <li>Business Analysis Reports</li>
                <li>Model Prototypes</li>
                <li>Deployed Models</li>
              </ul>
            </div>
            <div className="card">
              <h3>Academic Partnerships</h3>
              <p>Collaborate with us to expand our education initiatives!</p>
              <ul>
                <li>Data Engineering, Data Science, SWE Concepts</li>
                <li>Software products</li>
              </ul>
            </div>
            <div className="card">
              <h3>Guest Speakers & Outreach</h3>
              <p>We can help host guest speakers or cool products to our members!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ML Consulting */}
      <section className="light-section" style={{ width: '100%', padding: '90px 6vw', display: 'grid', gap: '44px', background: 'linear-gradient(135deg, rgb(244, 247, 255) 0%, rgb(232, 241, 255) 55%, rgb(253, 251, 255) 100%)' }}>
        <div className="container">
          <h2>ML Consulting</h2>
          <p>For our client projects, we provide partners with our consultants in ML to discuss strategies to develop ML products into their business.</p>

        <div className="tech-scroll">
          <div className="tech-scroll-inner">
    {techStack.concat(techStack).map((tech, idx) => (
      <TechIcon key={`${tech.alt}-${idx}`} src={tech.src} alt={tech.alt} />
    ))}
  </div>
</div>

          <div className="cards">
            <div className="card">
              <h3>Computer Vision</h3>
            </div>
            <div className="card">
              <h3>Generative AI/LLMs</h3>
            </div>
            <div className="card">
              <h3>EDA</h3>
            </div>
            <div className="card">
              <h3>Predictive + Clustering Models</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section style={{ background: 'linear-gradient(140deg, rgb(2, 15, 42) 0%, rgb(3, 60, 130) 60%, rgb(11, 99, 191) 100%)', color: 'rgb(248, 250, 252)', padding: '96px 6vw' }}>
        <div className="container">
          <h2>Current Partners</h2>
          <div className="cards">
            <div className="card">
              <h3>Duke Career Center</h3>
            </div>
            <div className="card">
              <h3>LiveAI</h3>
            </div>
            <div className="card">
              <h3>AI for Business</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © 2025 Duke Applied Machine Learning. All rights reserved.
      </footer>
      </div>
    </>
  );
};

export default PartnerWithUs;
