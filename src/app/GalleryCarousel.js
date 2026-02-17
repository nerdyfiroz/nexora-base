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

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + nftImages.length) % nftImages.length);
  const next = () => setIndex((i) => (i + 1) % nftImages.length);

  // For 5-card effect
  const getCard = (offset) => {
    let i = (index + offset + nftImages.length) % nftImages.length;
    return nftImages[i];
  };

  return (
    <div className="nexora-gallery-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h2 className="nexora-gallery-title" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#2ec4b6', marginBottom: '2rem' }}>Gallery</h2>
      <div className="nexora-gallery-carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', position: 'relative', minHeight: '320px', marginBottom: '2rem' }}>
        {[ -2, -1, 0, 1, 2 ].map((offset) => {
          const img = getCard(offset);
          const isCenter = offset === 0;
          return (
            <div
              key={img}
              className={`nexora-gallery-card${isCenter ? ' nexora-gallery-card-center' : ''}`}
              style={{
                zIndex: 10 - Math.abs(offset),
                opacity: isCenter ? 1 : 0.35,
                filter: isCenter ? 'none' : 'blur(1.5px)',
                transform: `scale(${isCenter ? 1.1 : 0.85}) rotate(${offset * 8}deg) translateY(${isCenter ? 0 : 18}px)`,
                boxShadow: isCenter ? '0 0 0 4px #ff595e, 0 2px 16px #0002' : '0 2px 16px #0001',
                border: isCenter ? '4px solid #ff595e' : 'none',
                transition: 'all 0.3s',
                width: '240px',
                height: '240px',
                borderRadius: '1.2rem',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                margin: '0',
              }}
            >
              <img
                src={img}
                alt="NFT"
                style={{
                  width: '90%',
                  height: '90%',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  background: '#fff',
                  boxShadow: isCenter ? '0 0 0 2px #ff595e' : '0 2px 16px #0001',
                  transition: 'box-shadow 0.3s',
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="nexora-gallery-nav" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
        <button onClick={prev} className="nexora-btn nexora-btn-secondary" style={{ fontSize: '1.2rem', padding: '0.7rem 2.2rem', borderRadius: '2rem', background: '#fff', color: '#2ec4b6', border: '2px solid #2ec4b6', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #0001', transition: 'background 0.2s, color 0.2s' }}>Prev</button>
        <button onClick={next} className="nexora-btn nexora-btn-primary" style={{ fontSize: '1.2rem', padding: '0.7rem 2.2rem', borderRadius: '2rem', background: '#2ec4b6', color: '#fff', border: '2px solid #2ec4b6', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #0001', transition: 'background 0.2s, color 0.2s' }}>Next</button>
      </div>
    </div>
  );
}
