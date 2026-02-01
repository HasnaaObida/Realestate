"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import { GiResize } from "react-icons/gi";

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

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="relative h-56 group overflow-hidden rounded-t-2xl">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {property.type && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            {property.type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{property.title}</h3>
        <p className="mb-3 text-gray-700">{property.location}</p>
        <p className="text-yellow-500 font-semibold text-lg mb-4">
          {typeof property.price === "number"
            ? property.price.toLocaleString()
            : property.price}{" "}
          MAD
        </p>

        {/* Infos */}
        <div className="flex items-center gap-4 text-gray-700 mb-6">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <FaBed /> {property.bedrooms}
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <FaBath /> {property.bathrooms}
            </div>
          )}
          {property.area && (
            <div className="flex items-center gap-1">
              <GiResize /> {property.area} m²
            </div>
          )}
        </div>

        {/* Button */}
        <Link
          href={`/properties/${property.id}`}
          className="mt-auto block text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
