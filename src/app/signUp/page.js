"use client";
import { useState } from "react";
import gLogo from "../assets/google.png";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setshowConPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   Toggle confirm password visibility

  const toggleConPasswordVisibility = () => {
    setshowConPassword(!showConPassword);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Account created successfully!");
      // Logic to handle account creation goes here
    }
  };

  return (
    <div className="flex items-center py-[40px] lg:py-[90px] justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="lg:text-2xl text-xl font-semibold text-center font-poppins mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-5 py-2 placeholder:capitalize lg:placeholder:text-lg text-base placeholder:font-poppins placeholder:font-normal placeholder:text-[#999999] border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-btnColor"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-5 py-2 border-2 rounded-lg focus:outline-none placeholder:capitalize lg:placeholder:text-lg text-base placeholder:font-poppins placeholder:font-normal placeholder:text-[#999999] focus:ring-1 focus:ring-btnColor"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <div className="relative">
              <input
                type={showConPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full placeholder:capitalize lg:placeholder:text-lg text-base placeholder:font-poppins border-2 placeholder:text-[#999999] placeholder:font-normal px-5 mt-1 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-btnColor"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={toggleConPasswordVisibility}
                className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showConPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label className="text-[#666666] font-poppins text-sm lg:text-lg">
              I accept the <a href="#">terms and conditions</a>.
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms}</p>
          )}

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full font-poppins lg:text-lg text-base  font-semibold bg-btnColor text-white py-2 rounded-full hover:bg-[#e07127] transition"
          >
            Create Account
          </button>

          {/* Continue with Google Button */}
          <button
            type="button"
            className="w-full text-primarycolor py-2 rounded-lg hover:bg-[#f1f1f1] transition text-sm lg:text-base font-semibold border-2 font-poppins mt-2 flex justify-between px-5"
          >
            <span className="mr-2">
              <Image src={gLogo} alt="google" className="w-5 mt-[3px]" />
            </span>{" "}
            Continue with Google
            <div></div>
          </button>
        </form>
      </div>
    </div>
  );
}
