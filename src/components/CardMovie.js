import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const { data } = props;
  return (
    <Fragment>
      {data?.results?.map((movie) => {
        return (
          <div
            className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-secondary rounded-lg"
            key={String(movie.id)}
          >
            <img
              src={`http://localhost:8888/uploads/${movie.picture}`}
              alt=""
              className="w-imgMovie h-imgMovie"
            />
            <div className="">
              <div className="w-imgMovie text-center">
                <p className="text-[#14142B] font-bold text-lg leading-tight mt-5 h-10 font-Mulish">
                  {movie.title}
                </p>
                <p className="text-sm text-[#A0A3BD] mt-1 h-10 font-OpenSans flex items-center justify-center">
                  {movie.genre}
                </p>
              </div>
              <Link to="/movieDetails">
                <div className="w-full border-2 border-primary rounded-md text-center py-1 mt-4 font-Mulish text-primary text-sm cursor-pointer">
                  Details
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CardMovie;
