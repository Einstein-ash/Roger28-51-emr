import React from "react";

import {
  About,
 
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  TabLinks,
  Contact1,
  BlogPage,
} from "../components";


export default function Home() {
  return (
    <div className="h-screen">
      <div className='relative z-0 bg-primary'>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
            <div className='relative z-0'>
         
              <Hero />
              {/* <StarsCanvas />  */}
            </div>
          {/* <Hero_old />  */}
        </div>
        <div className='relative z-0'>
        {/* <TabLinks /> */}
        {/* <BlogPage /> */}
        <About />
        {/* <Experience /> */}
        
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
          {/* <Contact1 /> */}
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}
