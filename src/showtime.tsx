import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './sparkles.css';
import Contact from './contact';
import About from './about';
import Projects from './projects';
import NameSegment from './home';

//this will need to be rendered in a different location for mobile
const NavBar = () => {
  return (
    <main>
      <nav>
        <ul className='flex justify-end space-x-8 mr-12 mt-4 
        text-xl text-slate-200'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};
//Navbar is always there, the rest changes 
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<NameSegment />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;