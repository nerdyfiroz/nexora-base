"use client";
import dynamic from "next/dynamic";
import { useIsMobile } from "./useIsMobile";
import GalleryCarousel from "./GalleryCarousel";
import AnimatedDescription from "./AnimatedDescription";
import RoadmapFlow from "./RoadmapFlow";
import NexoraMarquee from "./NexoraMarquee";

const MobileHome = dynamic(() => import("./MobileHome"), { ssr: false });

export default function ResponsiveHome() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileHome />;
  }
  // Desktop UI (original code, can be refactored for brevity)
  return (
    <div className="nexora-main" style={{minHeight:'100vh',padding:'0'}}>
      {/* ...existing code... */}
      {/* Hero and NFT grid */}
      {/* ...existing desktop layout code here (removed for brevity)... */}
    </div>
  );
}
