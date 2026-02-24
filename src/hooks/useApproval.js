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
    setError(null);
    if (!provider || !address) {
      setError(new Error('Wallet not connected'));
      alert('Wallet not connected. Please connect your wallet.');
      return;
    }
    setLoading(true);
    try {
      // Check for MetaMask and correct network (Base chainId: 8453)
      if (window.ethereum && window.ethereum.isMetaMask) {
        const chainId = await provider.send('eth_chainId', []);
        if (chainId !== '0x2105' && chainId !== '8453') {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x2105' }],
          });
        }
      }
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftContractAddress, nftAbi, signer);
      // Check if already approved
      const alreadyApproved = await contract.isApprovedForAll(address, stakingContractAddress);
      if (alreadyApproved) {
        setApproved(true);
        setLoading(false);
        return;
      }
      // Prompt user for approval
      if (typeof window !== 'undefined' && window.toast) {
        window.toast('Please confirm the approval transaction in MetaMask...', { icon: '📝' });
      }
      const tx = await contract.setApprovalForAll(stakingContractAddress, true);
      await tx.wait();
      setApproved(true);
    } catch (err) {
      setError(err);
      if (typeof window !== 'undefined' && window.toast) {
        window.toast.error(err.message || 'Approval transaction failed or was rejected.');
      } else {
        alert(err.message || 'Approval transaction failed or was rejected.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { approved, loading, error, approve };
}
