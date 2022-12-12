// @ts-nocheck

import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, MapPin } from "react-feather";
import { Link, useParams } from "react-router-dom";
import ShowtimeCinema from "../components/ShowtimeCinema";
import CardMovieDetail from "../components/CardMovieDetail";
import axios from "axios";
import NotFound from "../components/NotFound";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const token = useSelector((state) => state.auth.token);

  const { id } = useParams();

  const getMovieDetails = async () => {
    const { data } = await axios.get(`http://localhost:8888/movies/${id}`);
    setMovieDetails(data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <Fragment>
      <Navbar login={token} />

      {movieDetails.results ? (
        <Fragment>
          <div className="px-24 flex mt-10 gap-10 pb-14 font-Mulish md:px-5 md:flex-col lg:px-10">
            <div className="md:flex md:justify-center md:items-center">
              <CardMovieDetail img={movieDetails.results.picture} />
            </div>
            <div className="flex flex-col flex-1 md:w-full">
              <div className="mb-5 md:w-full">
                <h1 className="text-2xl font-bold mb-2 md:text-xl">
                  {movieDetails.results.title}
                </h1>
                <p className="font-medium">{movieDetails.results.genre}</p>
              </div>
              <div className="flex gap-12 md:flex-col md:gap-4">
                <div>
                  <div className="mb-7 md:mb-4">
                    <h5 className="text-[#8692A6] text-sm mb-1">
                      Release date
                    </h5>
                    <h4>
                      {new Date(movieDetails.results.releaseDate)
                        .toLocaleDateString("default", { month: "long" })
                        .concat(
                          " ",
                          new Date(movieDetails.results.releaseDate)
                            .getDate()
                            .toString(),
                          ","
                        )
                        .concat(
                          " ",
                          new Date(movieDetails.results.releaseDate)
                            .getFullYear()
                            .toString()
                        )}
                    </h4>
                  </div>
                  <div>
                    <h5 className="text-[#8692A6] text-sm mb-1">Duration</h5>
                    <h4>{`${movieDetails.results.hours} hours ${movieDetails.results.minutes} minutes`}</h4>
                  </div>
                </div>
                <div>
                  <div className="mb-7 md:mb-4">
                    <h5 className="text-[#8692A6] text-sm mb-1">Directed by</h5>
                    <h4>{movieDetails.results.director}</h4>
                  </div>
                  <div>
                    <h5 className="text-[#8692A6] text-sm mb-1">Casts</h5>
                    <h4>{movieDetails.results.casts}</h4>
                  </div>
                </div>
              </div>
              <div className="w-full border-b-2 my-5"></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Synopsis</h3>
                <p className="text-[#4E4B66]">
                  {movieDetails.results.synopsis}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary px-24 flex flex-col items-center pb-10 font-Mulish md:items-start md:px-5">
            <div className="pt-10 pb-5 text-xl font-semibold">
              Showtimes and Tickets
            </div>
            <div className="flex gap-5 md:flex-col md:w-full">
              <input
                type="date"
                className="bg-[#EFF0F6] border-2 border-[#DEDEDE] rounded-xl w-56 px-2 md:w-full focus:outline-none md:py-2"
              />
              <div
                className="dropdown dropdown-bottom dropdown-end border-2 border-[#DEDEDE] bg-[#EFF0F6] py-2 px-2 w-56 rounded-xl flex md:w-full"
                tabIndex={0}
              >
                <label>{<MapPin />}</label>
                <label className="flex-1 mx-2">Locations</label>
                <label>{<ChevronDown />}</label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 m-1"
                >
                  <li>
                    <Link to="">Bandung</Link>
                    <Link to="">Jakarta</Link>
                    <Link to="">Semarang</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap bg-secondary px-24 pb-10 gap-5 justify-center md:px-5 lg:px-10">
            <ShowtimeCinema />
            <ShowtimeCinema />
            <ShowtimeCinema />
            <ShowtimeCinema />
            <ShowtimeCinema />
            <ShowtimeCinema />
          </div>
          <div className="flex bg-secondary justify-center items-center px-24 gap-1 pb-20 md:px-5">
            <div className="h-[2px] bg-[#DEDEDE] w-full"></div>
            <Link to="">
              <div className="w-48 text-center text-primary font-semibold md:w-28">
                view more
              </div>
            </Link>
            <div className="h-[2px] bg-[#DEDEDE] w-full"></div>
          </div>
        </Fragment>
      ) : (
        <NotFound />
      )}
      <Footer />
    </Fragment>
  );
};

export default MovieDetails;
