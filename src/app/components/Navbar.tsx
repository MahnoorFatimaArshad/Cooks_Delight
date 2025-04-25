"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image"; // Use Next.js Image component for optimized images

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { name: "HOME", path: "/" },
    { name: "RECIPES", path: "/recipes" },
    { name: "COOKING TIPS", path: "/Cooking-Tips" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="bg-gray-100 border border-gray-300 rounded-full shadow-md mt-6 w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-2 relative z-50">
      
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo.jpeg"
          alt="Logo"
          width={40}
          height={40} // Adjust image size
          className="mr-2 rounded-full"
        />
        <span className="text-lg font-bold text-black leading-tight">Cooks Delight</span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6">
        {routes.map(({ name, path }) => (
          <li key={path}>
            <Link href={path}>
              <span className="text-gray-600 font-medium hover:text-black hover:border-b-2 hover:border-red-500 transition duration-300 px-2 py-1">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Search + Subscribe (Visible on desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-black hover:text-red-500 transition duration-300">
          <FaSearch size={18} />
        </button>
        <button className="text-black border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white transition duration-300">
          Subscribe
        </button>
      </div>

      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <button className="md:hidden text-black p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Dropdown (Visible on mobile) */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-100 shadow-lg rounded-md mt-2 flex flex-col space-y-2 p-4 md:hidden z-40">
          {routes.map(({ name, path }) => (
            <li key={path}>
              <Link href={path} onClick={() => setMenuOpen(false)}>
                <span className="block text-center text-gray-700 font-semibold hover:text-red-600 transition duration-300">
                  {name}
                </span>
              </Link>
            </li>
          ))}
          <li className="flex justify-center items-center space-x-4 pt-2 border-t border-gray-300 mt-2">
            <button className="text-black hover:text-red-500 transition duration-300">
              <FaSearch size={18} />
            </button>
            <button className="text-black border border-black px-3 py-1 rounded-full hover:bg-black hover:text-white transition duration-300">
              Subscribe
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
