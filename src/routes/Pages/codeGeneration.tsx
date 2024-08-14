import ErrorBoundary from "@/components/errorBoundary";
import Heading from "@/components/heading";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Code } from "lucide-react";
import { useEffect, useState } from "react";
import CodeComponent from "../gemini/code-component";


export default function CodeGeneration(){
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
          title="Code Generator"
          description="Our most advanced Code Generation model."
          icon={Code}
          iconColor="rgba(22, 163, 74)"
          bgColor="rgba(22, 163, 74, 0.1)" 
        />
        <div style={{
          paddingLeft: window.innerWidth >= 1024 ? '2rem' : '1rem',
          paddingRight: window.innerWidth >= 1024 ? '2rem' : '1rem',
        }}>
          <ErrorBoundary>
          <CodeComponent />
          </ErrorBoundary>
        </div>
        </main>

        </div>
    )
}