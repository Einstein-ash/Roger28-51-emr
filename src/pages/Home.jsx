import React from "react";

import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,

  Works,
  StarsCanvas,
  TabLinks,

  BlogPage,
} from "../components";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="relative z-0 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            {/* <Particles />  */}
            <About />
            <StarsCanvas />
          </div>
        </div>
        <div className="relative z-0">
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </div>
  );
}
