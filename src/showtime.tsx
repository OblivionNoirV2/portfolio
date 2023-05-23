import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './sparkles.css';
import Contact from './contact';
import About from './about';
import TechAndProjects from './skills';
import NameSegment from './home';
import GlassNavBar from './GlassNav';
//this will need to be rendered in a different location for mobile

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <GlassNavBar />}
      <Routes>
        <Route path="/" element={<NameSegment />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<TechAndProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;