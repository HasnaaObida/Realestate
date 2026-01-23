"use client";

import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
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
      .catch((err) => console.log(err));
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
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-72 bg-[url('/hero-properties.jpg')] bg-cover bg-center mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find Your Next <span className="text-yellow-400">Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl mt-2 text-gray-200">
            Explore all premium properties for sale and rent
          </p>

          <div className="flex mt-6 justify-center max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by title or location..."
              className="flex-1 p-3 rounded-l-full outline-none text-black shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-yellow-500 px-6 rounded-r-full text-white font-semibold hover:bg-yellow-600 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 mb-10 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="City"
          className="p-3 border rounded-full focus:ring-yellow-500 focus:border-yellow-500 flex-1"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select
          className="p-3 border rounded-full focus:ring-yellow-500 focus:border-yellow-500"
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
          className="p-3 border rounded-full focus:ring-yellow-500 focus:border-yellow-500"
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
          <p className="text-center text-gray-500 col-span-full">
            No properties found.
          </p>
        )}
      </section>
    </main>
  );
}
