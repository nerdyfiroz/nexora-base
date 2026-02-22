"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import stakingAbi from '../abis/staking.json';
import { getSecondsLeft, formatCountdown } from '../utils/timer';

export default function StakedNFTCard({ provider, stakingContractAddress, tokenId, onUnstake }) {
  const [lockEnd, setLockEnd] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (!provider) return;
    const contract = new ethers.Contract(stakingContractAddress, stakingAbi, provider);
    contract.getLockEndTime(tokenId).then(end => setLockEnd(Number(end)));
  }, [provider, stakingContractAddress, tokenId]);

  useEffect(() => {
    if (!lockEnd) return;
    const interval = setInterval(() => {
      setSecondsLeft(getSecondsLeft(lockEnd));
    }, 1000);
    return () => clearInterval(interval);
  }, [lockEnd]);

  return (
    <div className="staked-nft-card" style={{border:'1px solid #7b2ff2',borderRadius:8,padding:16,margin:8,background:'#f7e6ff'}}>
      <div>Token ID: {tokenId}</div>
      <div style={{height:80,background:'#eee',borderRadius:8,margin:'8px 0'}}>Image Placeholder</div>
      <div>Lock: {secondsLeft > 0 ? formatCountdown(secondsLeft) : 'Unlocked'}</div>
      <button disabled={secondsLeft > 0} onClick={() => onUnstake(tokenId)} style={{marginTop:8}}>Unstake</button>
    </div>
  );
}
