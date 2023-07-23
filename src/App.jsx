import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Hero, Experience, Feedbacks, Navbar, Works, StarsCanvas ,TabLinks,BlogPage
} from "./components";

import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Experience />} />
      </Routes>
    </BrowserRouter>


   

  );
}

export default App;

