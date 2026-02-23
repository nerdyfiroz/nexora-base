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
    <section>
      {/* Your roadmap rendering logic goes here */}
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
    </section>
  );
}

export default RoadmapFlow;