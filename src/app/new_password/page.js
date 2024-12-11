"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import bg from "../assets/breadcrumbBg.png";
import Image from "next/image";

export default function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");

  // Toggle password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation function
  const validatePasswords = () => {
    if (!password || !confirmPassword) {
      return "Both fields are required.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validatePasswords();
    if (error) {
      setErrors(error);
    } else {
      setErrors("");
      alert("Password has been set successfully!");
    }
  };

  return (
    <>
      <div className="relative">
        <Image src={bg} alt="bg" />
        <div className="absolute top-0 left-0"></div>
      </div>

      <div className="flex items-center lg:py-[90px] py-[50px] justify-center px-4">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="lg:text-3xl text-2xl text-primarycolor capitalize font-poppins font-semibold text-center mb-6">
            Set New Password
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 mt-1 py-2 border-2 capitalize placeholder:font-poppins placeholder:font-normal lg:placeholder:text-base placeholder:text-sm rounded-lg focus:outline-none focus:border-btnColor"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mt-1 capitalize py-2 border-2 rounded-lg focus:outline-none px-4 placeholder:font-poppins placeholder:font-normal lg:placeholder:text-base placeholder:text-sm focus:border-btnColor"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            {/* Error Message */}
            {errors && <p className="text-red-500 text-sm">{errors}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-poppins bg-btnColor text-white py-2 rounded-full font-medium text-sm lg:text-base hover:bg-[#e67429] transition"
            >
              Set Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
