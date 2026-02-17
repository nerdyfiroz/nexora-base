
            import GalleryCarousel from "./GalleryCarousel";
            import AnimatedDescription from "./AnimatedDescription";
            import RoadmapFlow from "./RoadmapFlow";
            import NexoraMarquee from "./NexoraMarquee";
            import "./marquee.css";

            export default function Home() {
              return (
                <div className="nexora-main" style={{minHeight:'100vh',padding:'0'}}>
                  {/* ...existing code... */}
                  {/* Hero and NFT grid */}
                  <main style={{width:'100%',maxWidth:'1200px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'3rem',flexWrap:'wrap',padding:'2rem 0'}}>
                    {/* Left: Logo and text */}
                    <div style={{flex:'1 1 350px',minWidth:'320px',maxWidth:'480px',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'2.5rem'}}>
                      {/* Logo - replace with your own logo image if available */}
                      <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
                        <span className="nexora-title" style={{fontSize:'1.2rem',lineHeight:'1.1',background:'white',color:'#18181b',WebkitTextFillColor:'unset',WebkitBackgroundClip:'unset',backgroundClip:'unset',textShadow:'0 2px 24px #a78bfa33, 2px 2px 0 #000, 4px 4px 0 #fff'}}>NEXORA</span>
                      </div>
                      <div style={{
                        fontSize:'1.35rem',
                        fontWeight:700,
                        marginBottom:'1.5rem',
                        background:'rgba(255,255,255,0.92)',
                        borderRadius:'0.5rem',
                        padding:'0.2rem 0.7rem',
                        display:'inline-block',
                        maxWidth:'100%',
                        backgroundClip:'padding-box',
                      }}>
                        <span style={{
                          background: 'linear-gradient(90deg,#6366f1 0%,#a78bfa 50%,#f472b6 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent',
                          fontWeight: 800,
                          fontSize: '1.35rem',
                          letterSpacing: '0.01em',
                          display: 'inline-block',
                        }}>
                          <AnimatedDescription />
                        </span>
                      </div>
                      <div style={{display:'flex',gap:'1.2rem',marginBottom:'1.2rem'}}>
                        <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className="nexora-btn nexora-btn-primary">Explore Collection</a>
                        <a href="#" className="nexora-btn nexora-btn-secondary">Apply for Allowlist</a>
                      </div>
                      <div style={{display:'flex',gap:'1.2rem',marginTop:'0.5rem'}}>
                        {/* OpenSea */}
                        <a href="https://opensea.io/collection/nexora-base" title="OpenSea" target="_blank" rel="noopener noreferrer" style={{fontSize:'2rem'}}>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="14" fill="#2081e2"/>
                            <g>
                              <path d="M14 7a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm0 12.6A5.6 5.6 0 1 1 14 8.4a5.6 5.6 0 0 1 0 11.2z" fill="#fff"/>
                              <path d="M17.2 15.2c-.2-.2-.5-.2-.7 0l-1.2 1.2V13c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.4l-1.2-1.2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l2 2c.2.2.5.2.7 0l2-2c.2-.2.2-.5 0-.7z" fill="#fff"/>
                            </g>
                          </svg>
                        </a>
                        {/* Base */}
                        <a href="https://basescan.org/address/0x91afb23f7e3567baac193e342be9668ea7feaf9e" title="Base Contract" target="_blank" rel="noopener noreferrer" style={{fontSize:'2rem'}}>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="14" fill="#0052ff"/>
                            <rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/>
                          </svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="https://x.com/Nexora_base" title="X (Twitter)" target="_blank" rel="noopener noreferrer" style={{fontSize:'2rem'}}>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="14" fill="#000"/>
                            <path d="M19.5 9.1h-1.3l-2.2 2.7-2.2-2.7h-1.3l2.8 3.4-2.8 3.5h1.3l2.2-2.7 2.2 2.7h1.3l-2.8-3.5z" fill="#fff"/>
                          </svg>
                        </a>
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
                  </main>
                  {/* Animated Marquee Lines (above gallery) */}
                  <NexoraMarquee />
                  {/* 8-Bit Revolution Title */}
                  <div style={{width:'100%',display:'flex',justifyContent:'center',margin:'0 0 1.5rem 0'}}>
                    <h2 className="nexora-marquee-gradient-text" style={{fontSize:'4.2rem',fontWeight:900,letterSpacing:'0.04em',margin:0,padding:0,textTransform:'uppercase',textAlign:'center',background:'linear-gradient(90deg, #38ef7d 0%, #1194f6 40%, #7b2ff2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',color:'transparent',animation:'gradient-move 4s linear infinite alternate'}}>The 8-Bit Revolution</h2>
                  </div>
                  {/* Collection About Section */}
                  <section className="nexora-feature-section" style={{display:'flex',alignItems:'center',gap:'2.5rem',background:'#f7f8fa',borderRadius:'1.5rem',boxShadow:'0 4px 32px #0001',padding:'2.5rem 2rem',margin:'0 auto 2.5rem auto',maxWidth:'1100px'}}>
                    <div className="nexora-feature-imgbox" style={{flex:'0 0 320px',background:'#f3e9f7',borderRadius:'1.2rem',padding:'1.2rem',boxShadow:'0 2px 16px #0001',display:'flex',flexDirection:'column',alignItems:'center',position:'relative'}}>
                      <img src="/images/nft_102.png" alt="NEXORA NFT" className="nexora-feature-img" style={{width:'220px',height:'220px',borderRadius:'1.2rem',marginBottom:'1.2rem',background:'#fff'}} />
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
                        <img src="/images/nft_11.png" alt="NEXORA Avatar 1" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
                        <img src="/images/nft_16.png" alt="NEXORA Avatar 2" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
                        <img src="/images/nft_54.png" alt="NEXORA Avatar 3" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
                        <img src="/images/nft_3.png" alt="NEXORA Avatar 4" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
                        <img src="/images/nft_8.png" alt="NEXORA Avatar 5" style={{width:'44px',height:'44px',borderRadius:'50%',border:'2px solid #fff',boxShadow:'0 2px 8px #0001'}} />
                        <span className="nexora-feature-join" style={{marginLeft:'1rem',fontWeight:700,fontSize:'1.1rem',color:'#222'}}>Join Us</span>
                      </div>
                    </div>
                  </section>
                  {/* Gallery Section */}
                  <GalleryCarousel />
                  {/* Roadmap Section */}
                  <RoadmapFlow />
                  {/* Builder Section */}
                  <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',margin:'2.5rem 0 1.5rem 0',gap:'1.2rem'}}>
                    <img src="/images/rumiilyan.jpeg" alt="Rumi Ilyan" style={{width:'48px',height:'48px',borderRadius:'50%',objectFit:'cover',boxShadow:'0 2px 8px #0002'}} onError={(e) => { e.target.onerror = null; e.target.src = '/images/nft_11.png'; }} />
                    <div style={{fontWeight:600,fontSize:'1.1rem',color:'#333'}}>Website built by
                      <a href="https://x.com/RamiIlyan" target="_blank" rel="noopener noreferrer" style={{marginLeft:'0.5rem',color:'#007aff',textDecoration:'none',fontWeight:700}}>Rumi Ilyan</a>
                    </div>
                  </div>
                </div>
              );
            }

