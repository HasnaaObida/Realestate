"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import PropertiesSection from "@/components/PropertiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import axios from "axios";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number | string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  type?: string;
};

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);

  // Fetch properties from JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Afficher seulement les 3 premières propriétés
  const topProperties = properties.slice(0, 3);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Properties Section (3 cards) */}
      <PropertiesSection properties={topProperties} />

      {/* View All Properties Button */}
      {properties.length > 3 && (
        <div className="text-center mt-12 mb-24">
          <a
            href="/properties"
            className="inline-block bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            View All Properties
          </a>
        </div>
      )}
      <WhyChooseUs />
    </main>
  );
}
