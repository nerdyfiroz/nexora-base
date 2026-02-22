"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import nftAbi from '../abis/nft.json';

export function useApproval(provider, address, nftContractAddress, stakingContractAddress) {
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!provider || !address) return;
    setLoading(true);
    setError(null);
    const contract = new ethers.Contract(nftContractAddress, nftAbi, provider);
    contract.isApprovedForAll(address, stakingContractAddress)
      .then(setApproved)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [provider, address, nftContractAddress, stakingContractAddress]);

  const approve = async () => {
    setLoading(true);
    setError(null);
    try {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftContractAddress, nftAbi, signer);
      const tx = await contract.setApprovalForAll(stakingContractAddress, true);
      await tx.wait();
      setApproved(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { approved, loading, error, approve };
}
