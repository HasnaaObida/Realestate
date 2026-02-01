export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Properties</p>
          <h2 className="text-3xl font-bold text-yellow-500">120</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Users</p>
          <h2 className="text-3xl font-bold text-yellow-500">45</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Pending Ads</p>
          <h2 className="text-3xl font-bold text-yellow-500">8</h2>
        </div>
      </div>
    </div>
  );
}
