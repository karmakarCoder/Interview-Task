import Link from "next/link";
import imgfood from "../../app/assets/food.png";
import Image from "next/image";

const Productcard = () => {
  return (
    <Link href="/productDetails">
      <div className="xl:w-[400px] lg:w-[300px] w-full">
        {/* img */}
        <div className="lg:h-[286px] h-[240px] w-full rounded-3xl overflow-hidden pb-2">
          <Image
            src={imgfood}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
        {/* name */}
        <h5 className="font-figtree font-medium text-lg lg:text-xl text-primarycolor">
          Skateboard Shoe
        </h5>
        {/* price */}
        <p className="text-sm lg:text-base font-inter font-normal text-primarycolor">
          $125
        </p>
      </div>
    </Link>
  );
};
export default Productcard;
