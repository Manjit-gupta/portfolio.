"use client";

import { useRef, useState, useEffect } from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const PROJECTS = [
  {
  id: "devtinder",
  title: "DevTinder",
  tagline: "Developer Networking Platform",
  description:
    "A full-stack developer networking platform that enables developers to create profiles, connect with other developers, send connection requests, and build professional networks. Features secure authentication, profile management, REST APIs, and cloud deployment.",

  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "REST API",
    "Vercel",
    "Render"
  ],

  github: "https://github.com/Manjit-gupta/devtinder",
  year: "2025",
  featured: true,
  accent: "#a3e635",

  responsibilities: [
    "Built a full-stack developer networking platform using React.js, Node.js, Express.js, MongoDB, JWT, and Tailwind CSS.",
    "Implemented secure authentication and authorization using JWT.",
    "Developed profile management and developer connection features.",
    "Designed and integrated RESTful APIs for frontend-backend communication.",
    "Performed API testing and documentation.",
    "Deployed the frontend on Vercel and backend on Render."
  ]
},
{
  id: "finspark",
  title: "FinSpark Enterprise Prototype",
  tagline: "Enterprise Analytics & Monitoring Platform",
  description:
    "An enterprise-grade full-stack dashboard designed for large-scale business monitoring and analytics. Features multi-tenant architecture, telemetry tracking, PII data masking, interactive analytics dashboards, predictive insights, and secure APIs for enterprise operations.",

  tags: [
    "React.js",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Analytics",
    "Telemetry",
    "Multi-Tenant",
    "PII Masking",
    "Data Visualization"
  ],

  github: "https://github.com/Manjit-gupta/finspark-orchestrator",
  year: "2025",
  featured: true,
  accent: "#38bdf8",

  responsibilities: [
    "Developed an enterprise-grade full-stack dashboard using React.js, Vite, Node.js, and Express.js.",
    "Implemented multi-tenant architecture for secure and scalable organization management.",
    "Built telemetry tracking and monitoring systems for real-time operational insights.",
    "Integrated PII data masking to enhance privacy and compliance.",
    "Created interactive analytics dashboards and responsive data visualizations.",
    "Developed predictive insights features for enterprise decision-making.",
    "Designed and secured backend REST APIs for analytics and monitoring workflows."
  ]
},
{
  id: "ai-internal-coding-agent",
  title: "AI Internal Coding Agent",
  tagline: "Repository-Aware AI Coding Assistant",
  description:
    "An AI-powered coding assistant designed to understand and analyze GitHub repositories. It enables semantic code search, repository-aware question answering, code explanation, debugging assistance, and automated documentation generation using Retrieval-Augmented Generation (RAG) and vector embeddings.",

  tags: [
    "Node.js",
    "TypeScript",
    "React",
    "Vite",
    "MongoDB Atlas",
    "NVIDIA NIM",
    "RAG",
    "Vector Embeddings",
    "GitHub API",
    "AI"
  ],

  github: "https://github.com/Manjit-gupta/-AI-INTERNAL-CODING-AGENT-Public",
  year: "2025",
  featured: true,
  accent: "#f97316",

  responsibilities: [
    "Developed an AI-powered coding assistant using Node.js, TypeScript, React, Vite, MongoDB Atlas, and NVIDIA NIM APIs.",
    "Implemented GitHub repository indexing and automated codebase ingestion workflows.",
    "Generated vector embeddings for efficient semantic code search and retrieval.",
    "Built repository-aware question answering using Retrieval-Augmented Generation (RAG).",
    "Developed code explanation and debugging assistance features for developers.",
    "Automated technical documentation generation from repository content.",
    "Designed scalable backend APIs and integrated AI services for intelligent code analysis."
  ]
},
  
];

function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
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
  return [ref, inView];
}

function Tag({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <span style={{
      fontSize: "10px", fontFamily: "var(--font-mono)",
      color: accent, border: `1px solid ${accent}33`,
      borderRadius: "3px", padding: "3px 8px",
      letterSpacing: "0.04em", background: `${accent}0a`,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

function FeaturedCard({ project, delay = 0 }: { project: typeof PROJECTS[0]; delay?: number }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="featured-card-outer"
      style={{
        gridColumn: "span 2",
        background: "#0d0d0d",
        border: `1px solid ${hovered ? project.accent + "44" : "#1e1e1e"}`,
        borderRadius: "12px", padding: "36px",
        cursor: "pointer", transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "300px", height: "300px",
        background: `radial-gradient(circle, ${project.accent}10 0%, transparent 65%)`,
        pointerEvents: "none",
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease",
      }} />

      {/* Inner grid */}
      <div className="featured-card-inner">
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "10px",
              color: project.accent, letterSpacing: "0.15em",
              background: `${project.accent}15`, border: `1px solid ${project.accent}33`,
              padding: "3px 10px", borderRadius: "999px",
            }}>FEATURED</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
              {project.year}
            </span>
          </div>

          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: "800", lineHeight: "1.1", marginBottom: "16px",
            color: hovered ? project.accent : "var(--text-primary)",
            transition: "color 0.3s ease",
          }}>
            {project.title}
          </h3>

          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "12px",
            color: project.accent, marginBottom: "16px", letterSpacing: "0.05em",
          }}>
            {project.tagline}
          </p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.map(t => <Tag key={t} accent={project.accent}>{t}</Tag>)}
          </div>
        </div>

        {/* Right */}
        <div>
          <p style={{
            color: "var(--text-secondary)", fontSize: "14px",
            lineHeight: "1.85", marginBottom: "28px",
          }}>
            {project.description}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "10px 20px",
              background: `${project.accent}10`, border: `1px solid ${project.accent}44`,
              color: project.accent, fontFamily: "var(--font-mono)", fontSize: "11px",
              letterSpacing: "0.08em", borderRadius: "6px",
              textDecoration: "none", transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `${project.accent}22`; }}
            onMouseLeave={e => { e.currentTarget.style.background = `${project.accent}10`; }}
          >
            <FiGithub size={14} /> VIEW CODE
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay = 0 }: { project: typeof PROJECTS[0]; delay?: number }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0d0d0d",
        border: `1px solid ${hovered ? project.accent + "44" : "#1e1e1e"}`,
        borderRadius: "12px", padding: "28px", cursor: "default",
        transition: "all 0.3s ease",
        transform: inView ? (hovered ? "translateY(-4px)" : "translateY(0)") : "translateY(28px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between", minHeight: "240px",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${project.accent}88, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease",
      }} />

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
            {project.year}
          </span>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              color: hovered ? project.accent : "var(--text-muted)",
              transition: "color 0.2s ease",
              display: "flex", alignItems: "center", gap: "4px",
            }}>
            <FiGithub size={15} />
            <FiArrowUpRight size={13} />
          </a>
        </div>

        <h3 style={{
          fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: "800",
          color: hovered ? project.accent : "var(--text-primary)",
          marginBottom: "6px", transition: "color 0.3s ease",
        }}>
          {project.title}
        </h3>

        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "10px",
          color: project.accent, marginBottom: "14px", letterSpacing: "0.04em",
        }}>
          {project.tagline}
        </p>

        <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.75" }}>
          {project.description}
        </p>
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "20px" }}>
        {project.tags.map(t => <Tag key={t} accent={project.accent}>{t}</Tag>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [labelRef, labelInView] = useInView(0.1);
  const featured = PROJECTS.find(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: "var(--section-py) var(--container-pad)",
        background: "#0d0d0d", position: "relative", overflow: "hidden",
      }}
    >
      <style>{`
        .featured-card-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .projects-small-grid {
          grid-column: span 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .projects-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .projects-header-count {
          display: block;
        }

        @media (max-width: 900px) {
          .featured-card-inner {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .featured-card-outer {
            grid-column: span 2 !important;
          }
          .projects-small-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .projects-small-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-section-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .projects-header-count {
            display: none !important;
          }
        }
      `}</style>

      {/* Top border accent */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(163,230,53,0.15), transparent)",
      }} />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={labelRef}
          className="projects-section-header"
          style={{
            marginBottom: "48px",
            opacity: labelInView ? 1 : 0,
            transform: labelInView ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease",
          }}
        >
          <div>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: "11px",
              color: "var(--accent)", letterSpacing: "0.2em", marginBottom: "10px",
            }}>
              02 — PROJECTS
            </p>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: "800", lineHeight: "1.1",
            }}>
              Things I've <span style={{ color: "var(--accent)" }}>built.</span>
            </h2>
          </div>

          <p className="projects-header-count" style={{
            fontFamily: "var(--font-mono)", fontSize: "11px",
            color: "var(--text-muted)", letterSpacing: "0.08em",
            textAlign: "right", maxWidth: "200px", lineHeight: "1.6",
          }}>
            {PROJECTS.length} projects · GitHub only
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {featured && <FeaturedCard project={featured} delay={0} />}

          <div className="projects-small-grid">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 100} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}