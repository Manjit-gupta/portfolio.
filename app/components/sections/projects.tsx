"use client";

import { useRef, useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";

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
      "Render",
    ],
    github: "https://github.com/Manjit-gupta/devtinder",
    year: "2025",
    accent: "#a3e635",
  },
  {
    id: "finspark",
    title: "FinSpark Enterprise Prototype",
    tagline: "Enterprise Analytics & Monitoring Platform",
    description:
      "An enterprise-grade full-stack dashboard designed for large-scale business monitoring and analytics. Features multi-tenant architecture, telemetry tracking, PII data masking, interactive analytics dashboards, predictive insights, and secure APIs.",
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
      "Data Visualization",
    ],
    github: "https://github.com/Manjit-gupta/finspark-orchestrator",
    year: "2025",
    accent: "#38bdf8",
  },
  {
    id: "ai-internal-coding-agent",
    title: "AI Internal Coding Agent",
    tagline: "Repository-Aware AI Coding Assistant",
    description:
      "An AI-powered coding assistant designed to understand and analyze GitHub repositories. It enables semantic code search, repository-aware question answering, code explanation, debugging assistance, and automated documentation generation using RAG and vector embeddings.",
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
      "AI",
    ],
    github:
      "https://github.com/Manjit-gupta/-AI-INTERNAL-CODING-AGENT-Public",
    year: "2025",
    accent: "#f97316",
  },
  {
    id: "real-time-notification-system",
    title: "Real-Time Notification System",
    tagline: "Distributed Notification Delivery Platform",
    description:
      "A production-grade distributed notification system that provides real-time WebSocket delivery, ACK-based reliability, offline replay, deduplication, Redis presence tracking, retry workers, and horizontal scaling using Socket.IO and Redis.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "JWT",
      "Docker",
      "WebSockets",
      "Distributed Systems",
      "Real-Time Communication",
    ],
    github:
      "https://github.com/Manjit-gupta/Real-Time-Notification-System-Public",
    year: "2025",
    accent: "#06b6d4",
  },
  {
    id: "finance-data-processing-backend",
    title: "Finance Data Processing Backend",
    tagline: "Secure Finance Dashboard Backend",
    description:
      "A production-style finance dashboard backend with JWT authentication, RBAC, financial records CRUD, SQL-powered analytics, audit logging, rate limiting, idempotency support, validation, Swagger documentation, and clean layered architecture.",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "SQL",
      "JWT",
      "RBAC",
      "Zod",
      "Jest",
      "Supertest",
      "Swagger",
      "Docker",
      "REST API",
    ],
    github:
      "https://github.com/Manjit-gupta/Finance-Data-Processing-and-Access-Control-Backend",
    year: "2025",
    accent: "#22c55e",
  },
  {
    id: "production-ready-backend-system",
    title: "Production-Ready Backend System",
    tagline: "JWT Authentication & RBAC API",
    description:
      "A production-ready full-stack backend system demonstrating secure JWT authentication, role-based access control, scalable API design, PostgreSQL integration, Redis caching, structured logging, rate limiting, Swagger documentation, Docker infrastructure, and React frontend integration.",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "JWT",
      "RBAC",
      "Docker",
      "React",
      "Vite",
      "Joi",
      "Swagger",
      "Winston",
      "REST API",
    ],
    github:
      "https://github.com/Manjit-gupta/Production-Ready-Backend-System---JWT-Authentication---RBAC---Scalable-API-Design-Public",
    year: "2025",
    accent: "#8b5cf6",
  },
];

function useInView(
  threshold = 0.1
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Tag({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <span
      style={{
        fontSize: "10px",
        fontFamily: "var(--font-mono)",
        color: accent,
        border: `1px solid ${accent}33`,
        borderRadius: "3px",
        padding: "3px 8px",
        letterSpacing: "0.04em",
        background: `${accent}0a`,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function FeaturedCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="featured-card-outer"
      style={{
        background: "#0d0d0d",
        border: `1px solid ${hovered ? project.accent + "44" : "#1e1e1e"}`,
        borderRadius: "12px",
        padding: "36px",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${project.accent}10 0%, transparent 65%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div className="featured-card-inner">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: project.accent,
                letterSpacing: "0.15em",
                background: `${project.accent}15`,
                border: `1px solid ${project.accent}33`,
                padding: "3px 10px",
                borderRadius: "999px",
              }}
            >
              FEATURED
            </span>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-muted)",
              }}
            >
              {project.year}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "16px",
              color: hovered ? project.accent : "var(--text-primary)",
              transition: "color 0.3s ease",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: project.accent,
              marginBottom: "16px",
              letterSpacing: "0.05em",
            }}
          >
            {project.tagline}
          </p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <Tag key={tag} accent={project.accent}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: "1.85",
              marginBottom: "28px",
            }}
          >
            {project.description}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              background: `${project.accent}10`,
              border: `1px solid ${project.accent}44`,
              color: project.accent,
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            <FiGithub size={14} /> VIEW CODE
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [labelRef, labelInView] = useInView(0.1);

  return (
    <section
      id="projects"
      style={{
        padding: "var(--section-py) var(--container-pad)",
        background: "#0d0d0d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .featured-card-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .featured-card-inner {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(163,230,53,0.15), transparent)",
        }}
      />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div
          ref={labelRef}
          style={{
            marginBottom: "48px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            opacity: labelInView ? 1 : 0,
            transform: labelInView ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.2em",
                marginBottom: "10px",
              }}
            >
              02 — PROJECTS
            </p>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: "800",
                lineHeight: "1.1",
              }}
            >
              Things I've{" "}
              <span style={{ color: "var(--accent)" }}>built.</span>
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textAlign: "right",
            }}
          >
            {PROJECTS.length} projects · GitHub only
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}