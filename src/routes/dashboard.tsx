
import  { useEffect, useState } from 'react';
// import { Heading } from "@/components/heading";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ArrowRight, Code,  MessageSquare,  LucideChartNoAxesGantt} from 'lucide-react';
import { Card } from '@/components/ui/card';
import '@/hover-dashboard.css'
// import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function DashboardPage() {

  const styles = {
    padding: '1rem',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
    marginBottom: '1rem',
  };

  const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "rgba(124, 58, 237)",
      bgColor: "rgba(124, 58, 237, 0.1)",
      href: "/dashboard/conversation"
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "rgba(22, 163, 74)",
      bgColor: "rgba(22, 163, 74, 0.1)",
      href: "/dashboard/code"
    },
    {
      label: "Caption Generation",
      icon: LucideChartNoAxesGantt,
      color: "rgba(236, 72, 153)",
      bgColor: "rgba(236, 72, 153, 0.1)",
      href: "/dashboard/caption"
    },
    // {
    //   label: "Video Generation",
    //   icon: Video,
    //   color: "rgba(234, 88, 12)",
    //   bgColor: "rgba(234, 88, 12, 0.1)",
    //   href: "/dashboard/video"
    // },
    // {
    //   label: "Music Generation",
    //   icon: Music,
    //   color: "rgba(16, 185, 129)",
    //   bgColor: "rgba(16, 185, 129, 0.1)",
    //   href: "/dashboard/music"
    // },
    
    
  ]

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

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      
      {isMediumScreen && (
        <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, width: '18rem' }}>
          <Sidebar />
        </div>
      )}
      
      <main style={{  ...(window.innerWidth >= 768 && { paddingLeft: '18.5rem' }) }}>
        <Navbar />
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{fontSize: '20px', fontWeight:'bold',justifyContent:'center',width:'100%',textAlign: 'center', ...(window.innerWidth >= 768 && { fontSize: '30px', fontWeight:'bold',justifyContent:'center',width:'100%',textAlign: 'center' })}}>Explore the power of AI with CodeCrafter</h2>
          <p style={{fontSize: '15px', fontWeight:'lighter',justifyContent:'center',width:'100%',textAlign: 'center', ...(window.innerWidth >= 768 && { fontSize: '20px', fontWeight:'lighter',justifyContent:'center',width:'100%',textAlign: 'center' })}}>
            Chat with the Smartest AI - Experience the power of AI
          </p>
        </div>
        <div style={{paddingLeft: '5rem', paddingRight: '5rem' , ...(window.innerWidth >= 768 && {paddingLeft: '1rem', paddingRight: '1rem'}),}}>
          
          {
            tools.map((tool) => (
              <Link to={tool.href}>
              <Card key={tool.href} style={styles} className="hover-shadow">
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', }}>
                  <div style={{padding: '0.5rem', width: 'fit-content', borderRadius: '0.375rem', backgroundColor: tool.bgColor , }}>
                    <tool.icon style={{width: '2rem', height: '2rem', color: tool.color}} />
                  </div>
                  <div style={{fontWeight: '700'}}>
                    {tool.label}
                  </div>
                </div>
                <ArrowRight style={{ width: '2.5rem', height: '1.25rem' }} />
                
              </Card>
              </Link>
            ))
          }
        </div>
        {/* <Heading 
          title="Conversation"
          description="Our most advanced conversation model."
          icon={MessageSquare}
          iconColor="#7c3aed"
          bgColor="rgba(124, 58, 237, 0.1)" 
        /> */}
      </main>
    </div>
  );
}
