"use client";

import AnimatedDescription from "./AnimatedDescription";
import GalleryCarousel from "./GalleryCarousel";
import UtilitySection from "./UtilitySection";
import StakingSection from "./StakingSection";
import RoadmapFlow from "./RoadmapFlow";
import WhitelistForm from "./WhitelistForm";
import { useState } from "react";

export default function MobileHome() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        background: "#f8f8f6",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "1.2rem 0 0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.7rem",
          }}
        >
          <img src="/images/nft_226.png" style={iconStyle} />
          <span style={titleStyle}>NEXORA</span>
          <img src="/images/nft_16.png" style={iconStyle} />
        </div>

        <div style={{ fontWeight: 600, color: "#555" }}>
          Magic Meets Metadata ⚡️
        </div>

        <div style={descBox}>
          Discover the next generation of pixel art collectibles, powered by
          Base and web3. Join the revolution!
        </div>
      </header>

      {/* ANIMATED TEXT */}
      <section style={card}>
        <div style={{ fontWeight: 700, color: "#7b2ff2" }}>
          <AnimatedDescription />
        </div>
      </section>

      <h2 style={sectionTitle}>The 8-Bit Revolution</h2>

      {/* MAIN CARD */}
      <section style={card}>
        <a
          href="https://opensea.io/collection/nexora-base"
          target="_blank"
          style={primaryBtn}
        >
          Explore Collection
        </a>

        <button onClick={() => setShowModal(true)} style={darkBtn}>
          Check Whitelist Status
        </button>

        <div style={nftBox}>
          <img
            src="/images/nft_102.png"
            style={{ width: 120, borderRadius: "1rem" }}
          />
          <div style={badge}>3,333 ITEMS</div>
        </div>

        <p style={textBlock}>
          Welcome to the <b>NEXORA revolution</b>. Each of the 3,333 NFTs is
          algorithmically generated from 100+ traits on Base blockchain.
        </p>
      </section>

      <GalleryCarousel />
      <UtilitySection />
      <StakingSection />
      <RoadmapFlow />

      {/* MODAL */}
      {showModal && (
        <div style={overlay}>
          <div style={modal}>
            <button onClick={() => setShowModal(false)} style={closeBtn}>
              ×
            </button>
            <WhitelistForm />
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== STYLES ===== */

const iconStyle = {
  width: 44,
  height: 44,
  borderRadius: "0.7rem",
  background: "#fff",
};

const titleStyle = {
  fontWeight: 900,
  fontSize: "2rem",
  letterSpacing: "0.04em",
};

const descBox = {
  margin: "0.7rem auto",
  maxWidth: 340,
  background: "#fff",
  borderRadius: "0.7rem",
  padding: "0.6rem 1rem",
};

const card = {
  background: "#fff",
  borderRadius: "1rem",
  padding: "1rem",
  margin: "0.5rem",
  textAlign: "center",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: 900,
  margin: "1rem 0",
};

const primaryBtn = {
  display: "block",
  background: "#2ec4b6",
  color: "#fff",
  padding: "0.8rem",
  borderRadius: "1rem",
  textDecoration: "none",
  fontWeight: 700,
  marginBottom: "0.6rem",
};

const darkBtn = {
  background: "#222",
  color: "#fff",
  padding: "0.8rem",
  borderRadius: "1rem",
  border: "none",
  fontWeight: 700,
  width: "100%",
};

const nftBox = {
  marginTop: "1rem",
  background: "#f8f8f6",
  padding: "1rem",
  borderRadius: "1rem",
};

const badge = {
  marginTop: "0.5rem",
  fontWeight: 700,
  color: "#7b2ff2",
};

const textBlock = {
  marginTop: "1rem",
  lineHeight: 1.6,
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modal = {
  background: "#fff",
  padding: "1rem",
  borderRadius: "1rem",
  width: "90%",
  maxWidth: 380,
};

const closeBtn = {
  position: "absolute",
  right: 10,
  top: 10,
  border: "none",
  background: "#fff",
  fontSize: 24,
};
