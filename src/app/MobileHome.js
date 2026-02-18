"use client";
import AnimatedDescription from "./AnimatedDescription";
import GalleryCarousel from "./GalleryCarousel";
import RoadmapFlow from "./RoadmapFlow";

export default function MobileHome() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fa', padding: '0 0.5rem' }}>
      <header style={{ width: '100%', textAlign: 'center', padding: '1.2rem 0 0.5rem 0' }}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'1.2rem',marginBottom:'0.7rem'}}>
          <img src="/images/nft_226.png" alt="Header NFT 1" style={{width:'48px',height:'48px',borderRadius:'0.7rem',boxShadow:'0 2px 8px #7b2ff2',background:'#fff'}} />
          <span style={{ fontFamily: 'Space Grotesk, Arial', fontWeight: 900, fontSize: '2.1rem', letterSpacing: '0.04em', background: 'linear-gradient(90deg,#6366f1 0%,#a78bfa 50%,#f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>NEXORA</span>
          <img src="/images/nft_16.png" alt="Header NFT 2" style={{width:'48px',height:'48px',borderRadius:'0.7rem',boxShadow:'0 2px 8px #7b2ff2',background:'#fff'}} />
        </div>
        <div style={{marginBottom:'0.3rem'}}>
          <span style={{fontSize:'1.2rem',fontWeight:600,letterSpacing:'0.01em',background:'linear-gradient(90deg,#38ef7d 0%,#1194f6 40%,#7b2ff2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',color:'transparent',textShadow:'0 2px 8px #fff8'}}>Magic Meets Metadata ⚡️</span>
        </div>
        <div style={{margin:'0 auto',maxWidth:'340px',textAlign:'center',fontSize:'1.05rem',fontWeight:500,color:'#333',lineHeight:1.6,background:'#fff',borderRadius:'0.7rem',padding:'0.5rem 1rem',boxShadow:'0 2px 8px #0001',marginBottom:'0.7rem'}}>Discover the next generation of pixel art collectibles, powered by Base and web3. Join the revolution!</div>
      </header>
      <section style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 16px #0001', padding: '1.2rem 0.7rem', margin: '0 0 1.2rem 0', textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#7b2ff2' }}>
          <AnimatedDescription />
        </div>
        <a href="https://opensea.io/collection/nexora-base" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: 'linear-gradient(90deg,#38ef7d 0%,#1194f6 40%,#7b2ff2 100%)', color: '#fff', fontWeight: 700, borderRadius: '1.2rem', padding: '1rem', margin: '0.5rem 0', fontSize: '1.1rem', textDecoration: 'none', letterSpacing:'0.01em' }}>Explore Collection</a>
        <a href="#" style={{ display: 'block', background: '#18181b', color: '#fff', fontWeight: 700, borderRadius: '1.2rem', padding: '1rem', margin: '0.5rem 0', fontSize: '1.1rem', textDecoration: 'none', letterSpacing:'0.01em' }}>Apply for Allowlist</a>
        <div style={{display:'flex',justifyContent:'center',gap:'1.5rem',marginTop:'0.7rem'}}>
          <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
            <img src="/images/social_discord.png" alt="Discord" style={{width:'32px',height:'32px',opacity:0.7}} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
            <img src="/images/social_x.png" alt="X" style={{width:'32px',height:'32px',opacity:0.7}} />
          </a>
          <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
            <img src="/images/social_opensea.png" alt="OpenSea" style={{width:'32px',height:'32px',opacity:0.7}} />
          </a>
        </div>
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
