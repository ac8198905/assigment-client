import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import AuthForm from "./AuthForm";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <AuthForm type="register" />
      
      {/* ✅ Back to Login Link */}
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </p>
    </div>
  );
}
