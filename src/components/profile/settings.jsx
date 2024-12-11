"use client";
import { useState } from "react";
import userImg from "../../app/assets/user.png";
import Image from "next/image";
import { Bounce, Slide, toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Settings = () => {
  const [password, setPassword] = useState("");
  const [curent, setcurent] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setshowConPassword] = useState(false);
  const countries = {
    USA: ["California", "Florida", "New York", "Texas"],
    Canada: ["Alberta", "British Columbia", "Ontario", "Quebec"],
    Australia: [
      "New South Wales",
      "Queensland",
      "Victoria",
      "Western Australia",
    ],
  };
  const [states, setStates] = useState([]);

  // State for form inputs
  const [form2, setForm2] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    country: "",
    state: "",
    email: "",
    phone: "",
    zip: "",
    paymentMethod: "cash",
  });

  const [errors2, setErrors2] = useState({});
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "country") {
      setStates(countries[value] || []);
      setForm((prev) => ({ ...prev, state: "" }));
    }
  };

  // Handle input change
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setForm2({ ...form2, [name]: value });

    if (name === "country") {
      setStates(countries[value] || []);
      setForm2((prev) => ({ ...prev, state: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required.";
    if (!form.zip) newErrors.zip = "Zip code is required.";
    if (!form.lastName) newErrors.lastName = "Last name is required.";
    if (!form.streetAddress)
      newErrors.streetAddress = "Street address is required.";
    if (!form.country) newErrors.country = "Country is required.";
    if (!form.state) newErrors.state = "State is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required.";
    if (!form.phone || !/^\d{10,15}$/.test(form.phone))
      newErrors.phone = "Valid phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate form
  const validateForm2 = () => {
    const newErrors = {};
    if (!form2.firstName) newErrors.firstName = "First name is required.";
    if (!form2.lastName) newErrors.lastName = "Last name is required.";
    if (!form2.email || !/\S+@\S+\.\S+/.test(form2.email))
      newErrors.email = "Valid email is required.";
    if (!form2.phone || !/^\d{10,15}$/.test(form2.phone))
      newErrors.phone = "Valid phone number is required.";
    setErrors2(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Save changes", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      setForm({
        firstName: "",
        lastName: "",
        companyName: "",
        streetAddress: "",
        country: "",
        state: "",
        email: "",
        phone: "",
        zip: "",
        paymentMethod: "cash",
      });
    }
  };

  const handleSubmitAccount = (e) => {
    e.preventDefault();
    if (validateForm2()) {
      setForm2({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      toast.success("Save changes", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   Toggle confirm password visibility

  const toggleConPasswordVisibility = () => {
    setshowConPassword(!showConPassword);
  };

  // Form validation
  const passwordForm = () => {
    const newErrors = {};
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!curent) {
      newErrors.curent = "Enter your current password";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const HandlePasswordChanges = (e) => {
    e.preventDefault();
    if (passwordForm()) {
      setPassword("");
      setConfirmPassword("");
      setcurent("");
      toast.success("Password changed successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };
  return (
    <div>
      {/* Account setting */}
      <div className="w-full mb-10 xl:w-[900px] pb-6 bg-white rounded-lg border-2">
        <h2 className="lg:text-3xl pl-6 py-4 border-b-2 text-2xl font-figtree text-secondarycolor font-semibold mb-4">
          Account Settings
        </h2>
        <div className="flex flex-col-reverse xl:flex-row items-center w-full lg:gap-14 gap-5">
          <form
            onSubmit={handleSubmitAccount}
            className="space-y-4 w-full md:w-[590px] px-6"
          >
            <div className="flex gap-4 flex-col items-center w-full justify-between">
              {/* First Name */}
              <div className="w-full">
                <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form2.firstName}
                  placeholder="Your first name"
                  onChange={handleChange2}
                  className={`w-full border-2 placeholder:text-base placeholder:font-poppins placeholder:text-[#999999] placeholder:font-normal bg-[#f5f5f5] rounded-md p-2 ${
                    errors2.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors2.firstName && (
                  <p className="text-red-500 text-sm">{errors2.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="w-full">
                <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={form2.lastName}
                  onChange={handleChange2}
                  className={`w-full placeholder:text-base placeholder:font-poppins bg-[#f5f5f5] placeholder:text-[#999999] placeholder:font-normal border rounded-md p-2 ${
                    errors2.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors2.lastName && (
                  <p className="text-red-500 text-sm">{errors2.lastName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              {/* Email */}
              <div className="w-full">
                <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form2.email}
                  onChange={handleChange2}
                  className={`w-full border-2 bg-[#f5f5f5] rounded-md p-2 ${
                    errors2.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors2.email && (
                  <p className="text-red-500 text-sm">{errors2.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="w-full">
                <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={form2.phone}
                  onChange={handleChange2}
                  className={`w-full border-2 bg-[#f5f5f5] rounded-md p-2 ${
                    errors2.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors2.phone && (
                  <p className="text-red-500 text-sm">{errors2.phone}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-btnColor py-3 text-sm lg:text-base lg:py-4 px-7 font-poppins font-semibold capitalize rounded-full text-white"
            >
              Save Changes
            </button>
          </form>
          {/* right */}
          <div className="flex flex-col items-center">
            <Image
              src={userImg}
              alt="userImg"
              className="size-[100px] lg:size-[200px]"
            />
            <button className="border-2 mt-5 border-btnColor py-3 lg:py-4 px-7 font-poppins text-sm lg:text-base font-semibold capitalize rounded-full text-btnColor">
              Chose Image
            </button>
          </div>
        </div>
      </div>
      {/* Billing Information */}
      <div className="w-full xl:w-[900px] pb-6 bg-white rounded-lg border-2">
        <h2 className="lg:text-3xl pl-6 py-4 border-b-2 text-2xl font-figtree text-secondarycolor font-semibold mb-4">
          Billing Address
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 px-6">
          <div className="flex gap-4 flex-col sm:flex-row items-center w-full justify-between">
            {/* First Name */}
            <div className="md:w-[30%] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                placeholder="Your first name"
                onChange={handleChange}
                className={`w-full border-2 placeholder:text-base placeholder:font-poppins placeholder:text-[#999999] placeholder:font-normal bg-[#f5f5f5] rounded-md p-2 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="md:w-[30%] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full placeholder:text-base placeholder:font-poppins bg-[#f5f5f5] placeholder:text-[#999999] placeholder:font-normal border rounded-md p-2 ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            {/* Company Name */}
            <div className="md:w-[30%] w-full">
              <label className="block text-nowrap text-sm pb-2 font-poppins font-medium text-secondarycolor">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={form.companyName}
                onChange={handleChange}
                className="w-full placeholder:text-base placeholder:font-poppins bg-[#f5f5f5] placeholder:text-[#999999] placeholder:font-normal border rounded-md p-2 border-gray-300"
              />
            </div>
          </div>

          {/* Street Address */}
          <div>
            <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={form.streetAddress}
              onChange={handleChange}
              className={`w-full border bg-[#f5f5f5] rounded-md p-2 ${
                errors.streetAddress ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-sm">{errors.streetAddress}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Country */}
            <div className="md:w-[315px] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                Country / Region
              </label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`w-full border-2 bg-[#f5f5f5] rounded-md p-2 ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                {Object.keys(countries).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>

            {/* State */}
            <div className="sm:w-[115px] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                State
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`w-full border-2 bg-[#f5f5f5]  rounded-md p-2 ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
            <div className="md:w-[30%] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
                value={form.zip}
                placeholder="00000"
                onChange={handleChange}
                className={`w-full border-2 placeholder:text-base placeholder:font-poppins placeholder:text-[#999999] placeholder:font-normal bg-[#f5f5f5] rounded-md p-2 ${
                  errors.zip ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.zip && (
                <p className="text-red-500 text-sm">{errors.zip}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Email */}
            <div className="sm:w-[50%] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border-2 bg-[#f5f5f5] rounded-md p-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="sm:w-[50%] w-full">
              <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border-2 bg-[#f5f5f5] rounded-md p-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <button className="bg-btnColor py-3 lg:py-4 px-7 font-poppins font-semibold capitalize rounded-full text-sm lg:text-base text-white">
            Save Changes
          </button>
        </form>
      </div>
      {/* Change Password */}
      <div className="w-full mt-10 xl:w-[900px] pb-6 bg-white rounded-lg border-2">
        <h2 className="lg:text-3xl pl-6 py-4 border-b-2 text-2xl font-figtree text-secondarycolor font-semibold mb-4">
          Change Password
        </h2>
        <div className="flex items-center w-full gap-14">
          <form
            onSubmit={HandlePasswordChanges}
            className="space-y-4 w-full px-6"
          >
            <div className="flex gap-4 flex-col items-center w-full justify-between">
              {/* Current password */}
              <div className="w-full">
                <label className="block text-sm pb-2 font-poppins font-medium text-secondarycolor">
                  Current Password
                </label>
                <input
                  type="text"
                  name="current"
                  value={curent}
                  placeholder="Password"
                  onChange={(e) => setcurent(e.target.value)}
                  className="w-full mt-1 px-5 py-2 border-2 rounded-lg focus:outline-none placeholder:capitalize lg:placeholder:text-lg text-base placeholder:font-poppins placeholder:font-normal placeholder:text-[#999999] focus:ring-1 focus:ring-btnColor"
                />
                {errors2.firstName && (
                  <p className="text-red-500 text-sm">{errors2.firstName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
              {/* Password Field */}
              <div className="w-full">
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
              <div className="w-full">
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
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-btnColor py-3 text-sm lg:text-base lg:py-4 px-7 font-poppins font-semibold capitalize rounded-full text-white"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
