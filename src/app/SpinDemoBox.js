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
