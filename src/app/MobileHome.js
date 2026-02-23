"use client";

import AnimatedDescription from "./AnimatedDescription";
import GalleryCarousel from "./GalleryCarousel";
import UtilitySection from "./UtilitySection";
import StakingSection from "./StakingSection";
import RoadmapFlow from "./RoadmapFlow";
import WhitelistForm from "./WhitelistForm";
import { useState } from "react";

export default function MobileHome() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div style={{ background: '#f8f8f6', padding: '0', minHeight: '100vh', width: '100%', maxWidth: '100vw', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <header style={{ width: '100%', maxWidth: 480, margin: '0 auto', textAlign: 'center', padding: '1.2rem 0 0.5rem 0', boxSizing: 'border-box' }}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem',marginBottom:'0.7rem'}}>
          <img src="/images/nft_226.png" alt="Header NFT 1" style={{width:'44px',height:'44px',borderRadius:'0.7rem',background:'#fff'}} />
          <span style={{ fontFamily: 'Space Grotesk, Arial', fontWeight: 900, fontSize: '2rem', letterSpacing: '0.04em', color: '#222' }}>NEXORA</span>
          <img src="/images/nft_16.png" alt="Header NFT 2" style={{width:'44px',height:'44px',borderRadius:'0.7rem',background:'#fff'}} />
        </div>

        <div style={descBox}>
          Discover the next generation of pixel art collectibles, powered by
          Base and web3. Join the revolution!
        </div>
      </header>
      <section style={{ background: '#fff', borderRadius: '1rem', padding: '1rem 0.7rem', margin: '0 0.5rem 1rem 0.5rem', textAlign: 'center', boxSizing: 'border-box', maxWidth: 480, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#7b2ff2' }}>
          <AnimatedDescription />
        </div>
      </section>
      {/* 8-Bit Revolution Section */}
      <div style={{width:'100%',maxWidth:480,margin:'1.5rem auto 1rem auto',display:'flex',justifyContent:'center'}}>
        <h2 style={{fontSize:'1.6rem',fontWeight:900,letterSpacing:'0.04em',margin:0,padding:0,textTransform:'uppercase',textAlign:'center',color:'#222'}}>The 8-Bit Revolution</h2>
      </div>
      <section style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem',background:'#fff',borderRadius:'1rem',padding:'1rem 0.7rem',margin:'0 0.5rem 1rem 0.5rem',maxWidth:480,width:'100%',boxSizing:'border-box',marginLeft:'auto',marginRight:'auto'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem',margin:'0 0 1rem 0'}}>
          <a href="https://opensea.io/collection/nexora-base" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#2ec4b6', color: '#fff', fontWeight: 700, borderRadius: '1rem', padding: '0.8rem', margin: '0.5rem 0', fontSize: '1rem', textDecoration: 'none', letterSpacing:'0.01em', minWidth:'160px' }}>Explore Collection</a>
          <button type="button" onClick={() => setShowModal(true)} style={{ display: 'block', background: '#222', color: '#fff', fontWeight: 700, borderRadius: '1rem', padding: '0.8rem', margin: '0.5rem 0', fontSize: '1rem', textDecoration: 'none', letterSpacing:'0.01em', minWidth:'160px', border: 'none', width: '100%', cursor: 'pointer' }}>Check Whitelist Status</button>
          <div style={{display:'flex',justifyContent:'center',gap:'1rem',marginTop:'0.7rem'}}>
            <a href="https://x.com/Nexora_base" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_x.png" alt="X" style={{width:'28px',height:'28px',opacity:0.7}} />
            </a>
            <a href="https://opensea.io/collection/nexora-base" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_opensea.png" alt="OpenSea" style={{width:'28px',height:'28px',opacity:0.7}} />
            </a>
            <a href="https://basescan.org/address/0x91afb23f7e3567baac193e342be9668ea7feaf9e" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_base.png" alt="Base" style={{width:'28px',height:'28px',opacity:0.7}} />
            </a>
          </div>
        </div>
        <div style={{background:'#f8f8f6',borderRadius:'1rem',padding:'1rem',display:'flex',flexDirection:'column',alignItems:'center',position:'relative',width:'100%',maxWidth:'240px',margin:'0 auto', boxSizing:'border-box', overflowX:'hidden'}}>
          <img src="/images/nft_102.png" alt="NEXORA NFT" style={{width:'120px',height:'120px',borderRadius:'1rem',marginBottom:'1rem',background:'#fff'}} />
          <div style={{position:'absolute',top:'0.7rem',right:'0.7rem',background:'#fff',borderRadius:'0.7rem',padding:'0.3rem 0.7rem',fontWeight:700,fontSize:'0.95rem',color:'#7b2ff2',textAlign:'center'}}>3,333<br /><span style={{fontWeight:400,fontSize:'0.8rem',color:'#aaa'}}>UNIQUE ITEMS</span></div>
          <div style={{position:'absolute',bottom:'0.7rem',left:'0.7rem',background:'#fff',borderRadius:'0.6rem',padding:'0.2rem 0.6rem',fontWeight:700,fontSize:'0.85rem',color:'#ff9900',textAlign:'center'}}>Base<br /><span style={{fontWeight:400,fontSize:'0.8rem',color:'#aaa'}}>NETWORK</span></div>
        </div>
        <div style={{fontSize:'1rem',fontWeight:400,lineHeight:1.6,color:'#222',margin:'1rem 0',textAlign:'center',maxWidth:'260px'}}>
          Welcome to the <b style={{color:'#7b2ff2',fontWeight:700}}>NEXORA revolution</b>. We’re building a brand that blends pixel art, web3, and the magic of digital collectibles.<br /><br />
          Each of the <b style={{color:'#222',fontWeight:700}}>3,333 NEXORAs</b> is algorithmically generated from over <span style={{color:'#7b2ff2',fontWeight:700,textDecoration:'underline'}}>100+ hand-drawn traits</span>. From wizards to pixel gems, no two are alike.<br /><br />
          Living on the Base blockchain, your NEXORA is your membership card to an exclusive community of creators, collectors, and digital pioneers.
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginTop:'0.7rem',justifyContent:'center'}}>
          <img src="/images/nft_11.png" alt="NEXORA Avatar 1" style={{width:'28px',height:'28px',borderRadius:'50%',border:'2px solid #fff'}} />
          <img src="/images/nft_16.png" alt="NEXORA Avatar 2" style={{width:'28px',height:'28px',borderRadius:'50%',border:'2px solid #fff'}} />
          <img src="/images/nft_54.png" alt="NEXORA Avatar 3" style={{width:'28px',height:'28px',borderRadius:'50%',border:'2px solid #fff'}} />
          <img src="/images/nft_3.png" alt="NEXORA Avatar 4" style={{width:'28px',height:'28px',borderRadius:'50%',border:'2px solid #fff'}} />
          <img src="/images/nft_8.png" alt="NEXORA Avatar 5" style={{width:'28px',height:'28px',borderRadius:'50%',border:'2px solid #fff'}} />
          <span style={{marginLeft:'0.5rem',fontWeight:700,fontSize:'0.9rem',color:'#222'}}>Join Us</span>
        </div>
      </section>
      <section style={{ margin: '0 0.5rem 1rem 0.5rem', maxWidth: 480, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        <GalleryCarousel />
      </section>
      <section style={{ margin: '0 0.5rem 1rem 0.5rem' }}>
        <UtilitySection />
      </section>
      <section style={{ margin: '0 0.5rem 1rem 0.5rem' }}>
        <StakingSection />
      </section>
      <section style={{ margin: '0 0.5rem 1rem 0.5rem' }}>
        <RoadmapFlow />
      </section>
      <footer style={{ textAlign: 'center', margin: '1.5rem 0 1rem 0', fontSize: '0.95rem', color: '#333', boxSizing: 'border-box', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <img src="/images/rumiilyan.jpeg" alt="Rumi Ilyan" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 0.5rem auto' }} />
        Website built by <a href="https://x.com/RamiIlyan" target="_blank" rel="noopener noreferrer" style={{ color: '#007aff', fontWeight: 700, textDecoration: 'none' }}>Rumi Ilyan</a>
      </footer>
      {/* Whitelist Modal */}
      <div className={`nexora-modal-overlay${showModal ? ' nexora-modal-open' : ''}`} style={{pointerEvents: showModal ? 'auto' : 'none'}}>
        <div className={`nexora-modal${showModal ? ' nexora-modal-in' : ''}`} style={{maxWidth: 400, width: '95vw'}}>
          <button onClick={() => setShowModal(false)} style={{position:'absolute',top:8,right:8,background:'#fff',border:'none',borderRadius:16,fontSize:24,fontWeight:700,width:36,height:36,cursor:'pointer',boxShadow:'0 2px 8px #0002'}}>×</button>
          <WhitelistForm />
        </div>
      </div>
      <style jsx global>{`
        .nexora-modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.35);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.35s cubic-bezier(.4,0,.2,1);
        }
        .nexora-modal-open {
          opacity: 1;
          pointer-events: auto;
        }
        .nexora-modal {
          position: relative;
          z-index: 1001;
          transform: scale(0.92) translateY(32px);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s cubic-bezier(.4,0,.2,1);
        }
        .nexora-modal-in {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
      `}</style>
      </div>
    </>
  );
}
