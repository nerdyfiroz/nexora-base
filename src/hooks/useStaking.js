"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import stakingAbi from '../abis/staking.json';

export function useStaking(provider, address, stakingContractAddress) {
  const [stakedNFTs, setStakedNFTs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!provider || !address) return;
    setLoading(true);
    setError(null);
    const contract = new ethers.Contract(stakingContractAddress, stakingAbi, provider);
    contract.stakedTokensOfOwner(address)
      .then(tokenIds => setStakedNFTs(tokenIds.map(id => ({ tokenId: id })) ))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [provider, address, stakingContractAddress]);

  const stakeBatch = async (tokenIds) => {
    setLoading(true);
    setError(null);
    try {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(stakingContractAddress, stakingAbi, signer);
      const tx = await contract.stakeBatch(tokenIds);
      await tx.wait();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const unstakeBatch = async (tokenIds) => {
    setLoading(true);
    setError(null);
    try {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(stakingContractAddress, stakingAbi, signer);
      const tx = await contract.unstakeBatch(tokenIds);
      await tx.wait();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { stakedNFTs, loading, error, stakeBatch, unstakeBatch };
}
