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

const NFT_CONTRACT = '0x91afB23F7e3567Baac193e342be9668eA7FeaF9E';
const STAKING_CONTRACT = '0xA903FfB91dF343B6E6A92A39D10A287584AF01B0';

export default function Home() {
  const { provider, address } = useWallet();
  const { nfts, loading: nftsLoading } = useNFTs(provider, address, NFT_CONTRACT);
  const { approved, loading: approvalLoading, approve } = useApproval(provider, address, NFT_CONTRACT, STAKING_CONTRACT);
  const { stakedNFTs, loading: stakingLoading, stakeBatch, unstakeBatch } = useStaking(provider, address, STAKING_CONTRACT);
  const [selected, setSelected] = useState([]);

  const handleSelect = tokenId => {
    import ResponsiveHome from "./ResponsiveHome";

    export default function Home() {
      return <ResponsiveHome />;
    }


  const handleStake = async () => {
