import Image from "next/image";
import img from "../../app/assets/villagio1.jpg";
import location from "../../app/assets/location.svg";
import { IoStar } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import Itemscard from "../common/items_card";
import Itemproduct from "../common/item_product";
import Link from "next/link";

const Details = () => {
  let stars = new Array(5).fill(null);
  let items = new Array(12).fill(null);

  return (
    <div className="lg:py-[56px] py-12">
      <div className="container">
        <div>
          {/* image */}
          <div className="w-full h-[250px]  lg:h-[603px] rounded-lg overflow-hidden">
            {" "}
            <Image
              src={img}
              alt="img"
              className="w-full scale-125 sm:scale-100 h-full object-cover"
            />
          </div>
          <h4 className="font-roboto pt-5 font-medium pb-4 border-b-2 text-2xl lg:text-[40px] text-primarycolor">
            <span className="text-[#00B047]">Villagio</span> Restaurant & Bar
          </h4>
          <div className="flex lg:flex-row flex-col gap-4 justify-between pt-4 lg:pt-7">
            <div>
              {/* location */}
              <div className="flex items-start gap-4">
                <Image
                  src={location}
                  alt="location"
                  className="w-4 lg:w-7 mt-1"
                />
                <h5 className="max-w-[382px] leading-6 font-normal text-sm lg:text-lg font-kumbh_sans text-thirdcolor">
                  360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865
                  |
                </h5>
              </div>
              {/* rating */}
              <div className="flex items-center pt-4 lg:pt-7 gap-1">
                {stars.map((_, index) => (
                  <IoStar
                    className={`text-[#FFC107] text-lg lg:text-2xl ${
                      index === 4 && "text-[#BEBEBE]"
                    }`}
                    key={index}
                  />
                ))}{" "}
                <span className="font-semibold text-primarycolor text-xl lg:text-3xl">
                  4.3
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <HiBars3 className="text-[#00B047] text-xl hidden xl:block" />
              <p className="lg:text-xl text-sm max-w-[650px] font-kumbh_sans font-normal text-thirdcolor">
                Villagio restaurant and bar has one mission: to provide guests
                with a fine and fresh seafood experience. Featuring seasonal and
                sustainable seafood that is flown in fresh daily, our
                chef-driven menu proves that no matter when you’re dining,
                seafood can be truly exceptional. to provide guests with a fine
                <span className="text-[#00B047] font-roboto font-semibold pl-2 cursor-pointer">
                  Read More...
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* items */}
        <div className="lg:pt-9 pt-6 flex items-center justify-between">
          <h3 className="font-semibold text-secondarycolor capitalize lg:text-4xl text-2xl font-kumbh_sans">
            Items🔥
          </h3>
          <Link href="/allProducts">
            <div className="text-oliveGreen font-normal text-sm lg:text-xl cursor-pointer font-roboto bg-[#D9F3E3] hover:bg-[#b2face] transition py-2 lg:py-3 px-4 lg:px-7 rounded-[70px]">
              See all
            </div>
          </Link>
        </div>
        {/* all item */}
        <div className="lg:pt-14 pt-7 grid grid-cols-3 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 gap-6 min-[400px]:gap-10 lg:gap-4">
          {items?.map((_, index) => (
            <Itemscard key={index} />
          ))}
        </div>
        {/* all product */}
        <div className="lg:pt-14 pt-7 sm:grid-cols-2 grid grid-cols-1 xl:grid-cols-3 gap-5">
          <Itemproduct />
          <Itemproduct />
          <Itemproduct />
          <Itemproduct />
          <Itemproduct />
          <Itemproduct />
        </div>
      </div>
    </div>
  );
};

export default Details;
