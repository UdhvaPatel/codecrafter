
import { UserButton } from '@clerk/clerk-react';
import MobileSidebar from './mobile-sidebar';


export default function Navbar() {
    
    return(
        
        <div style={{display: 'flex', alignItems: 'center', padding: '16px' }}>
            <MobileSidebar />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <UserButton />            
            </div>
        </div>
        
        
    )
}
