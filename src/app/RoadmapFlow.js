"use client";
import React, { useRef, useEffect, useState } from "react";

const ROADMAP = [
  {
    flag: "🚀",
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
    flag: "🌱",
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
    flag: "🌐",
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
    flag: "🎁",
    title: "Utility & Surprises",
    desc: [
      "Utility unlocks for holders",
      "Airdrops & secret rewards",
      "Nexora digital collectible experiences",
      "Teasers for next-gen roadmap (Q2 2026)"
    ],
    color: "#6366f1"
  },
  {
    flag: "🌟",
    title: "Future Vision",
    desc: [
      "Metaverse integrations",
      "Physical merch drops",
      "IRL meetups & global events",
      "Continuous updates & new partnerships"
    ],
    color: "#a855f7"
  }
];







export default function RoadmapFlow() {
  // Responsive horizontal roadmap milestone data
  const milestones = [
    {
      icon: "🚀", color: "#ff3c3c", title: "Reveal & Mint Day!",
      desc: [
        "The official mint day is 20th February!",
        "Collection goes live on Base chain",
        "Website & Art Reveal",
        "First 100 minters get exclusive OG role"
      ]
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
    ? "M 40 120 Q 100 40 160 120 Q 220 200 280 120"
    : "M 80 120 Q 200 40 320 120 Q 440 200 560 120";
  const positions = isMobile
    ? [
        { x: 40, y: 120 },
        { x: 100, y: 240 },
        { x: 160, y: 120 },
        { x: 220, y: 240 },
        { x: 280, y: 120 }
      ]
    : [
        { x: 80, y: 120 },
        { x: 200, y: 240 },
        { x: 320, y: 120 },
        { x: 440, y: 240 },
        { x: 560, y: 120 }
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
          <path
            d={path}
            stroke="#fff"
            strokeWidth={isMobile ? 5 : 8}
            fill="none"
            style={{ filter: "drop-shadow(0 4px 16px #0008)" }}
          />
          {/* Milestone icons */}
          {milestones.map((m, i) => (
            <g key={i}>
              <circle
                cx={positions[i].x}
                cy={positions[i].y}
                r={isMobile ? 24 : 36}
                fill="#23272e"
                stroke={m.color}
                strokeWidth={isMobile ? 4 : 6}
                style={{ filter: "drop-shadow(0 4px 16px #0006)" }}
              />
              <text
                x={positions[i].x}
                y={positions[i].y + (isMobile ? 6 : 10)}
                textAnchor="middle"
                fontSize={isMobile ? "1.4rem" : "2.2rem"}
                fontWeight="bold"
                fill="#fff"
                style={{ filter: "drop-shadow(0 2px 8px #0008)" }}
              >{m.icon}</text>
            </g>
          ))}
        </svg>
        {/* Milestone details overlay with animation and improved spacing */}
        {milestones.map((m, i) => {
          // Alternate above (even) and below (odd)
          const isAbove = i % 2 === 0;
          const verticalOffset = isMobile ? 70 : 90;
          return (
            <div
              key={i}
              id={`roadmap-milestone-${i}`}
              style={{
                position: "absolute",
                left: positions[i].x - (isMobile ? 70 : 110),
                top: isAbove
                  ? positions[i].y - verticalOffset - (isMobile ? 80 : 120)
                  : positions[i].y + verticalOffset,
                width: isMobile ? 140 : 220,
                background: "none",
                borderRadius: "1.2rem",
                boxShadow: "0 2px 16px #0001",
                padding: isMobile ? "0.7rem 0.8rem" : "1rem 1.2rem",
                zIndex: 3,
                color: m.color,
                fontWeight: 600,
                textAlign: "left",
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)"
              }}
            >
              <div style={{ fontSize: isMobile ? "1rem" : "1.1rem", marginBottom: "0.5rem", color: m.color }}>{m.title}</div>
              <ul style={{ color: "#fff", fontSize: isMobile ? "0.92rem" : "0.98rem", margin: 0, paddingLeft: isMobile ? "0.7rem" : "1.2rem", background: "none" }}>
                {m.desc.map((d, j) => (
                  <li key={j} style={{ marginBottom: "0.3rem", lineHeight: 1.4 }}>{d}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
