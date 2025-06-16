import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-100 shadow-md sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-orange-600">
          <NavLink to="/">Vanshika</NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl text-orange-700"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/project">Project</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-orange-600">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            &times;
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 font-medium text-gray-700">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink></li>
          <li><NavLink to="/project" onClick={() => setMenuOpen(false)}>Project</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


