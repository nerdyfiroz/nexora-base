"use client";
import React from "react";

const milestones = [
    {
      icon: "🚀",
      title: "Reveal & Mint Day!",
      desc: "The official mint day is 20th February! Collection goes live on Base chain. Website & Art Reveal. First 100 minters get exclusive OG role.",
      color: "#e74c3c"
    },
    {
      icon: "🌱",
      title: "Ecosystem Expansion",
      desc: "Launch of Nexora marketplace. Integration with partner dApps. Onboarding new artists & creators. Expanding utility for holders.",
      color: "#27ae60"
    },
    {
      icon: "⚙️",
      title: "Utility & Surprises",
      desc: "Utility unlocks for holders. Airdrops & secret rewards. Nexora digital collectible experiences.",
      color: "#2980b9"
    },
    {
      icon: "🎁",
      title: "Community & Growth",
      desc: "Grow the NEXORA community worldwide. Epic events, AMAs & collaborations. Holder-only Discord channels.",
      color: "#f39c12"
    },
    {
      icon: "🌐",
      title: "Future Vision",
      desc: "Metaverse integrations. Physical merch drops. IRL meetups & global events. Continuous updates & new partnerships.",
      color: "#8e44ad"
    }
  ];


  const svgWidth = 900;
  const svgHeight = 180;
  const leftPad = 60;
  const rightPad = 60;
  const lineY = svgHeight / 2;
  const step = (svgWidth - leftPad - rightPad) / (milestones.length - 1);
  const pinPositions = Array.from({ length: milestones.length }, (_, i) => ({
    x: leftPad + i * step,
    y: lineY
  }));


import { useState } from "react";

function RoadmapFlow() {
  const [active, setActive] = useState(null);
  return (
    <section style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f7f7f7",
      padding: "3rem 0"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "2.5rem",
        boxShadow: "0 8px 32px #0002",
        padding: "2.5rem 2rem 2rem 2rem",
        maxWidth: svgWidth,
        width: "100%",
        position: "relative"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2.6rem",
          fontWeight: 900,
          marginBottom: "2.5rem",
          color: "#222",
          letterSpacing: "0.04em"
        }}>Roadmap</h2>
        <div style={{ position: "relative", width: svgWidth, height: svgHeight, margin: "0 auto" }}>
          {/* Straight line path */}
          <svg width={svgWidth} height={svgHeight} style={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}>
            <line x1={leftPad} y1={lineY} x2={svgWidth - rightPad} y2={lineY} stroke="#444" strokeWidth={18} strokeLinecap="round" />
            <line x1={leftPad} y1={lineY} x2={svgWidth - rightPad} y2={lineY} stroke="#fff" strokeWidth={6} strokeDasharray="18 18" strokeLinecap="round" />
            {/* Arrowhead */}
            <polygon points={`${svgWidth - rightPad - 10},${lineY - 18} ${svgWidth - rightPad + 30},${lineY} ${svgWidth - rightPad - 10},${lineY + 18}`} fill="#444" />
          </svg>
          {/* Milestone pins */}
          {milestones.map((m, i) => {
            const pin = pinPositions[i];
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: pin.x - 32,
                  top: pin.y - 32,
                  width: 64,
                  height: 64,
                  background: "#fff",
                  borderRadius: "50%",
                  boxShadow: `0 4px 24px ${m.color}33, 0 2px 8px #0001`,
                  border: `4px solid ${m.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: 700,
                  zIndex: 3,
                  cursor: "pointer",
                  transition: "transform 0.2s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.2s",
                  transform: active === i ? "scale(1.15)" : "scale(1)"
                }}
                onClick={() => setActive(i)}
                title={m.title}
              >
                {m.icon}
              </div>
            );
          })}
          {/* Animated milestone details */}
          {active !== null && (
            <div
              style={{
                position: "absolute",
                left: pinPositions[active].x - 160,
                top: pinPositions[active].y - 140,
                width: 320,
                minHeight: 120,
                background: "#fff",
                borderRadius: "1.2rem",
                boxShadow: `0 8px 32px ${milestones[active].color}33, 0 2px 8px #0001`,
                border: `3px solid ${milestones[active].color}`,
                zIndex: 10,
                padding: "1.2rem 1.5rem 1.2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                animation: "fadeInUp 0.4s cubic-bezier(.68,-0.55,.27,1.55)",
                color: milestones[active].color
              }}
              onClick={() => setActive(null)}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>{milestones[active].icon}</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 8, color: milestones[active].color }}>{milestones[active].title}</div>
              <div style={{ color: "#444", fontWeight: 500, fontSize: "1.08rem", textAlign: "center" }}>{milestones[active].desc}</div>
              <div style={{ fontSize: "0.95rem", color: "#888", marginTop: 10 }}>(Click anywhere to close)</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RoadmapFlow;