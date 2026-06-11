"use client";

import { useRef, useState, useEffect } from "react";

const JOURNEY = [
  {
    type: "education",
    icon: "🎓",
    period: "2023 — 2027",
    title: "B.Tech in Computer Science & Engineering",
    org: "ABES Engineering College, Ghaziabad (AKTU)",
    accent: "#60a5fa",
    tags: ["CSE", "AKTU", "Web Development"],
    bullets: [
      "Pursuing Bachelor of Technology in Computer Science & Engineering",
      "Expected Graduation: May 2027",
      
      "Actively building projects in Full Stack Development and Backend Engineering",
    ],
  },

  {
    type: "education",
    icon: "📘",
    period: "2021 — 2023",
    title: "Class XII (BSEB)",
    org: "L.N.M.S. College, Birpur, Supaul, Bihar",
    accent: "#34d399",
    tags: ["PCM", "Computer Science"],
    bullets: [
      "Completed Higher Secondary Education",
      
      "Studied Science stream",
    ],
  },

  {
    type: "education",
    icon: "📗",
    period: "2020",
    title: "Class X (CBSE)",
    org: "Nalanda Academy, Rajasthan, India",
    accent: "#f59e0b",
    tags: ["Secondary Education"],
    bullets: [
      "Completed Secondary Education",
    
      "Built a strong academic foundation and analytical skills",
    ],
  },
];



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

function TimelineItem({ item, index }: { item: typeof JOURNEY[0]; index: number }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40px 1fr",
        gap: "0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
        marginBottom: "0",
      }}
    >
      {/* LEFT — even items show content, odd items show empty */}
      {index % 2 === 0 ? (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? item.accent + "08" : "#0d0d0d",
            border: `1px solid ${hovered ? item.accent + "44" : "#1e1e1e"}`,
            borderRadius: "10px",
            padding: "24px",
            marginRight: "24px",
            marginBottom: "32px",
            transition: "all 0.25s ease",
            position: "relative",
          }}
        >
          {/* Arrow pointing right toward timeline */}
          <div style={{
            position: "absolute", right: "-8px", top: "24px",
            width: "0", height: "0",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderLeft: `8px solid ${hovered ? item.accent + "44" : "#1e1e1e"}`,
          }} />
          <CardContent item={item} hovered={hovered} />
        </div>
      ) : (
        <div style={{ marginBottom: "32px" }} />
      )}

      {/* CENTER — dot + line */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <div style={{
          width: "14px", height: "14px", borderRadius: "50%",
          background: item.accent,
          border: `3px solid #0a0a0a`,
          boxShadow: `0 0 0 3px ${item.accent}33`,
          zIndex: 1, flexShrink: 0,
          marginTop: "24px",
          transition: "box-shadow 0.3s ease",
          ...(hovered ? { boxShadow: `0 0 0 6px ${item.accent}33` } : {}),
        }} />
        <div style={{
          width: "1px", flex: 1,
          background: `linear-gradient(180deg, ${item.accent}44, #1e1e1e)`,
          minHeight: "40px",
        }} />
      </div>

      {/* RIGHT — odd items show content, even items show empty */}
      {index % 2 !== 0 ? (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? item.accent + "08" : "#0d0d0d",
            border: `1px solid ${hovered ? item.accent + "44" : "#1e1e1e"}`,
            borderRadius: "10px",
            padding: "24px",
            marginLeft: "24px",
            marginBottom: "32px",
            transition: "all 0.25s ease",
            position: "relative",
          }}
        >
          {/* Arrow pointing left toward timeline */}
          <div style={{
            position: "absolute", left: "-8px", top: "24px",
            width: "0", height: "0",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderRight: `8px solid ${hovered ? item.accent + "44" : "#1e1e1e"}`,
          }} />
          <CardContent item={item} hovered={hovered} />
        </div>
      ) : (
        <div style={{ marginBottom: "32px" }} />
      )}
    </div>
  );
}

function CardContent({ item, hovered }: { item: typeof JOURNEY[0]; hovered: boolean }) {
  return (
    <>
      {/* Period + type badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "10px",
          color: item.accent, letterSpacing: "0.12em",
          background: item.accent + "15",
          border: `1px solid ${item.accent}33`,
          padding: "2px 8px", borderRadius: "999px",
          textTransform: "uppercase",
        }}>
          {item.type === "work" ? "Internship" : item.type === "current" ? "Current" : "Education"}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
          {item.period}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: "800",
        color: hovered ? item.accent : "var(--text-primary)",
        marginBottom: "4px", transition: "color 0.25s ease",
        lineHeight: "1.2",
      }}>
        {item.title}
      </h3>

      {/* Org */}
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: "11px",
        color: "var(--text-muted)", marginBottom: "14px", letterSpacing: "0.04em",
      }}>
        {item.org}
      </p>

      {/* Bullets */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0" }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{
            fontSize: "13px", color: "var(--text-secondary)",
            lineHeight: "1.75", marginBottom: "4px",
            display: "flex", gap: "8px",
          }}>
            <span style={{ color: item.accent, flexShrink: 0, marginTop: "2px" }}>›</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {item.tags.map(t => (
          <span key={t} style={{
            fontSize: "10px", fontFamily: "var(--font-mono)",
            color: item.accent, border: `1px solid ${item.accent}33`,
            borderRadius: "3px", padding: "2px 7px",
            background: item.accent + "0a",
          }}>{t}</span>
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  const [sectionRef, sectionInView] = useInView(0.05);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "var(--section-py) var(--container-pad)",
        background: "var(--bg-primary)",
        position: "relative", overflow: "hidden",
      }}
    >
      <style>{`
        .timeline-item-grid {
          display: grid;
          grid-template-columns: 1fr 40px 1fr;
          gap: 0;
        }

        @media (max-width: 768px) {
          .timeline-item-grid {
            grid-template-columns: 24px 1fr !important;
          }
          .timeline-left-empty,
          .timeline-right-empty {
            display: none !important;
          }
          .timeline-card-left,
          .timeline-card-right {
            margin-left: 16px !important;
            margin-right: 0 !important;
            grid-column: 2 !important;
          }
          .timeline-arrow-right,
          .timeline-arrow-left {
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

        {/* Section label */}
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "11px",
          color: "var(--accent)", letterSpacing: "0.2em", marginBottom: "12px",
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease",
        }}>
          03 — JOURNEY
        </p>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: "800", lineHeight: "1.1", marginBottom: "64px",
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease 0.1s",
        }}>
          How I got <span style={{ color: "var(--accent)" }}>here.</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {JOURNEY.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Currently card */}
        

      </div>
    </section>
  );
}