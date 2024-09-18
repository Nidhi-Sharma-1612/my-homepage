import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Hello Bar */}
      <div className="bg-green-600 text-white p-2 text-center">
        <p className="text-sm">
          <a
            href="https://dashboard.gelato.com/catalogue/categories"
            className="hover:underline"
          >
            FREE SHIPPING for orders over $300. Order today!
          </a>
        </p>
      </div>

      {/* Main Header - First Row */}
      <nav className="flex flex-col items-start justify-between py-4 lg:px-8 max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <img
              src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg"
              alt="Gelato Logo"
              className="h-10"
            />
          </a>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/in/api/signup"
              className="bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-900 transition"
            >
              Sign Up for Free
            </a>
            <a
              href="/in/api/login"
              className="border border-black text-black py-2 px-4 rounded-md hover:bg-gray-200 transition"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="block md:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Second Row for Nav Links */}
        <div className="hidden md:flex w-full mt-4">
          <ul className="flex w-full space-x-8 font-medium text-gray-700 py-2 justify-start">
            <li>
              <a href="/in/custom" className="hover:text-gray-900 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Start Selling
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Tools and Apps
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Resources
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-700">
            <li>
              <a href="/in/custom" className="hover:text-gray-900 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Start Selling
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Tools and Apps
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Resources
              </a>
            </li>
            <li>
              <a
                href="/in/api/signup"
                className="bg-black text-white py-2 px-6 rounded-md shadow hover:bg-gray-900 transition"
              >
                Sign Up for Free
              </a>
            </li>
            <li>
              <a
                href="/in/api/login"
                className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-200 transition"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
