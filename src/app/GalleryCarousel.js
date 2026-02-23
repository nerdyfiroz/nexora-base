"use client";

import React, { useState, useEffect, useRef } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + nftImages.length) % nftImages.length);
  const next = () => setIndex((i) => (i + 1) % nftImages.length);

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  return (
    <section style={section}>
      <h2 style={title}>Gallery</h2>

      <div
        style={carousel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {[-1, 0, 1].map((offset) => {
          const img =
            nftImages[(index + offset + nftImages.length) % nftImages.length];
          const active = offset === 0;

          return (
            <div
              key={offset}
              style={{
                ...card,
                transform: active
                  ? "scale(1)"
                  : isMobile
                  ? "scale(0.9)"
                  : "scale(0.85)",
                opacity: active ? 1 : 0.4,
              }}
            >
              <img src={img} alt="NFT" style={imgStyle} />
            </div>
          );
        })}
      </div>

      <div style={nav}>
        <button onClick={prev} style={btnSecondary}>
          Prev
        </button>
        <button onClick={next} style={btnPrimary}>
          Next
        </button>
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const section = {
  width: "100%",
  padding: "2.5rem 1rem",
  overflowX: "hidden",   // ✅ only here
  textAlign: "center",
};

const title = {
  fontSize: "2.2rem",
  fontWeight: 800,
  color: "#2ec4b6",
  marginBottom: "2rem",
};

const carousel = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  overflow: "hidden",
};

const card = {
  width: "70vw",
  maxWidth: 260,
  aspectRatio: "1 / 1",
  borderRadius: "2rem",
  background: "#fff",
  transition: "all 0.35s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "1.6rem",
};

const nav = {
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "1.8rem",
};

const btnPrimary = {
  padding: "0.7rem 2.2rem",
  borderRadius: "2rem",
  background: "#2ec4b6",
  color: "#fff",
  border: "none",
  fontWeight: 700,
};

const btnSecondary = {
  ...btnPrimary,
  background: "#fff",
  color: "#2ec4b6",
  border: "2px solid #2ec4b6",
};
