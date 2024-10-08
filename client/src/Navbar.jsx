import React, { useState } from "react";
import { Link } from "react-router-dom";
import links from "./links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold">
            Auto Repair Shop
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
