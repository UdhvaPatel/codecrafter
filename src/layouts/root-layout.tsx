import {  Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header">
        <div>
          {/* <div>
            <p>Clerk + React + React Router App</p>
          </div> */}
          {/* <SignedIn>
            <div style={{width: '100%', justifyContent: 'right'}}>
            <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut> */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}