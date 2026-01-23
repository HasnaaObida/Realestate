"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[url('https://res.cloudinary.com/dyluyp1lj/image/upload/v1769160414/todd-kent-178j8tJrNlc-unsplash_bw44dz.jpg')] bg-cover bg-center">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu centré */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col justify-center h-full text-center text-white">
        {/* Badge */}
        <span className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-full text-sm mb-4 inline-block">
          Premium Properties Across France
        </span>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Perfect <span className="text-yellow-400">Dream Home</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
          Discover exceptional properties for sale and rent. From cozy apartments
          to magnificent villas, find your ideal home with us.
        </p>

        {/* Search bar */}
        <div className="flex max-w-xl mx-auto bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search by city, address, or property type..."
            className="flex-1 p-4 text-black outline-none"
          />
          <button className="bg-yellow-500 px-6 text-white font-semibold hover:bg-yellow-600 transition">
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-12 text-gray-200">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
            <p>Properties</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">200+</p>
            <p>Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
