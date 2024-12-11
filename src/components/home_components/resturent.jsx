"use client";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import Resturentcard from "../common/resturent_card";
import { restaurantsData } from "../../../data/data";

const Resturent = () => {
  return (
    <div className="lg:pb-[90px] pb-[40px] border-b-2">
      <div className="container">
        {/* title */}
        <div className="flex justify-between">
          <div>
            <h3 className="font-roboto font-medium text-3xl lg:text-5xl text-thirdcolor">
              Explore <span className="text-btnColor">Top Restaurants</span>
            </h3>
            <p className="font-normal text-lg lg:text-2xl leading-6 lg:leading-8 pt-3 font-kumbh_sans text-[#758888]">
              Check your city Near by <br /> Restaurant
            </p>
          </div>
          <div>
            <Link
              href="/restaurants"
              className="lg:text-xl text-base text-nowrap flex items-center gap-1 font-kumbh_sans font-normal text-primarycolor"
            >
              See All
              <MdOutlineChevronRight className="lg:text-2xl text-xl" />
            </Link>
          </div>
        </div>
        {/* all resturent */}
        <div className="pt-[50px] lg:grid sm:hidden sm:grid-cols-2  grid grid-cols-1 lg:grid-cols-3  items-center gap-5 lg:gap-9">
          {restaurantsData?.slice(0, 3).map((item, index) => (
            <Resturentcard key={index} item={item} />
          ))}
        </div>
        {/* all resturent */}
        <div className="pt-[50px] hidden sm:grid lg:hidden sm:grid-cols-2   grid-cols-1 lg:grid-cols-3  items-center gap-5 lg:gap-9">
          {restaurantsData?.slice(0, 4).map((item, index) => (
            <Resturentcard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resturent;
