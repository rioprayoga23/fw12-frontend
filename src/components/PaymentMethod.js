import React from "react";

const PaymentMethod = ({ data }) => {
  return (
    <div>
      <img src={data.picture} alt={data.picture} />
    </div>
  );
};

export default PaymentMethod;
