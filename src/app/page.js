

            import GalleryCarousel from "./GalleryCarousel";
            import AnimatedDescription from "./AnimatedDescription";
            import RoadmapFlow from "./RoadmapFlow";
            import NexoraMarquee from "./NexoraMarquee";
            import MobileHome from "./MobileHome";
            import { useIsMobile } from "./useIsMobile";
            import "./marquee.css";

            export default function Home() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileHome />;
  }
  return (
    <div className="nexora-main" style={{minHeight:'100vh',padding:'0'}}>
      {/* ...existing code... */}
      {/* Hero and NFT grid */}
      {/* ...existing desktop layout code here (removed for brevity)... */}
    </div>
  );
            }

