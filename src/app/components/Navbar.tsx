"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { name: "HOME", path: "/" },
    { name: "RECIPES", path: "/recipes" },
    { name: "COOKING TIPS", path: "/cooking-tips" }, // ✅ Corrected Route
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="bg-gray-100 border border-gray-400 rounded-full shadow-md mt-6 w-full md:max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img src="/images/logo.jpeg" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-lg font-bold text-black">Cooks Delight</span>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path}>
              <span className="text-gray-500 font-semibold hover:text-black hover:border-b-2 hover:border-red-500 transition duration-300 px-2 py-1">
                {route.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side: Search and Subscribe */}
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-red-500 transition duration-300">
          <FaSearch size={18} />
        </button>
        <button className="text-black border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white transition duration-300">
          Subscribe
        </button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button className="md:hidden text-black p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-100 shadow-md rounded-md mt-2 flex flex-col space-y-2 p-4 md:hidden">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.path}>
                <span className="block text-gray-500 text-center font-semibold hover:text-black transition duration-300 py-2">
                  {route.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
