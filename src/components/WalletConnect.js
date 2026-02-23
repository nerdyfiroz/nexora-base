"use client";
import { useWallet } from '../hooks/useWallet';

export default function WalletConnect() {
  const { provider, address, network } = useWallet();

  const handleDisconnect = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] })
        .then(() => window.location.reload())
        .catch(() => window.location.reload());
    } else {
      // fallback: just reload
      window.location.reload();
    }
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
