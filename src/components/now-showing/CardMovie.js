import React, { Fragment } from "react";
import ButtonSmallPrimary from "../ButtonSmallPrimary";

const CardMovie = (props) => {
  const { data } = props;
  return (
    <Fragment>
      {data?.results?.map((movie) => {
        return (
          <div
            className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-white rounded-lg hover:bg-white hover:border-primary cursor-pointer"
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
              <ButtonSmallPrimary
                name={"Details"}
                link={`/movieDetails/${movie.id}`}
              />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CardMovie;
