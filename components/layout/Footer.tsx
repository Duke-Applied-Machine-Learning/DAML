import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/recruitment", label: "Recruitment" },
  // { href: "/projects", label: "Projects" },
  { href: "/students", label: "Team" },
  { href: "/partnerWithUs", label: "Partner" },
];

export default function Footer() {
  return (
    <footer className="footer-static w-full py-14 on-dark bg-brand-navy">
      <div className="container-content">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Logo + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center">
              <Image
                src="/logos/daml_logo_with_name_white.png"
                alt="Duke Applied Machine Learning"
                width={160}
                height={36}
                className="h-9 w-auto object-contain opacity-90"
              />
            </div>
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} Duke Applied Machine Learning
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 hover:text-white/90 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/dukeaml"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Duke AML on LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0A66C2] text-white/65 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dukeappliedml/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DAML on Instagram"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white/65 hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-[#ff7a59] hover:to-[#c13584]"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
