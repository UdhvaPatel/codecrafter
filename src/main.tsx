import React from 'react'
import './styles.css';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

// Import the components
import IndexPage from './routes'
import ContactPage from './routes/contact'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import DashboardPage from './routes/dashboard'
import InvoicesPage from './routes/dashboard.invoices';
import Conversation from './routes/Pages/conversation';
// import ImageGeneration from './routes/Pages/captionGeneration';
import VideoGeneration from './routes/Pages/videoGeneration';
import CodeGeneration from './routes/Pages/codeGeneration';
import MusicGeneration from './routes/Pages/musicGeneration';
import Settings from './routes/Pages/settings';
import { ToastProvider } from './components/toaster-provider';
// import CaptionComponent from './routes/gemini/caption-component';
import CaptionGeneration from './routes/Pages/captionGeneration';

// import { UserButton } from '@clerk/clerk-react';



  

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> },
          { path: "/dashboard/conversation", element: <Conversation /> },
          { path: "/dashboard/caption", element: <CaptionGeneration /> },
          { path: "/dashboard/video", element: <VideoGeneration /> },
          { path: "/dashboard/code", element: <CodeGeneration /> },
          { path: "/dashboard/music", element: <MusicGeneration /> },
          { path: "/dashboard/settings", element: <Settings /> },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
      <ToastProvider />
      <RouterProvider router={router} />
  </React.StrictMode>,
)