import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './sparkles.css';
import Contact from './contact';
import About from './about';
import TechAndProjects from './skills';
import NameSegment from './home';

//this will need to be rendered in a different location for mobile
const NavBar = () => {
  return (
    <main>
      <nav>
        <ul className='flex justify-end space-x-8 mr-12 mt-4 
        text-2xl text-slate-200'>
          <li className='add-hover'>
            <Link to="/">Home</Link>
          </li>
          <li className='add-hover'>
            <Link to="/about">About Me</Link>
          </li>
          <li className='add-hover'>
            <Link to="/skills">Skills</Link>
          </li>
          <li className='add-hover'>
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
        <Route path="/skills" element={<TechAndProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;