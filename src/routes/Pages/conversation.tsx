"use client";

// import * as z from "zod";
import Heading from "@/components/heading";
// import MainSidebar from "@/components/main-sidebar";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
// import { formSchema } from "../constants";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";

import "@/styles.css"
// import { Button } from "@/components/ui/button";
import ChatComponent from "../gemini/chat-component";
import ErrorBoundary from "@/components/errorBoundary";

export default function Conversation(){
  

    //form
    // const form = useForm<z.infer<typeof formSchema>>({
    //   resolver: zodResolver(formSchema),
    //   defaultValues: {
    //     prompt: ""
    //   }
    // });

    // const isLoading = form.formState.isSubmitting;

    // const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //   console.log(values);
    // };
    //For Mobile and 
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

    //style
    // const style = {
    //   borderRadius: '0.5rem',
    //   borderWidth: '1px',
    //   borderColor: '#e5e7eb',
    //   width: '100%',
    //   padding: isMediumScreen ? '1rem 1.5rem' : '1rem 0.75rem', // Adjust padding for medium screens
    //   display: 'grid',
    //   gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    //   gap: '0.5rem',
    // };
    return (
        <div style={{ height: '100%', position: 'relative' }}>

        {isMediumScreen && (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, width: '18rem' }}>
            <Sidebar />
            </div>
        )}
        
        <main style={{ ...(window.innerWidth >= 768 && { paddingLeft: '18.5rem' }) }}>
            <Navbar />
            <Heading 
          title="Conversation"
          description="Our most advanced conversation model."
          icon={MessageSquare}
          iconColor="#7c3aed"
          bgColor="rgba(124, 58, 237, 0.1)" 
        />
        <div style={{
          paddingLeft: window.innerWidth >= 1024 ? '2rem' : '1rem',
          paddingRight: window.innerWidth >= 1024 ? '2rem' : '1rem',
        }}>
          <ErrorBoundary>
          <ChatComponent />
          </ErrorBoundary>
          {/* <div>
            <Form  {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                style={style} 
                // onFocus={() => (style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)')}
                // onBlur={() => (style.boxShadow = '')}
              >
                <FormField 
                  name="prompt"
                  render={({ field }) => (
                    <FormItem style={{gridColumn: window.innerWidth >= 1024 ? 'span 10 / span 10' : 'span 12 / span 12',}}>
                      <FormControl style={{margin: 0, padding: 0,}}>
                        <Input 
                          style={{border: 0, outline: 'none', boxShadow: 'none',}}
                          className="focus-visible-ring-transparent"
                          disabled={isLoading}
                          placeholder="How to convert USD to INR?"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button style={{gridColumn: window.innerWidth >= 1000 ? 'span 2 / span 2' : 'span 12 / span 12', width: '100%'}} disabled={isLoading}>
                  Generate
                </Button>
              </form>
              
            </Form>
          </div> */}

          {/* <div style={{marginTop: '1rem', marginBottom: '1rem',display: 'flex', flexDirection: 'column',}}>
            Chat Content Here...
          </div> */}

        </div>
        </main>

        </div>
    )
}