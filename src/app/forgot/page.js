"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  // Email validation function
  const validateEmail = () => {
    if (!email) {
      return "Email is required.";
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateEmail();
    if (error) {
      setErrors(error);
    } else {
      setErrors("");
      alert("Password reset email sent!");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-[40px] lg:py-[90px]">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="lg:text-4xl text-xl font-semibold font-poppins text-primarycolor text-center mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Password Field */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full font-poppins capitalize px-4 mt-1 p-2 border-2 rounded-lg text-base lg:text-lg text-[#999999] focus:outline-none focus:border-btnColor"
              placeholder="Email"
            />
            {errors && <p className="text-red-500 text-sm">{errors}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-btnColor font-poppins font-semibold text-white py-2 lg:text-lg text-base rounded-full hover:bg-[#e97426] transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
