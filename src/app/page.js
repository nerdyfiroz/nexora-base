"use client";
import WalletConnect from '../components/WalletConnect';
import { useWallet } from '../hooks/useWallet';
import { useNFTs } from '../hooks/useNFTs';
import { useApproval } from '../hooks/useApproval';
import { useStaking } from '../hooks/useStaking';
import { useState } from 'react';

const NFT_CONTRACT = '0x91afB23F7e3567Baac193e342be9668eA7FeaF9E';
const STAKING_CONTRACT = '0xA903FfB91dF343B6E6A92A39D10A287584AF01B0';

export default function Home() {
  const { provider, address } = useWallet();
  const { nfts, loading: nftsLoading } = useNFTs(provider, address, NFT_CONTRACT);
  const { approved, loading: approvalLoading, approve } = useApproval(provider, address, NFT_CONTRACT, STAKING_CONTRACT);
  const { stakedNFTs, loading: stakingLoading, stakeBatch, unstakeBatch } = useStaking(provider, address, STAKING_CONTRACT);
  const [selected, setSelected] = useState([]);

  const handleSelect = tokenId => {
    setSelected(selected.includes(tokenId)
      ? selected.filter(id => id !== tokenId)
      : [...selected, tokenId]);
  };

  const handleStake = () => {
    if (selected.length) stakeBatch(selected);
  };

  const handleUnstake = tokenId => {
    unstakeBatch([tokenId]);
  };

  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:32}}>
      <h1>NFT Staking dApp</h1>
      <WalletConnect />
      <hr />
      <h2>Your NFTs</h2>
      {nftsLoading && <div>Loading NFTs...</div>}
      {!approved && <button disabled={approvalLoading} onClick={approve}>Approve Staking</button>}
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {nfts.map(nft => (
          <NFTCard key={nft.tokenId} tokenId={nft.tokenId} selected={selected.includes(nft.tokenId)} onSelect={handleSelect} />
        ))}
      </div>
      <button disabled={!approved || !selected.length || stakingLoading} onClick={handleStake}>Stake Selected</button>
      <hr />
      <h2>Staked NFTs</h2>
      {stakingLoading && <div>Loading staked NFTs...</div>}
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {stakedNFTs.map(nft => (
          <StakedNFTCard key={nft.tokenId} provider={provider} stakingContractAddress={STAKING_CONTRACT} tokenId={nft.tokenId} onUnstake={handleUnstake} />
        ))}
      </div>
    </div>
  );
}

