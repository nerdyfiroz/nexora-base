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
  "/images/nft_5.png"
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + nftImages.length) % nftImages.length);
  const next = () => setIndex((i) => (i + 1) % nftImages.length);

  // For 5-card effect
  const getCard = (offset) => {
    let i = (index + offset + nftImages.length) % nftImages.length;
    return nftImages[i];
  };

  return (
    <div className="nexora-gallery-section">
      <h2 className="nexora-gallery-title">Gallery</h2>
      <div className="nexora-gallery-carousel">
        {[ -2, -1, 0, 1, 2 ].map((offset) => {
          const img = getCard(offset);
          const isCenter = offset === 0;
          return (
            <img
              key={img}
              src={img}
              alt="NFT"
              className={`nexora-gallery-card${isCenter ? " nexora-gallery-card-center" : ""}`}
              style={{
                zIndex: 10 - Math.abs(offset),
                opacity: isCenter ? 1 : 0.45,
                filter: isCenter ? "none" : "blur(0.5px)",
                transform: `scale(${isCenter ? 1 : 0.85}) rotate(${offset * 8}deg) translateY(${isCenter ? 0 : 18}px)`
              }}
            />
          );
        })}
      </div>
      <div className="nexora-gallery-nav">
        <button onClick={prev} className="nexora-btn nexora-btn-secondary">Prev</button>
        <button onClick={next} className="nexora-btn nexora-btn-primary">Next</button>
      </div>
    </div>
  );
}
