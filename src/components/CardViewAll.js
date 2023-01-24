/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardViewAll = ({ data }) => {
  return (
    <Fragment>
      <img
        src={data.picture}
        alt={data.picture}
        className="w-imgMovie h-imgMovie md:w-[90px] md:h-[120px] lg:w-44 lg:h-52"
      />
      <div className="w-full">
        <div className="w-imgMovie text-center md:w-full">
          <p className="text-[#14142B] font-bold text-lg leading-tight mt-5 h-10 font-Mulish md:text-sm md:overflow-hidden md:text-ellipsis">
            {data.title}
          </p>
          <p className="text-sm text-[#A0A3BD] mt-4 h-10 font-OpenSans flex justify-center items-center">
            {data.genre}
          </p>
        </div>
        <Link to={`/movieDetails/${data.id}`}>
          <div className="w-full border-2 border-primary rounded-md text-center py-1 mt-4 font-Mulish text-primary text-sm cursor-pointer">
            Details
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default CardViewAll;
