"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import "./nexora.css";
import { useEffect, useRef } from "react";

function AnimatedBackground() {
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

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(44, 62, 80, ${0.13 + (120 - dist) / 600})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      // Draw dots
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#bdbdbd";
        ctx.shadowColor = "#e0e0e0";
        ctx.shadowBlur = 2;
        ctx.fill();
        ctx.shadowBlur = 0;
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
