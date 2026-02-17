// No 'use client' here, keep as server component


            import GalleryCarousel from "./GalleryCarousel";
            import AnimatedDescription from "./AnimatedDescription";
            import RoadmapFlow from "./RoadmapFlow";
            import NexoraMarquee from "./NexoraMarquee";
            import dynamic from "next/dynamic";
            const MobileHome = dynamic(() => import("./MobileHome"), { ssr: false });

            // Only import useIsMobile on the client
            let useIsMobile = null;
            if (typeof window !== "undefined") {
              useIsMobile = require("./useIsMobile").useIsMobile;
            }
            import "./marquee.css";

            export default function Home() {
  // If on client and mobile, render MobileHome
  if (typeof window !== "undefined" && useIsMobile && useIsMobile()) {
    return <MobileHome />;
  }
  // Otherwise, render desktop UI (SSR safe)
  return (
    <div className="nexora-main" style={{minHeight:'100vh',padding:'0'}}>
      {/* ...existing code... */}
      {/* Hero and NFT grid */}
      {/* ...existing desktop layout code here (removed for brevity)... */}
    </div>
  );
            }

