"use client";

import { useState, useEffect, useRef } from "react";

const nftImages = [
  "/images/nft_226.png",
  "/images/nft_16.png",
  "/images/nft_54.png",
  "/images/nft_3.png",
  "/images/nft_8.png",
  "/images/nft_11.png",
  "/images/nft_102.png",
  "/images/nft_4.png",
  "/images/nft_5.png",
  "/images/nft_300.png",
  "/images/nft_63.png",
  "/images/nft_76.png",
  "/images/nft_9.png",
  "/images/nft_98.png",
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % nftImages.length);
  const prev = () => setIndex((i) => (i - 1 + nftImages.length) % nftImages.length);

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <section style={section}>
      <h2 style={title}>Gallery</h2>

      <div ref={trackRef} style={track}>
        {nftImages.map((img, i) => (
          <div
            key={i}
            style={{
              ...card,
              transform: i === index ? "scale(1.05)" : "scale(0.9)",
              opacity: i === index ? 1 : 0.6,
            }}
            onClick={() => setIndex(i)}
          >
            <img src={img} style={image} />
          </div>
        ))}
      </div>

      <div style={nav}>
        <button onClick={prev} style={btnGhost}>Prev</button>
        <button onClick={next} style={btnPrimary}>Next</button>
      </div>
    </section>
  );
}

/* ===== styles ===== */

const section = {
  padding: "2.5rem 0",
  textAlign: "center",
};

const title = {
  fontSize: "2.2rem",
  fontWeight: 800,
  color: "#2ec4b6",
  marginBottom: "1.8rem",
};

const track = {
  display: "flex",
  gap: "1rem",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  padding: "0 1rem",
  WebkitOverflowScrolling: "touch",
};

const card = {
  minWidth: "75vw",
  maxWidth: "75vw",
  scrollSnapAlign: "center",
  borderRadius: "1.6rem",
  background: "#fff",
  overflow: "hidden",
  transition: "all .35s ease",
  flexShrink: 0,
};

const image = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const nav = {
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "1.5rem",
};

const btnPrimary = {
  padding: ".8rem 2.2rem",
  borderRadius: "2rem",
  background: "#2ec4b6",
  color: "#fff",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const btnGhost = {
  ...btnPrimary,
  background: "#fff",
  color: "#2ec4b6",
  border: "2px solid #2ec4b6",
};
