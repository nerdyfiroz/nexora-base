import { useEffect, useState } from "react";

export default function SpinRewardsHistory({ wallet_address }) {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    if (!wallet_address) return;
    fetch(`/api/spin?wallet_address=${wallet_address}`)
      .then(res => res.json())
      .then(setRewards);
  }, [wallet_address]);

  if (!wallet_address) return <div>Please connect your wallet to view rewards.</div>;

  return (
    <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px #7b2ff2', maxWidth: 500 }}>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#7b2ff2' }}>Your Spin Rewards</h3>
      <ul style={{ padding: 0, width: '100%' }}>
        {rewards.length === 0 && <li style={{ color: '#aaa' }}>No rewards yet.</li>}
        {rewards.map(reward => (
          <li key={reward.id} style={{ marginBottom: 16, background: '#f8f8f6', padding: 16, borderRadius: 10, listStyle: 'none', width: '100%' }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{reward.reward}</div>
            <div style={{ marginBottom: 8, color: reward.status === 'confirmed' ? '#38ef7d' : '#e63946' }}>Status: {reward.status}</div>
            {reward.status === 'confirmed' && reward.confirmed_at && (
              <div style={{ color: '#888', marginTop: 8 }}>Confirmed at: {new Date(reward.confirmed_at).toLocaleString()}</div>
            )}
            {reward.status === 'pending' && (
              <div style={{ color: '#888', marginTop: 8 }}>Pending distribution</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
