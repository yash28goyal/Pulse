import React from 'react'

import { FaBars, FaSearch, FaBell } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 shadow-md fixed top-0 z-10 w-full h-15">
      <h1 className="text-3xl font-bold text-orange-500 italic">PULSE</h1>
      <nav className="hidden md:flex gap-6 text-gray-700">
        <a href="#">Home</a>
        <a href="#">Catalogs</a>
        <a href="#">Blog</a>
        <a href="#">Collections</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="flex gap-4 items-center text-xl">
        <FaSearch className="text-gray-700 cursor-pointer" />
        <FaBell className="text-gray-700 cursor-pointer" />
        <FaBars className="md:hidden text-gray-700 cursor-pointer" />
      </div>
    </header>
  )
}

export default Header