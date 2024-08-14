"use client";

import  { useEffect, useState } from 'react';
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './sidebar';

export default function MobileSidebar(){
    //for error ... start
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    //for error ... end
    return(
        <>
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" style={{ display: window.innerWidth >= 768 ? 'none' : 'block' }}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} style={{padding:'0px'}}>
                <Sidebar />
            </SheetContent>
        </Sheet>
        </>
    )
}