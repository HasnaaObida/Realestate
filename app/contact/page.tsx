"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const propertyTitle = searchParams.get("property") || "";
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (propertyTitle) {
      setMessage(`Hi, I'm interested in "${propertyTitle}".`);
    }
  }, [propertyTitle]);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Title */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700">
          Have questions or interested in a property? Fill out the form below and we’ll get back to you quickly.
        </p>
      </section>

      {/* Form + Contact Info */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
          <label className="block">
            <span className="text-gray-800 font-semibold">Full Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full p-4 border border-gray-200 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 shadow-sm"
            />
          </label>

          <label className="block">
            <span className="text-gray-800 font-semibold">Email Address</span>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-2 w-full p-4 border border-gray-200 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 shadow-sm"
            />
          </label>

          <label className="block">
            <span className="text-gray-800 font-semibold">Message</span>
            <textarea
              rows={6}
              className="mt-2 w-full p-4 border border-gray-200 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 shadow-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-4 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-600">We’re here to help! Reach out via phone, email, or visit our office.</p>
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

          <div className="w-full h-64 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 italic">
            Map Placeholder
          </div>
        </div>
      </section>
    </main>
  );
}
