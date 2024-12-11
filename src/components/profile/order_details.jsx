"use client";
import { MdOutlineCheck } from "react-icons/md";
import productImg from "../../app/assets/1.webp";
import Image from "next/image";
import Link from "next/link";

const OrderDetails = () => {
  return (
    <div className="xl:w-[900px] w-full bg-white border-2 rounded-lg">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-5 border-b-2 rounded-t-lg">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <h1 className="lg:text-2xl text-lg font-medium font-poppins text-primarycolor">
            Order Details
          </h1>
          <div className="text-right gap-2 flex items-center">
            <li className="text-base marker:w-2 list-disc font-poppins font-normal text-[#4D4D4D]">
              Dec 11, 2024
            </li>
            <li className="text-base marker:w-2 list-disc font-poppins font-normal text-[#4D4D4D]">
              3 Products
            </li>
          </div>
        </div>
        <Link href="/reviewPage">
          <h5 className="cursor-pointer underline text-btnColor text-sm lg:text-lg font-poppins font-medium">
            Share Review
          </h5>
        </Link>
      </div>

      {/* Addresses and Order Info */}
      <div className="flex lg:flex-row flex-col p-5 gap-8 mb-8">
        {/* Left Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 font-poppins rounded-lg border-2 md:w-[650px] w-full">
          <div className="sm:border-r-2">
            <h2 className="font-medium uppercase p-5 text-base text-[#999999] border-b-2">
              Billing Address
            </h2>
            <div className="p-5">
              <p className="font-normal text-lg text-primarycolor pb-2">
                Dainne Russell
              </p>
              <p className="font-normal text-base text-[#666666] pb-9">
                123 Main St
              </p>
              <div className="pb-3">
                <h5 className="font-normal uppercase text-sm text-[#999999]">
                  Email
                </h5>
                <p className="font-normal text-primarycolor text-base">
                  dainne.ressell@gmail.com
                </p>
              </div>
              <div>
                <h5 className="font-normal uppercase text-sm text-[#999999]">
                  Phone
                </h5>
                <p className="font-normal text-primarycolor text-base">
                  (671) 555-0110
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-medium uppercase p-5 text-base text-[#999999] border-b-2">
              Shipping Address
            </h2>
            <div className="p-5">
              <p className="font-normal text-lg text-primarycolor pb-2">
                Dainne Russell
              </p>
              <p className="font-normal text-base text-[#666666] pb-9">
                123 Main St
              </p>
              <div className="pb-3">
                <h5 className="font-normal uppercase text-sm text-[#999999]">
                  Email
                </h5>
                <p className="font-normal text-primarycolor text-base">
                  dainne.ressell@gmail.com
                </p>
              </div>
              <div>
                <h5 className="font-normal uppercase text-sm text-[#999999]">
                  Phone
                </h5>
                <p className="font-normal text-primarycolor text-base">
                  (671) 555-0110
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex border-2  rounded-lg w-full lg:w-[331px] flex-col gap-4">
          <div className="flex items-center border-b-2 justify-between p-5">
            <div className="flex flex-col">
              <p className="font-medium text-sm font-poppins text-[#999999]">
                Order ID:
              </p>
              <p className="font-poppins font-normal text-primarycolor text-base">
                #4152
              </p>
            </div>
            <div className="flex flex-col pl-5 border-l-2">
              <p className="font-medium text-sm font-poppins text-[#999999]">
                Payment Method:
              </p>
              <p className="font-poppins font-normal text-primarycolor text-base">
                Credit Card
              </p>
            </div>
          </div>
          <div className="p-5 font-poppins flex flex-col gap-3">
            <div className="flex items-center pb-3 border-b-2 justify-between">
              <p className="font-normal text-base  text-[#666666]">Subtotal:</p>
              <p className="font-poppins font-medium text-primarycolor">
                $200.00
              </p>
            </div>
            <div className="flex items-center pb-3 border-b-2 justify-between">
              <p className="font-normal text-base  text-[#666666]">Discount</p>
              <p className="font-poppins font-medium text-primarycolor">20%</p>
            </div>
            <div className="flex items-center pb-3 border-b-2 justify-between">
              <p className="font-normal text-base  text-[#666666]">Shipping</p>
              <p className="font-poppins font-medium text-primarycolor">Free</p>
            </div>
            <div className="flex items-center justify-between">
              {" "}
              <p className="font-normal text-xl text-primarycolor">Total:</p>
              <p className="font-semibold text-xl text-[#EB2926]">$195.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="h-[100px] px-5">
        <div className="relative">
          <div className="lg:w-[781px] md:w-[580px] min-[410px]:w-[251px] sm:w-[495px] w-[210px] mx-auto h-2 bg-[#EA5326]"></div>
          <div className="flex w-full items-center justify-between absolute lg:top-[-20px] top-[-13px]">
            <div className="flex flex-col items-center gap-2">
              <div className="lg:size-[46px] size-[30px] text-white lg:text-2xl text-xl flex items-center justify-center bg-[#EA5326] rounded-full">
                <MdOutlineCheck />
              </div>
              <h5 className="font-poppins font-normal text-[10px] lg:text-base text-[#EB2926]">
                Order received
              </h5>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="lg:size-[46px] size-[30px] text-white text-2xl flex items-center justify-center bg-[#EA5326] rounded-full">
                <span className="font-poppins font-normal text-xs lg:text-base">
                  02
                </span>
              </div>
              <h5 className="font-poppins font-normal text-[10px] lg:text-base text-[#EB2926]">
                Processing
              </h5>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="lg:size-[46px] size-[30px] text-white text-2xl flex items-center justify-center bg-[#EA5326] rounded-full">
                <span className="font-poppins font-normal text-xs lg:text-base">
                  03
                </span>
              </div>
              <h5 className="font-poppins font-normal text-[10px] lg:text-base text-[#EB2926]">
                On the way
              </h5>
            </div>
            <div className="flex md:w-[122px] flex-col items-center gap-2">
              <div className="lg:size-[46px] size-[30px] text-white text-2xl flex items-center justify-center bg-[#EA5326] rounded-full">
                <span className="font-poppins font-normal text-xs lg:text-base">
                  04
                </span>
              </div>
              <h5 className="font-poppins font-normal text-[10px] lg:text-base text-[#EB2926]">
                Delivered
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="w-full font-poppins px-4">
          <thead className="font-normal text-sm uppercase text-[#4D4D4D]">
            <tr className="bg-[#F2F2F2]">
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody className="font-normal text-base text-primarycolor">
            <tr className="border-b-2 text-center">
              <td className="px-4 py-2">
                {" "}
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src={productImg}
                    alt="productImg"
                    className="size-[74px] rounded-lg"
                  />{" "}
                  Product 1
                </div>
              </td>
              <td className="px-4 py-2">$50.00</td>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
