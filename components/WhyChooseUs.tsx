"use client";
import React from "react";
import { FaShieldAlt, FaHome, FaUsers, FaHandshake, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "The RealEstate Advantage",
      description:
        "We're committed to making your property search seamless and successful.",
      icon: <FaHome size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Trusted & Secure",
      description:
        "All our listings are verified and legally compliant for your peace of mind.",
      icon: <FaShieldAlt size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Wide Selection",
      description:
        "From cozy studios to luxurious villas, find properties that match your dreams.",
      icon: <FaUsers size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Expert Guidance",
      description:
        "Our experienced agents provide personalized support throughout your journey.",
      icon: <FaHandshake size={28} className="text-yellow-500 mb-4" />,
    },
    {
      title: "Best Value",
      description:
        "Competitive pricing and exclusive deals you won't find anywhere else.",
      icon: <FaDollarSign size={28} className="text-yellow-500 mb-4" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the benefits of working with RealEstate.
        </p>

        {/* Grid des avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              {item.icon}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
