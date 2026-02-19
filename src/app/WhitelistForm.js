"use client";
import { useState, useEffect } from "react";

export default function WhitelistForm() {
  const [tasks, setTasks] = useState([]);
  const [wallet, setWallet] = useState("");
  const [proofs, setProofs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/whitelist")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  const handleProofChange = (id, value) => {
    setProofs(p => ({ ...p, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/whitelist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wallet_address: wallet, proofs }),
    });
    setSubmitted(true);
  };

  if (submitted) return <div style={{padding:24, background:'#fff', borderRadius:12, margin:'2rem auto', maxWidth:400}}>Thank you for applying! Your submission has been received.</div>;

  return (
    <form onSubmit={handleSubmit} style={{padding:24, background:'#fff', borderRadius:12, margin:'2rem auto', maxWidth:400}}>
      <h2 style={{fontWeight:700, fontSize:'1.5rem', marginBottom:16}}>Apply for Allowlist</h2>
      <input
        type="text"
        placeholder="Your wallet address"
        value={wallet}
        onChange={e => setWallet(e.target.value)}
        required
        style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ccc', marginBottom:16}}
      />
      {tasks.map(task => (
        <div key={task.id} style={{marginBottom:16}}>
          <div style={{fontWeight:600, marginBottom:4}}>{task.name}</div>
          {task.description && <div style={{fontSize:'0.95rem', color:'#888', marginBottom:4}}>{task.description}</div>}
          {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" style={{display:'inline-block', marginBottom:4, color:'#2ec4b6', fontWeight:700}}>Go to Task</a>}
          <input
            type="text"
            placeholder={task.required ? "Paste proof (tx, username, etc)" : "Optional proof"}
            value={proofs[task.id] || ""}
            onChange={e => handleProofChange(task.id, e.target.value)}
            required={task.required}
            style={{width:'100%', padding:10, borderRadius:6, border:'1px solid #ccc'}}
          />
        </div>
      ))}
      <button type="submit" style={{width:'100%', padding:12, borderRadius:8, background:'#2ec4b6', color:'#fff', fontWeight:700, border:'none'}}>Submit Application</button>
    </form>
  );
}
