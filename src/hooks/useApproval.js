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
      // Debug: log network and contract addresses
      let networkName = 'unknown';
      try {
        const network = await provider.getNetwork();
        networkName = network.name || network.chainId;
        if (typeof window !== 'undefined' && window.toast) {
          window.toast(`Network: ${networkName}`);
        }
        // eslint-disable-next-line no-console
        console.log('Network:', networkName);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Could not fetch network:', e);
      }
      if (typeof window !== 'undefined' && window.toast) {
        window.toast(`NFT: ${nftContractAddress}\nStaking: ${stakingContractAddress}`);
      }
      // eslint-disable-next-line no-console
      console.log('NFT Contract:', nftContractAddress);
      console.log('Staking Contract:', stakingContractAddress);

      if (typeof window !== 'undefined' && window.toast) {
        window.toast('Please confirm the approval transaction in your wallet...', { icon: '📝' });
      } else if (typeof window !== 'undefined' && window.reactHotToast) {
        window.reactHotToast('Please confirm the approval transaction in your wallet...', { icon: '📝' });
      }
      if (typeof window !== 'undefined' && window.toast === undefined && window.reactHotToast === undefined) {
        alert('Please confirm the approval transaction in your wallet...');
      }

      let signer;
      try {
        signer = provider.getSigner();
        // eslint-disable-next-line no-console
        console.log('Signer:', signer);
      } catch (signerErr) {
        setError(signerErr);
        if (typeof window !== 'undefined' && window.toast) {
          window.toast.error('Could not get signer: ' + signerErr.message);
        }
        // eslint-disable-next-line no-console
        console.error('Could not get signer:', signerErr);
        setLoading(false);
        return;
      }
      let contract;
      try {
        contract = new ethers.Contract(nftContractAddress, nftAbi, signer);
      } catch (contractErr) {
        setError(contractErr);
        if (typeof window !== 'undefined' && window.toast) {
          window.toast.error('Could not create contract: ' + contractErr.message);
        }
        // eslint-disable-next-line no-console
        console.error('Could not create contract:', contractErr);
        setLoading(false);
        return;
      }
      let tx;
      try {
        tx = await contract.setApprovalForAll(stakingContractAddress, true);
        // eslint-disable-next-line no-console
        console.log('Approval tx sent:', tx);
      } catch (txErr) {
        setError(txErr);
        if (typeof window !== 'undefined' && window.toast) {
          window.toast.error('Approval transaction error: ' + txErr.message);
        }
        // eslint-disable-next-line no-console
        console.error('Approval transaction error:', txErr);
        setLoading(false);
        return;
      }
      try {
        await tx.wait();
        setApproved(true);
      } catch (waitErr) {
        setError(waitErr);
        if (typeof window !== 'undefined' && window.toast) {
          window.toast.error('Approval tx wait error: ' + waitErr.message);
        }
        // eslint-disable-next-line no-console
        console.error('Approval tx wait error:', waitErr);
        setLoading(false);
        return;
      }
    } catch (err) {
      setError(err);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast.error('Approval transaction failed or was rejected.');
      } else if (typeof window !== 'undefined' && window.reactHotToast) {
        window.reactHotToast.error('Approval transaction failed or was rejected.');
      } else {
        alert('Approval transaction failed or was rejected.');
      }
      // eslint-disable-next-line no-console
      console.error('Approval transaction failed or was rejected:', err);
    } finally {
      setLoading(false);
    }
  };

  return { approved, loading, error, approve };
}
