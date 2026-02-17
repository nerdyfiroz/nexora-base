


import AnimatedDescription from "./AnimatedDescription";

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
          <div style={{fontSize:'1.25rem',color:'#555',marginBottom:'1.5rem',fontWeight:500}}>
            A vibrant collection on Base. Join the movement.
          </div>
          <div style={{display:'flex',gap:'1.2rem',marginBottom:'1.2rem'}}>
            <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" style={{padding:'0.9rem 1.7rem',borderRadius:'1.5rem',background:'white',boxShadow:'0 2px 12px #0001',fontWeight:700,fontSize:'1.1rem',color:'#f472b6',border:'none',outline:'none',transition:'all 0.2s',textDecoration:'none',borderBottom:'2px solid #a78bfa'}}>Explore Collection</a>
            <a href="#" style={{padding:'0.9rem 1.7rem',borderRadius:'1.5rem',background:'#18181b',color:'white',fontWeight:700,fontSize:'1.1rem',border:'none',outline:'none',transition:'all 0.2s',textDecoration:'none'}}>Apply for Allowlist</a>
          </div>
          <div style={{display:'flex',gap:'1.2rem',marginTop:'0.5rem'}}>
            <a href="#" title="Discord" style={{color:'#5865F2',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#5865F2"/><path d="M19.5 19c-1.2-.6-2.3-1-3.5-1s-2.3.4-3.5 1c-.2-.3-.4-.7-.5-1.1.7-.2 1.3-.4 2-.5.2-.1.3-.2.3-.4s-.1-.3-.2-.4c-.5-.2-1-.4-1.5-.7-.2-.1-.3-.3-.3-.5s.1-.4.3-.5c.5-.2 1-.4 1.5-.7.1-.1.2-.2.2-.4s-.1-.3-.3-.4c-.7-.2-1.3-.4-2-.5.1-.4.3-.8.5-1.1 1.2.6 2.3 1 3.5 1s2.3-.4 3.5-1c.2.3.4.7.5 1.1-.7.2-1.3.4-2 .5-.2.1-.3.2-.3.4s.1.3.2.4c.5.2 1 .4 1.5.7.2.1.3.3.3.5s-.1.4-.3.5c-.5.2-1 .4-1.5.7-.1.1-.2.2-.2.4s.1.3.3.4c.7.2 1.3.4 2 .5-.1.4-.3.8-.5 1.1z" fill="#fff"/></svg></a>
            <a href="#" title="X" style={{color:'#000',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#000"/><path d="M10.5 10.5l7 7m0-7l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></a>
            <a href="#" title="Base" style={{color:'#0052ff',fontSize:'2rem'}}><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#0052ff"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/></svg></a>
          </div>
        </div>
        {/* Right: NFT grid */}
        <div style={{flex:'1 1 350px',minWidth:'320px',maxWidth:'520px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',height:'420px'}}>
          {/* Center NFT */}
          <img src="/file.svg" alt="NFT Center" style={{width:'260px',height:'260px',borderRadius:'2.2rem',boxShadow:'0 4px 32px #0002',position:'absolute',top:'80px',left:'50%',transform:'translateX(-50%)',zIndex:2,background:'#fff'}} />
          {/* Top right */}
          <img src="/globe.svg" alt="NFT Top Right" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',top:'0',right:'30px',zIndex:3,background:'#fff',transform:'rotate(10deg)'}} />
          {/* Top left */}
          <img src="/window.svg" alt="NFT Top Left" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',top:'0',left:'30px',zIndex:3,background:'#fff',transform:'rotate(-10deg)'}} />
          {/* Bottom right */}
          <img src="/vercel.svg" alt="NFT Bottom Right" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',bottom:'0',right:'50px',zIndex:3,background:'#fff',transform:'rotate(8deg)'}} />
          {/* Bottom left */}
          <img src="/next.svg" alt="NFT Bottom Left" style={{width:'90px',height:'90px',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',position:'absolute',bottom:'0',left:'50px',zIndex:3,background:'#fff',transform:'rotate(-8deg)'}} />
        </div>
      </main>
    </div>
  );
}
