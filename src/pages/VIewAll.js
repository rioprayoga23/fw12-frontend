// @ts-nocheck
import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import BtnMonth from "../components/filter/BtnMonth";
import CardMovie from "../components/CardMovie";
import axios from "axios";
import Pagination from "../components/now-showing/Pagination";
import { useSelector } from "react-redux";

const VIewAll = () => {
  const [allMovies, setAllMovies] = useState({});
  const token = useSelector((state) => state.auth.token);

  const getAllMovies = async () => {
    const { data } = await axios.get("http://localhost:8888/movies?limit=8");
    setAllMovies(data);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Fragment>
      <Navbar login={token} />

      <div className="bg-secondary pb-10">
        <div className="flex items-center px-24 pt-10 pb-7 md:px-5 lg:px-10 md:flex-col md:items-start">
          <div className="flex-1 font-Mulish font-bold text-xl md:mb-3">
            <h3>List Movie</h3>
          </div>

          <div className="flex items-center gap-5 font-Mulish md:flex-col md:gap-3 md:w-full">
            <div className="dropdown dropdown-bottom dropdown-end md:w-full">
              <div
                tabIndex={0}
                className="border-2 border-[#DEDEDE] bg-white py-2 px-2 w-28 rounded-xl m-1 cursor-pointer flex justify-center items-center md:m-0 md:w-full"
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
            <div className="md:w-full">
              <input
                type="text"
                className="border-2 border-[#DEDEDE] p-2 w-72 rounded-xl md:w-full"
                placeholder="Search Movie Name ..."
              />
            </div>
          </div>
        </div>
        <div className="flex ml-24 overflow-x-auto no-scrollbar md:ml-5 lg:ml-10">
          <BtnMonth status={"active"} month={"September"} />
          <BtnMonth month={"October"} />
          <BtnMonth month={"November"} />
          <BtnMonth month={"December"} />
          <BtnMonth month={"January"} />
          <BtnMonth month={"February"} />
          <BtnMonth month={"March"} />
          <BtnMonth month={"April"} />
          <BtnMonth month={"May"} />
          <BtnMonth month={"June"} />
          <BtnMonth month={"July"} />
          <BtnMonth month={"August"} />
        </div>

        <div className="mx-24 mt-10 gap-5 py-10 flex flex-wrap bg-white justify-center md:mx-0 md:justify-center md:gap-3 lg:mx-10">
          <CardMovie data={allMovies} />
        </div>
        <Pagination />
      </div>
      <Footer />
    </Fragment>
  );
};

export default VIewAll;
