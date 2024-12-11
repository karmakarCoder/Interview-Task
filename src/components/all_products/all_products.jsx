import Itemproduct from "../common/item_product";
import Itemscard from "../common/items_card";

const Allproducts = () => {
  let items = new Array(12).fill(null);
  return (
    <div className="lg:py-[56px] py-12">
      <div className="container">
        {/* all item */}
        <div className="grid grid-cols-3 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 gap-6 min-[400px]:gap-10 lg:gap-4">
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

export default Allproducts;
