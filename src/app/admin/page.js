
"use client";
import React from "react";
import { useState } from "react";
import AdminTasks from "./AdminTasks";
import AdminReview from "./AdminReview";
export default function AdminPage() {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState(false);
  const [giveawayTitle, setGiveawayTitle] = useState("");
  const [giveawayDesc, setGiveawayDesc] = useState("");

  // Replace with your Vercel env code check
  const handleLogin = () => {
    if (code === process.env.NEXT_PUBLIC_ADMIN_CODE) {
      setAccess(true);
    } else {
      alert("Invalid admin code.");
    }
  };

  if (!access) {
    return (
      <div style={{ maxWidth: 400, margin: "4rem auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #0001" }}>
        <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: 16 }}>Admin Login</h2>
        <input
          type="password"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Enter admin code"
          style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc", marginBottom: 16 }}
        />
        <button onClick={handleLogin} style={{ width: "100%", padding: 12, borderRadius: 8, background: "#2ec4b6", color: "#fff", fontWeight: 700, border: "none" }}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "4rem auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #0001", width: '98vw', minWidth: 0 }}>
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 24 }}>Admin Panel</h2>
      <div style={{marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8}}>
        <label style={{fontWeight:600, fontSize:'1.1rem'}}>Giveaway Title:</label>
        <input
          type="text"
          value={giveawayTitle}
          onChange={e => setGiveawayTitle(e.target.value)}
          placeholder="Enter giveaway title"
          style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ccc',marginBottom:8,marginTop:4,fontSize:'1rem',minWidth:0}}
        />
        <label style={{fontWeight:600, fontSize:'1.1rem'}}>Giveaway Description:</label>
        <textarea
          value={giveawayDesc}
          onChange={e => setGiveawayDesc(e.target.value)}
          placeholder="Enter giveaway description"
          style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ccc',minHeight:60,marginTop:4,fontSize:'1rem',minWidth:0}}
        />
      </div>
      <AdminTasks />
      <AdminReview />
    </div>
  );
}
