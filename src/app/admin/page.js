"use client";
import { useState } from "react";

export default function AdminPanel() {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState(false);

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
    <div style={{ maxWidth: 900, margin: "4rem auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #0001" }}>
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 24 }}>Admin Panel</h2>
      <p>Whitelist management, GTD/WL review, task controls, and export features will appear here.</p>
      <AdminTasks />
      <AdminReview />
    import AdminReview from "./AdminReview";
    </div>
  );
import AdminTasks from "./AdminTasks";
}
