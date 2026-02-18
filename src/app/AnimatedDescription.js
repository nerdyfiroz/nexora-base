"use client";
import { useEffect, useState } from "react";


const sentences = [
  "🧙‍♂️ Mixing Magic with the Metaverse.",
  "💎 Pixel Art Enthusiast | Web3 Builder.",
  "🚀 Crafting the next generation of digital collectibles on Base.",
  "⚡ Follow us."
];

const gradients = [
  "linear-gradient(90deg,#38ef7d 0%,#1194f6 40%,#7b2ff2 100%)",
  "linear-gradient(90deg,#6366f1 0%,#a78bfa 50%,#f472b6 100%)",
  "linear-gradient(90deg,#f472b6 0%,#6366f1 100%)",
  "linear-gradient(90deg,#7b2ff2 0%,#38ef7d 100%)"
];


export default function AnimatedDescription({ gradientAnimated }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 2200);
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % sentences.length);
      setFade(true);
    }, 2600);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <div className="h-12 flex items-center justify-center">
      <span
        className={`animated-sentence transition-opacity duration-400 ease-in-out text-xl md:text-2xl font-semibold ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={gradientAnimated ? {
          background: gradients[index % gradients.length],
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 2px 12px #fff8',
          transition: 'background 0.5s',
        } : {}}
      >
        {sentences[index]}
      </span>
    </div>
  );
}
