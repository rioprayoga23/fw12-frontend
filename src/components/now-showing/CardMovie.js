/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ data }) => {
  return (
    <Fragment>
      <img src={data.picture} alt="" className="w-imgMovie h-imgMovie" />
      <div className="hidden group-hover:block">
        <div className="w-imgMovie text-center">
          <p className="text-[#14142B] font-bold text-lg leading-tight mt-5 font-Mulish">
            {data.title}
          </p>
          <p className="text-sm text-[#A0A3BD] mt-1 font-OpenSans">
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

export default CardMovie;
