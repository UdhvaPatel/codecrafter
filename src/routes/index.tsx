
import { LandingHero } from "@/components/landing-components/landing-hero";
import { LandingNavbar } from "@/components/landing-components/landing-navbar";
// import LandingSection1 from "@/components/landing-components/landing-section-1";
// import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <main style={{height: "100%", backgroundColor: "#111827", overflow: "auto" }}>
      <div style={{ marginLeft: '1%', marginRight: '0%', maxWidth: '100%', height: '100%' }}>
        <div style={{height: "100%" , width:'100%'}}>
          <LandingNavbar />
          <LandingHero />
          {/* <LandingSection1 /> */}
        </div>
      </div>
    </main>
  )
}