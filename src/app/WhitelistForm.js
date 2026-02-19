"use client";

import { useState, useRef } from "react";

const isValidWallet = (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr);

export default function WhitelistForm() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const lastCheck = useRef(0);
  const COOLDOWN = 2500;

  const checkStatus = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!isValidWallet(wallet)) {
      setStatus("error");
      setErrorMsg("Invalid wallet address format");
      return;
    }

    const now = Date.now();
    if (now - lastCheck.current < COOLDOWN) {
      setStatus("error");
      setErrorMsg("Please wait before checking again");
      return;
    }

    lastCheck.current = now;

    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    try {
      const res = await fetch(`/api/whitelist?address=${wallet}`);

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      setStatus(data.status || "none");

    } catch {
      setStatus("error");
      setErrorMsg("API not responding. Check backend route.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={checkStatus}
      style={{
        padding: 26,
        background: "#fff",
        borderRadius: 18,
        maxWidth: 420,
        boxShadow: "0 15px 40px rgba(0,0,0,.1)"
      }}
    >
      <h2 style={{ fontWeight: 800, fontSize: "1.6rem", marginBottom: 18 }}>
        Check Whitelist Status
      </h2>

      <input
        value={wallet}
        onChange={(e) => setWallet(e.target.value.trim())}
        placeholder="0x..."
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 12,
          border: "1px solid #ddd",
          marginBottom: 16,
          fontSize: 16
        }}
      />

      <button
        disabled={loading}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 12,
          background: "#2ec4b6",
          color: "#fff",
          fontWeight: 800,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Checking..." : "Check Status"}
      </button>

      {/* Animated result area */}
      <div
        style={{
          overflow: "hidden",
          transition: "all .35s ease",
          maxHeight: status ? 120 : 0,
          marginTop: status ? 18 : 0
        }}
      >
        {status === "wl" && successBox("🎉 WL slot confirmed!")}
        {status === "gtd" && successBox("🚀 GTD slot confirmed!")}
        {status === "none" && errorBox("❌ Not allocated yet")}
        {status === "error" && errorBox(`⚠ ${errorMsg}`)}
      </div>
    </form>
  );
}

function successBox(text) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      color: "#1b8f87",
      background: "#e7fffb",
      boxShadow: "0 0 18px rgba(46,196,182,.6)",
      fontWeight: 700
    }}>
      {text}
    </div>
  );
}

function errorBox(text) {
  return (
    <div style={{
      padding: 14,
      borderRadius: 12,
      color: "#c92b2b",
      background: "#ffecec",
      boxShadow: "0 0 18px rgba(230,57,70,.6)",
      fontWeight: 700
    }}>
      {text}
    </div>
  );
}
