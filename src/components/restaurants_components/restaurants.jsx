import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { restaurantsData } from "../../../data/data";
import Resturentcard from "../common/resturent_card";

const Restaurants = () => {
  return (
    <div className="pt-6 pb-20">
      <div className="container">
        {/* title */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div>
            <h3 className="font-roboto font-medium text-3xl lg:text-5xl text-thirdcolor">
              Explore <span className="text-btnColor">Restaurants</span>
            </h3>
            <p className="font-normal text-lg lg:text-2xl leading-6 lg:leading-8 pt-3 font-kumbh_sans text-[#758888]">
              Check your city Near by <br /> Restaurant
            </p>
          </div>
          {/* location */}
          <div className="rounded-full text-white justify-between w-full lg:max-w-[655px] sm:w-[450px] flex items-center border-2 p-1 xl:p-[6px] overflow-hidden">
            <div className="bg-btnColor flex items-center text-primaryTextColor gap-x-3 lg:gap-x-12 font-kumbh_sans font-normal text-base lg:text-xl py-2 lg:py-4 rounded-l-[54px] px-2 lg:px-3 rounded-r-2xl">
              <IoLocationSharp className="lg:text-xl text-base" />
              <div className="flex items-center gap-x-1 cursor-pointer">
                Location <MdOutlineArrowDropDown />
              </div>
            </div>
            {/* location name display */}
            <h3 className="ml-4 font-kumbh_sans capitalize lg:text-xl text-xs">
              location name
            </h3>
            <div className="bg-btnColor cursor-pointer mr-2 text-xl lg:text-3xl flex items-center justify-center rounded-full w-8 lg:w-[50px] h-8 lg:h-[50px] text-primaryTextColor">
              <CiSearch />
            </div>
          </div>
        </div>
        {/* all restaurants */}
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantsData?.map((item, index) => (
            <Resturentcard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
