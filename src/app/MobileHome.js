
"use client";
import { WalletConnectUI } from "./WalletProvider";

import AnimatedDescription from "./AnimatedDescription";
import GalleryCarousel from "./GalleryCarousel";
import UtilitySection from "./UtilitySection";
import NFTStaking from "./NFTStaking";
import RoadmapFlow from "./RoadmapFlow";
import WhitelistForm from "./WhitelistForm";
import { useState } from "react";

export default function MobileHome() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{
      width: "100%",
      minHeight: "100dvh",
      overflowX: "hidden",
      position: "relative",
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1.2rem 0' }}>
        <WalletConnectUI />
      </div>
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

        <div style={{display:'flex',justifyContent:'center',gap:'1.2rem',margin:'1.2rem 0'}}>
          <a href="https://x.com/Nexora_base" target="_blank" rel="noopener noreferrer"><img src="/images/social_x.png" alt="X" style={{width:32,height:32,opacity:0.7}} /></a>
          <a href="https://opensea.io/collection/nexora-base/overview" target="_blank" rel="noopener noreferrer"><img src="/images/social_opensea.png" alt="OpenSea" style={{width:32,height:32,opacity:0.7}} /></a>
          <a href="https://basescan.org/address/0x91afb23f7e3567baac193e342be9668ea7feaf9e" target="_blank" rel="noopener noreferrer"><img src="/images/social_base.png" alt="Base" style={{width:32,height:32,opacity:0.7}} /></a>
        </div>

        <div style={nftWrap}>
          <img src="/images/nft_102.png" style={nftImg} />
          <span style={badge}>1,666 Items</span>
        </div>

        <div style={{margin:'1rem 0',fontSize:'1.1rem',fontWeight:400,lineHeight:1.6,color:'#222'}}>
          Welcome to the <b style={{color:'#7b2ff2',fontWeight:700}}>NEXORA revolution</b>. We’re building a brand that blends pixel art, web3, and the magic of digital collectibles.<br /><br />
          Each of the <b style={{color:'#222',fontWeight:700}}>1666 NEXORAs</b> is algorithmically generated from over <span style={{color:'#7b2ff2',fontWeight:700,textDecoration:'underline'}}>100+ hand-drawn traits</span>. From wizards to pixel gems, no two are alike.<br /><br />
          Living on the Base blockchain, your NEXORA is your membership card to an exclusive community of creators, collectors, and digital pioneers.
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem',margin:'1.2rem 0'}}>
          <img src="/images/nft_11.png" alt="NEXORA Avatar 1" style={{width:32,height:32,borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_16.png" alt="NEXORA Avatar 2" style={{width:32,height:32,borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_54.png" alt="NEXORA Avatar 3" style={{width:32,height:32,borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_3.png" alt="NEXORA Avatar 4" style={{width:32,height:32,borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_8.png" alt="NEXORA Avatar 5" style={{width:32,height:32,borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <span style={{marginLeft:'0.7rem',fontWeight:700,fontSize:'1rem',color:'#222'}}>Join Us</span>
        </div>
      </section>

      <GalleryCarousel />
      <UtilitySection />
      <NFTStaking />
      <RoadmapFlow />

      {/* Footer / Builder Credit */}
      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', margin: '2.5rem 0 1.5rem 0', fontSize: '1.1rem', color: '#888' }}>
        <span>Built by</span>
        <a href="https://x.com/RamiIlyan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#7b2ff2', fontWeight: 700 }}>
          <img src="/images/rumiilyan.jpeg" alt="Rumi Ilyan" style={{ width: 40, height: 40, borderRadius: '1rem', marginRight: 8, objectFit: 'cover' }} />
          Rumi Ilyan
        </a>
        <span style={{ color: '#bbb', fontWeight: 400, marginLeft: 8 }}>| © 2026</span>
      </footer>

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
