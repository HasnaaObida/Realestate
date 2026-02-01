"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "@/components/PropertyCard";

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

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("All Types");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => {
        setProperties(res.data);
        setFiltered(res.data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    let filteredList = properties;

    if (search)
      filteredList = filteredList.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase())
      );

    if (city)
      filteredList = filteredList.filter((p) =>
        p.location.toLowerCase().includes(city.toLowerCase())
      );

    if (type !== "All Types")
      filteredList = filteredList.filter((p) => p.type === type);

    if (maxPrice)
      filteredList = filteredList.filter((p) => Number(p.price) <= maxPrice);

    setFiltered(filteredList);
  }, [search, city, type, maxPrice, properties]);

  return (
    <main className="bg-gray-50 min-h-screen p-6">

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-[url('/hero-properties.jpg')] bg-cover bg-center mb-12 rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find Your Next <span className="text-yellow-400">Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl mt-2 text-gray-200">
            Explore premium properties for sale and rent
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-10 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search by title or location..."
          className="flex-1 p-3 rounded-full outline-none border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm text-gray-900 placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="p-3 border rounded-full flex-1 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm text-gray-900 placeholder-gray-400"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select
          className="p-3 border rounded-full focus:ring-yellow-500 focus:border-yellow-500 shadow-sm text-gray-900"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All Types</option>
          <option>Sale</option>
          <option>Rent</option>
        </select>
        <input
          type="number"
          placeholder="Max Price"
          className="p-3 border rounded-full flex-1 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm text-gray-900 placeholder-gray-400"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value ? Number(e.target.value) : "")
          }
        />
      </section>


      {/* Properties Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {filtered.length ? (
          filtered.map((p) => <PropertyCard key={p.id} property={p} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-12">
            No properties found.
          </p>
        )}
      </section>
    </main>
  );
}
