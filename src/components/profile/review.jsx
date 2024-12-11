import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Breadcrumb from "../breadcrumb/breadcrumb";

const Review = () => {
  return (
    <>
      <Breadcrumb title={"Share Review"} />
      <div className="lg:py-12 py-5">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-40">
            <div className="text-center flex flex-row md:justify-start justify-between md:flex-col items-center w-full md:w-[200px]">
              {" "}
              <h5 className="flex font-medium text-center font-roboto items-center text-2xl lg:text-5xl text-primarycolor">
                4.8 <MdOutlineStarPurple500 />
              </h5>
              <p className="lg:text-2xl text-lg font-normal text-primarycolor font-kumbh_sans pt-2 lg:pt-4">
                1,64,002 Ratings <br /> & <br /> 5,922 Reviews
              </p>
            </div>
            {/* rating proggress */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5 lg:gap-14">
                <div className="flex items-center text-2xl font-bold font-roboto text-yellow-400">
                  1
                  <MdOutlineStarPurple500 />
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <div
                    className="
         lg:w-[500px] xl:w-[613px] w-[200px] h-3 rounded-3xl bg-[#BBBBBB] overflow-hidden"
                  ></div>
                  <div className="absolute top-0 h-full left-0 w-[80%] bg-primarycolor"></div>
                </div>
              </div>
              <div className="flex items-center gap-5 lg:gap-14">
                <div className="flex items-center text-2xl font-bold font-roboto text-yellow-400">
                  2
                  <MdOutlineStarPurple500 />
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <div
                    className="
          lg:w-[500px] xl:w-[613px] w-[200px] h-3 rounded-3xl bg-[#BBBBBB] overflow-hidden"
                  ></div>
                  <div className="absolute top-0 h-full left-0 w-[40%] bg-primarycolor"></div>
                </div>
              </div>
              <div className="flex items-center gap-5 lg:gap-14">
                <div className="flex items-center text-2xl font-bold font-roboto text-yellow-400">
                  3
                  <MdOutlineStarPurple500 />
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <div
                    className="
          lg:w-[500px] xl:w-[613px] w-[200px] h-3 rounded-3xl bg-[#BBBBBB] overflow-hidden"
                  ></div>
                  <div className="absolute top-0 h-full left-0 w-[35%] bg-primarycolor"></div>
                </div>
              </div>
              <div className="flex items-center gap-5 lg:gap-14">
                <div className="flex items-center text-2xl font-bold font-roboto text-yellow-400">
                  4
                  <MdOutlineStarPurple500 />
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <div
                    className="
          lg:w-[500px] xl:w-[613px] w-[200px] h-3 rounded-3xl bg-[#BBBBBB] overflow-hidden"
                  ></div>
                  <div className="absolute top-0 h-full left-0 w-[80%] bg-primarycolor"></div>
                </div>
              </div>
              <div className="flex items-center gap-5 lg:gap-14">
                <div className="flex items-center text-2xl font-bold font-roboto text-yellow-400">
                  5
                  <MdOutlineStarPurple500 />
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <div
                    className="
          lg:w-[500px] xl:w-[613px] w-[200px] h-3 rounded-3xl bg-[#BBBBBB] overflow-hidden"
                  ></div>
                  <div className="absolute top-0 h-full left-0 w-[80%] bg-primarycolor"></div>
                </div>
              </div>
            </div>
          </div>
          {/* rating */}
          <div className="flex pt-10 lg:pt-20 items-center gap-2 text-2xl lg:text-6xl">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />

            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          {/* review */}
          <div className="lg:py-20 py-10">
            <h5 className="font-normal text-xl lg:text-3xl font-kumbh_sans text-primarycolor pb-2 lg:pb-5">
              Please share your opinion about the product
            </h5>
            <textarea
              name=""
              id=""
              placeholder="Your review"
              className="w-full p-3 bg-[#DFE1E3] rounded-md min-h-[250px]"
            ></textarea>
          </div>
          {/* submit button */}
          <button className="w-full font-kumbh_sans font-normal text-base lg:text-xl rounded-lg text-white transition hover:bg-[#2e2e2e] bg-primarycolor  py-3 lg:py-5 text-center">
            SEND REVIEW
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
