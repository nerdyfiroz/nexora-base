            import GalleryCarousel from "./GalleryCarousel";
              {/* Gallery Section */}
              <GalleryCarousel />
            {/* More Than Just Another JPEG Section */}
            <section className="nexora-feature-section">
              <div className="nexora-feature-imgbox">
                <img src="/images/nft_102.png" alt="NEXORA NFT" className="nexora-feature-img" />
                <div className="nexora-feature-badge">3,333<span>UNIQUE ITEMS</span></div>
                <div className="nexora-feature-network">Base<span>NETWORK</span></div>
              </div>
              <div className="nexora-feature-content">
                <div className="nexora-feature-title">
                  More Than Just <span className="nexora-feature-accent">Another JPEG</span>
                </div>
                <div className="nexora-feature-desc">
                  Welcome to the <b>NEXORA revolution</b>. We’re building a brand that blends pixel art, web3, and the magic of digital collectibles.<br /><br />
                  Each of the <strong>3,333 NEXORAs</strong> is algorithmically generated from over <b>100+ hand-drawn traits</b>. From wizards to pixel gems, no two are alike.<br /><br />
                  Living on the Base blockchain, your NEXORA is your membership card to an exclusive community of creators, collectors, and digital pioneers.
                </div>
                <div className="nexora-feature-avatars">
                  <img src="/images/nft_11.png" alt="NEXORA Avatar 1" />
                  <img src="/images/nft_16.png" alt="NEXORA Avatar 2" />
                  <img src="/images/nft_54.png" alt="NEXORA Avatar 3" />
                  <img src="/images/nft_3.png" alt="NEXORA Avatar 4" />
                  <img src="/images/nft_8.png" alt="NEXORA Avatar 5" />
                  <span className="nexora-feature-join">Join Us</span>
                </div>
              </div>
            </section>
      {/* Roadmap Section */}
      <section className="nexora-roadmap">
        <h3>Roadmap</h3>
        <ul className="nexora-roadmap-list">
          <li className="nexora-roadmap-item">
            <span className="nexora-roadmap-dot"></span>
            <span>
              <b>Reveal & Launch:</b> NEXORA collection goes live on <span className="nexora-roadmap-date">20th February</span> on Base chain.
            </span>
          </li>
          <li className="nexora-roadmap-item">
            <span className="nexora-roadmap-dot"></span>
            <span>
              <b>Mint Phases:</b> GDT (Freemint), Whitelist (0.1$), Public (0.3$) on OpenSea.
            </span>
          </li>
          <li className="nexora-roadmap-item">
            <span className="nexora-roadmap-dot"></span>
            <span>
              <b>Community:</b> Grow the NEXORA community, events, and collaborations.
            </span>
          </li>
          <li className="nexora-roadmap-item">
            <span className="nexora-roadmap-dot"></span>
            <span>
              <b>Next Steps:</b> Utility, airdrops, and more digital collectible experiences.
            </span>
          </li>
        </ul>
      </section>

import AnimatedDescription from "./AnimatedDescription";

export default function Home() {
  return (
    <div className="nexora-main" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'0'}}>
      <main style={{width:'100%',maxWidth:'1200px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'3rem',flexWrap:'wrap',padding:'2rem 0'}}>
        {/* Left: Logo and text */}
        <div style={{flex:'1 1 350px',minWidth:'320px',maxWidth:'480px',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'2.5rem'}}>
          {/* Logo - replace with your own logo image if available */}
          <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
            <span className="nexora-title" style={{fontSize:'3.2rem',lineHeight:'1.1',background:'white',color:'#18181b',WebkitTextFillColor:'unset',WebkitBackgroundClip:'unset',backgroundClip:'unset',textShadow:'0 2px 24px #a78bfa33, 2px 2px 0 #000, 4px 4px 0 #fff'}}>NEXORA</span>
          </div>
          <div style={{marginTop:'-1.2rem',marginBottom:'0.5rem'}}>
            <AnimatedDescription />
          </div>
          {/* Animated description is always visible with strong contrast */}
          <div style={{
            fontSize:'1.25rem',
            color:'#23272f',
            marginBottom:'1.5rem',
            fontWeight:600,
            textShadow:'0 2px 8px #fff, 0 1px 0 #fff',
            background:'rgba(255,255,255,0.92)',
            borderRadius:'0.5rem',
            padding:'0.2rem 0.7rem',
            display:'inline-block',
            maxWidth:'100%'
          }}>
            <AnimatedDescription />
          </div>
          <div style={{display:'flex',gap:'1.2rem',marginBottom:'1.2rem'}}>
            <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className="nexora-btn nexora-btn-primary">Explore Collection</a>
            <a href="#" className="nexora-btn nexora-btn-secondary">Apply for Allowlist</a>
          </div>
          <div style={{display:'flex',gap:'1.2rem',marginTop:'0.5rem'}}>
            <a href="#" title="X" style={{color:'#000',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#000"/><path d="M10.5 10.5l7 7m0-7l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></a>
            <a href="#" title="Base" style={{color:'#0052ff',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#0052ff"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/></svg></a>
              <a href="#" title="X" style={{color:'#000',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#000"/><path d="M10.5 10.5l7 7m0-7l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></a>
              <a href="#" title="Base" style={{color:'#0052ff',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#0052ff"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/></svg></a>
          </div>
        </div>
        {/* Right: NFT grid */}
        <div style={{flex:'1 1 350px',minWidth:'320px',maxWidth:'520px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',height:'480px'}}>
          {/* Center NFT */}
          <img src="/images/nft_226.png" alt="NFT Center" className="nft-float-center" style={{width:'260px',height:'260px',borderRadius:'2.2rem',boxShadow:'0 4px 32px #0002',position:'absolute',top:'100px',left:'50%',transform:'translateX(-50%)',zIndex:2,background:'#fff'}} />
          <img src="/images/nft_16.png" alt="NFT Top Right" className="nft-float-corner" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',top:'10px',right:'30px',zIndex:3,background:'#fff',transform:'rotate(10deg)','--angle':'10deg'}} />
          <img src="/images/nft_54.png" alt="NFT Top Left" className="nft-float-corner" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',top:'10px',left:'30px',zIndex:3,background:'#fff',transform:'rotate(-10deg)','--angle':'-10deg'}} />
          <img src="/images/nft_3.png" alt="NFT Bottom Right" className="nft-float-corner" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',bottom:'20px',right:'50px',zIndex:3,background:'#fff',transform:'rotate(8deg)','--angle':'8deg'}} />
          <img src="/images/nft_8.png" alt="NFT Bottom Left" className="nft-float-corner" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',bottom:'20px',left:'50px',zIndex:3,background:'#fff',transform:'rotate(-8deg)','--angle':'-8deg'}} />
        </div>
              {/* Collection Details Card */}
              <div className="nexora-glass-card" style={{margin:'2.5rem auto 0 auto',width:'100%',maxWidth:'420px'}}>
                <h2>Collection Details</h2>
                <ul>
                  <li><b>Supply:</b> 3333</li>
                  <li><b>Mint on:</b> <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline',color:'#2563eb'}}>OpenSea</a></li>
                  <li><b>Chain:</b> Base</li>
                </ul>
                <div>
                  <b>Mint Phases:</b>
                  <ul>
                    <li>GDT: <span style={{color:'#16a34a',fontWeight:'bold'}}>Freemint</span></li>
                    <li>WL: <span style={{color:'#2563eb',fontWeight:'bold'}}>0.1$</span></li>
                    <li>Public: <span style={{color:'#db2777',fontWeight:'bold'}}>0.3$</span></li>
                  </ul>
                </div>
                <div className="nexora-glass-mint">
                  <b>Mint date:</b> 20th February
                </div>
              </div>
        </div>
      </main>
    </div>
  );
}
