"use client";
import React, { useRef, useEffect, useState } from "react";

function RoadmapFlow() {
  const milestones = [
  {
    icon: "🚀",
    title: "Reveal & Mint Day!",
    desc: [
      "🚨 The official mint day is 20th February! 🚨",
      "Collection goes live on Base chain",
      "Website & Art Reveal",
      "First 100 minters get exclusive OG role"
    ],
    color: "#ff3c3c"
  },
  {
    icon: "🌱",
    title: "Ecosystem Expansion",
    desc: [
      "Launch of Nexora marketplace",
      "Integration with partner dApps",
      "Onboarding new artists & creators",
      "Expanding utility for holders"
    ],
    color: "#ff9900"
  },
  {
    icon: "🌐",
    title: "Community & Growth",
    desc: [
      "Grow the NEXORA community worldwide",
      "Epic events, AMAs & collaborations",
      "Holder-only Discord channels",
      "Community voting on future features"
    ],
    color: "#22c55e"
  },
    {
      icon: "⚙️", color: "#ff9900", title: "Ecosystem Expansion",
      desc: [
        "Launch of Nexora marketplace",
        "Integration with partner dApps",
        "Onboarding new artists & creators",
        "Expanding utility for holders"
      ]
    },
    {
      icon: "🌐", color: "#22c55e", title: "Community & Growth",
      desc: [
        "Grow the NEXORA community worldwide",
        "Epic events, AMAs & collaborations",
        "Holder-only Discord channels",
        "Community voting on future features"
      ]
    },
    {
      icon: "🎁", color: "#6366f1", title: "Utility & Surprises",
      desc: [
        "Utility unlocks for holders",
        "Airdrops & secret rewards",
        "Nexora digital collectible experiences",
        "Teasers for next-gen roadmap (Q2 2026)"
      ]
    },
    {
      icon: "🌟", color: "#a855f7", title: "Future Vision",
      desc: [
        "Metaverse integrations",
        "Physical merch drops",
        "IRL meetups & global events",
        "Continuous updates & new partnerships"
      ]
    }
  ];

  // Animation state
  const [visible, setVisible] = useState(Array(milestones.length).fill(false));
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      milestones.forEach((_, i) => {
        const milestone = document.getElementById(`roadmap-milestone-${i}`);
        if (milestone) {
          const mRect = milestone.getBoundingClientRect();
          if (mRect.top < window.innerHeight - 100) {
            setVisible(v => {
              const nv = [...v]; nv[i] = true; return nv;
            });
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Responsive SVG and layout
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const svgWidth = isMobile ? 320 : 640;
  const svgHeight = isMobile ? 320 : 320;
  const path = isMobile
    ? "M 40 120 Q 70 40 100 120 Q 130 200 160 120 Q 190 40 220 120 Q 250 200 280 120 Q 310 40 340 120"
    : "M 80 120 Q 120 40 160 120 Q 200 200 240 120 Q 280 40 320 120 Q 360 200 400 120 Q 440 40 480 120 Q 520 200 560 120";
  const positions = isMobile
    ? [
        { x: 40, y: 120 },
        { x: 70, y: 200 },
        { x: 100, y: 120 },
        { x: 130, y: 200 },
        { x: 160, y: 120 },
        { x: 190, y: 200 },
        { x: 220, y: 120 }
      ]
    : [
        { x: 80, y: 120 },
        { x: 120, y: 200 },
        { x: 160, y: 120 },
        { x: 200, y: 200 },
        { x: 240, y: 120 },
        { x: 280, y: 200 },
        { x: 320, y: 120 }
      ];

  return (
    <section
      ref={sectionRef}
      className="nexora-roadmap-flow"
      style={{
        minHeight: svgHeight + 120,
        position: "relative",
        margin: "4rem auto 2rem auto",
        maxWidth: svgWidth + 160,
        borderRadius: "2rem",
        boxShadow: "0 8px 32px #0006",
        background: "linear-gradient(90deg, #23272e 0%, #181a1b 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "1rem" : "2rem"
      }}
    >
      <h3 className="nexora-roadmap-title" style={{ color: "#fff", fontSize: isMobile ? "1.4rem" : "2.2rem", fontWeight: 700, textAlign: "center", margin: "2rem 0" }}>Roadmap</h3>
      <div style={{ position: "relative", width: svgWidth, height: svgHeight }}>
        <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ position: "absolute", left: 0, top: 0, zIndex: 2 }}>
          {/* Horizontal S-curve path */}
          {/* Snake road path, visually connecting all milestones */}
          <path
            d={isMobile
              ? "M 40 120 Q 70 40 100 120 Q 130 200 160 120 Q 190 40 220 120 Q 250 200 280 120 Q 310 40 340 120"
              : "M 80 120 Q 120 40 160 120 Q 200 200 240 120 Q 280 40 320 120 Q 360 200 400 120 Q 440 40 480 120 Q 520 200 560 120"}
            stroke="#fff"
            strokeWidth={isMobile ? 5 : 8}
            fill="none"
            style={{ filter: "drop-shadow(0 4px 16px #0008)" }}
          />
        </svg>
        {/* Milestone details overlay with animation and improved spacing */}
        {milestones.map((m, i) => {
          // Alternate above (even) and below (odd)
          const isAbove = i % 2 === 0;
          const verticalOffset = isMobile ? 70 : 90;
            return (
              <div key={i}>
                {/* Icon marker */}
                <div
                  id={`roadmap-milestone-${i}`}
                  style={{
                    position: "absolute",
                    left: positions[i].x - (isMobile ? 24 : 36),
                    top: positions[i].y - (isMobile ? 24 : 36),
                    width: isMobile ? 48 : 72,
                    height: isMobile ? 48 : 72,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 4,
                    background: "#fff",
                    borderRadius: "50%",
                    boxShadow: `0 2px 16px ${m.color}33`,
                    border: `4px solid ${m.color}`,
                    fontSize: isMobile ? "1.4rem" : "2.2rem",
                    fontWeight: "bold"
                  }}
                >{m.icon}</div>
                {/* Title and details, alternating above/below */}
                <div
                  style={{
                    position: "absolute",
                    left: positions[i].x - (isMobile ? 70 : 110),
                    top: isAbove
                      ? positions[i].y - verticalOffset - (isMobile ? 80 : 120)
                      : positions[i].y + verticalOffset + (isMobile ? 48 : 72),
                    width: isMobile ? 140 : 220,
                    background: "none",
                    padding: 0,
                    zIndex: 3,
                    color: m.color,
                    fontWeight: 700,
                    textAlign: isAbove ? "right" : "left",
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)"
                  }}
                >
                  <div style={{ fontSize: isMobile ? "1rem" : "1.1rem", marginBottom: "0.5rem", color: m.color }}>{m.title}</div>
                  <ul style={{ color: "#fff", fontSize: isMobile ? "0.92rem" : "0.98rem", margin: 0, paddingLeft: 0, background: "none", listStyle: "none" }}>
                    {m.desc.map((d, j) => (
                      <li key={j} style={{ marginBottom: "0.3rem", lineHeight: 1.4, textAlign: isAbove ? "right" : "left" }}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
        })}
      </div>

    </section>
  );
}

export default RoadmapFlow;

