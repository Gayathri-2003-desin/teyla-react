import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🌫️ Glassy black smoky background */}
      <div className="backdrop-blur-lg bg-black/50 text-white shadow-lg border-b border-white/10 transition-all duration-300">
        <div className="flex justify-between items-center px-5 md:pr-[80px] md:pl-0 py-3">
          {/* 🏷️ Logo (hidden only on small screens) */}
          <img
            className="w-[210px] h-[80px] object-contain hidden sm:block"
            src="/images/s-logo.png"
            alt="Logo"
          />

          {/* 🧭 Desktop Menu */}
          <nav className="hidden md:flex gap-10 text-[20px] items-center">
            <p className="cursor-pointer hover:text-gray-300 transition">Where to Go</p>
            <p className="cursor-pointer hover:text-gray-300 transition">Experiences</p>
          </nav>

          {/* 🧭 Contact Button (Desktop only) */}
    <button
  className="hidden md:inline border border-white p-1 bg-[#014D4E] text-white font-medium rounded-full px-5 py-2.5 
             text-[16px] cursor-pointer transition duration-300 
             hover:bg-[#016B6C]"
>
  Contact Us
</button>

          {/* 📞 + 🍔 Mobile Icons (visible only on small screens) */}
          <div className="flex items-center justify-between w-full sm:w-auto md:hidden">
            {/* 📞 Call Icon */}
            <a
              href="tel:+911234567890"
              className="flex items-center justify-center text-white rounded-full p-2"
            >
              <Phone size={24} className="text-white" />
            </a>

            {/* 🍔 Menu Toggle */}
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        {isOpen && (
          <div className="flex flex-col items-center gap-5 bg-black/70 backdrop-blur-lg py-6 md:hidden">
            <p className="text-lg cursor-pointer hover:text-gray-300 transition">
              Where to Go
            </p>
            <p className="text-lg cursor-pointer hover:text-gray-300 transition">
              Experiences
            </p>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
