import React from "react";
import { Link } from "react-router-dom";

import Spidermen from "../../assets/img/spidermen.png";

const CardMovie = (props) => {
  return (
    <div className="group flex-shrink-0 h-fit p-6 border-2 border-white rounded-lg hover:bg-white hover:border-secondary hover:shadow-md">
      <img src={Spidermen} alt="" className="w-imgMovie h-imgMovie" />
      <div className="hidden group-hover:block">
        <div className="w-imgMovie text-center">
          <p className="text-[#14142B] font-bold text-lg leading-tight mt-5 font-Mulish">
            Spider-Man: Homecoming
          </p>
          <p className="text-sm text-[#A0A3BD] mt-1 font-OpenSans">
            Acion, Adventure, Sci-FI
          </p>
        </div>
        <Link to="/movie-details">
          <div className="w-full border-2 border-primary rounded-md text-center py-1 mt-5 font-Mulish text-primary text-sm cursor-pointer">
            Details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardMovie;
