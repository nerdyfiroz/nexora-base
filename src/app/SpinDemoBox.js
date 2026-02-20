import React, { useState } from "react";

const rewards = [
  "5$ Token Reward",
  "1$ Token Reward",
  "5x Nexora",
  "5x Bunny Legends",
  "1x BudGuyz",
  "1x BasedMinis",
  "10x Nexora",
  "8x Nexora"
];

function getRandomReward() {
  return rewards[Math.floor(Math.random() * rewards.length)];
}

export default function SpinDemoBox() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    setSpinning(true);
    setResult(null);
    setTimeout(() => {
      setResult(getRandomReward());
      setSpinning(false);
    }, 2000);
  };

  return (
    <div style={{margin:'2rem 0',padding:'2rem',background:'#fff',borderRadius:'1.2rem',boxShadow:'0 2px 16px #7b2ff2',display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'500px',width:'100%'}}>
      <h3 style={{fontSize:'2rem',fontWeight:700,marginBottom:'1rem',color:'#7b2ff2'}}>Spin Wheel</h3>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'1rem',marginBottom:'2rem'}}>
        {rewards.map((reward, idx) => (
          <div key={idx} style={{padding:'0.8rem 1.2rem',background:'#f7f8fa',borderRadius:'0.8rem',boxShadow:'0 2px 8px #0001',fontWeight:600,color:'#222',fontSize:'1.1rem'}}>{reward}</div>
        ))}
      </div>
      <button onClick={handleSpin} disabled={spinning} style={{padding:'1rem 2.5rem',fontSize:'1.2rem',fontWeight:700,borderRadius:'2rem',background:'#7b2ff2',color:'#fff',border:'none',boxShadow:'0 2px 8px #7b2ff2',cursor:spinning?'not-allowed':'pointer',opacity:spinning?0.6:1,marginBottom:'1.2rem'}}>Spin</button>
      {spinning && <div style={{fontSize:'1.2rem',color:'#7b2ff2',fontWeight:600}}>Spinning...</div>}
      {result && <div style={{fontSize:'1.3rem',color:'#38ef7d',fontWeight:700,marginTop:'1rem'}}>You won: {result}</div>}
    </div>
  );
}
