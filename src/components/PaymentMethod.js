import React from "react";

const PaymentMethod = ({ image }) => {
  return (
    <div className="border-2 border-[#DEDEDE] flex justify-center items-center py-2 rounded-lg cursor-pointer">
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default PaymentMethod;
