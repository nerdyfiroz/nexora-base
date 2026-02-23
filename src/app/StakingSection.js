"use client";
import React, { useMemo, useState } from "react";
import StakingDappSection from "./StakingDappSection";
import SpinDemoBox from "./SpinDemoBox";
import { useWallet } from '../hooks/useWallet';
import { useStaking } from '../hooks/useStaking';

const NFT_CONTRACT = '0x91afB23F7e3567Baac193e342be9668eA7FeaF9E';
const STAKING_CONTRACT = '0xA903FfB91dF343B6E6A92A39D10A287584AF01B0';

export default function StakingSection() {
  const { provider, address } = useWallet();
  const { stakedNFTs } = useStaking(provider, address, STAKING_CONTRACT);
  const [spinsUsed, setSpinsUsed] = useState(0);
  const spinCount = useMemo(() => {
    if (!stakedNFTs) return 0;
    if (stakedNFTs.length < 10) return 0;
    if (stakedNFTs.length >= 50) return 5;
    return Math.floor(stakedNFTs.length / 10);
  }, [stakedNFTs]);
  const eligibleForSpin = spinCount > 0;

  return (
    <section
      style={{
        width: '100%',
        maxWidth: 1100,
        margin: '2.5rem auto',
        padding: '2.5rem 1rem',
        background: '#f7f8fa',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 32px #0001',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.2rem',
          fontWeight: 900,
          letterSpacing: '0.04em',
          marginBottom: '1.2rem',
          textTransform: 'uppercase',
          background: 'linear-gradient(90deg,#7b2ff2 0%,#38ef7d 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
        }}
      >
        Staking
      </h2>
      <StakingDappSection />
      <div style={{ width: '100%', maxWidth: 500 }}>
        <SpinDemoBox eligible={eligibleForSpin} spinsLeft={spinCount - spinsUsed} onSpin={() => setSpinsUsed(s => s + 1)} />
      </div>
    </section>
  );
}
