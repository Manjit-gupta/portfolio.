"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiSpring, SiFlask,
  SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiGithub,
  SiPython, SiJavascript, SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const SKILLS = {
  Languages: [
    { icon: FaJava,        name: "Java",       color: "#f89820" },
    { icon: SiPython,      name: "Python",     color: "#3776ab" },
    { icon: SiC,           name: "C",          color: "#a8b9cc" },
    { icon: SiJavascript,  name: "JavaScript", color: "#f7df1e" },
    { icon: SiTypescript,  name: "TypeScript", color: "#3178c6" },
  ],
  Frameworks: [
    { icon: SiSpring,      name: "Spring Boot", color: "#6db33f" },
    { icon: SiReact,       name: "React.js",    color: "#61dafb" },
    { icon: SiNextdotjs,   name: "Next.js",     color: "#ffffff" },
    { icon: SiNodedotjs,   name: "Node.js",     color: "#68a063" },
    { icon: SiFlask,       name: "Flask",       color: "#ffffff" },
    { icon: SiTailwindcss, name: "Tailwind",    color: "#38bdf8" },
  ],
  "Databases & Cloud": [
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMongodb,    name: "MongoDB",    color: "#47a248" },
    { icon: SiDocker,     name: "Docker",     color: "#2496ed" },
    { icon: SiGit,        name: "Git",        color: "#f05032" },
    { icon: SiGithub,     name: "GitHub",     color: "#ffffff" },
    { icon: VscVscode,    name: "VS Code",    color: "#007acc" },
  ],
};

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

function SkillIcon({ icon: Icon, name, color, delay = 0 }: {
  icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
  name: string; color: string; delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView(0.05);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: "8px", padding: "16px 12px", borderRadius: "8px",
        border: `1px solid ${hovered ? color + "55" : "#1e1e1e"}`,
        background: hovered ? color + "0f" : "#0d0d0d",
        cursor: "default", transition: "all 0.22s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
        minWidth: "72px", flex: "0 0 auto",
      }}
    >
      <Icon size={32} style={{
        color: hovered ? color : "#444",
        transition: "color 0.22s ease",
        filter: hovered ? `drop-shadow(0 0 6px ${color}55)` : "none",
      }} />
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "9px",
        color: hovered ? "#aaa" : "#444",
        letterSpacing: "0.04em", textAlign: "center",
        transition: "color 0.22s ease", whiteSpace: "nowrap",
      }}>
        {name}
      </span>
    </div>
  );
}

export default function About() {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "var(--section-py) var(--container-pad)",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 96px;
          align-items: start;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .about-icons-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-icons-row {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .about-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-icons-row {
            justify-content: center;
          }
        }
      `}</style>

      {/* Top border accent */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(163,230,53,0.15), transparent)",
      }} />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>

        {/* Section label */}
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "11px",
          color: "var(--accent)", letterSpacing: "0.2em", marginBottom: "48px",
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease",
        }}>
          01 — ABOUT & SKILLS
        </p>

        {/* Two columns: Bio left, Icons right */}
        <div className="about-grid">

          {/* LEFT — Bio + Stats */}
          <div style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s ease 0.1s",
          }}>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: "800", lineHeight: "1.2", marginBottom: "24px",
            }}>
              I don't just write code.{" "}
              <span style={{ color: "var(--accent)" }}>I engineer solutions.</span>
            </h2>

            <p style={{
              color: "var(--text-secondary)", fontSize: "14px",
              lineHeight: "1.9", marginBottom: "16px",
            }}>
              I'm <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>Manjit Gupta</span>,
              a Full Stack Developer equally comfortable designing React UIs or
              architecting Java Spring Boot microservices. I care about performance,
              clean architecture, and shipping things that work in production.
            </p>

            <p style={{
              color: "var(--text-muted)", fontSize: "12px",
              lineHeight: "1.9", marginBottom: "32px",
              fontFamily: "var(--font-mono)",
            }}>
              200+ LeetCode · DSA · OOP · System Design · REST · Microservices
            </p>

            {/* Stats grid */}
            <div className="about-stats-grid" style={{
              paddingTop: "28px",
              borderTop: "1px solid #1e1e1e",
            }}>
              {[
                ["5+", "Projects Built"],
                ["1+", "Years Exp"],
                ["200+", "LeetCode"],
                ["10+", "Technologies"],
              ].map(([num, label]) => (
                <div key={label} style={{
                  padding: "16px", border: "1px solid #1a1a1a",
                  borderRadius: "8px", background: "#0d0d0d",
                }}>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "26px", fontWeight: "800",
                    color: "var(--accent)", lineHeight: 1,
                  }}>{num}</div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: "10px",
                    color: "var(--text-muted)", letterSpacing: "0.08em", marginTop: "6px",
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Skill icons by category */}
          <div style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s ease 0.2s",
          }}>
            {Object.entries(SKILLS).map(([category, skills], catIndex) => (
              <div key={category} style={{ marginBottom: "28px" }}>

                {/* Category label + line */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  marginBottom: "14px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "10px",
                    color: "var(--text-muted)", letterSpacing: "0.15em",
                    whiteSpace: "nowrap",
                  }}>
                    {category.toUpperCase()}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "#1e1e1e" }} />
                </div>

                {/* Icon row */}
                <div className="about-icons-row">
                  {skills.map((skill, i) => (
                    <SkillIcon
                      key={skill.name}
                      icon={skill.icon}
                      name={skill.name}
                      color={skill.color}
                      delay={catIndex * 80 + i * 40}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}