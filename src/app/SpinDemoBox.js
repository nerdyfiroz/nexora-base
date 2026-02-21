import React, { useState } from "react";

export const rewards = [
  "5$ Token Reward",
  "1$ Token Reward",
  "0.5$ Token Reward",
  "1x Nexora",
  "2x Nexora",
  "5x Nexora",
  "5x Bunny Legends",
  "1x BudGuyz",
  "1x BasedMinis",
  "10x Nexora",
  "8x Nexora"
];

export function getRandomReward() {
  return rewards[Math.floor(Math.random() * rewards.length)];
}

export default function SpinDemoBox() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [shuffleReward, setShuffleReward] = useState(null);

  const handleSpin = () => {
    setSpinning(true);
    setResult(null);
    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
      setShuffleReward(rewards[Math.floor(Math.random() * rewards.length)]);
      shuffleCount++;
      if (shuffleCount > 20) {
        clearInterval(shuffleInterval);
        const finalReward = getRandomReward();
        setShuffleReward(finalReward);
        setTimeout(() => {
          setResult(finalReward);
          setShuffleReward(null);
          setSpinning(false);
        }, 700);
      }
    }, 80);
  };

  // Circular layout variables
  const wheelSize = 340;
  const center = wheelSize / 2;
  const itemCount = rewards.length;
  const radius = wheelSize / 2 - 50;
  const angleStep = (2 * Math.PI) / itemCount;

  return (
    <div style={{margin:'2rem 0',padding:'2rem',background:'#fff',borderRadius:'1.2rem',boxShadow:'0 2px 16px #7b2ff2',display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'500px',width:'100%'}}>
      <h3 style={{fontSize:'2rem',fontWeight:700,marginBottom:'1rem',color:'#7b2ff2'}}>Spin Wheel</h3>
      <div style={{position:'relative',width:wheelSize,height:wheelSize,marginBottom:'2rem'}}>
        {/* Wheel rewards */}
        {rewards.map((reward, idx) => {
          const angle = idx * angleStep - Math.PI/2;
          const x = center + radius * Math.cos(angle) - 60;
          const y = center + radius * Math.sin(angle) - 24;
          const highlight = shuffleReward === reward;
          return (
            <div
              key={idx}
              style={{
                position:'absolute',
                left:`${x}px`,
                top:`${y}px`,
                width:'120px',
                height:'48px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                background: highlight ? '#38ef7d' : '#f7f8fa',
                borderRadius:'0.7rem',
                boxShadow:'0 2px 8px #0001',
                fontWeight:600,
                color: highlight ? '#fff' : '#222',
                fontSize:'1.05rem',
                border: highlight ? '2px solid #7b2ff2' : '2px solid #e0e7ef',
                zIndex: highlight ? 2 : 1,
                transition:'all 0.2s',
                textAlign:'center',
                padding:'0 0.5rem',
                pointerEvents:'none'
              }}>
                {reward}
            </div>
          );
        })}
        {/* Central spin button */}
        <button
          onClick={handleSpin}
          disabled={spinning}
          style={{
            position:'absolute',
            left:`${center-50}px`,
            top:`${center-50}px`,
            width:'100px',
            height:'100px',
            borderRadius:'50%',
            background:'#7b2ff2',
            color:'#fff',
            fontWeight:700,
            fontSize:'1.3rem',
            border:'none',
            boxShadow:'0 2px 16px #7b2ff2',
            cursor:spinning?'not-allowed':'pointer',
            opacity:spinning?0.6:1,
            zIndex:3,
            transition:'all 0.2s',
          }}>
            Spin 🛞
        </button>
      </div>
      {spinning && shuffleReward && (
        <div style={{fontSize:'1.3rem',color:'#7b2ff2',fontWeight:700,marginTop:'1rem',transition:'all 0.2s'}}>
          {shuffleReward}
        </div>
      )}
      {result && <div style={{fontSize:'1.3rem',color:'#38ef7d',fontWeight:700,marginTop:'1rem'}}>You won: {result}</div>}
    </div>
  );
}
