// @ts-nocheck
import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ChevronDown, Search } from "react-feather";

import http from "../helpers/http";
import CardViewAll from "../components/CardViewAll";
import SkeletonViewAll from "../components/SkeletonViewAll";

const VIewAll = () => {
  const [dataAllMovies, setDataAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("DESC");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const doSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
  };

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await http().get(
          `/movies?limit=8&sort=${sort}&search=${search}&page=${page}`
        );
        setDataAllMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMovies();
  }, [sort, page, search]);

  return (
    <Fragment>
      <Navbar />

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
                <span className="flex-1">{sort}</span>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={() => setSort("DESC")}>
                  <div>DESC</div>
                </li>
                <li onClick={() => setSort("ASC")}>
                  <div>ASC</div>
                </li>
              </ul>
            </div>
            <div className="flex gap-1 md:w-full cursor-pointer">
              <form onSubmit={doSearch} className="w-full flex gap-2">
                <input
                  disabled={isLoading}
                  type="text"
                  name="search"
                  className="border-2 border-[#DEDEDE] p-2 w-72 rounded-xl md:w-full"
                  placeholder="Search Movie Name ..."
                />
                <button
                  disabled={isLoading}
                  onSubmit={doSearch}
                  className={`btn border-2 bg-primary hover:bg-success p-2 border-primary hover:border-primary rounded-xl md:w-['20%']`}
                >
                  <Search />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="flex ml-24 overflow-x-auto no-scrollbar md:ml-5 lg:ml-10">
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
        </div> */}

        <div className="mx-24 mt-10 gap-5 py-10 flex flex-wrap bg-white justify-center md:mx-0 md:justify-center md:gap-3 lg:mx-10">
          {isLoading ? (
            <div className="flex flex-wrap gap-3 justify-center">
              <SkeletonViewAll />
              <SkeletonViewAll />
              <SkeletonViewAll />
              <SkeletonViewAll />
              <SkeletonViewAll />
              <SkeletonViewAll />
              <SkeletonViewAll />
              <SkeletonViewAll />
            </div>
          ) : dataAllMovies.length === 0 ? (
            <div className="text-xl font-semibold">Movie not found!</div>
          ) : (
            dataAllMovies?.map((item) => (
              <div
                className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-secondary rounded-lg md:mr-0 md:p-2 flex flex-col items-center justify-center lg:w-48 md:w-32"
                key={item.id}
              >
                <CardViewAll data={item} />
              </div>
            ))
          )}
        </div>
        <div className="px-24 mt-10 flex justify-center gap-2">
          <div
            disabled={page <= 1}
            className="btn bg-primary hover:bg-primary"
            onClick={() => prev()}
          >
            Prev
          </div>
          <div
            disabled={dataAllMovies.length === 0}
            className="btn bg-primary hover:bg-primary"
            onClick={() => next()}
          >
            Next
          </div>
        </div>
        {/* <Pagination /> */}
      </div>
      <Footer />
    </Fragment>
  );
};

export default VIewAll;
