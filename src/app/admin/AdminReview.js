"use client";
import { useState, useEffect } from "react";

export default function AdminReview() {
  const [apps, setApps] = useState([]);
  const [filter, setFilter] = useState("pending");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`/api/admin?status=${filter}`)
      .then(res => res.json())
      .then(setApps);
    fetch('/api/whitelist')
      .then(res => res.json())
      .then(setTasks);
  }, [filter]);

  const updateStatus = async (id, status) => {
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetch(`/api/admin?status=${filter}`).then(res => res.json()).then(setApps);
  };

  const exportWinners = async (type) => {
    const res = await fetch("/api/admin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    });
    const data = await res.json();
    const csv = data.map(row => row.wallet_address).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${type}_winners.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const deleteApp = async (id) => {
    if (typeof window !== 'undefined' && !window.confirm('Delete this application?')) return;
    await fetch(`/api/admin`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    setApps(apps => apps.filter(a => a.id !== id));
  };

  return (
    <div style={{ marginBottom: 32, width: '100%', minWidth: 0 }}>
      <h3 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 16 }}>Whitelist Applications Review</h3>
      <div style={{ marginBottom: 16 }}>
        <label>Filter: </label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
          <option value="gtd">GTD</option>
          <option value="wl">WL</option>
        </select>
      </div>
      <ul style={{ marginBottom: 16, padding: 0, width: '100%' }}>
        {apps.map(app => {
          let proofs = {};
          try {
            proofs = typeof app.tasks === 'string' ? JSON.parse(app.tasks) : app.tasks;
          } catch (e) {}
          return (
            <li key={app.id} style={{ marginBottom: 16, background: "#f8f8f6", padding: 16, borderRadius: 10, listStyle: 'none', width: '100%' }}>
              <div style={{ fontWeight: 600, marginBottom: 4, wordBreak: 'break-all' }}>{app.wallet_address}</div>
              <div style={{ marginBottom: 8, color: "#2ec4b6" }}>Status: {app.status}</div>
              <div style={{ marginBottom: 8 }}>
                <b>Proofs:</b>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {tasks.map(task => (
                    <li key={task.id} style={{wordBreak:'break-all'}}>
                      <span style={{ fontWeight: 500 }}>{task.name}:</span> {proofs[task.id] || <span style={{ color: '#aaa' }}>No proof</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                <button onClick={() => updateStatus(app.id, "reviewed")} style={{ marginRight: 8, flex:1,minWidth:90 }}>Review</button>
                <button onClick={() => updateStatus(app.id, "gtd")} style={{ marginRight: 8, color: "#007aff", flex:1,minWidth:90 }}>Give GTD</button>
                <button onClick={() => updateStatus(app.id, "wl")} style={{ marginRight: 8, color: "#7b2ff2", flex:1,minWidth:90 }}>Give WL</button>
                <button onClick={() => deleteApp(app.id)} style={{ color: "#e63946", marginLeft: 8, flex:1,minWidth:90 }}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div style={{ display: "flex", gap: 12, flexWrap:'wrap', width:'100%' }}>
        <button onClick={() => exportWinners("gtd")} style={{ padding: 8, borderRadius: 6, background: "#007aff", color: "#fff", fontWeight: 700, border: "none", flex:1,minWidth:120 }}>Export GTD Winners</button>
        <button onClick={() => exportWinners("wl")} style={{ padding: 8, borderRadius: 6, background: "#7b2ff2", color: "#fff", fontWeight: 700, border: "none", flex:1,minWidth:120 }}>Export WL Winners</button>
      </div>
    </div>
  );
}
