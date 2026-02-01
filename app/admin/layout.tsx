"use client";

import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-yellow-500">Admin Panel</h2>

        <nav className="flex-1 space-y-2">
          <Link
            href="/admin"
            className="block py-2 px-3 rounded hover:bg-yellow-500 hover:text-black transition"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/properties"
            className="block py-2 px-3 rounded hover:bg-yellow-500 hover:text-black transition"
          >
            Properties
          </Link>
          <Link
            href="/admin/users"
            className="block py-2 px-3 rounded hover:bg-yellow-500 hover:text-black transition"
          >
            Users
          </Link>
          <Link
            href="/admin/categories"
            className="block py-2 px-3 rounded hover:bg-yellow-500 hover:text-black transition"
          >
            Categories
          </Link>
        </nav>

        <div className="mt-auto">
          <button className="w-full py-2 px-3 bg-red-500 hover:bg-red-600 rounded font-medium transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
