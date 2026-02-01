"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function AdminPropertyDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/properties/${id}`);
        setProperty(res.data);
      } catch {
        console.error("Failed to fetch property.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/properties/${id}`, property);
    } catch {
      console.error("Update failed.");
    }
  };

  // DELETE بدون popup
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/properties/${id}`);
      router.push("/admin/properties"); // redirect مباشرة بعد الحذف
    } catch {
      console.error("Delete failed.");
    }
  };

  if (loading) return <p className="text-center mt-20 text-lg">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#f8f9fb] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Property</h1>
          <Link
            href="/admin/properties"
            className="text-sm font-medium text-yellow-600 hover:underline"
          >
            ← Back
          </Link>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Title" name="title" value={property.title} onChange={handleChange} />
          <Input label="Location" name="location" value={property.location} onChange={handleChange} />
          <Input label="Price (MAD)" name="price" value={property.price} onChange={handleChange} />
          <Input label="Image URL" name="image" value={property.image} onChange={handleChange} />
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium text-gray-800">Description</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={5}
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-10">
          <button
            type="button"
            onClick={handleUpdate}
            className="flex-1 bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Update Property
          </button>
          <button
            type="button"
            onClick={handleDelete} // delete مباشرة بدون popup
            className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-800">{label}</label>
      <input
        {...props}
        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}
