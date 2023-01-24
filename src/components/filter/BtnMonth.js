/* eslint-disable react/prop-types */
import React from "react";
const BtnMonth = (props) => {
  return (
    <div>
      {props.status === "active" ? (
        <div className="bg-primary border-2 border-primary py-2 w-32 text-center rounded-md text-white font-Mulish shadow-md cursor-pointer mr-3">
          {props.month}
        </div>
      ) : (
        <div className="py-2 w-32 text-center rounded-md text-primary border-2 border-primary font-Mulish shadow-md cursor-pointer mr-3">
          {props.month}
        </div>
      )}
    </div>
  );
};

export default BtnMonth;
