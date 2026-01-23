"use client";

import Image from "next/image";
import { FaShieldAlt, FaHome, FaUsers, FaHandshake, FaDollarSign } from "react-icons/fa";

export default function AboutPage() {
  const advantages = [
    {
      title: "Modern Platform",
      description:
        "Built with modern technologies to ensure speed, scalability and performance.",
      icon: <FaHome size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Smart Search",
      description:
        "Advanced filters and intelligent search to find properties faster.",
      icon: <FaUsers size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "AI Assistance",
      description:
        "AI-powered tools to generate and enhance property descriptions.",
      icon: <FaHandshake size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Trusted & Secure",
      description:
        "All our listings are verified and legally compliant for your peace of mind.",
      icon: <FaShieldAlt size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Best Value",
      description:
        "Competitive pricing and exclusive deals you won't find anywhere else.",
      icon: <FaDollarSign size={28} className="text-yellow-500 mb-4" />,
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src="https://res.cloudinary.com/dyluyp1lj/image/upload/v1769160407/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash_ymrgrb.jpg"
          alt="About RealEstate"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <span className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-full text-sm mb-4">
            About RealEstate
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Help You Find <span className="text-yellow-400">The Perfect Property</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            RealEstate is a modern platform designed to simplify the process of buying, renting, 
            and managing properties with a smooth and intuitive experience.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            We are a passionate team of developers and real estate enthusiasts 
            building digital solutions to modernize the property market.
          </p>
          <p className="text-gray-600">
            Our mission is to connect people with their future homes using 
            technology, simplicity, and performance.
          </p>
        </div>
        <div className="w-full h-80 md:h-96 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://res.cloudinary.com/dyluyp1lj/image/upload/v1769160407/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash_ymrgrb.jpg"
            alt="Team RealEstate"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Stats / Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-yellow-500 mb-2">500+</h3>
            <p className="text-gray-600">Listed Properties</p>
          </div>
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-yellow-500 mb-2">200+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-yellow-500 mb-2">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the advantages of choosing RealEstate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Next Home?</h2>
        <p className="mb-8 text-lg md:text-xl">Start exploring the best properties today.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-yellow-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
