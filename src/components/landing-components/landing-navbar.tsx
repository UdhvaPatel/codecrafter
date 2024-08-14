"use client";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";


export const LandingNavbar = () => {
    return(
        <nav style={{ padding: '1rem', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between' , width: '100%' }}>
            <Link to={'/'} style={{display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', height: '2rem', width: '2rem', marginRight: '1rem' }}>
                    <img alt="Logo" src="./logo.png" />
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    CodeCrafter
                </h1>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem', marginRight: '1%' }}>
                <Link to={"/dashboard"}>
                    <Button variant={"outline"} style={{ borderRadius: '9999px', fontWeight: 'bold',backgroundImage: "linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)" }}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}