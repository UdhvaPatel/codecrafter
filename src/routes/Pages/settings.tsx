import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";


export default function Settings(){
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
            <h1>Settings</h1>
        </main>

        </div>
    )
}