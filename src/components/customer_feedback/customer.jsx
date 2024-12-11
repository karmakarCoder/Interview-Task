import Image from "next/image";
import img from "../../app/assets/customer.png";
import { FaStar } from "react-icons/fa6";

const Customer = () => {
  return (
    <div className="lg:py-6 py-4 border-b-2 flex sm:flex-row flex-col justify-between">
      {/* left */}
      <div>
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="lg:w-[56px] w-[40px] h-[40px] lg:h-[56px] rounded-full overflow-hidden">
            <Image src={img} alt="img" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-poppins font-medium text-sm lg:text-lg text-primarycolor">
              Kristin Watson
            </h4>
            {/* rating */}
            <div className="flex items-center gap-1 text-base lg:text-2xl text-[#EA5326]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        {/* review */}
        <p className="font-poppins font-normal text-[#808080] text-sm lg:text-lg pt-4">
          Duis at ullamcorper nulla, eu dictum eros.
        </p>
      </div>
      {/* right */}
      <div>
        <h5 className="lg:text-lg text-sm font-poppins pt-2 font-normal text-[#999999]">
          2 min ago
        </h5>
      </div>
    </div>
  );
};

export default Customer;
