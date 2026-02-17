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
  // S-curve path coordinates for 5 milestones
  const milestones = [
    { x: 100, y: 80, icon: "🚀", color: "#ff3c3c", title: "Reveal & Mint Day!" },
    { x: 220, y: 180, icon: "⚙️", color: "#ff9900", title: "Ecosystem Expansion" },
    { x: 100, y: 300, icon: "🌐", color: "#22c55e", title: "Community & Growth" },
    { x: 220, y: 400, icon: "🎁", color: "#6366f1", title: "Utility & Surprises" },
    { x: 100, y: 520, icon: "🌟", color: "#a855f7", title: "Future Vision" }
  ];

  return (
    <section
      className="nexora-roadmap-flow"
      style={{ minHeight: 650, position: "relative", margin: "4rem 0 2rem 0", background: "#181a1b", borderRadius: "2rem", boxShadow: "0 8px 32px #0006" }}
    >
      <h3 className="nexora-roadmap-title" style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 700, textAlign: "center", margin: "2rem 0" }}>Roadmap</h3>
      <svg width="340" height="600" viewBox="0 0 340 600" style={{ display: "block", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* S-curve path */}
        <path
          d="M 100 80 Q 220 140 100 300 Q 220 400 100 520"
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
            {/* Title below icon */}
            <text
              x={m.x}
              y={m.y + 60}
              textAnchor="middle"
              fontSize="1.1rem"
              fontWeight="bold"
              fill={m.color}
              style={{ filter: "drop-shadow(0 2px 8px #0008)" }}
            >{m.title}</text>
          </g>
        ))}
      </svg>
    </section>
  );
}
