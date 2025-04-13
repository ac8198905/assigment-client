import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <div className="p-4">
      <AuthForm type="login" />
      <div className="text-center mt-4 space-x-4">
        <Link to="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}
