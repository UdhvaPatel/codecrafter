"use client";


import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button } from '../ui/button';
import { useUser } from '@clerk/clerk-react';

export const LandingHero = () => {
    const { user } = useUser();
    const userName = user ? `${user.firstName} ${user.lastName}` : '';
    // const userName = user ? `${user.username} ` : '';
    
    return(
        <div style={{ color: 'white', fontWeight: '1000', paddingTop: '9rem', paddingBottom: '9rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', }} >
            <h1 style={{fontSize: '50px', color:'lightblue'}}>
            Hello {userName}, Welcome to The CodeCrafter!
            {/* <Typewriter
                    options={{
                        strings: [userName],
                        autoStart: true,
                        loop: true,
                        
                    }}
                />     */}
            </h1>
            <div style={{ fontSize: '40px', display: 'flex', flexDirection: 'column', gap: '0rem',  ...(window.innerWidth <= 768 && { fontSize: '1.5rem' })  }}>
                <h1>
                Unlock the full potential of AI with the best tools of
                </h1>
                <div style={{ backgroundColor: '#4158D0', backgroundClip: 'text', color: 'transparent',  WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(178deg, #4158D0 0%, #C850C0 48%, #FFCC70 99%)' }} >
                <Typewriter
                    options={{
                        strings: [
                            'Conversation.', 
                            'Code Generation.',
                            'Caption Generation.',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 25
                    }}
                />  
                </div>
            </div>
            <div style={{ fontSize: '16px', fontWeight: "300",  color: '#9CA3AF', marginBottom:'8px' }}>
                Connect with AI using CodeCrafter
            </div>
            <div>
                <Link to={'/dashboard'}>
                    <Button style={{ fontSize:'15px' , margin: '3px' , padding: '25px',borderRadius: '9999px', fontWeight:'bold' ,backgroundImage: 'linear-gradient(33deg, #4158D0 0%, #C850C0 38%, #FFCC70 99%)' }}>
                        Start Generating For FREE
                    </Button>
                </Link>
            </div>
        </div>
    )
}
