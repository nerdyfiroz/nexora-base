"use client";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function useWallet() {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);

  // Only connect when user requests
  const connect = async () => {
    if (window.ethereum) {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(ethProvider);
      const net = await ethProvider.getNetwork();
      setNetwork(net);
      const signer = await ethProvider.getSigner();
      setAddress(signer.address);
      window.ethereum.on('accountsChanged', accounts => setAddress(accounts[0]));
      window.ethereum.on('chainChanged', () => {
        setProvider(null);
        setAddress(null);
        setNetwork(null);
      });
    }
  };

  // Disconnect wallet (clear state, no reload)
  const disconnect = () => {
    setProvider(null);
    setAddress(null);
    setNetwork(null);
    if (window.ethereum && window.ethereum.removeAllListeners) {
      window.ethereum.removeAllListeners('accountsChanged');
      window.ethereum.removeAllListeners('chainChanged');
    }
    localStorage.clear();
    sessionStorage.clear();
    window.walletAddress = undefined;
  };

  return { provider, address, network, connect, disconnect };
}
