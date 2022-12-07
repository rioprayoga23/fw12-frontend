import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import BtnMonth from "../components/filter/BtnMonth";
import CardMovie from "../components/CardMovie";
import axios from "axios";

const VIewAll = () => {
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
      <Navbar />
      <div className="bg-secondary pb-10">
        <div className="flex items-center px-24 pt-10 pb-7">
          <div className="flex-1 font-Mulish font-bold text-xl">
            <h3>List Movie</h3>
          </div>
          <div className="flex items-center gap-5 font-Mulish">
            <div
              className="dropdown dropdown-bottom dropdown-end border-2 border-[#DEDEDE] bg-white py-2 px-2 w-28 rounded-xl flex"
              tabIndex={0}
            >
              <label className="flex-1">Sort</label>
              <label>{<ChevronDown />}</label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="">Genre</Link>
                </li>
                <li>
                  <Link to="">Z-A</Link>
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
        <div className="flex ml-24 overflow-x-auto no-scrollbar">
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

        <div className="mx-24 mt-10 gap-5 py-10 flex flex-wrap bg-white justify-center">
          <CardMovie data={allMovies} />
        </div>
        <div className="px-24 mt-10 flex justify-center">
          <div className="flex gap-2">
            <button className="py-2 px-4 bg-primary rounded-md text-white">
              1
            </button>
            <button className="py-2 px-4 bg-white rounded-md">2</button>
            <button className="py-2 px-4 bg-white rounded-md">3</button>
            <button className="py-2 px-4 bg-white rounded-md">4</button>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default VIewAll;
