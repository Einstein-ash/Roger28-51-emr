import React from "react";

import {
Team,
StarsCanvas
} from "../components";



export default function TeamComp() {
  return (
   
      <div className="relative z-0 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
      
          <div className="relative z-0">
           
            <Team />
            <StarsCanvas />
          </div>
        </div>
      </div>
  );
}
