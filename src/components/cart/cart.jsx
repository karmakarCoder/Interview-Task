"use client";
import { useState } from "react";
import img from "../../app/assets/1.webp";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";

const CartPage = () => {
  // Sample product data
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 50,
      quantity: 1,
      image: img,
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      quantity: 2,
      image: img,
    },
  ]);

  // Update quantity
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10; // Example fixed shipping cost
  const total = subtotal + shipping;

  return (
    <div className="py-10 min-h-[500px]">
      <div className="container">
        {/* Heading */}
        <h1 className="lg:text-3xl text-xl font-figtree text-secondarycolor font-bold mb-6">
          My Shopping Cart
        </h1>

        {/* Cart Table */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full hidden md:block lg:w-2/3">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 font-poppins text-sm font-extralight text-[#808080] uppercase">
                  <th className="border w-[50px] text-xs border-gray-200 px-2 lg:px-4 py-2 text-left">
                    Product
                  </th>
                  <th className="border text-xs border-gray-200 px-2 lg:px-4 py-2 text-right">
                    Price
                  </th>
                  <th className="border text-xs border-gray-200 px-4 py-2 text-center">
                    Quantity
                  </th>
                  <th className="border text-xs border-gray-200 px-4 py-2 text-right">
                    Subtotal
                  </th>
                  <th className="border text-xs border-gray-200 px-4 py-2 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="font-poppins text-lg font-normal text-secondarycolor px-4 py-2 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12"
                      />
                      {item.name}
                    </td>
                    <td className="border-y font-poppins text-lg text-secondarycolor font-normal border-y-gray-200 px-4 py-2 text-right">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="border-y border-y-gray-200 px-4 py-2 text-center">
                      <div className="flex p-1 w-[135px] border-2 rounded-full mx-auto justify-between items-center gap-0">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 font-poppins text-lg font-normal text-secondarycolor py-1 w-[39px] h-[39px] bg-[#F2F2F2] rounded-full"
                        >
                          -
                        </button>
                        <span className="w-8">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-[39px] h-[39px] bg-[#F2F2F2] rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border-y font-poppins font-medium text-lg text-secondarycolor border-y-gray-200 px-4 py-2 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="border-y border-y-gray-200 px-4 py-2 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#666666] text-2xl"
                      >
                        <RxCrossCircled />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <Link href="/">
                <button className="bg-[#F2F2F2] hover:bg-[#e7e7e7] text-gray-800 font-semibold font-poppins text-sm py-3 px-6 rounded-[49px]">
                  Return to Shop
                </button>
              </Link>
              <button className="bg-[#EA5326] font-poppins text-sm text-white font-semibold py-3 px-6 rounded-[49px]">
                Update Cart
              </button>
            </div>
          </div>

          {/* mobile device cart table */}
          <div className="w-full md:hidden lg:w-2/3">
            <div className="w-full">
              <div className="flex-col flex gap-3">
                {cart.map((item) => (
                  <div key={item.id} className="border-2 p-2 rounded-md">
                    <div className="font-poppins justify-between text-base font-normal text-secondarycolor py-2 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div>
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="size-20"
                          />
                        </div>
                        <div>
                          <div className="w-24 overflow-hidden text-ellipsis text-nowrap">
                            {item.name}
                          </div>
                          <h4 className="font-poppins text-base text-secondarycolor font-normal py-2">
                            ${item.price.toFixed(2)}
                          </h4>
                        </div>
                      </div>

                      <div className="sm:mr-24 md:mr-10">
                        <span className="font-poppins font-normal text-base text-primarycolor">
                          Subtotal
                        </span>
                        <h5 className="font-poppins font-medium text-base text-secondarycolor  py-2 text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </h5>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#666666] text-xl"
                      >
                        <RxCrossCircled />
                      </button>
                    </div>

                    <div className="flex p-1 border-2 text-center w-[135px] rounded-full mx-auto justify-between items-center gap-0">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 font-poppins text-lg font-normal text-secondarycolor py-1 w-[39px] h-[39px] bg-[#F2F2F2] rounded-full"
                      >
                        -
                      </button>
                      <span className="w-8">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-[39px] h-[39px] bg-[#F2F2F2] rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <Link href="/">
                <button className="bg-[#F2F2F2] hover:bg-[#e7e7e7] text-gray-800 font-semibold font-poppins text-xs py-2 px-5 rounded-[49px]">
                  Return to Shop
                </button>
              </Link>
              <button className="bg-[#EA5326] font-poppins text-xs text-white font-semibold py-2 px-5 rounded-[49px]">
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="w-full block lg:w-1/3 bg-white border-2 p-4 rounded-md">
            <h2 className="lg:text-xl text-base font-medium font-poppins text-secondarycolor mb-4">
              Cart Total
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex font-poppins text-sm lg:text-base justify-between">
                <span className="text-[#4D4D4D] font-normal">Subtotal:</span>
                <span className="text-secondarycolor font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex font-poppins text-sm lg:text-base justify-between">
                <span className="text-[#4D4D4D] font-normal">Shipping:</span>
                <span className="text-secondarycolor font-medium">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex font-poppins text-sm lg:text-base justify-between font-bold">
                <span className="text-[#4D4D4D] font-normal">Total:</span>
                <span className="text-secondarycolor font-medium">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <Link href="/checkout">
              <button className="mt-4 font-poppins text-sm lg:text-base w-full bg-[#EA5326] hover:bg-[#D44921] text-white font-semibold py-2 px-4 rounded-[48px]">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
