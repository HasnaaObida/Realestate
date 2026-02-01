"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddPropertyPage() {
  const router = useRouter();

  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/properties", property);
    router.push("/admin/properties");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add New Property
          </h1>

          <Link
            href="/admin/properties"
            className="text-yellow-600 font-medium hover:underline"
          >
            ← Back
          </Link>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Title" name="title" onChange={handleChange} />
          <Input label="Location" name="location" onChange={handleChange} />
          <Input label="Price (MAD)" name="price" onChange={handleChange} />
          <Input label="Image URL" name="image" onChange={handleChange} />
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium text-gray-800">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-10 w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Create Property
        </button>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-800">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-gray-300 rounded-xl p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}
