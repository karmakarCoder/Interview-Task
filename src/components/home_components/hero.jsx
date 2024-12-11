import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import heroImg from "../../app/assets/hero.png";
import Image from "next/image";
import arrow from "../../app/assets/arrow.png";
import vector1 from "../../app/assets/Orange.png";
import vector2 from "../../app/assets/Mint.png";
import Servicecard from "../common/service_card";
import delivery from "../../app/assets/delivery-truck.png";
import clock from "../../app/assets/24-hours.png";
import shield from "../../app/assets/shield.png";
const Hero = () => {
  return (
    <div className="lg:pt-[160px] pt-[20px] pb-[50px] lg:pb-[72px]">
      <div className="container flex-col-reverse lg:flex-row flex items-center justify-between">
        {/* arrow */}
        <div className="absolute hidden xl:block top-[200px] 2xl:right-[754px] 2xl:top-[192px] right-[619px]">
          <Image src={arrow} alt="arrow" className="w-[465px] 2xl:w-[682px]" />
        </div>
        {/* left */}
        <div>
          <div className="relative">
            <h1 className="sm:max-w-[849px] w-full 2xl:text-[80px] leading-[50px] xl:leading-[80px] font-roboto font-bold lg:text-[50px] xl:text-[70px] text-4xl text-secondaryTextColor">
              Good <span className="text-btnColor">food</span>, great memories
            </h1>
            {/* vector 1 */}
            <div className="absolute 2xl:right-[292px] right-[54px] hidden lg:block bottom-[-37px]">
              <Image src={vector1} alt="vector1" className="w-[146px]" />
            </div>
          </div>

          <p className="font-dMsans w-full sm:max-w-[501px] lg:max-w-[887px] leading-[30px] xl:leading-[50px] text-xl lg:text-[29px] 2xl:text-[38px] xl:text-[38px] font-normal text-primarycolor py-5 lg:py-7 xl:py-10">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>
          {/* location */}
          <div className="rounded-full text-white justify-between w-full lg:max-w-[755px] flex items-center border-2 p-1 xl:p-[6px] overflow-hidden">
            <div className="bg-[#00B047] flex items-center text-primaryTextColor gap-x-3 lg:gap-x-12 font-kumbh_sans font-normal text-base lg:text-xl py-2 lg:py-4 rounded-l-[54px] px-2 lg:px-3 rounded-r-2xl">
              <IoLocationSharp className="lg:text-xl text-base" />
              <div className="flex items-center gap-x-1 cursor-pointer">
                Location <MdOutlineArrowDropDown />
              </div>
            </div>
            {/* location name display */}
            <h3 className="ml-4 font-kumbh_sans capitalize lg:text-xl text-xs">
              location name
            </h3>
            <div className="bg-[#00B047] cursor-pointer mr-2 text-xl lg:text-3xl flex items-center justify-center rounded-full w-8 lg:w-[50px] h-8 lg:h-[50px] text-primaryTextColor">
              <CiSearch />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="relative">
          {/* vector 2 */}
          <div className="absolute hidden lg:block right-[245px] top-[-153px]">
            <Image src={vector2} alt="vector2" />
          </div>
          <Image
            src={heroImg}
            alt="hero"
            className="lg:w-[600px] w-full sm:w-[392px]"
          />
        </div>
      </div>
      {/* service */}
      <div className="container flex items-center justify-center">
        <div className="lg:py-11 py-6 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 items-center gap-[40px] xl:gap-[20px] lg:gap-[10px] px-[60px] mt-16 2xl:gap-10 lg:mt-32 bg-white shadow-lg">
          <Servicecard title={"Discount"} slogan={"Every week new sales"} />
          <Servicecard
            image={delivery}
            title={"Free Delivery"}
            slogan={"100% Free for all orders"}
          />
          <Servicecard
            image={clock}
            title={"Great Support 24/7"}
            slogan={"We care your experiences"}
          />
          <Servicecard
            image={shield}
            title={"secure Payment"}
            slogan={"100% Secure Payment Method"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
