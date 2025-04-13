import React from "react";

export default function InputGroup({ label, name, value, onChange, type }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded"
        required
      />
    </div>
  );
}