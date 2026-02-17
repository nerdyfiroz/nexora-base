"use client";
import dynamic from "next/dynamic";
import { useIsMobile } from "./useIsMobile";
import GalleryCarousel from "./GalleryCarousel";
import AnimatedDescription from "./AnimatedDescription";
import RoadmapFlow from "./RoadmapFlow";
import NexoraMarquee from "./NexoraMarquee";

const MobileHome = dynamic(() => import("./MobileHome"), { ssr: false });

export default function ResponsiveHome() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileHome />;
  }
  // Desktop UI
  return (
    <div className="nexora-main" style={{ minHeight: '100vh', padding: '0 2rem', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ width: '100%', textAlign: 'center', margin: '2.5rem 0 1.5rem 0' }}>
        <span className="nexora-title" style={{ fontFamily: 'var(--font-pacifico), cursive', fontWeight: 400, fontSize: '3.5rem', letterSpacing: '-0.04em', textShadow: '0 2px 24px #a78bfa33' }}>NEXORA</span>
        <div style={{ marginTop: '1.2rem' }}>
          <AnimatedDescription />
        </div>
      </header>
      <section style={{ width: '100%', margin: '0 0 2.5rem 0' }}>
        <NexoraMarquee />
      </section>
      <section style={{ width: '100%', margin: '0 0 2.5rem 0' }}>
        <GalleryCarousel />
      </section>
      <section style={{ width: '100%', margin: '0 0 2.5rem 0' }}>
        <RoadmapFlow />
      </section>
      <footer className="nexora-footer" style={{ textAlign: 'center', margin: '2.5rem 0 1rem 0', fontSize: '1rem', color: '#a1a1aa' }}>
        <img src="/images/rumiilyan.jpeg" alt="Rumi Ilyan" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #0002', display: 'block', margin: '0 auto 0.5rem auto' }} />
        Website built by <a href="https://x.com/RamiIlyan" target="_blank" rel="noopener noreferrer" style={{ color: '#007aff', fontWeight: 700, textDecoration: 'none' }}>Rumi Ilyan</a>
      </footer>
    </div>
  );
}
