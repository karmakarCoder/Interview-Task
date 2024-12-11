import Image from "next/image";
import couponBg from "../../app/assets/coupon.png";
const Couponcard = () => {
  return (
    <div className="py-9">
      <div className="container">
        <h3 className="font-figtree pb-4 lg:pb-9 font-bold text-primarycolor lg:text-4xl text-2xl">
          Coupon Cards
        </h3>

        <div className="relative">
          <Image src={couponBg} alt="couponBg" />
          <div className="absolute sm:left-[102px] left-[39px] xl:left-[180px] top-[50%] -translate-y-[50%]">
            <h4 className="font-figtree font-normal text-oliveGreen xl:text-7xl lg:text-4xl text-lg">
              Price
            </h4>
            <h4 className="font-figtree lg:pt-4 font-bold text-btnColor xl:text-7xl lg:text-4xl text-lg">
              $ 10.99
            </h4>
          </div>
          <div className="absolute sm:right-[136px] right-[35px] xl:right-[200px] 2xl:right-[284px] top-[50%] -translate-y-[50%]">
            <h4 className="font-figtree font-bold text-secondarycolor xl:text-6xl lg:text-4xl text-lg">
              Single Discount
            </h4>
            <h4 className="font-figtree lg:pt-5 font-medium text-[#727272] xl:text-4xl lg:text-4xl text-xs">
              Customer takes 6 discount
            </h4>
          </div>
        </div>
        <div className="relative">
          <Image src={couponBg} alt="couponBg" />
          <div className="absolute sm:left-[102px] left-[39px] xl:left-[180px] top-[50%] -translate-y-[50%]">
            <h4 className="font-figtree font-normal text-oliveGreen xl:text-7xl lg:text-4xl text-lg">
              Price
            </h4>
            <h4 className="font-figtree lg:pt-4 font-bold text-btnColor xl:text-7xl lg:text-4xl text-lg">
              $ 34.99
            </h4>
          </div>
          <div className="absolute sm:right-[136px] right-[16px] xl:right-[180px] 2xl:right-[228px] top-[50%] -translate-y-[50%]">
            <h4 className="font-figtree font-bold text-secondarycolor xl:text-6xl lg:text-4xl text-lg">
              Unlimited Discount
            </h4>
            <h4 className="font-figtree md:hidden text-nowrap text-ellipsis overflow-hidden w-[178px] lg:pt-5 font-medium text-[#727272] xl:text-4xl lg:text-2xl text-xs">
              Customer get unlimited discount <br /> in one month
            </h4>
            <h4 className="font-figtree hidden md:block lg:pt-5 font-medium text-[#727272] xl:text-4xl lg:text-2xl text-base">
              Customer get unlimited discount <br /> in one month
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couponcard;
