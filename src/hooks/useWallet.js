"use client";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function useWallet() {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(ethProvider);
      ethProvider.getNetwork().then(setNetwork);
      ethProvider.getSigner().then(signer => setAddress(signer.address));
      window.ethereum.on('accountsChanged', accounts => setAddress(accounts[0]));
      window.ethereum.on('chainChanged', () => window.location.reload());
    }
  }, []);

  return { provider, address, network };
}
