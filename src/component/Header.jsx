// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">AnyTxn</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
