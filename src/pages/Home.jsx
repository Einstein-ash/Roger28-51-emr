import React from "react";

import {
  TabLinks,
  Hero,
  Navbar,
  StarsCanvas,
 
  Contact,
  UpcomingWorkshops,
  BlogPage,
} from "../components";

export default function Home() {
  return (
        <div className=" bg-cover bg-no-repeat bg-center">
    <div className="h-screen">
      <div className="relative z-0 bg-primary">
          <Navbar />
          <div className="relative  z-0">
            <div  className="relative  bg-hero-pattern bg-cover bg-no-repeat bg-center z-0">
              <Hero />
            </div>
      
        </div>
            <TabLinks />
            <UpcomingWorkshops />
            <Contact />

            <StarsCanvas />
          </div>
      </div>
    </div>
  );
}


// ......
// 