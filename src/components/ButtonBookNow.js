import React from "react";
import { Link } from "react-router-dom";

const ButtonBookNow = () => {
  return (
    <Link to="/order">
      <button className="w-full bg-primary py-2 shadow-primary rounded-md text-white">
        Book now
      </button>
    </Link>
  );
};

export default ButtonBookNow;
