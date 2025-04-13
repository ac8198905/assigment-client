// src/components/OrderItemCard.js
import React from "react";

const OrderItemCard = ({ order }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-semibold">{order.product}</h3>
      <p className="text-sm text-gray-600">Date: {order.date}</p>
    </div>
  );
};

export default OrderItemCard; // ✅ Default export
