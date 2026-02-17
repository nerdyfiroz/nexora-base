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
  "/images/nft_98.png"
];

export default function GalleryCarousel() {
  return (
    <div className="nexora-gallery-section">
      <h2 className="nexora-gallery-title">Gallery</h2>
      <div className="nexora-gallery-carousel" style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center',margin:'2rem 0'}}>
        {nftImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="NFT"
            className="nexora-gallery-card nexora-gallery-glow"
            style={{
              width:'180px',
              height:'180px',
              borderRadius:'1.2rem',
              background:'#fff',
              boxShadow:'0 2px 16px #0001',
              transition:'box-shadow 0.3s, filter 0.3s',
              cursor:'pointer',
              margin:'0',
            }}
          />
        ))}
      </div>
    </div>
  );
}
