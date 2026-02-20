import React from "react";

export default function UtilitySection() {
  return (
    <section className="nexora-utility-section" style={{
      width: '100%',
      maxWidth: 900,
      margin: '3rem auto 2.5rem auto',
      padding: '2.5rem 1.5rem',
      background: 'linear-gradient(90deg,#f7e6ff 0%,#e0f7fa 100%)',
      borderRadius: '2rem',
      boxShadow: '0 4px 24px #0001',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    }}>
      <h2 style={{fontSize:'2.2rem',fontWeight:800,marginBottom:'0.5rem',color:'#7b2ff2',letterSpacing:'-1px'}}>NEXORA Utility</h2>
      <p style={{fontSize:'1.2rem',color:'#333',maxWidth:700,textAlign:'center',marginBottom:'1.2rem'}}>
        <span role="img" aria-label="game">🎮</span> <b>NEXORA is more than an NFT — it’s your key to the Gameverse.</b><br/>
        NEXORA isn’t just art. It’s your gateway to our upcoming Battle Royale Play-to-Earn Game Chip ecosystem.
      </p>
      <ul style={{fontSize:'1.1rem',color:'#222',listStyle:'none',padding:0,margin:0,maxWidth:700}}>
        <li style={{marginBottom:'1rem'}}>
          <span role="img" aria-label="puzzle">🧩</span> <b>Hold 6 NEXORA NFTs = Guaranteed GTD Slot</b><br/>
          Get early access to Game Chip minting before the public.
        </li>
        <li style={{marginBottom:'1rem'}}>
          <span role="img" aria-label="ticket">🎟️</span> <b>Game Chip Supply: 1,111 only</b><br/>
          Ultra limited. High demand incoming.
        </li>
        <li style={{marginBottom:'1rem'}}>
          <span role="img" aria-label="art">🖼️</span> <b>NEXORA Supply: 3,333</b><br/>
          Strong holder advantage built into the ecosystem.
        </li>
        <li style={{marginBottom:'1rem'}}>
          <span role="img" aria-label="money">💰</span> <b>Play to Earn Battle Royale Game</b><br/>
          Earn rewards by competing, surviving, and dominating the arena.
        </li>
        <li style={{marginBottom:'1rem'}}>
          <span role="img" aria-label="rocket">🚀</span> <b>NEXORA holders OWN the advantage</b><br/>
          Exclusive access, real utility, and more updates coming soon.
        </li>
      </ul>
      <div style={{fontSize:'1.15rem',color:'#7b2ff2',fontWeight:700,marginTop:'1.2rem',textAlign:'center'}}>
        Hold NEXORA. Play to win.
      </div>
    </section>
  );
}
