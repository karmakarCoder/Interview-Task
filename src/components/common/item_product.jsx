import Image from "next/image";
import productImg from "../../app/assets/t-shirt.png";
import Link from "next/link";

const Itemproduct = () => {
  return (
    <div className="2xl:w-[490px] w-full xl:w-[400px] bg-white shadow-lg overflow-hidden rounded-2xl">
      <Link href="/productDetails">
        {/* img */}
        <div className="w-full h-[160px] lg:h-[220px]">
          <Image
            src={productImg}
            alt="productImg"
            className="w-full h-full object-cover"
          />
        </div>
        {/* details */}
        <div className="lg:py-9 py-5 pl-5 lg:pl-9 flex items-center pr-4 justify-between">
          <div>
            <h5 className="2xl:text-3xl text-lg xl:text-2xl font-medium text-secondarycolor font-kumbh_sans">
              Long Sleeve T-Shirt
            </h5>
            <p className="font-poppins max-w-[260px] text-ellipsis overflow-hidden text-nowrap font-normal text-sm xl:text-base 2xl:text-lg pt-1 text-[#494C61]">
              Delicouse tackos, appetizing...
            </p>
          </div>
          <span className="font-figtree font-semibold text-lg xl:text-2xl 2xl:text-3xl">
            $45.5
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Itemproduct;
