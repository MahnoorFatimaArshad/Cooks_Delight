import React from 'react';

const Footer = () => {
  return (
    <footer className="  bg-black rounded-xl py-6">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12 mr-3 " />
          <span className=" text-1xl text-white">Cooks<br/>Delight</span>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="flex space-x-6">
          <a href="#" className="text-white">
            HOME <span className="text-gray-300">|</span>
          </a>
          <a href="#" className="text-white">
            RECIPE <span className="text-gray-300">|</span>
          </a>
          <a href="#" className="text-white">
            COOKING TIPS <span className="text-gray-300">|</span>
          </a>
          <a href="#" className="text-white">
            ABOUT US <span className="text-gray-300">|</span>
          </a>
        </nav>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray ml-14 mr-14 mx-3 my-3"></div>

      {/* Bottom Section */}
      <div className="text-center font-bold text-blue-500 font-serif">
        <span className="text-orange-500">Mahnoor</span> Devs
      </div>
    </footer>
  );
};

export default Footer;
