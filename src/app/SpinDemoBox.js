import React, { useState } from "react";

// Rewards and their probabilities
export const rewardProbabilities = [
  { label: "5x Nexora", weight: 40 },
  { label: "2x Nexora", weight: 15 },
  { label: "1x Nexora", weight: 4 },
  { label: "10x Nexora", weight: 15 },
  { label: "5x Bunny Legends", weight: 15 },
  { label: "$0.5 Token", weight: 10 },
  { label: "$1 Token", weight: 1 },
  { label: "5$ Token Reward", weight: 0 },
  { label: "1x BudGuyz", weight: 0 },
  { label: "1x BasedMinis", weight: 0 }
];

export const rewards = rewardProbabilities.map(r => r.label);

// Weighted random selection
export function getRandomReward() {
  const totalWeight = rewardProbabilities.reduce((sum, r) => sum + r.weight, 0);
  let rand = Math.random() * totalWeight;
  for (const reward of rewardProbabilities) {
    if (rand < reward.weight) return reward.label;
    rand -= reward.weight;
  }
  return rewardProbabilities[rewardProbabilities.length - 1].label;
}

export default function SpinDemoBox({ eligible, spinsLeft, onSpin }) {
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
        setTimeout(async () => {
          setResult(finalReward);
          setShuffleReward(null);
          setSpinning(false);
          if (onSpin) onSpin();
          // Store spin reward for admin distribution
          if (finalReward && rewardProbabilities.find(r => r.label === finalReward && r.weight > 0)) {
            // Replace with actual wallet address from user context
            const wallet_address = typeof window !== 'undefined' && window.walletAddress ? window.walletAddress : "demo_wallet";
            await fetch("/api/spin", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ wallet_address, reward: finalReward })
            });
          }
        }, 700);
      }
    }, 80);
  };

  // Responsive wheel size for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;
  const wheelSize = isMobile ? 300 : 420;
  const center = wheelSize / 2;
  const itemCount = rewards.length;
  const radius = wheelSize / 2 - (isMobile ? 45 : 70);
  const angleStep = (2 * Math.PI) / itemCount;

  return (
    <div
      style={{
        margin: isMobile ? '1.2rem 0' : '2rem 0',
        padding: isMobile ? '1.2rem 0.5rem' : '2rem',
        background: '#fff',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 16px #7b2ff2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: isMobile ? '100vw' : '500px',
        width: '100vw',
        boxSizing: 'border-box',
        overflowX: 'auto',
      }}
    >
      <h3 style={{fontSize:'2rem',fontWeight:700,marginBottom:'1rem',color:'#7b2ff2'}}>Spin Wheel</h3>
      <div style={{
        position: 'relative',
        width: wheelSize,
        height: wheelSize,
        marginBottom: isMobile ? '1.2rem' : '2rem',
        maxWidth: '100vw',
        overflow: 'visible',
        touchAction: 'pan-y',
      }}>
        {/* Wheel rewards */}
        {rewards.map((reward, idx) => {
          const angle = idx * angleStep - Math.PI/2;
          const x = center + radius * Math.cos(angle) - 45;
          const y = center + radius * Math.sin(angle) - 18;
          const highlight = shuffleReward === reward;
          return (
            <div
              key={idx}
              style={{
                position:'absolute',
                left:`${x}px`,
                top:`${y}px`,
                width:'90px',
                height:'36px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                background: highlight ? '#38ef7d' : '#f7f8fa',
                borderRadius:'0.7rem',
                boxShadow:'0 2px 8px #0001',
                fontWeight:600,
                color: highlight ? '#fff' : '#222',
                fontSize:'0.95rem',
                border: highlight ? '2px solid #7b2ff2' : '2px solid #e0e7ef',
                zIndex: highlight ? 2 : 1,
                transition:'all 0.2s',
                textAlign:'center',
                padding:'0 0.3rem',
                pointerEvents:'none',
                transform: `rotate(${(angle + Math.PI/2) * 180/Math.PI}deg)`
              }}>
                <span style={{transform: `rotate(-${(angle + Math.PI/2) * 180/Math.PI}deg)`, display:'block', width:'100%'}}>{reward}</span>
            </div>
          );
        })}
        {/* Central spin button */}
        <button
          onClick={handleSpin}
          disabled={!eligible || spinning || spinsLeft <= 0}
          style={{
            position:'absolute',
            left:`${center-50}px`,
            top:`${center-50}px`,
            width:'100px',
            height:'100px',
            borderRadius:'50%',
            background:(!eligible || spinsLeft <= 0)?'#ccc':'#7b2ff2',
            color:'#fff',
            fontWeight:700,
            fontSize:'1.3rem',
            border:'none',
            boxShadow:'0 2px 16px #7b2ff2',
            cursor:(!eligible || spinsLeft <= 0 || spinning)?'not-allowed':'pointer',
            opacity:spinning?0.6:1,
            zIndex:3,
            transition:'all 0.2s',
          }}>
            {spinsLeft > 0 ? `Spin 🛞 (${spinsLeft})` : 'No Spins'}
        </button>
      </div>
      {spinning && shuffleReward && (
        <div style={{fontSize:'1.3rem',color:'#7b2ff2',fontWeight:700,marginTop:'1rem',transition:'all 0.2s'}}>
          {shuffleReward}
        </div>
      )}
      {!eligible && (
        <div style={{fontSize:'1.1rem',color:'#bc13fe',fontWeight:600,marginTop:'1rem'}}>Stake at least 10 NFTs to unlock spins!</div>
      )}
      {eligible && spinsLeft === 0 && (
        <div style={{fontSize:'1.1rem',color:'#38ef7d',fontWeight:600,marginTop:'1rem'}}>You have used all your spins.</div>
      )}
      {result && <div style={{fontSize:'1.3rem',color:'#38ef7d',fontWeight:700,marginTop:'1rem'}}>You won: {result}</div>}
    </div>
  );
}
