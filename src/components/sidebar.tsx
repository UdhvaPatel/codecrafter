"use client";

// import React ,{ useEffect, useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { Code,  LayoutDashboard, LucideChartNoAxesGantt, MessagesSquare, } from 'lucide-react';

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: { color: "#0ea5e9" }, // text-sky-500
    },
    {
        label: "Conversation",
        icon: MessagesSquare,
        href: "/dashboard/conversation",
        color: { color: "#7c3aed" }, // text-violet-500
    },
    
    // {
    //     label: "Video Generation",
    //     icon: VideoIcon,
    //     href: "/dashboard/video",
    //     color: { color: "#ea580c" }, // text-orange-700
    // },
    // {
    //     label: "Music Generation",
    //     icon: Music,
    //     href: "/dashboard/music",
    //     color: { color: "#10b981" }, // text-emerald-500
    // },
    {
        label: "Code Generation",
        icon: Code,
        href: "/dashboard/code",
        color: { color: "#16a34a" }, // text-green-700
    },
    {
        label: "Caption Generation",
        icon: LucideChartNoAxesGantt,
        href: "/dashboard/caption",
        color: { color: "#ec4899" }, // text-pink-700
    },
    // {
    //     label: "Settings",
    //     icon: Settings,
    //     href: "/dashboard/settings",
    //     color: {},
    // },
];

const Sidebar = () => {
    const location = useLocation();
    const initialStyle = {
        fontSize: '0.875rem',
        display: 'flex',
        padding: '12px',
        width: '100%',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#e4e4e7',
        fontWeight: '500',
        cursor: 'pointer',
        borderRadius: '8px',
        backgroundColor: 'rgb(17, 24, 39)',
        transition: 'background-color 0.2s, color 0.2s'
      };
    //   const hoverStyle = {
    //     backgroundColor: '#ffffff1a',
    //     color: 'white'
    //   };

    //   const activeStyle = {
    //     backgroundColor: '#ffffff1a',
    //     color: 'white'
    // };


    return (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#111827', color: 'white' }}>
            <div style={{ padding: '8px', flex: 1 }}>
                <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px', marginBottom: '56px', }}>
                    <div style={{ position: 'relative', width: '32px', height: '32px', marginRight: '16px' }}>
                        <img alt="Logo" src="/logo.png" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        CodeCrafter
                    </h1>
                </Link>
                <div style={{ marginTop: '8px' }}>
                    {routes.map((route) => (
                        <Link
                            to={route.href}
                            key={route.href}
                            
                            style={{ 
                                ...initialStyle, 
                                ...(location.pathname === route.href 
                                  ? { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' } 
                                  : { color: '#a1a1aa' } 
                                ) 
                              }}
                              
                              
                            // onMouseOver={(e) => {
                            // e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
                            // e.currentTarget.style.color = hoverStyle.color;
                            // }}
                            // onMouseOut={(e) => {
                            // e.currentTarget.style.backgroundColor = initialStyle.backgroundColor;
                            // e.currentTarget.style.color = initialStyle.color;
                            // }}
                            
                        >
                            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                <route.icon style={{ height: '20px', width: '20px', marginRight: '12px', ...route.color }} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
