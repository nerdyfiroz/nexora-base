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
  // Roadmap milestone data
  const milestones = [
    {
      x: 120, y: 80, icon: "🚀", color: "#ff3c3c", title: "Reveal & Mint Day!",
      desc: [
        "The official mint day is 20th February!",
        "Collection goes live on Base chain",
        "Website & Art Reveal",
        "First 100 minters get exclusive OG role"
      ]
    },
    {
      x: 240, y: 180, icon: "⚙️", color: "#ff9900", title: "Ecosystem Expansion",
      desc: [
        "Launch of Nexora marketplace",
        "Integration with partner dApps",
        "Onboarding new artists & creators",
        "Expanding utility for holders"
      ]
    },
    {
      x: 120, y: 300, icon: "🌐", color: "#22c55e", title: "Community & Growth",
      desc: [
        "Grow the NEXORA community worldwide",
        "Epic events, AMAs & collaborations",
        "Holder-only Discord channels",
        "Community voting on future features"
      ]
    },
    {
      x: 240, y: 400, icon: "🎁", color: "#6366f1", title: "Utility & Surprises",
      desc: [
        "Utility unlocks for holders",
        "Airdrops & secret rewards",
        "Nexora digital collectible experiences",
        "Teasers for next-gen roadmap (Q2 2026)"
      ]
    },
    {
      x: 120, y: 520, icon: "🌟", color: "#a855f7", title: "Future Vision",
      desc: [
        "Metaverse integrations",
        "Physical merch drops",
        "IRL meetups & global events",
        "Continuous updates & new partnerships"
      ]
    }
  ];

  return (
    <section
      className="nexora-roadmap-flow"
      style={{
        minHeight: 700,
        position: "relative",
        margin: "4rem auto 2rem auto",
        maxWidth: 420,
        borderRadius: "2rem",
        boxShadow: "0 8px 32px #0006",
        background: "linear-gradient(180deg, #23272e 0%, #181a1b 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h3 className="nexora-roadmap-title" style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 700, textAlign: "center", margin: "2rem 0" }}>Roadmap</h3>
      <div style={{ position: "relative", width: 340, height: 600 }}>
        <svg width="340" height="600" viewBox="0 0 340 600" style={{ position: "absolute", left: 0, top: 0, zIndex: 2 }}>
          {/* S-curve path */}
          <path
            d="M 120 80 Q 240 140 120 300 Q 240 400 120 520"
            stroke="#fff"
            strokeWidth="8"
            fill="none"
            style={{ filter: "drop-shadow(0 4px 16px #0008)" }}
          />
          {/* Milestone icons */}
          {milestones.map((m, i) => (
            <g key={i}>
              <circle
                cx={m.x}
                cy={m.y}
                r="36"
                fill="#23272e"
                stroke={m.color}
                strokeWidth="6"
                style={{ filter: "drop-shadow(0 4px 16px #0006)" }}
              />
              <text
                x={m.x}
                y={m.y + 10}
                textAnchor="middle"
                fontSize="2.2rem"
                fontWeight="bold"
                fill="#fff"
                style={{ filter: "drop-shadow(0 2px 8px #0008)" }}
              >{m.icon}</text>
            </g>
          ))}
        </svg>
        {/* Milestone details overlay */}
        {milestones.map((m, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: m.x - 110,
              top: m.y + 40,
              width: 220,
              background: "rgba(24,26,27,0.95)",
              borderRadius: "1.2rem",
              boxShadow: "0 2px 16px #0003",
              padding: "1rem 1.2rem",
              zIndex: 3,
              color: m.color,
              fontWeight: 600,
              textAlign: "left"
            }}
          >
            <div style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: m.color }}>{m.title}</div>
            <ul style={{ color: "#fff", fontSize: "0.98rem", margin: 0, paddingLeft: "1.2rem" }}>
              {m.desc.map((d, j) => (
                <li key={j} style={{ marginBottom: "0.3rem", lineHeight: 1.4 }}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
