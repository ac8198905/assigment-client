import React, { useState } from "react";
import OrderItemCard from "./OrderItemCard";

export default function Dashboard() {
  const [profile, setProfile] = useState({ name: "John Doe", email: "user@example.com" });
  const [orders] = useState([
    { id: 1, product: "Item A", date: "2025-04-01" },
    { id: 2, product: "Item B", date: "2025-04-02" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-4 sm:p-6">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-blue-700">Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Order History</h2>
          <div className="space-y-3">
            {orders.map((order) => (
              <OrderItemCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
