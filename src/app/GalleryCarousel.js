"use client";

import { useState } from "react";

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

  const prev = () =>
    setIndex((i) => (i - 1 + nftImages.length) % nftImages.length);

  const next = () =>
    setIndex((i) => (i + 1) % nftImages.length);

  const getCard = (offset) =>
    nftImages[(index + offset + nftImages.length) % nftImages.length];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Gallery</h2>

        <div style={carouselStyle}>
          {[-2, -1, 0, 1, 2].map((offset, i) => {
            const img = getCard(offset);
            const center = offset === 0;

            return (
              <div
                key={`${index}-${i}`}
                style={{
                  ...cardStyle,
                  transform: `scale(${center ? 1.15 : 0.9}) rotate(${offset * 6}deg) translateY(${center ? 0 : 18}px)`,
                  opacity: center ? 1 : 0.35,
                  filter: center ? "none" : "blur(1.2px)",
                  zIndex: 10 - Math.abs(offset),
                  border: center ? "6px solid #ff595e" : "none",
                  boxShadow: center
                    ? "0 0 0 5px #ff595e, 0 12px 30px rgba(0,0,0,0.25)"
                    : "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={img}
                  alt="NFT"
                  loading="lazy"
                  style={imgStyle}
                />
              </div>
            );
          })}
        </div>

        <div style={navStyle}>
          <button onClick={prev} style={btnSecondary}>
            Prev
          </button>
          <button onClick={next} style={btnPrimary}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- styles ---------- */

const sectionStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
  padding: "3rem 1rem",
};

const containerStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "3px solid #2ec4b6",
  borderRadius: "2.5rem",
  boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
  padding: "3rem 2rem",
  maxWidth: 1200, // allow much larger cards
  width: "100%",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "2.6rem",
  fontWeight: 800,
  color: "#2ec4b6",
  marginBottom: "2.2rem",
  letterSpacing: "0.04em",
};

const carouselStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.2rem",
  minHeight: 700, // allow for much larger cards
  overflow: "visible",
  marginBottom: "2.4rem",
};

const cardStyle = {
  width: 700, // Even bigger size
  aspectRatio: "1 / 1", // ✅ Perfect Square
  borderRadius: "2.2rem",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.35s ease",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  aspectRatio: "1 / 1", // Ensures perfect square
  objectFit: "cover", // keeps image proportional
  maxWidth: 700,
  maxHeight: 700,
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
};

const btnPrimary = {
  fontSize: "1.2rem",
  padding: "0.8rem 2.4rem",
  borderRadius: "2rem",
  background: "#2ec4b6",
  color: "#fff",
  border: "2.5px solid #2ec4b6",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
};

const btnSecondary = {
  ...btnPrimary,
  background: "#fff",
  color: "#2ec4b6",
};
