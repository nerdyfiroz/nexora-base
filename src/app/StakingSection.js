"use client";
import React from "react";
import StakingDappSection from "./StakingDappSection";

export default function StakingSection() {
  return (
    <section style={{width:'100%',maxWidth:'1100px',margin:'2.5rem auto',padding:'2.5rem',background:'#f7f8fa',borderRadius:'1.5rem',boxShadow:'0 4px 32px #0001',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h2 style={{fontSize:'2.8rem',fontWeight:900,letterSpacing:'0.04em',marginBottom:'1.2rem',textTransform:'uppercase',background:'linear-gradient(90deg,#7b2ff2 0%,#38ef7d 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',color:'transparent'}}>Staking</h2>
      <StakingDappSection />
    </section>
  );
}
