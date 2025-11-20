import React, { useState } from "react";
import { Phone, Menu, X, Home } from "lucide-react";
import { Link, useLocation, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div className="backdrop-blur-lg bg-black/50 text-white shadow-lg border-b border-white/10 transition-all duration-300">

        {/* MAIN CONTAINER */}
        <div className="flex justify-between items-center px-3 sm:px-5 md:pr-[80px] py-3">

          {/* DESKTOP LOGO */}
          <div className="hidden md:block">
            {isHome ? (
              <img
                className="w-[210px] h-[80px] object-contain"
                src="/images/s-logo.png"
                alt="Logo"
              />
            ) : (
              <Link to="/">
                <img
                  className="w-[210px] h-[80px] object-contain"
                  src="/images/s-logo.png"
                  alt="Logo"
                />
              </Link>
            )}
          </div>

          {/* DESKTOP NAV LINKS */}
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

          {/* DESKTOP CONTACT BUTTON */}
          <div className="relative hidden md:inline-block text-left">
            <button
              onClick={() => setOpenContact(!openContact)}
              className="border border-white p-1 bg-[#014D4E] text-white font-medium rounded-full px-5 py-2.5 hover:bg-[#016B6C]"
            >
              Contact Us
            </button>

            {openContact && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-xl shadow-lg p-3 z-50">
                <button className="w-full flex items-center gap-3 text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-green-500"
                  >
                    <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.64 0 .44 5.2.44 11.6c0 2.04.52 4.04 1.52 5.8L0 24l6.76-1.92c1.68.92 3.52 1.4 5.44 1.4h.02c6.4 0 11.6-5.2 11.6-11.6a11.55 11.55 0 0 0-3.3-8.4z" />
                  </svg>
                  WhatsApp
                </button>

                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                  💬 Text Message
                </button>

                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                  📲 Request Call Back
                </button>
              </div>
            )}
          </div>

          {/* MOBILE NAVBAR (ONLY FOR SMALL SCREENS) */}
          <div className="flex md:hidden items-center justify-between w-full">

            {/* LEFT — HOME ICON */}
            {isHome ? (
              <Home size={28} className="text-white" />
            ) : (
              <Link to="/">
                <Home size={28} className="text-white" />
              </Link>
            )}

            {/* RIGHT SIDE — CONTACT + MENU WRAPPED TOGETHER */}
            <div className="flex items-center gap-3">

              {/* CALL ICON */}
              <button
                onClick={() => {
                  setOpenContact(!openContact);
                  setIsOpen(false);
                }}
                className="p-2 rounded-md border border-white bg-[#014D4E]"
              >
                <Phone size={22} className="text-white" />
              </button>

              {/* MENU ICON */}
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setOpenContact(false);
                }}
                className="p-2 rounded-md"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="flex flex-col items-center gap-5 bg-black/70 backdrop-blur-lg py-6 md:hidden">
            <Link to="/where" className="text-lg hover:text-gray-300">
              Where to Go
            </Link>
            <Link to="/experience" className="text-lg hover:text-gray-300">
              Experiences
            </Link>
          </div>
        )}

        {/* MOBILE CONTACT DROPDOWN */}
        {openContact && (
          <div className="md:hidden bg-white text-black rounded-xl shadow-lg p-4 w-[85%] mx-auto mb-4">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              WhatsApp
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Text Message
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Request Call Back
            </button>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;
