"use client";
import React, { useState } from "react";
import SpinDemoBox from "./SpinDemoBox";
import { WalletProvider, WalletConnectUI } from "./WalletProvider";


export default function StakingSection() {
  return (
    <WalletProvider>
      <section style={{width:'100%',maxWidth:'1100px',margin:'2.5rem auto',padding:'2.5rem',background:'#f7f8fa',borderRadius:'1.5rem',boxShadow:'0 4px 32px #0001',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h2 style={{fontSize:'2.8rem',fontWeight:900,letterSpacing:'0.04em',marginBottom:'1.2rem',textTransform:'uppercase',background:'linear-gradient(90deg,#7b2ff2 0%,#38ef7d 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',color:'transparent'}}>Staking</h2>
        <WalletConnectUI />
        <section style={{width:'100%',maxWidth:'900px',margin:'2rem auto',padding:'2rem',background:'#fff',borderRadius:'1.2rem',boxShadow:'0 2px 16px #0001',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h3 style={{fontSize:'2rem',fontWeight:700,marginBottom:'1rem',color:'#7b2ff2'}}>Spin to Get a Chance</h3>
          <div style={{fontSize:'1.1rem',color:'#333',marginBottom:'1.2rem',textAlign:'center'}}>Stake 15 Nexoras to get 1 spin!<br/>Spin for a chance to win amazing rewards:</div>
          <ul style={{fontSize:'1.1rem',color:'#222',marginBottom:'1.5rem',textAlign:'left',listStyle:'disc',paddingLeft:'2rem'}}>
            <li>5$ Token Reward</li>
            <li>1$ Token Reward</li>
            <li>0.5$ Token Reward</li>
            <li>1x Nexora</li>
            <li>2x Nexora</li>
            <li>5x Nexora</li>
            <li>5x Bunny Legends</li>
            <li>1x BudGuyz</li>
            <li>1x BasedMinis</li>
            <li>10x Nexora</li>
            <li>8x Nexora</li>
          </ul>
          <SpinDemoBox />
        </section>
      </section>
    </WalletProvider>
  );
}
