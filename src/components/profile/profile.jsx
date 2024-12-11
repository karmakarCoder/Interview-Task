"use client";
import { MdDashboard } from "react-icons/md";
import { MdOutlineReplay } from "react-icons/md";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Image from "next/image";
import userImg from "../../app/assets/user.png";
import { useState } from "react";
import OrderDetails from "./order_details";
import Settings from "./settings";

const Profiles = () => {
  const [dashboard, setdashboard] = useState(true);
  const [orderHistory, setorderHistory] = useState(false);
  const [settings, setsettings] = useState(false);
  const [orderDetails, setorderDetails] = useState(false);

  const HandleDashboard = () => {
    setdashboard(true);
    setorderHistory(false);
    setsettings(false);
    setorderDetails(false);
  };

  const HandleOrderHistory = () => {
    setdashboard(false);
    setorderHistory(true);
    setsettings(false);
    setorderDetails(false);
  };

  const HandleSetting = () => {
    setdashboard(false);
    setorderHistory(false);
    setsettings(true);
    setorderDetails(false);
  };

  const AllHistory = () => {
    setorderHistory(true);
    setdashboard(false);
    setorderDetails(false);
  };

  const HandleDetails1 = () => {
    setorderDetails(true);
    setdashboard(false);
  };

  const HandleDetails2 = () => {
    setorderDetails(true);
    setorderHistory(false);
  };

  return (
    <div>
      <Breadcrumb title="profile" />
      <div className="py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
            {/* left */}
            <div className="lg:w-[359px] w-full h-[264px] md:h-[307px] pb-2 rounded-lg border-2 bg-white">
              <h5 className="lg:text-xl text-base pb-4 font-poppins font-medium text-primarycolor pt-6 pl-6">
                Navigation
              </h5>
              <div
                onClick={HandleDashboard}
                className={`flex py-2 cursor-pointer relative after:absolute after:left-0 after:top-0 after:scale-y-0 after:h-full after:w-1 items-center  gap-2 font-poppins font-normal lg:text-lg text-sm ${
                  dashboard
                    ? "after:bg-red-500 bg-[#FDEEE9] after:scale-y-100 text-primarycolor"
                    : "text-[#666666] bg-transparent"
                }`}
              >
                <div
                  className={`pl-6 text-lg lg:text-2xl ${
                    dashboard ? "text-primarycolor" : "text-[#CCCCCC]"
                  }`}
                >
                  <MdDashboard />
                </div>
                <span>Dashboard</span>
              </div>
              <div
                onClick={HandleOrderHistory}
                className={`flex py-2 cursor-pointer relative after:absolute after:left-0 after:top-0 after:scale-y-0 after:h-full after:w-1 items-center  gap-2 font-poppins font-normal lg:text-lg text-sm ${
                  orderHistory
                    ? "after:bg-red-500 bg-[#FDEEE9] after:scale-y-100 text-primarycolor"
                    : "text-[#666666] bg-transparent"
                }`}
              >
                <div
                  className={`pl-6 text-lg lg:text-2xl ${
                    orderHistory ? "text-primarycolor" : "text-[#CCCCCC]"
                  }`}
                >
                  <MdOutlineReplay />
                </div>
                <span>Order History</span>
              </div>
              <div className="flex py-2 cursor-pointer items-center gap-2 font-poppins font-normal lg:text-lg text-sm text-[#666666]">
                <div className="pl-6 text-lg lg:text-2xl text-[#CCCCCC]">
                  <HiOutlineShoppingBag />
                </div>
                <span>Shopping Cart</span>
              </div>
              <div
                onClick={HandleSetting}
                className={`flex py-2 cursor-pointer relative after:absolute after:left-0 after:top-0 after:scale-y-0 after:h-full after:w-1 items-center  gap-2 font-poppins font-normal lg:text-lg text-sm ${
                  settings
                    ? "after:bg-red-500 bg-[#FDEEE9] after:scale-y-100 text-primarycolor"
                    : "text-[#666666] bg-transparent"
                }`}
              >
                <div
                  className={`pl-6 text-lg lg:text-2xl ${
                    settings ? "text-primarycolor" : "text-[#CCCCCC]"
                  }`}
                >
                  <IoSettingsOutline />
                </div>
                <span>Settings</span>
              </div>
              <div className="flex py-2 cursor-pointer items-center gap-2 font-poppins font-normal lg:text-lg text-sm text-[#666666]">
                <div className="pl-6 text-lg lg:text-2xl text-[#CCCCCC]">
                  <TbLogout2 />
                </div>
                <span>Log-out</span>
              </div>
            </div>
            {/* right */}
            <div>
              {/* dashboard */}
              {dashboard && (
                <div>
                  <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between gap-5 w-full">
                      {/* Left Sidebar */}
                      <div className="bg-white flex flex-col items-center justify-center h-[320px] w-full md:w-[350px] xl:w-[450px] p-6 rounded-lg shadow-md">
                        <div className="text-center">
                          <Image
                            src={userImg}
                            alt="Profile"
                            className="w-24 h-24 mx-auto rounded-full object-cover"
                          />
                          <h2 className="mt-4 text-xl text-primarycolor font-poppins font-medium">
                            Dianne Russell
                          </h2>
                          <p className="text-base font-poppins font-normal text-gray-500">
                            Customer
                          </p>
                        </div>
                        <h5 className="text-center cursor-pointer text-lg text-btnColor font-medium">
                          Edit Profile
                        </h5>
                      </div>
                      {/* Billing Address */}
                      <div className="bg-white font-poppins h-[320px] w-full md:w-[350px] xl:w-[450px] p-9 rounded-lg shadow-md border-2 mb-6">
                        <div className="flex justify-start items-start">
                          <h3 className="text-base font-medium font-poppins text-[#999999] uppercase">
                            Billing Address
                          </h3>
                        </div>
                        <div className="mt-4 text-sm space-y-2">
                          <p className="font-medium text-xl text-primarycolor">
                            Dainne Russell
                          </p>
                          <p className="font-normal text-base text-[#666666]">
                            4140 Parker Rd. Allentown, New Mexico 31134
                          </p>
                          <p className="font-normal text-lg text-primarycolor">
                            dainne.ressell@gmail.com
                          </p>
                          <p className="font-normal text-lg text-primarycolor">
                            (671) 555-0110
                          </p>
                          <div className="pt-3">
                            <h5 className="text-btnColor cursor-pointer font-medium text-lg">
                              Edit Address
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full">
                      {/* Recent Order History */}
                      <div className="bg-white w-full p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                          <h3 className="lg:text-xl text-base font-medium text-primarycolor font-poppins">
                            Recent Order History
                          </h3>
                          <button
                            onClick={AllHistory}
                            className="text-btnColor font-poppins text-sm lg:text-lg font-medium"
                          >
                            View All
                          </button>
                        </div>
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full border-collapse border border-gray-200">
                            <thead>
                              <tr className="bg-[#F2F2F2] text-[#4d4d4db0] font-poppins font-medium text-sm uppercase">
                                <th className="p-3">Order ID</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Total</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="text-base text-primarycolor font-poppins font-normal">
                                <td className="p-4 text-center">#738</td>
                                <td className="p-4 text-center">8 Sep, 2020</td>
                                <td className="p-4 text-center">
                                  $135.00 (5 Products)
                                </td>
                                <td className="p-4 text-center">Processing</td>
                                <td className="p-4 text-center">
                                  <button
                                    onClick={HandleDetails1}
                                    className="text-btnColor font-medium hover:underline font-poppins text-base"
                                  >
                                    View Details
                                  </button>
                                </td>
                              </tr>
                              {/* Repeat rows as necessary */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* order history */}

              {orderHistory && (
                <div className="xl:w-[900px] w-full">
                  {/* Recent Order History */}
                  <div className="bg-white w-full p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-medium text-primarycolor font-poppins">
                        Order History
                      </h3>
                    </div>
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-[#F2F2F2] text-[#4d4d4db0] font-poppins font-medium text-sm uppercase">
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Status</th>
                            <th className="p-3"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-base text-primarycolor font-poppins font-normal">
                            <td className="p-4 text-center">#738</td>
                            <td className="p-4 text-center">8 Sep, 2020</td>
                            <td className="p-4 text-center">
                              $135.00 (5 Products)
                            </td>
                            <td className="p-4 text-center">Processing</td>
                            <td className="p-4 text-center">
                              <button
                                onClick={HandleDetails2}
                                className="text-btnColor font-medium hover:underline font-poppins text-base"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr className="text-base text-primarycolor font-poppins font-normal">
                            <td className="p-4 text-center">#738</td>
                            <td className="p-4 text-center">8 Sep, 2020</td>
                            <td className="p-4 text-center">
                              $135.00 (5 Products)
                            </td>
                            <td className="p-4 text-center">Processing</td>
                            <td className="p-4 text-center">
                              <button
                                onClick={HandleDetails2}
                                className="text-btnColor font-medium hover:underline font-poppins text-base"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr className="text-base text-primarycolor font-poppins font-normal">
                            <td className="p-4 text-center">#738</td>
                            <td className="p-4 text-center">8 Sep, 2020</td>
                            <td className="p-4 text-center">
                              $135.00 (5 Products)
                            </td>
                            <td className="p-4 text-center">Processing</td>
                            <td className="p-4 text-center">
                              <button
                                onClick={HandleDetails2}
                                className="text-btnColor font-medium hover:underline font-poppins text-base"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr className="text-base text-primarycolor font-poppins font-normal">
                            <td className="p-4 text-center">#738</td>
                            <td className="p-4 text-center">8 Sep, 2020</td>
                            <td className="p-4 text-center">
                              $135.00 (5 Products)
                            </td>
                            <td className="p-4 text-center">Processing</td>
                            <td className="p-4 text-center">
                              <button
                                onClick={HandleDetails2}
                                className="text-btnColor font-medium hover:underline font-poppins text-base"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* settings */}
              {settings && <Settings />}

              {/* order details */}
              {orderDetails && <OrderDetails />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
