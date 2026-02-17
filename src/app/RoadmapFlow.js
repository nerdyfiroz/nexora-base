"use client";
import React, { useRef, useEffect, useState } from "react";

const ROADMAP = [
  {
    flag: "🚩",
    title: "Reveal & Launch",
    desc: [
      "Collection goes live on 20th February",
      "Base chain",
      "Website Launch",
      "Art Reveal"
    ],
    color: "#ff3c3c"
  },
  {
    flag: "🚩",
    title: "Mint Phases",
    desc: [
      "GDT (Freemint)",
      "Whitelist (0.1$)",
      "Public (0.3$) on OpenSea"
    ],
    color: "#ff9900"
  },
  {
    flag: "🚩",
    title: "Community",
    desc: [
      "Grow the NEXORA community",
      "Events & Collaborations"
    ],
    color: "#22c55e"
  },
  {
    flag: "🚩",
    title: "Next Steps",
    desc: [
      "Utility, airdrops",
      "More digital collectible experiences"
    ],
    color: "#6366f1"
  }
];

export default function RoadmapFlow() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      // Show when scrolled down, hide when scrolling up
      if (rect.top < window.innerHeight * 0.5 && scrollY > lastScroll.current) {
        setVisible(true);
      } else if (scrollY < lastScroll.current) {
        setVisible(false);
      }
      lastScroll.current = scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className={`nexora-roadmap-flow${visible ? " visible" : ""}`}
      style={{ minHeight: 500, position: "relative", margin: "4rem 0 2rem 0" }}
    >
      <h3 className="nexora-roadmap-title">Roadmap</h3>
      <div className="nexora-roadmap-flow-steps">
        {ROADMAP.map((step, i) => (
          <div className="nexora-roadmap-step" key={i} style={{ zIndex: 2 }}>
            <div className="nexora-roadmap-flag" style={{ borderColor: step.color }}>
              <span>{step.flag}</span>
            </div>
            <div className="nexora-roadmap-card" style={{ borderColor: step.color }}>
              <div className="nexora-roadmap-step-title" style={{ color: step.color }}>{step.title}</div>
              <ul>
                {step.desc.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* SVG lines connecting steps */}
        <svg className="nexora-roadmap-svg" width="100%" height="500" style={{ position: "absolute", left: 0, top: 0, zIndex: 1, pointerEvents: "none" }}>
          <path d="M 110 70 Q 300 40 320 140" stroke="#ff3c3c" strokeWidth="4" fill="none" />
          <path d="M 320 180 Q 100 250 110 270" stroke="#22c55e" strokeWidth="4" fill="none" />
          <path d="M 110 310 Q 300 400 320 340" stroke="#6366f1" strokeWidth="4" fill="none" />
        </svg>
      </div>
    </section>
  );
}
