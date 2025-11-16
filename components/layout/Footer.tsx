import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-[#040b1f] text-slate-200">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright text */}
        <div className="text-sm tracking-[0.5px]">
          © 2025 Duke Applied Machine Learning
        </div>

        {/* Social media links */}
        <div className="flex items-center gap-5">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/dukeaml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Duke AML on LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A66C2] hover:bg-[#16559c] transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dukeappliedml/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DAML on Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff7a59] to-[#c13584] hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="2" />
              <circle cx="18" cy="6" r="1" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

