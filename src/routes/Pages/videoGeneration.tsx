import Heading from "@/components/heading";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Video } from "lucide-react";
import { useEffect, useState } from "react";


export default function VideoGeneration(){
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
          title="Video Generator"
          description="Our most Powerful Video Generation model."
          icon={Video}
          iconColor="rgba(234, 88, 12)"
          bgColor="rgba(234, 88, 12, 0.1)" 
        />
        </main>

        </div>
    )
}