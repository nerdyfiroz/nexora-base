import React from "react";
import Image from "next/image";

// Pastel shapes config (fixed for this section)
const pastelShapes = [
  { color: "#b2f0e6", style: { top: 30, left: 20, width: 180, height: 120, rotate: -8 } },
  { color: "#ffe0e0", style: { top: 60, right: 10, width: 170, height: 110, rotate: 12 } },
  { color: "#f7e6ff", style: { bottom: 30, left: 60, width: 160, height: 100, rotate: 5 } },
];

export default function FeaturedNftCard({
  imageSrc,
  alt,
  uniqueCount,
  networkLabel = "Base",
  networkSub = "NETWORK",
}) {
  return (
    <div style={{
      position: "relative",
      width: 340,
      height: 340,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Pastel background shapes */}
      {pastelShapes.map((shape, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...shape.style,
            background: shape.color,
            borderRadius: "2.5rem",
            filter: "blur(2px) opacity(0.45)",
            zIndex: 1,
            pointerEvents: "none",
            transform: `rotate(${shape.style.rotate}deg)`
          }}
        />
      ))}
      {/* Main NFT card */}
      <div
        style={{
          position: "relative",
          width: 300,
          height: 300,
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 32px #0001, 0 1.5px 8px #0001",
          overflow: "hidden",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={260}
          height={260}
          style={{ borderRadius: "1.2rem", objectFit: "cover" }}
        />
        {/* Top right badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px #0001",
            padding: "0.5rem 1.2rem",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "#6c63ff",
            textAlign: "center",
            zIndex: 3,
            minWidth: 80,
          }}
        >
          {uniqueCount.toLocaleString()}<br />
          <span style={{ fontWeight: 400, fontSize: "1rem", color: "#aaa" }}>UNIQUE ITEMS</span>
        </div>
        {/* Bottom left badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "#fff",
            borderRadius: "0.8rem",
            boxShadow: "0 2px 8px #0001",
            padding: "0.4rem 1.1rem",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#ff9900",
            textAlign: "center",
            zIndex: 3,
            minWidth: 60,
          }}
        >
          {networkLabel}<br />
          <span style={{ fontWeight: 400, fontSize: "0.95rem", color: "#aaa" }}>{networkSub}</span>
        </div>
      </div>
    </div>
  );
}
