"use client";
import React, { useEffect, useRef, useState } from "react";

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


  // Vertical roadmap config
  const svgWidth = 180;
  const svgHeight = 700;
  const topPad = 60;
  const bottomPad = 60;
  const lineX = svgWidth / 2;
  const step = (svgHeight - topPad - bottomPad) / (milestones.length - 1);
  const pinPositions = Array.from({ length: milestones.length }, (_, i) => ({
    x: lineX,
    y: topPad + i * step
  }));




  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(Array(milestones.length).fill(false));
  const pinRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const updated = [...prev];
          entries.forEach((entry) => {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (entry.isIntersecting) {
              updated[idx] = true;
            } else {
              updated[idx] = false;
            }
          });
          return updated;
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );
    pinRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

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
          {/* Vertical line path */}
          <svg width={svgWidth} height={svgHeight} style={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}>
            <line x1={lineX} y1={topPad} x2={lineX} y2={svgHeight - bottomPad} stroke="#444" strokeWidth={18} strokeLinecap="round" />
            <line x1={lineX} y1={topPad} x2={lineX} y2={svgHeight - bottomPad} stroke="#fff" strokeWidth={6} strokeDasharray="18 18" strokeLinecap="round" />
            {/* Arrowhead */}
            <polygon points={`${lineX - 18},${svgHeight - bottomPad - 10} ${lineX},${svgHeight - bottomPad + 30} ${lineX + 18},${svgHeight - bottomPad - 10}`} fill="#444" />
          </svg>
          {/* Milestone pins */}
          {milestones.map((m, i) => {
            const pin = pinPositions[i];
            return (
              <div
                key={i}
                ref={el => pinRefs.current[i] = el}
                data-index={i}
                className={`roadmap-milestone-pin${visible[i] ? ' visible' : ''}`}
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
                  transition: "transform 0.5s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.2s, opacity 0.5s",
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
        <style jsx>{`
          .roadmap-milestone-pin {
            opacity: 0;
            transform: translateY(40px) scale(1);
            pointer-events: none;
          }
          .roadmap-milestone-pin.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
            transition: transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.7s;
          }
        `}</style>
      </div>
    </section>
  );

export default RoadmapFlow;