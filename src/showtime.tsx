import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './sparkles.css';
import Contact from './contact';
import About from './about';
import Projects from './projects';
//import './index.css';
//import Home from './Home';
const NameSegment = () => {
  return (
    <main>
      <h1>
        Benjamin Donahue
      </h1>
      <p>
        Frontend Web Developer
      </p>
    </main>
  );
};
//this will need to be rendered in a different location for mobile
const NavBar = () => {
  return (
    <main>
      <nav>
        <ul>
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
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<NameSegment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;