"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function AdminProperties() {
  const [properties, setProperties] = useState([]);
  const [showDelete, setShowDelete] = useState(false); // control modal
  const [deleteId, setDeleteId] = useState<number | null>(null); // property to delete

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => setProperties(res.data))
      .catch(() => console.error("Failed to fetch properties"));
  }, []);

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      await axios.delete(`http://localhost:5000/properties/${deleteId}`);
      setProperties(properties.filter((p: any) => p.id !== deleteId));
      setShowDelete(false);
      setDeleteId(null);
    } catch {
      console.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Properties</h1>
        <Link
          href="/admin/properties/add"
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          + Add Property
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-gray-700 font-medium">Title</th>
              <th className="p-4 text-gray-700 font-medium">Price</th>
              <th className="p-4 text-gray-700 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p: any) => (
              <tr key={p.id} className="border-t hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-800">{p.title}</td>
                <td className="p-4 text-gray-600">{p.price} MAD</td>
                <td className="p-4 flex space-x-2">
                  <Link
                    href={`/admin/properties/${p.id}`}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setDeleteId(p.id);
                      setShowDelete(true); // show modal
                    }}
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {properties.length === 0 && (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* DELETE MODAL */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
          showDelete ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowDelete(false)}
      >
        <div
          className={`bg-white rounded-2xl p-6 w-full max-w-md shadow-xl transform transition-transform duration-200 ${
            showDelete ? "scale-100" : "scale-90"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-3 text-gray-900">Delete Property</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this property? This action cannot be undone.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowDelete(false)}
              className="flex-1 border border-gray-300 py-2 rounded-xl font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmDelete}
              className="flex-1 bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
