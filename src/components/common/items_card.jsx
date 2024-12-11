import Image from "next/image";
import tShirt from "../../app/assets/T Shirt.png";

const Itemscard = () => {
  return (
    <div className="2xl:w-[113px] md:w-full w-[90px] h-[90px] 2xl:h-[113px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-1">
      <Image src={tShirt} alt="tShirt" className="w-8 xl:w-10" />
      <h5 className="xl:text-base text-sm font-medium text-secondarycolor font-figtree capitalize">
        T Shirt
      </h5>
    </div>
  );
};

export default Itemscard;
