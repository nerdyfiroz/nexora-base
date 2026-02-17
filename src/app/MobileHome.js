"use client";
import AnimatedDescription from "./AnimatedDescription";
import GalleryCarousel from "./GalleryCarousel";
import RoadmapFlow from "./RoadmapFlow";

export default function MobileHome() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa', padding: '0 0.5rem' }}>
      <header style={{ width: '100%', textAlign: 'center', padding: '1.2rem 0 0.5rem 0' }}>
        <span style={{ fontFamily: 'Space Grotesk, Arial', fontWeight: 900, fontSize: '2.1rem', color: '#18181b', letterSpacing: '0.04em', textShadow: '0 2px 24px #a78bfa33, 2px 2px 0 #000, 4px 4px 0 #fff' }}>NEXORA</span>
      </header>
      <section style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 16px #0001', padding: '1.2rem 0.7rem', margin: '0 0 1.2rem 0', textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#7b2ff2' }}>
          <AnimatedDescription />
        </div>
        <a href="https://opensea.io/collection/nexora-base" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: 'linear-gradient(90deg,#f472b6 0%,#6366f1 100%)', color: '#fff', fontWeight: 700, borderRadius: '1.2rem', padding: '1rem', margin: '0.5rem 0', fontSize: '1.1rem', textDecoration: 'none' }}>Explore Collection</a>
        <a href="#" style={{ display: 'block', background: '#18181b', color: '#fff', fontWeight: 700, borderRadius: '1.2rem', padding: '1rem', margin: '0.5rem 0', fontSize: '1.1rem', textDecoration: 'none' }}>Apply for Allowlist</a>
      </section>
      <section style={{ margin: '0 0 1.2rem 0' }}>
        <GalleryCarousel />
      </section>
      <section style={{ margin: '0 0 1.2rem 0' }}>
        <RoadmapFlow />
      </section>
      <footer style={{ textAlign: 'center', margin: '2rem 0 1rem 0', fontSize: '1rem', color: '#333' }}>
        <img src="/images/rumiilyan.jpeg" alt="Rumi Ilyan" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #0002', display: 'block', margin: '0 auto 0.5rem auto' }} />
        Website built by <a href="https://x.com/RamiIlyan" target="_blank" rel="noopener noreferrer" style={{ color: '#007aff', fontWeight: 700, textDecoration: 'none' }}>Rumi Ilyan</a>
      </footer>
    </div>
  );
}
