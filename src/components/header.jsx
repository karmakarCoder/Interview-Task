"use client";
import logo from "../app/assets/logo.png";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars2 } from "react-icons/hi2";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="lg:py-9 py-5 border-b-2">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" className="xl:w-[200px] w-[100px]" />
          </Link>
          {/* search & list */}
          <div className="flex gap-10 items-center">
            {/* search */}
            <div className="sm:flex hidden items-center w-[350px] xl:w-[498px]">
              <div className="w-full relative">
                <div className="xl:text-2xl text-xl absolute top-[50%] left-4 -translate-y-[50%]">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-tl-[50px] w-full placeholder:text-sm xl:placeholder:text-base border-l-2  border-t-2 border-b-2 placeholder:font-normal placeholder:font-poppins placeholder:text-[#BBBBBB] rounded-bl-[50px] border-[#E6E6E6] border-r-none py-[9px] xl:py-3 pl-11 pr-4"
                />
              </div>
              <div className="h-full">
                {" "}
                <button className="font-figtree py-3 xl:py-[13px] font-normal text-sm xl:text-base text-white bg-btnColor px-6 rounded-tr-[50px] rounded-br-[50px]">
                  Search
                </button>
              </div>
            </div>
            {/* list */}
            <ul
              className="lg:flex hidden font-figtree items-center gap-5
             xl:gap-10 font-normal text-base xl:text-lg text-secondarycolor"
            >
              {["All Category", "Coupon", "Support"].map((item, index) => (
                <Link
                  href={item?.toLowerCase()}
                  key={index}
                  className="flex items-center cursor-pointer"
                >
                  {item}

                  {item == "All Category" && (
                    <span className="text-4xl">
                      {" "}
                      <RiArrowDropDownLine />
                    </span>
                  )}
                </Link>
              ))}
            </ul>
          </div>
          {/* cart & user */}
          <div className="flex items-center gap-x-5 lg:text-2xl  text-xl xl:text-3xl">
            <div className="flex items-center gap-x-3 lg:gap-x-4">
              {/* search */}
              <div className="text-2xl sm:hidden cursor-pointer">
                <CiSearch />
              </div>
              {/* cart */}
              <Link href="/shopingCart" className="cursor-pointer">
                <IoCartOutline />
              </Link>
              {/* user */}
              <Link href="/profile" className="cursor-pointer">
                <LuUserRound />
              </Link>
            </div>
            {/* menu bar */}
            <div
              onClick={() => setopen(true)}
              className="text-xl cursor-pointer lg:hidden"
            >
              <HiOutlineBars2 />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view menu */}
      <div
        className={`w-full h-full bg-white fixed top-0 z-[999] ${
          open
            ? "top-0 transition-all opacity-100 duration-300"
            : "top-[-100%] transition-all opacity-0 duration-300"
        }`}
      >
        {/* cross */}
        <RxCross2
          onClick={() => setopen(false)}
          className="text-2xl absolute cursor-pointer top-6 right-6"
        />

        {/* list */}
        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
          <ul
            className="flex flex-col font-figtree items-start gap-5
             xl:gap-10 font-normal text-base text-secondarycolor"
          >
            {["All Category", "Coupon", "Support"].map((item, index) => (
              <li key={index} className="flex items-center cursor-pointer">
                {item}{" "}
                {item == "All Category" && (
                  <span className="text-4xl">
                    {" "}
                    <RiArrowDropDownLine />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* social link */}
        <div className="text-2xl flex items-center gap-x-3 absolute bottom-20 left-[50%] -translate-x-[50%]">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
