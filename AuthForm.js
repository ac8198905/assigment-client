import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import InputGroup from "./InputGroup";
import { mockLogin, mockRegister, mockPasswordReset } from "./mockapi";

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      if (type === "login") {
        const res = await mockLogin(formData);
        setMessage(`Welcome ${res.user.name}`);
        setTimeout(() => navigate("/dashboard"), 1000); // ✅ Redirect to dashboard
      } else if (type === "register") {
        const res = await mockRegister(formData);
        setMessage(res.message);
      } else if (type === "forgot") {
        const res = await mockPasswordReset({ email: formData.email });
        setMessage(res.message);
      }
    } catch (err) {
      setMessage(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4 bg-gray-500">
      <h1 className="text-2xl font-bold text-center capitalize">{type.replace("-", " ")}</h1>

      {type === "register" && (
        <InputGroup
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
        />
      )}

      <InputGroup
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />

      {type !== "forgot" && (
        <InputGroup
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
      >
        {loading
          ? "Please wait..."
          : type === "login"
          ? "Login"
          : type === "register"
          ? "Register"
          : "Send Reset Link"}
      </button>

      {message && <p className="text-center text-sm text-green-600 mt-2">{message}</p>}
    </form>
  </div>
  );
}
