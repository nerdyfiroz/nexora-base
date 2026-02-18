"use client";

import React, { useState, useEffect } from "react";
// Removed virtualization for compatibility and navigation

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

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + nftImages.length) % nftImages.length);
  const next = () => setIndex((i) => (i + 1) % nftImages.length);
  const getCard = (offset) => nftImages[(index + offset + nftImages.length) % nftImages.length];

  return (
    <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.06)', zIndex: 1 }}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Gallery</h2>
        <div style={carouselStyle}>
          {(isMobile ? [0] : [-2, -1, 0, 1, 2]).map((offset, i) => {
            const img = getCard(offset);
            const center = offset === 0;
            return (
              <div
                key={`${index}-${i}`}
                style={{
                  ...cardStyle,
                  width: isMobile ? 220 : 260,
                  height: isMobile ? 220 : 260,
                  transform: !isMobile ? `scale(${center ? 1.08 : 0.9}) rotate(${offset * 5}deg)` : "none",
                  opacity: isMobile ? 1 : center ? 1 : 0.35,
                  filter: isMobile ? "none" : center ? "none" : "blur(1px)",
                  zIndex: isMobile ? 1 : 10 - Math.abs(offset),
                  border: center ? "5px solid #ff595e" : "none",
                }}
              >
                <img src={img} alt="NFT" loading="lazy" style={{...imgStyle, maxWidth: '100%', maxHeight: '100%'}} />
              </div>
            );
          })}
        </div>
        <div style={navStyle}>
          <button onClick={prev} style={btnSecondary}>Prev</button>
          <button onClick={next} style={btnPrimary}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default GalleryCarousel;

// ---------------- STYLES ----------------
const sectionStyle = {
  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 1rem",
    // overflowX removed to allow scrolling and background
  };

  const containerStyle = {
    background: "transparent",
    border: "3px solid #2ec4b6",
    borderRadius: "2.2rem",
    padding: "2.5rem 1.5rem",
    width: "100%",
    maxWidth: 1200,
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.4rem",
    color: "#2ec4b6",
    marginBottom: "2rem",
    fontWeight: 800,
  };

  const carouselStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "nowrap",
  };

  const cardStyle = {
    width: "clamp(240px, 60vw, 560px)",
    aspectRatio: "1 / 1",
    borderRadius: "2rem",
    background: "#fff",
    overflow: "hidden",
    transition: "all 0.35s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1.8rem",
    marginTop: "2rem",
  };

  const btnPrimary = {
    padding: "0.8rem 2.3rem",
    borderRadius: "2rem",
    background: "#2ec4b6",
    color: "#fff",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  };

  const btnSecondary = {
    ...btnPrimary,
    background: "#fff",
    color: "#2ec4b6",
    border: "2px solid #2ec4b6",
  };
