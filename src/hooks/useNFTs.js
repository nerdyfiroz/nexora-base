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
      .then(tokenIds => {
        if (Array.isArray(tokenIds) && tokenIds.length > 0) {
          setNfts(tokenIds.map(id => ({ tokenId: id })) );
        } else {
          // fallback: try balanceOf
          contract.balanceOf(address).then(balance => {
            const count = balance.toNumber ? balance.toNumber() : Number(balance);
            setNfts(Array.from({ length: count }, (_, i) => ({ tokenId: `#${i+1}` })));
          }).catch(setError);
        }
      })
      .catch(async (err) => {
        // fallback: try balanceOf
        try {
          const balance = await contract.balanceOf(address);
          const count = balance.toNumber ? balance.toNumber() : Number(balance);
          setNfts(Array.from({ length: count }, (_, i) => ({ tokenId: `#${i+1}` })));
        } catch (e) {
          setError(e);
        }
      })
      .finally(() => setLoading(false));
  }, [provider, address, nftContractAddress]);

  return { nfts, loading, error };
}
