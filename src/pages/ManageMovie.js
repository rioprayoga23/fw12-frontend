import React, { Fragment, useEffect, useState } from "react";
import CardMovieDetail from "../components/CardMovieDetail";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import axios from "axios";

import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import CardMovieAdmin from "../components/CardMovieAdmin";
import Footer from "../components/Footer";
import Pagination from "../components/now-showing/Pagination";
import NavbarAdmin from "../components/NavbarAdmin";
import ButtonMediumPrimary from "../components/ButtonMediumPrimary";
import ButtonMediumOutline from "../components/ButtonMediumOutline";

const ManageMovie = () => {
  const [allMovies, setAllMovies] = useState({});

  const getAllMovies = async () => {
    const { data } = await axios.get("http://localhost:8888/movies?limit=8");
    setAllMovies(data);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Fragment>
      <NavbarAdmin />
      <div className="bg-secondary px-24 py-16 font-Mulish pb-10 md:px-5 lg:px-10s">
        <h3 className="text-xl font-bold mb-6">Form Movie</h3>
        <div className="bg-white">
          <div className="flex p-10 gap-10 md:flex-col lg:flex-col lg:items-center">
            <div>
              <CardMovieDetail />
            </div>
            <div className="w-full flex-1">
              <div className="flex gap-10 md:flex-col md:gap-0">
                <div className="flex flex-col flex-1">
                  <FormLabel for={"movieName"} name="Movie Name" />
                  <FormInput
                    id={"movieName"}
                    type={"text"}
                    name={"movieName"}
                    placeholder={"Spider-Man: Homecoming"}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <FormLabel for={"category"} name="Category" />
                  <FormInput
                    id={"category"}
                    type={"text"}
                    name={"category"}
                    placeholder={"Action, Adventure, Sci-Fi"}
                  />
                </div>
              </div>
              <div className="flex gap-10 md:flex-col md:gap-0">
                <div className="flex flex-col flex-1">
                  <FormLabel for={"director"} name="Director" />
                  <FormInput
                    id={"director"}
                    type={"text"}
                    name={"director"}
                    placeholder={"Jon Watts"}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <FormLabel for={"cast"} name="Cast" />
                  <FormInput
                    id={"cast"}
                    type={"text"}
                    name={"cast"}
                    placeholder={"Tom Holland, Michael Keaton, Robert Dow.."}
                  />
                </div>
              </div>
              <div className="flex gap-10 md:flex-col md:gap-0">
                <div className="flex flex-col flex-1">
                  <FormLabel for={"releaseDate"} name="Release Date" />
                  <FormInput
                    id={"releaseDate"}
                    type={"date"}
                    name={"releaseDate"}
                    placeholder={"07/05/2020"}
                  />
                </div>
                <div className="flex flex-1 gap-4 md:flex-col md:gap-0">
                  <div className="flex flex-col flex-1 w-20 md:w-full">
                    <FormLabel for={"durationHour"} name="Duration Hour" />
                    <FormInput
                      id={"durationHour"}
                      type={"text"}
                      name={"durationHour"}
                      placeholder={"2"}
                    />
                  </div>
                  <div className="flex flex-col flex-1 w-20 md:w-full">
                    <FormLabel for={"durationMinute"} name="Duration Minute" />
                    <FormInput
                      id={"durationMinute"}
                      type={"text"}
                      name={"durationMinute"}
                      placeholder={"15"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 md:px-5">
            <h3 className="font-semibold mb-5">Synopsis</h3>
            <div className="bg-[#FCFDFE] px-8 py-5 rounded-md border border-[##DEDEDE] md:px-2">
              <p className="leading-8">
                Thrilled by his experience with the Avengers, Peter returns
                home, where he lives with his Aunt May, Thrilled by his
                experience with the Avengers, Peter returns home, where he lives
                with his Aunt May, |
              </p>
            </div>
          </div>

          <div className="flex gap-5 justify-end px-10 mt-10 pb-10 md:px-5 md:flex-col">
            <div className="w-[150px] md:w-full">
              <ButtonMediumOutline name={"Reset"} />
            </div>
            <div className="w-[150px] md:w-full">
              <ButtonMediumPrimary name={"Submit"} />
            </div>
          </div>
        </div>

        <div className="flex items-center pt-10 pb-7 md:flex-col md:items-start">
          <div className="flex-1 font-Mulish font-bold text-xl">
            <h3>Data Movie</h3>
          </div>
          <div className="flex items-center gap-5 font-Mulish md:flex-col md:gap-3 md:mt-5">
            <div className="dropdown dropdown-bottom dropdown-end md:w-full">
              <div
                tabIndex={0}
                className="border-2 border-[#DEDEDE] bg-white py-2 px-2 w-28 rounded-xl m-1 cursor-pointer flex justify-center items-center md:w-full md:justify-start md:items-start md:m-0"
              >
                <span className="flex-1">Sort</span>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/viewAll">Popular</Link>
                </li>
                <li>
                  <Link to="/viewAll">Z-A</Link>
                </li>
              </ul>
            </div>
            <div>
              <input
                type="text"
                className="border-2 border-[#DEDEDE] p-2 w-72 rounded-xl"
                placeholder="Search Movie Name ..."
              />
            </div>
          </div>
        </div>
        <div className="gap-5 py-10 flex flex-wrap bg-white justify-center md:gap-0">
          <CardMovieAdmin data={allMovies} />
        </div>
        <Pagination />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ManageMovie;
