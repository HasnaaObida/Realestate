"use client";

import { useState } from "react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar fixe */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-5 font-bold text-xl text-yellow-600">Mon Dashboard</div>
        <nav className="flex-1 px-5 flex flex-col gap-2 mt-4">
          <a
            href="#"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 transition font-medium"
          >
            🏠 Vue d'ensemble
          </a>
          <a
            href="#"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 transition font-medium"
          >
            📊 Analyses
          </a>
          <a
            href="#"
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 transition font-medium"
          >
            ⚙️ Paramètres
          </a>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span>👤 John Doe</span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-sm font-medium text-gray-500">Total Utilisateurs</h2>
              <p className="text-xl font-bold text-gray-900 mt-2">1,240</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-sm font-medium text-gray-500">Ventes Mensuelles</h2>
              <p className="text-xl font-bold text-gray-900 mt-2">23,480 MAD</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-sm font-medium text-gray-500">Nouveaux Clients</h2>
              <p className="text-xl font-bold text-gray-900 mt-2">312</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white p-5 rounded-lg shadow overflow-x-auto hover:shadow-lg transition">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Transactions Récentes</h2>
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Client</th>
                  <th className="py-2 px-3">Montant</th>
                  <th className="py-2 px-3">Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-2 px-3">12 Jan</td>
                  <td className="py-2 px-3">Ali</td>
                  <td className="py-2 px-3">5,200 MAD</td>
                  <td className="py-2 px-3 text-green-600 font-semibold">Complété</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-2 px-3">14 Jan</td>
                  <td className="py-2 px-3">Sara</td>
                  <td className="py-2 px-3">7,800 MAD</td>
                  <td className="py-2 px-3 text-yellow-500 font-semibold">En Attente</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-2 px-3">18 Jan</td>
                  <td className="py-2 px-3">Youssef</td>
                  <td className="py-2 px-3">3,400 MAD</td>
                  <td className="py-2 px-3 text-green-600 font-semibold">Complété</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-2 px-3">20 Jan</td>
                  <td className="py-2 px-3">Leila</td>
                  <td className="py-2 px-3">6,700 MAD</td>
                  <td className="py-2 px-3 text-red-600 font-semibold">Annulé</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
