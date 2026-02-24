"use client";
import { useWallet } from '../hooks/useWallet';

export default function WalletConnect() {
  const { address, network, connect, disconnect } = useWallet();

  return (
    <div>
      {address ? (
        <div>
          <span>Connected: {address}</span>
          <span>Network: {network?.name}</span>
          <button style={{marginLeft:'1rem',background:'#ff4d4f',color:'#fff',border:'none',borderRadius:6,padding:'0.3rem 0.8rem',cursor:'pointer'}} onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
