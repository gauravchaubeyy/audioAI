import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate(`/usemyvoice`);
  };

  // Determine whether to show the Navbar based on the current route
  const showNavbar = location.pathname !== "/usemyvoice";

  return (
    <div className={showNavbar ? "fixed top-0 left-0 right-0 z-50 flex justify-around items-center gap-10 bg-black  min-h-[80px]" 
                               : "fixed top-0 left-0 right-0 z-50 gap-10 bg-black  min-h-[80px] pt-6 pl-60"}>
    <h1 className="text-2xl font-bold text-teal-700">audoAI</h1>

      {showNavbar && (
        <>
        <ul className="flex gap-4 p-4">
          <li className="hover:text-teal-600 text-white text-lg">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-teal-600 text-white text-lg">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-teal-600 text-white text-lg">
            <Link to="register" smooth={true} duration={500}>
              Register
            </Link>
          </li>
          <li className="hover:text-teal-600 text-white text-lg">
            <Link to="demo" smooth={true} duration={500}>
              Demo
            </Link>
          </li>
          <li className="hover:text-teal-600 text-white text-lg">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
    
        <button
          onClick={handleButtonClick}
          className="hover:bg-teal-700 text-teal-700 hover:text-white px-4 py-2 rounded-lg shadow-md text-xl border border-teal-700"
        >
          UseMyVoice <span className="ml-2">&#10132;</span>
        </button>
        </>
      )}
    </div>
  );
}
