"use client";

import { useState, useRef } from "react";

const isValidWallet = (address) => /^0x[a-fA-F0-9]{40}$/.test(address);

export default function WhitelistForm() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const lastCheckRef = useRef(0); // anti-spam cooldown

  const COOLDOWN = 3000; // 3 seconds

  const checkStatus = async (e) => {
    e.preventDefault();

    if (loading) return;

    const now = Date.now();
    if (now - lastCheckRef.current < COOLDOWN) {
      setErrorMsg("Please wait a moment before checking again.");
      setStatus("error");
      return;
    }

    if (!isValidWallet(wallet)) {
      setErrorMsg("Invalid wallet format. Must start with 0x and be 42 characters.");
      setStatus("error");
      return;
    }

    lastCheckRef.current = now;

    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    try {
      const res = await fetch(
        "/api/whitelist?address=" + encodeURIComponent(wallet)
      );

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Server error");
        setStatus("error");
        return;
      }

      setStatus(data.status);

    } catch (err) {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const glowStyle = (type) => ({
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    fontWeight: 600,
    textAlign: "center",
    boxShadow:
      type === "success"
        ? "0 0 15px rgba(46,196,182,0.7)"
        : "0 0 15px rgba(230,57,70,0.7)",
  });

  return (
    <form
      onSubmit={checkStatus}
      style={{
        padding: 24,
        background: "#fff",
        borderRadius: 14,
        margin: "2rem auto",
        maxWidth: 420,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ fontWeight: 800, fontSize: "1.6rem", marginBottom: 18 }}>
        Check Whitelist Status
      </h2>

      <input
        type="text"
        placeholder="0xYourWalletAddress"
        value={wallet}
        onChange={(e) => setWallet(e.target.value.trim())}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 10,
          border: "1px solid #ccc",
          marginBottom: 16,
          outline: "none",
          fontSize: "1rem",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 10,
          background: loading ? "#94d3cc" : "#2ec4b6",
          color: "#fff",
          fontWeight: 800,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "0.2s",
        }}
      >
        {loading ? "Checking..." : "Check Status"}
      </button>

      {status === "wl" && (
        <div style={{ ...glowStyle("success"), color: "#2ec4b6" }}>
          🎉 You are allocated a <b>WL</b> slot!
        </div>
      )}

      {status === "gtd" && (
        <div style={{ ...glowStyle("success"), color: "#2ec4b6" }}>
          🚀 You are allocated a <b>GTD</b> slot!
        </div>
      )}

      {status === "none" && (
        <div style={{ ...glowStyle("error"), color: "#e76f51" }}>
          ❌ Not allocated yet.
        </div>
      )}

      {status === "error" && (
        <div style={{ ...glowStyle("error"), color: "#e63946" }}>
          ⚠ {errorMsg}
        </div>
      )}
    </form>
  );
}
