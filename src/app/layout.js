// Removed 'use client' to allow metadata export as a server component
import { Geist, Geist_Mono } from "next/font/google";
import { Pacifico } from "next/font/google";
import '../../styles/globals.css';
import "./nexora.css";
// import AnimatedBackground from "./AnimatedBackground";

// AnimatedBackground is now imported as a client component


import { WalletProvider } from "./WalletProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="offwhite-bg fullpage-layout">
        <WalletProvider>
          <main className="content-overlay">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
