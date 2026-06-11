"use client";

import { useEffect, useState, useRef } from "react";

const ROLES = [
  "Full Stack Developer",
  "Open Source Contributor",
  "Problem Solver",
  "Backend Enthusiast",
];

const SCRAMBLE_CHARS = "X$#@!&%?*K9Z^~<>[]{}|";

function useScramble(finalText: string, trigger = true) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = finalText.length * 4;
    const interval = setInterval(() => {
      const revealed = Math.floor(frame / 4);
      let result = finalText.slice(0, revealed);
      if (revealed < finalText.length) {
        result += Array.from({ length: finalText.length - revealed })
          .map(
            () =>
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
          )
          .join("");
      }
      setDisplay(result);
      frame++;
      if (frame > totalFrames) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [trigger, finalText]);
  return display;
}

function useTypewriter(items: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = items[roleIndex];
    let timeout: NodeJS.Timeout | undefined;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % items.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        isDeleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, items, speed, pause]);

  return text;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dot grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 30;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      offset = (offset + 0.003) % 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing - offset * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(
            Math.pow((x - canvas.width * 0.35) / canvas.width, 2) +
              Math.pow((y - canvas.height * 0.5) / canvas.height, 2),
          );
          const alpha = Math.max(0, 0.18 - dist * 0.5);
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`;
          ctx.fill();
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrambledName = useScramble("Manjit", mounted);
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-start md:items-center overflow-hidden bg-[var(--bg-primary)] pt-24 md:pt-28"
    >
      {/* Animated dot grid */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT — Text */}
        <div>
          {/* Available badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(163,230,53,0.25)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "32px",
              background: "rgba(163,230,53,0.05)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#a3e635",
                boxShadow: "0 0 0 0 rgba(163,230,53,0.4)",
                animation: "pulse 2s infinite",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#a3e635",
                letterSpacing: "0.12em",
              }}
            >
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Greeting */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}
          >
            Hi, I'm
          </p>

          {/* Scramble name */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(52px, 7vw, 88px)",
              fontWeight: "800",
              lineHeight: "1.0",
              color: "#f5f5f5",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--accent)" }}>{scrambledName}</span>
            <br />
            <span style={{ color: "#2a2a2a", WebkitTextStroke: "1px #333" }}>
              Gupta
            </span>
          </h1>

          {/* Typewriter role */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(14px, 1.8vw, 18px)",
              color: "var(--text-secondary)",
              marginBottom: "28px",
              minHeight: "28px",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <span>{role}</span>
            <span
              style={{
                color: "var(--accent)",
                animation: "blink 1s steps(1) infinite",
              }}
            >
              |
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              lineHeight: "1.85",
              maxWidth: "420px",
              marginBottom: "40px",
            }}
          >
            I build fast, scalable web apps from database to UI. Passionate
            about clean code, great UX, and shipping products that actually
            matter.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                padding: "12px 28px",
                background: "rgba(163,230,53,0.1)",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "var(--accent)";
                (e.target as HTMLElement).style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "rgba(163,230,53,0.1)";
                (e.target as HTMLElement).style.color = "var(--accent)";
              }}
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              style={{
                padding: "12px 28px",
                background: "transparent",
                border: "1px solid #2a2a2a",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "#444";
                (e.target as HTMLElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = "#2a2a2a";
                (e.target as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* RIGHT — Code block */}
        {/* Wrapper gives us perspective for a nicer 3D effect */}
        <div style={{ perspective: "1100px" }}>
          <div
            style={{
              background: "#0d0d0d",
              border: "1px solid #1e1e1e",
              borderRadius: "10px",
              overflow: "hidden",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              lineHeight: "1.8",
              minWidth: "320px",
              transform: "rotateY(-16deg) rotateX(6deg) translateY(8px) scale(1.02)",
              transformStyle: "preserve-3d",
              boxShadow:
                "-26px 32px 70px rgba(0,0,0,0.75), 0 0 32px rgba(163,230,53,0.12)",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "rotateY(-4deg) rotateX(2deg) translateY(0px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "-18px 24px 60px rgba(0,0,0,0.85), 0 0 40px rgba(163,230,53,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "rotateY(-16deg) rotateX(6deg) translateY(8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "-26px 32px 70px rgba(0,0,0,0.75), 0 0 32px rgba(163,230,53,0.12)";
            }}
          >
            {/* Window bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "12px 16px",
              borderBottom: "1px solid #1a1a1a",
              background: "#111",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#ff5f57",
              }}
            />
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#febc2e",
              }}
            />
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#28c840",
              }}
            />
            <span
              style={{ marginLeft: "8px", fontSize: "11px", color: "#444" }}
            >
            Manjit.ts
            </span>
          </div>

            {/* Code content */}
            <div style={{ padding: "24px 28px" }}>
              <p>
                <span style={{ color: "#637777" }}>// about me</span>
              </p>
              <p style={{ marginTop: "8px" }}>
                <span style={{ color: "#82aaff" }}>const </span>
                <span style={{ color: "#a3e635" }}>Manjit</span>
                <span style={{ color: "#89ddff" }}> = {"{"}</span>
              </p>
              <p style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#f07178" }}>name</span>
                <span style={{ color: "#89ddff" }}>: </span>
                <span style={{ color: "#c3e88d" }}>"Manjit kumar"</span>
                <span style={{ color: "#89ddff" }}>,</span>
              </p>
              <p style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#f07178" }}>role</span>
                <span style={{ color: "#89ddff" }}>: </span>
                <span style={{ color: "#c3e88d" }}>Full Stack Developer"</span>
                <span style={{ color: "#89ddff" }}>,</span>
              </p>
              <p style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#f07178" }}>stack</span>
                <span style={{ color: "#89ddff" }}>: [</span>
              </p>
              {["Next.js", "Node.js", "JAVA", "TypeScript", "PostgreSQL"].map((s) => (
                <p key={s} style={{ paddingLeft: "40px" }}>
                  <span style={{ color: "#c3e88d" }}>"{s}"</span>
                  <span style={{ color: "#89ddff" }}>,</span>
                </p>
              ))}
              <p style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#89ddff" }}>],</span>
              </p>
              <p style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#f07178" }}>location</span>
                <span style={{ color: "#89ddff" }}>: </span>
                <span style={{ color: "#c3e88d" }}>"India 🇮🇳"</span>
                <span style={{ color: "#89ddff" }}>,</span>
              </p>
              <p style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#f07178" }}>available</span>
                <span style={{ color: "#89ddff" }}>: </span>
                <span style={{ color: "#a3e635" }}>true</span>
                <span style={{ color: "#89ddff" }}>,</span>
              </p>
              <p>
                <span style={{ color: "#89ddff" }}>{"};"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(163,230,53,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(163,230,53,0); }
          100% { box-shadow: 0 0 0 0 rgba(163,230,53,0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
