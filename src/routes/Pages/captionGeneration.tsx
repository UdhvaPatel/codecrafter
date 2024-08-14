import ErrorBoundary from "@/components/errorBoundary";
import Heading from "@/components/heading";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { LucideChartNoAxesGantt } from "lucide-react";
import { useEffect, useState } from "react";
// import ChatComponent from "../gemini/chat-component";
// import ImageComponent from "../gemini/caption-component";
import CaptionComponent from "../gemini/caption-component";


export default function CaptionGeneration(){
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return(
        <div style={{ height: '100%', position: 'relative' }}>

        {isMediumScreen && (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, width: '18rem' }}>
            <Sidebar />
            </div>
        )}
        <main style={{  ...(window.innerWidth >= 768 && { paddingLeft: '18.5rem' }) }}>
            <Navbar />
            <Heading 
          title="Caption Generator"
          description="Our most Creative Caption Generation model."
          icon={LucideChartNoAxesGantt}
          iconColor="rgba(236, 72, 153)"
          bgColor="rgba(236, 72, 153, 0.1)" 
        />
        <div style={{
          paddingLeft: window.innerWidth >= 1024 ? '2rem' : '1rem',
          paddingRight: window.innerWidth >= 1024 ? '2rem' : '1rem',
        }}>
          <ErrorBoundary>
          <CaptionComponent />
          </ErrorBoundary>
          </div>
        </main>

        </div>
    )
}