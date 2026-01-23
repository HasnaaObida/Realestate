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
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back */}
      <Link href="/properties" className="text-yellow-500 font-medium">
        ← Back to properties
      </Link>

      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        {/* Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
        />

        {/* Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-500 mb-4">{property.location}</p>

          <p className="text-3xl font-bold text-yellow-500 mb-6">
            {property.price} MAD
          </p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="font-bold">{property.bedrooms}</p>
              <p className="text-sm text-gray-500">Bedrooms</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="font-bold">{property.bathrooms}</p>
              <p className="text-sm text-gray-500">Bathrooms</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="font-bold">{property.area} m²</p>
              <p className="text-sm text-gray-500">Area</p>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-yellow-500 text-white py-4 rounded-xl font-medium hover:bg-yellow-600 transition">
            Contact Agent
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Property Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>
    </div>
  );
}
