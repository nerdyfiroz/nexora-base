"use client";
import React, { useRef, useEffect, useState } from "react";
import "./marquee.css";

export default function NexoraMarquee() {
  const [speed, setSpeed] = useState(1);
  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      setSpeed(Math.min(6, Math.max(1, 1 + Math.abs(curr - lastScroll) / 10)));
      lastScroll = curr;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{width:'100%',overflow:'hidden',margin:'2.5rem 0 1.5rem 0'}}>
      <div
        className="nexora-marquee nexora-marquee-left nexora-marquee-gradient"
        style={{
          position: 'relative',
          fontSize: '4.5rem',
          animationDuration: `${8 / speed}s`,
          marginBottom: '0.2em',
        }}
      >
        <span className="nexora-marquee-gradient-text">
          A 8BIT REVOLUTION • NEXORA • MAGIC MEETS METADATA⚡️ • APPLY • BASE • JOIN US • 3333 SUPPLY •
        </span>
      </div>
      <div
        className="nexora-marquee nexora-marquee-right nexora-marquee-gradient"
        style={{
          position: 'relative',
          fontSize: '4.5rem',
          animationDuration: `${8 / speed}s`,
        }}
      >
        <span className="nexora-marquee-gradient-text">
          3333 SUPPLY • JOIN US • BASE • APPLY • MAGIC MEETS METADATA⚡️ • NEXORA • A 8BIT REVOLUTION •
        </span>
      </div>
    </div>
  );
}
