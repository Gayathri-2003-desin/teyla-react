import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";   
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();  

  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div className="backdrop-blur-lg bg-black/50 text-white shadow-lg border-b border-white/10 transition-all duration-300">
        <div className="flex justify-between items-center px-5 md:pr-[80px] md:pl-0 py-3">

         
          {isHome ? (
            <img
              className="w-[210px] h-[80px] object-contain hidden sm:block"
              src="/images/s-logo.png"
              alt="Logo"
            />
          ) : (
            <Link to="/">
              <img
       className="w-[210px] h-[80px] object-contain hidden sm:block"
      src="/images/s-logo.png"
       alt="Logo"
              />
            </Link>
          )}

      
  
<nav className="hidden md:flex gap-10 text-[20px] items-center">
  <NavLink
    to="/where"
    className={({ isActive }) =>
      isActive
        ? "border-b-2 border-white pb-1"          
        : "hover:text-gray-300 transition"
    }
  >
    Where to Go
  </NavLink>

  <NavLink
    to="/experience"
    className={({ isActive }) =>
      isActive
        ? "border-b-2 border-white pb-1"        
        : "hover:text-gray-300 transition"
    }
  >
    Experiences
  </NavLink>
</nav>

   <button className="hidden md:inline border border-white p-1 bg-[#014D4E] text-white font-medium rounded-full px-5 py-2.5 hover:bg-[#016B6C]">
            Contact Us
          </button>

    
          <div className="flex items-center justify-between w-full sm:w-auto md:hidden">
            <a href="tel:+911234567890" className="p-2">
              <Phone size={24} className="text-white" />
            </a>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

        
            {isHome ? (
              <img
                className="w-[120px] h-[50px] object-contain sm:hidden ml-3"
                src="/images/s-logo.png"
                alt="Logo"
              />
            ) : (
              <Link to="/" className="ml-3 sm:hidden">
                <img
                  className="w-[120px] h-[50px] object-contain"
                  src="/images/s-logo.png"
                  alt="Logo"
                />
              </Link>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col items-center gap-5 bg-black/70 backdrop-blur-lg py-6 md:hidden">
            <Link to="/where" className="text-lg hover:text-gray-300">
              Where to Go
            </Link>
            <Link to="/Experience" className="text-lg hover:text-gray-300">
              Experiences
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
