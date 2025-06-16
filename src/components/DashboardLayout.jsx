import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const DashboardLayout = () => {
  return (
    <div className="h-full flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
