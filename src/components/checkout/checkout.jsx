"use client";
import Image from "next/image";
import { useState } from "react";
import img from "../../app/assets/1.webp";
import check from "../../app/assets/check.png";
import qrCode from "../../app/assets/QrCode.png";
import playStore from "../../app/assets/play.png";
import appStore from "../../app/assets/appstore.png";
import { RxCrossCircled } from "react-icons/rx";

const CheckoutPage = () => {
  const [open, setopen] = useState(false);
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
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    country: "",
    state: "",
    email: "",
    phone: "",
    paymentMethod: "cash",
  });

  const [errors, setErrors] = useState({});

  const [cart] = useState([
    {
      id: 1,
      image: img,
      name: "Product 1",
      price: 29.99,
    },
    {
      id: 2,
      image: img,
      name: "Product 2",
      price: 49.99,
    },
  ]);

  const shippingCost = 10;
  const totalCost =
    cart.reduce((total, item) => total + item.price, 0) + shippingCost;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "country") {
      setStates(countries[value] || []);
      setForm((prev) => ({ ...prev, state: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required.";
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setopen(true);
      setForm({
        firstName: "",
        lastName: "",
        companyName: "",
        streetAddress: "",
        country: "",
        state: "",
        email: "",
        phone: "",
        paymentMethod: "cash",
      });
    }
  };

  return (
    <div className="lg:py-8 py-4">
      <div className="w-full flex-col lg:flex-row flex gap-4 justify-between p-6">
        {/* Billing Information */}
        <div className="xl:w-[70%] lg:w-[100%] w-full">
          <h2 className="lg:text-3xl text-2xl font-figtree text-secondarycolor font-semibold mb-4">
            Billing Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 w-full lg:w-[478px] rounded-lg border-2">
          <h2 className="lg:text-3xl text-2xl font-figtree font-semibold mb-4">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <p className="text-sm font-poppins text-secondarycolor font-medium">
                    {item.name}
                  </p>
                </div>

                <p className="text-sm font-poppins text-secondarycolor font-medium">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}

            <div className="flex py-3 border-y-2 items-center justify-between">
              <p className="text-sm text-[#4D4D4D] font-poppins font-normal">
                Shipping
              </p>
              <p className="text-sm font-poppins text-secondarycolor font-medium">
                ${shippingCost.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="lg:text-lg text-sm font-poppins text-[#4D4D4D] font-semibold">
                Total
              </p>
              <p className="lg:text-xl text-base font-poppins text-secondarycolor font-semibold">
                ${totalCost.toFixed(2)}
              </p>
            </div>

            {/* Payment Method */}
            <div>
              <p className="text-xl font-poppins text-secondarycolor pb-5 font-medium">
                Payment Method
              </p>
              <div className="space-y-2">
                <label className="flex font-poppins text-base text-primarycolor font-normal items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={form.paymentMethod === "cash"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
                <label className="flex font-poppins text-base text-primarycolor font-normal items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={form.paymentMethod === "paypal"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handleSubmit}
              className="w-full font-poppins text-base lg:text-lg font-medium bg-[#EA5326] text-white py-2 rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {/* overlay */}
      {open && (
        <div className="bg-[#000000bb] w-full h-full fixed top-0 left-0"></div>
      )}
      {/* modal */}
      {open && (
        <div className="w-[315px] fixed rounded-lg top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50 bg-white p-[19px] flex flex-col items-center justify-center">
          <div
            onClick={() => setopen(false)}
            className="text-2xl cursor-pointer text-[#334A55] fixed top-3 right-3"
          >
            <RxCrossCircled />
          </div>
          <Image src={check} alt="check" className="mb-3" />
          <h5 className="font-roboto pb-4 border-b-2 font-semibold text-base text-secondarycolor">
            Order Successfully
          </h5>
          <p className="font-roboto text-[10px] font-normal text-secondarycolor text-center py-3">
            If you want to tracking your order please install our app from Play
            store or App store
          </p>
          <h4 className="font-figtree font-bold text-secondarycolor text-xl pb-3">
            Download App
          </h4>
          <div className="flex gap-2">
            <div>
              <Image src={qrCode} alt="qrCode" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={playStore} alt="playStore" />
              <Image src={appStore} alt="playStore" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
