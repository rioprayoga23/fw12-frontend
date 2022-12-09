import React, { Fragment } from "react";

const CardMovie = (props) => {
  const { data, btn } = props;
  const [btnPrimary, btnDanger] = btn;
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
              {btnPrimary}
              {btnDanger && btnDanger}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CardMovie;
