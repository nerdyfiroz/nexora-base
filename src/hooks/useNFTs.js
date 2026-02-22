"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import nftAbi from '../abis/nft.json';

export function useNFTs(provider, address, nftContractAddress) {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!provider || !address) return;
    setLoading(true);
    setError(null);
    const contract = new ethers.Contract(nftContractAddress, nftAbi, provider);
    contract.tokensOfOwner(address)
      .then(tokenIds => setNfts(tokenIds.map(id => ({ tokenId: id })) ))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [provider, address, nftContractAddress]);

  return { nfts, loading, error };
}
