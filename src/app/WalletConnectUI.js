import { useState } from "react";

export default function WalletConnectUI({ onConnect }) {
  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState(false);

  // Simulate wallet connect/metamask
  const connectWallet = async () => {
    // In production, integrate WalletConnect/MetaMask here
    if (/^0x[a-fA-F0-9]{40}$/.test(address)) {
      setConnected(true);
      if (onConnect) onConnect(address);
      window.walletAddress = address;
    } else {
      alert("Invalid wallet address format");
    }
  };

  return (
    <div style={{marginBottom:'1.5rem',padding:'1rem',background:'#f7f8fa',borderRadius:'1rem',boxShadow:'0 2px 8px #7b2ff2',maxWidth:400}}>
      <h4 style={{fontWeight:700,fontSize:'1.1rem',marginBottom:'0.7rem',color:'#7b2ff2'}}>Connect Wallet</h4>
      {!connected ? (
        <>
          <input
            type="text"
            placeholder="Enter your Base wallet address"
            value={address}
            onChange={e => setAddress(e.target.value.trim())}
            style={{width:'100%',padding:'0.7rem',borderRadius:'0.5rem',border:'1px solid #e0e7ef',marginBottom:'0.7rem'}}
          />
          <button onClick={connectWallet} style={{padding:'0.7rem 1.5rem',fontWeight:700,borderRadius:'0.7rem',background:'#7b2ff2',color:'#fff',border:'none',boxShadow:'0 2px 8px #7b2ff2',cursor:'pointer'}}>Connect</button>
        </>
      ) : (
        <div style={{color:'#38ef7d',fontWeight:600}}>Connected: {address}</div>
      )}
    </div>
  );
}
