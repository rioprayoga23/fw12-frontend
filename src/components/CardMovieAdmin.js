import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const { data } = props;

  return (
    <Fragment>
      {data?.results?.map((movie) => {
        return (
          <div
            className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-secondary rounded-lg md:mr-0 md:w-32 md:p-2 flex flex-col items-center justify-center lg:w-48 lg:mr-0 md:m-2"
            key={String(movie.id)}
          >
            <img
              src={`http://localhost:8888/uploads/${movie.picture}`}
              alt=""
              className="w-imgMovie h-imgMovie md:w-28 md:h-36 lg:w-44 lg:h-52"
            />
            <div className="">
              <div className="w-imgMovie text-center md:w-full">
                <p className="text-[#14142B] font-bold text-lg leading-tight mt-5 h-10 font-Mulish md:text-sm md:overflow-hidden md:text-ellipsis">
                  {movie.title}
                </p>
                <p className="text-sm text-[#A0A3BD] mt-1 h-10 font-OpenSans flex items-center justify-center md:h-16">
                  {movie.genre}
                </p>
              </div>
              <Link to={`/updateMovie/${movie.id}`}>
                <div className="w-full border-2 border-primary rounded-md text-center py-1 mt-4 font-Mulish text-primary text-sm cursor-pointer">
                  Update
                </div>
              </Link>
              <Link to={`/deleteMovie/${movie.id}`}>
                <div className="w-full border-2 border-red-500 rounded-md text-center py-1 mt-4 font-Mulish text-primary text-sm cursor-pointer">
                  Delete
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
