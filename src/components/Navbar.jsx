
import './Navbar.css';
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white bg-transparent">
      <div className="flex justify-between items-center px-6 md:px-14 py-4">
        {/* Logo */}
        <img
          className="w-[120px] h-[60px] object-contain"
          src="/images/s-logo.png"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-[20px] items-center">
          <p className="cursor-pointer hover:text-gray-300 transition">Where to Go</p>
          <p className="cursor-pointer hover:text-gray-300 transition">Experiences</p>
        </nav>

        {/* Contact Button (Visible on all screens) */}
        <button
          className="bg-[#014D4E] text-white font-medium rounded-full px-5 py-2.5 
                     text-[16px] border-0 cursor-pointer transition duration-300 
                     hover:bg-[#016B6C]"
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-5 bg-[#014D4E] py-6 md:hidden">
          <p className="text-lg cursor-pointer hover:text-gray-300 transition">
            Where to Go
          </p>
          <p className="text-lg cursor-pointer hover:text-gray-300 transition">
            Experiences
          </p>
        </div>
      )}
    </header>
  );
}

export default Navbar;
