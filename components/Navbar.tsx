"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-green-900 text-white rounded-lg flex items-center justify-center font-bold">
            RE
          </div>
          <span className="text-xl font-bold">
            Real<span className="text-yellow-500">Estate</span>
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/properties" className="hover:text-yellow-500 transition">
              Properties
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
          >
            Admin
          </Link>

          <Link
            href="/properties"
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition font-medium"
          >
            View Properties
          </Link>
        </div>
      </nav>
    </header>
  );
}
