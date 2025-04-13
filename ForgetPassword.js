import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import AuthForm from "./AuthForm";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10">
      <AuthForm type="forgot" />

      {/* ✅ Back to Login Link */}
      <p className="mt-4 text-sm text-gray-600">
        Remembered your password?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </p>
    </div>
  );
}
