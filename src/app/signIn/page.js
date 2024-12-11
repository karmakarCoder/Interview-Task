"use client";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ email, password, rememberMe });
      alert("Login Successful!");
    }
  };

  return (
    <div className="container flex items-center justify-center py-[40px] lg:py-[100px]">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="lg:text-5xl text-3xl font-figtree text-center text-[#1A1A1A] mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 placeholder:text-sm lg:placeholder:text-lg placeholder:font-poppins placeholder:font-normal placeholder:text-[#999999] w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-1 focus:ring-btnColor`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 w-full placeholder:text-sm lg:placeholder:text-lg placeholder:font-poppins placeholder:text-[#999999] placeholder:font-normal px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-btnColor`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-xl text-primarycolor"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="lg:w-4 lg:h-4 h-3 w-3 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="lg:ml-2 ml-1 text-[#666666] font-poppins font-normal lg:text-base text-xs"
              >
                Remember me
              </label>
            </div>
            {/* Forgot Password */}
            <Link
              href="/forgot"
              className="text-[#666666] font-poppins font-normal lg:text-base text-xs hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-poppins font-semibold text-sm lg:text-lg lg:py-3 text-white bg-btnColor rounded-[62px] hover:bg-[#e67327]"
          >
            Login
          </button>

          {/* Create Account */}
          <div
            className="flex justify-center items-center
           text-sm"
          >
            <h3 className="text-[#666666]">
              Don’t have account?{" "}
              <Link
                href="/signUp"
                className="font-poppins hover:underline font-medium text-primarycolor"
              >
                Register
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}
