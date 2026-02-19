"use client";
import { useState, useEffect } from "react";

export default function AdminReview() {
  const [apps, setApps] = useState([]);
  const [filter, setFilter] = useState("pending");

  useEffect(() => {
    fetch(`/api/admin?status=${filter}`)
      .then(res => res.json())
      .then(setApps);
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

  return (
    <div style={{ marginBottom: 32 }}>
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
      <ul style={{ marginBottom: 16 }}>
        {apps.map(app => (
          <li key={app.id} style={{ marginBottom: 8, background: "#f8f8f6", padding: 12, borderRadius: 8 }}>
            <span style={{ fontWeight: 600 }}>{app.wallet_address}</span>
            <span style={{ marginLeft: 12, color: "#2ec4b6" }}>{app.status}</span>
            <button onClick={() => updateStatus(app.id, "reviewed")} style={{ marginLeft: 8 }}>Review</button>
            <button onClick={() => updateStatus(app.id, "gtd")} style={{ marginLeft: 8, color: "#007aff" }}>Give GTD</button>
            <button onClick={() => updateStatus(app.id, "wl")} style={{ marginLeft: 8, color: "#7b2ff2" }}>Give WL</button>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => exportWinners("gtd")} style={{ padding: 8, borderRadius: 6, background: "#007aff", color: "#fff", fontWeight: 700, border: "none" }}>Export GTD Winners</button>
        <button onClick={() => exportWinners("wl")} style={{ padding: 8, borderRadius: 6, background: "#7b2ff2", color: "#fff", fontWeight: 700, border: "none" }}>Export WL Winners</button>
      </div>
    </div>
  );
}
