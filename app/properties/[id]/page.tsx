"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:5000/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!property) {
    return <p className="text-center mt-20 text-lg text-gray-700">Loading...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      {/* Back */}
      <Link
        href="/properties"
        className="text-yellow-500 font-medium hover:underline transition"
      >
        ← Back to properties
      </Link>

      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        {/* Image */}
        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {property.type && (
            <span className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold text-sm">
              {property.type}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{property.title}</h1>
          <p className="text-gray-700 mb-4">{property.location}</p>

          <p className="text-3xl font-bold text-yellow-500 mb-6">
            {property.price.toLocaleString()} MAD
          </p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="font-bold text-gray-900">{property.bedrooms || 0}</p>
              <p className="text-sm text-gray-600">Bedrooms</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="font-bold text-gray-900">{property.bathrooms || 0}</p>
              <p className="text-sm text-gray-600">Bathrooms</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="font-bold text-gray-900">{property.area || 0} m²</p>
              <p className="text-sm text-gray-600">Area</p>
            </div>
          </div>

          {/* CTA - Redirect to contact page */}
          <Link
            href="/contact"
            className="w-full text-center bg-yellow-500 text-white py-4 rounded-xl font-semibold hover:bg-yellow-600 transition mt-auto block"
          >
            Contact Agent
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Property Description</h2>
        <p className="text-gray-800 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
}
