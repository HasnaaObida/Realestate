"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      {/* Title */}
      <section className="max-w-3xl mx-auto text-center px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600">
          Have questions? Need help finding the perfect property? Send us a message and we’ll respond as soon as possible.
        </p>
      </section>

      {/* Form + Contact Info */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <label className="block">
            <span className="text-gray-700 font-medium">Full Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full p-4 border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Email Address</span>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-1 block w-full p-4 border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Message</span>
            <textarea
              rows={6}
              placeholder="How can we help you?"
              className="mt-1 block w-full p-4 border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-4 rounded-full hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-600">
              Got questions? We’re here to help!
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt size={24} className="text-yellow-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Our Office</h4>
              <p className="text-gray-600">123 Real Estate Ave, Casablanca, Morocco</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt size={24} className="text-yellow-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-600">+212 600 000 000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope size={24} className="text-yellow-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">contact@realestate.com</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 italic">
            Map Placeholder
          </div>
        </div>
      </section>
    </main>
  );
}
