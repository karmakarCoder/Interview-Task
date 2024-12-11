import Image from "next/image";
import bg from "../../app/assets/breadcrumbBg.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

const Breadcrumb = ({ title }) => {
  return (
    <div>
      <div className="relative">
        <Image src={bg} alt="bg" className="lg:h-[100px] h-[70px]" />
        <div className="container text-white flex items-center gap-1 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <IoHomeOutline className="lg:text-xl text-lg" />
          <MdChevronRight className="lg:text-xl text-lg" />
          <p className="font-poppins capitalize pt-1 font-normal text-sm lg:text-base text-[#EB2926]">
            {title ? title : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
