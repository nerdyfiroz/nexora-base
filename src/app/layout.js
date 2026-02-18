// Removed 'use client' to allow metadata export as a server component
import { Geist, Geist_Mono } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import "./nexora.css";
// import AnimatedBackground from "./AnimatedBackground";

// AnimatedBackground is now imported as a client component


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="offwhite-bg fullpage-layout">

        <main className="content-overlay">
          {children}
        </main>
      </body>
    </html>
  );
}
