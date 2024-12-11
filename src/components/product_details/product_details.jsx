"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import img from "../../app/assets/1.webp";
import { IoCartOutline } from "react-icons/io5";
import Feedback from "../customer_feedback/feedback";
import Link from "next/link";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    image: img,
    title: "Smart Freezer",
    inStock: true,
    rating: 4.5,
    price: 99.99,
    category: "Electronics",
    details: "This is an amazing product with high quality and great features.",
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="py-11">
      <div className="container">
        <div className="w-full flex flex-col gap-4 items-center justify-between md:flex-row overflow-hidden">
          {/* Left: Product Image */}
          <div className="w-full rounded-2xl overflow-hidden md:w-[450px] lg:w-[746px]">
            <Image
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full pt-3 lg:pt-0 md:w-1/2 flex flex-col">
            {/* Title and Stock */}
            <div className="flex items-center gap-2">
              <h1 className="lg:text-4xl text-2xl pb-2 font-semibold font-figtree text-primarycolor">
                {product.title}
              </h1>
              <span
                className={`lg:text-sm text-xs py-1 px-2 rounded-md bg-[#FDEEE9] font-normal font-poppins ${
                  product.inStock ? "text-btnColor" : "text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              <span className="ml-2 text-sm font-poppins font-normal text-[#666666]">
                {product.rating} Review
              </span>
            </div>

            {/* Price and Category */}
            <p className="lg:text-xl text-lg pb-4 border-b-2 font-poppins font-medium text-btnColor mt-2">
              ${product.price}
            </p>
            <p className="lg:text-base text-sm py-2 lg:py-5 font-medium font-poppins text-secondarycolor">
              Category:{" "}
              <span className="font-normal text-[#808080]">
                {product.category}
              </span>
            </p>

            {/* Details */}
            <p className="lg:text-base text-sm font-poppins font-normal text-[#808080]">
              {product.details}
            </p>

            {/* Quantity and Checkout */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-start mt-6">
              <div className="flex p-2 w-[130px] lg:w-[220px] justify-between bg-white items-center rounded-[190px] border-2">
                <button
                  className={`lg:w-[38px] w-[30px] bg-[#F2F2F2] transition active:scale-95 hover:bg-[#dddddd] flex items-center justify-center lg:h-[38px] h-[30px] rounded-full text-base lg:text-xl font-semibold ${
                    quantity == 1 && "text-[#7a7a7a]"
                  }`}
                  onClick={handleDecrease}
                >
                  <AiOutlineMinus />
                </button>
                <div
                  className="w-5 text-center font-poppins
                 text-secondarycolor font-medium text-sm lg:text-lg"
                >
                  {quantity}
                </div>
                <button
                  className="lg:w-[38px] w-[30px] bg-[#F2F2F2] transition active:scale-95 hover:bg-[#dddddd] flex items-center justify-center lg:h-[38px] h-[30px] rounded-full text-xl font-semibold"
                  onClick={handleIncrease}
                >
                  <GoPlus />
                </button>
              </div>
              <div className="flex items-center justify-between gap-3 w-full">
                <Link href="/shopingCart" className="w-full">
                  <button className="w-full bg-btnColor font-poppins font-semibold text-sm lg:text-lg text-white flex items-center gap-3 justify-center px-4 py-3 lg:py-4 rounded-[50px] hover:bg-[#e77528] transition">
                    Checkout
                    <SlHandbag className="text-xl" />
                  </button>
                </Link>
                {/* cart */}
                <button className="lg:w-[70px] sm:w-[55px] w-[59px] lg:h-[56px] h-[46px] rounded-full bg-[#DFE1E3] text-primarycolor text-lg lg:text-2xl transition hover:bg-[#f0f3f5] flex items-center justify-center">
                  <IoCartOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Customer feedback */}
        <Feedback />
      </div>
    </div>
  );
};

export default ProductPage;
