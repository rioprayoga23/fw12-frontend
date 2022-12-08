import React from "react";
import { Link } from "react-router-dom";

const ButtonSmallOutline = ({ name, link }) => {
  return (
    <Link to={`${link}`}>
      <div className="w-full border-2 border-red-500 rounded-md text-center py-1 mt-4 font-Mulish text-red-500 text-sm cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default ButtonSmallOutline;
