"use client";

import { useRef, useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from "react-icons/fi";

const SOCIALS = [
  {
    icon: FiGithub,
    label: "GitHub",
    handle: "Manjit-gupta]",
    href: "https://github.com/Manjit-gupta?tab=repositories",
    accent: "#ffffff",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    handle: "Manjit Gupta",
    href: "https://www.linkedin.com/in/manjit-gupta-02b8b7296/",
    accent: "#0a66c2",
  },
  {
    icon: FiTwitter,
    label: "Twitter / X",
    handle: "@ManjitGupta1821",
    href: "https://x.com/ManjitGupta1821",
    accent: "#1d9bf0",
  },
];

const EMAIL = "manjitkumar7667693313@gmail.com";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

export default function Contact() {
  const [sectionRef, inView] = useInView(0.1);
  const [emailCopied, setEmailCopied] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "var(--section-py) var(--container-pad)",
        background: "#0d0d0d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border accent */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(163,230,53,0.15), transparent)",
      }} />

      {/* Background glow */}
      <div style={{
        position: "absolute", bottom: "-100px", left: "50%",
        transform: "translateX(-50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(163,230,53,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>

        {/* Section label */}
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "11px",
          color: "var(--accent)", letterSpacing: "0.2em", marginBottom: "12px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease",
        }}>
          04 — CONTACT
        </p>

        {/* Main heading */}
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(36px, 6vw, 80px)",
          fontWeight: "800", lineHeight: "1.0",
          marginBottom: "24px", letterSpacing: "-0.02em",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.1s",
        }}>
          Let's build something<br />
          <span style={{ color: "var(--accent)" }}>together.</span>
        </h2>

        {/* Subtext */}
        <p style={{
          color: "var(--text-secondary)", fontSize: "15px",
          lineHeight: "1.8", maxWidth: "480px", marginBottom: "48px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.2s",
        }}>
          Open to backend, full stack, and frontend internships.
          If you have an interesting opportunity or just want to talk tech — my inbox is open.
        </p>

        {/* Email CTA */}
        <div style={{
          marginBottom: "64px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.3s",
        }}>
          {/* Email display */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0",
            borderRadius: "8px", overflow: "hidden",
            border: "1px solid #1e1e1e",
            marginBottom: "16px",
          }}>
            <span style={{
              padding: "14px 20px",
              fontFamily: "var(--font-mono)", fontSize: "14px",
              color: "var(--text-secondary)",
              background: "#111",
              borderRight: "1px solid #1e1e1e",
            }}>
              {EMAIL}
            </span>
            <button
              onClick={copyEmail}
              style={{
                padding: "14px 20px",
                fontFamily: "var(--font-mono)", fontSize: "11px",
                color: emailCopied ? "#0a0a0a" : "var(--accent)",
                background: emailCopied ? "var(--accent)" : "rgba(163,230,53,0.05)",
                border: "none", cursor: "pointer",
                letterSpacing: "0.08em",
                transition: "all 0.2s ease",
              }}
            >
              {emailCopied ? "COPIED ✓" : "COPY"}
            </button>
          </div>

          {/* Or mailto button */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={`mailto:${EMAIL}`}
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "13px 28px",
                background: emailHovered ? "var(--accent)" : "rgba(163,230,53,0.1)",
                border: "1px solid var(--accent)",
                color: emailHovered ? "#0a0a0a" : "var(--accent)",
                fontFamily: "var(--font-mono)", fontSize: "12px",
                letterSpacing: "0.08em", borderRadius: "6px",
                textDecoration: "none", transition: "all 0.2s ease",
              }}
            >
              <FiMail size={15} />
              SEND EMAIL
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px", background: "#1a1a1a", marginBottom: "40px",
          opacity: inView ? 1 : 0, transition: "all 0.6s ease 0.4s",
        }} />

        {/* Social links */}
        <div
          className="contact-socials"
          style={{
            display: "flex", gap: "16px", flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.45s",
          }}
        >
          {SOCIALS.map(({ icon: Icon, label, handle, href, accent }) => (
            <SocialCard
              key={label}
              icon={Icon}
              label={label}
              handle={handle}
              href={href}
              accent={accent}
            />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-socials {
            flex-direction: column !important;
          }
          .contact-socials > * {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

function SocialCard({ icon: Icon, label, handle, href, accent }: {
  icon: React.ComponentType<{ size: number }>;
  label: string; handle: string;
  href: string; accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "14px",
        padding: "16px 20px", flex: "1", minWidth: "200px",
        background: hovered ? accent + "0d" : "#111",
        border: `1px solid ${hovered ? accent + "55" : "#1e1e1e"}`,
        borderRadius: "8px", textDecoration: "none",
        transition: "all 0.22s ease",
      }}
    >
      <div style={{ color: hovered ? accent : "#555" }}>
        <Icon size={18} />
      </div>
      <div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: "11px",
          color: hovered ? accent : "var(--text-muted)",
          letterSpacing: "0.08em", transition: "color 0.22s ease",
        }}>
          {label.toUpperCase()}
        </div>
        <div style={{
          fontSize: "13px", color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
          marginTop: "2px", transition: "color 0.22s ease",
        }}>
          {handle}
        </div>
      </div>
      <FiArrowUpRight
        size={14}
        color={hovered ? accent : "#333"}
        style={{ marginLeft: "auto", transition: "color 0.22s ease" }}
      />
    </a>
  );
}