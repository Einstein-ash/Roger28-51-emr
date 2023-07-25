import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { TabLinks, Hero, Navbar, StarsCanvas ,BlogPage
} from "./components";

import Home from './pages/Home';
import GalleryComp from './pages/Gallery';


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/Roger28-51-emr/" element={<Home />} />

        {/* <Route path="/Roger28-51-emr/blog" element={<BlogPage />} /> */}

        <Route path="/Roger28-51-emr/gallery" element={<GalleryComp/>} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;

