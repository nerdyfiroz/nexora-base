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
    minHeight: "100dvh",
    width: "100%",
    overflowX: "hidden",
    position: "relative",
  }}
>
      {/* HEADER */}
      <header style={wrap}>
        <div style={row}>
          <img src="/images/nft_226.png" style={icon} />
          <span style={logo}>NEXORA</span>
          <img src="/images/nft_16.png" style={icon} />
        </div>

        <div style={desc}>
          Discover the next generation of pixel art collectibles powered by Base
          and web3.
        </div>
      </header>

      <section style={card}>
        <AnimatedDescription />
      </section>

      <h2 style={title}>The 8-Bit Revolution</h2>

      <section style={card}>
        <a
          href="https://opensea.io/collection/nexora-base"
          target="_blank"
          style={btnPrimary}
        >
          Explore Collection
        </a>

        <button onClick={() => setShowModal(true)} style={btnDark}>
          Check Whitelist Status
        </button>

        <div style={nftWrap}>
          <img src="/images/nft_102.png" style={nftImg} />
          <span style={badge}>3,333 Items</span>
        </div>

        <p style={text}>
          Each NEXORA is algorithmically generated with 100+ traits on the Base
          blockchain.
        </p>
      </section>

      <GalleryCarousel />
      <UtilitySection />
      <StakingSection />
      <RoadmapFlow />

      {showModal && (
        <div style={overlay}>
          <div style={modal}>
            <button onClick={() => setShowModal(false)} style={close}>×</button>
            <WhitelistForm />
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== styles ===== */

const wrap = { textAlign: "center", padding: "1rem" };
const row = { display: "flex", justifyContent: "center", gap: "1rem" };
const icon = { width: 44, borderRadius: "0.7rem", background: "#fff" };
const logo = { fontSize: "2rem", fontWeight: 900 };
const desc = { background: "#fff", marginTop: ".6rem", padding: ".6rem", borderRadius: ".7rem" };

const card = {
  background: "#fff",
  margin: ".6rem",
  padding: "1rem",
  borderRadius: "1rem",
  textAlign: "center",
};

const title = { textAlign: "center", fontWeight: 900, margin: "1rem 0" };

const btnPrimary = {
  display: "block",
  background: "#2ec4b6",
  color: "#fff",
  padding: ".8rem",
  borderRadius: "1rem",
  fontWeight: 700,
  textDecoration: "none",
};

const btnDark = {
  marginTop: ".5rem",
  background: "#222",
  color: "#fff",
  padding: ".8rem",
  borderRadius: "1rem",
  border: "none",
  width: "100%",
};

const nftWrap = {
  marginTop: "1rem",
  background: "#f8f8f6",
  padding: "1rem",
  borderRadius: "1rem",
};

const nftImg = { width: 120, borderRadius: "1rem" };
const badge = { display: "block", marginTop: ".4rem", fontWeight: 700 };
const text = { marginTop: ".8rem", lineHeight: 1.6 };

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "#fff",
  width: "90%",
  maxWidth: 380,
  padding: "1rem",
  borderRadius: "1rem",
};

const close = {
  position: "absolute",
  right: 10,
  top: 10,
  border: "none",
  background: "#fff",
  fontSize: 24,
};
