"use client";
import { useEffect, useState } from "react";

const sentences = [
  "🧙‍♂️ Mixing Magic with the Metaverse.",
  "💎 Pixel Art Enthusiast | Web3 Builder.",
  "🚀 Crafting the next generation of digital collectibles on Base.",
  "⚡ Follow us."
];

export default function AnimatedDescription() {
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
        className={`animated-sentence transition-opacity duration-400 ease-in-out text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-100 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {sentences[index]}
      </span>
    </div>
  );
}
