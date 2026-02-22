"use client";
import { useWallet } from '../hooks/useWallet';

export default function WalletConnect() {
  const { provider, address, network } = useWallet();

  return (
    <div>
      {address ? (
        <div>
          <span>Connected: {address}</span>
          <span>Network: {network?.name}</span>
        </div>
      ) : (
        <button onClick={() => window.ethereum?.request({ method: 'eth_requestAccounts' })}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
