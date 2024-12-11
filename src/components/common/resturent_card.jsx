"use client";
import Image from "next/image";
import resturent from "../../app/assets/resturent.png";
import { IoStar } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

const Resturentcard = ({ className, item }) => {
  const [more, setmore] = useState(false);

  return (
    <div
      className={`2xl:p-4 p-3 rounded-3xl w-full inline-block lg:w-[308px] md:w-[345px] xl:w-[400px] 2xl:w-[470px] border-2 ${className}`}
    >
      {/* img */}
      <div className="w-full h-[250px] lg:h-[200px] xl:h-[308px] rounded-2xl overflow-hidden">
        <Image
          src={item ? item.image : resturent}
          alt="Resturent"
          className="w-full object-cover h-full"
        />
      </div>

      <div className="lg:py-3 py-2 flex items-center justify-between">
        {/* title */}
        <h5 className="font-roboto font-medium text-2xl 2xl:text-[32px] xl:text-[28px] text-thirdcolor w-[290px] text-nowrap overflow-hidden text-ellipsis">
          {item?.name}
        </h5>
        {/* rating */}
        <div className="flex items-center gap-2">
          <IoStar className="text-yellow-500 text-xl xl:text-2xl" />
          <span className="font-medium font-kumbh_sans text-lg xl:text-2xl text-thirdcolor">
            ({item?.rating})
          </span>
        </div>
      </div>
      {/* location */}
      <div className="flex items-center gap-1 pb-2 lg:pb-3">
        <CiLocationOn className="text-2xl text-thirdcolor" />
        <h5 className="font-kumbh_sans text-sm xl:text-base font-normal text-primarycolor">
          {item?.location}
        </h5>
      </div>
      {/* des */}
      <p className="font-kumbh_sans font-normal text-xs text-thirdTextColor pb-3">
        {more ? item?.description : item?.description.slice(0, 150)}
        <span
          onClick={() => setmore(!more)}
          className="font-roboto cursor-pointer font-bold text-primarycolor"
        >
          {" "}
          {more ? "Less" : "Read More..."}
        </span>
      </p>
      <Link href="/resaurantDetails">
        <button className="bg-[#00B047] py-3 xl:py-[18px] font-bold xl:text-base text-sm font-kumbh_sans text-white w-full rounded-lg cursor-pointer hover:bg-[#01a542] transition-all active:scale-95">
          Visit
        </button>
      </Link>
    </div>
  );
};

export default Resturentcard;
