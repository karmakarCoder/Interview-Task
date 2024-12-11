import Image from "next/image";
import React from "react";
import img from "../../app/assets/discount.png";

const Servicecard = ({ title, slogan, image }) => {
  return (
    <div className="flex font-inter items-center gap-x-3">
      <div>
        <Image src={image ? image : img} alt="img" />
      </div>
      <div>
        <h3 className="font-medium text-sm lg:text-base text-[#272343]">
          {title}
        </h3>
        <p className="text-xs font-normal text-[#9A9CAA]">{slogan}</p>
      </div>
    </div>
  );
};

export default Servicecard;
