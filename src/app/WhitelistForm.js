"use client";

import { useState } from "react";

export default function WhitelistForm() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/whitelist?address=" + encodeURIComponent(wallet));
      const data = await res.json();
      setStatus(data.status);
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={checkStatus} style={{padding:24, background:'#fff', borderRadius:12, margin:'2rem auto', maxWidth:400}}>
      <h2 style={{fontWeight:700, fontSize:'1.5rem', marginBottom:16}}>Check Whitelist Status</h2>
      <input
        type="text"
        placeholder="Your wallet address"
        value={wallet}
        onChange={e => setWallet(e.target.value)}
        required
        style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ccc', marginBottom:16}}
      />
      <button type="submit" style={{width:'100%', padding:12, borderRadius:8, background:'#2ec4b6', color:'#fff', fontWeight:700, border:'none'}} disabled={loading}>
        {loading ? "Checking..." : "Check Status"}
      </button>
      {status === "wl" && (
        <div style={{marginTop:20, color:'#2ec4b6', fontWeight:600}}>Address is allocated for <b>WL</b> slot.</div>
      )}
      {status === "gtd" && (
        <div style={{marginTop:20, color:'#2ec4b6', fontWeight:600}}>Address is allocated for <b>GTD</b> slot.</div>
      )}
      {status === "none" && (
        <div style={{marginTop:20, color:'#e76f51', fontWeight:600}}>Address is <b>not allocated</b> yet.</div>
      )}
      {status === "error" && (
        <div style={{marginTop:20, color:'#e63946', fontWeight:600}}>Error checking status. Please try again.</div>
      )}
    </form>
  );
}
