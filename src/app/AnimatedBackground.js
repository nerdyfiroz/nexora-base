"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    canvas.width = width;
    canvas.height = height;

    // Dots and lines config
    const dots = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      r: 2.5 + Math.random() * 1.5,
    }));

    // Helper to get animated gradient color
    function getGradientColor(t) {
      // t: 0-1
      const g1 = [123, 47, 242]; // #7b2ff2
      const g2 = [0, 212, 255];  // #00d4ff
      const g3 = [255, 122, 217]; // #ff7ad9
      // Animate between g1 -> g2 -> g3 -> g1
      let c;
      if (t < 0.5) {
        // g1 to g2
        const f = t * 2;
        c = g1.map((v, i) => Math.round(v + (g2[i] - v) * f));
      } else {
        // g2 to g3
        const f = (t - 0.5) * 2;
        c = g2.map((v, i) => Math.round(v + (g3[i] - v) * f));
      }
      return `rgb(${c[0]},${c[1]},${c[2]})`;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();
      const t = ((now / 3000) % 1);
      // Draw lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            // Animated gradient color
            ctx.save();
            ctx.globalAlpha = 0.18 + (120 - dist) / 600;
            ctx.strokeStyle = getGradientColor((t + i * 0.03 + j * 0.02) % 1);
            ctx.lineWidth = 1.5;
            ctx.shadowColor = ctx.strokeStyle;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.restore();
          }
        }
      }
      // Draw dots
      for (const [idx, dot] of dots.entries()) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
        ctx.fillStyle = getGradientColor((t + idx * 0.05) % 1);
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 16;
        ctx.globalAlpha = 0.85;
        ctx.filter = 'blur(0.5px)';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.filter = 'none';
        ctx.restore();
      }
    }

    function animate() {
      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="animated-bg-canvas" />;
}
