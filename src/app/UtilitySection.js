import React from 'react';

const utilities = [
  {
    title: "GUARANTEED SLOT",
    desc: "Hold 6 NEXORA NFTs to secure a GTD slot in the ecosystem.",
    stat: "6+  NFTs",
    tag: "VIP ACCESS"
  },
  {
    title: "GAME CHIP MINT",
    desc: "Get early access to minting before the public sale begins.",
    stat: "1,111 TOTAL",
    tag: "ULTRA LIMITED"
  },
  {
    title: "BATTLE ROYALE",
    desc: "Earn rewards by competing and dominating the arena.",
    stat: "P2E ACTIVE",
    tag: "OWN THE ADVANTAGE"
  }
];

export default function UtilitySection() {
  return (
    <section className="nexora-utility-section">
      <div className="nexora-utility-container">
        <div className="nexora-utility-header">
          <h2><span className="nexora-utility-title-main">NEXORA</span> <span className="nexora-utility-title-accent">UTILITY</span></h2>
          <p className="nexora-utility-sub">THE KEY TO THE GAMEVERSE</p>
        </div>
        <div className="nexora-utility-grid">
          {utilities.map((item, idx) => (
            <div className="nexora-utility-card" key={idx}>
              <div className="nexora-utility-tag">[{item.tag}]</div>
              <div className="nexora-utility-card-title">{item.title}</div>
              <div className="nexora-utility-card-desc">{item.desc}</div>
              <div className="nexora-utility-card-stat">{item.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
