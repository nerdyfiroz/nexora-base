"use client";
import WalletConnect from '../components/WalletConnect';
import { useWallet } from '../hooks/useWallet';
import { useNFTs } from '../hooks/useNFTs';
import { useApproval } from '../hooks/useApproval';
import { useStaking } from '../hooks/useStaking';
import { useState } from 'react';
import Toast from '../components/Toast';
import Skeleton from '../components/Skeleton';
import toast from 'react-hot-toast';
import NFTCard from '../components/NFTCard';
import StakedNFTCard from '../components/StakedNFTCard';

const NFT_CONTRACT = '0x91afB23F7e3567Baac193e342be9668eA7FeaF9E';
const STAKING_CONTRACT = '0xA903FfB91dF343B6E6A92A39D10A287584AF01B0';

export default function StakingDappSection() {
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

  const handleStake = async () => {
    if (!selected.length) return;
    try {
      toast.loading('Staking...');
      await stakeBatch(selected);
      toast.success('Staked successfully!');
      setSelected([]);
    } catch (err) {
      toast.error(err.message || 'Stake failed');
    } finally {
      toast.dismiss();
    }
  };

  const handleUnstake = async tokenId => {
    try {
      toast.loading('Unstaking...');
      await unstakeBatch([tokenId]);
      toast.success('Unstaked successfully!');
    } catch (err) {
      toast.error(err.message || 'Unstake failed');
    } finally {
      toast.dismiss();
    }
  };

  return (
    <div style={{width:'100%',maxWidth:900,margin:'2rem auto',padding:32,background:'#fff',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001'}}>
      <Toast />
      <h2 style={{fontSize:'2rem',fontWeight:700,marginBottom:'1rem',color:'#7b2ff2'}}>NFT Staking</h2>
      <WalletConnect />
      <h3>Your NFTs</h3>
      {nftsLoading ? <Skeleton count={4} /> : null}
      {!approved && (
        <button
          disabled={approvalLoading}
          onClick={async () => {
            let loadingId;
            try {
              loadingId = toast.loading('Approving...');
              await approve();
              toast.dismiss(loadingId);
              toast.success('Approved!');
            } catch (err) {
              if (loadingId) toast.dismiss(loadingId);
              toast.error(err.message || 'Approval failed');
            }
          }}
        >
          Approve Staking
        </button>
      )}
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {!nftsLoading && nfts.map(nft => (
          <NFTCard key={nft.tokenId} tokenId={nft.tokenId} selected={selected.includes(nft.tokenId)} onSelect={handleSelect} />
        ))}
      </div>
      <button disabled={!approved || !selected.length || stakingLoading} onClick={handleStake}>Stake Selected</button>
      <h3 style={{marginTop:'2rem'}}>Staked NFTs</h3>
      {stakingLoading ? <Skeleton count={4} /> : null}
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {!stakingLoading && stakedNFTs.map(nft => (
          <StakedNFTCard key={nft.tokenId} provider={provider} stakingContractAddress={STAKING_CONTRACT} tokenId={nft.tokenId} onUnstake={handleUnstake} />
        ))}
      </div>
    </div>
  );
}
