import React from "react";
import { Link } from "react-router-dom";

const ButtonSmallPrimary = ({ name, link }) => {
  return (
    <Link to={`${link}`}>
      <div className="w-full border-2 border-primary rounded-md text-center py-1 mt-4 font-Mulish text-primary text-sm cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default ButtonSmallPrimary;
