import Productcard from "../common/product_card";

const Products = () => {
  return (
    <div className="lg:pt-9 pt-4 pb-10 lg:pb-20">
      <div className="container">
        <div>
          <h3 className="font-figtree pb-6 font-bold text-3xl lg:text-[40px] text-primarycolor">
            Products
          </h3>
          {/* all product */}
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-9 xl:gap-6 gap-6">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
