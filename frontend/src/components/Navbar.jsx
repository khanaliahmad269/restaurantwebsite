import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-red-600">Restaurant</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/menu" className="text-gray-700 hover:text-red-600">Menu</Link>
          <Link to="/locations" className="text-gray-700 hover:text-red-600">Locations</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;