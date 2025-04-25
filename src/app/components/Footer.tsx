'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black rounded-xl py-6 px-4">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-white text-xl leading-tight font-semibold">
            Cooks<br />Delight
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
          <Link href="/" className="hover:text-orange-500">HOME</Link>
          <Link href="/recipes" className="hover:text-orange-500">RECIPE</Link>
          <Link href="/tips" className="hover:text-orange-500">COOKING TIPS</Link>
          <Link href="/about" className="hover:text-orange-500">ABOUT US</Link>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-white text-xl">
          <Link href="#"><FaFacebookF className="hover:text-orange-500" /></Link>
          <Link href="#"><FaYoutube className="hover:text-orange-500" /></Link>
          <Link href="#"><FaInstagram className="hover:text-orange-500" /></Link>
          <Link href="#"><FaTiktok className="hover:text-orange-500" /></Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 mb-4"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-blue-500 font-serif font-bold">
        <span className="text-orange-500">Mahnoor</span> Devs
      </div>
    </footer>
  );
};

export default Footer;
