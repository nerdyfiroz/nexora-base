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
        {/* Moving Marquee Sentences */}
        <div style={{width:'100%',overflow:'hidden',margin:'1.2rem 0 1.2rem 0',position:'relative',height:'auto',display:'flex',flexDirection:'column',gap:'0.2em'}}>
          <div className="nexora-marquee nexora-marquee-left nexora-marquee-gradient" style={{fontSize:'2rem',animationDuration:'18s',marginBottom:'0.2em',position:'relative',width:'100%'}}>
            <span className="nexora-marquee-gradient-text">A 8BIT REVOLUTION • NEXORA • MAGIC MEETS METADATA⚡️ • APPLY • BASE • JOIN US • 3333 SUPPLY •</span>
          </div>
          <div className="nexora-marquee nexora-marquee-right nexora-marquee-gradient" style={{fontSize:'2rem',animationDuration:'18s',position:'relative',width:'100%'}}>
            <span className="nexora-marquee-gradient-text">3333 SUPPLY • JOIN US • BASE • APPLY • MAGIC MEETS METADATA⚡️ • NEXORA • A 8BIT REVOLUTION •</span>
          </div>
        </div>
      </section>
      {/* 8-Bit Revolution Section */}
      <div style={{width:'100%',display:'flex',justifyContent:'center',margin:'2rem 0 1.2rem 0'}}>
        <h2 style={{fontSize:'2.2rem',fontWeight:900,letterSpacing:'0.04em',margin:0,padding:0,textTransform:'uppercase',textAlign:'center',background:'linear-gradient(90deg, #38ef7d 0%, #1194f6 40%, #7b2ff2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',color:'transparent',animation:'gradient-move 4s linear infinite alternate',backgroundColor:'#f8f8f6'}}>The 8-Bit Revolution</h2>
      </div>
      <section style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem',background:'#f7f8fa',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',padding:'1.5rem 0.7rem',margin:'0 auto 1.2rem auto',maxWidth:'98vw'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem',margin:'0 0 1.2rem 0'}}>
          <a href="https://opensea.io/collection/nexora-base" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: 'linear-gradient(90deg,#38ef7d 0%,#1194f6 40%,#7b2ff2 100%)', color: '#fff', fontWeight: 700, borderRadius: '1.2rem', padding: '1rem', margin: '0.5rem 0', fontSize: '1.1rem', textDecoration: 'none', letterSpacing:'0.01em', minWidth:'180px' }}>Explore Collection</a>
          <a href="#" style={{ display: 'block', background: '#18181b', color: '#fff', fontWeight: 700, borderRadius: '1.2rem', padding: '1rem', margin: '0.5rem 0', fontSize: '1.1rem', textDecoration: 'none', letterSpacing:'0.01em', minWidth:'180px' }}>Apply for Allowlist</a>
          <div style={{display:'flex',justifyContent:'center',gap:'1.2rem',marginTop:'0.7rem'}}>
            <a href="https://x.com/Nexora_base" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_x.png" alt="X" style={{width:'32px',height:'32px',opacity:0.7}} />
            </a>
            <a href="https://opensea.io/collection/nexora-base" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_opensea.png" alt="OpenSea" style={{width:'32px',height:'32px',opacity:0.7}} />
            </a>
            <a href="https://basescan.org/address/0x91afb23f7e3567baac193e342be9668ea7feaf9e" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/images/social_base.png" alt="Base" style={{width:'32px',height:'32px',opacity:0.7}} />
            </a>
          </div>
        </div>
        <div style={{background:'#f3e9f7',borderRadius:'1.2rem',padding:'1.2rem',boxShadow:'0 2px 16px #0001',display:'flex',flexDirection:'column',alignItems:'center',position:'relative',width:'100%',maxWidth:'320px',margin:'0 auto'}}>
          <img src="/images/nft_102.png" alt="NEXORA NFT" style={{width:'180px',height:'180px',borderRadius:'1.2rem',marginBottom:'1.2rem',background:'#fff'}} />
          <div style={{position:'absolute',top:'1.2rem',right:'1.2rem',background:'#fff',borderRadius:'1rem',padding:'0.5rem 1.2rem',boxShadow:'0 2px 8px #0001',fontWeight:700,fontSize:'1.1rem',color:'#7b2ff2',textAlign:'center'}}>3,333<br /><span style={{fontWeight:400,fontSize:'0.95rem',color:'#aaa'}}>UNIQUE ITEMS</span></div>
          <div style={{position:'absolute',bottom:'1.2rem',left:'1.2rem',background:'#fff',borderRadius:'0.8rem',padding:'0.4rem 1.1rem',boxShadow:'0 2px 8px #0001',fontWeight:700,fontSize:'1rem',color:'#ff9900',textAlign:'center'}}>Base<br /><span style={{fontWeight:400,fontSize:'0.9rem',color:'#aaa'}}>NETWORK</span></div>
        </div>
        <div style={{fontSize:'1.1rem',fontWeight:400,lineHeight:1.6,color:'#222',margin:'1.2rem 0',textAlign:'center',maxWidth:'340px'}}>
          Welcome to the <b style={{color:'#7b2ff2',fontWeight:700}}>NEXORA revolution</b>. We’re building a brand that blends pixel art, web3, and the magic of digital collectibles.<br /><br />
          Each of the <b style={{color:'#222',fontWeight:700}}>3,333 NEXORAs</b> is algorithmically generated from over <span style={{color:'#7b2ff2',fontWeight:700,textDecoration:'underline'}}>100+ hand-drawn traits</span>. From wizards to pixel gems, no two are alike.<br /><br />
          Living on the Base blockchain, your NEXORA is your membership card to an exclusive community of creators, collectors, and digital pioneers.
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginTop:'0.7rem',justifyContent:'center'}}>
          <img src="/images/nft_11.png" alt="NEXORA Avatar 1" style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_16.png" alt="NEXORA Avatar 2" style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_54.png" alt="NEXORA Avatar 3" style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_3.png" alt="NEXORA Avatar 4" style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <img src="/images/nft_8.png" alt="NEXORA Avatar 5" style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
          <span style={{marginLeft:'0.7rem',fontWeight:700,fontSize:'1rem',color:'#222'}}>Join Us</span>
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
