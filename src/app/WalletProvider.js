import { createConfig, WagmiProvider, useAccount, useConnect } from "wagmi";
import { mainnet, base } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains: [base, mainnet] }),
    new WalletConnectConnector({
      chains: [base, mainnet],
      options: {
        projectId: "demo", // Replace with your WalletConnect projectId
        showQrModal: true,
      },
    }),
  ],
});

export function WalletProvider({ children }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}

export function WalletConnectUI({ onConnect }) {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  return (
    <div style={{marginBottom:'1.5rem',padding:'1rem',background:'#f7f8fa',borderRadius:'1rem',boxShadow:'0 2px 8px #7b2ff2',maxWidth:400}}>
      <h4 style={{fontWeight:700,fontSize:'1.1rem',marginBottom:'0.7rem',color:'#7b2ff2'}}>Connect Wallet</h4>
      {isConnected ? (
        <div style={{color:'#38ef7d',fontWeight:600}}>Connected: {address}</div>
      ) : (
        <>
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              disabled={!connector.ready || isLoading}
              style={{padding:'0.7rem 1.5rem',fontWeight:700,borderRadius:'0.7rem',background:'#7b2ff2',color:'#fff',border:'none',boxShadow:'0 2px 8px #7b2ff2',cursor:'pointer',marginBottom:'0.7rem',width:'100%'}}
            >
              Connect with {connector.name}
              {isLoading && pendingConnector?.id === connector.id && " (connecting...)"}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
