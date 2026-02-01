"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f2f2a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 gap-y-8 md:gap-y-0">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
              RE
            </div>
            <span className="text-2xl font-bold text-white">
              Real<span className="text-yellow-500">Estate</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Discover premium properties for sale and rent.
            We help you find your dream home with confidence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out cursor-pointer">Careers</li>
            <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out cursor-pointer">Blog</li>
            <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to get latest property updates.
          </p>
          <div className="flex rounded-lg overflow-hidden border border-gray-700 max-w-xs px-75">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 text-gray-900 placeholder-gray-400 outline-none"
            />
            <button className="bg-yellow-500 px-7 py-2 text-white font-semibold hover:bg-yellow-600 transition-all duration-300 ease-in-out shadow-md min-w-[80px]">
              Send
            </button>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
}
