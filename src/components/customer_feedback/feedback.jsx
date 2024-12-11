import React from "react";
import Customer from "./customer";

const Feedback = () => {
  return (
    <div className="lg:pt-[70px] pt-[40px]">
      <h4 className="font-figtree font-bold text-2xl lg:text-4xl text-primarycolor">
        Customer Feedback
      </h4>
      {/* customer */}
      <Customer />
      <Customer />
      <Customer />
      <Customer />
    </div>
  );
};

export default Feedback;
