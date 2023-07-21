import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Hero, Experience, Feedbacks, Hero_old, Navbar, Tech, Works, StarsCanvas ,TabLinks,Contact1,BlogPage
} from "./components";

import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/Roger28-51-emr/" element={<Home />} />
        {/* <Route path="/" element={<TabLinks />} /> */}

        <Route path="/blog" element={<Contact1 />} />
        <Route path="/projects" element={<Experience />} />
      </Routes>
    </BrowserRouter>


   

  );
}

export default App;

