import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-100 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-orange-600">
          <NavLink to="/">Vanshika</NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden block"
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex gap-6 font-medium text-gray-700 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:flex-row flex-col px-6 md:px-0 transition-all duration-300 ease-in-out ${
            menuOpen ? 'top-16' : 'top-[-400px]'
          }`}
        >
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
          </li>
          <li>
            <NavLink to="/project" onClick={() => setMenuOpen(false)}>Project</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
