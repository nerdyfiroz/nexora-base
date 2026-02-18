"use client";
import dynamic from "next/dynamic";
import { useIsMobile } from "./useIsMobile";
import NexoraMarquee from "./NexoraMarquee";
import AnimatedDescription from "./AnimatedDescription";
import GalleryCarousel from "./GalleryCarousel";
import RoadmapFlow from "./RoadmapFlow";
const MobileHome = dynamic(() => import("./MobileHome"), { ssr: false });
export default function ResponsiveHome() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileHome />;
  }
  // Desktop UI (fully polished)
  return (
    <>
      <main className="nexora-main" style={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--background)' }}>
        {/* Hero Section */}
        <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3.5rem 0 2.5rem 0', background: 'linear-gradient(90deg,#f7e6ff 0%,#e0f7fa 100%)', borderRadius: '0 0 2.5rem 2.5rem', boxShadow: '0 8px 32px #0001', position: 'relative' }}>
        {/* Header Images */}
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'1.2rem',marginBottom:'1.2rem'}}>
          {/* Left NFTs */}
          <img src="/images/nft_3.png" alt="NFT 3" loading="lazy" className="nexora-hero-nft-glow" style={{width:'60px',height:'60px',borderRadius:'50%',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          <img src="/images/nft_4.png" alt="NFT 4" loading="lazy" className="nexora-hero-nft-glow" style={{width:'70px',height:'70px',borderRadius:'1.2rem',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          {/* Center NFTs */}
          <img src="/images/nft_226.png" alt="Header NFT 1" loading="lazy" className="nexora-hero-nft-glow" style={{width:'80px',height:'80px',borderRadius:'1.2rem',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          <img src="/images/nft_11.png" alt="Nexora Logo" loading="lazy" className="nexora-hero-nft-glow" style={{ width: 120, height: 120, borderRadius: '2rem', boxShadow: '0 2px 16px #7b2ff2',background:'#fff',objectFit:'cover' }} />
          <img src="/images/nft_16.png" alt="Header NFT 2" loading="lazy" className="nexora-hero-nft-glow" style={{width:'80px',height:'80px',borderRadius:'1.2rem',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          {/* Right NFTs */}
          <img src="/images/nft_5.png" alt="NFT 5" loading="lazy" className="nexora-hero-nft-glow" style={{width:'70px',height:'70px',borderRadius:'0.7rem',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          <img src="/images/nft_8.png" alt="NFT 8" loading="lazy" className="nexora-hero-nft-glow" style={{width:'60px',height:'60px',borderRadius:'30%',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
        </div>
        <h1 className="nexora-title">NEXORA</h1>
        <div style={{marginBottom:'0.5rem',marginTop:'0.5rem',width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'1.2rem'}}>
          {/* Left NFTs for subtitle */}
          <img src="/images/nft_54.png" alt="NFT 54" loading="lazy" className="nexora-hero-nft-glow" style={{width:'48px',height:'48px',borderRadius:'1.2rem',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          <img src="/images/nft_63.png" alt="NFT 63" loading="lazy" className="nexora-hero-nft-glow" style={{width:'44px',height:'44px',borderRadius:'50%',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          <div style={{margin:'0 0.5rem',flex:1,maxWidth:'520px',display:'flex',justifyContent:'center'}}>
            <AnimatedDescription />
          </div>
          {/* Right NFTs for subtitle */}
          <img src="/images/nft_76.png" alt="NFT 76" loading="lazy" className="nexora-hero-nft-glow" style={{width:'44px',height:'44px',borderRadius:'30%',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
          <img src="/images/nft_98.png" alt="NFT 98" loading="lazy" className="nexora-hero-nft-glow" style={{width:'48px',height:'48px',borderRadius:'1.2rem',boxShadow:'0 2px 12px #7b2ff2',background:'#fff',objectFit:'cover'}} />
        </div>
        <div style={{margin:'0 auto',maxWidth:'520px',textAlign:'center',fontSize:'1.25rem',fontWeight:500,color:'#333',lineHeight:1.6,marginBottom:'1.2rem'}}>Discover the next generation of pixel art collectibles, powered by Base and web3. Join the revolution!</div>
        <div style={{ marginTop: 24, width: '100%' }}>
          <NexoraMarquee />
        </div>
      </section>

      {/* 8-Bit Revolution Section */}
      <div style={{width:'100%',display:'flex',justifyContent:'center',margin:'2.5rem 0 1.5rem 0'}}>
        <h2 className="nexora-marquee-gradient-text" style={{fontSize:'4.2rem',fontWeight:900,letterSpacing:'0.04em',margin:0,padding:0,textTransform:'uppercase',textAlign:'center',background:'linear-gradient(90deg, #38ef7d 0%, #1194f6 40%, #7b2ff2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',color:'transparent',animation:'gradient-move 4s linear infinite alternate',backgroundColor:'#f8f8f6'}}>The 8-Bit Revolution</h2>
      </div>
      <section className="nexora-feature-section" style={{display:'flex',alignItems:'center',gap:'2.5rem',background:'#f7f8fa',borderRadius:'1.5rem',boxShadow:'0 4px 32px #0001',padding:'2.5rem 2rem',margin:'0 auto 2.5rem auto',maxWidth:'1100px'}}>
        {/* Buttons and Socials */}
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1.5rem',margin:'2.5rem 0 1.5rem 0'}}>
          <div style={{display:'flex',gap:'2.2rem',marginBottom:'0.7rem'}}>
            <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" style={{
              display:'inline-block',
              padding:'0.9rem 2.2rem',
              borderRadius:'2.5rem',
              background:'#fff',
              boxShadow:'0 2px 16px #0001',
              fontWeight:700,
              fontSize:'1.25rem',
              letterSpacing:'0.01em',
              color:'#222',
              textDecoration:'none',
              border:'none',
              transition:'box-shadow 0.2s',
              minWidth:'220px',
              textAlign:'center',
              backgroundClip:'padding-box',
              WebkitBackgroundClip:'padding-box',
            }}>
              <span style={{
                background: 'linear-gradient(90deg,#38ef7d 0%,#1194f6 40%,#7b2ff2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '0.01em',
                display: 'inline-block',
              }}>
                Explore Collection
              </span>
            </a>
            <a href="#" style={{
              display:'inline-block',
              padding:'0.9rem 2.2rem',
              borderRadius:'2.5rem',
              background:'#000',
              color:'#fff',
              fontWeight:700,
              fontSize:'1.25rem',
              letterSpacing:'0.01em',
              textDecoration:'none',
              border:'none',
              minWidth:'220px',
              textAlign:'center',
              boxShadow:'0 2px 16px #0001',
              transition:'box-shadow 0.2s',
            }}>
              Apply for Allowlist
            </a>
          </div>
          <div style={{display:'flex',gap:'2.2rem',marginTop:'0.7rem'}}>
            <a href="https://x.com/Nexora_base" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_x.png" alt="X" style={{width:'38px',height:'38px',opacity:0.7}} />
            </a>
            <a href="https://opensea.io/collection/nexora-base/overview" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_opensea.png" alt="OpenSea" style={{width:'38px',height:'38px',opacity:0.7}} />
            </a>
            <a href="https://basescan.org/address/0x91afb23f7e3567baac193e342be9668ea7feaf9e" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_base.png" alt="Base" style={{width:'38px',height:'38px',opacity:0.7}} />
            </a>
          </div>
        </div>
        <div className="nexora-feature-imgbox" style={{flex:'0 0 320px',background:'#f3e9f7',borderRadius:'1.2rem',padding:'1.2rem',boxShadow:'0 2px 16px #0001',display:'flex',flexDirection:'column',alignItems:'center',position:'relative'}}>
          <img src="/images/nft_102.png" alt="NEXORA NFT" loading="lazy" className="nexora-feature-img" style={{width:'220px',height:'220px',borderRadius:'1.2rem',marginBottom:'1.2rem',background:'#fff'}} />
          <div className="nexora-feature-badge" style={{position:'absolute',top:'1.2rem',right:'1.2rem',background:'#fff',borderRadius:'1rem',padding:'0.5rem 1.2rem',boxShadow:'0 2px 8px #0001',fontWeight:700,fontSize:'1.3rem',color:'#7b2ff2',textAlign:'center'}}>3,333<br /><span style={{fontWeight:400,fontSize:'1rem',color:'#aaa'}}>UNIQUE ITEMS</span></div>
          <div className="nexora-feature-network" style={{position:'absolute',bottom:'1.2rem',left:'1.2rem',background:'#fff',borderRadius:'0.8rem',padding:'0.4rem 1.1rem',boxShadow:'0 2px 8px #0001',fontWeight:700,fontSize:'1.1rem',color:'#ff9900',textAlign:'center'}}>Base<br /><span style={{fontWeight:400,fontSize:'0.95rem',color:'#aaa'}}>NETWORK</span></div>
        </div>
        <div className="nexora-feature-content" style={{flex:1,minWidth:'320px'}}>
          <div className="nexora-feature-desc" style={{fontSize:'1.25rem',fontWeight:400,lineHeight:1.6,color:'#222',marginBottom:'1.5rem'}}>
            Welcome to the <b style={{color:'#7b2ff2',fontWeight:700}}>NEXORA revolution</b>. We’re building a brand that blends pixel art, web3, and the magic of digital collectibles.<br /><br />
            Each of the <b style={{color:'#222',fontWeight:700}}>3,333 NEXORAs</b> is algorithmically generated from over <a href="#" style={{color:'#7b2ff2',fontWeight:700,textDecoration:'underline'}}>100+ hand-drawn traits</a>. From wizards to pixel gems, no two are alike.<br /><br />
            Living on the Base blockchain, your NEXORA is your membership card to an exclusive community of creators, collectors, and digital pioneers.
          </div>
          <div className="nexora-feature-avatars" style={{display:'flex',alignItems:'center',gap:'0.5rem',marginTop:'1.2rem'}}>
            <img src="/images/nft_11.png" alt="NEXORA Avatar 1" loading="lazy" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
            <img src="/images/nft_16.png" alt="NEXORA Avatar 2" loading="lazy" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
            <img src="/images/nft_54.png" alt="NEXORA Avatar 3" loading="lazy" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
            <img src="/images/nft_3.png" alt="NEXORA Avatar 4" loading="lazy" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
            <img src="/images/nft_8.png" alt="NEXORA Avatar 5" loading="lazy" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
            <span className="nexora-feature-join" style={{marginLeft:'1rem',fontWeight:700,fontSize:'1.1rem',color:'#222'}}>Join Us</span>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <GalleryCarousel />

      {/* Roadmap Section */}
      <RoadmapFlow />

      {/* Footer / Builder Credit */}
      <footer className="nexora-builder-credit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', margin: '2.5rem 0 1.5rem 0', fontSize: '1.1rem', color: '#888' }}>
        <span>Built by</span>
        <a href="https://x.com/RamiIlyan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#7b2ff2', fontWeight: 700 }}>
          <img src="/images/rumiilyan.jpeg" alt="Rumi Ilyan" style={{ width: 40, height: 40, borderRadius: '1rem', marginRight: 8, objectFit: 'cover' }} />
          Rumi Ilyan
        </a>
        <span style={{ color: '#bbb', fontWeight: 400, marginLeft: 8 }}>| &copy; 2026</span>
      </footer>
    </main>
    <style jsx global>{`
      .nexora-hero-nft-glow {
        transition: box-shadow 0.2s, filter 0.2s;
      }
      .nexora-hero-nft-glow:hover {
        box-shadow: 0 0 32px 0 #7b2ff2, 0 2px 16px #0001;
        filter: brightness(1.12) drop-shadow(0 0 16px #7b2ff2);
        z-index: 2;
      }
    `}</style>
  </>
  );
}
