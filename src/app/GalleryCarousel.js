"use client";
import { useState } from "react";


export default function GalleryCarousel() {
  return (
    <div className="nexora-gallery-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '3rem 0' }}>
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        border: '3px solid #2ec4b6',
        borderRadius: '2.5rem',
        boxShadow: '0 8px 32px #0004',
        padding: '3rem 2.5rem 2.5rem 2.5rem',
        maxWidth: 700,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 className="nexora-gallery-title" style={{ fontSize: '2.8rem', fontWeight: 800, color: '#2ec4b6', marginBottom: '2.5rem', letterSpacing: '0.03em' }}>Gallery</h2>
        <div className="nexora-gallery-carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', position: 'relative', minHeight: '380px', marginBottom: '2.5rem' }}>
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
                  transform: `scale(${isCenter ? 1.18 : 0.92}) rotate(${offset * 8}deg) translateY(${isCenter ? 0 : 24}px)`,
                  boxShadow: isCenter ? '0 0 0 6px #ff595e, 0 2px 24px #0002' : '0 2px 16px #0001',
                  border: isCenter ? '6px solid #ff595e' : 'none',
                  transition: 'all 0.3s',
                  width: '340px',
                  height: '340px',
                  borderRadius: '1.8rem',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={img}
                  alt="NFT"
                  style={{
                    width: '92%',
                    height: '92%',
                    borderRadius: '1.2rem',
                    objectFit: 'cover',
                    background: '#fff',
                    boxShadow: isCenter ? '0 0 0 3px #ff595e' : '0 2px 16px #0001',
                    transition: 'box-shadow 0.3s',
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="nexora-gallery-nav" style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button onClick={prev} className="nexora-btn nexora-btn-secondary" style={{ fontSize: '1.35rem', padding: '0.9rem 2.8rem', borderRadius: '2.2rem', background: '#fff', color: '#2ec4b6', border: '2.5px solid #2ec4b6', fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 12px #0001', transition: 'background 0.2s, color 0.2s' }}>Prev</button>
          <button onClick={next} className="nexora-btn nexora-btn-primary" style={{ fontSize: '1.35rem', padding: '0.9rem 2.8rem', borderRadius: '2.2rem', background: '#2ec4b6', color: '#fff', border: '2.5px solid #2ec4b6', fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 12px #0001', transition: 'background 0.2s, color 0.2s' }}>Next</button>
        </div>
      </div>
    </div>
  );
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
