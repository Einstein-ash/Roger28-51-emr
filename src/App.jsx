import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { TabLinks, Hero, Navbar, StarsCanvas ,BlogPage,Team,SponsorPage
} from "./components";

import Home from './pages/Home';
import GalleryComp from './pages/Gallery';
import TeamComp from './pages/Team';


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/Roger28-51-emr/" element={<Home />} />

        <Route path="/Roger28-51-emr/team" element={<TeamComp />} />
        <Route path="/Roger28-51-emr/sponser" element={<SponsorPage />} />
   

        <Route path="/Roger28-51-emr/gallery" element={<GalleryComp/>} />
      </Routes>

    </BrowserRouter>



  );
}

export default App;

