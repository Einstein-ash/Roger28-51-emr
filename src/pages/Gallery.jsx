import React from "react";

import {
Gallery,
StarsCanvas
} from "../components";



export default function GalleryComp() {
  return (
   
      <div className="relative z-0 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
      
          <div className="relative z-0">
           
            <Gallery />
            <StarsCanvas />
          </div>
        </div>
      </div>
  );
}
