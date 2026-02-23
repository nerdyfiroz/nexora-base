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
    if (!provider || !address) {
      alert('Wallet not connected. Please connect your wallet.');
      setError(new Error('Wallet not connected'));
      return;
    }
    setLoading(true);
    setError(null);
    try {
      if (typeof window !== 'undefined' && window.toast) {
        window.toast('Please confirm the approval transaction in your wallet...', { icon: '📝' });
      } else if (typeof window !== 'undefined' && window.reactHotToast) {
        window.reactHotToast('Please confirm the approval transaction in your wallet...', { icon: '📝' });
      }
      // fallback for react-hot-toast
      if (typeof window !== 'undefined' && window.toast === undefined && window.reactHotToast === undefined) {
        // eslint-disable-next-line no-alert
        alert('Please confirm the approval transaction in your wallet...');
      }
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftContractAddress, nftAbi, signer);
      const tx = await contract.setApprovalForAll(stakingContractAddress, true);
      await tx.wait();
      setApproved(true);
    } catch (err) {
      setError(err);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast.error('Approval transaction failed or was rejected.');
      } else if (typeof window !== 'undefined' && window.reactHotToast) {
        window.reactHotToast.error('Approval transaction failed or was rejected.');
      } else {
        // eslint-disable-next-line no-alert
        alert('Approval transaction failed or was rejected.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { approved, loading, error, approve };
}
