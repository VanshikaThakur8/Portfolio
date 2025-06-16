import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; 

import './App.css';

import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
         <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
