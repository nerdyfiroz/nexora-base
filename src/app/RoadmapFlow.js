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
  const svgWidth = 320;
  const svgHeight = 700;
  const topPad = 60;
  const bottomPad = 60;
  const leftX = 60;
  const rightX = svgWidth - 60;
  const centerX = svgWidth / 2;
  const step = (svgHeight - topPad - bottomPad) / (milestones.length - 1);
  // Alternate left, right, center, right, left, ...
  const pinPositions = Array.from({ length: milestones.length }, (_, i) => {
    let x;
    if (i % 2 === 0) x = leftX;
    else x = rightX;
    // Optionally, for more Z, you can do: if (i === 0 || i === milestones.length-1) x = centerX;
    return {
      x,
      y: topPad + i * step
    };
  });



function RoadmapFlow() {
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
      { threshold: 0.3 }
    );
    pinRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="nexora-roadmap">
      <h3>Project Roadmap</h3>
      <ul className="nexora-roadmap-list">
        {milestones.map((m, i) => (
          <li
            key={i}
            className="nexora-roadmap-item"
            ref={el => pinRefs.current[i] = el}
            data-index={i}
            style={{
              boxShadow: visible[i] ? `0 2px 16px ${m.color}33` : undefined,
              border: visible[i] ? `2px solid ${m.color}` : undefined,
              background: visible[i] ? `linear-gradient(90deg, #fff 80%, ${m.color}11)` : undefined,
              transition: 'all 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
              opacity: visible[i] ? 1 : 0.7,
              transform: visible[i] ? 'translateY(0)' : 'translateY(40px)',
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <span
              className="nexora-roadmap-dot"
              style={{ background: m.color, fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36 }}
            >{m.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: '1.18rem', marginBottom: 4, color: m.color }}>{m.title}</div>
              <div style={{ fontSize: '1.05rem', color: '#23272f', marginBottom: 2 }}>{m.desc}</div>
              {i === 0 && (
                <span className="nexora-roadmap-date">20 Feb 2024</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RoadmapFlow;