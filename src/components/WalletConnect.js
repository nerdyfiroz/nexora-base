"use client";
import { useWallet } from '../hooks/useWallet';

export default function WalletConnect() {
  const { provider, address, network } = useWallet();

  const handleDisconnect = () => {
    // Clear wallet state and reload cleanly
    if (window.ethereum && window.ethereum.isMetaMask) {
      // Remove all listeners and clear address
      if (window.ethereum.removeAllListeners) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('chainChanged');
      }
    }
    localStorage.clear();
    sessionStorage.clear();
    window.walletAddress = undefined;
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <div>
      {address ? (
        <div>
          <span>Connected: {address}</span>
          <span>Network: {network?.name}</span>
          <button style={{marginLeft:'1rem',background:'#ff4d4f',color:'#fff',border:'none',borderRadius:6,padding:'0.3rem 0.8rem',cursor:'pointer'}} onClick={handleDisconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={() => window.ethereum?.request({ method: 'eth_requestAccounts' })}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
