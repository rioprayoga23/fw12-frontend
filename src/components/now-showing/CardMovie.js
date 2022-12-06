import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const { data } = props;
  return (
    <Fragment>
      {data?.results?.map((movie) => {
        return (
          <Fragment>
            <div
              className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-white rounded-lg hover:bg-white hover:border-secondary hover:shadow-md"
              key={String(movie.id)}
            >
              <img
                src={`http://localhost:8888/uploads/${movie.picture}`}
                alt=""
                className="w-imgMovie h-imgMovie"
              />
              <div className="hidden group-hover:block">
                <div className="w-imgMovie text-center">
                  <p className="text-[#14142B] font-bold text-lg leading-tight mt-5 font-Mulish">
                    {movie.title}
                  </p>
                  <p className="text-sm text-[#A0A3BD] mt-1 font-OpenSans">
                    {movie.genre}
                  </p>
                </div>
                <Link to="/movie-details">
                  <div className="w-full border-2 border-primary rounded-md text-center py-1 mt-5 font-Mulish text-primary text-sm cursor-pointer">
                    Details
                  </div>
                </Link>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CardMovie;
