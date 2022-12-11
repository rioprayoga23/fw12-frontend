import React from "react";
import notFoundIcon from "../assets/img/not found.png";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center py-36 md:flex-col">
      <div>
        <img src={notFoundIcon} alt="" className="w-20" />
      </div>
      <div>
        <p className="font-Mulish text-lg ml-5 md:ml-0 md:mt-3">
          Oops, data not found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
